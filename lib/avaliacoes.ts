import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export interface Avaliacao {
  id: string;
  ponto_slug: string;
  nome: string;
  nota: number;
  comentario: string;
  created_at: string;
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;
if (url && anonKey) {
  supabase = createClient(url, anonKey);
}

export const usandoSupabase = Boolean(supabase);

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

export async function listarAvaliacoes(slug: string): Promise<Avaliacao[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from("avaliacoes")
      .select("*")
      .eq("ponto_slug", slug)
      .order("nota", { ascending: false })
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data ?? [];
  }
  return ordenarAvaliacoes(lerLocal(slug));
}

export async function enviarAvaliacao(entrada: {
  ponto_slug: string;
  nome: string;
  nota: number;
  comentario: string;
}): Promise<Avaliacao> {
  const nova: Avaliacao = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...entrada,
  };

  if (supabase) {
    const { data, error } = await supabase
      .from("avaliacoes")
      .insert({
        ponto_slug: entrada.ponto_slug,
        nome: entrada.nome,
        nota: entrada.nota,
        comentario: entrada.comentario,
      })
      .select()
      .single();
    if (error) throw error;
    return data as Avaliacao;
  }

  gravarLocal(entrada.ponto_slug, [...lerLocal(entrada.ponto_slug), nova]);
  return nova;
}
