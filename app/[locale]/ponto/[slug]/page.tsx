import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getLocale,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  PONTOS,
  linkLugarGoogleMaps,
  pontoPorSlug,
  rankingPontos,
  resolverPonto,
} from "@/data/pontos";
import { avaliacoesDoPonto } from "@/data/avaliacoes-viajantes";
import { linksDoSlug } from "@/data/links-externos";
import StarRating from "@/components/StarRating";
import ComoChegar from "@/components/ComoChegar";
import Avaliacoes from "@/components/Avaliacoes";
import PontoCard from "@/components/PontoCard";
import TransporteBadge from "@/components/TransporteBadge";
import MapaClient from "@/components/MapaClient";
import { LinksExternos } from "@/components/LinksExternos";
import { RankBadge } from "@/components/RankBadge";
import { formatNumber } from "@/lib/format";

export function generateStaticParams() {
  return PONTOS.flatMap((p) =>
    ["pt", "en", "es"].map((locale) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const bruto = pontoPorSlug(slug);
  if (!bruto) return {};
  const p = resolverPonto(bruto, locale);
  return {
    title: p.nome,
    description: p.resumo,
  };
}

export default async function PontoPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const bruto = pontoPorSlug(slug);
  if (!bruto) notFound();

  const t = await getTranslations("ponto");
  const cidades = await getTranslations("cidades");
  const loc = await getLocale();
  const ponto = resolverPonto(bruto, loc);
  const ranking = rankingPontos();
  const posicao = ranking.findIndex((p) => p.slug === slug) + 1;
  const curadas = avaliacoesDoPonto(slug);
  const links = linksDoSlug(slug);
  const relacionados = ranking
    .filter((p) => p.slug !== slug && p.categoria === ponto.categoria)
    .slice(0, 3)
    .map((p) => resolverPonto(p, loc));
  const mapaPontos = [ponto];

  return (
    <article>
      <div className="relative h-[42vh] min-h-[280px] bg-arara-deep">
        <Image
          src={ponto.fotos[0]}
          alt={ponto.nome}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-papel via-transparent to-arara-deep/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="-mt-16 relative rounded border border-linha bg-white p-6 shadow-[4px_4px_0_rgba(28,25,23,0.06)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <RankBadge posicao={posicao} />
                <p className="text-xs font-semibold uppercase tracking-wide text-tinta-suave">
                  {cidades(ponto.cidade)} · {t("posicaoRanking", { posicao })}
                </p>
              </div>
              <h1 className="mt-1 font-display text-3xl font-semibold text-tinta sm:text-4xl">
                {ponto.nome}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <StarRating nota={ponto.notaGoogle} />
                <span className="text-sm text-tinta-suave">
                  {ponto.notaGoogle.toFixed(1)} ·{" "}
                  {formatNumber(loc, ponto.avaliacoesGoogle)}{" "}
                  {t("avaliacoesGoogle")}
                </span>
                <TransporteBadge tipo={ponto.melhorTransporte} />
              </div>
            </div>
            <a
              href={linkLugarGoogleMaps(ponto)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-linha px-3 py-2 text-sm font-semibold text-arara hover:bg-arara-soft"
            >
              Google Maps
            </a>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-tinta-suave">
            {ponto.resumo}
          </p>

          {links.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-tinta-suave">
                {t("conhecerMais")}
              </p>
              <LinksExternos
                links={links}
                labels={{
                  site: t("linkSite"),
                  instagram: t("linkInstagram"),
                  booking: t("linkBooking"),
                  guia: t("linkGuia"),
                }}
              />
            </div>
          )}

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              [t("horario"), ponto.horario],
              [t("preco"), ponto.preco],
              [t("tempoVisita"), ponto.tempoVisita],
            ].map(([k, v]) => (
              <div key={k} className="rounded border border-linha bg-papel px-3 py-3">
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-tinta-suave">
                  {k}
                </dt>
                <dd className="mt-1 text-sm text-tinta">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-2xl font-semibold">{t("sobre")}</h2>
              <div className="renda my-4" />
              <p className="leading-relaxed text-tinta-suave">{ponto.descricao}</p>
              <p className="mt-3 text-sm text-tinta-suave">
                <span className="font-semibold text-tinta">{t("endereco")}:</span>{" "}
                {ponto.endereco}
              </p>
            </section>

            {ponto.fotos.length > 1 && (
              <section>
                <h2 className="font-display text-2xl font-semibold">{t("fotos")}</h2>
                <div className="renda my-4" />
                <div className="grid grid-cols-2 gap-3">
                  {ponto.fotos.slice(1).map((f) => (
                    <div
                      key={f}
                      className="relative aspect-[4/3] overflow-hidden rounded border border-linha"
                    >
                      <Image
                        src={f}
                        alt={ponto.nome}
                        fill
                        className="object-cover"
                        sizes="40vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {ponto.dicas.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-semibold">{t("dicas")}</h2>
                <div className="renda my-4" />
                <ul className="space-y-2">
                  {ponto.dicas.map((d) => (
                    <li
                      key={d}
                      className="rounded border border-linha bg-papel px-4 py-3 text-sm text-tinta"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <ComoChegar ponto={ponto} />

            <Avaliacoes
              slug={ponto.slug}
              nomePonto={ponto.nome}
              notaGoogle={ponto.notaGoogle}
              totalGoogle={ponto.avaliacoesGoogle}
              linkGoogle={linkLugarGoogleMaps(ponto)}
              curadas={curadas}
            />
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded border border-linha">
              <div className="border-b border-linha bg-papel px-4 py-3">
                <h2 className="font-display text-lg font-semibold">
                  {t("verNoMapa")}
                </h2>
                <p className="text-xs text-tinta-suave">{t("verNoMapaTexto")}</p>
              </div>
              <div className="h-64">
                <MapaClient pontos={mapaPontos} selecionado={ponto.slug} />
              </div>
              <div className="border-t border-linha p-3">
                <Link
                  href="/mapa"
                  className="text-sm font-semibold text-arara"
                >
                  {t("abrirMapa")} →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {relacionados.length > 0 && (
          <section className="py-14">
            <h2 className="font-display text-2xl font-semibold">
              {t("relacionados")}
            </h2>
            <div className="renda my-6" />
            <div className="grid gap-6 sm:grid-cols-3">
              {relacionados.map((p) => (
                <PontoCard key={p.slug} ponto={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
