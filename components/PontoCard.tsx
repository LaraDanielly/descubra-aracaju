"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatNumber } from "@/lib/format";
import type { PontoResolvido } from "@/data/pontos";
import StarRating from "./StarRating";
import TransporteBadge from "./TransporteBadge";
import { RankBadge } from "./RankBadge";
import { CtaAraraInline } from "./CtaArara";

type Props = {
  ponto: PontoResolvido;
  posicao?: number;
};

export default function PontoCard({ ponto, posicao }: Props) {
  const t = useTranslations("comum");
  const cidades = useTranslations("cidades");
  const locale = useLocale();

  return (
    <Link
      href={`/ponto/${ponto.slug}`}
      prefetch={false}
      className="group flex h-full flex-col overflow-hidden rounded border border-linha bg-white shadow-[3px_3px_0_rgba(28,25,23,0.06)] transition hover:-translate-y-0.5 hover:border-caju/40 hover:shadow-[4px_4px_0_rgba(194,65,12,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-papel-2">
        <Image
          src={ponto.fotos[0]}
          alt={ponto.nome}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {typeof posicao === "number" && (
          <span className="absolute left-3 top-3">
            <RankBadge posicao={posicao} />
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded bg-tinta/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-papel">
          {cidades(ponto.cidade)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold leading-snug text-tinta group-hover:text-caju-deep">
            {ponto.nome}
          </h3>
          <TransporteBadge tipo={ponto.melhorTransporte} compacto />
        </div>
        <div className="flex items-center gap-2">
          <StarRating nota={ponto.notaGoogle} />
          <span className="text-xs text-tinta-suave">
            {t("noGoogle", {
              total: formatNumber(locale, ponto.avaliacoesGoogle),
            })}
          </span>
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-tinta-suave">
          {ponto.resumo}
        </p>
        <span className="mt-auto pt-2 text-sm font-semibold text-arara">
          <CtaAraraInline>{t("verDetalhes")} →</CtaAraraInline>
        </span>
      </div>
    </Link>
  );
}
