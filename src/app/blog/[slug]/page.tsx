import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getAllProducts } from "@/lib/products";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const products = getAllProducts();

  return (
    <article className="container-content max-w-2xl py-14">
      <h1 className="section-title">{post.title}</h1>
      <div className="mt-8 flex flex-col gap-4 text-ink/80">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 rounded-xl2 border border-ink/10 bg-sand/60 p-6">
        <p className="text-sm text-stone">A decouvrir dans cet article :</p>
        <ul className="mt-2 flex flex-col gap-1">
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/produit/${product.slug}`} className="text-accentDark underline">
                {product.name} — {product.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
