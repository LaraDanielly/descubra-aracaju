"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PONTOS, resolverPonto } from "@/data/pontos";

type Props = {
  aberto: boolean;
  onFechar: () => void;
};

export default function CommandPalette({ aberto, onFechar }: Props) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!aberto) setQ("");
  }, [aberto]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onFechar();
    }
    if (aberto) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto, onFechar]);

  const paginas = useMemo(
    () => [
      { href: "/", label: t("inicio") },
      { href: "/ranking", label: t("ranking") },
      { href: "/mapa", label: t("mapa") },
      { href: "/transporte", label: t("transporte") },
      { href: "/historia", label: t("historia") },
    ],
    [t]
  );

  const termo = q.trim().toLowerCase();
  const paginasFiltradas = paginas.filter((p) =>
    !termo ? true : p.label.toLowerCase().includes(termo)
  );
  const lugares = PONTOS.map((p) => resolverPonto(p, locale))
    .filter((p) =>
      !termo
        ? false
        : p.nome.toLowerCase().includes(termo) ||
          p.resumo.toLowerCase().includes(termo)
    )
    .slice(0, 8);

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-tinta/40 px-4 pt-[12vh]"
      onClick={onFechar}
      role="dialog"
      aria-modal="true"
      aria-label={t("buscar")}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded border border-linha bg-papel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("buscarPlaceholder")}
          className="w-full border-b border-linha bg-transparent px-4 py-3.5 text-sm outline-none"
        />
        <div className="max-h-80 overflow-y-auto p-2">
          {!termo && (
            <p className="px-2 py-3 text-xs text-tinta-suave">
              {t("buscarDica", { total: PONTOS.length })}
            </p>
          )}
          {paginasFiltradas.length > 0 && (
            <div className="mb-2">
              <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-tinta-suave">
                {t("paginas")}
              </p>
              {paginasFiltradas.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={onFechar}
                  className="block rounded px-3 py-2 text-sm hover:bg-caju-soft"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}
          {lugares.length > 0 && (
            <div>
              <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-tinta-suave">
                {t("lugares")}
              </p>
              {lugares.map((p) => (
                <Link
                  key={p.slug}
                  href={`/ponto/${p.slug}`}
                  onClick={onFechar}
                  className="block rounded px-3 py-2 text-sm hover:bg-arara-soft"
                >
                  <span className="font-medium">{p.nome}</span>
                  <span className="mt-0.5 block text-xs text-tinta-suave line-clamp-1">
                    {p.resumo}
                  </span>
                </Link>
              ))}
            </div>
          )}
          {termo && paginasFiltradas.length === 0 && lugares.length === 0 && (
            <p className="px-2 py-4 text-sm text-tinta-suave">
              {t("nenhumResultado")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
