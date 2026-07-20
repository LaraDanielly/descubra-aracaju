# Conteúdo

Como manter lugares, fotos, traduções e links do guia.

---

## Adicionar um novo lugar (ponto turístico)

### 1. Escolha o arquivo de dados

| Cidade | Arquivo |
|--------|---------|
| Aracaju | `data/pontos.ts` → array `PONTOS_ARACAJU` |
| São Cristóvão | `data/pontos-sc.ts` |

Siga o tipo `Ponto` em `data/tipos.ts`.

### 2. Defina um `slug` único

- Minúsculas, hífens: `orla-de-atalaia`, `museu-historico-de-sergipe`
- Será a URL: `/ponto/{slug}`

### 3. Traduções

**São Cristóvão:** use `L("texto PT", "English", "Español")` nos campos de texto.

**Aracaju:** escreva em português no objeto e, se precisar EN/ES, adicione entrada em `data/i18n-aracaju.ts`:

```ts
"meu-slug": {
  nome: L("Nome PT", "Name EN", "Nombre ES"),
  resumo: L("...", "...", "..."),
  // ...
},
```

### 4. Foto

1. Salve `public/fotos/{slug}.jpg` (recomendado ~1200px largura, JPG otimizado)
2. Adicione o slug em `data/fotos-slug.ts` → `FOTOS_SLUG`
3. No objeto do ponto: `fotos: ["/fotos/{slug}.jpg"]`

Valide:

```bash
node scripts/validar-fotos.mjs
```

### 5. Links externos (opcional)

Em `data/links-externos.ts`, só entram:

- Site oficial
- Instagram oficial
- Booking (hotéis)

**Não** usar TripAdvisor ou guias genéricos (política do projeto).

### 6. Avaliações curadas (opcional)

Em `data/avaliacoes-viajantes.ts`, chave = slug do ponto.

---

## Editar restaurantes ou hotéis

| Tipo | Arquivo |
|------|---------|
| Restaurantes | `data/restaurantes.ts` |
| Hotéis | `data/hoteis.ts` |

Campos multilíngues usam `L()`. Fotos: `public/fotos/{slug}.jpg` + `fotoDeSlug()` / `FOTOS_SLUG`.

---

## Traduzir textos da interface

Arquivos paralelos — **sempre altere os três**:

- `messages/pt.json`
- `messages/en.json`
- `messages/es.json`

Namespaces comuns: `nav`, `home`, `ranking`, `chat`, `avaliacoes`, `comum`.

Após editar, confira páginas em `/`, `/en` e `/es`.

---

## Hero e mapa ilustrado

| Asset | Caminho |
|-------|---------|
| Foto hero da home | `public/hero-aracaju.jpg` (referenciada em `app/[locale]/page.tsx`) |
| Mapa Sergipe | `public/mapa-sergipe.jpg` (`components/MapaBrasilSergipe.tsx`) |

---

## Scripts de manutenção (fotos)

Pasta `scripts/` — utilitários pontuais, **não rodam em produção**:

| Script | Uso |
|--------|-----|
| `validar-fotos.mjs` | CI/build — verifica JPG por slug |
| `forcar-fotos-slug.mjs` | Força paths `/fotos/{slug}.jpg` nos dados |
| `baixar-fotos*.mjs` | Legado — download Wikimedia |

Preferir fotos próprias enviadas pelo time em `public/fotos/`.

---

## Checklist ao publicar conteúdo novo

- [ ] Slug único e URL `/ponto/{slug}` abre
- [ ] `public/fotos/{slug}.jpg` existe
- [ ] Slug em `FOTOS_SLUG`
- [ ] EN/ES revisados (ou overlay em `i18n-aracaju.ts`)
- [ ] `node scripts/validar-fotos.mjs` passa
- [ ] Aparece no mapa e na busca (Ctrl+K)
