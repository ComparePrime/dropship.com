import { Product } from "@/lib/types";
import { RatingStars } from "@/components/product/rating-stars";

export function ReviewsSection({ product }: { product: Product }) {
  const hasDemoReviews = product.reviewsDemo.length > 0;

  return (
    <section id="avis" className="container-content scroll-mt-24 py-16 md:py-24">
      <div className="text-center">
        <h2 className="section-title">Avis clients</h2>
        {hasDemoReviews ? (
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

      {hasDemoReviews && (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {product.reviewsDemo.map((review) => (
            <div key={review.id} className="rounded-xl2 border border-ink/10 bg-white/50 p-6">
              <div className="flex items-center justify-between">
                <RatingStars value={review.rating} />
                <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] uppercase tracking-wide text-stone">
                  Demo
                </span>
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
    </section>
  );
}
