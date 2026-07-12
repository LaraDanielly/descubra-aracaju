"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "text" | "soft";
};

function classes(variant: Props["variant"]) {
  return variant === "solid"
    ? "inline-flex items-center gap-2 rounded border border-caju bg-caju px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-caju-deep"
    : variant === "outline"
      ? "inline-flex items-center gap-2 rounded border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
      : variant === "soft"
        ? "inline-flex items-center gap-2 rounded border-2 border-arara bg-arara px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-arara-deep"
        : "inline-flex items-center gap-1.5 text-sm font-semibold text-arara transition hover:text-arara-deep";
}

/** Seta/mãozinha animada — sinal claro de “clique aqui”, sem poluir. */
function SinalClique({ claro = false }: { claro?: boolean }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        animation: "ctaPulse 1.4s ease-in-out infinite",
        color: claro ? "rgba(255,255,255,0.95)" : "currentColor",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 5v14l11-7L8 5Z"
          fill="currentColor"
        />
      </svg>
      <style>{`
        @keyframes ctaPulse {
          0%, 100% { transform: translateX(0); opacity: 0.75; }
          50% { transform: translateX(4px); opacity: 1; }
        }
      `}</style>
    </span>
  );
}

export default function CtaArara({
  href,
  children,
  className = "",
  variant = "text",
}: Props) {
  const claro = variant === "solid" || variant === "soft" || variant === "outline";
  return (
    <Link href={href} className={`${classes(variant)} ${className}`}>
      <SinalClique claro={claro} />
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
  const claro = variant === "solid" || variant === "soft" || variant === "outline";
  return (
    <a href={href} className={`${classes(variant)} ${className}`}>
      <SinalClique claro={claro} />
      <span>{children}</span>
    </a>
  );
}

export function CtaAraraInline({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <SinalClique />
      <span>{children}</span>
    </span>
  );
}
