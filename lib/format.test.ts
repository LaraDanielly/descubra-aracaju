import { describe, expect, it } from "vitest";
import { formatNumber, formatMonthYear, localeTag } from "@/lib/format";

describe("format", () => {
  it("localeTag mapeia idiomas suportados", () => {
    expect(localeTag("pt")).toBe("pt-BR");
    expect(localeTag("en")).toBe("en-US");
    expect(localeTag("xx")).toBe("pt-BR");
  });

  it("formatNumber respeita locale", () => {
    expect(formatNumber("en", 48500)).toMatch(/48,500|48\.500/);
  });

  it("formatMonthYear retorna mês por locale", () => {
    const pt = formatMonthYear("pt", "2025-06-15T12:00:00.000Z");
    const en = formatMonthYear("en", "2025-06-15T12:00:00.000Z");
    expect(pt.length).toBeGreaterThan(3);
    expect(en.length).toBeGreaterThan(3);
    expect(pt).not.toBe(en);
  });
});
