/**
 * Baixa fotos a partir de og:image / imagem direta das URLs fornecidas.
 * Salva em public/fotos/{slug}.jpg
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const PASTA = "public/fotos";
mkdirSync(PASTA, { recursive: true });

const UA =
  "Mozilla/5.0 (compatible; DescubraAracaju/2.0; +https://descubra-aracaju.local)";

/** @type {Record<string, string>} */
const FONTES = {
  // Pontos
  "museu-da-gente-sergipana":
    "https://www.museudagentesergipana.com.br/",
  "largo-da-gente-sergipana":
    "https://guia.melhoresdestinos.com.br/largo-da-gente-sergipana-em-aracaju.html",
  "praca-sao-francisco":
    "https://www.tripadvisor.com.br/Attraction_Review-g1889397-d1889398-Reviews-Sao_Francisco_Square-Sao_Cristovao_State_of_Sergipe.html",
  "orla-de-atalaia":
    "https://guia.melhoresdestinos.com.br/orla-de-atalaia-182-4863-l.html",
  "parque-da-sementeira":
    "https://www.tripadvisor.com.br/Attraction_Review-g303638-d7179534-Reviews-Parque_Augusto_Franco-Aracaju_State_of_Sergipe.html",
  "orla-por-do-sol":
    "https://guia.melhoresdestinos.com.br/orla-do-por-do-sol-182-4860-l.html",
  "catedral-metropolitana":
    "https://arquidiocesedearacaju.org/catedral-metropolitana/",
  "convento-sao-francisco":
    "https://www.tripadvisor.com.br/Attraction_Review-g1889397-d2415126-Reviews-Sao_Francisco_Church_and_Convent-Sao_Cristovao_State_of_Sergipe.html",
  "oceanario-de-aracaju":
    "https://www.tamar.org.br/centros_visitantes.php?cod=10",
  "croa-do-gore":
    "https://www.tripadvisor.com.br/Attraction_Review-g303638-d4007022-Reviews-Croa_do_Gore-Aracaju_State_of_Sergipe.html",
  "mirante-da-13-de-julho":
    "https://www.tripadvisor.com.br/Attraction_Review-g303638-d2333810-Reviews-13_de_Julho_Promenade_and_viewing_tower-Aracaju_State_of_Sergipe.html",
  "ilha-dos-namorados":
    "https://www.tripadvisor.com.br/Attraction_Review-g2348775-d10509651-Reviews-Ilha_dos_Namorados-Itaporanga_d_Ajuda_State_of_Sergipe.html",
  "colina-de-santo-antonio":
    "https://turismosergipe.com.br/colina-do-santo-antonio-e-um-dos-pontos-turisticos-mais-emblematicos-de-aracaju/",
  "ponte-aracaju-barra":
    "https://pt.wikipedia.org/wiki/Ponte_Aracaju-Barra_dos_Coqueiros",
  "mirante-do-cristo": "https://www.instagram.com/p/C479jYluF8W/",
  "igreja-matriz-nossa-senhora-vitoria":
    "https://arquidiocesedearacaju.org/wp-content/uploads/2024/01/Igreja-Nossa-Senhora-da-Vitoria-Sao-Cristovao-Foto-Marco-A-Jacob-1.jpg",
  "igreja-rosario-homens-pretos":
    "https://www.tripadvisor.com.br/Attraction_Review-g1889397-d2415114-Reviews-N_S_do_Rosario_dos_Homens_Pretos_Church-Sao_Cristovao_State_of_Sergipe.html",
  "mercado-municipal-antonio-franco":
    "http://sergipeemfotos.blogspot.com/2013/10/vista-aerea-do-mercado-municipal-de.html",
  "passarela-do-caranguejo":
    "https://viagemeturismo.abril.com.br/brasil/passarela-do-caranguejo-e-point-gastronomico-de-aracaju/",
  "praia-de-aruana":
    "https://www.farejaviagens.com.br/as-melhores-praias-em-aracaju/",
  "praia-dos-artistas":
    "https://www.temporadalivre.com/blog/praias-de-sergipe-visite-os-melhores-destinos-da-regiao",
  "bica-dos-pintos":
    "https://www.saocristovao.se.gov.br/noticia/prefeitura-de-sao-cristovao-entrega-obra-de-requalificacao-da-bica-dos-pintos",
  "casa-culturas-populares":
    "https://www.saocristovao.se.gov.br/noticia/fasc-50-anos-exposicao-rezadeiras-de-nossa-terra-estara-presente-na-casa-das-culturas-populares",
  "centro-historico":
    "https://www.tripadvisor.com.br/LocationPhotoDirectLink-g303638-d2333815-i301699393-Aracaju_historic_downtown-Aracaju_State_of_Sergipe.html",

  // Restaurantes
  "pitu-com-pirao-da-eliane":
    "https://www.tripadvisor.com.br/LocationPhotoDirectLink-g303638-d2333906-i120693783-Pitu_com_Pirao_da_Eliane-Aracaju_State_of_Sergipe.html",
  "conversa-fiada":
    "https://www.tripadvisor.com.br/LocationPhotoDirectLink-g303638-d4881218-i140453939-Conversa_Fiada-Aracaju_State_of_Sergipe.html",
  "o-matuto":
    "https://www.tripadvisor.com.br/Restaurant_Review-g303638-d25239063-Reviews-Matuto_Comidas_Nordestinas-Aracaju_State_of_Sergipe.html",
  "maria-farinha":
    "https://wanderboat.ai/restaurants/brazil/regi%C3%A3o-geogr%C3%A1fica-imediata-de-aracaju/maria-farinha-bar-e-restaurante/iRioJEVrRRaRlPuwz19iyA",
  "amanda-passarela":
    "https://www.marcionomundo.com.br/america-do-sul/brasil/sergipe/conhecendo-os-melhores-restaurantes-de-aracaju/",
  "republica-dos-camaroes":
    "https://www.instagram.com/republicadoscamaroesoficial/",
  "ponto-da-picanha": "https://www.instagram.com/p/CNufFtbh-fY/",

  // Hotéis
  "vidam-hotel":
    "https://www.facebook.com/vidamhotel/photos/o-entardecer-na-orla-da-atalaia-%C3%A9-um-espet%C3%A1culo-natural-imperd%C3%ADvel-e-com-os-melh/315961626822262/",
  "del-mar-hotel":
    "https://www.tripadvisor.com.br/Hotel_Review-g303638-d1201010-Reviews-Del_Mar_Hotel-Aracaju_State_of_Sergipe.html",
  "celi-hotel":
    "https://www.booking.com/hotel/br/ibis-budget-aracaju.pt-br.html",
  "hotel-da-costa-nobile":
    "https://www.tripadvisor.com.br/Hotel_Review-g303638-d631002-Reviews-Hotel_da_Costa_By_Nobile-Aracaju_State_of_Sergipe.html",
  "arcus-atlantica":
    "https://www.letsatlantica.com.br/hotel/arcus-hotel-aracaju-by-atlantica",
  "sesc-atalaia": "https://sesc-se.com.br/hotel-atalaia/espacos/",
  "pousadas-sao-cristovao":
    "https://www.tripadvisor.com.br/Hotels-g1889397-c2-Sao_Cristovao_State_of_Sergipe-Hotels.html",
};

