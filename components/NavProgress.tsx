"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";

/** Barra fina no topo para feedback imediato ao clicar em links internos. */
export default function NavProgress() {
  const pathname = usePathname();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    setVisivel(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest("a");
      if (!el) return;
      const href = el.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        el.target === "_blank"
      ) {
        return;
      }
      setVisivel(true);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!visivel) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden"
      aria-hidden
    >
      <div className="nav-progress-bar h-full w-1/3 bg-caju" />
    </div>
  );
}
