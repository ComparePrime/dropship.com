import { alternatesFor, defaultLocale, isLocale, Locale } from "./config";
import { setLocale, getT } from "./server";
import { translate } from "./messages";
import type { Vars } from "./translate";

export type LocaleParams = { locale: string };

/** Langue d'apres le parametre d'adresse (repli sur le francais). */
export function asLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** A appeler en premier dans chaque page : fixe la langue de la requete pour les composants serveur. */
export function pageSetup(params: LocaleParams) {
  const locale = asLocale(params.locale);
  setLocale(locale);
  return { locale, t: getT() };
}

/** Traducteur utilisable dans generateMetadata (qui ne partage pas le contexte de la page). */
export function metaT(locale: Locale) {
  return (text: string, vars?: Vars) => translate(locale, text, vars);
}

export { alternatesFor };
