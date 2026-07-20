# Deploy

Como publicar o **Descubra Aracaju** em produção (recomendado: Vercel).

---

## Pré-requisitos

- Repositório no GitHub: [LaraDanielly/descubra-aracaju](https://github.com/LaraDanielly/descubra-aracaju)
- Build local OK:

```bash
npm run test
npm run build
```

---

## Vercel (recomendado)

1. Acesse [vercel.com](https://vercel.com) e importe o repositório GitHub
2. **Framework preset:** Next.js (detectado automaticamente)
3. **Build command:** `npm run build` (default)
4. **Install command:** `npm install` (default)

### Variáveis de ambiente (Vercel → Settings → Environment Variables)

| Nome | Ambiente | Obrigatória |
|------|----------|-------------|
| `GEMINI_API_KEY` | Production, Preview | Não (chat desabilitado sem ela) |
| `NEXT_PUBLIC_SUPABASE_URL` | Production, Preview | Não |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production, Preview | Não |

Marque Preview se quiser chat/avaliações também em PR previews.

5. Deploy — a Vercel gera URL `*.vercel.app`

### Domínio customizado

Settings → Domains → adicione seu domínio e siga DNS (CNAME).

---

## Checklist pós-deploy

- [ ] Home carrega em `/`, `/en`, `/es`
- [ ] Ficha de ponto abre (ex.: `/ponto/orla-de-atalaia`)
- [ ] Mapa renderiza tiles OSM
- [ ] Ctrl+K busca lugares
- [ ] Chat responde (se `GEMINI_API_KEY` setada)
- [ ] Formulário de avaliação persiste (se Supabase setado)
- [ ] PWA instalável (manifest + ícones em `public/`)

---

## Build e validação automática

O script **`prebuild`** executa `node scripts/validar-fotos.mjs`.

Se faltar foto para algum slug, o deploy **falha** — corrija em `public/fotos/` antes de merge.

---

## Rate limits em produção

Limites atuais (memória por instância serverless):

| Rota | Limite |
|------|--------|
| POST `/api/chat` | 20/min por IP |
| POST `/api/avaliacoes` | 5/h por IP |
| GET `/api/avaliacoes` | 60/min por IP |

Em escala maior, considere Redis/Upstash para rate limit global.

---

## Segurança em produção

- **Nunca** commite `.env.local`
- Rotacione `GEMINI_API_KEY` se vazar
- Supabase: monitore inserts na tabela `avaliacoes`; considere moderação
- `GEMINI_API_KEY` **não** use prefixo `NEXT_PUBLIC_` — só server-side

---

## Rollback

Na Vercel: Deployments → deployment anterior → **Promote to Production**.

No Git: reverta o commit e push em `master`.

---

## Monitoramento sugerido

- Vercel Analytics / Speed Insights (opcional)
- Logs de função para erros 502 no chat (quota Gemini)
- Supabase Dashboard → uso e rows em `avaliacoes`
