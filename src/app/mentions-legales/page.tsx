import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  robots: { index: false },
};

export default function LegalNoticePage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Mentions legales</h1>
      <p className="mt-6 text-ink/80">
        Cette page sera completee avec les mentions legales definitives avant la mise en ligne
        publique du site (raison sociale, adresse, numero d&apos;immatriculation, hebergeur).
      </p>
    </section>
  );
}
