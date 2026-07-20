# API interna

Rotas em `app/api/` — usadas pelo frontend do próprio site.

Base URL local: `http://localhost:3000`

---

## GET `/api/chat`

Verifica se o chat está configurado.

**Resposta**

```json
{ "configured": true }
```

`configured: false` quando `GEMINI_API_KEY` não está definida.

---

## POST `/api/chat`

Assistente **Caju** — streaming de texto.

**Body (JSON)**

```json
{
  "locale": "pt",
  "messages": [
    { "role": "user", "content": "Como chego na Orla?" },
    { "role": "assistant", "content": "..." },
    { "role": "user", "content": "E de ônibus?" }
  ]
}
```

| Campo | Regras |
|-------|--------|
| `locale` | `pt` \| `en` \| `es` (default `pt`) |
| `messages` | Máx. 20 mensagens |
| `content` | Máx. 2000 chars por mensagem; última user máx. 500 |

**Resposta sucesso:** `Content-Type: text/plain` — stream UTF-8.

**Erros JSON**

| Status | `error` | Significado |
|--------|---------|-------------|
| 400 | `invalid_json`, `empty`, `message_too_long`, … | Body inválido |
| 429 | `rate_limited` | > 20 req/min por IP |
| 502 | `api_error`, `quota_exceeded` | Falha Gemini |
| 503 | `missing_key` | Sem `GEMINI_API_KEY` |

**Rate limit:** 20 requisições/minuto por IP.

**Contexto:** apenas lugares **relevantes** à pergunta entram no system prompt (não todos os 26 pontos).

---

## GET `/api/busca`

Busca lugares ou metadados para o CommandPalette e chat.

### Metadados (sem query)

```
GET /api/busca?locale=pt
```

```json
{
  "total": 26,
  "nomes": {
    "orla-de-atalaia": "Orla de Atalaia",
    "museu-historico-de-sergipe": "Museu Histórico de Sergipe"
  }
}
```

### Busca por termo

```
GET /api/busca?q=orla&locale=pt
```

```json
{
  "total": 26,
  "resultados": [
    {
      "slug": "orla-de-atalaia",
      "nome": "Orla de Atalaia",
      "resumo": "O cartão-postal de Aracaju..."
    }
  ]
}
```

Máximo **8** resultados. Busca normalizada (sem acentos).

---

## GET `/api/avaliacoes`

### Status de persistência

```
GET /api/avaliacoes
```

```json
{ "persistencia": "supabase" }
```

ou `{ "persistencia": "local" }` se Supabase não configurado.

### Listar por lugar

```
GET /api/avaliacoes?slug=orla-de-atalaia
```

**Com Supabase**

```json
{
  "persistencia": "supabase",
  "avaliacoes": [
    {
      "id": "uuid",
      "ponto_slug": "orla-de-atalaia",
      "nome": "Maria",
      "nota": 5,
      "comentario": "...",
      "created_at": "2025-06-01T12:00:00Z"
    }
  ]
}
```

**Sem Supabase:** HTTP **503** + `{ "persistencia": "local", "avaliacoes": [] }` — o client usa localStorage.

**Rate limit:** 60 GET/min por IP.

---

## POST `/api/avaliacoes`

Cria avaliação (requer Supabase configurado).

**Body**

```json
{
  "ponto_slug": "orla-de-atalaia",
  "nome": "Visitante",
  "nota": 5,
  "comentario": "Lugar incrível!"
}
```

| Campo | Validação |
|-------|-----------|
| `ponto_slug` | 1–80 chars |
| `nome` | 1–60 chars |
| `comentario` | 1–1000 chars |
| `nota` | Inteiro 1–5 |

**Sucesso (200)**

```json
{
  "persistencia": "supabase",
  "avaliacao": { "...": "..." }
}
```

**503** — Supabase ausente (client grava no localStorage).

**429** — Mais de **5** POST/hora por IP.

---

## Middleware

Rotas `/api/*` **não** passam pelo middleware de locale do next-intl. O idioma vem do query/body quando necessário.
