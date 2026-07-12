/**
 * Reescreve todos os arrays fotos: [...] em data/pontos*.ts
 * para apontar só para /fotos/{slug}.jpg
 */
import { readFileSync, writeFileSync } from "node:fs";

for (const arquivo of ["data/pontos.ts", "data/pontos-sc.ts"]) {
  let src = readFileSync(arquivo, "utf8");
  // Para cada bloco slug + fotos, substitui fotos pelo path do slug
  src = src.replace(
    /slug:\s*"([^"]+)"([\s\S]*?)fotos:\s*\[[^\]]*\]/g,
    (match, slug, middle) => {
      return `slug: "${slug}"${middle}fotos: ["/fotos/${slug}.jpg"]`;
    }
  );
  writeFileSync(arquivo, src);
  console.log("ok", arquivo);
}
