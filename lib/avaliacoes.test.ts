import { describe, expect, it } from "vitest";
import { ordenarAvaliacoes } from "@/lib/avaliacoes";
import { comFotoPrincipal } from "@/data/fotos-slug";
import {
  pontosRelevantes,
  validarMensagensChat,
} from "@/lib/chat-context";

describe("ordenarAvaliacoes", () => {
  it("ordena por nota desc e data desc", () => {
    const sorted = ordenarAvaliacoes([
      {
        id: "1",
        ponto_slug: "a",
        nome: "A",
        nota: 4,
        comentario: "ok",
        created_at: "2025-01-01T00:00:00.000Z",
      },
      {
        id: "2",
        ponto_slug: "a",
        nome: "B",
        nota: 5,
        comentario: "top",
        created_at: "2025-01-02T00:00:00.000Z",
      },
    ]);
    expect(sorted[0].nota).toBe(5);
  });
});

describe("comFotoPrincipal", () => {
  it("usa foto dedicada quando slug está registrado", () => {
    expect(comFotoPrincipal("orla-de-atalaia", ["/fotos/hash.jpg"])).toEqual([
      "/fotos/orla-de-atalaia.jpg",
    ]);
  });
});

describe("chat-context", () => {
  it("rejeita histórico vazio", () => {
    expect(validarMensagensChat([])).toBe("empty");
  });

  it("prioriza lugares que batem com a pergunta", () => {
    const pts = pontosRelevantes("pt", "orla atalaia");
    expect(pts.some((p) => p.slug === "orla-de-atalaia")).toBe(true);
  });
});
