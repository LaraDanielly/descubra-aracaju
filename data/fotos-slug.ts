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
  "museu-historico-de-sergipe",
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

export function fotoPrincipal(slug: string): string {
  return `/fotos/${slug}.jpg`;
}

/** Só a foto dedicada — nunca hashes antigos. */
export function comFotoPrincipal(slug: string, fotos: string[]): string[] {
  if (FOTOS_SLUG.has(slug)) return [fotoPrincipal(slug)];
  // Sem foto dedicada: descarta hashes e usa o que sobrar; se vazio, path do slug mesmo
  const limpas = fotos.filter((f) => !/\/fotos\/[a-f0-9]{10}\.jpg$/i.test(f));
  return limpas.length > 0 ? limpas : [fotoPrincipal(slug)];
}

export function fotoDeSlug(slug: string, fallback: string): string {
  return FOTOS_SLUG.has(slug) ? fotoPrincipal(slug) : fallback;
}
