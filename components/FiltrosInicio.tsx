"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import CtaArara from "./CtaArara";

const FILTROS = [
  { id: "praias", href: "/ranking", cor: "bg-arara" },
  { id: "cultura", href: "/ranking", cor: "bg-caju" },
  { id: "natureza", href: "/ranking", cor: "bg-folha" },
  { id: "gastronomia", href: "/ranking", cor: "bg-selo" },
  { id: "passeios", href: "/ranking", cor: "bg-arara-deep" },
  { id: "hoteis", href: "/ranking", cor: "bg-caju-deep" },
] as const;

/** Filtros compactos no lugar da grade “Todos os lugares”. */
export default function FiltrosInicio() {
  const t = useTranslations("home");
  const cat = useTranslations("categorias");

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold text-tinta">
            {t("filtrosTitulo")}
          </h2>
          <p className="mt-1 text-sm text-tinta-suave">{t("filtrosSub")}</p>
        </div>
        <CtaArara href="/ranking" variant="text">
          {t("rankingCompleto")} →
        </CtaArara>
      </div>
      <div className="renda my-6" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FILTROS.map((f) => (
          <Link
            key={f.id}
            href={f.href}
            className="group flex items-center gap-3 rounded border border-linha bg-white p-4 transition hover:border-caju/40 hover:shadow-[3px_3px_0_rgba(196,92,38,0.1)]"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded ${f.cor} text-white`}
              aria-hidden
            >
              <span className="cta-arara-static opacity-90">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M4 14c3 1 5 4 6 7 2-3 5-5 9-5-2-3-5-5-8-6 1-3 1-6 0-8-2 2-4 5-7 6 2 1 3 3 0 6Z" />
                </svg>
              </span>
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-tinta group-hover:text-caju-deep">
                {f.id === "hoteis" ? t("filtroHoteis") : cat(f.id)}
              </p>
              <p className="text-xs text-tinta-suave">{t("filtroVer")}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
