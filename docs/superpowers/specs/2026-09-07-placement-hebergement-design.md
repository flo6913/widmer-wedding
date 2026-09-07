# Placement Hébergement — Design

Date : 2026-09-07

## Objectif

Intégrer les informations de nuit (placement des invités dans les tipis, tentes et roulotte du domaine) dans le site de mariage, sur une page dédiée au style harmonisé avec le reste du site.

## Décisions validées

- Page dédiée (`accommodations.html`) reliée depuis `index.html` et `guest.html`.
- Style uniformisé avec le site existant (Cormorant Garamond + Jost, palette sauge/or, `style.css` partagé).
- Carte extraite de la base64 vers `assets/img/map-hebergement.jpg`.

## Fichiers

| Fichier | Action |
| --- | --- |
| `assets/img/map-hebergement.jpg` | Nouveau — carte du domaine extraite de la base64 actuellement embarquée. |
| `accommodations.html` | Réécrit — même tête que `index.html` (nav fixe `C & F` + liens), hero stylé, carte, note, répertoire. |
| `assets/css/style.css` | Ajouté — composants `.lodge`, `.guest-row`, `.empty-slot`, variant `.map-frame` pour image statique, `.note`. |
| `assets/js/main.js` | Modifié — ajout `hebergement: "accommodations.html"` aux `LINKS` ; les `data-link="hebergement"` sont résolus. |
| `index.html` | Modifié — lien « Nuit » dans la nav ; encart « Hébergement » des infos pratiques pointant vers la page. |
| `guest.html` | Modifié — nouveau lien « Où dormir » (icône lit) vers la page. |

## Contenu de la page

1. **Hero** : kicker « Une nuit sur le domaine », titre « Où poser vos valises », phrase d'introduction.
2. **Carte** : image `assets/img/map-hebergement.jpg` dans un cadre stylé + légende d'utilisation.
3. **Note** : encadré « Comment ça marche ».
4. **Répertoire** : les 11 emplacements (7 tipis, 3 tentes, 1 roulotte), numérotés, avec capacité et liste des invités par lit. Les emplacements non attribués (Tipi 7, Tente 8, Tente 10) restent affichés avec la mention « Emplacement non attribué pour le moment » afin de montrer le plan complet.

## Style

- Réutilise les variables CSS existantes (`--cream`, `--sage-dark`, `--gold`, `--ink`, etc.).
- Numéros d'emplacement en serif avec surtitre du type (TIPI / TENTE / ROULOTTE).
- Pastilles de lit (Double 1, Simple 1, Lit parapluie…) : petit fond clair, texte sauge.
- Responsive : liste en une colonne, adaptée mobile.

## Navigation

- `index.html` : nav « Cérémonie · Réception · Déroulé · Accès · Infos · Nuit » ; « Nuit » → `accommodations.html`. L'encart Infos « Hébergement » devient un lien vers la page.
- `guest.html` : lien « Où dormir » avec sous-titre « Tipis, tentes et roulotte » → la page.

## Vérification

Site statique — aucune suite de tests. Vérification manuelle : ouvrir les 3 pages, contrôler le rendu, les liens et la carte.