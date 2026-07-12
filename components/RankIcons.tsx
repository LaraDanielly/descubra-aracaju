import type { SVGProps } from "react";

type Variante = "dourado" | "maduro" | "verde";

const CORES: Record<Variante, { fruto: string; folha: string; pedunculo: string }> = {
  dourado: { fruto: "#C45C26", folha: "#2F6B3A", pedunculo: "#E8A317" },
  maduro: { fruto: "#B45309", folha: "#3F7A45", pedunculo: "#F59E0B" },
  verde: { fruto: "#6B8F71", folha: "#4A7C59", pedunculo: "#A3B18A" },
};

/** Caju sergipano — castanha + pedúnculo (pseudofruto). */
export function CajuIcon({
  variante = "maduro",
  className,
  title = "Caju",
  ...props
}: SVGProps<SVGSVGElement> & { variante?: Variante; title?: string }) {
  const c = CORES[variante];
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      {/* folhas */}
      <path
        d="M20 6c-4 3-6 8-5 12 3-2 7-3 10-2-1-4-3-8-5-10Z"
        fill={c.folha}
      />
      <path
        d="M22 8c3 4 4 9 2 13 3-1 6 0 8 2-2-5-5-10-10-15Z"
        fill={c.folha}
        opacity="0.85"
      />
      {/* pedúnculo (caju) */}
      <ellipse cx="20" cy="28" rx="11" ry="13" fill={c.pedunculo} />
      <ellipse cx="17" cy="24" rx="4" ry="5" fill="#fff" opacity="0.22" />
      {/* castanha */}
      <path
        d="M14 40c0-4 3-7 6-7s6 3 6 7c0 3-2 5-6 5s-6-2-6-5Z"
        fill={c.fruto}
      />
      <path
        d="M17 38c1-1.5 2.5-2 3.5-1.5"
        stroke="#7C2D12"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

type AraraVariante = "vermelha" | "caninde" | "azul";

const ARARA: Record<
  AraraVariante,
  { corpo: string; asa: string; cabeca: string; bico: string }
> = {
  vermelha: {
    corpo: "#C2410C",
    asa: "#1D4ED8",
    cabeca: "#DC2626",
    bico: "#FBBF24",
  },
  caninde: {
    corpo: "#F59E0B",
    asa: "#1D4ED8",
    cabeca: "#FBBF24",
    bico: "#111827",
  },
  azul: {
    corpo: "#2563EB",
    asa: "#1E3A8A",
    cabeca: "#3B82F6",
    bico: "#FBBF24",
  },
};

/** Arara regional — silhueta simplificada. */
export function AraraIcon({
  variante = "caninde",
  className,
  title = "Arara",
  ...props
}: SVGProps<SVGSVGElement> & { variante?: AraraVariante; title?: string }) {
  const c = ARARA[variante];
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      {/* cauda */}
      <path
        d="M28 30c6 4 12 10 14 14-6-1-12-4-16-8l2-6Z"
        fill={c.asa}
      />
      <path
        d="M26 32c5 5 9 11 10 14-4 0-9-3-12-7l2-7Z"
        fill={c.corpo}
      />
      {/* corpo */}
      <ellipse cx="22" cy="26" rx="9" ry="11" fill={c.corpo} />
      {/* asa */}
      <path
        d="M14 22c-6 4-8 12-6 16 4-2 8-6 10-11l-4-5Z"
        fill={c.asa}
      />
      {/* cabeça */}
      <circle cx="24" cy="14" r="7" fill={c.cabeca} />
      <circle cx="26" cy="13" r="1.4" fill="#111827" />
      {/* bico */}
      <path d="M30 14c3 0 5 1 6 3-2 1-4 1-6 0v-3Z" fill={c.bico} />
    </svg>
  );
}

export type NivelRank = "ouro" | "prata" | "bronze";

export function nivelPorPosicao(posicao: number): NivelRank {
  if (posicao <= 3) return "ouro";
  if (posicao <= 7) return "prata";
  return "bronze";
}
