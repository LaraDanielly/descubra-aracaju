import type { ReactNode } from "react";
import "./globals.css";

/** Root layout mínimo — o HTML fica no layout de [locale] */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
