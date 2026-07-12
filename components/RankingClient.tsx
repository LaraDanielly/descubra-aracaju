"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PontoResolvido } from "@/data/pontos";
import { tx } from "@/lib/locale-text";
import { rankingRestaurantes, type Restaurante } from "@/data/restaurantes";
import { rankingHoteis, type Hotel } from "@/data/hoteis";
import { linksDoSlug } from "@/data/links-externos";
import StarRating from "@/components/StarRating";
import TransporteBadge from "@/components/TransporteBadge";
import { RankBadge, RankLegenda } from "@/components/RankBadge";
import { LinksExternos } from "@/components/LinksExternos";

type Aba =
  | "lugares"
  | "visitados"
  | "praias"
  | "restaurantes"
  | "hoteis";

export default function RankingClient({
  lugares,
  praias,
  visitados,
}: {
  lugares: PontoResolvido[];
  praias: PontoResolvido[];
  visitados: PontoResolvido[];
}) {
  const t = useTranslations("ranking");
  const cidades = useTranslations("cidades");
  const locale = useLocale();
  const [aba, setAba] = useState<Aba>("lugares");

  const restaurantes = useMemo(() => rankingRestaurantes(), []);
  const hoteis = useMemo(() => rankingHoteis(), []);

  const abas: { id: Aba; label: string }[] = [
    { id: "lugares", label: t("tabLugares") },
    { id: "visitados", label: t("tabVisitados") },
    { id: "praias", label: t("tabPraias") },
    { id: "restaurantes", label: t("tabRestaurantes") },
    { id: "hoteis", label: t("tabHoteis") },
  ];

  const sub =
    aba === "lugares"
      ? t("lugaresSub", { total: lugares.length })
      : aba === "visitados"
        ? t("visitadosSub")
        : aba === "praias"
          ? t("praiasSub")
          : aba === "restaurantes"
            ? t("restSub")
            : t("hoteisSub");

  const linkLabels = {
    site: t("linkSite"),
    instagram: t("linkInstagram"),
    booking: t("linkBooking"),
    guia: t("linkGuia"),
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {abas.map((a) => (
          <button
            key={a.id}
            type="button"
            role="tab"
            aria-selected={aba === a.id}
            onClick={() => setAba(a.id)}
            className={`rounded border px-3 py-2 text-sm font-semibold transition ${
              aba === a.id
                ? "border-caju bg-caju text-white"
                : "border-linha bg-white text-tinta hover:border-caju/40"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-tinta-suave">{sub}</p>

      <RankLegenda
        titulo={t("legendaTitulo")}
        ouro={t("legendaOuro")}
        prata={t("legendaPrata")}
        bronze={t("legendaBronze")}
      />

      {(aba === "restaurantes" || aba === "hoteis") && (
        <p className="mt-3 rounded border border-caju/30 bg-caju-soft/40 px-3 py-2 text-xs text-caju-deep">
          {t("avisoPreco")}
        </p>
      )}

      <div className="renda my-6" />

      {(aba === "lugares" || aba === "visitados" || aba === "praias") && (
        <ol className="space-y-3">
          {(aba === "lugares"
            ? lugares
            : aba === "visitados"
              ? visitados
              : praias
          ).map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/ponto/${p.slug}`}
                prefetch={false}
                className="flex gap-3 rounded border border-linha bg-white p-3 transition hover:border-caju/40 hover:shadow-[3px_3px_0_rgba(196,92,38,0.12)] sm:items-center sm:gap-4"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded border border-linha sm:h-24 sm:w-36">
                  <Image
                    src={p.fotos[0]}
                    alt={p.nome}
                    fill
                    className="object-cover"
                    sizes="144px"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
                <RankBadge posicao={i + 1} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="truncate font-display text-lg font-semibold">
                      {p.nome}
                    </h2>
                    <span className="text-[10px] uppercase tracking-wide text-tinta-suave">
                      {cidades(p.cidade)}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <StarRating nota={p.notaGoogle} />
                    <span className="text-xs text-tinta-suave">
                      {t("avaliacoes", {
                        total: p.avaliacoesGoogle.toLocaleString("pt-BR"),
                      })}
                    </span>
                    <TransporteBadge tipo={p.melhorTransporte} compacto />
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs text-tinta-suave">
                    {p.resumo}
                  </p>
                </div>
                <span className="font-display text-xl font-semibold text-caju">
                  {p.notaGoogle.toFixed(1)}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}

      {aba === "restaurantes" && (
        <ol className="space-y-4">
          {restaurantes.map((r, i) => (
            <RestauranteCard
              key={r.slug}
              r={r}
              pos={i + 1}
              locale={locale}
              t={t}
              cidades={cidades}
              linkLabels={linkLabels}
            />
          ))}
        </ol>
      )}

      {aba === "hoteis" && (
        <ol className="space-y-4">
          {hoteis.map((h, i) => (
            <HotelCard
              key={h.slug}
              h={h}
              pos={i + 1}
              locale={locale}
              t={t}
              cidades={cidades}
              linkLabels={linkLabels}
            />
          ))}
        </ol>
      )}
    </div>
  );
}

function RestauranteCard({
  r,
  pos,
  locale,
  t,
  cidades,
  linkLabels,
}: {
  r: Restaurante;
  pos: number;
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cidades: any;
  linkLabels: {
    site: string;
    instagram: string;
    booking: string;
    guia: string;
  };
}) {
  const links = linksDoSlug(r.slug);
  return (
    <li className="overflow-hidden rounded border border-linha bg-white">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-44">
          <Image
            src={r.foto}
            alt={tx(locale, r.nome)}
            fill
            className="object-cover"
            sizes="176px"
            loading={pos <= 2 ? "eager" : "lazy"}
          />
          <span className="absolute left-2 top-2">
            <RankBadge posicao={pos} />
          </span>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="font-display text-xl font-semibold">
                {tx(locale, r.nome)}
              </h2>
              <p className="text-xs uppercase tracking-wide text-tinta-suave">
                {cidades(r.cidade)} · {tx(locale, r.bairro)}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl font-semibold text-caju">
                {r.notaGoogle.toFixed(1)}
              </p>
              <p className="text-[10px] text-tinta-suave">{t("notaGoogle")}</p>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <StarRating nota={r.notaGoogle} />
            <span className="text-xs text-tinta-suave">
              {t("avaliacoes", {
                total: r.avaliacoesGoogle.toLocaleString("pt-BR"),
              })}
            </span>
            <span className="rounded bg-papel-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-tinta">
              {tx(locale, r.especialidade)}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
            {tx(locale, r.resumo)}
          </p>
          <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <div className="rounded border border-linha bg-papel px-3 py-2">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-tinta-suave">
                {t("cardapio")}
              </dt>
              <dd className="mt-1 text-tinta">{tx(locale, r.cardapio)}</dd>
            </div>
            <div className="rounded border border-linha bg-papel px-3 py-2">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-tinta-suave">
                {t("precoPessoa")}
              </dt>
              <dd className="mt-1 font-semibold text-caju-deep">
                {tx(locale, r.faixaPreco)}
              </dd>
              <dd className="mt-1 text-xs text-tinta-suave">
                {tx(locale, r.endereco)}
              </dd>
            </div>
          </dl>
          {links.length > 0 && (
            <div className="mt-3">
              <LinksExternos links={links} labels={linkLabels} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

function HotelCard({
  h,
  pos,
  locale,
  t,
  cidades,
  linkLabels,
}: {
  h: Hotel;
  pos: number;
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cidades: any;
  linkLabels: {
    site: string;
    instagram: string;
    booking: string;
    guia: string;
  };
}) {
  const links = linksDoSlug(h.slug);
  return (
    <li className="overflow-hidden rounded border border-linha bg-white">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-44">
          <Image
            src={h.foto}
            alt={tx(locale, h.nome)}
            fill
            className="object-cover"
            sizes="176px"
            loading={pos <= 2 ? "eager" : "lazy"}
          />
          <span className="absolute left-2 top-2">
            <RankBadge posicao={pos} />
          </span>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="font-display text-xl font-semibold">
                {tx(locale, h.nome)}
              </h2>
              <p className="text-xs uppercase tracking-wide text-tinta-suave">
                {cidades(h.cidade)} · {tx(locale, h.categoria)}
              </p>
            </div>
            <div className="flex gap-3 text-right">
              <div>
                <p className="font-display text-2xl font-semibold text-arara">
                  {h.notaBooking.toFixed(1)}
                </p>
                <p className="text-[10px] text-tinta-suave">{t("notaBooking")}</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-caju">
                  {h.notaGoogle.toFixed(1)}
                </p>
                <p className="text-[10px] text-tinta-suave">{t("notaGoogle")}</p>
              </div>
            </div>
          </div>
          <p className="mt-2 inline-block rounded bg-arara-soft px-2 py-0.5 text-[11px] font-semibold text-arara-deep">
            {tx(locale, h.destaque)}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
            {tx(locale, h.resumo)}
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-tinta-suave">
                {t("diaria")}
              </p>
              <p className="font-semibold text-caju-deep">
                {tx(locale, h.diariaDesde)}
              </p>
              <p className="mt-1 text-xs text-tinta-suave">
                {tx(locale, h.endereco)}
              </p>
            </div>
            <div className="text-xs text-tinta-suave">
              <StarRating nota={h.notaGoogle} />
              <span className="ml-2">
                {t("avaliacoes", {
                  total: h.avaliacoesGoogle.toLocaleString("pt-BR"),
                })}
              </span>
            </div>
          </div>
          {links.length > 0 && (
            <div className="mt-3">
              <LinksExternos links={links} labels={linkLabels} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
