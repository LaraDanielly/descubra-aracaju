import { CajuIcon, AraraIcon, nivelPorPosicao } from "./RankIcons";

export { CajuIcon, AraraIcon, nivelPorPosicao };

export function RankBadge({
  posicao,
  className = "",
}: {
  posicao: number;
  className?: string;
}) {
  const nivel = nivelPorPosicao(posicao);
  const titulo =
    nivel === "ouro"
      ? `Top ${posicao} — Caju maduro`
      : nivel === "prata"
        ? `${posicao}º — Arara-canindé`
        : `${posicao}º — Caju verde`;

  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-linha bg-papel shadow-[2px_2px_0_rgba(28,25,23,0.06)] ${className}`}
      title={titulo}
      aria-label={titulo}
    >
      {nivel === "ouro" && (
        <CajuIcon variante="dourado" className="h-9 w-8" title={titulo} />
      )}
      {nivel === "prata" && (
        <AraraIcon variante="caninde" className="h-9 w-9" title={titulo} />
      )}
      {nivel === "bronze" && (
        <CajuIcon variante="verde" className="h-8 w-7" title={titulo} />
      )}
      <span className="sr-only">{posicao}º lugar</span>
    </span>
  );
}

export function RankLegenda({
  titulo,
  ouro,
  prata,
  bronze,
}: {
  titulo: string;
  ouro: string;
  prata: string;
  bronze: string;
}) {
  return (
    <aside
      className="mt-4 rounded border border-linha bg-papel px-4 py-3"
      aria-label={titulo}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wide text-tinta-suave">
        {titulo}
      </p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        <li className="flex items-start gap-2">
          <CajuIcon variante="dourado" className="mt-0.5 h-7 w-6 shrink-0" />
          <span className="text-xs leading-snug text-tinta">{ouro}</span>
        </li>
        <li className="flex items-start gap-2">
          <AraraIcon variante="caninde" className="mt-0.5 h-7 w-7 shrink-0" />
          <span className="text-xs leading-snug text-tinta">{prata}</span>
        </li>
        <li className="flex items-start gap-2">
          <CajuIcon variante="verde" className="mt-0.5 h-7 w-6 shrink-0" />
          <span className="text-xs leading-snug text-tinta">{bronze}</span>
        </li>
      </ul>
    </aside>
  );
}
