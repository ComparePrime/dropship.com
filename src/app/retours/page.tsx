import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Retours",
  description: "Retour gratuit sous 30 jours pour changer d'avis.",
};

export default function ReturnsPage() {
  const shipping = getAllProducts()[0].shipping;

  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">{shipping.returnDays} jours pour changer d&apos;avis</h1>
      <div className="mt-6 flex flex-col gap-4 text-ink/80">
        <p>
          Vous disposez de {shipping.returnDays} jours a compter de la reception de votre
          commande pour changer d&apos;avis et demander un retour gratuit.
        </p>
        <p>
          Pour initier un retour, contactez-nous simplement a l&apos;adresse{" "}
          <a href={`mailto:${siteConfig.supportEmail}`} className="underline">
            {siteConfig.supportEmail}
          </a>{" "}
          en indiquant votre numero de commande. Nous vous communiquerons alors la marche a
          suivre.
        </p>
        <p>
          Les conditions detaillees (etat du produit, delais de remboursement) seront precisees
          prochainement dans nos conditions generales de vente.
        </p>
      </div>
    </section>
  );
}
