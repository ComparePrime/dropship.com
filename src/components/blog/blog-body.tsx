import { ReactNode } from "react";
import Image from "next/image";
import Link from "@/i18n/link";
import { BlogIdea, BlogPost, parseBody } from "@/lib/blog";
import { getProductBySlug } from "@/lib/products";
import { getCardImage } from "@/lib/product-images";
import { ProductCardPrice } from "@/components/product-card-price";
import { localizeProducts } from "@/i18n/product-translation";
import { getLocale, getT } from "@/i18n/server";

/** Gras (**texte**) et liens ([texte](/chemin)) d'un texte de l'article. */
export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) parts.push(<strong key={key++} className="font-semibold text-ink">{match[1]}</strong>);
    else {
      const href = match[3];
      parts.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className="text-sageDeep underline decoration-sage/40 underline-offset-2 hover:decoration-sage">
            {match[2]}
          </Link>
        ) : (
          <a key={key++} href={href} className="text-sageDeep underline underline-offset-2" rel="noopener" target="_blank">
            {match[2]}
          </a>
        )
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function ProductCards({ title, slugs }: { title: string; slugs: string[] }) {
  const t = getT();
  const locale = getLocale();
  const products = localizeProducts(
    slugs.flatMap((slug) => {
      const p = getProductBySlug(slug);
      return p && p.status === "published" ? [p] : [];
    }),
    locale
  );
  if (products.length === 0) return null;
  return (
    <aside className="my-10 rounded-xl2 border border-ink/10 bg-sand/50 p-5 md:p-6">
      <p className="font-display text-xl font-semibold text-ink">{title || t("Dans la boutique")}</p>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((product) => {
          const image = getCardImage(product);
          return (
            <li key={product.id}>
              <Link href={`/produit/${product.slug}`} className="group flex gap-4 rounded-xl bg-white/70 p-3 transition-shadow hover:shadow-card">
                <span className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
                  {image && <Image src={image.src} alt={image.alt} fill sizes="96px" className="object-cover" />}
                </span>
                <span className="flex min-w-0 flex-col justify-center">
                  <span className="font-medium text-ink group-hover:underline">{product.name}</span>
                  <span className="mt-1 line-clamp-2 text-xs text-stone">{product.shortDescription}</span>
                  <div className="mt-2">
                    <ProductCardPrice product={product} />
                  </div>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

/** Emplacement éditorial : un simple conseil tant que la fiche produit n'existe pas, puis la fiche une fois le slug renseigné. */
function Idea({ idea }: { idea: BlogIdea }) {
  const product = idea.productSlug ? getProductBySlug(idea.productSlug) : undefined;
  const live = product && product.status === "published" ? product : undefined;
  return (
    <>
      <aside className="my-8 rounded-xl2 border-l-4 border-terracotta bg-cream p-5 shadow-card">
        <p className="font-display text-lg font-semibold text-ink">{idea.title}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{renderInline(idea.text)}</p>
      </aside>
      {live && <ProductCards title="" slugs={[live.slug]} />}
    </>
  );
}

export function BlogBody({ post }: { post: BlogPost }) {
  const blocks = parseBody(post.body);
  const ideas = new Map((post.ideas ?? []).map((i) => [i.id, i]));
  return (
    <div className="text-[17px] leading-[1.75] text-ink/85">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={idx} id={block.id} className="mb-4 mt-12 scroll-mt-28 font-display text-3xl font-semibold leading-tight text-ink">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="mb-2 mt-8 font-display text-2xl font-semibold text-ink">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={idx} className="mb-5">
                {renderInline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={idx} className="mb-6 list-disc space-y-2 pl-6 marker:text-sage">
                {block.items.map((item) => (
                  <li key={item}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="mb-6 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-sage">
                {block.items.map((item) => (
                  <li key={item}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "tip":
            return (
              <div key={idx} className="my-8 rounded-xl2 bg-sage/10 p-5 text-[16px] leading-relaxed text-ink/85">
                {block.title && <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-sageDeep">{block.title}</p>}
                <p>{renderInline(block.text)}</p>
              </div>
            );
          case "products":
            return <ProductCards key={idx} title={block.title} slugs={block.slugs} />;
          case "idea": {
            const idea = ideas.get(block.id);
            return idea ? <Idea key={idx} idea={idea} /> : null;
          }
        }
      })}
    </div>
  );
}
