export type Vars = Record<string, string | number>;
export type Messages = Record<string, string>;

/** Remplace {variable} par sa valeur. */
export function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

/** Traduction d'un texte francais dans un dictionnaire (repli : le texte francais). */
export function translateWith(messages: Messages | undefined, text: string, vars?: Vars): string {
  return interpolate(messages?.[text] ?? text, vars);
}

/**
 * Marque un texte français à traduire plus tard (tableaux de données dont les éléments passent ensuite par t()).
 * Ne fait rien à l'exécution : sert à `npm run i18n:check`, qui repère ainsi ces textes.
 */
export function tk(text: string): string {
  return text;
}

/** Traduit un libellé composé « Coloris · Taille » en traduisant chaque partie (les tailles restent telles quelles). */
export function translateLabel(t: (text: string) => string, label: string): string {
  return label.split(" · ").map(t).join(" · ");
}
