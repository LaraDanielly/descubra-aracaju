import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { ordenarAvaliacoes, type Avaliacao } from "@/lib/avaliacoes";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;
if (url && anonKey) {
  supabase = createClient(url, anonKey);
}

export const supabaseConfigurado = Boolean(supabase);

export async function listarAvaliacoesServer(
  slug: string
): Promise<Avaliacao[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("avaliacoes")
    .select("*")
    .eq("ponto_slug", slug)
    .order("nota", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function enviarAvaliacaoServer(entrada: {
  ponto_slug: string;
  nome: string;
  nota: number;
  comentario: string;
}): Promise<Avaliacao> {
  if (!supabase) throw new Error("supabase_not_configured");
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

export { ordenarAvaliacoes };
