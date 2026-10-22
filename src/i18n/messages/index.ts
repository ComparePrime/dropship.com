import type { Locale } from "../config";
import { Messages, translateWith, Vars } from "../translate";
import en from "./en";
import de from "./de";
import it from "./it";
import es from "./es";
import pt from "./pt";

export type { Messages, Vars };

/**
 * Dictionnaires (SERVEUR uniquement : le navigateur ne recoit que celui de la langue de la page, via le
 * LocaleProvider). La CLE est le texte francais (langue de reference), la valeur sa traduction.
 * Un texte sans traduction s'affiche en francais (jamais de cle brute) ; `npm run i18n:check` liste les manques.
 */
export const dictionaries: Record<Exclude<Locale, "fr">, Messages> = { en, de, it, es, pt };

export function getMessages(locale: Locale): Messages {
  return locale === "fr" ? {} : dictionaries[locale];
}

export function translate(locale: Locale, text: string, vars?: Vars): string {
  return translateWith(getMessages(locale), text, vars);
}
