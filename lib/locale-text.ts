import type { Locale } from "@/i18n/routing";

/** Texto em português, inglês e espanhol */
export type Loc = {
  pt: string;
  en: string;
  es: string;
};

export function L(pt: string, en: string, es: string): Loc {
  return { pt, en, es };
}

/** Resolve um campo localizado para o idioma atual */
export function tx(locale: string, value: Loc | string): string {
  if (typeof value === "string") return value;
  return value[locale as Locale] ?? value.pt;
}

export function txList(locale: string, values: (Loc | string)[]): string[] {
  return values.map((v) => tx(locale, v));
}
