import { GoogleGenAI } from "@google/genai";
import { PONTOS, resolverPonto } from "@/data/pontos";
import {
  buscarClima,
  extrairLugarClima,
  formatarClima,
} from "@/lib/clima";

export const runtime = "nodejs";

function contextoGuia(locale: string) {
  const pontos = PONTOS.map((p) => resolverPonto(p, locale))
    .map(
      (p) =>
        `- ${p.nome} (${p.cidade}, ${p.categoria}): nota ${p.notaGoogle} (${p.avaliacoesGoogle} no Google). ${p.resumo} Melhor transporte: ${p.melhorTransporte} — ${p.melhorTransporteMotivo}. Uber da Orla: ${p.uberDaOrla}. Preço: ${p.preco}. Horário: ${p.horario}. Slug: /ponto/${p.slug}`
    )
    .join("\n");

  return `Você é o Caju, assistente de suporte e guia do site Descubra Aracaju. Fala de forma direta e concreta, sem marketing genérico e sem emojis em excesso.
Idioma da resposta: ${locale === "en" ? "English" : locale === "es" ? "Spanish" : "português brasileiro"}.
Você ajuda com: lugares, transporte, comida, hotéis e também clima (quando houver dados de clima no histórico, use-os).
Fatos fixos:
- Ônibus em Aracaju não aceita dinheiro: só cartão Mais Aracaju, tarifa R$ 4,50.
- São Cristóvão fica a ~25 km; Praça São Francisco = UNESCO 2010.
- Aracaju fundada em 17/03/1855 (tabuleiro de Pirro).
- Quando citar um lugar do guia, mencione /ponto/{slug}.
Dados dos lugares:
${pontos}`;
}

export async function POST(req: Request) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return Response.json(
      { error: "missing_key", message: "GEMINI_API_KEY not configured" },
      { status: 503 }
    );
  }

  let body: { messages?: { role: string; content: string }[]; locale?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const locale = body.locale ?? "pt";
  const messages = body.messages ?? [];
  const last = messages.filter((m) => m.role === "user").at(-1)?.content;
  if (!last) {
    return Response.json({ error: "empty" }, { status: 400 });
  }

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
        systemInstruction: contextoGuia(locale),
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
