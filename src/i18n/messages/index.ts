import type { Locale } from "../config";
import en from "./en";
import de from "./de";
import it from "./it";
import es from "./es";
import pt from "./pt";

export type Vars = Record<string, string | number>;
export type Messages = Record<string, string>;

/**
 * Dictionnaires : la CLE est le texte francais (langue de reference), la valeur sa traduction.
 * Un texte sans traduction s'affiche en francais (jamais de cle brute) ; `npm run i18n:check` liste les manques.
 */
export const dictionaries: Record<Exclude<Locale, "fr">, Messages> = { en, de, it, es, pt };

function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

export function translate(locale: Locale, text: string, vars?: Vars): string {
  const translated = locale === "fr" ? text : (dictionaries[locale][text] ?? text);
  return interpolate(translated, vars);
}
