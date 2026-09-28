import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description: "Découvrez nos collections de décoration inspirée des chats.",
};

const collections = [
  { slug: "chats", label: "Chats", description: "Tous nos objets inspirés des chats." },
  { slug: "decoration", label: "Décoration", description: "Des pièces pour habiller votre intérieur." },
  { slug: "maison", label: "Maison", description: "Des objets pour toutes les pièces de la maison." },
  { slug: "cadeaux", label: "Idées cadeaux", description: "Des idées originales à offrir." },
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
