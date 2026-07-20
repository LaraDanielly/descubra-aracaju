import { GoogleGenAI } from "@google/genai";
import {
  contextoGuia,
  validarMensagensChat,
} from "@/lib/chat-context";
import {
  buscarClima,
  extrairLugarClima,
  formatarClima,
} from "@/lib/clima";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { routing } from "@/i18n/routing";

export const runtime = "nodejs";

const CHAT_RATE = { limit: 20, windowMs: 60_000 } as const;

function localeValido(locale: string | undefined): string {
  if (locale && routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return locale;
  }
  return routing.defaultLocale;
}

export async function POST(req: Request) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return Response.json(
      { error: "missing_key", message: "GEMINI_API_KEY not configured" },
      { status: 503 }
    );
  }

  const ip = clientIp(req);
  const limited = rateLimit(`chat:${ip}`, CHAT_RATE.limit, CHAT_RATE.windowMs);
  if (!limited.ok) {
    return Response.json(
      { error: "rate_limited", retryAfter: limited.retryAfter },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  let body: {
    messages?: { role: string; content: string }[];
    locale?: string;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const locale = localeValido(body.locale);
  const messages = body.messages ?? [];
  const validationError = validarMensagensChat(messages);
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const last = messages.filter((m) => m.role === "user").at(-1)!.content;

  let climaBloco = "";
  const lugarClima = extrairLugarClima(last);
  if (lugarClima) {
    try {
      const clima = await buscarClima(lugarClima, locale);
      if (clima) {
        climaBloco = `\n\n[DADOS DE CLIMA EM TEMPO REAL]\n${formatarClima(clima, locale)}\nUse esses números na resposta se a pergunta for sobre tempo/clima.`;
      }
    } catch {
      /* segue sem clima */
    }
  }

  const history = messages.slice(0, -1).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const ai = new GoogleGenAI({ apiKey: key });
  try {
    const stream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: [
        ...history,
        { role: "user", parts: [{ text: last + climaBloco }] },
      ],
      config: {
        systemInstruction: contextoGuia(locale, last),
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) controller.enqueue(encoder.encode(text));
          }
        } catch (err) {
          controller.error(err);
          return;
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message =
      err instanceof Error &&
      "status" in err &&
      (err as { status?: number }).status === 429
        ? "quota_exceeded"
        : "api_error";
    return Response.json({ error: message }, { status: 502 });
  }
}

export async function GET() {
  return Response.json({
    configured: Boolean(process.env.GEMINI_API_KEY),
  });
}
