import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // O "N" só aparece em desenvolvimento (Next.js Dev Tools). Em produção não sai.
  // Desliga o indicador local para não confundir com UI do site.
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
