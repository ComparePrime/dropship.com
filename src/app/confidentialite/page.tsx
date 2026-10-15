import type { Metadata } from "next";
import { Fragment } from "react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Maison Loravie collecte, utilise et protège vos données personnelles, et comment exercer vos droits.",
  alternates: { canonical: `${siteConfig.domain}/confidentialite` },
};

type Block = { p: string } | { ul: string[] };
interface Section {
  title: string;
  blocks: Block[];
}

// Jetons remplacés par des liens au rendu : {email}, {site}, {stripe}, {netlify}.
const LINKS: Record<string, { href: string; label: string }> = {
  "{email}": { href: `mailto:${siteConfig.supportEmail}`, label: siteConfig.supportEmail },
  "{site}": { href: siteConfig.domain, label: siteConfig.domain },
  "{stripe}": { href: "https://stripe.com/privacy", label: "https://stripe.com/privacy" },
  "{netlify}": { href: "https://www.netlify.com/privacy/", label: "https://www.netlify.com/privacy/" },
};

const sections: Section[] = [
  {
    title: "1. Responsable du traitement",
    blocks: [
      {
        p: "Le site Maison Loravie, accessible à l'adresse {site}, est une boutique en ligne proposant des articles pour la maison, la décoration, le bébé et la famille, ainsi que des accessoires et des idées cadeaux.",
      },
      { p: "Le responsable du traitement des données personnelles est :" },
      { ul: ["Nom commercial : Maison Loravie", "Adresse e-mail : {email}", "Site internet : {site}"] },
      {
        p: "Pour toute question concernant le traitement de vos données personnelles, vous pouvez nous contacter à l'adresse e-mail indiquée ci-dessus.",
      },
    ],
  },
  {
    title: "2. Données personnelles collectées",
    blocks: [
      {
        p: "Nous collectons uniquement les données personnelles nécessaires au fonctionnement de la boutique, au traitement des commandes et à l'amélioration de nos services. Selon votre utilisation du site, les données suivantes peuvent être collectées :",
      },
      {
        ul: [
          "Données d'identification : nom, prénom.",
          "Coordonnées : adresse e-mail, adresse de livraison et, si nécessaire, adresse de facturation et numéro de téléphone.",
          "Données de commande : produits commandés, montant, date, statut de la commande et informations relatives à la livraison.",
          "Données de paiement : statut du paiement et références de transaction. Les paiements en ligne sont traités par notre prestataire de paiement.",
          "Échanges avec notre service client : contenu des messages et informations nécessaires au traitement de votre demande.",
          "Données techniques : adresse IP, informations sur le navigateur, appareil utilisé, journaux techniques et données de connexion, dans la mesure où elles sont collectées par le site ou ses prestataires.",
          "Données de navigation et de marketing : interactions avec le site, préférences de cookies et données publicitaires, lorsque les outils correspondants sont activés et que leur utilisation est autorisée.",
        ],
      },
      {
        p: "Les données obligatoires à la commande sont celles nécessaires à son traitement. Sans ces informations, nous pourrions ne pas être en mesure de finaliser votre achat ou d'assurer la livraison.",
      },
    ],
  },
  {
    title: "3. Finalités du traitement",
    blocks: [
      { p: "Vos données peuvent être utilisées pour les finalités suivantes :" },
      {
        ul: [
          "traiter et confirmer vos commandes ;",
          "encaisser les paiements ;",
          "organiser l'expédition et le suivi des colis ;",
          "répondre à vos questions et gérer les réclamations ;",
          "assurer le service après-vente et traiter les retours ou remboursements ;",
          "respecter nos obligations comptables, fiscales et légales ;",
          "assurer la sécurité et le bon fonctionnement du site ;",
          "prévenir les transactions frauduleuses ;",
          "améliorer l'expérience utilisateur et les performances de la boutique ;",
          "mesurer l'efficacité de nos campagnes publicitaires et proposer des communications commerciales, lorsque cela est autorisé.",
        ],
      },
      { p: "Nous ne vendons pas vos données personnelles à des tiers." },
    ],
  },
  {
    title: "4. Paiements en ligne",
    blocks: [
      { p: "Les paiements en ligne sont traités par Stripe, notre prestataire de paiement." },
      {
        p: "Lorsque vous effectuez un paiement, certaines données nécessaires à la transaction peuvent être transmises directement à Stripe, notamment les informations de paiement, les coordonnées nécessaires et les données relatives à la commande.",
      },
      {
        p: "Les informations de carte bancaire sont traitées conformément aux modalités et mesures de sécurité de Stripe. Maison Loravie ne cherche pas à collecter ni à conserver les numéros complets de carte bancaire ou les codes de sécurité des cartes.",
      },
      {
        p: "Stripe peut traiter certaines données en dehors de la Suisse ou de l'Espace économique européen, selon les services utilisés. Pour plus d'informations, vous pouvez consulter la politique de confidentialité de Stripe : {stripe}",
      },
    ],
  },
  {
    title: "5. Hébergement et fonctionnement du site",
    blocks: [
      { p: "Notre site est hébergé au moyen des services de Netlify." },
      {
        p: "Dans le cadre de l'hébergement et du fonctionnement technique du site, certaines données peuvent être traitées par Netlify, notamment des données techniques, des journaux de connexion et des informations nécessaires à la sécurité et à la disponibilité du service.",
      },
      {
        p: "Ces traitements sont soumis aux conditions et à la politique de confidentialité du prestataire : {netlify}",
      },
    ],
  },
  {
    title: "6. Livraison et prestataires logistiques",
    blocks: [
      {
        p: "Pour assurer la livraison de vos commandes, certaines données nécessaires à l'expédition peuvent être transmises aux fournisseurs, partenaires logistiques, transporteurs ou autres prestataires concernés.",
      },
      {
        p: "Ces données peuvent notamment comprendre votre nom, votre adresse de livraison, votre numéro de téléphone lorsque nécessaire, ainsi que les informations relatives aux produits commandés.",
      },
      {
        p: "Lorsque les commandes sont expédiées directement par un fournisseur, les informations indispensables à la préparation et à la livraison peuvent lui être communiquées.",
      },
      { p: "Nous limitons les informations transmises à ce qui est nécessaire à l'exécution de la commande." },
    ],
  },
  {
    title: "7. Cookies et technologies similaires",
    blocks: [
      {
        p: "Notre site peut utiliser des cookies et des technologies similaires afin d'assurer son fonctionnement, de mémoriser certaines préférences et, lorsque les outils correspondants sont activés, de mesurer l'audience ou les performances publicitaires.",
      },
      { p: "Les cookies peuvent notamment être utilisés pour :" },
      {
        ul: [
          "assurer les fonctionnalités essentielles de la boutique ;",
          "conserver certaines préférences de navigation ;",
          "comprendre comment les visiteurs utilisent le site ;",
          "mesurer les résultats des campagnes publicitaires ;",
          "améliorer les performances commerciales de la boutique.",
        ],
      },
      {
        p: "Les cookies strictement nécessaires au fonctionnement du site peuvent être utilisés lorsque cela est autorisé. Les cookies non essentiels, notamment ceux destinés au suivi publicitaire, sont soumis aux règles de consentement applicables.",
      },
      {
        p: "Vous pouvez gérer les cookies au moyen des paramètres proposés sur le site, lorsqu'ils sont disponibles, ainsi que par les paramètres de votre navigateur.",
      },
      { p: "La désactivation de certains cookies peut affecter le fonctionnement de certaines fonctionnalités." },
    ],
  },
  {
    title: "8. Publicité et mesure d'audience",
    blocks: [
      {
        p: "Maison Loravie peut utiliser des outils d'analyse ou de publicité en ligne, notamment des services proposés par des plateformes publicitaires, afin de mesurer les performances des campagnes et d'améliorer la pertinence des annonces.",
      },
      {
        p: "Lorsque de tels outils sont activés, certaines informations relatives à la navigation ou aux interactions avec le site peuvent être transmises aux prestataires concernés, selon leur configuration et vos choix en matière de confidentialité.",
      },
      {
        p: "Les technologies publicitaires non essentielles sont utilisées conformément aux règles applicables en matière de protection des données et de consentement.",
      },
      {
        p: "Les prestataires concernés disposent de leurs propres politiques de confidentialité. Nous vous invitons à les consulter pour connaître leurs pratiques de traitement des données.",
      },
    ],
  },
  {
    title: "9. Base juridique du traitement",
    blocks: [
      { p: "Lorsque la législation applicable l'exige, les traitements reposent notamment sur les bases suivantes :" },
      {
        ul: [
          "Exécution d'un contrat : traitement et livraison des commandes, paiement et service après-vente.",
          "Obligations légales : conservation des documents comptables et respect des obligations légales applicables.",
          "Intérêts légitimes : sécurité du site, prévention des fraudes, gestion des demandes et amélioration des services, dans la mesure où ces intérêts respectent les droits des personnes concernées.",
          "Consentement : utilisation de certains cookies, technologies publicitaires ou communications commerciales lorsque le consentement est requis.",
        ],
      },
      {
        p: "Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment pour l'avenir, sans que cela remette en cause la licéité des traitements effectués auparavant.",
      },
    ],
  },
  {
    title: "10. Communication des données à des tiers",
    blocks: [
      { p: "Vos données peuvent être communiquées, lorsque cela est nécessaire, aux catégories de destinataires suivantes :" },
      {
        ul: [
          "prestataires de paiement, notamment Stripe ;",
          "prestataires d'hébergement et de services techniques, notamment Netlify ;",
          "fournisseurs et partenaires chargés de la préparation ou de l'expédition des commandes ;",
          "transporteurs et services de livraison ;",
          "prestataires d'analyse et de publicité, lorsque ces outils sont utilisés ;",
          "autorités compétentes lorsque la loi l'exige.",
        ],
      },
      {
        p: "Ces destinataires traitent les données selon leur rôle, leurs obligations contractuelles et les règles légales applicables.",
      },
      {
        p: "Nous ne communiquons pas vos données à des tiers pour leur permettre de les exploiter librement à des fins commerciales indépendantes sans base juridique appropriée.",
      },
    ],
  },
  {
    title: "11. Transferts internationaux",
    blocks: [
      {
        p: "Certains prestataires utilisés pour le paiement, l'hébergement, l'analyse ou la publicité peuvent traiter des données dans des pays autres que la Suisse ou ceux de l'Espace économique européen.",
      },
      {
        p: "Lorsque des données sont transférées à l'étranger, nous veillons à ce que les conditions prévues par la législation applicable soient respectées, notamment au moyen d'une décision d'adéquation ou de garanties appropriées lorsque cela est nécessaire.",
      },
      { p: "Les modalités exactes dépendent des prestataires et des services effectivement utilisés." },
    ],
  },
  {
    title: "12. Durée de conservation",
    blocks: [
      {
        p: "Nous conservons les données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, sous réserve des obligations légales et des délais applicables. À titre général :",
      },
      {
        ul: [
          "Commandes et documents comptables : pendant les délais de conservation imposés par la législation applicable.",
          "Service client et réclamations : pendant la durée nécessaire au traitement de la demande et à la gestion d'éventuels litiges.",
          "Données techniques et journaux : pendant la durée nécessaire à la sécurité et au fonctionnement des services concernés.",
          "Cookies et données publicitaires : selon leur finalité, leur configuration et les paramètres des prestataires concernés.",
        ],
      },
      {
        p: "À l'expiration des durées applicables, les données sont supprimées ou anonymisées lorsque cela est possible et approprié.",
      },
    ],
  },
  {
    title: "13. Sécurité des données",
    blocks: [
      {
        p: "Nous mettons en œuvre des mesures techniques et organisationnelles adaptées afin de protéger les données personnelles contre les accès non autorisés, la perte, la divulgation ou l'altération.",
      },
      {
        p: "Les paiements sont confiés à un prestataire spécialisé. Toutefois, aucun système de transmission ou de stockage de données ne peut garantir une sécurité absolue.",
      },
    ],
  },
  {
    title: "14. Vos droits",
    blocks: [
      { p: "Conformément à la législation applicable, vous pouvez notamment disposer des droits suivants :" },
      {
        ul: [
          "demander l'accès aux données personnelles vous concernant ;",
          "demander la rectification de données inexactes ;",
          "demander la suppression de données lorsque les conditions légales sont remplies ;",
          "vous opposer à certains traitements ou en demander la limitation lorsque cela est applicable ;",
          "retirer votre consentement lorsque le traitement repose sur celui-ci ;",
          "demander la portabilité des données lorsque ce droit s'applique ;",
          "déposer une réclamation auprès de l'autorité de contrôle compétente.",
        ],
      },
      {
        p: "Ces droits peuvent être soumis à certaines conditions et exceptions légales, notamment lorsque nous devons conserver des informations pour respecter une obligation légale.",
      },
      { p: "Pour exercer vos droits ou poser une question relative à vos données personnelles, écrivez à : {email}" },
      {
        p: "Nous pourrons vous demander les informations nécessaires pour vérifier votre identité avant de répondre à votre demande.",
      },
    ],
  },
  {
    title: "15. Protection des mineurs",
    blocks: [
      { p: "Notre boutique n'est pas spécifiquement destinée à la collecte de données personnelles auprès de mineurs." },
      {
        p: "Si nous apprenons que des données ont été collectées de manière inappropriée, nous prendrons les mesures raisonnables nécessaires pour les traiter conformément à la législation applicable.",
      },
    ],
  },
  {
    title: "16. Modifications de la politique",
    blocks: [
      {
        p: "Nous pouvons modifier la présente politique de confidentialité afin de tenir compte de l'évolution de nos services, de nos outils ou de la législation applicable.",
      },
      {
        p: "La version publiée sur cette page indique la date de sa dernière mise à jour. Nous vous invitons à la consulter périodiquement.",
      },
    ],
  },
  {
    title: "17. Contact",
    blocks: [
      { p: "Pour toute question concernant cette politique ou le traitement de vos données personnelles :" },
      { ul: ["Maison Loravie", "E-mail : {email}", "Site : {site}"] },
    ],
  },
];

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\{email\}|\{site\}|\{stripe\}|\{netlify\})/);
  return (
    <>
      {parts.map((part, i) => {
        const link = LINKS[part];
        return link ? (
          <a
            key={i}
            href={link.href}
            className="text-sage underline underline-offset-2 break-words"
            {...(link.href.startsWith("http") ? { rel: "noopener noreferrer" } : {})}
          >
            {link.label}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}

export default function PrivacyPage() {
  return (
    <section className="container-content max-w-3xl py-14">
      <h1 className="section-title">Politique de confidentialité — Maison Loravie</h1>
      <p className="mt-3 text-sm text-ink/60">Dernière mise à jour : 15 octobre 2026</p>

      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">{section.title}</h2>
            <div className="mt-4 flex flex-col gap-4 text-ink/80">
              {section.blocks.map((block, i) =>
                "p" in block ? (
                  <p key={i}>
                    <Rich text={block.p} />
                  </p>
                ) : (
                  <ul key={i} className="list-disc space-y-2 pl-5">
                    {block.ul.map((item) => (
                      <li key={item}>
                        <Rich text={item} />
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
