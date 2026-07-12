import { tx, txList } from "@/lib/locale-text";
import { PONTOS_SAO_CRISTOVAO } from "./pontos-sc";
import { I18N_ARACAJU } from "./i18n-aracaju";
import { comFotoPrincipal } from "./fotos-slug";
import type {
  Categoria,
  Cidade,
  LinhaOnibus,
  Ponto,
  PontoResolvido,
} from "./tipos";

export type { Categoria, Cidade, LinhaOnibus, Ponto, PontoResolvido };

export const CATEGORIAS: { id: Categoria; nomeKey: string }[] = [
  { id: "praias", nomeKey: "praias" },
  { id: "cultura", nomeKey: "cultura" },
  { id: "natureza", nomeKey: "natureza" },
  { id: "gastronomia", nomeKey: "gastronomia" },
  { id: "passeios", nomeKey: "passeios" },
];

export function resolverPonto(p: Ponto, locale: string): PontoResolvido {
  const o = I18N_ARACAJU[p.slug];
  const nome = tx(locale, o?.nome ?? p.nome);
  const resumo = tx(locale, o?.resumo ?? p.resumo);
  const descricao = tx(locale, o?.descricao ?? p.descricao);
  const endereco = tx(locale, o?.endereco ?? p.endereco);
  const horario = tx(locale, o?.horario ?? p.horario);
  const preco = tx(locale, o?.preco ?? p.preco);
  const tempoVisita = tx(locale, o?.tempoVisita ?? p.tempoVisita);
  const uberDaOrla = tx(locale, o?.uberDaOrla ?? p.uberDaOrla);
  const uberDoCentro = tx(locale, o?.uberDoCentro ?? p.uberDoCentro);
  const estacionamentoDica = tx(
    locale,
    o?.estacionamentoDica ?? p.estacionamentoDica
  );
  const melhorTransporteMotivo = tx(
    locale,
    o?.melhorTransporteMotivo ?? p.melhorTransporteMotivo
  );
  const dicas = o?.dicas
    ? txList(locale, o.dicas)
    : txList(locale, p.dicas);
  const linhasOnibus = (o?.linhasOnibus ?? p.linhasOnibus).map((l) => ({
    numero: l.numero,
    nome: tx(locale, l.nome),
    dica: tx(locale, l.dica),
  }));

  return {
    slug: p.slug,
    cidade: p.cidade,
    nome,
    categoria: p.categoria,
    resumo,
    descricao,
    notaGoogle: p.notaGoogle,
    avaliacoesGoogle: p.avaliacoesGoogle,
    lat: p.lat,
    lng: p.lng,
    endereco,
    horario,
    preco,
    tempoVisita,
    fotos: comFotoPrincipal(p.slug, p.fotos),
    linhasOnibus,
    uberDaOrla,
    uberDoCentro,
    estacionamento: p.estacionamento,
    estacionamentoDica,
    melhorTransporte: p.melhorTransporte,
    melhorTransporteMotivo,
    dicas,
  };
}

