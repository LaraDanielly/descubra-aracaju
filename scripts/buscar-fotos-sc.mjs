// Busca fotos reais no Wikimedia Commons para os pontos de São Cristóvão.
// Uso: node scripts/buscar-fotos-sc.mjs
const termos = [
  "Praça São Francisco São Cristóvão",
  "Convento de São Francisco São Cristóvão Sergipe",
  "Museu Histórico de Sergipe",
  "Igreja Matriz Nossa Senhora da Vitória São Cristóvão",
  "Igreja Nosso Senhor do Rosário dos Homens Pretos São Cristóvão",
  "Cristo Redentor São Cristóvão Sergipe",
  "Bica dos Pintos São Cristóvão",
  "Centro histórico São Cristóvão Sergipe",
  "Mercado municipal São Cristóvão Sergipe",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function buscar(termo) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search" +
    `&gsrsearch=${encodeURIComponent(termo + " filetype:bitmap")}` +
    "&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size&iiurlwidth=1200";
  const res = await fetch(url, { headers: { "User-Agent": "DescubraAracaju/1.0 (contato@exemplo.com)" } });
  const json = await res.json();
  const pages = Object.values(json?.query?.pages ?? {});
  return pages
    .map((p) => ({ titulo: p.title, info: p.imageinfo?.[0] }))
    .filter((x) => x.info && x.info.width >= 800)
    .map((x) => `${x.titulo}\n  ${x.info.thumburl || x.info.url}`);
}

for (const termo of termos) {
  try {
    const urls = await buscar(termo);
    console.log(`\n### ${termo}`);
    urls.slice(0, 5).forEach((u) => console.log(u));
  } catch (e) {
    console.log(`\n### ${termo}\nERRO: ${e.message}`);
  }
  await sleep(2500);
}
