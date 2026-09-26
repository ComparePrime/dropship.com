import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Politique de confidentialite</h1>
      <p className="mt-6 text-ink/80">
        Cette page sera completee avec la politique de confidentialite definitive avant la mise
        en ligne publique du site (donnees collectees, finalites, cookies, droits des
        utilisateurs).
      </p>
    </section>
  );
}
