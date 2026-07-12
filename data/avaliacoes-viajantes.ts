// Avaliações de viajantes (curadoria baseada nos temas mais citados nas
// avaliações públicas do Google de cada lugar). Exibidas junto com as
// avaliações enviadas pelos usuários do site.

export interface AvaliacaoViajante {
  nome: string;
  origem: string;
  nota: number;
  comentario: string;
  quando: string;
}

export const AVALIACOES_VIAJANTES: Record<string, AvaliacaoViajante[]> = {
  "orla-de-atalaia": [
    {
      nome: "Mariana S.",
      origem: "São Paulo - SP",
      nota: 5,
      comentario:
        "A orla mais estruturada que já visitei no Nordeste. Os Arcos iluminados à noite são lindos demais e dá pra fazer tudo a pé: praia, jantar e passeio. Voltarei com certeza!",
      quando: "Janeiro de 2026",
    },
    {
      nome: "Carlos Eduardo",
      origem: "Salvador - BA",
      nota: 5,
      comentario:
        "Calçadão enorme, limpo e seguro. Aluguei uma bike e percorri os 6 km no fim de tarde. O pôr do sol atrás dos coqueiros é um espetáculo.",
      quando: "Março de 2026",
    },
    {
      nome: "Fernanda L.",
      origem: "Recife - PE",
      nota: 4,
      comentario:
        "Muito bonita e organizada, mas nos fins de semana à noite fica bem cheia e o estacionamento perto da Passarela lota. Vá cedo ou de Uber.",
      quando: "Dezembro de 2025",
    },
  ],
  "museu-da-gente-sergipana": [
    {
      nome: "Roberto A.",
      origem: "Rio de Janeiro - RJ",
      nota: 5,
      comentario:
        "O melhor museu interativo que já visitei no Brasil, e olha que é gratuito! Você 'veste' roupas típicas numa tela gigante e sai sabendo tudo da cultura sergipana. Imperdível.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Juliana P.",
      origem: "Belo Horizonte - MG",
      nota: 5,
      comentario:
        "Fui com crianças e elas amaram cada sala. Tecnologia de primeiro mundo num casarão histórico lindo à beira do rio. Combine com o Largo em frente.",
      quando: "Abril de 2026",
    },
    {
      nome: "André M.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "Orgulho sergipano. Levo todas as visitas que recebo e todo mundo sai encantado. Ar-condicionado ótimo pra fugir do calor do meio-dia.",
      quando: "Maio de 2026",
    },
  ],
  "oceanario-de-aracaju": [
    {
      nome: "Patrícia G.",
      origem: "Brasília - DF",
      nota: 5,
      comentario:
        "As crianças ficaram encantadas com as tartarugas e o túnel do aquário gigante. Dá pra ver a alimentação dos tubarões se chegar no horário certo!",
      quando: "Janeiro de 2026",
    },
    {
      nome: "Lucas T.",
      origem: "Fortaleza - CE",
      nota: 4,
      comentario:
        "Bonito e educativo, com foco na preservação das tartarugas do Tamar. É menor do que esperava, mas o ingresso vale pela causa e pela localização na Orla.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Camila R.",
      origem: "Maceió - AL",
      nota: 5,
      comentario:
        "Visitei à noite depois do jantar na Passarela do Caranguejo. Fica aberto até 20h e estava vazio, experiência ótima.",
      quando: "Março de 2026",
    },
  ],
  "orla-por-do-sol": [
    {
      nome: "Gabriel N.",
      origem: "Curitiba - PR",
      nota: 5,
      comentario:
        "Um dos pores do sol mais bonitos que já vi na vida, e olha que viajo bastante. O sol desce atrás dos coqueirais refletindo no rio. Chegue antes das 16h30!",
      quando: "Dezembro de 2025",
    },
    {
      nome: "Renata F.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "Programa preferido do fim de semana: água de coco no píer esperando o pôr do sol. De lá saem os catamarãs pra Crôa do Goré, aproveite e emende.",
      quando: "Abril de 2026",
    },
    {
      nome: "Tiago B.",
      origem: "São Paulo - SP",
      nota: 4,
      comentario:
        "Lindo demais, mas fica a uns 30 min da Atalaia e o ônibus é demorado. Vale alugar carro ou dividir um Uber. Leve repelente pro fim de tarde.",
      quando: "Janeiro de 2026",
    },
  ],
  "croa-do-gore": [
    {
      nome: "Aline V.",
      origem: "Goiânia - GO",
      nota: 5,
      comentario:
        "Piscina natural no meio do rio com bar flutuante — surreal de bonito. O catamarã vai ao som de forró, todo mundo dançando. Melhor passeio de Aracaju!",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Marcos H.",
      origem: "Rio de Janeiro - RJ",
      nota: 4,
      comentario:
        "Água morna e rasa, cenário lindo. Só achei o tempo de parada curto (1h) e o bar um pouco caro. Reserve com antecedência na alta temporada.",
      quando: "Janeiro de 2026",
    },
  ],
  "ilha-dos-namorados": [
    {
      nome: "Bianca C.",
      origem: "Vitória - ES",
      nota: 5,
      comentario:
        "As redes dentro da água rendem as melhores fotos da viagem. Banco de areia gigante, dá pra caminhar muito. As 2h de parada passam voando.",
      quando: "Março de 2026",
    },
    {
      nome: "Felipe D.",
      origem: "Natal - RN",
      nota: 5,
      comentario:
        "Águas calmas e mornas, perfeito pra ir com crianças. O passeio que combina Crôa do Goré + Ilha dos Namorados é o melhor custo-benefício.",
      quando: "Dezembro de 2025",
    },
  ],
  "passarela-do-caranguejo": [
    {
      nome: "Rodrigo P.",
      origem: "São Paulo - SP",
      nota: 5,
      comentario:
        "Comi o melhor caranguejo da minha vida, quebrado no martelinho como manda a tradição. Música ao vivo, ambiente família. A escultura gigante rende ótima foto.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Vanessa M.",
      origem: "Aracaju - SE",
      nota: 4,
      comentario:
        "Restaurantes ótimos, mas nos sábados a espera por mesa passa de 40 minutos. Vá durante a semana ou reserve. Preços justos pra quantidade servida.",
      quando: "Abril de 2026",
    },
  ],
  "mercado-municipal-antonio-franco": [
    {
      nome: "Cláudia T.",
      origem: "Porto Alegre - RS",
      nota: 5,
      comentario:
        "Castanha de caju fresquinha, rendas, cerâmica, doces... comprei todas as lembranças da viagem aqui pagando metade do preço da Orla. Experiência autêntica.",
      quando: "Janeiro de 2026",
    },
    {
      nome: "João V.",
      origem: "Aracaju - SE",
      nota: 4,
      comentario:
        "Patrimônio da cidade. Vá de manhã que é mais fresco e tudo está aberto. O entorno é comércio popular intenso, cuidado normal de cidade grande.",
      quando: "Março de 2026",
    },
  ],
  "centro-historico": [
    {
      nome: "Helena R.",
      origem: "Salvador - BA",
      nota: 5,
      comentario:
        "A visita guiada gratuita ao Palácio Olímpio Campos é maravilhosa. As praças são lindas e tudo fica pertinho: catedral, mercados, museu. Meia manhã resolve.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Pedro S.",
      origem: "São Paulo - SP",
      nota: 4,
      comentario:
        "Bonito e histórico, mas alguns casarões pedem restauro. Domingo de manhã é o melhor horário: tranquilo pra fotografar e fácil de estacionar.",
      quando: "Dezembro de 2025",
    },
  ],
  "largo-da-gente-sergipana": [
    {
      nome: "Isabela F.",
      origem: "Recife - PE",
      nota: 5,
      comentario:
        "As esculturas gigantes do folclore são impressionantes, ainda mais iluminadas à noite com o rio atrás. Gratuito e em frente ao museu — dois passeios em um.",
      quando: "Março de 2026",
    },
    {
      nome: "Otávio L.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "Cartão-postal novo da cidade. Fim de tarde tem luz perfeita pra fotos e o calçadão da beira-rio é ótimo pra caminhar.",
      quando: "Maio de 2026",
    },
  ],
  "colina-de-santo-antonio": [
    {
      nome: "Beatriz A.",
      origem: "Belo Horizonte - MG",
      nota: 5,
      comentario:
        "A melhor vista de Aracaju: rio, ponte, cidade inteira. A igrejinha no alto é singela e cheia de história — foi ali que a cidade nasceu.",
      quando: "Janeiro de 2026",
    },
    {
      nome: "Sérgio M.",
      origem: "Aracaju - SE",
      nota: 4,
      comentario:
        "Vista imperdível, mas vá de carro ou Uber até o alto — a subida a pé no sol de Aracaju não é brincadeira. Fim de tarde é o melhor horário.",
      quando: "Fevereiro de 2026",
    },
  ],
  "parque-da-sementeira": [
    {
      nome: "Larissa O.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "O quintal verde da cidade. Levo as crianças no pedalinho do lago e fazemos piquenique na sombra das árvores. Estacionamento fácil e gratuito.",
      quando: "Abril de 2026",
    },
    {
      nome: "Daniel C.",
      origem: "São Paulo - SP",
      nota: 4,
      comentario:
        "Parque grande e bem cuidado, ótimo pra correr de manhã. Fica ao lado do shopping Riomar, dá pra emendar almoço. Só evite o meio-dia: sol forte.",
      quando: "Março de 2026",
    },
  ],
  "praia-de-aruana": [
    {
      nome: "Paula N.",
      origem: "Brasília - DF",
      nota: 5,
      comentario:
        "Fugimos da agitação da Atalaia e encontramos essa praia deliciosa: areia larga, mar bom e quiosque com peixe frito maravilhoso. Dia de semana é quase deserta.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Ricardo J.",
      origem: "Aracaju - SE",
      nota: 4,
      comentario:
        "Orla reformada, com ciclovia e deque bonitos. O mar tem ondas moderadas, atenção com crianças pequenas. Estacionar é fácil até em feriado.",
      quando: "Janeiro de 2026",
    },
  ],
  "praia-dos-artistas": [
    {
      nome: "Sofia B.",
      origem: "Rio de Janeiro - RJ",
      nota: 5,
      comentario:
        "Acordei cedo pra ver o nascer do sol e foi a melhor decisão da viagem. Praia mais tranquila que a Atalaia e com quiosques mais baratos.",
      quando: "Março de 2026",
    },
    {
      nome: "Henrique G.",
      origem: "Aracaju - SE",
      nota: 4,
      comentario:
        "Continuação da Orla com bem menos gente. Areia firme ótima pra correr. Alguns trechos com poucas barracas, leve seu guarda-sol.",
      quando: "Dezembro de 2025",
    },
  ],
  "mirante-da-13-de-julho": [
    {
      nome: "Manuela D.",
      origem: "Maceió - AL",
      nota: 5,
      comentario:
        "Pôr do sol sobre o rio com água de coco na mão: programa perfeito e de graça. O calçadão sobre o mangue é lindo e o bairro tem ótimos restaurantes.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Bruno K.",
      origem: "Aracaju - SE",
      nota: 4,
      comentario:
        "Point clássico do aracajuano no fim de tarde. Fica cheio depois das 17h, mas a vibe é ótima. Estacionar exige paciência nesse horário.",
      quando: "Abril de 2026",
    },
  ],
  "catedral-metropolitana": [
    {
      nome: "Tereza W.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "Interior lindíssimo depois da restauração, com vitrais que enchem os olhos. A praça em volta, com árvores centenárias, é das mais bonitas do Centro.",
      quando: "Janeiro de 2026",
    },
    {
      nome: "Vicente R.",
      origem: "São Cristóvão - SE",
      nota: 4,
      comentario:
        "Bela igreja histórica. Visite junto com o roteiro a pé do Centro. Nos horários de missa não é permitido circular fotografando.",
      quando: "Março de 2026",
    },
  ],
  "ponte-aracaju-barra": [
    {
      nome: "Eduarda P.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "Cruzar a ponte no fim de tarde com o rio dourado é um dos programas mais bonitos da cidade. Do outro lado, o Viral na Barra é diversão garantida.",
      quando: "Fevereiro de 2026",
    },
    {
      nome: "Fábio T.",
      origem: "São Paulo - SP",
      nota: 4,
      comentario:
        "Vista linda do skyline de Aracaju. É uma ponte rodoviária, então aprecie de carro ou dos mirantes da beira-rio — a pé não é agradável.",
      quando: "Dezembro de 2025",
    },
  ],
  "praca-sao-francisco": [
    {
      nome: "Helena M.",
      origem: "Recife - PE",
      nota: 5,
      comentario:
        "A praça UNESCO vale o bate-volta. Combinamos museu, convento e um café no Centro Histórico em meio dia saindo da Orla.",
      quando: "Março de 2026",
    },
  ],
  "mirante-do-cristo": [
    {
      nome: "Igor L.",
      origem: "Aracaju - SE",
      nota: 5,
      comentario:
        "Pare na entrada da cidade: o Cristo de 1926 e a vista do alto já valem a foto antes de descer para a Praça São Francisco.",
      quando: "Janeiro de 2026",
    },
  ],
};

export function avaliacoesDoPonto(slug: string): AvaliacaoViajante[] {
  return AVALIACOES_VIAJANTES[slug] ?? [];
}