/** Fallbacks Wikimedia / imagens diretas conhecidas quando og:image falha */
const FALLBACKS = {
  "orla-de-atalaia":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Orla_de_Atalaia_-_Aracaju.jpg/1280px-Orla_de_Atalaia_-_Aracaju.jpg",
  "ponte-aracaju-barra":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ponte_Aracaju-Barra_dos_Coqueiros.jpg/1280px-Ponte_Aracaju-Barra_dos_Coqueiros.jpg",
  "praca-sao-francisco":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Praca_Sao_Francisco_Sao_Cristovao.jpg/1280px-Praca_Sao_Francisco_Sao_Cristovao.jpg",
  "igreja-matriz-nossa-senhora-vitoria":
    "https://arquidiocesedearacaju.org/wp-content/uploads/2024/01/Igreja-Nossa-Senhora-da-Vitoria-Sao-Cristovao-Foto-Marco-A-Jacob-1.jpg",
  "catedral-metropolitana":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Catedral_Metropolitana_de_Aracaju.jpg/1280px-Catedral_Metropolitana_de_Aracaju.jpg",
  "oceanario-de-aracaju":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Projeto_Tamar_Aracaju.jpg/1280px-Projeto_Tamar_Aracaju.jpg",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function isImageUrl(url) {
  return /\.(jpe?g|png|webp|gif)(\?|$)/i.test(url);
}

