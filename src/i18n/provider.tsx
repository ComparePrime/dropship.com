"use client";

import { createContext, useCallback, useContext } from "react";
import { defaultLocale, Locale } from "./config";
import { translate, Vars } from "./messages";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** Traducteur pour les composants CLIENT : t("Texte francais", { variable }). */
export function useT() {
  const locale = useLocale();
  return useCallback((text: string, vars?: Vars) => translate(locale, text, vars), [locale]);
}
