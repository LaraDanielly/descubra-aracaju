import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const LINHAS = [
  {
    numero: "502",
    nome: "Aeroporto / Zona Sul",
    serve: "Aeroporto ↔ Orla de Atalaia",
    dica: "15–25 min; confira o letreiro sentido Zona Sul / Atalaia.",
  },
  {
    numero: "600 CP1 / CP2",
    nome: "Circular Praias",
    serve: "Atalaia, Artistas, Aruana e praias do sul",
    dica: "A linha que percorre a costa nos dois sentidos.",
  },
  {
    numero: "007",
    nome: "Fernando Collor / Atalaia",
    serve: "Zona norte ↔ Orla",
    dica: "Alternativa direta para a Orla.",
  },
  {
    numero: "004",
    nome: "Santa Maria / Mercado",
    serve: "Terminal Mercado (Centro, museus)",
    dica: "Desça no Mercado para o roteiro do Centro.",
  },
  {
    numero: "Intermunicipal",
    nome: "Aracaju → São Cristóvão",
    serve: "Terminal Zona Sul / rodoviária → São Cristóvão",
    dica: "≈ 40–50 min; combine com Uber se for em grupo.",
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "transporte" });
  return { title: t("metaTitulo"), description: t("metaDescricao") };
}

export default async function TransportePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("transporte");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-semibold">{t("titulo")}</h1>
      <p className="mt-2 text-tinta-suave">{t("subtitulo")}</p>
      <div className="renda my-8" />

      <div className="rounded border border-caju/40 bg-caju-soft/40 p-5">
        <h2 className="font-display text-xl font-semibold text-caju-deep">
          {t("alertaTitulo")}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-tinta">{t("alertaTexto")}</p>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">{t("cartaoTitulo")}</h2>
        <ol className="mt-6 space-y-4">
          {[1, 2, 3].map((n) => (
            <li
              key={n}
              className="flex gap-4 rounded border border-linha bg-white p-4"
            >
              <span className="selo-nota flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-papel text-sm font-bold">
                {n}
              </span>
              <div>
                <h3 className="font-semibold">{t(`passo${n}Titulo`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-tinta-suave">
                  {t(`passo${n}Texto`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-tinta-suave">
          {t("maisInfo")}{" "}
          <a
            href="https://www.cartaomaisaracaju.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-arara"
          >
            cartaomaisaracaju.com.br
          </a>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t("linhasTitulo")}</h2>
        <p className="mt-1 text-sm text-tinta-suave">{t("linhasSubtitulo")}</p>
        <div className="mt-6 overflow-x-auto rounded border border-linha">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-papel-2 text-xs uppercase tracking-wide text-tinta-suave">
              <tr>
                <th className="px-3 py-3">{t("colLinha")}</th>
                <th className="px-3 py-3">{t("colTrajeto")}</th>
                <th className="px-3 py-3">{t("colServe")}</th>
                <th className="px-3 py-3">{t("colDica")}</th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.numero} className="border-t border-linha">
                  <td className="px-3 py-3 font-semibold">
                    {l.numero}
                    <div className="font-normal text-tinta-suave">{l.nome}</div>
                  </td>
                  <td className="px-3 py-3">{l.nome}</td>
                  <td className="px-3 py-3">{l.serve}</td>
                  <td className="px-3 py-3 text-tinta-suave">{l.dica}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-tinta-suave">{t("appsTexto")}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">{t("escolhaTitulo")}</h2>
        <p className="mt-1 text-sm text-tinta-suave">{t("escolhaSubtitulo")}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded border border-linha bg-white p-5">
            <h3 className="font-display text-lg font-semibold">{t("carroTitulo")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-tinta-suave">
              {[1, 2, 3, 4].map((n) => (
                <li key={n}>· {t(`carro${n}`)}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-linha bg-white p-5">
            <h3 className="font-display text-lg font-semibold">{t("uberTitulo")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-tinta-suave">
              {[1, 2, 3, 4].map((n) => (
                <li key={n}>· {t(`uber${n}`)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded border border-arara/20 bg-arara-soft/30 p-4">
          <h3 className="font-semibold text-arara-deep">{t("contaTitulo")}</h3>
          <p className="mt-2 text-sm leading-relaxed text-tinta">{t("contaTexto")}</p>
        </div>
      </section>

      <section className="mt-12 rounded border border-linha bg-papel p-6 text-center">
        <h2 className="font-display text-xl font-semibold">{t("ctaTitulo")}</h2>
        <p className="mt-2 text-sm text-tinta-suave">{t("ctaTexto")}</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded border border-caju bg-caju px-4 py-2.5 text-sm font-semibold text-white"
        >
          {t("ctaBotao")}
        </Link>
      </section>
    </div>
  );
}
