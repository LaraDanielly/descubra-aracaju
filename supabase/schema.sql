-- Descubra Aracaju: tabela de avaliações dos usuários
-- Execute no SQL Editor do seu projeto Supabase.

create table if not exists public.avaliacoes (
  id uuid primary key default gen_random_uuid(),
  ponto_slug text not null,
  nome text not null check (char_length(nome) between 1 and 60),
  nota int not null check (nota between 1 and 5),
  comentario text not null check (char_length(comentario) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index if not exists avaliacoes_ponto_slug_idx
  on public.avaliacoes (ponto_slug, nota desc, created_at desc);

alter table public.avaliacoes enable row level security;

create policy "leitura publica de avaliacoes"
  on public.avaliacoes for select
  using (true);

create policy "qualquer visitante pode avaliar"
  on public.avaliacoes for insert
  with check (true);

-- Produção: prefira enviar avaliações via POST /api/avaliacoes (rate limit + validação).
-- Para restringir inserts diretos do browser, remova a policy acima e use service role só no servidor.
