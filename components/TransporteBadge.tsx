"use client";

import { useTranslations } from "next-intl";
import type { Ponto } from "@/data/pontos";

const CORES: Record<Ponto["melhorTransporte"], string> = {
  "a-pe": "bg-folha/10 text-folha",
  onibus: "bg-arara-soft text-arara-deep",
  carro: "bg-arara-soft text-arara-deep",
  uber: "bg-papel-2 text-tinta",
  barco: "bg-caju-soft text-caju-deep",
};

export default function TransporteBadge({
  tipo,
  className = "",
  compacto = false,
}: {
  tipo: Ponto["melhorTransporte"];
  className?: string;
  compacto?: boolean;
}) {
  const t = useTranslations("transporteBadge");
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${CORES[tipo]} ${className}`}
      title={t(tipo)}
    >
      {compacto
        ? ({ "a-pe": "🚶", onibus: "🚌", carro: "🚗", uber: "🚕", barco: "⛵" }[
            tipo
          ] as string)
        : t(tipo)}
    </span>
  );
}
