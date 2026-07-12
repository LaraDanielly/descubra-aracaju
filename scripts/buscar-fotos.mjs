// Busca fotos reais no Wikimedia Commons para cada ponto turístico.
// Uso: node scripts/buscar-fotos.mjs
const termos = [
  "Parque da Sementeira",
  "Praia de Aruana Aracaju",
  "Largo da Gente Sergipana",
  "Praia dos Artistas Aracaju",
  "Mirante da Treze de Julho",
  "Catedral Metropolitana de Aracaju",
  "Ponte Construtor João Alves",
  "Rio Sergipe Aracaju",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function buscar(termo) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search" +
    `&gsrsearch=${encodeURIComponent(termo + " filetype:bitmap")}` +
    "&gsrnamespace=6&gsrlimit=4&prop=imageinfo&iiprop=url|size&iiurlwidth=1200";
  const res = await fetch(url, { headers: { "User-Agent": "DescubraAracaju/1.0 (contato@exemplo.com)" } });
  const json = await res.json();
  const pages = Object.values(json?.query?.pages ?? {});
  return pages
    .map((p) => p.imageinfo?.[0])
    .filter((i) => i && i.width >= 800)
    .map((i) => i.thumburl || i.url);
}

for (const termo of termos) {
  try {
    const urls = await buscar(termo);
    console.log(`\n### ${termo}`);
    urls.slice(0, 3).forEach((u) => console.log(u));
  } catch (e) {
    console.log(`\n### ${termo}\nERRO: ${e.message}`);
  }
  await sleep(3000);
}
