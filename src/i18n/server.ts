import { cache } from "react";
import { defaultLocale, Locale } from "./config";
import { translate } from "./messages";
import type { Vars } from "./translate";

/**
 * Langue de la requete en cours, pour les composants SERVEUR. Chaque page (et chaque layout) appelle
 * setLocale(params.locale) en premier ; les composants qu'elle contient lisent ensuite getLocale() / getT().
 * (Meme principe que next-intl : le stockage est propre a la requete grace a React.cache.)
 */
const store = cache(() => ({ locale: defaultLocale as Locale }));

export function setLocale(locale: Locale) {
  store().locale = locale;
}

export function getLocale(): Locale {
  return store().locale;
}

/** Traducteur serveur : t("Texte francais", { variable }) -> texte dans la langue de la page. */
export function getT() {
  const locale = getLocale();
  return (text: string, vars?: Vars) => translate(locale, text, vars);
}
