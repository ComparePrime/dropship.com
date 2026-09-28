import { Product } from "@/lib/types";
import { RatingStars } from "@/components/product/rating-stars";

const INITIAL_VISIBLE = 6;

export function ReviewsSection({ product }: { product: Product }) {
  const realReviews = product.reviews.filter((r) => !r.demo);
  const demoReviews = product.reviews.filter((r) => r.demo);
  const hasRealReviews = realReviews.length > 0;
  const hasDemoReviews = demoReviews.length > 0;
  const visibleReviews = hasRealReviews
    ? realReviews.slice(0, INITIAL_VISIBLE)
    : demoReviews;

  return (
    <section id="avis" className="container-content scroll-mt-24 py-16 md:py-24">
      <div className="text-center">
        <h2 className="section-title">Avis clients</h2>

        {hasRealReviews ? (
          <div className="mt-3 flex flex-col items-center gap-1">
            <RatingStars value={Math.round(product.ratingAverage)} />
            <p className="text-sm text-ink/70">
              {product.ratingAverage.toFixed(1)}/5 · {product.ratingCount} avis
            </p>
          </div>
        ) : hasDemoReviews ? (
          <p className="mx-auto mt-3 max-w-lg text-xs uppercase tracking-wide text-stone">
            Apercu de mise en page — DEMO. Les avis reels de nos clients remplaceront cet
            exemple des les premieres commandes.
          </p>
        ) : (
          <p className="mx-auto mt-3 max-w-lg text-sm text-stone">
            Les avis clients seront affiches ici des les premieres commandes.
          </p>
        )}
      </div>

      {visibleReviews.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleReviews.map((review) => (
            <div key={review.id} className="rounded-xl2 border border-ink/10 bg-white/50 p-6">
              <div className="flex items-center justify-between">
                <RatingStars value={review.rating} />
                {review.demo ? (
                  <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] uppercase tracking-wide text-stone">
                    Demo
                  </span>
                ) : review.verified ? (
                  <span className="rounded-full bg-sage/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sage">
                    Achat vérifié
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{review.title}</p>
              <p className="mt-1 text-sm text-stone">{review.body}</p>
              <p className="mt-3 text-xs text-stone">
                {review.author} ·{" "}
                {new Date(review.date).toLocaleDateString("fr-CH", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      )}

      {hasRealReviews && realReviews.length > INITIAL_VISIBLE && (
        <p className="mt-8 text-center text-sm text-stone">
          + {realReviews.length - INITIAL_VISIBLE} autres avis vérifiés
        </p>
      )}
    </section>
  );
}
