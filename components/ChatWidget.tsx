"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Msg = { role: "user" | "assistant"; content: string };

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
  const fimRef = useRef<HTMLDivElement>(null);

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
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-caju bg-caju text-white shadow-lg md:bottom-6"
        aria-label={aberto ? t("fechar") : t("abrir")}
      >
        {aberto ? "×" : "🦜"}
      </button>

      {aberto && (
        <div className="fixed bottom-36 right-4 z-50 flex h-[min(70vh,520px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded border border-linha bg-papel shadow-2xl md:bottom-24">
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
                {[t("sugestao1"), t("sugestao2"), t("sugestao3")].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => enviar(s)}
                    className="rounded border border-linha bg-white px-3 py-1.5 text-left text-xs hover:border-caju"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-caju text-white"
                    : "bg-white border border-linha text-tinta"
                }`}
              >
                {m.role === "assistant" ? linkificar(m.content) : m.content}
              </div>
            ))}
            {enviando && (
              <p className="text-xs text-tinta-suave">{t("digitando")}</p>
            )}
            {erro && (
              <p className="text-xs text-caju-deep">{t("erro")}</p>
            )}
            <div ref={fimRef} />
          </div>

          <form
            className="flex gap-2 border-t border-linha p-3"
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
