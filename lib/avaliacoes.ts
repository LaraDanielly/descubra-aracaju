export interface Avaliacao {
  id: string;
  ponto_slug: string;
  nome: string;
  nota: number;
  comentario: string;
  created_at: string;
}

export type PersistenciaAvaliacoes = "supabase" | "local";

const chaveLocal = (slug: string) => `descubra-aracaju:avaliacoes:${slug}`;

function lerLocal(slug: string): Avaliacao[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(chaveLocal(slug)) ?? "[]");
  } catch {
    return [];
  }
}

function gravarLocal(slug: string, avaliacoes: Avaliacao[]) {
  window.localStorage.setItem(chaveLocal(slug), JSON.stringify(avaliacoes));
}

/** Ordena da melhor para a pior nota; empate resolve pela mais recente. */
export function ordenarAvaliacoes(avaliacoes: Avaliacao[]): Avaliacao[] {
  return [...avaliacoes].sort(
    (a, b) =>
      b.nota - a.nota ||
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export async function persistenciaAvaliacoes(): Promise<PersistenciaAvaliacoes> {
  try {
    const res = await fetch("/api/avaliacoes");
    if (!res.ok) return "local";
    const data = (await res.json()) as { persistencia?: PersistenciaAvaliacoes };
    return data.persistencia === "supabase" ? "supabase" : "local";
  } catch {
    return "local";
  }
}

export async function listarAvaliacoes(slug: string): Promise<Avaliacao[]> {
  try {
    const res = await fetch(
      `/api/avaliacoes?slug=${encodeURIComponent(slug)}`
    );
    if (res.status === 503) return ordenarAvaliacoes(lerLocal(slug));
    if (!res.ok) throw new Error("fetch_failed");
    const data = (await res.json()) as { avaliacoes?: Avaliacao[] };
    return data.avaliacoes ?? [];
  } catch {
    return ordenarAvaliacoes(lerLocal(slug));
  }
}

export async function enviarAvaliacao(entrada: {
  ponto_slug: string;
  nome: string;
  nota: number;
  comentario: string;
}): Promise<{ avaliacao: Avaliacao; persistencia: PersistenciaAvaliacoes }> {
  const nova: Avaliacao = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...entrada,
  };

  try {
    const res = await fetch("/api/avaliacoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entrada),
    });
    if (res.status === 503) {
      gravarLocal(entrada.ponto_slug, [...lerLocal(entrada.ponto_slug), nova]);
      return { avaliacao: nova, persistencia: "local" };
    }
    if (!res.ok) throw new Error("post_failed");
    const data = (await res.json()) as {
      avaliacao: Avaliacao;
      persistencia: PersistenciaAvaliacoes;
    };
    return data;
  } catch {
    gravarLocal(entrada.ponto_slug, [...lerLocal(entrada.ponto_slug), nova]);
    return { avaliacao: nova, persistencia: "local" };
  }
}
