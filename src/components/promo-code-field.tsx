"use client";

import { FormEvent, useId, useState } from "react";
import { useCart } from "@/context/cart-context";
import { Icon } from "@/components/icons";
import { useT } from "@/i18n/provider";

export function PromoCodeField() {
  const t = useT();
  const { promo, applyPromo, removePromo } = useCart();
  const inputId = useId();
  const [value, setValue] = useState("");
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (checking || value.trim() === "") return;
    setChecking(true);
    setError(null);
    const result = await applyPromo(value);
    if (result.ok) setValue("");
    else setError(result.message);
    setChecking(false);
  };

  if (promo) {
    return (
      <div className="motion-safe:animate-soft-in rounded-xl border border-sage/30 bg-sage/10 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm text-ink">
            <Icon.check className="h-4 w-4 flex-shrink-0 text-sage" strokeWidth={2} />
            <span>
              {t("Code {code} appliqué : −{percent} %", { code: promo.code, percent: promo.percent })}
            </span>
          </p>
          <button
            type="button"
            onClick={() => {
              removePromo();
              setError(null);
            }}
            className="flex-shrink-0 text-xs text-stone underline underline-offset-2 hover:text-ink"
          >
            {t("Retirer")}</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className="text-sm font-medium text-ink">
        {t("Vous avez un code promo ?")}</label>
      <div className="mt-2 flex gap-2">
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(null);
          }}
          placeholder={t("Entrez votre code")}
          autoComplete="off"
          autoCapitalize="characters"
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className="min-w-0 flex-1 rounded-full border border-ink/15 bg-white/70 px-4 py-2.5 text-sm text-ink placeholder:text-stone focus:border-sage focus:outline-none"
        />
        <button
          type="submit"
          disabled={checking || value.trim() === ""}
          className="flex-shrink-0 rounded-full border border-sage px-5 py-2.5 text-sm font-medium text-sage transition-colors hover:bg-sage hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-sage"
        >
          {checking ? t("Vérification…") : t("Appliquer")}
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} role="alert" className="motion-safe:animate-soft-in mt-2 text-sm text-terracottaText">
          {error}
        </p>
      )}
    </form>
  );
}
