import type { LinkExterno } from "@/components/LinksExternos";

/**
 * Links externos curados (site oficial, Instagram, Booking, guias).
 * Usados nas páginas de ponto e nos cards de restaurante/hotel.
 */
export const LINKS_POR_SLUG: Record<string, LinkExterno[]> = {
  // —— Pontos ——
  "museu-da-gente-sergipana": [
    { tipo: "site", url: "https://www.museudagentesergipana.com.br/" },
  ],
  "largo-da-gente-sergipana": [
    {
      tipo: "guia",
      url: "https://guia.melhoresdestinos.com.br/largo-da-gente-sergipana-em-aracaju.html",
    },
  ],
  "praca-sao-francisco": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g1889397-d1889398-Reviews-Sao_Francisco_Square-Sao_Cristovao_State_of_Sergipe.html",
    },
  ],
  "orla-de-atalaia": [
    {
      tipo: "guia",
      url: "https://guia.melhoresdestinos.com.br/orla-de-atalaia-182-4863-l.html",
    },
  ],
  "parque-da-sementeira": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g303638-d7179534-Reviews-Parque_Augusto_Franco-Aracaju_State_of_Sergipe.html",
    },
  ],
  "orla-por-do-sol": [
    {
      tipo: "guia",
      url: "https://guia.melhoresdestinos.com.br/orla-do-por-do-sol-182-4860-l.html",
    },
  ],
  "catedral-metropolitana": [
    {
      tipo: "site",
      url: "https://arquidiocesedearacaju.org/catedral-metropolitana/",
    },
  ],
  "convento-sao-francisco": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g1889397-d2415126-Reviews-Sao_Francisco_Church_and_Convent-Sao_Cristovao_State_of_Sergipe.html",
    },
  ],
  "oceanario-de-aracaju": [
    {
      tipo: "site",
      url: "https://www.tamar.org.br/centros_visitantes.php?cod=10",
    },
  ],
  "croa-do-gore": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g303638-d4007022-Reviews-Croa_do_Gore-Aracaju_State_of_Sergipe.html",
    },
  ],
  "mirante-da-13-de-julho": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g303638-d2333810-Reviews-13_de_Julho_Promenade_and_viewing_tower-Aracaju_State_of_Sergipe.html",
    },
  ],
  "ilha-dos-namorados": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g2348775-d10509651-Reviews-Ilha_dos_Namorados-Itaporanga_d_Ajuda_State_of_Sergipe.html",
    },
  ],
  "colina-de-santo-antonio": [
    {
      tipo: "guia",
      url: "https://turismosergipe.com.br/colina-do-santo-antonio-e-um-dos-pontos-turisticos-mais-emblematicos-de-aracaju/",
    },
  ],
  "ponte-aracaju-barra": [
    {
      tipo: "guia",
      url: "https://pt.wikipedia.org/wiki/Ponte_Aracaju-Barra_dos_Coqueiros",
    },
  ],
  "mirante-do-cristo": [
    {
      tipo: "instagram",
      url: "https://www.instagram.com/p/C479jYluF8W/",
    },
  ],
  "igreja-matriz-nossa-senhora-vitoria": [
    {
      tipo: "site",
      url: "https://arquidiocesedearacaju.org/wp-content/uploads/2024/01/Igreja-Nossa-Senhora-da-Vitoria-Sao-Cristovao-Foto-Marco-A-Jacob-1.jpg",
      label: "Foto oficial",
    },
  ],
  "igreja-rosario-homens-pretos": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Attraction_Review-g1889397-d2415114-Reviews-N_S_do_Rosario_dos_Homens_Pretos_Church-Sao_Cristovao_State_of_Sergipe.html",
    },
  ],
  "mercado-municipal-antonio-franco": [
    {
      tipo: "guia",
      url: "http://sergipeemfotos.blogspot.com/2013/10/vista-aerea-do-mercado-municipal-de.html",
    },
  ],
  "passarela-do-caranguejo": [
    {
      tipo: "guia",
      url: "https://viagemeturismo.abril.com.br/brasil/passarela-do-caranguejo-e-point-gastronomico-de-aracaju/",
    },
  ],
  "praia-de-aruana": [
    {
      tipo: "guia",
      url: "https://www.farejaviagens.com.br/as-melhores-praias-em-aracaju/",
    },
  ],
  "praia-dos-artistas": [
    {
      tipo: "guia",
      url: "https://www.temporadalivre.com/blog/praias-de-sergipe-visite-os-melhores-destinos-da-regiao",
    },
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
  "centro-historico": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/LocationPhotoDirectLink-g303638-d2333815-i301699393-Aracaju_historic_downtown-Aracaju_State_of_Sergipe.html",
    },
  ],

  // —— Restaurantes ——
  "pitu-com-pirao-da-eliane": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Restaurant_Review-g303638-d2333906-Reviews-Pitu_com_Pirao_da_Eliane-Aracaju_State_of_Sergipe.html",
    },
  ],
  "conversa-fiada": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Restaurant_Review-g303638-d4881218-Reviews-Conversa_Fiada-Aracaju_State_of_Sergipe.html",
    },
  ],
  "o-matuto": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Restaurant_Review-g303638-d25239063-Reviews-Matuto_Comidas_Nordestinas-Aracaju_State_of_Sergipe.html",
    },
  ],
  "maria-farinha": [
    {
      tipo: "guia",
      url: "https://wanderboat.ai/restaurants/brazil/regi%C3%A3o-geogr%C3%A1fica-imediata-de-aracaju/maria-farinha-bar-e-restaurante/iRioJEVrRRaRlPuwz19iyA",
    },
  ],
  "amanda-passarela": [
    {
      tipo: "site",
      url: "https://www.amandabarestaurante.com.br/",
    },
    {
      tipo: "guia",
      url: "https://www.marcionomundo.com.br/america-do-sul/brasil/sergipe/conhecendo-os-melhores-restaurantes-de-aracaju/",
    },
  ],
  "republica-dos-camaroes": [
    {
      tipo: "instagram",
      url: "https://www.instagram.com/republicadoscamaroesoficial/",
    },
  ],
  "ponto-da-picanha": [
    {
      tipo: "instagram",
      url: "https://www.instagram.com/p/CNufFtbh-fY/",
    },
  ],

  // —— Hotéis ——
  "vidam-hotel": [
    {
      tipo: "site",
      url: "https://www.facebook.com/vidamhotel/",
      label: "Facebook",
    },
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/radisson-hotel-aracaju.pt-br.html",
    },
  ],
  "del-mar-hotel": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Hotel_Review-g303638-d1201010-Reviews-Del_Mar_Hotel-Aracaju_State_of_Sergipe.html",
    },
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/del-mar-aracaju.pt-br.html",
    },
  ],
  "celi-hotel": [
    {
      tipo: "booking",
      url: "https://www.booking.com/hotel/br/ibis-budget-aracaju.pt-br.html",
    },
  ],
  "hotel-da-costa-nobile": [
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Hotel_Review-g303638-d631002-Reviews-Hotel_da_Costa_By_Nobile-Aracaju_State_of_Sergipe.html",
    },
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
    {
      tipo: "site",
      url: "https://sesc-se.com.br/hotel-atalaia/espacos/",
    },
  ],
  "pousadas-sao-cristovao": [
    {
      tipo: "booking",
      url: "https://www.booking.com/city/br/sao-cristovao.pt-br.html",
    },
    {
      tipo: "guia",
      url: "https://www.tripadvisor.com.br/Hotels-g1889397-c2-Sao_Cristovao_State_of_Sergipe-Hotels.html",
    },
  ],
  "pousada-raio-de-sol": [
    {
      tipo: "site",
      url: "https://www.pousadaraiodesol.com.br/",
    },
  ],
};

export function linksDoSlug(slug: string): LinkExterno[] {
  return LINKS_POR_SLUG[slug] ?? [];
}

/** Foto principal por slug (arquivos em /public/fotos/{slug}.jpg). */
export function fotoPrincipal(slug: string): string {
  return `/fotos/${slug}.jpg`;
}
