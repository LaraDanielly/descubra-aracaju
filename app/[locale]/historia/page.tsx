import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const EVENTOS = [
  "1590",
  "1607",
  "1637",
  "1746",
  "1855-1",
  "1855-2",
  "1908",
  "1926",
  "1967",
  "1993",
  "2010",
  "2025",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "historia" });
  return { title: t("metaTitulo"), description: t("metaDescricao") };
}

export default async function HistoriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("historia");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-semibold text-tinta">
        {t("titulo")}
      </h1>
      <p className="mt-3 max-w-2xl text-tinta-suave">{t("subtitulo")}</p>
      <div className="renda my-8" />

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded border border-linha bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-caju">
            1855
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold">
            {t("aracajuTitulo")}
          </h2>
          <p className="mt-1 text-sm text-tinta-suave">{t("aracajuSubtitulo")}</p>
          <p className="mt-4 text-sm leading-relaxed text-tinta">
            {t("aracajuResumo")}
          </p>
        </section>
        <section className="rounded border border-arara/20 bg-arara-soft/30 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-arara">
            1590
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-arara-deep">
            {t("saoCristovaoTitulo")}
          </h2>
          <p className="mt-1 text-sm text-tinta-suave">
            {t("saoCristovaoSubtitulo")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-tinta">
            {t("saoCristovaoResumo")}
          </p>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">
          {t("linhaDoTempo")}
        </h2>
        <div className="renda my-6" />
        <ol className="relative space-y-0 border-l-2 border-caju/40 pl-6">
          {EVENTOS.map((ano) => (
            <li key={ano} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full border-2 border-caju bg-papel" />
              <p className="font-display text-sm font-semibold text-caju">
                {ano.replace("-1", "").replace("-2", "")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-tinta">
                {t(`eventos.${ano}`)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t("fatosTitulo")}</h2>
        <div className="renda my-6" />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [t("fatoPopulacao"), `${t("fatoPopulacaoAju")} · ${t("fatoPopulacaoSC")}`],
            [t("fatoClima"), t("fatoClimaTexto")],
            [t("fatoMelhorEpoca"), t("fatoMelhorEpocaTexto")],
            [t("fatoPratos"), t("fatoPratosTexto")],
          ].map(([k, v]) => (
            <div key={k} className="rounded border border-linha bg-white p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-tinta-suave">
                {k}
              </h3>
              <p className="mt-2 text-sm text-tinta">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/#explorar"
          className="rounded border border-caju bg-caju px-4 py-2.5 text-sm font-semibold text-white"
        >
          {t("cta")}
        </Link>
        <Link
          href="/ranking"
          className="rounded border border-linha bg-white px-4 py-2.5 text-sm font-semibold"
        >
          {t("verPontosAju")}
        </Link>
        <Link
          href="/mapa"
          className="rounded border border-linha bg-white px-4 py-2.5 text-sm font-semibold"
        >
          {t("verPontosSC")}
        </Link>
      </div>
    </div>
  );
}
