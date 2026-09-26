import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description: `${siteConfig.name} : ${siteConfig.slogan}`,
};

export default function AboutPage() {
  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{siteConfig.slogan}</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink/80">
        <p>
          {siteConfig.name} propose une sélection d&apos;objets pensés pour la maison, la
          famille et ceux que vous aimez : décoration, quotidien, compagnons à quatre pattes et
          petites attentions à offrir.
        </p>
        <p>
          Nous choisissons chaque produit avec soin, en pensant à la fois à l&apos;esthétique, à
          l&apos;utilité et à la qualité de l&apos;expérience d&apos;achat — de la présentation
          jusqu&apos;à la livraison.
        </p>
      </div>
    </section>
  );
}
