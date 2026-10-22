"use client";

import { usePathname } from "next/navigation";
import { liveLocales, localeNames, localizePath, stripLocale, Locale } from "@/i18n/config";
import { useLocale, useT } from "@/i18n/provider";

/**
 * Choix de la langue : liste déroulante compacte. Chaque langue ouverte renvoie vers la même page dans
 * l'autre langue (adresse recalculée) ; rien ne s'affiche tant qu'une seule langue est ouverte.
 */
export function LanguageSwitcher() {
  const t = useT();
  const locale = useLocale();
  const pathname = usePathname() ?? "/";
  if (liveLocales.length < 2) return null;

  const { path } = stripLocale(pathname);
  const go = (target: Locale) => {
    // Rechargement complet : l'adresse change de préfixe et les textes viennent d'un autre dictionnaire.
    window.location.assign(`${localizePath(path, target)}${window.location.search}${window.location.hash}`);
  };

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("Langue")}</span>
      <select
        value={locale}
        onChange={(e) => go(e.target.value as Locale)}
        className="cursor-pointer appearance-none rounded-full border border-ink/15 bg-transparent py-1.5 pl-3 pr-7 text-xs font-medium text-ink/80 transition-colors hover:border-ink/30 focus:border-sage focus:outline-none"
      >
        {liveLocales.map((l) => (
          <option key={l} value={l} lang={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
      <span aria-hidden="true" className="pointer-events-none absolute right-2.5 text-[10px] text-ink/60">
        ▾
      </span>
    </label>
  );
}
