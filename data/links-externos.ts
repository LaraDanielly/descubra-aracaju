import type { LinkExterno } from "@/components/LinksExternos";

/**
 * Apenas sites oficiais, redes sociais e Booking.
 * Sem TripAdvisor, Melhores Destinos ou blogs.
 */
export const LINKS_POR_SLUG: Record<string, LinkExterno[]> = {
  "museu-da-gente-sergipana": [
    { tipo: "site", url: "https://www.museudagentesergipana.com.br/" },
  ],
  "catedral-metropolitana": [
    {
      tipo: "site",
      url: "https://arquidiocesedearacaju.org/catedral-metropolitana/",
    },
  ],
  "oceanario-de-aracaju": [
    {
      tipo: "site",
      url: "https://www.tamar.org.br/centros_visitantes.php?cod=10",
    },
  ],
  "mirante-do-cristo": [
    { tipo: "instagram", url: "https://www.instagram.com/p/C479jYluF8W/" },
  ],
  "bica-dos-pintos": [
    {
      tipo: "site",
      url: "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-entrega-obra-de-requalificacao-da-bica-dos-pintos",
    },
  ],
  "casa-culturas-populares": [
    {
      tipo: "site",
      url: "https://www.saocristovao.se.gov.br/noticia/fasc-50-anos-exposicao-rezadeiras-de-nossa-terra-estara-presente-na-casa-das-culturas-populares",
    },
  ],
  "republica-dos-camaroes": [
    {
      tipo: "instagram",
      url: "https://www.instagram.com/republicadoscamaroesoficial/",
    },
  ],
  "ponto-da-picanha": [
    { tipo: "instagram", url: "https://www.instagram.com/p/CNufFtbh-fY/" },
  ],
  "amanda-passarela": [
    { tipo: "site", url: "https://www.amandabarestaurante.com.br/" },
  ],
  "vidam-hotel": [
    { tipo: "site", url: "https://www.facebook.com/vidamhotel/" },
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/radisson-hotel-aracaju.pt-br.html",
    },
  ],
  "del-mar-hotel": [
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/del-mar-aracaju.pt-br.html",
    },
  ],
  "celi-hotel": [
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/celi-hotel-aracaju.pt-br.html",
    },
  ],
  "hotel-da-costa-nobile": [
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/da-costa.pt-br.html",
    },
  ],
  "arcus-atlantica": [
    {
      tipo: "site",
      url: "https://www.letsatlantica.com.br/hotel/arcus-hotel-aracaju-by-atlantica",
    },
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/quality-aracaju.pt-br.html",
    },
  ],
  "sesc-atalaia": [
    { tipo: "site", url: "https://sesc-se.com.br/hotel-atalaia/espacos/" },
  ],
  "pousada-raio-de-sol": [
    { tipo: "site", url: "https://www.pousadaraiodesol.com.br/" },
  ],
};

export function linksDoSlug(slug: string): LinkExterno[] {
  return LINKS_POR_SLUG[slug] ?? [];
}