export const PONTOS_ARACAJU: Ponto[] = [
  {
    slug: "orla-de-atalaia",
    cidade: "aracaju",
    nome: "Orla de Atalaia",
    categoria: "praias",
    resumo:
      "O cartão-postal de Aracaju: 6 km de calçadão com os famosos Arcos, lagos, quadras, ciclovia e a melhor estrutura de bares e restaurantes da cidade.",
    descricao:
      "A Orla de Atalaia é o principal corredor turístico de Aracaju e uma das orlas mais bem estruturadas do Brasil. São cerca de 6 km de calçadão à beira-mar com os icônicos Arcos multicoloridos (ponto de foto obrigatório, especialmente iluminados à noite), lagos artificiais, fonte luminosa, quadras esportivas, kartódromo, parque infantil e dezenas de quiosques, bares e restaurantes. É onde se concentram os melhores hotéis da cidade — dá para resolver praia, almoço, passeio e vida noturna sem sair da região. Ao entardecer, o calçadão ganha vida com famílias, corredores e música ao vivo.",
    notaGoogle: 4.7,
    avaliacoesGoogle: 48500,
    lat: -10.9832,
    lng: -37.0388,
    endereco: "Av. Santos Dumont, Atalaia, Aracaju - SE",
    horario: "Aberta 24h (quiosques geralmente das 9h à 0h)",
    preco: "Gratuito",
    tempoVisita: "3 a 5 horas",
    fotos: ["/fotos/orla-de-atalaia.jpg"],
    linhasOnibus: [
      {
        numero: "502",
        nome: "Aeroporto / Zona Sul",
        dica: "Passa pela Av. Santos Dumont (a avenida da Orla). Ideal para quem chega pelo aeroporto.",
      },
      {
        numero: "007",
        nome: "Fernando Collor / Atalaia",
        dica: "Liga a zona norte diretamente à Orla.",
      },
      {
        numero: "080",
        nome: "Bugio / Atalaia",
        dica: "Alternativa vinda da zona norte/oeste.",
      },
    ],
    uberDaOrla: "Você já está aqui 🙂",
    uberDoCentro: "R$ 18 a R$ 25 (≈ 20 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Bolsões de estacionamento gratuitos ao longo de toda a Av. Santos Dumont. Fácil vaga fora dos fins de semana à noite.",
    melhorTransporte: "a-pe",
    melhorTransporteMotivo:
      "Se estiver hospedado na Atalaia, tudo fica a distância de caminhada. Vindo de fora, o carro é tranquilo: estacionamento fácil e gratuito.",
    dicas: [
      "Vá no fim de tarde e fique para ver os Arcos iluminados à noite.",
      "A água do mar 'brilha' refletindo as luzes da orla após escurecer.",
      "Alugue uma bike ou triciclo no calçadão para percorrer os 6 km.",
    ],
  },
  {
    slug: "museu-da-gente-sergipana",
    cidade: "aracaju",
    nome: "Museu da Gente Sergipana",
    categoria: "cultura",
    resumo:
      "Museu interativo e high-tech sobre a cultura de Sergipe, num casarão histórico à beira do Rio Sergipe. A atração cultural mais bem avaliada da cidade.",
    descricao:
      "Instalado no antigo colégio Atheneuzinho (1926), às margens do Rio Sergipe, o Museu da Gente Sergipana é considerado um dos museus mais modernos do Brasil — e a atração mais bem avaliada de Aracaju. Totalmente interativo, mistura tecnologia e cultura popular: você 'veste' digitalmente trajes típicos, mergulha nos sons do forró e nas festas como o São João, conhece o artesanato, a culinária e os sotaques sergipanos em instalações imersivas. Diversão garantida para adultos e crianças, com ar-condicionado para fugir do calor. A visita combina perfeitamente com o Largo da Gente Sergipana, logo em frente.",
    notaGoogle: 4.8,
    avaliacoesGoogle: 16800,
    lat: -10.9096,
    lng: -37.0492,
    endereco: "Av. Ivo do Prado, 398, Centro, Aracaju - SE",
    horario: "Ter a sex 10h–16h, sáb/dom 11h–17h (seg fechado)",
    preco: "Gratuito",
    tempoVisita: "1h30 a 2h30",
    fotos: ["/fotos/museu-da-gente-sergipana.jpg"],
    linhasOnibus: [
      {
        numero: "004",
        nome: "Santa Maria / Mercado",
        dica: "Desça no Terminal Mercado e caminhe ~600 m pela Av. Ivo do Prado.",
      },
      {
        numero: "051",
        nome: "Terminal Centro",
        dica: "Qualquer linha que passe pelo Centro deixa você a poucas quadras.",
      },
    ],
    uberDaOrla: "R$ 18 a R$ 25 (≈ 20 min)",
    uberDoCentro: "R$ 8 a R$ 12 (≈ 5 min)",
    estacionamento: "medio",
    estacionamentoDica:
      "Estacionamento na rua (zona azul) e bolsão próximo ao museu. No Centro em dia útil, prefira Uber.",
    melhorTransporte: "uber",
    melhorTransporteMotivo:
      "O Centro tem trânsito e estacionamento apertados em dia útil. Um Uber da Orla custa ~R$ 20 e deixa na porta.",
    dicas: [
      "Combine com o Largo da Gente Sergipana e o Centro Histórico no mesmo passeio.",
      "Entrada gratuita — chegue cedo em alta temporada para evitar fila.",
      "Ótimo programa para dias de chuva ou sol forte.",
    ],
  },
  {
    slug: "oceanario-de-aracaju",
    cidade: "aracaju",
    nome: "Oceanário de Aracaju (Projeto Tamar)",
    categoria: "natureza",
    resumo:
      "O aquário do Projeto Tamar na Orla de Atalaia: tartarugas marinhas, tubarões, arraias e um túnel submerso. Imperdível com crianças.",
    descricao:
      "Com formato de tartaruga (dá para ver de cima!), o Oceanário de Aracaju é mantido pela Fundação Projeto Tamar e apresenta a vida marinha da costa sergipana: tartarugas, tubarões-lixa, arraias, moreias, cavalos-marinhos e dezenas de espécies de peixes em 26 aquários, incluindo um oceânico de 250 mil litros com túnel de observação. Há alimentação dos animais em horários programados e exposições educativas sobre a preservação das tartarugas marinhas que desovam no litoral de Sergipe. Fica em plena Orla de Atalaia — fácil de encaixar em qualquer roteiro.",
    notaGoogle: 4.6,
    avaliacoesGoogle: 23900,
    lat: -10.9868,
    lng: -37.0369,
    endereco: "Av. Santos Dumont, 1010, Atalaia, Aracaju - SE",
    horario: "Qua a seg 9h–20h (ter fechado; bilheteria até 19h)",
    preco: "R$ 40 inteira / R$ 20 meia",
    tempoVisita: "1h a 1h30",
    fotos: ["/fotos/oceanario-de-aracaju.jpg"],
    linhasOnibus: [
      {
        numero: "502",
        nome: "Aeroporto / Zona Sul",
        dica: "Desça na Av. Santos Dumont, em frente ao Oceanário.",
      },
      {
        numero: "007",
        nome: "Fernando Collor / Atalaia",
        dica: "Passa pela Orla de Atalaia.",
      },
    ],
    uberDaOrla: "R$ 8 a R$ 12 (está na própria Orla)",
    uberDoCentro: "R$ 18 a R$ 25 (≈ 20 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Bolsão gratuito da Orla em frente. Vaga fácil durante o dia.",
    melhorTransporte: "a-pe",
    melhorTransporteMotivo:
      "Fica no meio da Orla de Atalaia — quem está hospedado na região chega a pé pelo calçadão.",
    dicas: [
      "Confira os horários de alimentação dos animais na entrada.",
      "Fecha às terças-feiras — planeje o roteiro.",
      "À noite fica aberto até 20h: ótimo para combinar com jantar na Passarela do Caranguejo.",
    ],
  },
  {
    slug: "orla-por-do-sol",
    cidade: "aracaju",
    nome: "Orla Pôr do Sol",
    categoria: "praias",
    resumo:
      "Deck à beira do Rio Vaza-Barris no Mosqueiro, com um dos pores do sol mais bonitos do Brasil. Ponto de partida dos catamarãs.",
    descricao:
      "No extremo sul de Aracaju, no povoado Mosqueiro, a Orla Pôr do Sol é um calçadão com píer sobre o Rio Vaza-Barris famoso por entardeceres espetaculares — o sol mergulha atrás dos coqueirais refletindo no rio, num cenário de cartão-postal. A estrutura tem quiosques, parque infantil, ciclovia e atracadouro de onde partem os catamarãs para a Crôa do Goré e Ilha dos Namorados. Vá no fim da tarde, garanta um lugar no píer e espere o espetáculo: é de graça e inesquecível.",
    notaGoogle: 4.7,
    avaliacoesGoogle: 14200,
    lat: -11.1316,
    lng: -37.1512,
    endereco: "Rod. Inácio Barbosa, Mosqueiro, Aracaju - SE",
    horario: "Aberta 24h (melhor entre 16h e 18h)",
    preco: "Gratuito",
    tempoVisita: "1h a 2h",
    fotos: ["/fotos/orla-por-do-sol.jpg"],
    linhasOnibus: [
      {
        numero: "501",
        nome: "Povoado São José / Terminal Zona Sul",
        dica: "Do Terminal Zona Sul há linhas para o Mosqueiro, mas o trajeto é longo (~1h) e com poucos horários à noite.",
      },
    ],
    uberDaOrla: "R$ 40 a R$ 55 (≈ 30 min)",
    uberDoCentro: "R$ 55 a R$ 70 (≈ 40 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Estacionamento gratuito ao longo da rodovia e bolsão na orla. Enche perto do pôr do sol nos fins de semana.",
    melhorTransporte: "carro",
    melhorTransporteMotivo:
      "São ~25 km da Atalaia por estrada tranquila e estacionamento fácil. Sem carro, chame um Uber (~R$ 45) — de ônibus a volta à noite é complicada.",
    dicas: [
      "Chegue até 16h30 para pegar lugar no píer antes do pôr do sol.",
      "Combine com o passeio de catamarã à Crôa do Goré saindo daqui.",
      "Leve repelente: à beira-rio, o fim de tarde atrai mosquitos.",
    ],
  },
  {
    slug: "croa-do-gore",
    cidade: "aracaju",
    nome: "Crôa do Goré",
    categoria: "passeios",
    resumo:
      "Banco de areia paradisíaco no meio do Rio Vaza-Barris, com bar flutuante. Acesso de catamarã saindo da Orla Pôr do Sol.",
    descricao:
      "A Crôa do Goré é um banco de areia que aparece no meio do estuário do Rio Vaza-Barris, cercado de águas calmas, mornas e rasas — cenário de piscina natural. No local há um bar flutuante famoso, redes dentro d'água e quiosques de palha. O acesso é por catamarã ou lancha saindo da Orla Pôr do Sol (Mosqueiro), geralmente ao som de forró e música nordestina; muitos passeios combinam a parada na Crôa com a Ilha dos Namorados. É o passeio mais procurado por turistas em Aracaju.",
    notaGoogle: 4.6,
    avaliacoesGoogle: 8900,
    lat: -11.108,
    lng: -37.1418,
    endereco: "Rio Vaza-Barris — embarque na Orla Pôr do Sol, Mosqueiro",
    horario: "Saídas dos catamarãs entre 9h e 14h (confirme com a agência)",
    preco: "R$ 60 a R$ 100 o passeio de catamarã",
    tempoVisita: "Meio dia (3 a 5 horas)",
    fotos: ["/fotos/croa-do-gore.jpg"],
    linhasOnibus: [
      {
        numero: "501",
        nome: "Povoado São José / Terminal Zona Sul",
        dica: "Vá até o Mosqueiro e caminhe até o atracadouro da Orla Pôr do Sol.",
      },
    ],
    uberDaOrla: "R$ 40 a R$ 55 até o embarque (≈ 30 min)",
    uberDoCentro: "R$ 55 a R$ 70 até o embarque (≈ 40 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Estacione na Orla Pôr do Sol, ponto de embarque dos catamarãs.",
    melhorTransporte: "barco",
    melhorTransporteMotivo:
      "Só se chega de embarcação: reserve o catamarã com antecedência e vá de carro ou Uber até o embarque no Mosqueiro.",
    dicas: [
      "Reserve na véspera em alta temporada — os catamarãs lotam.",
      "Leve dinheiro/Pix para o bar flutuante e protetor solar reforçado.",
      "A maré baixa deixa o banco de areia maior: pergunte à agência o melhor horário.",
    ],
  },
  {
    slug: "ilha-dos-namorados",
    cidade: "aracaju",
    nome: "Ilha dos Namorados",
    categoria: "passeios",
    resumo:
      "Grande banco de areia entre o Rio Vaza-Barris e o mar, com redes aquáticas, guarda-sóis e bar flutuante. Parada clássica do catamarã.",
    descricao:
      "Entre o Rio Vaza-Barris e o Oceano Atlântico, a Ilha dos Namorados é um extenso banco de areia com estrutura de guarda-sóis, cadeiras, redes dentro da água e bar flutuante. A área é bem maior que a da Crôa do Goré e convida a caminhar, tomar banho nas águas rasas e fotografar. Os passeios de catamarã saem da Orla Pôr do Sol e costumam parar cerca de duas horas na ilha, muitas vezes no mesmo roteiro da Crôa do Goré.",
    notaGoogle: 4.6,
    avaliacoesGoogle: 6400,
    lat: -11.1211,
    lng: -37.1345,
    endereco: "Foz do Rio Vaza-Barris — embarque na Orla Pôr do Sol, Mosqueiro",
    horario: "Conforme saída do catamarã (manhã e início da tarde)",
    preco: "Incluída nos passeios de catamarã (R$ 60 a R$ 100)",
    tempoVisita: "≈ 2h de parada na ilha",
    fotos: ["/fotos/ilha-dos-namorados.jpg"],
    linhasOnibus: [
      {
        numero: "501",
        nome: "Povoado São José / Terminal Zona Sul",
        dica: "Até o Mosqueiro; o acesso final é só de barco.",
      },
    ],
    uberDaOrla: "R$ 40 a R$ 55 até o embarque (≈ 30 min)",
    uberDoCentro: "R$ 55 a R$ 70 até o embarque (≈ 40 min)",
    estacionamento: "facil",
    estacionamentoDica: "Estacione na Orla Pôr do Sol e embarque no catamarã.",
    melhorTransporte: "barco",
    melhorTransporteMotivo:
      "Acesso exclusivo por embarcação a partir da Orla Pôr do Sol — normalmente no mesmo passeio da Crôa do Goré.",
    dicas: [
      "As redes aquáticas rendem as fotos mais famosas de Aracaju.",
      "Use chinelo resistente: a areia esquenta muito ao meio-dia.",
      "Passeios com música e animação: prefira lancha privada se quiser sossego.",
    ],
  },
  {
    slug: "passarela-do-caranguejo",
    cidade: "aracaju",
    nome: "Passarela do Caranguejo",
    categoria: "gastronomia",
    resumo:
      "O polo gastronômico da Orla de Atalaia: dezenas de restaurantes de frutos do mar sob o caranguejo gigante de 7 metros. Imperdível à noite.",
    descricao:
      "Trecho mais animado da Orla de Atalaia à noite, a Passarela do Caranguejo reúne os restaurantes mais tradicionais de Aracaju, quase todos especializados no prato símbolo da cidade: o caranguejo. A escultura gigante de 7 metros do artesão Ary Marques marca a entrada. Além do caranguejo servido com baião-de-dois e pirão, prove camarões, lagostas e a culinária sergipana ao som de música ao vivo. Ambiente familiar, movimentado e com opções para todos os bolsos.",
    notaGoogle: 4.5,
    avaliacoesGoogle: 12300,
    lat: -10.9906,
    lng: -37.0345,
    endereco: "Av. Santos Dumont (Orla de Atalaia), Aracaju - SE",
    horario: "Restaurantes das 11h à 0h (mais movimento a partir das 19h)",
    preco: "Pratos entre R$ 60 e R$ 150 (servem 2-3 pessoas)",
    tempoVisita: "2 a 3 horas (jantar)",
    fotos: ["/fotos/passarela-do-caranguejo.jpg"],
    linhasOnibus: [
      {
        numero: "502",
        nome: "Aeroporto / Zona Sul",
        dica: "Desça na altura da Passarela, na Av. Santos Dumont.",
      },
      {
        numero: "080",
        nome: "Bugio / Atalaia",
        dica: "Atende a região da Orla.",
      },
    ],
    uberDaOrla: "R$ 8 a R$ 12 (curtinho, dentro da Atalaia)",
    uberDoCentro: "R$ 20 a R$ 28 (≈ 20 min)",
    estacionamento: "medio",
    estacionamentoDica:
      "Tem bolsão, mas lota à noite nos fins de semana. Indo jantar sexta/sábado, prefira Uber.",
    melhorTransporte: "uber",
    melhorTransporteMotivo:
      "À noite, com estacionamento disputado e a possibilidade de uma cerveja no jantar, o Uber é a escolha certa.",
    dicas: [
      "Peça o caranguejo com o martelinho de madeira — experiência clássica.",
      "Quinta a domingo tem música ao vivo na maioria das casas.",
      "Reserve mesa em alta temporada (dezembro a fevereiro).",
    ],
  },
  {
    slug: "mercado-municipal-antonio-franco",
    cidade: "aracaju",
    nome: "Mercados Municipais (Antônio Franco e Thales Ferraz)",
    categoria: "cultura",
    resumo:
      "O coração popular de Aracaju desde 1926: artesanato, castanhas, doces, queijos, rendas e a culinária sergipana raiz no Centro Histórico.",
    descricao:
      "Os mercados centrais de Aracaju formam um complexo imperdível no Centro Histórico. O Antônio Franco (1926), com seu relógio emblemático, concentra artesanato sergipano — rendas, bordados, cerâmicas e couro — além de restaurantes populares com música ao vivo. Ao lado, o Thales Ferraz (1948) é o reino das especiarias: castanha de caju, doces caseiros, queijos, mel, beiju e tapioca. É o melhor lugar da cidade para comprar lembranças com preço justo e sentir o dia a dia aracajuano.",
    notaGoogle: 4.5,
    avaliacoesGoogle: 18700,
    lat: -10.913,
    lng: -37.0509,
    endereco: "Av. Simeão Sobral, Centro, Aracaju - SE",
    horario: "Seg a sáb 7h–17h, dom 7h–12h",
    preco: "Entrada gratuita",
    tempoVisita: "1h30 a 2h",
    fotos: ["/fotos/mercado-municipal-antonio-franco.jpg"],
    linhasOnibus: [
      {
        numero: "004",
        nome: "Santa Maria / Mercado",
        dica: "Para no Terminal Mercado, colado nos mercados.",
      },
      {
        numero: "021",
        nome: "Barra dos Coqueiros / Centro",
        dica: "Desça no Centro e caminhe 5 minutos.",
      },
    ],
    uberDaOrla: "R$ 20 a R$ 28 (≈ 25 min)",
    uberDoCentro: "R$ 7 a R$ 10 (≈ 5 min)",
    estacionamento: "dificil",
    estacionamentoDica:
      "Região de comércio intenso, sem bolsões. Evite ir de carro em dia útil — vá de Uber ou ônibus.",
    melhorTransporte: "uber",
    melhorTransporteMotivo:
      "Estacionar no entorno dos mercados é difícil. Uber deixa na porta; ônibus (Terminal Mercado) também funciona muito bem.",
    dicas: [
      "Vá de manhã: mais fresco, mais movimento e tudo aberto.",
      "Prove a castanha de caju torrada na hora e o queijo coalho.",
      "Pechinchar faz parte — com simpatia, sempre sai desconto.",
    ],
  },
  {
    slug: "centro-historico",
    cidade: "aracaju",
    nome: "Centro Histórico de Aracaju",
    categoria: "cultura",
    resumo:
      "Casarões, praças e museus da Aracaju de 1855: Palácio Olímpio Campos, antiga Alfândega, Catedral e as ruas planejadas em tabuleiro de xadrez.",
    descricao:
      "Aracaju nasceu planejada em 1855, com ruas em traçado de tabuleiro de xadrez — e o Centro Histórico guarda essa origem. O passeio inclui o Palácio Museu Olímpio Campos (antiga sede do governo, com visita guiada gratuita), a antiga Alfândega (hoje Centro Cultural de Aracaju), a Catedral Metropolitana na Praça Olímpio Campos, os calçadões de comércio da João Pessoa e as praças arborizadas Fausto Cardoso e General Valadão. Tudo caminhável e próximo do Museu da Gente Sergipana e dos Mercados — dá para conhecer o essencial em uma manhã.",
    notaGoogle: 4.4,
    avaliacoesGoogle: 7600,
    lat: -10.9111,
    lng: -37.0489,
    endereco: "Praça Fausto Cardoso e entorno, Centro, Aracaju - SE",
    horario: "Livre (museus geralmente ter–dom, horário comercial)",
    preco: "Gratuito (museus gratuitos ou simbólicos)",
    tempoVisita: "2 a 3 horas",
    fotos: ["/fotos/centro-historico.jpg"],
    linhasOnibus: [
      {
        numero: "051",
        nome: "Terminal Centro",
        dica: "Dezenas de linhas convergem para o Centro — qualquer 'Centro' no letreiro serve.",
      },
      {
        numero: "021",
        nome: "Barra dos Coqueiros / Centro",
        dica: "Passa pela região central.",
      },
    ],
    uberDaOrla: "R$ 18 a R$ 25 (≈ 20 min)",
    uberDoCentro: "Você já está aqui 🙂",
    estacionamento: "dificil",
    estacionamentoDica:
      "Zona azul concorrida em dia útil. Aos domingos de manhã é tranquilo estacionar.",
    melhorTransporte: "uber",
    melhorTransporteMotivo:
      "O passeio é a pé entre praças e museus; chegue de Uber ou ônibus e caminhe. De carro, só vale aos domingos.",
    dicas: [
      "Faça o roteiro de manhã, quando o comércio dá vida ao Centro.",
      "A visita guiada ao Palácio Olímpio Campos é gratuita e excelente.",
      "Emende: Museu da Gente Sergipana → Largo → Catedral → Mercados.",
    ],
  },
  {
    slug: "largo-da-gente-sergipana",
    cidade: "aracaju",
    nome: "Largo da Gente Sergipana",
    categoria: "cultura",
    resumo:
      "Praça à beira do Rio Sergipe com esculturas gigantes dos personagens do folclore sergipano: Lambe-Sujo, Caboclinho, Cacumbi e Barco de Fogo.",
    descricao:
      "Inaugurado em 2016 em frente ao Museu da Gente Sergipana, o Largo da Gente Sergipana é um espaço aberto à margem do Rio Sergipe com esculturas monumentais que celebram o folclore do estado: os personagens do Lambe-Sujo, o Caboclinho, o Cacumbi e o Barco de Fogo, todos em escala gigante e coloridos. De dia, rende fotos incríveis com o rio e a Ponte Aracaju–Barra ao fundo; à noite, a iluminação cênica transforma o cenário. Passeio rápido, gratuito e que combina com o museu em frente.",
    notaGoogle: 4.8,
    avaliacoesGoogle: 5900,
    lat: -10.9106,
    lng: -37.048,
    endereco: "Av. Ivo do Prado, s/n, Centro, Aracaju - SE",
    horario: "Aberto 24h (iluminação à noite)",
    preco: "Gratuito",
    tempoVisita: "30 min a 1h",
    fotos: ["/fotos/largo-da-gente-sergipana.jpg"],
    linhasOnibus: [
      {
        numero: "004",
        nome: "Santa Maria / Mercado",
        dica: "Desça no Terminal Mercado e caminhe pela beira-rio (Av. Ivo do Prado).",
      },
    ],
    uberDaOrla: "R$ 18 a R$ 25 (≈ 20 min)",
    uberDoCentro: "R$ 7 a R$ 10 (≈ 5 min)",
    estacionamento: "medio",
    estacionamentoDica:
      "Vagas na Av. Ivo do Prado; mais fácil à noite e nos fins de semana.",
    melhorTransporte: "uber",
    melhorTransporteMotivo:
      "Visite junto com o Museu da Gente Sergipana (em frente) — um único Uber resolve os dois.",
    dicas: [
      "Vá no fim de tarde: fotos com luz dourada e esculturas iluminadas em seguida.",
      "Fica em frente ao Museu da Gente Sergipana: faça os dois juntos.",
    ],
  },
  {
    slug: "colina-de-santo-antonio",
    cidade: "aracaju",
    nome: "Colina de Santo Antônio",
    categoria: "cultura",
    resumo:
      "O berço de Aracaju: igreja histórica no alto da colina com a vista panorâmica mais bonita da cidade, do rio e da Ilha de Santa Luzia.",
    descricao:
      "Foi na Colina de Santo Antônio que Aracaju nasceu. No topo, a Igreja de Santo Antônio (século XIX) coroa o bairro mais antigo da cidade, e o mirante ao redor entrega a melhor vista panorâmica de Aracaju: o estuário do Rio Sergipe, a Ponte Aracaju–Barra, a Ilha de Santa Luzia e o casario. O acesso é por escadaria ou de carro até o alto. Vale combinar com o Centro Histórico, que fica a poucos minutos.",
    notaGoogle: 4.6,
    avaliacoesGoogle: 4800,
    lat: -10.8983,
    lng: -37.0568,
    endereco: "Alto da Colina, Bairro Santo Antônio, Aracaju - SE",
    horario: "Livre (igreja aberta em horários de missa e visitação)",
    preco: "Gratuito",
    tempoVisita: "45 min a 1h",
    fotos: ["/fotos/colina-de-santo-antonio.jpg"],
    linhasOnibus: [
      {
        numero: "008",
        nome: "Porto Sul / Bairro Industrial",
        dica: "Passa próximo ao bairro Santo Antônio; suba a pé até a colina.",
      },
    ],
    uberDaOrla: "R$ 22 a R$ 30 (≈ 25 min)",
    uberDoCentro: "R$ 10 a R$ 14 (≈ 10 min)",
    estacionamento: "facil",
    estacionamentoDica: "Dá para subir de carro e estacionar no alto, perto da igreja.",
    melhorTransporte: "uber",
    melhorTransporteMotivo:
      "Trajeto curto do Centro e o motorista deixa no alto da colina, evitando a subida a pé sob sol forte.",
    dicas: [
      "Melhor luz para fotos: fim de tarde, com o sol atrás da cidade.",
      "Combine com o Centro Histórico (10 min de distância).",
    ],
  },
  {
    slug: "parque-da-sementeira",
    cidade: "aracaju",
    nome: "Parque da Sementeira",
    categoria: "natureza",
    resumo:
      "O grande parque urbano de Aracaju: 40 hectares de verde com lago, pista de caminhada, ciclovia, parquinho e espaço para piquenique.",
    descricao:
      "O Parque Governador Augusto Franco, que todo aracajuano chama de Parque da Sementeira, é o principal refúgio verde da cidade: cerca de 40 hectares com gramados enormes, árvores centenárias, lago com pedalinhos, pista de cooper, ciclovia, quadras e parquinho infantil. Nos fins de semana, famílias estendem cangas para piquenique e o parque vira o quintal da cidade. Fica na zona sul, entre a Orla e o Centro, ao lado do shopping Riomar — fácil de encaixar no roteiro.",
    notaGoogle: 4.7,
    avaliacoesGoogle: 21400,
    lat: -10.9438,
    lng: -37.0489,
    endereco: "Av. Beira Mar, s/n, Jardins, Aracaju - SE",
    horario: "Diariamente, 5h–22h",
    preco: "Gratuito",
    tempoVisita: "1 a 2 horas",
    fotos: ["/fotos/parque-da-sementeira.jpg"],
    linhasOnibus: [
      {
        numero: "002",
        nome: "Fernando Collor / DIA",
        dica: "Linhas que passam pela Av. Beira Mar param em frente ao parque.",
      },
    ],
    uberDaOrla: "R$ 12 a R$ 18 (≈ 12 min)",
    uberDoCentro: "R$ 12 a R$ 18 (≈ 12 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Estacionamento próprio gratuito e vagas na Av. Beira Mar.",
    melhorTransporte: "carro",
    melhorTransporteMotivo:
      "Meio do caminho entre Centro e Orla, com estacionamento próprio gratuito — parada perfeita para quem está de carro.",
    dicas: [
      "Fim de tarde é o horário mais gostoso (e mais fresco).",
      "Alugue pedalinho no lago com as crianças.",
      "Ao lado do shopping Riomar: emende almoço ou cinema.",
    ],
  },
  {
    slug: "praia-de-aruana",
    cidade: "aracaju",
    nome: "Praia de Aruana",
    categoria: "praias",
    resumo:
      "A praia urbana preferida de quem busca sossego: faixa larga de areia, mar bom para banho, quiosques estruturados e o Deque do Banho Doce.",
    descricao:
      "Na Rodovia dos Náufragos, a caminho das praias do sul, a Praia de Aruana é a queridinha de quem quer fugir do agito da Atalaia sem abrir mão de estrutura. A orla foi reurbanizada com áreas verdes, ciclovia, rampas de acesso e piso tátil, e os quiosques servem peixe frito, camarão e água de coco à beira-mar. O Deque do Banho Doce, erguido em madeira sobre a praia, é ótimo para caminhada e fotos. Mar aberto com ondas moderadas e areia firme para longas caminhadas.",
    notaGoogle: 4.5,
    avaliacoesGoogle: 9200,
    lat: -11.035,
    lng: -37.071,
    endereco: "Rod. José Sarney (Rodovia dos Náufragos), Aruana, Aracaju - SE",
    horario: "Aberta 24h (quiosques das 8h às 18h)",
    preco: "Gratuito",
    tempoVisita: "Meio dia",
    fotos: ["/fotos/praia-de-aruana.jpg"],
    linhasOnibus: [
      {
        numero: "600 CP1/CP2",
        nome: "Circular Praias",
        dica: "A linha das praias: percorre o litoral sul passando por Aruana.",
      },
      {
        numero: "505",
        nome: "Santa Maria / Zona Sul (via Prainha)",
        dica: "Alternativa pela Rodovia dos Náufragos.",
      },
    ],
    uberDaOrla: "R$ 15 a R$ 22 (≈ 15 min)",
    uberDoCentro: "R$ 28 a R$ 38 (≈ 30 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Estacionamento na orla reurbanizada, gratuito e tranquilo mesmo em fins de semana.",
    melhorTransporte: "carro",
    melhorTransporteMotivo:
      "Estrada boa, estacionamento fácil e liberdade para seguir às praias do sul (Robalo, Náufragos, Refúgio) no mesmo dia.",
    dicas: [
      "Emende com as praias do sul: Robalo e Refúgio na mesma rodovia.",
      "Dias de semana são quase desertos — paz total.",
      "Quiosques aceitam cartão e Pix.",
    ],
  },
  {
    slug: "praia-dos-artistas",
    cidade: "aracaju",
    nome: "Praia dos Artistas",
    categoria: "praias",
    resumo:
      "Continuação tranquila da Praia de Atalaia, com bons quiosques, mar aberto e o clima de bairro à beira-mar da Coroa do Meio e Atalaia.",
    descricao:
      "Logo depois da Praia de Atalaia, rumo ao sul, a Praia dos Artistas mantém a boa estrutura da orla — calçadão, ciclovia e quiosques — com menos movimento e mais espaço na areia. É uma das preferidas dos moradores para o banho de mar matinal e para assistir ao nascer do sol. A faixa de areia é larga e firme, ótima para caminhada e corrida, e os quiosques servem petiscos e frutos do mar com preço mais camarada que na Passarela do Caranguejo.",
    notaGoogle: 4.5,
    avaliacoesGoogle: 5100,
    lat: -10.995,
    lng: -37.033,
    endereco: "Av. Santos Dumont (continuação sul), Atalaia, Aracaju - SE",
    horario: "Aberta 24h (quiosques das 8h às 22h)",
    preco: "Gratuito",
    tempoVisita: "2 a 4 horas",
    fotos: ["/fotos/praia-dos-artistas.jpg"],
    linhasOnibus: [
      {
        numero: "502",
        nome: "Aeroporto / Zona Sul",
        dica: "Segue pela Av. Santos Dumont até a região da praia.",
      },
      {
        numero: "600 CP1/CP2",
        nome: "Circular Praias",
        dica: "Percorre todo o litoral, incluindo a Praia dos Artistas.",
      },
    ],
    uberDaOrla: "R$ 8 a R$ 12 (≈ 5 min)",
    uberDoCentro: "R$ 20 a R$ 28 (≈ 22 min)",
    estacionamento: "facil",
    estacionamentoDica: "Vagas tranquilas ao longo da avenida, mesmo em alta temporada.",
    melhorTransporte: "a-pe",
    melhorTransporteMotivo:
      "É a continuação natural da caminhada pela Orla de Atalaia — dá para ir pelo calçadão.",
    dicas: [
      "Nascer do sol aqui é espetáculo à parte: vá antes das 5h30.",
      "Preços dos quiosques são melhores que na área central da Orla.",
    ],
  },
  {
    slug: "mirante-da-13-de-julho",
    cidade: "aracaju",
    nome: "Mirante da 13 de Julho",
    categoria: "natureza",
    resumo:
      "Calçadão à beira do Rio Sergipe no bairro mais charmoso da cidade: vista do encontro rio-mar, manguezais, quiosques e pôr do sol urbano.",
    descricao:
      "O Mirante da 13 de Julho é o point da beira-rio aracajuana. O calçadão elevado sobre o manguezal do Rio Sergipe tem vista para o encontro do rio com o mar, a Ilha de Santa Luzia e a Ponte Aracaju–Barra. É rodeado por quiosques de água de coco e tapioca, playground e academia ao ar livre, no bairro 13 de Julho — o mais nobre da cidade, cheio de bares e restaurantes. Fim de tarde é sagrado: moradores lotam o calçadão para caminhar e ver o sol se pôr sobre o rio.",
    notaGoogle: 4.6,
    avaliacoesGoogle: 8700,
    lat: -10.931,
    lng: -37.0455,
    endereco: "Av. Beira Mar, Bairro 13 de Julho, Aracaju - SE",
    horario: "Aberto 24h (mais movimento das 16h às 21h)",
    preco: "Gratuito",
    tempoVisita: "1 a 2 horas",
    fotos: ["/fotos/mirante-da-13-de-julho.jpg"],
    linhasOnibus: [
      {
        numero: "002",
        nome: "Fernando Collor / DIA",
        dica: "Linhas pela Av. Beira Mar atendem o mirante.",
      },
    ],
    uberDaOrla: "R$ 14 a R$ 20 (≈ 15 min)",
    uberDoCentro: "R$ 10 a R$ 14 (≈ 8 min)",
    estacionamento: "medio",
    estacionamentoDica:
      "Vagas na Av. Beira Mar; concorridas no fim de tarde, mas com rotatividade.",
    melhorTransporte: "carro",
    melhorTransporteMotivo:
      "Parada rápida no caminho entre Centro e Orla; com carro você emenda a Sementeira, que fica na mesma avenida.",
    dicas: [
      "Água de coco no quiosque vendo o pôr do sol sobre o rio: programa raiz.",
      "O bairro tem ótimos bares para esticar a noite.",
    ],
  },
  {
    slug: "catedral-metropolitana",
    cidade: "aracaju",
    nome: "Catedral Metropolitana de Aracaju",
    categoria: "cultura",
    resumo:
      "A igreja-mãe de Aracaju (1875) na Praça Olímpio Campos: fachada imponente, interior em estilo eclético e coração do Centro Histórico.",
    descricao:
      "Na Praça Olímpio Campos, cercada de jardins e coretos, a Catedral Metropolitana Nossa Senhora da Conceição (1875) é o marco religioso e arquitetônico do Centro. A fachada com duas torres e o interior em estilo eclético, com vitrais e pinturas restauradas, valem a visita mesmo para quem não é religioso. A praça em volta é uma das mais bonitas da cidade, com árvores centenárias. Entrada gratuita; missas diárias.",
    notaGoogle: 4.7,
    avaliacoesGoogle: 6100,
    lat: -10.9116,
    lng: -37.0525,
    endereco: "Praça Olímpio Campos, Centro, Aracaju - SE",
    horario: "Diariamente 7h–19h (missas: consultar)",
    preco: "Gratuito",
    tempoVisita: "30 min",
    fotos: ["/fotos/catedral-metropolitana.jpg"],
    linhasOnibus: [
      {
        numero: "051",
        nome: "Terminal Centro",
        dica: "Qualquer linha para o Centro deixa a poucas quadras da praça.",
      },
    ],
    uberDaOrla: "R$ 18 a R$ 25 (≈ 20 min)",
    uberDoCentro: "Está no coração do Centro",
    estacionamento: "dificil",
    estacionamentoDica:
      "Zona azul disputada em dia útil. Inclua a catedral no passeio a pé pelo Centro.",
    melhorTransporte: "a-pe",
    melhorTransporteMotivo:
      "Parte natural do roteiro a pé pelo Centro Histórico — fica entre os calçadões e as praças.",
    dicas: [
      "Domingo de manhã: missa + praça tranquila + estacionamento fácil.",
      "Repare nos vitrais restaurados e no altar-mor.",
    ],
  },
  {
    slug: "ponte-aracaju-barra",
    cidade: "aracaju",
    nome: "Ponte Aracaju–Barra (Construtor João Alves)",
    categoria: "natureza",
    resumo:
      "1,8 km sobre o Rio Sergipe ligando Aracaju à Barra dos Coqueiros: vista espetacular do rio, da cidade e porta de entrada das praias da Barra.",
    descricao:
      "Inaugurada em 2006, a Ponte Construtor João Alves cruza o Rio Sergipe em 1,8 km e liga Aracaju à Barra dos Coqueiros. A travessia em si já é um passeio: de um lado o skyline de Aracaju e o Mercado, do outro os coqueirais da Barra. Do outro lado esperam a Praia da Costa, o Viral (point jovem à beira-mar) e a Croa Aju Beach. Ao entardecer, a vista da ponte iluminada a partir do Largo da Gente Sergipana ou do Mirante 13 de Julho é uma das imagens mais bonitas da cidade.",
    notaGoogle: 4.6,
    avaliacoesGoogle: 3800,
    lat: -10.9014,
    lng: -37.0397,
    endereco: "Ligação Centro (Aracaju) – Barra dos Coqueiros",
    horario: "Aberta 24h",
    preco: "Travessia gratuita",
    tempoVisita: "Travessia + praias da Barra: meio dia",
    fotos: ["/fotos/ponte-aracaju-barra.jpg"],
    linhasOnibus: [
      {
        numero: "021",
        nome: "Barra dos Coqueiros / Centro",
        dica: "Cruza a ponte ligando o Centro à Barra dos Coqueiros.",
      },
    ],
    uberDaOrla: "R$ 25 a R$ 35 até a Barra (≈ 30 min)",
    uberDoCentro: "R$ 12 a R$ 18 até a Barra (≈ 12 min)",
    estacionamento: "facil",
    estacionamentoDica:
      "Na Barra dos Coqueiros há estacionamento fácil nas praias e no Viral.",
    melhorTransporte: "carro",
    melhorTransporteMotivo:
      "A graça é cruzar a ponte e explorar as praias da Barra no seu ritmo — de carro você conhece Praia da Costa e o Viral no mesmo dia.",
    dicas: [
      "Cruze no fim de tarde e veja o pôr do sol sobre o Rio Sergipe.",
      "Na Barra, o Viral é o point de bares na areia.",
    ],
  },
];

