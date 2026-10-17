import Image from "next/image";
import { Product } from "@/lib/types";

export function EditorialSection({ product }: { product: Product }) {
  // Premiere photo secondaire qui n'est ni un visuel d'information (dimensions...) ni
  // une photo d'ambiance deja montree dans la section "Dans votre interieur".
  const image =
    product.images.slice(1).find((img) => !img.info && !img.inspiration) ??
    product.images[1] ??
    product.images[0];

  return (
    <section className="bg-sand/60 py-16 md:py-24">
      <div className="container-content grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2">
          {image && (
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          )}
        </div>
        <div>
          <h2 className="section-title">Un objet pensé dans le détail</h2>
          <div className="mt-6 flex flex-col gap-4 text-ink/80">
            {product.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
