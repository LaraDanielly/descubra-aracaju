# Configuração

Como preparar o ambiente local e conectar serviços opcionais.

---

## Requisitos

- **Node.js** 20+ (recomendado LTS)
- **npm** 10+
- Conta **GitHub** (clone)
- Opcional: [Supabase](https://supabase.com) (avaliações na nuvem)
- Opcional: [Google AI Studio](https://aistudio.google.com) (chave Gemini para o chat)

---

## Passo a passo local

```bash
git clone https://github.com/LaraDanielly/descubra-aracaju.git
cd descubra-aracaju
npm install
cp .env.example .env.local
npm run dev
```

Sem `.env.local` o site funciona normalmente:

- Chat Caju mostra aviso de “não configurado”
- Avaliações ficam no **localStorage** do navegador

---

## Variáveis de ambiente

Arquivo: **`.env.local`** (nunca commitar — já está no `.gitignore`).

Modelo: [`.env.example`](../.env.example)

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | Não | Chave da API Google Gemini para o assistente Caju |
| `NEXT_PUBLIC_SUPABASE_URL` | Não* | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Não* | Chave anon/public do Supabase |

\* As duas variáveis Supabase devem estar **ambas** preenchidas para persistência na nuvem.

### Gemini (chat)

1. Acesse [Google AI Studio](https://aistudio.google.com/apikey)
2. Crie uma API key
3. Adicione em `.env.local`:

```env
GEMINI_API_KEY=sua_chave_aqui
```

4. Reinicie `npm run dev`
5. Abra o chat — o endpoint `GET /api/chat` retorna `{ "configured": true }`

**Modelo usado:** `gemini-2.5-flash` (streaming).

### Supabase (avaliações)

1. Crie projeto gratuito em [supabase.com](https://supabase.com)
2. No **SQL Editor**, execute o script [`supabase/schema.sql`](../supabase/schema.sql)
3. Em **Project Settings → API**, copie URL e `anon` key
4. Configure:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

5. Reinicie o dev server

As avaliações passam por **`POST /api/avaliacoes`** (validação + rate limit). O browser não grava direto no Supabase.

**Fallback:** se Supabase não estiver configurado ou a API retornar 503, o formulário salva no `localStorage` (por slug do lugar).

---

## Verificações úteis

```bash
npm run typecheck   # TypeScript
npm run test        # Vitest
npm run lint        # ESLint
npm run build       # Valida fotos + build produção
```

---

## Problemas comuns

### Chat não responde

- Confirme `GEMINI_API_KEY` no `.env.local`
- Veja o console do terminal (erros 502/429 da API Gemini)
- Rate limit local: 20 mensagens/minuto por IP

### Avaliações não aparecem para outros usuários

- Sem Supabase, cada visitante vê só as próprias (localStorage)
- Com Supabase, confira se o schema SQL foi executado e RLS está ativo

### Build falha em “Validação de fotos”

- Cada slug em `data/pontos.ts` / `data/pontos-sc.ts` precisa de `public/fotos/{slug}.jpg`
- Rode manualmente: `node scripts/validar-fotos.mjs`

### Fotos quebradas no site

- Verifique se o slug está em `data/fotos-slug.ts` (`FOTOS_SLUG`)
- Nome do arquivo deve ser exatamente `{slug}.jpg`

---

## IDE

O projeto inclui `AGENTS.md` / `CLAUDE.md` com regras para assistentes de código (Next.js 16 com APIs diferentes do Next 14).
