import { L, type Loc } from "@/lib/locale-text";
import { fotoDeSlug } from "./fotos-slug";

export interface Hotel {
  slug: string;
  cidade: "aracaju" | "sao-cristovao";
  nome: Loc;
  resumo: Loc;
  categoria: Loc;
  notaBooking: number;
  notaGoogle: number;
  avaliacoesGoogle: number;
  diariaDesde: Loc;
  endereco: Loc;
  destaque: Loc;
  foto: string;
}

/**
 * Ranking curado com base em notas públicas do Booking e do Google.
 * Diárias são faixas aproximadas de baixa/média temporada e podem variar
 * conforme data, ocupação e canal de reserva.
 */
export const HOTEIS: Hotel[] = [
  {
    slug: "vidam-hotel",
    cidade: "aracaju",
    nome: L("VIDAM Hotel Aracaju", "VIDAM Hotel Aracaju", "VIDAM Hotel Aracaju"),
    resumo: L(
      "Único 5 estrelas de Sergipe, na Orla de Atalaia. Rooftop com piscina de borda infinita, spa e restaurante Raízes. Antigo Radisson.",
      "Sergipe's only 5-star hotel, on Atalaia Waterfront. Infinity-edge rooftop pool, spa and Raízes restaurant. Former Radisson.",
      "El único 5 estrellas de Sergipe, en la Orla de Atalaia. Rooftop con piscina infinita, spa y restaurante Raízes. Antiguo Radisson."
    ),
    categoria: L("5 estrelas", "5-star", "5 estrellas"),
    notaBooking: 9.3,
    notaGoogle: 4.6,
    avaliacoesGoogle: 2100,
    diariaDesde: L(
      "a partir de ≈ R$ 900 / noite",
      "from ≈ R$ 900 / night",
      "desde ≈ R$ 900 / noche"
    ),
    endereco: L(
      "Rua Dr. Bezerra de Menezes, 40 — Orla de Atalaia",
      "Rua Dr. Bezerra de Menezes, 40 — Atalaia Waterfront",
      "Rua Dr. Bezerra de Menezes, 40 — Orla de Atalaia"
    ),
    destaque: L(
      "Mais bem avaliado no Booking entre os hotéis da Orla",
      "Top Booking score among waterfront hotels",
      "Mejor nota en Booking entre los hoteles de la Orla"
    ),
    foto: "/fotos/2072fb797a.jpg",
  },
  {
    slug: "del-mar-hotel",
    cidade: "aracaju",
    nome: L("Del Mar Hotel", "Del Mar Hotel", "Del Mar Hotel"),
    resumo: L(
      "4 estrelas no coração da Orla de Atalaia. Boa nota no Booking e localização central para praia, Passarela e Oceanário.",
      "4-star in the heart of Atalaia Waterfront. Strong Booking score and central for beach, Passarela and Oceanário.",
      "4 estrellas en el corazón de la Orla. Buena nota en Booking y ubicación central para playa, Pasarela y Oceanário."
    ),
    categoria: L("4 estrelas", "4-star", "4 estrellas"),
    notaBooking: 9.0,
    notaGoogle: 4.5,
    avaliacoesGoogle: 1800,
    diariaDesde: L(
      "a partir de ≈ R$ 500 / noite",
      "from ≈ R$ 500 / night",
      "desde ≈ R$ 500 / noche"
    ),
    endereco: L(
      "Orla de Atalaia",
      "Atalaia Waterfront",
      "Orla de Atalaia"
    ),
    destaque: L(
      "Ótimo custo-benefício 4 estrelas na Orla",
      "Strong 4-star value on the waterfront",
      "Buena relación calidad-precio 4 estrellas en la Orla"
    ),
    foto: "/fotos/2de10e50a6.jpg",
  },
  {
    slug: "celi-hotel",
    cidade: "aracaju",
    nome: L("Celi Hotel Aracaju", "Celi Hotel Aracaju", "Celi Hotel Aracaju"),
    resumo: L(
      "4 estrelas perto da Passarela do Caranguejo. Prático para quem quer jantar e voltar a pé à noite.",
      "4-star near the Crab Boardwalk. Handy if you want dinner and a walk home at night.",
      "4 estrellas cerca de la Pasarela del Cangrejo. Práctico si quieres cenar y volver a pie."
    ),
    categoria: L("4 estrelas", "4-star", "4 estrellas"),
    notaBooking: 8.8,
    notaGoogle: 4.4,
    avaliacoesGoogle: 2400,
    diariaDesde: L(
      "a partir de ≈ R$ 480 / noite",
      "from ≈ R$ 480 / night",
      "desde ≈ R$ 480 / noche"
    ),
    endereco: L(
      "Orla de Atalaia, perto da Passarela",
      "Atalaia Waterfront, near the Passarela",
      "Orla de Atalaia, cerca de la Pasarela"
    ),
    destaque: L(
      "Localização forte para vida noturna da Orla",
      "Strong location for waterfront nightlife",
      "Ubicación fuerte para la vida nocturna de la Orla"
    ),
    foto: "/fotos/38b0f9e473.jpg",
  },
  {
    slug: "hotel-da-costa-nobile",
    cidade: "aracaju",
    nome: L(
      "Hotel da Costa by Nobile",
      "Hotel da Costa by Nobile",
      "Hotel da Costa by Nobile"
    ),
    resumo: L(
      "4 estrelas na área mais turística da Orla. Diária mais acessível entre os bem avaliados da faixa.",
      "4-star in the busiest stretch of the waterfront. More accessible rate among the well-rated options.",
      "4 estrellas en el tramo más turístico de la Orla. Tarifa más accesible entre los bien valorados."
    ),
    categoria: L("4 estrelas", "4-star", "4 estrellas"),
    notaBooking: 8.7,
    notaGoogle: 4.3,
    avaliacoesGoogle: 1600,
    diariaDesde: L(
      "a partir de ≈ R$ 380 / noite",
      "from ≈ R$ 380 / night",
      "desde ≈ R$ 380 / noche"
    ),
    endereco: L(
      "Orla de Atalaia",
      "Atalaia Waterfront",
      "Orla de Atalaia"
    ),
    destaque: L(
      "Boa porta de entrada na Orla sem estourar o orçamento",
      "Solid waterfront base without blowing the budget",
      "Buena base en la Orla sin romper el presupuesto"
    ),
    foto: "/fotos/2072fb797a.jpg",
  },
  {
    slug: "arcus-atlantica",
    cidade: "aracaju",
    nome: L(
      "Arcus Hotel by Atlantica",
      "Arcus Hotel by Atlantica",
      "Arcus Hotel by Atlantica"
    ),
    resumo: L(
      "4 estrelas a poucos minutos a pé da praia e do Projeto Tamar. Vista para o mar em vários andares.",
      "4-star a short walk from the beach and Projeto Tamar. Sea views on several floors.",
      "4 estrellas a pocos minutos a pie de la playa y del Proyecto Tamar. Vista al mar en varios pisos."
    ),
    categoria: L("4 estrelas", "4-star", "4 estrellas"),
    notaBooking: 8.6,
    notaGoogle: 4.4,
    avaliacoesGoogle: 1200,
    diariaDesde: L(
      "a partir de ≈ R$ 350 / noite",
      "from ≈ R$ 350 / night",
      "desde ≈ R$ 350 / noche"
    ),
    endereco: L(
      "Av. Mário Jorge Menezes Vieira — Atalaia",
      "Av. Mário Jorge Menezes Vieira — Atalaia",
      "Av. Mário Jorge Menezes Vieira — Atalaia"
    ),
    destaque: L(
      "Próximo ao Oceanário / Tamar",
      "Near the Oceanário / Tamar",
      "Cerca del Oceanário / Tamar"
    ),
    foto: "/fotos/2de10e50a6.jpg",
  },
  {
    slug: "sesc-atalaia",
    cidade: "aracaju",
    nome: L("Hotel Sesc Atalaia", "Hotel Sesc Atalaia", "Hotel Sesc Atalaia"),
    resumo: L(
      "De frente para o mar na Praia de Atalaia. Apartamentos com vista, piscina e pacote com café e jantar. Bom para família.",
      "Facing the sea at Atalaia Beach. Sea-view rooms, pool and packages with breakfast and dinner. Good for families.",
      "Frente al mar en Praia de Atalaia. Apartamentos con vista, piscina y paquete con desayuno y cena. Bueno para familias."
    ),
    categoria: L("3–4 estrelas / Sesc", "3–4 star / Sesc", "3–4 estrellas / Sesc"),
    notaBooking: 8.4,
    notaGoogle: 4.5,
    avaliacoesGoogle: 900,
    diariaDesde: L(
      "a partir de ≈ R$ 320 / noite (consulte tarifa Sesc)",
      "from ≈ R$ 320 / night (check Sesc rates)",
      "desde ≈ R$ 320 / noche (consulta tarifa Sesc)"
    ),
    endereco: L(
      "Orla de Atalaia — de frente para o mar",
      "Atalaia Waterfront — facing the sea",
      "Orla de Atalaia — frente al mar"
    ),
    destaque: L(
      "Vista para o mar em todos os apartamentos",
      "Sea view in every apartment",
      "Vista al mar en todos los apartamentos"
    ),
    foto: "/fotos/38b0f9e473.jpg",
  },
  {
    slug: "pousada-raio-de-sol",
    cidade: "aracaju",
    nome: L(
      "Pousada Raio de Sol",
      "Pousada Raio de Sol",
      "Pousada Raio de Sol"
    ),
    resumo: L(
      "Pousada aconchegante em Aracaju, boa opção mais acessível perto da Orla. Terraço com sombreiros e café da manhã.",
      "Cozy inn in Aracaju — a more accessible option near the waterfront. Terrace with umbrellas and breakfast.",
      "Posada acogedora en Aracaju, opción más accesible cerca de la Orla. Terraza con sombrillas y desayuno."
    ),
    categoria: L("Pousada", "Inn", "Posada"),
    notaBooking: 8.3,
    notaGoogle: 4.4,
    avaliacoesGoogle: 420,
    diariaDesde: L(
      "a partir de ≈ R$ 220–350 / noite",
      "from ≈ R$ 220–350 / night",
      "desde ≈ R$ 220–350 / noche"
    ),
    endereco: L(
      "Aracaju — SE (próximo à Orla)",
      "Aracaju — SE (near the waterfront)",
      "Aracaju — SE (cerca de la Orla)"
    ),
    destaque: L(
      "Aconchegante como Aracaju — boa porta de entrada sem estrelas de hotel",
      "Cozy like Aracaju — a solid base without hotel-star prices",
      "Acogedora como Aracaju — buena base sin precio de hotel"
    ),
    foto: "/fotos/pousada-raio-de-sol.jpg",
  },
];
export function rankingHoteis(): Hotel[] {
  return [...HOTEIS]
    .map((h) => ({ ...h, foto: fotoDeSlug(h.slug, h.foto) }))
    .sort(
      (a, b) =>
        b.notaBooking - a.notaBooking || b.notaGoogle - a.notaGoogle
    );
}
