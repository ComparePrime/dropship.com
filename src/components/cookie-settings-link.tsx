"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/cookie-banner";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className="text-left hover:text-ink"
    >
      Gérer les cookies
    </button>
  );
}
