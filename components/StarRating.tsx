"use client";

import { useTranslations } from "next-intl";

function Estrela({ fill }: { fill: number }) {
  const id = `estrela-${Math.round(fill * 100)}`;
  return (
    <svg viewBox="0 0 20 20" className="h-[1em] w-[1em]" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
          <stop offset={`${fill * 100}%`} stopColor="#d6d3d1" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
      />
    </svg>
  );
}

export default function StarRating({
  nota,
  className = "text-base",
}: {
  nota: number;
  className?: string;
}) {
  const t = useTranslations("comum");

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={t("notaEstrelas", { nota: nota.toFixed(1) })}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Estrela key={i} fill={Math.max(0, Math.min(1, nota - i))} />
      ))}
    </span>
  );
}
