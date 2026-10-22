import Link from "@/i18n/link";
import { getT } from "@/i18n/server";

export default function NotFound() {
  const t = getT();
  return (
    <section className="container-content flex flex-col items-center py-24 text-center">
      <h1 className="section-title">{t("Page introuvable")}</h1>
      <p className="mt-3 text-stone">
        {t("Le contenu que vous cherchez n'existe pas ou plus.")}</p>
      <Link href="/" className="btn-primary mt-8">
        {t("Retour à l'accueil")}</Link>
    </section>
  );
}
