import { PONTOS, resolverPonto } from "@/data/pontos";

export type ResultadoBusca = {
  slug: string;
  nome: string;
  resumo: string;
};

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function totalPontos(): number {
  return PONTOS.length;
}

export function mapaNomes(locale: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const p of PONTOS) {
    map[p.slug] = resolverPonto(p, locale).nome;
  }
  return map;
}

export function buscarPontos(
  locale: string,
  termo: string,
  limite = 8
): ResultadoBusca[] {
  const n = normalizar(termo.trim());
  if (n.length < 1) return [];

  return PONTOS.map((p) => resolverPonto(p, locale))
    .filter(
      (p) =>
        normalizar(p.nome).includes(n) ||
        normalizar(p.resumo).includes(n) ||
        normalizar(p.slug).includes(n)
    )
    .slice(0, limite)
    .map((p) => ({
      slug: p.slug,
      nome: p.nome,
      resumo: p.resumo,
    }));
}
