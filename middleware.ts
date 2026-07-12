import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Tudo, menos rotas de API, internals do Next e arquivos estáticos
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
