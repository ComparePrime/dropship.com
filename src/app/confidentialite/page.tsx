import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Politique de confidentialité</h1>
      <p className="mt-6 text-ink/80">
        Cette page sera complétée avec la politique de confidentialité définitive avant la mise
        en ligne publique du site (données collectées, finalités, cookies, droits des
        utilisateurs).
      </p>
    </section>
  );
}
