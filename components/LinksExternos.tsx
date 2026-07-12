import type { SVGProps } from "react";

function baseProps(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function IconGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBooking(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 7h16v12H4z" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      <path d="M4 11h16" />
    </svg>
  );
}

export function IconExternal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)}>
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export type LinkExternoTipo = "site" | "instagram" | "booking" | "guia";

export interface LinkExterno {
  tipo: LinkExternoTipo;
  url: string;
  label?: string;
}

export function LinksExternos({
  links,
  labels,
}: {
  links: LinkExterno[];
  labels: { site: string; instagram: string; booking: string; guia: string };
}) {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => {
        const Icon =
          l.tipo === "instagram"
            ? IconInstagram
            : l.tipo === "booking"
              ? IconBooking
              : l.tipo === "site"
                ? IconGlobe
                : IconExternal;
        const text =
          l.label ??
          (l.tipo === "instagram"
            ? labels.instagram
            : l.tipo === "booking"
              ? labels.booking
              : l.tipo === "site"
                ? labels.site
                : labels.guia);
        return (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-linha bg-papel px-2.5 py-1.5 text-xs font-semibold text-tinta transition hover:border-caju/50 hover:bg-caju-soft/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caju"
          >
            <Icon className="h-3.5 w-3.5 shrink-0 text-caju-deep" aria-hidden />
            {text}
          </a>
        );
      })}
    </div>
  );
}
