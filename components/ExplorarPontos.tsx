"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  CATEGORIAS,
  type Categoria,
  type Cidade,
  type PontoResolvido,
} from "@/data/pontos";
import PontoCard from "./PontoCard";

function normalizar(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function ExplorarPontos({
  pontos,
  cidadeInicial = "todas",
}: {
  pontos: PontoResolvido[];
  cidadeInicial?: Cidade | "todas";
}) {
  const t = useTranslations("explorar");
  const cat = useTranslations("categorias");
  const cidades = useTranslations("cidades");
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<Categoria | "todas">("todas");
  const [cidade, setCidade] = useState<Cidade | "todas">(cidadeInicial);

  const filtrados = useMemo(() => {
    const termo = normalizar(busca.trim());
    return pontos.filter((p) => {
      const okCidade = cidade === "todas" || p.cidade === cidade;
      const okCategoria = categoria === "todas" || p.categoria === categoria;
      const okBusca =
        !termo ||
        normalizar(p.nome).includes(termo) ||
        normalizar(p.resumo).includes(termo);
      return okCidade && okCategoria && okBusca;
    });
  }, [pontos, busca, categoria, cidade]);

  const filtrosCidade: (Cidade | "todas")[] = [
    "todas",
    "aracaju",
    "sao-cristovao",
  ];

  return (
    <div id="explorar">
      <div className="flex flex-col gap-4">
        <div className="relative w-full sm:max-w-md">
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder={t("buscarPlaceholder")}
            className="w-full rounded border border-linha bg-white py-3 pl-4 pr-4 text-sm outline-none transition focus:border-caju focus:ring-2 focus:ring-caju-soft"
            aria-label={t("buscarAria")}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filtrosCidade.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCidade(c)}
              className={`rounded border px-3 py-1.5 text-sm font-medium transition ${
                cidade === c
                  ? "border-arara bg-arara text-white"
                  : "border-linha bg-white text-tinta hover:border-arara/40"
              }`}
            >
              {cidades(c)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategoria("todas")}
            className={`rounded border px-3 py-1.5 text-sm font-medium transition ${
              categoria === "todas"
                ? "border-caju bg-caju text-white"
                : "border-linha bg-white text-tinta hover:border-caju/40"
            }`}
          >
            {cat("todas")}
          </button>
          {CATEGORIAS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategoria(c.id)}
              className={`rounded border px-3 py-1.5 text-sm font-medium transition ${
                categoria === c.id
                  ? "border-caju bg-caju text-white"
                  : "border-linha bg-white text-tinta hover:border-caju/40"
              }`}
            >
              {cat(c.nomeKey)}
            </button>
          ))}
        </div>
      </div>

      {filtrados.length === 0 ? (
        <p className="mt-10 text-center text-tinta-suave">
          {t("nenhumResultado", { busca })}
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((p) => (
            <PontoCard key={p.slug} ponto={p} />
          ))}
        </div>
      )}
    </div>
  );
}
