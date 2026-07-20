# Descubra Aracaju

Guia turístico multilíngue (PT/EN/ES) para **Aracaju** e **São Cristóvão**, com ranking por notas reais, mapa interativo, orientações de transporte, chat assistente (Caju) e avaliações de visitantes.

**Repositório:** [github.com/LaraDanielly/descubra-aracaju](https://github.com/LaraDanielly/descubra-aracaju)

---

## O que o site oferece

| Recurso | Descrição |
|---------|-----------|
| **Ranking** | Lugares, praias, restaurantes e hotéis ordenados por notas do Google/Booking |
| **Fichas detalhadas** | Endereço, horário, preço, fotos, dicas e como chegar |
| **Transporte** | Linhas de ônibus, Uber estimado, estacionamento e cartão Mais Aracaju |
| **Mapa** | Leaflet + OpenStreetMap com todos os pontos |
| **Chat Caju** | Assistente com Gemini (lugares, transporte, clima) |
| **Avaliações** | Reviews curadas + formulário (Supabase ou localStorage) |
| **PWA** | Instalável no celular |

---

## Início rápido

```bash
git clone https://github.com/LaraDanielly/descubra-aracaju.git
cd descubra-aracaju
npm install
cp .env.example .env.local   # opcional — veja docs/configuracao.md
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Valida fotos + build de produção |
| `npm run start` | Servidor após build |
| `npm run test` | Testes unitários (Vitest) |
| `npm run typecheck` | Verificação TypeScript |
| `npm run lint` | ESLint |

---

## Documentação

| Guia | Conteúdo |
|------|----------|
| [**Arquitetura**](docs/arquitetura.md) | Estrutura do código, fluxos e decisões técnicas |
| [**Configuração**](docs/configuracao.md) | Variáveis de ambiente, Supabase, Gemini |
| [**Conteúdo**](docs/conteudo.md) | Como adicionar lugares, fotos e traduções |
| [**API**](docs/api.md) | Rotas `/api/chat`, `/api/busca`, `/api/avaliacoes` |
| [**Deploy**](docs/deploy.md) | Publicação na Vercel e checklist |

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** — identidade visual caju/arara
- **next-intl** — rotas em PT (sem prefixo), EN e ES (`/en`, `/es`)
- **Leaflet** — mapas
- **Google Gemini** — chat (opcional)
- **Open-Meteo** — clima no chat (sem chave)
- **Supabase** — avaliações persistentes (opcional)

---

## Estrutura resumida

```
app/
  [locale]/          # páginas (home, ranking, mapa, ponto, …)
  api/               # chat, busca, avaliações
components/          # UI (Header, ChatWidget, PontoCard, …)
data/                # pontos, restaurantes, hotéis (TypeScript estático)
lib/                 # formatters, nav, rate-limit, busca, chat
messages/            # traduções da interface (pt, en, es)
public/fotos/        # uma foto por slug: {slug}.jpg
supabase/            # schema SQL das avaliações
```

---

## Licença

Projeto privado — uso conforme definido pela autora do repositório.
