"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "text" | "soft";
};

function Ararinha({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 28"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M6 16c4 1.5 7 5 8 9 3-4 7-6.5 12-6.5-2.5-4-6.5-6.5-10.5-7.5 1.5-4 1-8-.5-10.5-2.5 2.5-5.5 6.5-9 8 2.5 1.5 4 4 0 7.5Z"
        fill="#1d4ed8"
      />
      <path
        d="M14 12c2 0 4.5 1 6 3-2 .5-4.5.2-6-1.5V12Z"
        fill="#F59E0B"
      />
      <path d="M22 14c2.5.2 4.5 1.2 5.5 2.5-1.5.8-3.5 1-5.5.5V14Z" fill="#DC2626" />
      <circle cx="20" cy="11" r="1.3" fill="#111827" />
      <circle cx="20.4" cy="10.7" r="0.4" fill="#fff" />
    </svg>
  );
}

function ArarinhasDecor() {
  return (
    <>
      <span className="ararinha ararinha-a" aria-hidden>
        <Ararinha className="h-5 w-6" />
      </span>
      <span className="ararinha ararinha-b" aria-hidden>
        <Ararinha className="h-4 w-5" />
      </span>
      <span className="ararinha ararinha-c" aria-hidden>
        <Ararinha className="h-3.5 w-4" />
      </span>
    </>
  );
}

function classes(variant: Props["variant"]) {
  return variant === "solid"
    ? "inline-flex items-center gap-2 rounded border border-caju bg-caju px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-caju-deep"
    : variant === "outline"
      ? "inline-flex items-center gap-2 rounded border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
      : variant === "soft"
        ? "inline-flex items-center gap-2 rounded border-2 border-arara bg-arara px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_4px_rgba(29,78,216,0.15)] transition hover:bg-arara-deep"
        : "inline-flex items-center gap-1.5 text-sm font-semibold text-arara transition hover:text-arara-deep";
}

/**
 * CTA com ararinhas animadas ao redor — facilita ver o botão (acessibilidade).
 */
export default function CtaArara({
  href,
  children,
  className = "",
  variant = "text",
}: Props) {
  return (
    <Link
      href={href}
      className={`cta-arara-wrap group relative ${classes(variant)} ${className}`}
    >
      <ArarinhasDecor />
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
}

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
  return (
    <a
      href={href}
      className={`cta-arara-wrap group relative ${classes(variant)} ${className}`}
    >
      <ArarinhasDecor />
      <span className="relative z-[1]">{children}</span>
    </a>
  );
}

/** Destaca links de texto tipo "Ver detalhes" */
export function CtaAraraInline({ children }: { children: ReactNode }) {
  return (
    <span className="cta-arara-wrap relative inline-flex items-center gap-1.5">
      <ArarinhasDecor />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
