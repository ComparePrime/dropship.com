import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";
import { TrustBadges } from "@/components/trust-badges";

export default function HomePage() {
  const products = getAllProducts();
  const featured = products[0];

  return (
    <>
      <section className="container-content grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-blush/40 px-3 py-1 text-xs font-medium tracking-wide text-terracottaText">
            Collection Maison
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Une petite touche qui change tout.
          </h1>
          <p className="mt-4 max-w-md text-ink/80">
            Des objets pensés pour celles et ceux qui aiment les détails qui rendent une maison
            unique — une touche féline, chaleureuse et lumineuse, pour une chambre, un bureau ou
            un salon.
          </p>
          <Link href={`/produit/${featured.slug}`} className="btn-primary mt-8">
            Decouvrir {featured.name}
          </Link>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
        {featured.images[0] && (
          <div className="relative aspect-square w-full overflow-hidden rounded-xl2 bg-sand">
            <Image
              src={featured.images[0].src}
              alt={featured.images[0].alt}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
      </section>

      <section className="bg-sand/60 py-16 md:py-24">
        <div className="container-content">
          <h2 className="section-title text-center">Nos collections</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { slug: "chats", label: "Chats" },
              { slug: "decoration", label: "Decoration" },
              { slug: "maison", label: "Maison" },
              { slug: "cadeaux", label: "Idees cadeaux" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="rounded-xl2 border border-ink/10 bg-white/50 p-6 text-center transition-shadow hover:shadow-card"
              >
                <span className="font-display text-lg">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
