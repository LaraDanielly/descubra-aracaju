/** Mapa esquemático do Brasil com Sergipe em destaque + Aracaju e São Cristóvão. */
export default function MapaBrasilSergipe({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 380"
      className={className}
      role="img"
      aria-label="Mapa do Brasil com destaque para Sergipe, Aracaju e São Cristóvão"
    >
      <title>Brasil · Sergipe · Aracaju e São Cristóvão</title>
      {/* Contorno simplificado do Brasil */}
      <path
        d="M180 28c28 2 52 10 72 28 18 16 34 38 42 62 8 22 10 48 4 72-4 18-14 34-18 52-6 24-2 48 8 68 6 12 8 28-2 38-12 12-32 14-48 18-22 6-46 14-70 12-28-2-52-14-72-32-18-16-34-38-40-62-8-28-4-58 8-82 10-20 28-36 40-54 14-20 28-42 48-52 14-8 28-10 28-8Z"
        fill="#94a3b8"
        opacity="0.45"
      />
      <path
        d="M180 28c28 2 52 10 72 28 18 16 34 38 42 62 8 22 10 48 4 72-4 18-14 34-18 52-6 24-2 48 8 68 6 12 8 28-2 38-12 12-32 14-48 18-22 6-46 14-70 12-28-2-52-14-72-32-18-16-34-38-40-62-8-28-4-58 8-82 10-20 28-36 40-54 14-20 28-42 48-52 14-8 28-10 28-8Z"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Sergipe — destaque laranja */}
      <ellipse cx="268" cy="198" rx="22" ry="16" fill="#c2410c" opacity="0.95" />
      <ellipse
        cx="268"
        cy="198"
        rx="28"
        ry="22"
        fill="none"
        stroke="#fdba74"
        strokeWidth="2"
        opacity="0.9"
        className="mapa-pulse"
      />

      {/* Pin Aracaju */}
      <circle cx="274" cy="194" r="4.5" fill="#fff" />
      <circle cx="274" cy="194" r="2.5" fill="#1d4ed8" />
      <text
        x="286"
        y="190"
        fill="#fff"
        fontSize="11"
        fontFamily="var(--font-archivo), system-ui, sans-serif"
        fontWeight="600"
      >
        Aracaju
      </text>

      {/* Pin São Cristóvão */}
      <circle cx="258" cy="208" r="3.5" fill="#fff" />
      <circle cx="258" cy="208" r="2" fill="#166534" />
      <text
        x="246"
        y="228"
        fill="#e2e8f0"
        fontSize="10"
        fontFamily="var(--font-archivo), system-ui, sans-serif"
        fontWeight="500"
        textAnchor="middle"
      >
        São Cristóvão
      </text>

      <text
        x="268"
        y="168"
        fill="#fdba74"
        fontSize="12"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight="600"
        textAnchor="middle"
      >
        Sergipe
      </text>
    </svg>
  );
}
