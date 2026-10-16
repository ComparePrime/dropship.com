"use client";

import { FormEvent, useState } from "react";
import { useCart } from "@/context/cart-context";
import { Icon } from "@/components/icons";

export function PromoCodeField() {
  const { promo, applyPromo, removePromo } = useCart();
  const [value, setValue] = useState("");
  const [checking, setChecking] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (checking) return;
    setChecking(true);
    const result = await applyPromo(value);
    setFeedback(result);
    if (result.ok) setValue("");
    setChecking(false);
  };

  if (promo) {
    return (
      <div className="rounded-xl border border-sage/30 bg-sage/5 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm text-ink">
            <Icon.check className="h-4 w-4 flex-shrink-0 text-sage" strokeWidth={2} />
            <span>
              Code <span className="font-medium">{promo.code}</span> appliqué (−{promo.percent} %)
            </span>
          </p>
          <button
            type="button"
            onClick={() => {
              removePromo();
              setFeedback(null);
            }}
            className="text-xs text-stone underline underline-offset-2 hover:text-ink"
          >
            Retirer
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="promo-code" className="sr-only">
        Code promo
      </label>
      <div className="flex gap-2">
        <input
          id="promo-code"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setFeedback(null);
          }}
          placeholder="Code promo"
          autoComplete="off"
          autoCapitalize="characters"
          className="min-w-0 flex-1 rounded-full border border-ink/15 bg-white/70 px-4 py-2.5 text-sm text-ink placeholder:text-stone focus:border-sage focus:outline-none"
        />
        <button
          type="submit"
          disabled={checking || value.trim() === ""}
          className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-40"
        >
          {checking ? "…" : "Appliquer"}
        </button>
      </div>
      {feedback && !feedback.ok && (
        <p role="alert" className="mt-2 text-sm text-terracottaText">
          {feedback.message}
        </p>
      )}
    </form>
  );
}
