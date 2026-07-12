import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import {
  PONTOS,
  rankingPontos,
  resolverPonto,
} from "@/data/pontos";
import RankingClient from "@/components/RankingClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ranking" });
  return { title: t("metaTitulo"), description: t("metaDescricao") };
}

export default async function RankingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ranking");
  const loc = await getLocale();

  const lugares = rankingPontos().map((p) => resolverPonto(p, loc));
  const visitados = [...PONTOS]
    .sort(
      (a, b) =>
        b.avaliacoesGoogle - a.avaliacoesGoogle || b.notaGoogle - a.notaGoogle
    )
    .map((p) => resolverPonto(p, loc));
  const praias = rankingPontos()
    .filter((p) => p.categoria === "praias")
    .map((p) => resolverPonto(p, loc));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-semibold text-tinta">
        {t("titulo")}
      </h1>
      <p className="mt-2 text-tinta-suave">{t("subtitulo")}</p>
      <div className="mt-8">
        <RankingClient
          lugares={lugares}
          praias={praias}
          visitados={visitados}
        />
      </div>
    </div>
  );
}
