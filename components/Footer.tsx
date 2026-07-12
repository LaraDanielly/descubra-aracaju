import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="mt-16 border-t border-linha bg-papel-2">
      <div className="renda" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Logo />
            <span className="font-display text-lg font-semibold">
              <span className="text-caju">Descubra</span> Aracaju
            </span>
          </div>
          <p className="text-sm leading-relaxed text-tinta-suave">
            {t("descricao")}
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-tinta">
            {t("navegue")}
          </h3>
          <ul className="space-y-2 text-sm text-tinta-suave">
            <li>
              <Link href="/ranking" className="hover:text-caju">
                {t("linkRanking")}
              </Link>
            </li>
            <li>
              <Link href="/mapa" className="hover:text-caju">
                {t("linkMapa")}
              </Link>
            </li>
            <li>
              <Link href="/transporte" className="hover:text-caju">
                {t("linkTransporte")}
              </Link>
            </li>
            <li>
              <Link href="/historia" className="hover:text-caju">
                {t("linkHistoria")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-tinta">
            {t("infoTitulo")}
          </h3>
          <ul className="space-y-2 text-sm text-tinta-suave">
            <li>{t("infoTurismo")}</li>
            <li>{t("infoTarifa")}</li>
            <li>
              <a
                href="https://www.cartaomaisaracaju.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-arara hover:underline"
              >
                {t("infoCartao")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-linha px-4 py-4 text-center text-xs text-tinta-suave">
        {t("creditos")}
      </div>
    </footer>
  );
}
