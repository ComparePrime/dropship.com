import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez l'equipe ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Contact</h1>
      <p className="mt-6 text-ink/80">
        Une question sur une commande ou un produit ? Ecrivez-nous a{" "}
        <a href={`mailto:${siteConfig.supportEmail}`} className="underline">
          {siteConfig.supportEmail}
        </a>{" "}
        et nous vous repondrons dans les meilleurs delais.
      </p>
    </section>
  );
}
