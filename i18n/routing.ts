import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  // Português sem prefixo (/, /ranking); inglês e espanhol com prefixo (/en, /es)
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
