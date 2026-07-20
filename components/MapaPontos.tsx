"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { formatNumber } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import type { PontoResolvido } from "@/data/pontos";

const CORES: Record<PontoResolvido["categoria"], string> = {
  praias: "#1d4ed8",
  cultura: "#c2410c",
  natureza: "#166534",
  gastronomia: "#b45309",
  passeios: "#1e3a8a",
};

function iconePara(ponto: PontoResolvido, destaque: boolean) {
  const tamanho = destaque ? 42 : 32;
  return L.divIcon({
    className: "",
    html: `<div style="
      width:${tamanho}px;height:${tamanho}px;border-radius:4px;
      background:${CORES[ponto.categoria]};
      display:flex;align-items:center;justify-content:center;
      color:#fff;font:700 11px/1 Archivo,sans-serif;
      border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);
      ${destaque ? "outline:2px solid #c2410c;" : ""}
    ">★</div>`,
    iconSize: [tamanho, tamanho],
    iconAnchor: [tamanho / 2, tamanho / 2],
    popupAnchor: [0, -tamanho / 2],
  });
}

export default function MapaPontos({
  pontos,
  selecionado,
}: {
  pontos: PontoResolvido[];
  selecionado?: string;
}) {
  const t = useTranslations("comum");
  const locale = useLocale();
  const pontoSelecionado = pontos.find((p) => p.slug === selecionado);
  const centro: [number, number] = pontoSelecionado
    ? [pontoSelecionado.lat, pontoSelecionado.lng]
    : [-10.99, -37.1];

  return (
    <MapContainer
      center={centro}
      zoom={pontoSelecionado ? 15 : 11}
      scrollWheelZoom
      className="h-[70vh] min-h-[420px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pontos.map((p) => (
        <Marker
          key={p.slug}
          position={[p.lat, p.lng]}
          icon={iconePara(p, p.slug === selecionado)}
        >
          <Popup>
            <div>
              <div className="relative h-24 w-full">
                <Image
                  src={p.fotos[0]}
                  alt={p.nome}
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="font-semibold leading-snug text-tinta">{p.nome}</p>
                <p className="mt-0.5 text-xs font-semibold text-selo">
                  ★ {p.notaGoogle.toFixed(1)}{" "}
                  <span className="font-normal text-tinta-suave">
                    ({formatNumber(locale, p.avaliacoesGoogle)})
                  </span>
                </p>
                <Link
                  href={`/ponto/${p.slug}`}
                  className="mt-2 inline-block rounded bg-caju px-3 py-1.5 text-xs font-semibold !text-white"
                >
                  {t("verDetalhes")} →
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
