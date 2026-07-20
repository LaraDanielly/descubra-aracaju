"use client";

import { useTranslations } from "next-intl";
import { mobileNavLinks, navLinks } from "@/lib/nav";

export function useNavLinks() {
  const t = useTranslations("nav");
  return navLinks(t);
}

export function useMobileNavLinks() {
  const t = useTranslations("nav");
  return mobileNavLinks(t);
}
