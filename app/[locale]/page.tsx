import Image from "next/image";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { PONTOS, rankingPontos, resolverPonto } from "@/data/pontos";
import PontoCard from "@/components/PontoCard";
import HeroBusca from "@/components/HeroBusca";
import MapaBrasilSergipe from "@/components/MapaBrasilSergipe";
import FiltrosInicio from "@/components/FiltrosInicio";
import CtaArara, { CtaAraraAnchor } from "@/components/CtaArara";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const loc = await getLocale();
  const top10 = rankingPontos()
    .slice(0, 10)
    .map((p) => resolverPonto(p, loc));
  const todos = PONTOS.map((p) => resolverPonto(p, loc));
  const destaque = top10[0];
  const media =
    Math.round(
      (PONTOS.reduce((s, p) => s + p.notaGoogle, 0) / PONTOS.length) * 10
    ) / 10;

  return (
    <>
      <section className="relative overflow-hidden bg-arara-deep">
        <Image
          src={destaque.fotos[0]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arara-deep/90 via-arara-deep/80 to-papel" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-caju-soft">
              {t("eyebrow")}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-white drop-shadow-sm sm:text-5xl">
              {t("titulo1")}{" "}
              <span className="text-caju-soft">{t("tituloDestaque")}</span>{" "}
              {t("titulo2")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {t("subtitulo")}
            </p>

            <HeroBusca pontos={todos} />

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaAraraAnchor href="#top10" variant="solid">
                {t("ctaLugares")}
              </CtaAraraAnchor>
              <CtaArara href="/transporte" variant="outline">
                {t("ctaTransporte")}
              </CtaArara>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3">
              {[
                { n: String(PONTOS.length), r: t("statLugares") },
                { n: `${media}★`, r: t("statNota") },
                { n: "2", r: t("statCidades") },
              ].map((s) => (
                <div
                  key={s.r}
                  className="rounded-lg border-2 border-caju/40 bg-papel px-3 py-4 text-center shadow-[3px_3px_0_rgba(28,25,23,0.2)]"
                >
                  <div className="font-display text-2xl font-bold text-caju-deep sm:text-3xl">
                    {s.n}
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium leading-snug text-tinta sm:text-xs">
                    {s.r}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-4">
              <MapaBrasilSergipe className="w-full" />
              <p className="mt-3 text-center text-[11px] font-medium tracking-wide text-white/80">
                {t("mapaLegenda")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-4 max-w-6xl px-4">
        <div className="rounded border border-linha bg-white p-6 shadow-[4px_4px_0_rgba(28,25,23,0.06)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-caju">
                IBGE
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-tinta sm:text-3xl">
                {t("previewTitulo")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-tinta-suave sm:text-base">
                {t("previewTexto")}
              </p>
            </div>
            <CtaArara href="/historia" variant="soft" className="shrink-0">
              {t("previewCta")} →
            </CtaArara>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              [t("previewPop"), t("previewPopLabel")],
              [t("previewArea"), t("previewAreaLabel")],
              [t("previewEstado"), t("previewEstadoLabel")],
            ].map(([n, label]) => (
              <div
                key={label}
                className="rounded border border-linha bg-papel px-4 py-3"
              >
                <p className="font-display text-xl font-semibold text-arara-deep">
                  {n}
                </p>
                <p className="mt-1 text-xs text-tinta-suave">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-tinta-suave">{t("previewFonte")}</p>
        </div>
      </section>

      <section id="top10" className="mx-auto max-w-6xl px-4 pt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-tinta">
              {t("topTitulo")}
            </h2>
            <p className="mt-1 text-sm text-tinta-suave">{t("topSubtitulo")}</p>
          </div>
          <CtaArara href="/ranking" className="hidden sm:inline-flex">
            {t("rankingCompleto")} →
          </CtaArara>
        </div>
        <div className="renda my-6" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top10.map((p, i) => (
            <PontoCard key={p.slug} ponto={p} posicao={i + 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded border border-linha bg-white p-6 shadow-[3px_3px_0_rgba(28,25,23,0.05)]">
            <h2 className="font-display text-2xl font-semibold text-tinta">
              {t("faixaOnibusTitulo")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
              {t("faixaOnibusTexto")}
            </p>
            <CtaArara href="/transporte" className="mt-4">
              {t("faixaOnibusCta")} →
            </CtaArara>
          </div>
          <div className="rounded border border-arara/20 bg-arara-soft/40 p-6">
            <h2 className="font-display text-2xl font-semibold text-arara-deep">
              {t("saoCristovaoTitulo")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
              {t("saoCristovaoTexto")}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <CtaArara href="/mapa">{t("saoCristovaoCta")} →</CtaArara>
              <CtaArara href="/historia">{t("historiaCta")} →</CtaArara>
            </div>
          </div>
        </div>
      </section>

      <FiltrosInicio />
    </>
  );
}
