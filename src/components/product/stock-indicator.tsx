import { StockInfo } from "@/lib/types";
import { LOW_STOCK_THRESHOLD, URGENT_STOCK_THRESHOLD } from "@/lib/stock-config";

/**
 * N'affiche rien si aucun stock n'est declare pour ce produit
 * (`product.stock` absent ou `source: "none"`). Jamais de quantite ecrite en
 * dur ici : tout vient de `stock.quantity` / `stock.referenceCapacity`, a
 * renseigner dans src/lib/stock-config.ts. La quantite est fixe entre deux
 * visites (aucun tirage aleatoire, aucune baisse simulee).
 */
export function StockIndicator({ stock }: { stock?: StockInfo }) {
  if (!stock || stock.source === "none") return null;

  const { quantity, referenceCapacity } = stock;
  const ratio = referenceCapacity > 0 ? Math.min(1, Math.max(0, quantity / referenceCapacity)) : 0;
  const isOut = quantity <= 0;
  const isLow = !isOut && quantity <= LOW_STOCK_THRESHOLD;
  const isUrgent = !isOut && quantity <= URGENT_STOCK_THRESHOLD;

  const label = isOut
    ? "Temporairement indisponible"
    : isLow
      ? `Plus que ${quantity} pièce${quantity > 1 ? "s" : ""} en stock`
      : "En stock";

  return (
    <div className="mt-3">
      <p className={`text-sm font-medium ${isOut || isUrgent ? "text-terracottaText" : "text-sage"}`}>
        {label}
        {isUrgent && (
          <span className="font-normal text-ink/70"> — commandez avant épuisement</span>
        )}
      </p>
      {!isOut && (
        <div
          className="mt-2 h-1 w-full overflow-hidden rounded-full bg-sand"
          role="progressbar"
          aria-valuenow={quantity}
          aria-valuemin={0}
          aria-valuemax={referenceCapacity}
          aria-label="Niveau de stock disponible"
        >
          <div
            className={`h-full rounded-full ${isUrgent ? "bg-terracotta" : "bg-sage"} ${
              isLow ? "motion-safe:animate-stock-glow" : ""
            }`}
            style={{ width: `${Math.max(4, ratio * 100)}%` }}
          />
        </div>
      )}
    </div>
  );
}
