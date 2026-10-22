import { defaultLocale, isLocale, type Locale } from "./config";
import { translate } from "./messages";
import type { Vars } from "./translate";

/** Langue de l'appelant d'une route d'API : en-tête `x-locale` (envoyé par le site), sinon le français. */
export function requestLocale(req: Request): Locale {
  const value = req.headers.get("x-locale");
  return isLocale(value) ? value : defaultLocale;
}

/** Traducteur pour les messages d'erreur d'une route d'API (la clé est le texte français). */
export function apiTranslator(locale: Locale) {
  return (text: string, vars?: Vars) => translate(locale, text, vars);
}
