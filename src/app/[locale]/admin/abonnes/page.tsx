import type { Metadata } from "next";
import { ExportForm } from "./export-form";

export const metadata: Metadata = {
  title: "Export des abonnés",
  robots: { index: false, follow: false },
};

export default function SubscribersExportPage() {
  return (
    <section className="container-content flex flex-col items-center py-20 text-center">
      <h1 className="section-title">Export des abonnés</h1>
      <p className="mt-3 max-w-md text-stone">
        Téléchargez la liste des adresses inscrites à la newsletter (avec la date de consentement et le lien de
        désinscription de chaque abonné).
      </p>
      <ExportForm />
    </section>
  );
}
