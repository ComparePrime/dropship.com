import type { Metadata } from "next";
import { UnsubscribeForm } from "./unsubscribe-form";

export const metadata: Metadata = {
  title: "Désinscription de la newsletter",
  robots: { index: false, follow: false },
};

export default function UnsubscribePage() {
  return (
    <section className="container-content flex flex-col items-center py-24 text-center">
      <h1 className="section-title">Se désinscrire de la newsletter</h1>
      <UnsubscribeForm />
    </section>
  );
}
