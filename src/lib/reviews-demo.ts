import { Review } from "./types";
import { vesteChienReviews } from "./reviews-veste-chien";
import { griffoirAccordeonReviews } from "./reviews-griffoir-accordeon";
import { lanterneFelineReviews } from "./reviews-lanterne-feline";
import { coussinAllaitementReviews } from "./reviews-coussin-allaitement";
import { ventilateurPlafondReviews } from "./reviews-ventilateur-plafond";
import { meduseDansanteReviews } from "./reviews-meduse-dansante";
import { bougeoirRefletReviews } from "./reviews-bougeoir-reflet";
import { vaseArcheReviews } from "./reviews-vase-arche";
import { trioVasesReviews } from "./reviews-trio-vases";
import { lampeDiamantReviews } from "./reviews-lampe-diamant";
import { penduleNewtonReviews } from "./reviews-pendule-newton";
import { plateauVagueReviews } from "./reviews-plateau-vague";

/**
 * Avis de demonstration par produit (slug), lus uniquement par la section avis de la fiche.
 * Gardes hors du catalogue pour ne pas alourdir les pages ni polluer la note moyenne.
 * Un produit avec de vrais avis (ex: ventilateur anti-mouches) n'a pas d'entree ici.
 */
export const demoReviewsBySlug: Record<string, Review[]> = {
  "veste-chien-hiver-impermeable": vesteChienReviews,
  "griffoir-chat-accordeon-balle": griffoirAccordeonReviews,
  "crochet-chat-lanterne": lanterneFelineReviews,
  "coussin-bras-allaitement-biberon": coussinAllaitementReviews,
  "ventilateur-plafond-invisible-led": ventilateurPlafondReviews,
  "meduse-dansante-jouet-interactif": meduseDansanteReviews,
  "bougeoir-ceramique-argente-reflet": bougeoirRefletReviews,
  "vase-sculpture-fleurs-sechees": vaseArcheReviews,
  "trio-vases-porcelaine-wabi-sabi": trioVasesReviews,
  "lampe-table-led-diamant-usb": lampeDiamantReviews,
  "pendule-newton-metal-bureau": penduleNewtonReviews,
  "plateau-decoratif-rond-resine-vague": plateauVagueReviews,
};
