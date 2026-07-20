import { PONTOS, rankingPontos, resolverPonto } from "@/data/pontos";
import type { PontoResolvido } from "@/data/tipos";

const MAX_PONTOS_PROMPT = 10;

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function pontosRelevantes(
  locale: string,
  pergunta: string
): PontoResolvido[] {
  const n = normalizar(pergunta);
  const ranked = rankingPontos().map((p) => resolverPonto(p, locale));

  if (!n) return ranked.slice(0, MAX_PONTOS_PROMPT);

  const matched = ranked.filter(
    (p) =>
      normalizar(p.nome).includes(n) ||
      normalizar(p.resumo).includes(n) ||
      normalizar(p.slug).includes(n)
  );

  const base = matched.length > 0 ? matched : ranked;
  return base.slice(0, MAX_PONTOS_PROMPT);
}

export function contextoGuia(locale: string, pergunta: string): string {
  const relevants = pontosRelevantes(locale, pergunta);
  const linhas = relevants
    .map(
      (p) =>
        `- ${p.nome} (${p.cidade}, ${p.categoria}) ★${p.notaGoogle} | ${p.melhorTransporte}: ${p.melhorTransporteMotivo} | ${p.preco} | /ponto/${p.slug}`
    )
    .join("\n");

  const idioma =
    locale === "en"
      ? "English"
      : locale === "es"
        ? "Spanish"
        : "português brasileiro";

  return `Você é o Caju, assistente de suporte e guia do site Descubra Aracaju. Fala de forma direta e concreta, sem marketing genérico e sem emojis em excesso.
Idioma da resposta: ${idioma}.
Você ajuda com: lugares, transporte, comida, hotéis e clima (quando houver dados de clima no histórico, use-os).
Fatos fixos:
- Ônibus em Aracaju não aceita dinheiro: só cartão Mais Aracaju, tarifa R$ 4,50.
- São Cristóvão fica a ~25 km; Praça São Francisco = UNESCO 2010.
- Aracaju fundada em 17/03/1855 (tabuleiro de Pirro).
- Quando citar um lugar do guia, mencione /ponto/{slug}.
Lugares relevantes (${relevants.length} de ${PONTOS.length}):
${linhas}`;
}

export const CHAT_LIMITS = {
  maxMessages: 20,
  maxContentLength: 2000,
  maxLastMessageLength: 500,
} as const;

export function validarMensagensChat(
  messages: { role: string; content: string }[]
): string | null {
  if (messages.length > CHAT_LIMITS.maxMessages) {
    return "too_many_messages";
  }
  for (const m of messages) {
    if (typeof m.content !== "string") return "invalid_message";
    if (m.content.length > CHAT_LIMITS.maxContentLength) {
      return "message_too_long";
    }
  }
  const last = messages.filter((m) => m.role === "user").at(-1)?.content;
  if (!last?.trim()) return "empty";
  if (last.length > CHAT_LIMITS.maxLastMessageLength) {
    return "last_message_too_long";
  }
  return null;
}
