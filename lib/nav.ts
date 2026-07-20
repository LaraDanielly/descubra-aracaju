export const NAV_ROUTES = [
  { href: "/", key: "inicio" },
  { href: "/ranking", key: "ranking" },
  { href: "/mapa", key: "mapa" },
  { href: "/transporte", key: "transporte" },
  { href: "/historia", key: "historia" },
] as const;

/** Barra inferior mobile — sem transporte (cabe em 4 colunas). */
export const NAV_MOBILE_ROUTES = NAV_ROUTES.filter(
  (r) => r.href !== "/transporte"
);

export type NavHref = (typeof NAV_ROUTES)[number]["href"];

export function navLinks(t: (key: string) => string) {
  return NAV_ROUTES.map(({ href, key }) => ({
    href,
    label: t(key),
  }));
}

export function mobileNavLinks(t: (key: string) => string) {
  return NAV_MOBILE_ROUTES.map(({ href, key }) => ({
    href,
    label: t(key),
  }));
}

export function isNavActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
