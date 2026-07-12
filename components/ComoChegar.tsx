"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PontoResolvido } from "@/data/pontos";
import {
  linkMoovit,
  linkRotaGoogleMaps,
  linkUber,
} from "@/data/pontos";

type Aba = "onibus" | "carro" | "uber";

export default function ComoChegar({ ponto }: { ponto: PontoResolvido }) {
  const t = useTranslations("comoChegar");
  const [aba, setAba] = useState<Aba>(
    ponto.melhorTransporte === "carro"
      ? "carro"
      : ponto.melhorTransporte === "uber"
        ? "uber"
        : "onibus"
  );

  return (
    <section aria-labelledby="titulo-como-chegar">
      <h2
        id="titulo-como-chegar"
        className="font-display text-2xl font-semibold text-tinta"
      >
        {t("titulo")}
      </h2>

      <div className="mt-4 rounded border border-arara/20 bg-arara-deep p-5 text-white">
        <p className="font-display text-lg font-semibold">
          {t(`melhorOpcao.${ponto.melhorTransporte}`)}
        </p>
        <p className="mt-1 text-sm text-arara-soft">
          {ponto.melhorTransporteMotivo}
        </p>
      </div>

      <div
        className="mt-4 flex flex-wrap gap-2"
        role="tablist"
        aria-label={t("abasAria")}
      >
        {(
          [
            { id: "onibus", rotulo: t("abaOnibus") },
            { id: "carro", rotulo: t("abaCarro") },
            { id: "uber", rotulo: t("abaUber") },
          ] as { id: Aba; rotulo: string }[]
        ).map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={aba === item.id}
            onClick={() => setAba(item.id)}
            className={`rounded border px-4 py-2 text-sm font-semibold transition ${
              aba === item.id
                ? "border-caju bg-caju text-white"
                : "border-linha bg-white text-tinta hover:border-caju/40"
            }`}
          >
            {item.rotulo}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded border border-linha bg-white p-5">
        {aba === "onibus" && (
          <div role="tabpanel" className="space-y-4">
            <p className="rounded border border-caju/30 bg-caju-soft/50 px-3 py-2 text-sm text-caju-deep">
              {t("avisoOnibus")}{" "}
              <Link href="/transporte" className="font-semibold underline">
                {t("verCartao")}
              </Link>
            </p>
            {ponto.linhasOnibus.length === 0 ? (
              <p className="text-sm text-tinta-suave">—</p>
            ) : (
              <ul className="space-y-3">
                {ponto.linhasOnibus.map((l) => (
                  <li
                    key={l.numero + l.nome}
                    className="rounded border border-linha bg-papel px-3 py-3"
                  >
                    <p className="font-semibold text-tinta">
                      {l.numero} · {l.nome}
                    </p>
                    <p className="mt-1 text-sm text-tinta-suave">{l.dica}</p>
                  </li>
                ))}
              </ul>
            )}
            <a
              href={linkMoovit(ponto)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-arara"
            >
              {t("rotaMoovit")} →
            </a>
          </div>
        )}

        {aba === "carro" && (
          <div role="tabpanel" className="space-y-3">
            <p className="text-sm font-semibold text-tinta">
              {t(`estacionamento.${ponto.estacionamento}`)}
            </p>
            <p className="text-sm text-tinta-suave">
              {ponto.estacionamentoDica}
            </p>
            <p className="text-sm text-tinta-suave">{t("transitoTexto")}</p>
            <a
              href={linkRotaGoogleMaps(ponto)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-arara"
            >
              {t("rotaGoogleMaps")} →
            </a>
          </div>
        )}

        {aba === "uber" && (
          <div role="tabpanel" className="space-y-3">
            <p className="text-sm">
              <span className="font-semibold">{t("uberDaOrla")}:</span>{" "}
              {ponto.uberDaOrla}
            </p>
            <p className="text-sm">
              <span className="font-semibold">{t("uberDoCentro")}:</span>{" "}
              {ponto.uberDoCentro}
            </p>
            <p className="text-xs text-tinta-suave">{t("uberAviso")}</p>
            <a
              href={linkUber(ponto)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border border-tinta bg-tinta px-4 py-2 text-sm font-semibold text-papel"
            >
              {t("chamarUber")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
