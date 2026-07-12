/**
 * Converte as PNGs enviadas pelo usuário em JPGs otimizados em public/fotos/{slug}.jpg
 */
import { mkdirSync, readdirSync, copyFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";
import sharp from "sharp";

const ASSETS =
  "C:/Users/larad/.cursor/projects/c-Users-larad-descubra-aracaju/assets";
const OUT = "public/fotos";
mkdirSync(OUT, { recursive: true });

/** id curto do arquivo → slug */
const MAPA = {
  "10eb2bf0": "museu-da-gente-sergipana",
  "4e25e66b": "largo-da-gente-sergipana",
  "068fd817": "orla-de-atalaia",
  "db729803": "parque-da-sementeira",
  "f509d64e": "orla-por-do-sol",
  "8ba7bec2": "oceanario-de-aracaju",
  "fab5f26d": "praia-dos-artistas", // Farol da Coroa do Meio — confirmar
  "920ec0cf": "bica-dos-pintos",
  "123e70f4": "centro-historico",
  "f523aa57": "pitu-com-pirao-da-eliane",
  "232ace4d": "conversa-fiada",
  "42ee730e": "o-matuto",
  "9a01b292": "maria-farinha",
  "a8bc6e94": "amanda-passarela",
  "cd712b55": "republica-dos-camaroes",
  "6d7884fd": "ponto-da-picanha", // placa: Casa da Picanha — confirmar
  "93c5d59f": "vidam-hotel",
  "c41a9d27": "hotel-da-costa-nobile",
  "5d7ec01e": "arcus-atlantica", // piscina — sobrescrito se facade vier depois
  "69680385": "del-mar-hotel", // 2ª foto Hotel da Costa? usando como Del Mar temporário — NÃO
  "4d327d55": "arcus-atlantica", // fachada (preferida)
  "bbeacbd8": "sesc-atalaia",
  "6737e2d4": "pousada-raio-de-sol",
};

// Ajuste: 69680385 é fachada Hotel da Costa — usar como principal do hotel-da-costa
// c41a9d27 aérea também Hotel da Costa — guardar como secundária hotel-da-costa-2 se quiser
// Del Mar / Celi ficam sem foto nova do usuário

const MAPA_FINAL = {
  "10eb2bf0": "museu-da-gente-sergipana",
  "4e25e66b": "largo-da-gente-sergipana",
  "068fd817": "orla-de-atalaia",
  "db729803": "parque-da-sementeira",
  "f509d64e": "orla-por-do-sol",
  "8ba7bec2": "oceanario-de-aracaju",
  "fab5f26d": "praia-dos-artistas",
  "920ec0cf": "bica-dos-pintos",
  "123e70f4": "centro-historico",
  "f523aa57": "pitu-com-pirao-da-eliane",
  "232ace4d": "conversa-fiada",
  "42ee730e": "o-matuto",
  "9a01b292": "maria-farinha",
  "a8bc6e94": "amanda-passarela",
  "cd712b55": "republica-dos-camaroes",
  "6d7884fd": "ponto-da-picanha",
  "93c5d59f": "vidam-hotel",
  "69680385": "hotel-da-costa-nobile",
  "4d327d55": "arcus-atlantica",
  "bbeacbd8": "sesc-atalaia",
  "6737e2d4": "pousada-raio-de-sol",
  // extras
  "c41a9d27": "hotel-da-costa-nobile-aerea",
  "5d7ec01e": "arcus-atlantica-piscina",
};

const files = readdirSync(ASSETS).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const id = Object.keys(MAPA_FINAL).find((k) => file.includes(k));
  if (!id) {
    console.log("sem mapa:", file);
    continue;
  }
  const slug = MAPA_FINAL[id];
  const dest = join(OUT, `${slug}.jpg`);
  const src = join(ASSETS, file);
  try {
    await sharp(src)
      .rotate()
      .resize({ width: 1600, height: 1200, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(dest);
    const meta = await sharp(dest).metadata();
    console.log(`ok ${slug}.jpg (${meta.width}x${meta.height})`);
  } catch (e) {
    console.error(`erro ${slug}:`, e.message);
  }
}

// Copiar pousada-raio-de-sol também para pousadas-sao-cristovao se ainda não tiver foto boa? Não — locais diferentes.
console.log("feito");
