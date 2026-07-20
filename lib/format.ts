import type { Locale } from "@/i18n/routing";

const TAG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export function localeTag(locale: string): string {
  return TAG[locale as Locale] ?? "pt-BR";
}

export function formatNumber(locale: string, value: number): string {
  return value.toLocaleString(localeTag(locale));
}

export function formatMonthYear(locale: string, iso: string): string {
  return new Date(iso).toLocaleDateString(localeTag(locale), {
    month: "long",
    year: "numeric",
  });
}

export function speechLang(locale: string): string {
  return localeTag(locale);
}
