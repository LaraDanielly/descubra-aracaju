import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const fotosDir = join(root, "public", "fotos");

function slugsFromFile(relativePath) {
  const content = readFileSync(join(root, relativePath), "utf8");
  const slugs = new Set();
  for (const match of content.matchAll(/slug:\s*"([^"]+)"/g)) {
    slugs.add(match[1]);
  }
  return slugs;
}

const pontosSlugs = new Set([
  ...slugsFromFile("data/pontos.ts"),
  ...slugsFromFile("data/pontos-sc.ts"),
]);

const faltando = [];
for (const slug of pontosSlugs) {
  const path = join(fotosDir, `${slug}.jpg`);
  if (!existsSync(path)) {
    faltando.push(slug);
  }
}

if (faltando.length > 0) {
  console.error(
    `Validação de fotos falhou: ${faltando.length} slug(s) sem public/fotos/{slug}.jpg:`
  );
  for (const slug of faltando.sort()) {
    console.error(`  - ${slug}`);
  }
  process.exit(1);
}

console.log(`OK: ${pontosSlugs.size} fotos encontradas em public/fotos/`);
