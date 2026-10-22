import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function LegalNoticePage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Mentions légales</h1>
      <p className="mt-6 text-ink/80">
        Cette page sera complétée avec les mentions légales définitives avant la mise en ligne
        publique du site (raison sociale, adresse, numéro d&apos;immatriculation, hébergeur).
      </p>
    </section>
  );
}
