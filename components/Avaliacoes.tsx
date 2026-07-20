"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { AvaliacaoViajante } from "@/data/avaliacoes-viajantes";
import { formatMonthYear, formatNumber } from "@/lib/format";
import {
  enviarAvaliacao,
  listarAvaliacoes,
  ordenarAvaliacoes,
  type Avaliacao,
} from "@/lib/avaliacoes";
import StarRating from "./StarRating";

interface ItemExibicao {
  chave: string;
  nome: string;
  origem?: string;
  nota: number;
  comentario: string;
  quando: string;
  doSite: boolean;
}

export default function Avaliacoes({
  slug,
  nomePonto,
  notaGoogle,
  totalGoogle,
  linkGoogle,
  curadas,
}: {
  slug: string;
  nomePonto: string;
  notaGoogle: number;
  totalGoogle: number;
  linkGoogle: string;
  curadas: AvaliacaoViajante[];
}) {
  const t = useTranslations("avaliacoes");
  const comum = useTranslations("comum");
  const locale = useLocale();
  const [doUsuario, setDoUsuario] = useState<Avaliacao[]>([]);
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState(5);
  const [comentario, setComentario] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  useEffect(() => {
    listarAvaliacoes(slug)
      .then(setDoUsuario)
      .catch(() => setDoUsuario([]));
  }, [slug]);

  const itens: ItemExibicao[] = useMemo(() => {
    const doSite: ItemExibicao[] = ordenarAvaliacoes(doUsuario).map((a) => ({
      chave: a.id,
      nome: a.nome,
      nota: a.nota,
      comentario: a.comentario,
      quando: formatMonthYear(locale, a.created_at),
      doSite: true,
    }));
    const externas: ItemExibicao[] = curadas.map((c, i) => ({
      chave: `curada-${i}`,
      nome: c.nome,
      origem: c.origem,
      nota: c.nota,
      comentario: c.comentario,
      quando: c.quando,
      doSite: false,
    }));
    return [...doSite, ...externas].sort(
      (a, b) => b.nota - a.nota || Number(b.doSite) - Number(a.doSite)
    );
  }, [doUsuario, curadas, locale]);

  const mediaSite = useMemo(() => {
    const todas = [
      ...doUsuario.map((a) => a.nota),
      ...curadas.map((c) => c.nota),
    ];
    if (todas.length === 0) return null;
    return todas.reduce((s, n) => s + n, 0) / todas.length;
  }, [doUsuario, curadas]);

  async function aoEnviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !comentario.trim()) return;
    setEnviando(true);
    setMensagem(null);
    try {
      const { avaliacao, persistencia } = await enviarAvaliacao({
        ponto_slug: slug,
        nome: nome.trim(),
        nota,
        comentario: comentario.trim(),
      });
      setDoUsuario((atual) => [avaliacao, ...atual]);
      setNome("");
      setComentario("");
      setNota(5);
      setMensagem(
        persistencia === "supabase" ? t("sucessoSupabase") : t("sucessoLocal")
      );
    } catch {
      setMensagem(t("erro"));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section aria-labelledby="titulo-avaliacoes">
      <h2
        id="titulo-avaliacoes"
        className="font-display text-2xl font-semibold text-tinta"
      >
        {t("titulo")}
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded border border-linha bg-white p-4">
          <div className="font-display text-4xl font-semibold text-tinta">
            {notaGoogle.toFixed(1)}
          </div>
          <div>
            <StarRating nota={notaGoogle} />
            <p className="mt-1 text-xs text-tinta-suave">
              {comum("avaliacoesNoGoogle", {
                total: formatNumber(locale, totalGoogle),
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded border border-linha bg-white p-4">
          <div className="font-display text-4xl font-semibold text-caju">
            {mediaSite ? mediaSite.toFixed(1) : "—"}
          </div>
          <div>
            {mediaSite ? <StarRating nota={mediaSite} /> : null}
            <p className="mt-1 text-xs text-tinta-suave">
              {t("aquiNoSite", { total: itens.length })}
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={aoEnviar}
        className="mt-6 rounded border border-linha bg-white p-5"
      >
        <h3 className="font-display text-lg font-semibold">{t("formTitulo")}</h3>
        <p className="mt-1 text-sm text-tinta-suave">{t("formSubtitulo")}</p>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-tinta-suave">
            {t("suaNota")}
          </p>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNota(n)}
                className={`h-9 w-9 rounded border text-sm font-semibold ${
                  nota >= n
                    ? "border-selo bg-caju-soft text-selo"
                    : "border-linha text-tinta-suave"
                }`}
                aria-label={n === 1 ? t("estrela", { n }) : t("estrelas", { n })}
              >
                ★
              </button>
            ))}
            <span className="ml-2 self-center text-sm text-tinta-suave">
              {t(`notas.${nota}` as "notas.5")}
            </span>
          </div>
        </div>

        <label className="mt-4 block text-sm">
          <span className="font-semibold">{t("seuNome")}</span>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="mt-1 w-full rounded border border-linha px-3 py-2 outline-none focus:border-caju"
          />
        </label>
        <label className="mt-3 block text-sm">
          <span className="font-semibold">{t("seuComentario")}</span>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
            rows={3}
            placeholder={t("comentarioPlaceholder", { nome: nomePonto })}
            className="mt-1 w-full rounded border border-linha px-3 py-2 outline-none focus:border-caju"
          />
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={enviando}
            className="rounded border border-caju bg-caju px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {enviando ? t("enviando") : t("publicar")}
          </button>
          <a
            href={linkGoogle}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-arara"
          >
            {t("avaliarGoogle")} →
          </a>
        </div>
        {mensagem && (
          <p className="mt-3 text-sm text-folha">{mensagem}</p>
        )}
      </form>

      <ul className="mt-6 space-y-3">
        {itens.map((item) => (
          <li
            key={item.chave}
            className="rounded border border-linha bg-papel px-4 py-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-semibold text-tinta">
                  {item.nome}
                  {item.origem ? (
                    <span className="font-normal text-tinta-suave">
                      {" "}
                      · {item.origem}
                    </span>
                  ) : null}
                  {item.doSite ? (
                    <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-caju">
                      {t("avaliadoAqui")}
                    </span>
                  ) : null}
                </p>
                <p className="text-xs text-tinta-suave">{item.quando}</p>
              </div>
              <StarRating nota={item.nota} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-tinta">
              {item.comentario}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
