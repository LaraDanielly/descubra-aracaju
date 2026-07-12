// Baixa as fotos do Wikimedia Commons para public/fotos e atualiza
// data/pontos.ts para usar os caminhos locais.
// Uso: node scripts/baixar-fotos.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const ARQUIVO = "data/pontos.ts";
const PASTA = "public/fotos";
mkdirSync(PASTA, { recursive: true });

const conteudo = readFileSync(ARQUIVO, "utf8");
const urls = [...new Set(conteudo.match(/https:\/\/upload\.wikimedia\.org[^"']+/g) ?? [])];
console.log(`${urls.length} fotos únicas encontradas.`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let novoConteudo = conteudo;

for (const url of urls) {
  const hash = createHash("md5").update(url).digest("hex").slice(0, 10);
  const nome = `fotos/${hash}.jpg`;
  const caminho = `public/${nome}`;
  if (!existsSync(caminho)) {
    for (let tentativa = 1; tentativa <= 3; tentativa++) {
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": "DescubraAracaju/1.0 (guia turístico; uso único)" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        writeFileSync(caminho, buf);
        console.log(`ok  ${nome}  (${(buf.length / 1024).toFixed(0)} KB)`);
        break;
      } catch (e) {
        console.log(`erro (tentativa ${tentativa}) ${url}: ${e.message}`);
        if (tentativa === 3) process.exit(1);
        await sleep(5000 * tentativa);
      }
    }
    await sleep(1500);
  } else {
    console.log(`já existe  ${nome}`);
  }
  novoConteudo = novoConteudo.replaceAll(url, `/${nome}`);
}

writeFileSync(ARQUIVO, novoConteudo);
console.log("data/pontos.ts atualizado com caminhos locais.");
