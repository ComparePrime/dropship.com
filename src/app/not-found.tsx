import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-content flex flex-col items-center py-24 text-center">
      <h1 className="section-title">Page introuvable</h1>
      <p className="mt-3 text-stone">
        Le contenu que vous cherchez n&apos;existe pas ou plus.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
