"use client";

import { createContext, useCallback, useContext } from "react";
import { defaultLocale, Locale } from "./config";
import { Messages, translateWith, Vars } from "./translate";

interface LocaleState {
  locale: Locale;
  messages: Messages;
}

const LocaleContext = createContext<LocaleState>({ locale: defaultLocale, messages: {} });

/** `messages` : uniquement le dictionnaire de la langue de la page (envoye par le serveur). */
export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ locale, messages }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

/** Traducteur pour les composants CLIENT : t("Texte francais", { variable }). */
export function useT() {
  const { messages } = useContext(LocaleContext);
  return useCallback((text: string, vars?: Vars) => translateWith(messages, text, vars), [messages]);
}
