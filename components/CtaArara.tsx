"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "text" | "soft";
};

/**
 * CTA com arara discreta animada — chama atenção sem poluir.
 */
export default function CtaArara({
  href,
  children,
  className = "",
  variant = "text",
}: Props) {
  const base =
    variant === "solid"
      ? "inline-flex items-center gap-2 rounded border border-caju bg-caju px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-caju-deep"
      : variant === "outline"
        ? "inline-flex items-center gap-2 rounded border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
        : variant === "soft"
          ? "inline-flex items-center gap-2 rounded border border-arara bg-arara px-4 py-2 text-sm font-semibold text-white transition hover:bg-arara-deep"
          : "inline-flex items-center gap-1.5 text-sm font-semibold text-arara transition hover:text-arara-deep";

  return (
    <Link href={href} className={`group relative ${base} ${className}`}>
      <span className="cta-arara" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M4 14c3 1 5 4 6 7 2-3 5-5 9-5-2-3-5-5-8-6 1-3 1-6 0-8-2 2-4 5-7 6 2 1 3 3 0 6Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="15" cy="9" r="1" fill="#FBBF24" />
        </svg>
      </span>
      <span>{children}</span>
    </Link>
  );
}

/** Versão para âncoras internas (#id) */
export function CtaAraraAnchor({
  href,
  children,
  className = "",
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "text" | "soft";
}) {
  const base =
    variant === "solid"
      ? "inline-flex items-center gap-2 rounded border border-caju bg-caju px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-caju-deep"
      : variant === "outline"
        ? "inline-flex items-center gap-2 rounded border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
        : variant === "soft"
          ? "inline-flex items-center gap-2 rounded border border-arara bg-arara px-4 py-2 text-sm font-semibold text-white transition hover:bg-arara-deep"
          : "inline-flex items-center gap-1.5 text-sm font-semibold text-arara transition hover:text-arara-deep";

  return (
    <a href={href} className={`group relative ${base} ${className}`}>
      <span className="cta-arara" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M4 14c3 1 5 4 6 7 2-3 5-5 9-5-2-3-5-5-8-6 1-3 1-6 0-8-2 2-4 5-7 6 2 1 3 3 0 6Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="15" cy="9" r="1" fill="#FBBF24" />
        </svg>
      </span>
      <span>{children}</span>
    </a>
  );
}
