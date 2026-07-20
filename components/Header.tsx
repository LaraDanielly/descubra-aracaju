"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { isNavActive } from "@/lib/nav";
import { useNavLinks } from "@/hooks/useNavLinks";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import CommandPalette from "./CommandPalette";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const links = useNavLinks();
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setBuscaAberta(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-linha bg-papel/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuAberto(false)}>
            <Logo />
            <span className="font-display text-lg font-semibold tracking-tight">
              <span className="text-caju">Descubra</span>{" "}
              <span className="text-arara-deep">Aracaju</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={t("menuPrincipal")}>
            {links.map((l) => {
              const ativo = isNavActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 text-sm font-medium transition ${
                    ativo
                      ? "border-b-2 border-caju text-caju-deep"
                      : "text-tinta-suave hover:text-tinta"
                  }`}
                  aria-current={ativo ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setBuscaAberta(true)}
              className="hidden items-center gap-2 rounded border border-linha bg-white px-3 py-1.5 text-xs text-tinta-suave sm:inline-flex"
              aria-label={t("buscar")}
            >
              <span>{t("buscar")}</span>
              <kbd className="rounded bg-papel-2 px-1.5 py-0.5 font-mono text-[10px]">
                {t("atalhoBusca")}
              </kbd>
            </button>
            <LanguageSwitcher />
            <button
              type="button"
              className="rounded border border-linha p-2 lg:hidden"
              onClick={() => setMenuAberto((a) => !a)}
              aria-label={menuAberto ? t("fecharMenu") : t("abrirMenu")}
              aria-expanded={menuAberto}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuAberto ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuAberto && (
          <nav className="border-t border-linha bg-papel px-4 py-3 lg:hidden" aria-label={t("menuPrincipal")}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuAberto(false)}
                className="block border-b border-linha/60 py-3 text-sm font-medium last:border-0"
                aria-current={isNavActive(pathname, l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuAberto(false);
                setBuscaAberta(true);
              }}
              className="mt-2 w-full rounded border border-linha bg-white py-2.5 text-sm"
            >
              {t("buscar")}
            </button>
          </nav>
        )}
      </header>
      <CommandPalette aberto={buscaAberta} onFechar={() => setBuscaAberta(false)} />
    </>
  );
}