function absolutize(base, rel) {
  try {
    return new URL(rel, base).href;
  } catch {
    return null;
  }
}

function extrairOgImage(html, pageUrl) {
  const patterns = [
    /property=["']og:image["']\s+content=["']([^"']+)["']/i,
    /content=["']([^"']+)["']\s+property=["']og:image["']/i,
    /name=["']twitter:image["']\s+content=["']([^"']+)["']/i,
    /content=["']([^"']+)["']\s+name=["']twitter:image["']/i,
    /rel=["']image_src["']\s+href=["']([^"']+)["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return absolutize(pageUrl, m[1].replace(/&amp;/g, "&"));
  }
  // Wikipedia / commons thumbs in page
  const wiki = html.match(
    /https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"'>\s]+\.(?:jpe?g|png)/i
  );
  if (wiki) return wiki[0].replace(/&amp;/g, "&");
  return null;
}

async function baixarBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      Accept: "image/*,*/*",
      Referer: new URL(url).origin + "/",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ctype = res.headers.get("content-type") || "";
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error("arquivo muito pequeno");
  if (
    !ctype.includes("image") &&
    !buf.slice(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff])) &&
    buf.slice(0, 8).toString("hex") !== "89504e470d0a1a0a"
  ) {
    // ainda pode ser imagem sem content-type certo
    if (!(buf[0] === 0xff && buf[1] === 0xd8) && buf.toString("ascii", 0, 4) !== "RIFF") {
      throw new Error(`não parece imagem (${ctype})`);
    }
  }
  return buf;
}

async function resolverImagem(slug, pageUrl) {
  if (isImageUrl(pageUrl)) return pageUrl;
  try {
    const res = await fetch(pageUrl, {
      headers: {
        "User-Agent": UA,
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`page HTTP ${res.status}`);
    const html = await res.text();
    const og = extrairOgImage(html, pageUrl);
    if (og) return og;
  } catch (e) {
    console.log(`  avisopage ${slug}: ${e.message}`);
  }
  return FALLBACKS[slug] ?? null;
}

const resultados = [];

for (const [slug, url] of Object.entries(FONTES)) {
  const dest = join(PASTA, `${slug}.jpg`);
  if (existsSync(dest)) {
    console.log(`já existe  ${slug}.jpg`);
    resultados.push({ slug, ok: true, skipped: true });
    continue;
  }
  try {
    let imgUrl = await resolverImagem(slug, url);
    if (!imgUrl && FALLBACKS[slug]) imgUrl = FALLBACKS[slug];
    if (!imgUrl) throw new Error("sem og:image nem fallback");
    console.log(`baixando ${slug} ← ${imgUrl.slice(0, 90)}...`);
    const buf = await baixarBuffer(imgUrl);
    writeFileSync(dest, buf);
    console.log(`ok  ${slug}.jpg  (${(buf.length / 1024).toFixed(0)} KB)`);
    resultados.push({ slug, ok: true, imgUrl });
  } catch (e) {
    console.log(`FALHOU ${slug}: ${e.message}`);
    resultados.push({ slug, ok: false, error: e.message });
  }
  await sleep(800);
}

const ok = resultados.filter((r) => r.ok).length;
const fail = resultados.filter((r) => !r.ok);
console.log(`\n${ok}/${resultados.length} ok`);
if (fail.length) {
  console.log("Falhas:", fail.map((f) => f.slug).join(", "));
}
