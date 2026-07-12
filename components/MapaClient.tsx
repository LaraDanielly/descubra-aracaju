"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import type { PontoResolvido } from "@/data/pontos";

function LoadingMapa() {
  const t = useTranslations("mapa");
  return (
    <div className="flex h-[70vh] min-h-[420px] items-center justify-center bg-papel-2 text-tinta-suave">
      {t("carregando")}
    </div>
  );
}

const MapaPontos = dynamic(() => import("./MapaPontos"), {
  ssr: false,
  loading: () => <LoadingMapa />,
});

export default function MapaClient({
  pontos,
  selecionado,
}: {
  pontos: PontoResolvido[];
  selecionado?: string;
}) {
  return <MapaPontos pontos={pontos} selecionado={selecionado} />;
}
