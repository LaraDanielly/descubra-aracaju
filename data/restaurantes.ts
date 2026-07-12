import { L, type Loc } from "@/lib/locale-text";
import { fotoDeSlug } from "./fotos-slug";

export type CidadeRest = "aracaju" | "sao-cristovao";

export interface Restaurante {
  slug: string;
  cidade: CidadeRest;
  bairro: Loc;
  nome: Loc;
  resumo: Loc;
  cardapio: Loc;
  faixaPreco: Loc;
  notaGoogle: number;
  avaliacoesGoogle: number;
  especialidade: Loc;
  endereco: Loc;
  /** foto do estabelecimento / atmosfera */
  foto: string;
}

/**
 * Ranking curado com base em notas públicas do Google e guias locais.
 * Preços são faixas aproximadas e podem mudar.
 */
export const RESTAURANTES: Restaurante[] = [
  {
    slug: "pitu-com-pirao-da-eliane",
    cidade: "aracaju",
    bairro: L("Orla de Atalaia", "Atalaia Waterfront", "Orla de Atalaia"),
    nome: L(
      "Pitú com Pirão da Eliane",
      "Pitú com Pirão da Eliane",
      "Pitú com Pirão da Eliane"
    ),
    resumo: L(
      "Referência de frutos do mar na Orla. A casa da Eliane é conhecida pela moqueca de peixe com camarão (pitú) e pelo pirão que acompanha.",
      "Atalaia's seafood landmark. Eliane's house is known for fish-and-shrimp (pitú) moqueca and the pirão that comes with it.",
      "Referencia de mariscos en la Orla. La casa de Eliane es conocida por la moqueca de pescado con camarón (pitú) y el pirão."
    ),
    cardapio: L(
      "Moquecas (inteira ou meia), camarões, peixes grelhados, pirão, arroz. Porções grandes — uma moqueca costuma servir 3–4.",
      "Moquecas (full or half), shrimp, grilled fish, pirão, rice. Large portions — one moqueca often feeds 3–4.",
      "Moquecas (entera o media), camarones, pescados a la parrilla, pirão, arroz. Porciones grandes — una moqueca suele servir a 3–4."
    ),
    faixaPreco: L(
      "≈ R$ 70–100 por pessoa",
      "≈ R$ 70–100 per person",
      "≈ R$ 70–100 por persona"
    ),
    notaGoogle: 4.5,
    avaliacoesGoogle: 4500,
    especialidade: L("Frutos do mar / moqueca", "Seafood / moqueca", "Mariscos / moqueca"),
    endereco: L(
      "Av. Santos Dumont, 957 — Atalaia",
      "Av. Santos Dumont, 957 — Atalaia",
      "Av. Santos Dumont, 957 — Atalaia"
    ),
    foto: "/fotos/2072fb797a.jpg",
  },
  {
    slug: "amanda-passarela",
    cidade: "aracaju",
    bairro: L("Passarela do Caranguejo", "Crab Boardwalk", "Pasarela del Cangrejo"),
    nome: L("Amanda", "Amanda", "Amanda"),
    resumo: L(
      "Clássico da Passarela do Caranguejo, há décadas no ponto. Caranguejo dobrado, casquinhas e petiscos à beira da Orla.",
      "A Passarela classic for decades. Doubled crab, crab shells and snacks right on the waterfront.",
      "Clásico de la Pasarela desde hace décadas. Cangrejo doblado, casquitas y picoteo junto a la Orla."
    ),
    cardapio: L(
      "Caranguejo (unidade/dobrado), casquinhas, caldinho, pastéis, cerveja gelada. Ambiente familiar.",
      "Crab (single/doubled), shells, broth, pastries, cold beer. Family-friendly.",
      "Cangrejo (unidad/doblado), casquitas, caldo, pasteles, cerveza fría. Ambiente familiar."
    ),
    faixaPreco: L(
      "≈ R$ 40–80 por pessoa",
      "≈ R$ 40–80 per person",
      "≈ R$ 40–80 por persona"
    ),
    notaGoogle: 4.3,
    avaliacoesGoogle: 1900,
    especialidade: L("Caranguejo", "Crab", "Cangrejo"),
    endereco: L(
      "Av. Santos Dumont, 527 — Passarela do Caranguejo",
      "Av. Santos Dumont, 527 — Crab Boardwalk",
      "Av. Santos Dumont, 527 — Pasarela del Cangrejo"
    ),
    foto: "/fotos/2de10e50a6.jpg",
  },
  {
    slug: "o-matuto",
    cidade: "aracaju",
    bairro: L("Passarela do Caranguejo", "Crab Boardwalk", "Pasarela del Cangrejo"),
    nome: L("O Matuto", "O Matuto", "O Matuto"),
    resumo: L(
      "Culinária regional sergipana na Passarela. Bom para quem quer pratos tipicamente locais sem sair da Orla.",
      "Sergipe regional cooking on the Passarela. Good if you want local dishes without leaving the waterfront.",
      "Cocina regional sergipana en la Pasarela. Ideal si quieres platos locales sin salir de la Orla."
    ),
    cardapio: L(
      "Pratos regionais, peixes, carnes e acompanhamentos sergipanos. Almoço e jantar.",
      "Regional dishes, fish, meats and Sergipe sides. Lunch and dinner.",
      "Platos regionales, pescados, carnes y acompañamientos sergipanos. Almuerzo y cena."
    ),
    faixaPreco: L(
      "≈ R$ 50–90 por pessoa",
      "≈ R$ 50–90 per person",
      "≈ R$ 50–90 por persona"
    ),
    notaGoogle: 4.4,
    avaliacoesGoogle: 2800,
    especialidade: L("Comida regional", "Regional food", "Comida regional"),
    endereco: L(
      "Passarela do Caranguejo — Atalaia",
      "Crab Boardwalk — Atalaia",
      "Pasarela del Cangrejo — Atalaia"
    ),
    foto: "/fotos/38b0f9e473.jpg",
  },
  {
    slug: "maria-farinha",
    cidade: "aracaju",
    bairro: L("Orla de Atalaia", "Atalaia Waterfront", "Orla de Atalaia"),
    nome: L("Maria Farinha", "Maria Farinha", "Maria Farinha"),
    resumo: L(
      "Espaço amplo na Orla com cardápio regional variado. Bom para grupos e famílias.",
      "Large waterfront spot with a varied regional menu. Good for groups and families.",
      "Espacio amplio en la Orla con carta regional variada. Bueno para grupos y familias."
    ),
    cardapio: L(
      "Peixes, frutos do mar, pratos regionais e opções para dividir.",
      "Fish, seafood, regional dishes and shareable plates.",
      "Pescados, mariscos, platos regionales y opciones para compartir."
    ),
    faixaPreco: L(
      "≈ R$ 55–95 por pessoa",
      "≈ R$ 55–95 per person",
      "≈ R$ 55–95 por persona"
    ),
    notaGoogle: 4.3,
    avaliacoesGoogle: 3200,
    especialidade: L("Regional / frutos do mar", "Regional / seafood", "Regional / mariscos"),
    endereco: L(
      "Av. Santos Dumont, 1329 — Atalaia",
      "Av. Santos Dumont, 1329 — Atalaia",
      "Av. Santos Dumont, 1329 — Atalaia"
    ),
    foto: "/fotos/2072fb797a.jpg",
  },
  {
    slug: "ponto-da-picanha",
    cidade: "aracaju",
    bairro: L("Orla de Atalaia", "Atalaia Waterfront", "Orla de Atalaia"),
    nome: L("Ponto da Picanha", "Ponto da Picanha", "Ponto da Picanha"),
    resumo: L(
      "Carnes na Orla com bom custo-benefício. Ambiente climatizado, pratos bem servidos e sobremesas.",
      "Steaks on the waterfront with solid value. Air-conditioned rooms, generous plates and desserts.",
      "Carnes en la Orla con buena relación calidad-precio. Ambiente climatizado y platos generosos."
    ),
    cardapio: L(
      "Picanha, filé mignon, acompanhamentos, sobremesas. Promoções do dia em alguns horários.",
      "Picanha, filet mignon, sides, desserts. Daily specials at some times.",
      "Picanha, filet mignon, acompañamientos, postres. Promociones del día en algunos horarios."
    ),
    faixaPreco: L(
      "≈ R$ 60–110 por pessoa",
      "≈ R$ 60–110 per person",
      "≈ R$ 60–110 por persona"
    ),
    notaGoogle: 4.1,
    avaliacoesGoogle: 5100,
    especialidade: L("Carnes", "Steaks", "Carnes"),
    endereco: L(
      "Av. Santos Dumont — Atalaia",
      "Av. Santos Dumont — Atalaia",
      "Av. Santos Dumont — Atalaia"
    ),
    foto: "/fotos/2de10e50a6.jpg",
  },
  {
    slug: "conversa-fiada",
    cidade: "aracaju",
    bairro: L("Orla de Atalaia", "Atalaia Waterfront", "Orla de Atalaia"),
    nome: L("Conversa Fiada", "Conversa Fiada", "Conversa Fiada"),
    resumo: L(
      "Rodízio de pizza e buffet de petiscos na Orla. Petiscos regionais (tapioca, caruru, vatapá) costumam ser o destaque.",
      "Pizza rodizio and snack buffet on the waterfront. Regional snacks (tapioca, caruru, vatapá) often steal the show.",
      "Rodizio de pizza y buffet de picoteo en la Orla. Los snacks regionales suelen ser lo más pedido."
    ),
    cardapio: L(
      "Rodízio de pizza, buffet de petiscos, bolo de tapioca, bebidas.",
      "Pizza rodizio, snack buffet, tapioca cake, drinks.",
      "Rodizio de pizza, buffet de picoteo, bolo de tapioca, bebidas."
    ),
    faixaPreco: L(
      "≈ R$ 50–85 por pessoa",
      "≈ R$ 50–85 per person",
      "≈ R$ 50–85 por persona"
    ),
    notaGoogle: 4.5,
    avaliacoesGoogle: 1450,
    especialidade: L("Pizza / petiscos", "Pizza / snacks", "Pizza / picoteo"),
    endereco: L(
      "Orla de Atalaia",
      "Atalaia Waterfront",
      "Orla de Atalaia"
    ),
    foto: "/fotos/38b0f9e473.jpg",
  },
  {
    slug: "republica-dos-camaroes",
    cidade: "aracaju",
    bairro: L("Orla de Atalaia", "Atalaia Waterfront", "Orla de Atalaia"),
    nome: L(
      "República dos Camarões",
      "República dos Camarões",
      "República dos Camarões"
    ),
    resumo: L(
      "Especializado em camarão na Orla — do tropical no abacaxi às preparações clássicas.",
      "Shrimp specialist on the waterfront — from tropical in pineapple to classic preparations.",
      "Especializado en camarón en la Orla — del tropical en piña a las preparaciones clásicas."
    ),
    cardapio: L(
      "Camarão em várias preparações, frutos do mar, acompanhamentos.",
      "Shrimp in many styles, seafood, sides.",
      "Camarón en varias preparaciones, mariscos, acompañamientos."
    ),
    faixaPreco: L(
      "≈ R$ 70–120 por pessoa",
      "≈ R$ 70–120 per person",
      "≈ R$ 70–120 por persona"
    ),
    notaGoogle: 4.2,
    avaliacoesGoogle: 6800,
    especialidade: L("Camarão", "Shrimp", "Camarón"),
    endereco: L(
      "Av. Santos Dumont — Atalaia",
      "Av. Santos Dumont — Atalaia",
      "Av. Santos Dumont — Atalaia"
    ),
    foto: "/fotos/2072fb797a.jpg",
  },
  {
    slug: "doces-conventuais-sc",
    cidade: "sao-cristovao",
    bairro: L("Centro Histórico", "Historic Center", "Centro Histórico"),
    nome: L(
      "Doces e café no Centro Histórico",
      "Sweets and café in the Historic Center",
      "Dulces y café en el Centro Histórico"
    ),
    resumo: L(
      "Em São Cristóvão o destaque gastronômico são os doces conventuais e a queijadinha nas casas e cafés do Centro Histórico, perto da Praça São Francisco.",
      "In São Cristóvão the food highlight is convent sweets and queijadinha in historic-center cafés near São Francisco Square.",
      "En São Cristóvão lo gastronómico son los dulces conventuales y la queijadinha en cafés del Centro Histórico, cerca de la Plaza São Francisco."
    ),
    cardapio: L(
      "Queijadinha, doces de convento, café, salgados leves. Combine com a visita aos museus.",
      "Queijadinha, convent sweets, coffee, light snacks. Pair with the museum visit.",
      "Queijadinha, dulces de convento, café, snacks ligeros. Combínalo con la visita a los museos."
    ),
    faixaPreco: L(
      "≈ R$ 15–40 por pessoa",
      "≈ R$ 15–40 per person",
      "≈ R$ 15–40 por persona"
    ),
    notaGoogle: 4.4,
    avaliacoesGoogle: 800,
    especialidade: L("Doces regionais", "Regional sweets", "Dulces regionales"),
    endereco: L(
      "Centro Histórico — São Cristóvão",
      "Historic Center — São Cristóvão",
      "Centro Histórico — São Cristóvão"
    ),
    foto: "/fotos/f3182c258e.jpg",
  },
];

export function rankingRestaurantes(): Restaurante[] {
  return [...RESTAURANTES]
    .map((r) => ({ ...r, foto: fotoDeSlug(r.slug, r.foto) }))
    .sort(
      (a, b) =>
        b.notaGoogle - a.notaGoogle || b.avaliacoesGoogle - a.avaliacoesGoogle
    );
}
