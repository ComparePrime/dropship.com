# Workflow d'import produit — Maison Loravie

Ce document decrit comment un nouveau produit est ajoute au catalogue a partir
d'une fiche fournisseur (Temu, AliExpress, Galaxus, etc.), de la recuperation
des donnees jusqu'a la publication. Il formalise ce qui a deja ete fait pour
les deux premiers produits du site.

## Pourquoi il n'y a pas d'automatisation "un clic"

Le site est un catalogue statique (Next.js, donnees dans `src/lib/products.ts`),
sans CMS ni panneau d'administration. L'import n'est donc pas un pipeline
automatique : c'est un processus assiste, execute a la demande avec l'agent,
qui suit toujours les memes etapes et les memes regles ci-dessous. Un vrai CMS
(Sanity, Supabase + interface admin) est une evolution possible si le volume
de produits le justifie, mais n'est pas necessaire pour la phase actuelle.

## Etapes

1. **Recuperation** — Recuperer la page fournisseur (lien direct, capture
   d'ecran, ou texte colle par l'operateur). Si le domaine est bloque par la
   politique reseau de l'environnement ou que la page est inaccessible, le
   dire explicitement et proposer une alternative (ajouter le domaine aux
   acces autorises, ou fournir le contenu directement) plutot que d'inventer
   un resultat.
2. **Extraction** — Ne retenir que ce qui est reellement present sur la page :
   nom fournisseur, description, caracteristiques (materiau, dimensions,
   alimentation, contenu du colis), images, variantes, avis. Toute information
   non trouvee reste absente ; elle n'est jamais devinee.
3. **Reecriture** — Traduire les donnees extraites dans le ton Maison Loravie
   (voir `AGENTS`/le brief de marque) :
   - Nouveau nom commercial, jamais le titre fournisseur.
   - Description, bullets, FAQ et bénéfices reecrits, jamais copies-colles.
   - Les avis fournisseur ne sont jamais importes comme avis Maison Loravie.
     Seuls de vrais avis Maison Loravie (export du systeme d'avis) alimentent
     `reviews` avec `demo: false`.
4. **Structuration** — Remplir un objet `Product` complet (voir
   `src/lib/types.ts`) : prix (CHF/EUR, jamais le cout fournisseur affiche),
   FAQ specifique, `layout` adapte au produit, images reelles copiees dans
   `public/images/products/<slug>/`.
5. **Conformite** — Si le produit entre dans une categorie sensible (bebe,
   electrique/batterie, accessoire animal), renseigner `compliance` avec
   `categories` et laisser `verified: false` tant qu'aucune verification
   reelle (certificat, fiche de securite) n'a ete obtenue. Ne jamais mettre
   `verified: true` sans document reel a l'appui.
6. **Evaluation interne** — Renseigner `evaluation` (demande, differenciation,
   qualite fournisseur, concurrence, prix, risque de retour, marge estimee
   apres publicite/livraison/frais). Champ interne, jamais affiche au client,
   sert a decider si le produit merite d'etre pousse en publicite.
7. **Brouillon** — Le produit est ajoute avec `status: "draft"`. Un brouillon :
   - N'apparait jamais dans le sitemap, la home, les collections ou les
     suggestions (`getPublishedProducts()`).
   - Reste accessible par lien direct `/produit/[slug]` pour relecture, avec
     un bandeau "Brouillon" et `noindex`.
8. **Validation** — Une fois le contenu relu et valide par l'operateur (et la
   conformite verifiee pour les categories sensibles), passer `status` a
   `"published"`. Le produit devient alors visible partout et indexable.

## Regles absolues

- Ne jamais pretendre avoir recupere une donnee qui n'a pas ete obtenue.
- Ne jamais copier la description ou les avis du fournisseur tels quels.
- Ne jamais publier directement (toujours `draft` d'abord).
- Ne jamais marquer une conformite comme verifiee sans document reel.
- Ne jamais inventer un prix de reference / prix barre sans donnee reelle.
