import { L } from "@/lib/locale-text";
import type { Ponto } from "./tipos";

export const PONTOS_SAO_CRISTOVAO: Ponto[] = [
  {
    slug: "praca-sao-francisco",
    cidade: "sao-cristovao",
    nome: L(
      "Praça São Francisco",
      "São Francisco Square",
      "Plaza São Francisco"
    ),
    categoria: "cultura",
    resumo: L(
      "Patrimônio Mundial da UNESCO desde 2010: o coração colonial de São Cristóvão, onde Portugal e Espanha se misturam no traçado da praça.",
      "UNESCO World Heritage since 2010: the colonial heart of São Cristóvão, where Portuguese and Spanish town planning meet.",
      "Patrimonio Mundial de la UNESCO desde 2010: el corazón colonial de São Cristóvão, donde se cruzan el trazado portugués y el español."
    ),
    descricao: L(
      "A Praça São Francisco é um quadrilátero aberto cercado pelo Convento de São Francisco, a Santa Casa, o antigo Palácio Provincial e casarões dos séculos XVIII e XIX. É o único exemplar no Brasil da praça maior das Ordenações Filipinas (União Ibérica, 1580–1640) implantado em trama portuguesa tropical. Em 2010 a UNESCO a reconheceu como Patrimônio Mundial. Dá para ver tudo a pé em uma hora.",
      "São Francisco Square is an open quadrilateral framed by the São Francisco Convent, the Santa Casa, the old Provincial Palace and 18th–19th century houses. It is Brazil's only example of a Philippine Ordinances plaza set into a Portuguese tropical street grid. UNESCO listed it as World Heritage in 2010. You can see it all on foot in about an hour.",
      "La Plaza São Francisco es un cuadrilátero abierto rodeado por el Convento de São Francisco, la Santa Casa, el antiguo Palacio Provincial y caserones de los siglos XVIII y XIX. Es el único ejemplo en Brasil de plaza mayor de las Ordenaciones Filipinas (Unión Ibérica) en trama portuguesa tropical. La UNESCO la declaró Patrimonio Mundial en 2010. Se recorre a pie en una hora."
    ),
    notaGoogle: 4.8,
    avaliacoesGoogle: 4200,
    lat: -11.0147,
    lng: -37.2065,
    endereco: L(
      "Praça São Francisco, Centro Histórico, São Cristóvão - SE",
      "São Francisco Square, Historic Center, São Cristóvão - SE",
      "Plaza São Francisco, Centro Histórico, São Cristóvão - SE"
    ),
    horario: L("Aberta 24h", "Open 24h", "Abierta 24h"),
    preco: L("Gratuito", "Free", "Gratis"),
    tempoVisita: L("1 a 2 horas", "1 to 2 hours", "1 a 2 horas"),
    fotos: ["/fotos/praca-sao-francisco.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "Saídas pelo Terminal Zona Sul / rodoviária. Trajeto de cerca de 40–50 min.",
          "Departures from Zona Sul terminal / bus station. About 40–50 minutes.",
          "Salidas desde la Terminal Zona Sul / terminal. Unos 40–50 min."
        ),
      },
    ],
    uberDaOrla: L(
      "R$ 70 a R$ 100 (≈ 35–45 min)",
      "R$ 70–100 (≈ 35–45 min)",
      "R$ 70 a R$ 100 (≈ 35–45 min)"
    ),
    uberDoCentro: L(
      "R$ 55 a R$ 80 (≈ 30–40 min)",
      "R$ 55–80 (≈ 30–40 min)",
      "R$ 55 a R$ 80 (≈ 30–40 min)"
    ),
    estacionamento: "facil",
    estacionamentoDica: L(
      "Há vagas na própria praça e ruas laterais. Em fins de semana e feriados chega cedo.",
      "Parking on the square and side streets. Arrive early on weekends and holidays.",
      "Hay plazas en la misma plaza y calles laterales. Llega temprano en fines de semana."
    ),
    melhorTransporte: "carro",
    melhorTransporteMotivo: L(
      "São cerca de 25 km de Aracaju pela SE-065/BR-101, com estacionamento fácil. Sem carro, divida um Uber ou pegue o intermunicipal.",
      "About 25 km from Aracaju on SE-065/BR-101, with easy parking. Without a car, share an Uber or take the intercity bus.",
      "Son unos 25 km desde Aracaju por la SE-065/BR-101, con estacionamiento fácil. Sin coche, comparte un Uber o toma el intermunicipal."
    ),
    dicas: [
      L(
        "Combine com o Museu Histórico e o Convento no mesmo passeio a pé.",
        "Combine with the History Museum and the Convent on the same walking visit.",
        "Combínalo con el Museo Histórico y el Convento en el mismo paseo a pie."
      ),
      L(
        "Fins de tarde e serestas à noite são o melhor momento para fotos.",
        "Late afternoon and evening serestas are the best time for photos.",
        "El atardecer y las serenatas nocturnas son el mejor momento para fotos."
      ),
    ],
  },
  {
    slug: "convento-sao-francisco",
    cidade: "sao-cristovao",
    nome: L(
      "Igreja e Convento de São Francisco",
      "São Francisco Church and Convent",
      "Iglesia y Convento de São Francisco"
    ),
    categoria: "cultura",
    resumo: L(
      "Conjunto franciscano de 1693 na Praça São Francisco. Abriga o Museu de Arte Sacra, com mais de 500 peças.",
      "Franciscan complex from 1693 on São Francisco Square. Home to the Sacred Art Museum, with more than 500 pieces.",
      "Conjunto franciscano de 1693 en la Plaza São Francisco. Alberga el Museo de Arte Sacro, con más de 500 piezas."
    ),
    descricao: L(
      "Fundado em 1693, o Convento de São Francisco é o marco religioso da praça UNESCO. Na ala da antiga Ordem Terceira funciona o Museu de Arte Sacra, um dos mais importantes do Nordeste, com imagens, oratórios e peças dos séculos XVIII e XIX vindas de todo o Sergipe. Visita guiada vale a pena.",
      "Founded in 1693, the São Francisco Convent is the square's main religious landmark. The former Third Order wing holds the Sacred Art Museum, one of the Northeast's most important, with statues, oratories and 18th–19th century pieces from across Sergipe. A guided visit is worth it.",
      "Fundado en 1693, el Convento de São Francisco es el hito religioso de la plaza. En el ala de la antigua Orden Tercera funciona el Museo de Arte Sacro, de los más importantes del Nordeste, con imágenes y piezas de los siglos XVIII y XIX. La visita guiada vale la pena."
    ),
    notaGoogle: 4.7,
    avaliacoesGoogle: 2100,
    lat: -11.0149,
    lng: -37.2068,
    endereco: L(
      "Praça São Francisco, s/n, São Cristóvão - SE",
      "São Francisco Square, São Cristóvão - SE",
      "Plaza São Francisco, São Cristóvão - SE"
    ),
    horario: L(
      "Ter a dom, horário comercial (confirme na bilheteria)",
      "Tue–Sun, business hours (check at the ticket desk)",
      "Mar–dom, horario comercial (confirma en taquilla)"
    ),
    preco: L(
      "Entrada simbólica / meia disponível",
      "Small admission fee / discounts available",
      "Entrada simbólica / descuentos disponibles"
    ),
    tempoVisita: L("1 a 1h30", "1 to 1.5 hours", "1 a 1h30"),
    fotos: ["/fotos/convento-sao-francisco.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "Desça no Centro Histórico e caminhe até a praça.",
          "Get off in the Historic Center and walk to the square.",
          "Baja en el Centro Histórico y camina hasta la plaza."
        ),
      },
    ],
    uberDaOrla: L(
      "R$ 70 a R$ 100",
      "R$ 70–100",
      "R$ 70 a R$ 100"
    ),
    uberDoCentro: L(
      "R$ 55 a R$ 80",
      "R$ 55–80",
      "R$ 55 a R$ 80"
    ),
    estacionamento: "facil",
    estacionamentoDica: L(
      "Estacione na Praça São Francisco e vá a pé.",
      "Park at São Francisco Square and walk.",
      "Estaciona en la Plaza São Francisco y ve a pie."
    ),
    melhorTransporte: "carro",
    melhorTransporteMotivo: L(
      "Fica na mesma praça do Museu Histórico: um único deslocamento de Aracaju resolve os dois.",
      "It sits on the same square as the History Museum: one trip from Aracaju covers both.",
      "Está en la misma plaza que el Museo Histórico: un solo traslado desde Aracaju cubre ambos."
    ),
    dicas: [
      L(
        "Reserve tempo para o Museu de Arte Sacra — o acervo é denso.",
        "Leave time for the Sacred Art Museum — the collection is dense.",
        "Deja tiempo para el Museo de Arte Sacro: el acervo es denso."
      ),
    ],
  },
  {
    slug: "museu-historico-de-sergipe",
    cidade: "sao-cristovao",
    nome: L(
      "Museu Histórico de Sergipe",
      "Historical Museum of Sergipe",
      "Museo Histórico de Sergipe"
    ),
    categoria: "cultura",
    resumo: L(
      "No antigo Palácio Provincial, na Praça São Francisco. Reabriu em 2025 depois de cinco anos de restauro.",
      "In the old Provincial Palace on São Francisco Square. Reopened in 2025 after five years of restoration.",
      "En el antiguo Palacio Provincial, en la Plaza São Francisco. Reabrió en 2025 tras cinco años de restauración."
    ),
    descricao: L(
      "O museu estadual mais antigo de Sergipe ocupa o Palácio Provincial, de frente para a Praça São Francisco. Conta a história política e cotidiana do estado, de São Cristóvão capital a Aracaju. Após restauro completo, reabriu em 2025 com exposição renovada. Entrada costuma ser gratuita ou simbólica.",
      "Sergipe's oldest state museum fills the Provincial Palace facing São Francisco Square. It covers the state's political and everyday history, from São Cristóvão as capital to Aracaju. After a full restoration it reopened in 2025 with a refreshed exhibition. Admission is usually free or symbolic.",
      "El museo estatal más antiguo de Sergipe ocupa el Palacio Provincial frente a la Plaza São Francisco. Cuenta la historia política y cotidiana del estado. Tras una restauración completa, reabrió en 2025. La entrada suele ser gratuita o simbólica."
    ),
    notaGoogle: 4.7,
    avaliacoesGoogle: 1800,
    lat: -11.0145,
    lng: -37.2062,
    endereco: L(
      "Praça São Francisco, São Cristóvão - SE",
      "São Francisco Square, São Cristóvão - SE",
      "Plaza São Francisco, São Cristóvão - SE"
    ),
    horario: L(
      "Ter a dom (confirme após a reabertura)",
      "Tue–Sun (confirm after reopening hours)",
      "Mar–dom (confirma el horario tras la reapertura)"
    ),
    preco: L("Gratuito ou simbólico", "Free or symbolic", "Gratis o simbólico"),
    tempoVisita: L("1 a 1h30", "1 to 1.5 hours", "1 a 1h30"),
    fotos: ["/fotos/museu-historico-de-sergipe.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "Centro Histórico, na Praça São Francisco.",
          "Historic Center, on São Francisco Square.",
          "Centro Histórico, en la Plaza São Francisco."
        ),
      },
    ],
    uberDaOrla: L("R$ 70 a R$ 100", "R$ 70–100", "R$ 70 a R$ 100"),
    uberDoCentro: L("R$ 55 a R$ 80", "R$ 55–80", "R$ 55 a R$ 80"),
    estacionamento: "facil",
    estacionamentoDica: L(
      "Mesma praça do Convento.",
      "Same square as the Convent.",
      "Misma plaza que el Convento."
    ),
    melhorTransporte: "carro",
    melhorTransporteMotivo: L(
      "Faça o pacote Praça São Francisco + museus no mesmo meio dia saindo de Aracaju.",
      "Do São Francisco Square plus the museums in the same half-day from Aracaju.",
      "Haz la Plaza São Francisco y los museos en la misma media jornada desde Aracaju."
    ),
    dicas: [
      L(
        "Confirme o horário no dia — a casa reabriu recentemente.",
        "Confirm opening hours that day — it reopened recently.",
        "Confirma el horario ese día: reabrió hace poco."
      ),
    ],
  },
  {
    slug: "igreja-matriz-nossa-senhora-vitoria",
    cidade: "sao-cristovao",
    nome: L(
      "Igreja Matriz Nossa Senhora da Vitória",
      "Our Lady of Victory Parish Church",
      "Iglesia Matriz Nuestra Señora de la Victoria"
    ),
    categoria: "cultura",
    resumo: L(
      "A igreja mais antiga de Sergipe ainda em funcionamento, com origem por volta de 1608, na Praça da Matriz.",
      "The oldest church in Sergipe still in use, dating from around 1608, on Praça da Matriz.",
      "La iglesia más antigua de Sergipe aún en uso, de alrededor de 1608, en la Plaza de la Matriz."
    ),
    descricao: L(
      "A Matriz de Nossa Senhora da Vitória marca o núcleo religioso mais antigo da cidade. Tombada pelo IPHAN e ligada ao conjunto UNESCO, ainda celebra missas. A praça em volta tem casario colonial e sobrados de balcão corrido típicos de São Cristóvão.",
      "Our Lady of Victory Parish marks the town's oldest religious core. Listed by IPHAN and tied to the UNESCO ensemble, it still holds Mass. The square around it has colonial houses and continuous-balcony townhouses typical of São Cristóvão.",
      "La Matriz de Nuestra Señora de la Victoria marca el núcleo religioso más antiguo. Catalogada por el IPHAN y ligada al conjunto UNESCO, aún celebra misas. La plaza tiene caserío colonial típico de São Cristóvão."
    ),
    notaGoogle: 4.6,
    avaliacoesGoogle: 980,
    lat: -11.0158,
    lng: -37.2049,
    endereco: L(
      "Praça da Matriz, São Cristóvão - SE",
      "Praça da Matriz, São Cristóvão - SE",
      "Plaza de la Matriz, São Cristóvão - SE"
    ),
    horario: L(
      "Missas e visitação em horário comercial",
      "Masses and visits during business hours",
      "Misas y visita en horario comercial"
    ),
    preco: L("Gratuito", "Free", "Gratis"),
    tempoVisita: L("30 a 45 min", "30–45 min", "30 a 45 min"),
    fotos: ["/fotos/igreja-matriz-nossa-senhora-vitoria.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "A poucos minutos a pé da Praça São Francisco.",
          "A few minutes' walk from São Francisco Square.",
          "A pocos minutos a pie de la Plaza São Francisco."
        ),
      },
    ],
    uberDaOrla: L("R$ 70 a R$ 100", "R$ 70–100", "R$ 70 a R$ 100"),
    uberDoCentro: L("R$ 55 a R$ 80", "R$ 55–80", "R$ 55 a R$ 80"),
    estacionamento: "medio",
    estacionamentoDica: L(
      "Vagas na praça; evite horário de missa no domingo.",
      "Parking on the square; avoid Sunday Mass times.",
      "Plazas en la plaza; evita la hora de misa del domingo."
    ),
    melhorTransporte: "a-pe",
    melhorTransporteMotivo: L(
      "Depois de chegar à Praça São Francisco, o resto do Centro Histórico se faz a pé.",
      "Once you reach São Francisco Square, the rest of the Historic Center is on foot.",
      "Al llegar a la Plaza São Francisco, el resto del Centro Histórico se hace a pie."
    ),
    dicas: [
      L(
        "Respeite os horários de missa se for fotografar o interior.",
        "Respect Mass times if you photograph the interior.",
        "Respeta los horarios de misa si fotografías el interior."
      ),
    ],
  },
  {
    slug: "igreja-rosario-homens-pretos",
    cidade: "sao-cristovao",
    nome: L(
      "Igreja do Rosário dos Homens Pretos",
      "Church of Our Lady of the Rosary of Black Men",
      "Iglesia del Rosario de los Hombres Negros"
    ),
    categoria: "cultura",
    resumo: L(
      "Erguida em 1746 por irmandades negras. Tombada pelo IPHAN em 1943. Simples por fora, densa de história.",
      "Built in 1746 by Black brotherhoods. Listed by IPHAN in 1943. Simple outside, dense with history.",
      "Erigida en 1746 por hermandades negras. Catalogada por el IPHAN en 1943. Sencilla por fuera, densa de historia."
    ),
    descricao: L(
      "A Igreja de Nossa Senhora do Rosário dos Homens Pretos foi construída para escravizados e negros libertos. A fachada é sóbria; o valor está na trajetória da irmandade e no tombamento federal de 1943. Fica a curta caminhada da Praça São Francisco.",
      "The Church of Our Lady of the Rosary of Black Men was built for enslaved and freed Black people. The façade is sober; its weight is in the brotherhood's story and the 1943 federal listing. A short walk from São Francisco Square.",
      "La Iglesia de Nuestra Señora del Rosario de los Hombres Negros se construyó para esclavizados y negros libertos. La fachada es sobria; su valor está en la hermandad y en la protección federal de 1943. A poca distancia de la Plaza São Francisco."
    ),
    notaGoogle: 4.6,
    avaliacoesGoogle: 620,
    lat: -11.0162,
    lng: -37.2055,
    endereco: L(
      "Centro Histórico, São Cristóvão - SE",
      "Historic Center, São Cristóvão - SE",
      "Centro Histórico, São Cristóvão - SE"
    ),
    horario: L(
      "Visitação em horário comercial / missas",
      "Visits during business hours / Masses",
      "Visita en horario comercial / misas"
    ),
    preco: L("Gratuito", "Free", "Gratis"),
    tempoVisita: L("20 a 40 min", "20–40 min", "20 a 40 min"),
    fotos: ["/fotos/igreja-rosario-homens-pretos.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "Inclua no roteiro a pé do Centro Histórico.",
          "Include it in your Historic Center walking route.",
          "Inclúyela en el recorrido a pie del Centro Histórico."
        ),
      },
    ],
    uberDaOrla: L("R$ 70 a R$ 100", "R$ 70–100", "R$ 70 a R$ 100"),
    uberDoCentro: L("R$ 55 a R$ 80", "R$ 55–80", "R$ 55 a R$ 80"),
    estacionamento: "medio",
    estacionamentoDica: L(
      "Estacione na Praça São Francisco e caminhe.",
      "Park at São Francisco Square and walk.",
      "Estaciona en la Plaza São Francisco y camina."
    ),
    melhorTransporte: "a-pe",
    melhorTransporteMotivo: L(
      "Faz parte do mesmo passeio a pé pelo Centro Histórico.",
      "Part of the same Historic Center walking tour.",
      "Forma parte del mismo paseo a pie por el Centro Histórico."
    ),
    dicas: [
      L(
        "Leia a placa do IPHAN na fachada — resume bem o tombamento.",
        "Read the IPHAN plaque on the façade — it sums up the listing.",
        "Lee la placa del IPHAN en la fachada: resume bien la protección."
      ),
    ],
  },
  {
    slug: "mirante-do-cristo",
    cidade: "sao-cristovao",
    nome: L(
      "Mirante do Cristo",
      "Christ the Redeemer Viewpoint",
      "Mirador del Cristo"
    ),
    categoria: "natureza",
    resumo: L(
      "O primeiro monumento ao Cristo Redentor do Brasil, de 1926, na entrada de São Cristóvão, com vista da cidade.",
      "Brazil's first Christ the Redeemer monument, from 1926, at the entrance to São Cristóvão, with a view over the town.",
      "El primer monumento al Cristo Redentor de Brasil, de 1926, a la entrada de São Cristóvão, con vista de la ciudad."
    ),
    descricao: L(
      "Inaugurado em 1926 — anos antes do Cristo do Corcovado — o monumento fica no alto da entrada da cidade. O mirante é aberto ao público e serve de cartão-postal para quem chega de carro. A vista cobre o Centro Histórico e o entorno verde.",
      "Opened in 1926 — years before Rio's Corcovado Christ — the monument stands above the town entrance. The viewpoint is open to the public and is the postcard stop for drivers arriving in town. The view covers the Historic Center and the green hills around it.",
      "Inaugurado en 1926 — años antes del Cristo de Corcovado —, el monumento está en lo alto de la entrada. El mirador es público y es la postal de quien llega en coche. La vista abarca el Centro Histórico y el entorno verde."
    ),
    notaGoogle: 4.6,
    avaliacoesGoogle: 1500,
    lat: -11.013,
    lng: -37.21,
    endereco: L(
      "Entrada de São Cristóvão - SE",
      "Entrance to São Cristóvão - SE",
      "Entrada de São Cristóvão - SE"
    ),
    horario: L("Aberto 24h", "Open 24h", "Abierto 24h"),
    preco: L("Gratuito", "Free", "Gratis"),
    tempoVisita: L("20 a 40 min", "20–40 min", "20 a 40 min"),
    fotos: ["/fotos/mirante-do-cristo.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "Peça para descer na entrada da cidade, perto do Cristo.",
          "Ask to get off at the town entrance, near the Christ statue.",
          "Pide bajar en la entrada de la ciudad, cerca del Cristo."
        ),
      },
    ],
    uberDaOrla: L("R$ 70 a R$ 100", "R$ 70–100", "R$ 70 a R$ 100"),
    uberDoCentro: L("R$ 55 a R$ 80", "R$ 55–80", "R$ 55 a R$ 80"),
    estacionamento: "facil",
    estacionamentoDica: L(
      "Estacionamento no próprio mirante.",
      "Parking at the viewpoint itself.",
      "Estacionamiento en el propio mirador."
    ),
    melhorTransporte: "carro",
    melhorTransporteMotivo: L(
      "É a primeira parada natural no caminho de Aracaju para o Centro Histórico.",
      "The natural first stop on the drive from Aracaju to the Historic Center.",
      "La primera parada natural en el camino desde Aracaju al Centro Histórico."
    ),
    dicas: [
      L(
        "Pare na ida ou na volta: a luz do fim de tarde favorece a foto.",
        "Stop on the way in or out: late-afternoon light is best for photos.",
        "Para a la ida o a la vuelta: la luz del atardecer favorece la foto."
      ),
    ],
  },
  {
    slug: "bica-dos-pintos",
    cidade: "sao-cristovao",
    nome: L(
      "Bica dos Pintos",
      "Bica dos Pintos Natural Park",
      "Bica dos Pintos"
    ),
    categoria: "natureza",
    resumo: L(
      "Parque Natural Aloísio Fontes Santos: nascente, sombra e banho de água doce fora do Centro Histórico.",
      "Aloísio Fontes Santos Natural Park: spring water, shade and a freshwater swim away from the Historic Center.",
      "Parque Natural Aloísio Fontes Santos: manantial, sombra y baño de agua dulce fuera del Centro Histórico."
    ),
    descricao: L(
      "A Bica dos Pintos é a área de lazer ao ar livre mais procurada de São Cristóvão: trilha curta, nascente e piscinas naturais de água doce. Bom contraste depois da manhã de igrejas e museus. Leve protetor, água e chinelo antiderrapante.",
      "Bica dos Pintos is São Cristóvão's favorite outdoor break: a short trail, a spring and freshwater pools. A good contrast after a morning of churches and museums. Bring sunscreen, water and non-slip sandals.",
      "Bica dos Pintos es el área al aire libre más buscada de São Cristóvão: sendero corto, manantial y piscinas naturales. Buen contraste tras una mañana de iglesias y museos. Lleva protector, agua y sandalias antideslizantes."
    ),
    notaGoogle: 4.5,
    avaliacoesGoogle: 2400,
    lat: -11.02,
    lng: -37.195,
    endereco: L(
      "Parque Natural Aloísio Fontes Santos, São Cristóvão - SE",
      "Aloísio Fontes Santos Natural Park, São Cristóvão - SE",
      "Parque Natural Aloísio Fontes Santos, São Cristóvão - SE"
    ),
    horario: L(
      "Diurno (confirme na entrada)",
      "Daytime (confirm at the entrance)",
      "Diurno (confirma en la entrada)"
    ),
    preco: L(
      "Entrada simbólica / gratuita em alguns dias",
      "Small fee / free on some days",
      "Entrada simbólica / gratis algunos días"
    ),
    tempoVisita: L("2 a 3 horas", "2 to 3 hours", "2 a 3 horas"),
    fotos: ["/fotos/bica-dos-pintos.jpg"],
    linhasOnibus: [
      {
        numero: "Local",
        nome: L(
          "Dentro de São Cristóvão",
          "Within São Cristóvão",
          "Dentro de São Cristóvão"
        ),
        dica: L(
          "Melhor de carro ou Uber a partir do Centro Histórico.",
          "Best by car or Uber from the Historic Center.",
          "Mejor en coche o Uber desde el Centro Histórico."
        ),
      },
    ],
    uberDaOrla: L(
      "R$ 80 a R$ 110",
      "R$ 80–110",
      "R$ 80 a R$ 110"
    ),
    uberDoCentro: L(
      "R$ 65 a R$ 90",
      "R$ 65–90",
      "R$ 65 a R$ 90"
    ),
    estacionamento: "facil",
    estacionamentoDica: L(
      "Estacionamento no parque.",
      "Parking at the park.",
      "Estacionamiento en el parque."
    ),
    melhorTransporte: "carro",
    melhorTransporteMotivo: L(
      "Fica fora do Centro Histórico; com carro você encaixa igrejas de manhã e banho à tarde.",
      "It sits outside the Historic Center; with a car you can do churches in the morning and a swim in the afternoon.",
      "Queda fuera del Centro Histórico; con coche haces iglesias por la mañana y baño por la tarde."
    ),
    dicas: [
      L(
        "Fins de semana lotam — vá cedo.",
        "Weekends get crowded — go early.",
        "Los fines de semana se llenan: ve temprano."
      ),
    ],
  },
  {
    slug: "casa-culturas-populares",
    cidade: "sao-cristovao",
    nome: L(
      "Casa das Culturas Populares",
      "House of Popular Cultures",
      "Casa de las Culturas Populares"
    ),
    categoria: "cultura",
    resumo: L(
      "Memória dos folguedos e mestres de São Cristóvão, com a Sala dos Saberes e Fazeres para comprar artesanato local.",
      "Memory of São Cristóvão's folk festivals and masters, plus the Saberes e Fazeres room for local crafts.",
      "Memoria de los folguedos y maestros de São Cristóvão, con la Sala dos Saberes e Fazeres para comprar artesanía local."
    ),
    descricao: L(
      "A Casa das Culturas Populares preserva folguedos, mestres e tradições sancristovenses. Ao lado, a Sala dos Saberes e Fazeres concentra o artesanato do município. Abre de terça a domingo, das 9h às 17h — bom lugar para levar lembrança com preço justo.",
      "The House of Popular Cultures preserves São Cristóvão's folk festivals, masters and traditions. Next to it, the Saberes e Fazeres room sells local crafts. Open Tuesday to Sunday, 9am–5pm — a good place for fair-priced souvenirs.",
      "La Casa de las Culturas Populares preserva folguedos, maestros y tradiciones. Junto a ella, la Sala dos Saberes e Fazeres concentra la artesanía del municipio. Abre de martes a domingo, de 9 a 17 — buen lugar para un recuerdo a precio justo."
    ),
    notaGoogle: 4.5,
    avaliacoesGoogle: 410,
    lat: -11.015,
    lng: -37.206,
    endereco: L(
      "Centro Histórico, São Cristóvão - SE",
      "Historic Center, São Cristóvão - SE",
      "Centro Histórico, São Cristóvão - SE"
    ),
    horario: L(
      "Ter a dom 9h–17h",
      "Tue–Sun 9am–5pm",
      "Mar–dom 9–17h"
    ),
    preco: L("Gratuito", "Free", "Gratis"),
    tempoVisita: L("45 min a 1h", "45 min to 1 hour", "45 min a 1h"),
    fotos: ["/fotos/casa-culturas-populares.jpg"],
    linhasOnibus: [
      {
        numero: "Intermunicipal",
        nome: L(
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão",
          "Aracaju → São Cristóvão"
        ),
        dica: L(
          "No Centro Histórico, perto da Praça São Francisco.",
          "In the Historic Center, near São Francisco Square.",
          "En el Centro Histórico, cerca de la Plaza São Francisco."
        ),
      },
    ],
    uberDaOrla: L("R$ 70 a R$ 100", "R$ 70–100", "R$ 70 a R$ 100"),
    uberDoCentro: L("R$ 55 a R$ 80", "R$ 55–80", "R$ 55 a R$ 80"),
    estacionamento: "facil",
    estacionamentoDica: L(
      "Estacione na praça principal.",
      "Park on the main square.",
      "Estaciona en la plaza principal."
    ),
    melhorTransporte: "a-pe",
    melhorTransporteMotivo: L(
      "Fecha o roteiro cultural da praça antes de voltar a Aracaju.",
      "Closes out the square's cultural loop before you head back to Aracaju.",
      "Cierra el circuito cultural de la plaza antes de volver a Aracaju."
    ),
    dicas: [
      L(
        "Leve dinheiro ou Pix para o artesanato.",
        "Bring cash or Pix for crafts.",
        "Lleva efectivo o Pix para la artesanía."
      ),
    ],
  },
];
