import { buscarPontos, mapaNomes, totalPontos } from "@/lib/busca-pontos";
import { routing } from "@/i18n/routing";

export const runtime = "nodejs";

function localeValido(locale: string | null): string {
  if (locale && routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return locale;
  }
  return routing.defaultLocale;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const locale = localeValido(searchParams.get("locale"));
  const q = searchParams.get("q")?.trim() ?? "";

  if (!q) {
    return Response.json({
      total: totalPontos(),
      nomes: mapaNomes(locale),
    });
  }

  return Response.json({
    total: totalPontos(),
    resultados: buscarPontos(locale, q),
  });
}
