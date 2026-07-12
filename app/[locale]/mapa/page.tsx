import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { PONTOS, resolverPonto } from "@/data/pontos";
import MapaClient from "@/components/MapaClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mapa" });
  return { title: t("metaTitulo"), description: t("metaDescricao") };
}

export default async function MapaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("mapa");
  const loc = await getLocale();
  const pontos = PONTOS.map((p) => resolverPonto(p, loc));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl font-semibold text-tinta">
        {t("titulo")}
      </h1>
      <p className="mt-2 text-tinta-suave">
        {t("subtitulo", { total: pontos.length })}
      </p>
      <div className="renda my-6" />
      <div className="overflow-hidden rounded border border-linha bg-white">
        <MapaClient pontos={pontos} />
      </div>
    </div>
  );
}
