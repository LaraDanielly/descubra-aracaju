"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import type { PontoResolvido } from "@/data/pontos";

function normalizar(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function HeroBusca({ pontos }: { pontos: PontoResolvido[] }) {
  const t = useTranslations("home");
  const router = useRouter();
  const [q, setQ] = useState("");

  const sugestoes = useMemo(() => {
    const termo = normalizar(q.trim());
    if (termo.length < 2) return [];
    return pontos
      .filter(
        (p) =>
          normalizar(p.nome).includes(termo) ||
          normalizar(p.resumo).includes(termo)
      )
      .slice(0, 5);
  }, [q, pontos]);

  return (
    <div className="relative mt-8 max-w-xl">
      <label className="sr-only" htmlFor="hero-busca">
        {t("buscaAria")}
      </label>
      <input
        id="hero-busca"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && sugestoes[0]) {
            router.push(`/ponto/${sugestoes[0].slug}`);
          }
        }}
        placeholder={t("buscaPlaceholder")}
        className="w-full rounded border border-white/30 bg-white/95 py-3.5 pl-4 pr-4 text-sm text-tinta shadow-lg outline-none ring-caju placeholder:text-tinta-suave focus:ring-2"
      />
      {sugestoes.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded border border-linha bg-papel shadow-xl">
          {sugestoes.map((p) => (
            <li key={p.slug}>
              <button
                type="button"
                className="block w-full px-4 py-2.5 text-left text-sm text-tinta hover:bg-caju-soft/50"
                onClick={() => router.push(`/ponto/${p.slug}`)}
              >
                <span className="font-semibold">{p.nome}</span>
                <span className="ml-2 text-xs text-tinta-suave">
                  {p.categoria}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
