import { L, type Loc } from "@/lib/locale-text";

export type Overlay = {
  nome?: Loc;
  resumo?: Loc;
  descricao?: Loc;
  endereco?: Loc;
  horario?: Loc;
  preco?: Loc;
  tempoVisita?: Loc;
  uberDaOrla?: Loc;
  uberDoCentro?: Loc;
  estacionamentoDica?: Loc;
  melhorTransporteMotivo?: Loc;
  dicas?: Loc[];
  linhasOnibus?: { numero: string; nome: Loc; dica: Loc }[];
};

/** Traduções EN/ES (e PT de referência) para os pontos de Aracaju */
export const I18N_ARACAJU: Record<string, Overlay> = {
  "orla-de-atalaia": {
    resumo: L(
      "O cartão-postal de Aracaju: 6 km de calçadão com os Arcos, lagos, ciclovia e a melhor estrutura de bares da cidade.",
      "Aracaju's postcard: 6 km of seafront with the Arches, lakes, a bike path and the city's best bar strip.",
      "La postal de Aracaju: 6 km de paseo marítimo con los Arcos, lagos, ciclovía y la mejor franja de bares."
    ),
    descricao: L(
      "A Orla de Atalaia é o principal corredor turístico de Aracaju. São cerca de 6 km de calçadão com os Arcos multicoloridos, lagos, fonte luminosa, quadras, parque infantil e dezenas de quiosques. Os melhores hotéis ficam aqui. Ao entardecer o calçadão enche de famílias e corredores; à noite os Arcos iluminam.",
      "Atalaia Waterfront is Aracaju's main tourist strip. About 6 km of promenade with the multicolored Arches, lakes, a light fountain, sports courts, a playground and dozens of kiosks. The best hotels sit here. At dusk the promenade fills with families and runners; at night the Arches light up.",
      "La Orla de Atalaia es el principal corredor turístico. Son unos 6 km de paseo con los Arcos de colores, lagos, fuente luminosa, canchas, parque infantil y decenas de quioscos. Los mejores hoteles están aquí. Al atardecer el paseo se llena; de noche los Arcos se iluminan."
    ),
    melhorTransporteMotivo: L(
      "Se estiver hospedado na Atalaia, tudo fica a pé. De carro, o estacionamento na avenida é gratuito e fácil.",
      "If you're staying in Atalaia, everything is walkable. By car, free parking along the avenue is easy.",
      "Si te hospedas en Atalaia, todo queda a pie. En coche, el estacionamiento gratuito en la avenida es fácil."
    ),
  },
  "museu-da-gente-sergipana": {
    resumo: L(
      "Museu interativo sobre a cultura de Sergipe, num casarão histórico à beira do Rio Sergipe. A atração cultural mais bem avaliada da cidade.",
      "Interactive museum about Sergipe's culture, in a historic building by the Sergipe River. The city's best-rated cultural stop.",
      "Museo interactivo sobre la cultura de Sergipe, en un caserón histórico junto al río. La atracción cultural mejor valorada."
    ),
    descricao: L(
      "No antigo Atheneuzinho (1926), o Museu da Gente Sergipana mistura tecnologia e cultura popular: trajes digitais, sons do forró, artesanato e culinária. Entrada gratuita. Combina com o Largo da Gente Sergipana em frente.",
      "In the old Atheneuzinho (1926), the Museum of the Sergipe People mixes tech and folk culture: digital costumes, forró sounds, crafts and food. Free entry. Pair it with Largo da Gente Sergipana across the street.",
      "En el antiguo Atheneuzinho (1926), el Museo de la Gente Sergipana mezcla tecnología y cultura popular. Entrada gratuita. Combínalo con el Largo frente al museo."
    ),
    melhorTransporteMotivo: L(
      "O Centro tem trânsito e pouco estacionamento em dia útil. Um Uber da Orla custa cerca de R$ 20 e deixa na porta.",
      "Downtown traffic and parking are tight on weekdays. An Uber from the waterfront is about R$ 20 and drops you at the door.",
      "El Centro tiene tráfico y poco estacionamiento entre semana. Un Uber desde la orla cuesta unos R$ 20 y te deja en la puerta."
    ),
  },
  "oceanario-de-aracaju": {
    resumo: L(
      "Aquário do Projeto Tamar na Orla: tartarugas, tubarões, arraias e túnel submerso.",
      "Projeto Tamar aquarium on the waterfront: turtles, sharks, rays and an underwater tunnel.",
      "Acuario del Proyecto Tamar en la orla: tortugas, tiburones, rayas y túnel sumergido."
    ),
  },
  "orla-por-do-sol": {
    resumo: L(
      "Deck no Mosqueiro, às margens do Vaza-Barris, com um dos pores do sol mais procurados da cidade. Embarque dos catamarãs.",
      "Deck in Mosqueiro on the Vaza-Barris River, with one of the city's most sought-after sunsets. Catamaran departure point.",
      "Deck en Mosqueiro, a orillas del Vaza-Barris, con uno de los atardeceres más buscados. Embarque de los catamaranes."
    ),
    melhorTransporteMotivo: L(
      "São cerca de 25 km da Atalaia. Estacionamento fácil; de ônibus a volta à noite é complicada.",
      "About 25 km from Atalaia. Easy parking; the bus ride back at night is awkward.",
      "Son unos 25 km desde Atalaia. Estacionamiento fácil; el bus de vuelta por la noche es complicado."
    ),
  },
  "croa-do-gore": {
    resumo: L(
      "Banco de areia no Vaza-Barris, com bar flutuante. Só se chega de catamarã saindo da Orla Pôr do Sol.",
      "Sandbank on the Vaza-Barris with a floating bar. Only reachable by catamaran from Orla Pôr do Sol.",
      "Banco de arena en el Vaza-Barris, con bar flotante. Solo se llega en catamarán desde Orla Pôr do Sol."
    ),
  },
  "ilha-dos-namorados": {
    resumo: L(
      "Grande banco de areia com redes na água e bar flutuante. Parada clássica do catamarã.",
      "Large sandbank with water hammocks and a floating bar. Classic catamaran stop.",
      "Gran banco de arena con hamacas en el agua y bar flotante. Parada clásica del catamarán."
    ),
  },
  "passarela-do-caranguejo": {
    resumo: L(
      "Polo de frutos do mar na Orla, sob o caranguejo de 7 metros. Mais movimento à noite.",
      "Seafood strip on the waterfront under the 7-meter crab sculpture. Busiest at night.",
      "Polo de mariscos en la orla, bajo el cangrejo de 7 metros. Más movimiento por la noche."
    ),
    melhorTransporteMotivo: L(
      "À noite o estacionamento aperta. Se for jantar e beber, vá de Uber.",
      "Parking gets tight at night. If you're dining and drinking, take an Uber.",
      "De noche el estacionamiento se complica. Si vas a cenar y beber, ve en Uber."
    ),
  },
  "mercado-municipal-antonio-franco": {
    resumo: L(
      "Mercados do Centro desde 1926: artesanato, castanha, doces e comida popular.",
      "Downtown markets since 1926: crafts, cashews, sweets and everyday food.",
      "Mercados del Centro desde 1926: artesanía, castaña, dulces y comida popular."
    ),
  },
  "centro-historico": {
    resumo: L(
      "Casarões, praças e museus da Aracaju de 1855, no traçado em tabuleiro de xadrez.",
      "Townhouses, squares and museums from 1855 Aracaju, on the chessboard street grid.",
      "Caserones, plazas y museos de la Aracaju de 1855, en el trazado de tablero de ajedrez."
    ),
  },
  "largo-da-gente-sergipana": {
    resumo: L(
      "Praça à beira do rio com esculturas gigantes do folclore sergipano, em frente ao museu.",
      "Riverside square with giant sculptures of Sergipe folklore, facing the museum.",
      "Plaza junto al río con esculturas gigantes del folclore sergipano, frente al museo."
    ),
  },
  "colina-de-santo-antonio": {
    resumo: L(
      "Berço de Aracaju: igreja no alto com vista do rio, da ponte e da Ilha de Santa Luzia.",
      "Birthplace of Aracaju: hilltop church with views of the river, bridge and Santa Luzia Island.",
      "Cuna de Aracaju: iglesia en lo alto con vista del río, el puente y la Isla de Santa Luzia."
    ),
  },
  "parque-da-sementeira": {
    resumo: L(
      "40 hectares de verde com lago, pista e parquinho entre a Orla e o Centro.",
      "40 hectares of greenery with a lake, running track and playground between the waterfront and downtown.",
      "40 hectáreas de verde con lago, pista y parque infantil entre la orla y el Centro."
    ),
  },
  "praia-de-aruana": {
    resumo: L(
      "Praia urbana mais calma que a Atalaia, com quiosques e o Deque do Banho Doce.",
      "Urban beach calmer than Atalaia, with kiosks and the Banho Doce deck.",
      "Playa urbana más tranquila que Atalaia, con quioscos y el Deque do Banho Doce."
    ),
  },
  "praia-dos-artistas": {
    resumo: L(
      "Continuação da Praia de Atalaia, com menos gente e quiosques mais baratos.",
      "Continuation of Atalaia Beach, with fewer people and cheaper kiosks.",
      "Continuación de la Playa de Atalaia, con menos gente y quioscos más baratos."
    ),
  },
  "mirante-da-13-de-julho": {
    resumo: L(
      "Calçadão à beira do Rio Sergipe no bairro 13 de Julho, com pôr do sol sobre o mangue.",
      "Boardwalk on the Sergipe River in the 13 de Julho neighborhood, with sunset over the mangrove.",
      "Paseo junto al río Sergipe en el barrio 13 de Julho, con atardecer sobre el manglar."
    ),
  },
  "catedral-metropolitana": {
    resumo: L(
      "Igreja-mãe de Aracaju (1875) na Praça Olímpio Campos, com vitrais restaurados.",
      "Aracaju's mother church (1875) on Praça Olímpio Campos, with restored stained glass.",
      "Iglesia madre de Aracaju (1875) en la Plaza Olímpio Campos, con vitrales restaurados."
    ),
  },
  "ponte-aracaju-barra": {
    resumo: L(
      "1,8 km sobre o Rio Sergipe até a Barra dos Coqueiros e as praias do outro lado.",
      "1.8 km across the Sergipe River to Barra dos Coqueiros and the beaches on the other side.",
      "1,8 km sobre el río Sergipe hasta Barra dos Coqueiros y las playas del otro lado."
    ),
  },
};
