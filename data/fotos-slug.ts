import { fotoPrincipal } from "./links-externos";

/** Slugs com foto dedicada enviada pelo time (public/fotos/{slug}.jpg). */
export const FOTOS_SLUG = new Set([
  "museu-da-gente-sergipana",
  "largo-da-gente-sergipana",
  "praca-sao-francisco",
  "orla-de-atalaia",
  "parque-da-sementeira",
  "orla-por-do-sol",
  "catedral-metropolitana",
  "convento-sao-francisco",
  "oceanario-de-aracaju",
  "croa-do-gore",
  "mirante-da-13-de-julho",
  "ilha-dos-namorados",
  "colina-de-santo-antonio",
  "ponte-aracaju-barra",
  "mirante-do-cristo",
  "igreja-matriz-nossa-senhora-vitoria",
  "igreja-rosario-homens-pretos",
  "mercado-municipal-antonio-franco",
  "passarela-do-caranguejo",
  "praia-de-aruana",
  "praia-dos-artistas",
  "bica-dos-pintos",
  "casa-culturas-populares",
  "centro-historico",
  "pitu-com-pirao-da-eliane",
  "conversa-fiada",
  "o-matuto",
  "maria-farinha",
  "amanda-passarela",
  "republica-dos-camaroes",
  "ponto-da-picanha",
  "vidam-hotel",
  "del-mar-hotel",
  "celi-hotel",
  "hotel-da-costa-nobile",
  "arcus-atlantica",
  "sesc-atalaia",
  "pousada-raio-de-sol",
]);

/**
 * Usa só a foto dedicada do slug — remove hashes antigos do ranking/cards.
 */
export function comFotoPrincipal(slug: string, fotos: string[]): string[] {
  if (FOTOS_SLUG.has(slug)) return [fotoPrincipal(slug)];
  return fotos;
}

export function fotoDeSlug(slug: string, fallback: string): string {
  return FOTOS_SLUG.has(slug) ? fotoPrincipal(slug) : fallback;
}
