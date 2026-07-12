import { readFileSync, writeFileSync } from "node:fs";

let s = readFileSync("data/pontos.ts", "utf8");
if (!s.includes('cidade: "aracaju"')) {
  s = s.replace(/slug: "([^"]+)",\n(\s+)nome:/g, (m, slug, sp) => {
    return `slug: "${slug}",\n${sp}cidade: "aracaju",\n${sp}nome:`;
  });
}
writeFileSync("data/pontos.ts", s);
console.log("cidade count", (s.match(/cidade: "aracaju"/g) || []).length);
