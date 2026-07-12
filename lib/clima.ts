/**
 * Clima via Open-Meteo (sem API key).
 * Geocoding + current weather para qualquer lugar perguntado.
 */
export type ClimaResumo = {
  lugar: string;
  temperatura: number;
  sensacao: number;
  umidade: number;
  vento: number;
  codigo: number;
  descricao: string;
};

const WMO: Record<number, { pt: string; en: string; es: string }> = {
  0: { pt: "céu limpo", en: "clear sky", es: "cielo despejado" },
  1: { pt: "principalmente limpo", en: "mainly clear", es: "mayormente despejado" },
  2: { pt: "parcialmente nublado", en: "partly cloudy", es: "parcialmente nublado" },
  3: { pt: "nublado", en: "overcast", es: "nublado" },
  45: { pt: "neblina", en: "fog", es: "niebla" },
  48: { pt: "neblina com geada", en: "depositing rime fog", es: "niebla con escarcha" },
  51: { pt: "garoa leve", en: "light drizzle", es: "llovizna ligera" },
  61: { pt: "chuva fraca", en: "slight rain", es: "lluvia ligera" },
  63: { pt: "chuva moderada", en: "moderate rain", es: "lluvia moderada" },
  65: { pt: "chuva forte", en: "heavy rain", es: "lluvia fuerte" },
  80: { pt: "pancadas de chuva", en: "rain showers", es: "chubascos" },
  95: { pt: "trovoada", en: "thunderstorm", es: "tormenta" },
};

function descricaoCodigo(code: number, locale: string): string {
  const d = WMO[code] ?? {
    pt: `código do tempo ${code}`,
    en: `weather code ${code}`,
    es: `código del tiempo ${code}`,
  };
  return locale === "en" ? d.en : locale === "es" ? d.es : d.pt;
}

/** Extrai possível nome de lugar de perguntas sobre clima. */
export function extrairLugarClima(texto: string): string | null {
  const t = texto.trim();
  const padroes = [
    /(?:tempo|clima|temperatura|faz calor|vai chover|weather|forecast|clima en|tiempo en)\s+(?:em|em\s+|no|na|em\s+)?\s*(.+)$/i,
    /(?:como está|como esta|how's|how is)\s+(?:o\s+)?(?:tempo|clima)\s+(?:em|no|na|in)\s+(.+)/i,
    /(?:tempo|clima)\s+(?:em|no|na|in|en)\s+([A-Za-zÀ-ú\s\-']{2,60})/i,
  ];
  for (const re of padroes) {
    const m = t.match(re);
    if (m?.[1]) {
      return m[1]
        .replace(/[?!.]+$/, "")
        .replace(/\s+(hoje|agora|amanhã|amanha|today|now).*$/i, "")
        .trim();
    }
  }
  if (/(tempo|clima|temperatura|vai chover|weather)/i.test(t)) {
    return "Aracaju";
  }
  return null;
}

export async function buscarClima(
  lugar: string,
  locale: string
): Promise<ClimaResumo | null> {
  const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geoUrl.searchParams.set("name", lugar);
  geoUrl.searchParams.set("count", "1");
  geoUrl.searchParams.set("language", locale === "en" ? "en" : "pt");
  geoUrl.searchParams.set("format", "json");

  const geoRes = await fetch(geoUrl.toString(), { next: { revalidate: 1800 } });
  if (!geoRes.ok) return null;
  const geo = (await geoRes.json()) as {
    results?: { name: string; country?: string; latitude: number; longitude: number; admin1?: string }[];
  };
  const hit = geo.results?.[0];
  if (!hit) return null;

  const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
  weatherUrl.searchParams.set("latitude", String(hit.latitude));
  weatherUrl.searchParams.set("longitude", String(hit.longitude));
  weatherUrl.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m"
  );
  weatherUrl.searchParams.set("timezone", "auto");

  const wRes = await fetch(weatherUrl.toString(), { next: { revalidate: 900 } });
  if (!wRes.ok) return null;
  const w = (await wRes.json()) as {
    current?: {
      temperature_2m: number;
      relative_humidity_2m: number;
      apparent_temperature: number;
      weather_code: number;
      wind_speed_10m: number;
    };
  };
  const c = w.current;
  if (!c) return null;

  const nome = [hit.name, hit.admin1, hit.country].filter(Boolean).join(", ");
  return {
    lugar: nome,
    temperatura: c.temperature_2m,
    sensacao: c.apparent_temperature,
    umidade: c.relative_humidity_2m,
    vento: c.wind_speed_10m,
    codigo: c.weather_code,
    descricao: descricaoCodigo(c.weather_code, locale),
  };
}

export function formatarClima(c: ClimaResumo, locale: string): string {
  if (locale === "en") {
    return `Weather in ${c.lugar}: ${c.temperatura}°C (${c.descricao}), feels like ${c.sensacao}°C, humidity ${c.umidade}%, wind ${c.vento} km/h. Source: Open-Meteo.`;
  }
  if (locale === "es") {
    return `Clima en ${c.lugar}: ${c.temperatura}°C (${c.descricao}), sensación ${c.sensacao}°C, humedad ${c.umidade}%, viento ${c.vento} km/h. Fuente: Open-Meteo.`;
  }
  return `Clima em ${c.lugar}: ${c.temperatura}°C (${c.descricao}), sensação ${c.sensacao}°C, umidade ${c.umidade}%, vento ${c.vento} km/h. Fonte: Open-Meteo.`;
}
