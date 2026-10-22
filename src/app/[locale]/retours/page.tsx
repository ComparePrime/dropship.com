import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Retours",
  description: "Retour gratuit sous 30 jours pour changer d'avis.",
};

export default function ReturnsPage() {
  const shipping = getPublishedProducts()[0].shipping;

  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{shipping.returnDays} jours pour changer d&apos;avis</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink/80">
        <p>
          Vous disposez de {shipping.returnDays} jours à compter de la réception de votre
          commande pour changer d&apos;avis et demander un retour gratuit.
        </p>
        <p>
          Pour initier un retour, contactez-nous simplement à l&apos;adresse{" "}
          <a href={`mailto:${siteConfig.supportEmail}`} className="underline">
            {siteConfig.supportEmail}
          </a>{" "}
          en indiquant votre numéro de commande. Nous vous communiquerons alors la marche à
          suivre.
        </p>
        <p>
          Les conditions détaillées (état du produit, délais de remboursement) seront précisées
          prochainement dans nos conditions générales de vente.
        </p>
      </div>
    </section>
  );
}
