# Descubra Aracaju 🦜🥭

Guia turístico moderno de Aracaju (SE), em português, feito com dados reais:

- **Ranking** dos pontos turísticos mais bem avaliados (notas reais do Google)
- **Avaliações** de viajantes ordenadas da melhor para a pior + formulário para o visitante avaliar (aparece no site e há botão para avaliar também no Google)
- **Mapa interativo** gratuito (Leaflet + OpenStreetMap)
- **Como chegar** em cada lugar: linhas de ônibus reais, estimativa de Uber e recomendação automática do melhor transporte, com link para rota e trânsito ao vivo no Google Maps
- **Guia do cartão Mais Aracaju**: o ônibus não aceita dinheiro — explicamos onde comprar o cartão pré-pago (terminais de integração, CEAC da Rua do Turista, agentes) e como recarregar
- **PWA**: instalável no celular como aplicativo

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Avaliações persistentes (opcional)

Sem configuração nenhuma, as avaliações dos usuários ficam salvas no navegador (localStorage). Para persistir num banco de verdade:

1. Crie um projeto gratuito em [supabase.com](https://supabase.com)
2. Execute o script [`supabase/schema.sql`](supabase/schema.sql) no SQL Editor
3. Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS 4
- Leaflet / react-leaflet (mapa)
- Supabase (avaliações, com fallback em localStorage)

## Dados

Notas, número de avaliações, linhas de ônibus, preços de Uber e informações do cartão Mais Aracaju foram levantados em julho de 2026 a partir de fontes públicas (Google Maps, SMTT/AracajuCard, Prefeitura de Aracaju, Moovit). Fotos: Wikimedia Commons.
