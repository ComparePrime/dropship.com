import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "A propos",
  description: `Decouvrez ${siteConfig.name}, une marque de decoration inspiree des chats.`,
};

export default function AboutPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Notre histoire</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink/80">
        <p>
          {siteConfig.name} est nee d&apos;une idee simple : proposer des objets de decoration
          originaux, inspires des chats, pour ajouter une touche de caractere a un interieur
          sans le surcharger.
        </p>
        <p>
          Nous selectionnons chaque piece avec soin, en pensant a la fois a l&apos;esthetique,
          a l&apos;usage quotidien et a la qualite de l&apos;experience d&apos;achat.
        </p>
      </div>
    </section>
  );
}
