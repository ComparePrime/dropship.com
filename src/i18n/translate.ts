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
