"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const items = [
    { href: "/", label: t("inicio"), icon: "⌂" },
    { href: "/mapa", label: t("mapa"), icon: "◎" },
    { href: "/ranking", label: t("ranking"), icon: "※" },
    { href: "/historia", label: t("historia"), icon: "†" },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-papel/95 backdrop-blur md:hidden">
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {items.map((item) => {
          const ativo =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                  ativo ? "text-caju" : "text-tinta-suave"
                }`}
              >
                <span className="text-base leading-none" aria-hidden>
                  {item.icon}
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
