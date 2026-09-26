import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description: "Decouvrez nos collections de decoration inspiree des chats.",
};

const collections = [
  { slug: "chats", label: "Chats", description: "Tous nos objets inspires des chats." },
  { slug: "decoration", label: "Decoration", description: "Des pieces pour habiller votre interieur." },
  { slug: "maison", label: "Maison", description: "Des objets pour toutes les pieces de la maison." },
  { slug: "cadeaux", label: "Idees cadeaux", description: "Des idees originales a offrir." },
];

export default function CollectionsPage() {
  return (
    <section className="container-content py-14">
      <h1 className="section-title">Nos collections</h1>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="rounded-xl2 border border-ink/10 bg-white/50 p-8 transition-shadow hover:shadow-card"
          >
            <h2 className="font-display text-2xl">{c.label}</h2>
            <p className="mt-2 text-stone">{c.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
