"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/cookie-banner";
import { useT } from "@/i18n/provider";

export function CookieSettingsLink() {
  const t = useT();
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className="text-left hover:text-ink"
    >
      {t("Gérer les cookies")}</button>
  );
}
