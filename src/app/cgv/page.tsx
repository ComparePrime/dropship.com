import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions generales de vente",
  robots: { index: false },
};

export default function CgvPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Conditions generales de vente</h1>
      <p className="mt-6 text-ink/80">
        Cette page sera completee avec les conditions generales de vente definitives avant la
        mise en ligne publique du site (identite legale de l&apos;entreprise, modalites de
        paiement, garanties, droit applicable).
      </p>
    </section>
  );
}
