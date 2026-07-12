"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "text" | "soft";
};

/** Uma ararinha pequena e uniforme ao lado do texto. */
function ArarinhaMini() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      className="cta-arara-mini shrink-0"
      aria-hidden
    >
      <path
        d="M4 14c3 1 5 4 6 7 2-3 5-5 9-5-2-3-5-5-8-6 1-3 1-6 0-8-2 2-4 5-7 6 2 1 3 3 0 6Z"
        fill="currentColor"
        opacity="0.95"
      />
      <circle cx="15.5" cy="9.5" r="1" fill="#FBBF24" />
    </svg>
  );
}

function classes(variant: Props["variant"]) {
  return variant === "solid"
    ? "inline-flex items-center gap-2 rounded border border-caju bg-caju px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-caju-deep"
    : variant === "outline"
      ? "inline-flex items-center gap-2 rounded border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
      : variant === "soft"
        ? "inline-flex items-center gap-2 rounded border-2 border-arara bg-arara px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-arara-deep"
        : "inline-flex items-center gap-1.5 text-sm font-semibold text-arara transition hover:text-arara-deep";
}

export default function CtaArara({
  href,
  children,
  className = "",
  variant = "text",
}: Props) {
  return (
    <Link href={href} className={`${classes(variant)} ${className}`}>
      <ArarinhaMini />
      <span>{children}</span>
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
    <a href={href} className={`${classes(variant)} ${className}`}>
      <ArarinhaMini />
      <span>{children}</span>
    </a>
  );
}

export function CtaAraraInline({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <ArarinhaMini />
      <span>{children}</span>
    </span>
  );
}
