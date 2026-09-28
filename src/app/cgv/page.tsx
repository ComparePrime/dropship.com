import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  robots: { index: false },
};

export default function CgvPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Conditions générales de vente</h1>
      <p className="mt-6 text-ink/80">
        Cette page sera complétée avec les conditions générales de vente définitives avant la
        mise en ligne publique du site (identité légale de l&apos;entreprise, modalités de
        paiement, garanties, droit applicable).
      </p>
    </section>
  );
}