export const PONTOS: Ponto[] = [...PONTOS_ARACAJU, ...PONTOS_SAO_CRISTOVAO];

export function pontoPorSlug(slug: string): Ponto | undefined {
  return PONTOS.find((p) => p.slug === slug);
}

export function rankingPontos(): Ponto[] {
  return [...PONTOS].sort(
    (a, b) =>
      b.notaGoogle - a.notaGoogle || b.avaliacoesGoogle - a.avaliacoesGoogle
  );
}

export function pontosPorCidade(cidade?: Cidade | "todas"): Ponto[] {
  if (!cidade || cidade === "todas") return PONTOS;
  return PONTOS.filter((p) => p.cidade === cidade);
}

function nomeBusca(p: Ponto): string {
  return typeof p.nome === "string" ? p.nome : p.nome.pt;
}

/** Link do Google Maps: rota de carro com trânsito ao vivo */
export function linkRotaGoogleMaps(p: { lat: number; lng: number }): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}&travelmode=driving`;
}

/** Link do Google Maps: página do lugar */
export function linkLugarGoogleMaps(p: {
  nome: string;
  cidade: Cidade;
}): string {
  const cidade =
    p.cidade === "sao-cristovao" ? "São Cristóvão - SE" : "Aracaju - SE";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${p.nome}, ${cidade}`
  )}`;
}

/** Deep link do Uber com destino preenchido */
export function linkUber(p: {
  lat: number;
  lng: number;
  nome: string;
}): string {
  return (
    "https://m.uber.com/ul/?action=setPickup&pickup=my_location" +
    `&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}` +
    `&dropoff[nickname]=${encodeURIComponent(p.nome)}`
  );
}

/** Link do Moovit para rotas de ônibus */
export function linkMoovit(p: { lat: number; lng: number }): string {
  return `https://moovitapp.com/aracaju-4936/poi/pt-br?tll=${p.lat}_${p.lng}&customerId=4908`;
}

export { nomeBusca };
