import {
  enviarAvaliacaoServer,
  listarAvaliacoesServer,
  supabaseConfigurado,
} from "@/lib/avaliacoes-server";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const LIMITS = {
  listPerMinute: 60,
  postPerHour: 5,
} as const;

function validarEntrada(body: unknown):
  | { ok: true; data: { ponto_slug: string; nome: string; nota: number; comentario: string } }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "invalid_body" };
  const b = body as Record<string, unknown>;
  const ponto_slug = typeof b.ponto_slug === "string" ? b.ponto_slug.trim() : "";
  const nome = typeof b.nome === "string" ? b.nome.trim() : "";
  const comentario =
    typeof b.comentario === "string" ? b.comentario.trim() : "";
  const nota = b.nota;

  if (!ponto_slug || ponto_slug.length > 80) {
    return { ok: false, error: "invalid_slug" };
  }
  if (!nome || nome.length > 60) return { ok: false, error: "invalid_name" };
  if (!comentario || comentario.length > 1000) {
    return { ok: false, error: "invalid_comment" };
  }
  if (typeof nota !== "number" || !Number.isInteger(nota) || nota < 1 || nota > 5) {
    return { ok: false, error: "invalid_rating" };
  }

  return { ok: true, data: { ponto_slug, nome, nota, comentario } };
}

export async function GET(req: Request) {
  const ip = clientIp(req);
  const limited = rateLimit(`avaliacoes:get:${ip}`, LIMITS.listPerMinute, 60_000);
  if (!limited.ok) {
    return Response.json(
      { error: "rate_limited", retryAfter: limited.retryAfter },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  const slug = new URL(req.url).searchParams.get("slug")?.trim();
  if (!slug) {
    return Response.json({
      persistencia: supabaseConfigurado ? "supabase" : "local",
    });
  }

  if (!supabaseConfigurado) {
    return Response.json(
      { persistencia: "local", avaliacoes: [] },
      { status: 503 }
    );
  }

  try {
    const avaliacoes = await listarAvaliacoesServer(slug);
    return Response.json({ persistencia: "supabase", avaliacoes });
  } catch {
    return Response.json({ error: "database_error" }, { status: 502 });
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const limited = rateLimit(`avaliacoes:post:${ip}`, LIMITS.postPerHour, 3_600_000);
  if (!limited.ok) {
    return Response.json(
      { error: "rate_limited", retryAfter: limited.retryAfter },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  if (!supabaseConfigurado) {
    return Response.json({ persistencia: "local" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = validarEntrada(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const avaliacao = await enviarAvaliacaoServer(parsed.data);
    return Response.json({ persistencia: "supabase", avaliacao });
  } catch {
    return Response.json({ error: "database_error" }, { status: 502 });
  }
}
