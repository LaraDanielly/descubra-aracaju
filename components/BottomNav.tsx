"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { isNavActive } from "@/lib/nav";
import { useMobileNavLinks } from "@/hooks/useNavLinks";

const ICONS: Record<string, string> = {
  "/": "⌂",
  "/mapa": "◎",
  "/ranking": "※",
  "/historia": "†",
};

export default function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const items = useMobileNavLinks();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-papel/95 backdrop-blur md:hidden"
      aria-label={t("menuPrincipal")}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {items.map((item) => {
          const ativo = isNavActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                  ativo ? "text-caju" : "text-tinta-suave"
                }`}
                aria-current={ativo ? "page" : undefined}
              >
                <span className="text-base leading-none" aria-hidden>
                  {ICONS[item.href] ?? "•"}
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
