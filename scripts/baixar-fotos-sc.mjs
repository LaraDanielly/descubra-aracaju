import { createHash } from "node:crypto";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pra%C3%A7a_S%C3%A3o_Francisco_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-7956.jpg/1280px-Pra%C3%A7a_S%C3%A3o_Francisco_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-7956.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pra%C3%A7a_S%C3%A3o_Francisco_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-7981.jpg/1280px-Pra%C3%A7a_S%C3%A3o_Francisco_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-7981.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Apr2024._S%C3%A3o_Francisco_Square_aka_Pra%C3%A7a_S%C3%A3o_Francisco%2C_S%C3%A3o_Crist%C3%B3v%C3%A3o%2C_Sergipe%2C_Brazil_03.jpg/1280px-Apr2024._S%C3%A3o_Francisco_Square_aka_Pra%C3%A7a_S%C3%A3o_Francisco%2C_S%C3%A3o_Crist%C3%B3v%C3%A3o%2C_Sergipe%2C_Brazil_03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Apr2024._S%C3%A3o_Francisco_Square_aka_Pra%C3%A7a_S%C3%A3o_Francisco%2C_S%C3%A3o_Crist%C3%B3v%C3%A3o%2C_Sergipe%2C_Brazil_06.jpg/1280px-Apr2024._S%C3%A3o_Francisco_Square_aka_Pra%C3%A7a_S%C3%A3o_Francisco%2C_S%C3%A3o_Crist%C3%B3v%C3%A3o%2C_Sergipe%2C_Brazil_06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Museu_Historico_de_Sergipe_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-7949.jpg/1280px-Museu_Historico_de_Sergipe_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-7949.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Museu_Hist%C3%B3rico_de_Sergipe_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-5283.jpg/1280px-Museu_Hist%C3%B3rico_de_Sergipe_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2017-5283.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Igreja_ScristovaoII.jpg/1280px-Igreja_ScristovaoII.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Apr2024._Igreja_de_Nossa_Senhora_do_Ros%C3%A1rio_dos_Homens_Pretos%2C_S%C3%A3o_Crist%C3%B3v%C3%A3o%2C_Sergipe%2C_Brazil_03.jpg/1280px-Apr2024._Igreja_de_Nossa_Senhora_do_Ros%C3%A1rio_dos_Homens_Pretos%2C_S%C3%A3o_Crist%C3%B3v%C3%A3o%2C_Sergipe%2C_Brazil_03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cristo_Redentor_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2022-4944.jpg/1280px-Cristo_Redentor_S%C3%A3o_Crist%C3%B3v%C3%A3o_Sergipe_2022-4944.jpg",
];

mkdirSync("public/fotos", { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const map = {};

for (const url of urls) {
  const hash = createHash("md5").update(url).digest("hex").slice(0, 10);
  const nome = `fotos/${hash}.jpg`;
  const caminho = `public/${nome}`;
  if (!existsSync(caminho)) {
    for (let t = 1; t <= 3; t++) {
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": "DescubraAracaju/1.0" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        writeFileSync(caminho, Buffer.from(await res.arrayBuffer()));
        console.log("ok", nome);
        break;
      } catch (e) {
        console.log("erro", t, e.message);
        if (t === 3) process.exit(1);
        await sleep(4000 * t);
      }
    }
    await sleep(1500);
  } else {
    console.log("exists", nome);
  }
  map[url] = `/${nome}`;
}

console.log(JSON.stringify(map, null, 2));
