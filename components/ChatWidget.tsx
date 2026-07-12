"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Msg = { role: "user" | "assistant"; content: string };

type SpeechRec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((ev: { results: { [i: number]: { [j: number]: { transcript: string } } } }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
};

function linkificar(texto: string) {
  const partes = texto.split(/(\/ponto\/[a-z0-9-]+)/g);
  return partes.map((p, i) =>
    p.startsWith("/ponto/") ? (
      <Link key={i} href={p} className="font-semibold text-arara underline">
        {p}
      </Link>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function ChatWidget() {
  const t = useTranslations("chat");
  const locale = useLocale();
  const [aberto, setAberto] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [texto, setTexto] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [semChave, setSemChave] = useState(false);
  const [erro, setErro] = useState(false);
  const [ouvindo, setOuvindo] = useState(false);
  const [falaOn, setFalaOn] = useState(true);
  const fimRef = useRef<HTMLDivElement>(null);
  const recRef = useRef<SpeechRec | null>(null);

  useEffect(() => {
    if (!aberto) return;
    fetch("/api/chat")
      .then((r) => r.json())
      .then((d) => setSemChave(!d.configured))
      .catch(() => setSemChave(true));
  }, [aberto]);

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, aberto]);

  function falar(textoFala: string) {
    if (!falaOn || typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(textoFala);
    u.lang = locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR";
    u.rate = 1.02;
    window.speechSynthesis.speak(u);
  }

  function iniciarVoz() {
    const SR =
      typeof window !== "undefined"
        ? (window as unknown as {
            SpeechRecognition?: new () => SpeechRec;
            webkitSpeechRecognition?: new () => SpeechRec;
          }).SpeechRecognition ||
          (window as unknown as { webkitSpeechRecognition?: new () => SpeechRec })
            .webkitSpeechRecognition
        : undefined;
    if (!SR) return;
    const rec = new SR();
    rec.lang = locale === "en" ? "en-US" : locale === "es" ? "es-ES" : "pt-BR";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (ev) => {
      const saido = ev.results[0]?.[0]?.transcript ?? "";
      if (saido) {
        setTexto(saido);
        void enviar(saido);
      }
    };
    rec.onerror = () => setOuvindo(false);
    rec.onend = () => setOuvindo(false);
    recRef.current = rec;
    setOuvindo(true);
    rec.start();
  }

  async function enviar(conteudo: string) {
    const msg = conteudo.trim();
    if (!msg || enviando) return;
    setErro(false);
    setTexto("");
    const proximas: Msg[] = [...msgs, { role: "user", content: msg }];
    setMsgs(proximas);
    setEnviando(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: proximas, locale }),
      });
      if (res.status === 503) {
        setSemChave(true);
        setMsgs((m) => [
          ...m,
          { role: "assistant", content: t("semChave") },
        ]);
        return;
      }
      if (!res.ok || !res.body) throw new Error("fail");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      setMsgs((m) => [...m, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const atual = acc;
        setMsgs((m) => {
          const copia = [...m];
          copia[copia.length - 1] = { role: "assistant", content: atual };
          return copia;
        });
      }
      if (acc) falar(acc);
    } catch {
      setErro(true);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto((a) => !a)}
        className="fixed bottom-20 right-4 z-50 flex max-w-[min(90vw,280px)] items-center gap-3 rounded-2xl border-2 border-white bg-caju px-4 py-3 text-left text-white shadow-[0_8px_24px_rgba(194,65,12,0.45)] transition hover:bg-caju-deep md:bottom-6"
        aria-label={aberto ? t("fechar") : t("abrir")}
      >
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20"
          aria-hidden
        >
          {aberto ? (
            <span className="text-lg font-bold leading-none">×</span>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4 14c3 1 5 4 6 7 2-3 5-5 9-5-2-3-5-5-8-6 1-3 1-6 0-8-2 2-4 5-7 6 2 1 3 3 0 6Z" />
            </svg>
          )}
        </span>
        {!aberto && (
          <span className="pr-1 text-sm font-semibold leading-snug">
            {t("badgeSuporte")}
            <span className="mt-0.5 block text-xs font-normal opacity-95">
              {t("badgeAjuda")}
            </span>
          </span>
        )}
      </button>

      {aberto && (
        <div className="fixed bottom-36 right-4 z-50 flex h-[min(72vh,560px)] w-[min(94vw,400px)] flex-col overflow-hidden rounded border border-linha bg-papel shadow-2xl md:bottom-24">
          <div className="border-b border-linha bg-arara-deep px-4 py-3 text-white">
            <p className="font-display text-lg font-semibold">{t("titulo")}</p>
            <p className="text-xs text-arara-soft">{t("subtitulo")}</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {semChave && msgs.length === 0 && (
              <p className="rounded border border-caju/30 bg-caju-soft/40 p-3 text-sm text-caju-deep">
                {t("semChave")}
              </p>
            )}
            {!semChave && msgs.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {[t("sugestao1"), t("sugestao2"), t("sugestao3"), t("sugestaoClima")].map(
                  (s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => enviar(s)}
                      className="rounded border border-linha bg-white px-3 py-1.5 text-left text-xs hover:border-caju"
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            )}
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-caju text-white"
                    : "border border-linha bg-white text-tinta"
                }`}
              >
                {m.role === "assistant" ? linkificar(m.content) : m.content}
              </div>
            ))}
            {enviando && (
              <p className="text-xs text-tinta-suave">{t("digitando")}</p>
            )}
            {erro && <p className="text-xs text-caju-deep">{t("erro")}</p>}
            <div ref={fimRef} />
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-linha px-3 pt-2">
            <button
              type="button"
              onClick={() => setFalaOn((v) => !v)}
              className="text-[10px] font-semibold uppercase tracking-wide text-tinta-suave hover:text-tinta"
            >
              {falaOn ? t("falaLigada") : t("falaDesligada")}
            </button>
            <button
              type="button"
              onClick={() => (ouvindo ? recRef.current?.stop() : iniciarVoz())}
              disabled={enviando || semChave}
              className={`rounded border px-2 py-1 text-[11px] font-semibold ${
                ouvindo
                  ? "border-caju bg-caju text-white"
                  : "border-linha bg-white text-tinta"
              }`}
            >
              {ouvindo ? t("ouvindo") : t("falar")}
            </button>
          </div>

          <form
            className="flex gap-2 p-3 pt-2"
            onSubmit={(e) => {
              e.preventDefault();
              enviar(texto);
            }}
          >
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder={t("placeholder")}
              disabled={enviando || semChave}
              className="flex-1 rounded border border-linha bg-white px-3 py-2 text-sm outline-none focus:border-caju disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={enviando || semChave || !texto.trim()}
              className="rounded bg-caju px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {t("enviar")}
            </button>
          </form>
          <p className="px-3 pb-2 text-[10px] text-tinta-suave">{t("avisoIA")}</p>
        </div>
      )}
    </>
  );
}
