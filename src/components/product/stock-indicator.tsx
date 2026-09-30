import { StockInfo } from "@/lib/types";

/**
 * N'affiche rien si aucune donnée de stock fiable n'existe pour ce produit
 * (`product.stock` absent ou `source: "none"`). Jamais de quantité écrite en
 * dur : tout vient de `stock.quantity` / `stock.referenceCapacity`.
 */
export function StockIndicator({ stock }: { stock?: StockInfo }) {
  if (!stock || stock.source === "none") return null;

  const { quantity, referenceCapacity } = stock;
  const ratio = referenceCapacity > 0 ? Math.min(1, Math.max(0, quantity / referenceCapacity)) : 0;
  const isLow = quantity > 0 && quantity <= 12;
  const isOut = quantity <= 0;

  const label = isOut
    ? "Temporairement indisponible"
    : isLow
      ? `Plus que ${quantity} exemplaire${quantity > 1 ? "s" : ""} disponible${quantity > 1 ? "s" : ""}`
      : `En stock — ${quantity} unités disponibles`;

  return (
    <div className="mt-3">
      <p className={`text-sm font-medium ${isOut ? "text-terracottaText" : "text-sage"}`}>
        {label}
      </p>
      {!isOut && (
        <div
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand"
          role="progressbar"
          aria-valuenow={quantity}
          aria-valuemin={0}
          aria-valuemax={referenceCapacity}
          aria-label="Niveau de stock disponible"
        >
          <div
            className={`h-full rounded-full bg-sage ${
              isLow ? "motion-safe:animate-stock-glow" : ""
            }`}
            style={{ width: `${Math.max(4, ratio * 100)}%` }}
          />
        </div>
      )}
    </div>
  );
}
