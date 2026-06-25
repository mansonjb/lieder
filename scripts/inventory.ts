// Inventaire structure du site (transcription du brief §7), bilingue FR/EN.
// Source de verite editoriale : `npm run gen` le compile en lib/registry.generated.ts.
//
// Convention : `slugFr` est le chemin FR complet (sans locale) ET la cle stable de la page.
// `slugEn` est le chemin EN complet. Les noms propres (communes, plages) ont le meme slug
// dans les deux langues ; seuls les segments thematiques sont traduits.

import type { Geo, Intent, Silo, Template } from "@/lib/types";

export type Raw = {
  slugFr: string;
  slugEn: string;
  fr: string; // H1 / libelle FR
  en: string; // H1 / libelle EN
  silo: Silo;
  template: Template;
  intent: Intent;
  stay22?: boolean;
  geo?: Geo;
  parent?: string; // cle (slugFr) du pilier
  related?: string[]; // cles additionnelles (le maillage auto complete)
  year?: boolean;
  priority?: number;
  titleFr?: string;
  titleEn?: string;
  mapLabel?: { fr: string; en: string };
};

export const ISLAND: Geo = { lat: 46.198, lng: -1.42, zoom: 11 };

// --- Communes (10) ------------------------------------------------------
export const COMMUNES: { slug: string; name: string; geo: Geo }[] = [
  { slug: "rivedoux-plage", name: "Rivedoux-Plage", geo: { lat: 46.158, lng: -1.278, zoom: 14 } },
  { slug: "sainte-marie-de-re", name: "Sainte-Marie-de-Ré", geo: { lat: 46.151, lng: -1.312, zoom: 14 } },
  { slug: "la-flotte", name: "La Flotte", geo: { lat: 46.19, lng: -1.327, zoom: 14 } },
  { slug: "saint-martin-de-re", name: "Saint-Martin-de-Ré", geo: { lat: 46.203, lng: -1.366, zoom: 14 } },
  { slug: "le-bois-plage-en-re", name: "Le Bois-Plage-en-Ré", geo: { lat: 46.178, lng: -1.385, zoom: 14 } },
  { slug: "la-couarde-sur-mer", name: "La Couarde-sur-Mer", geo: { lat: 46.196, lng: -1.434, zoom: 14 } },
  { slug: "loix", name: "Loix", geo: { lat: 46.224, lng: -1.443, zoom: 14 } },
  { slug: "ars-en-re", name: "Ars-en-Ré", geo: { lat: 46.205, lng: -1.518, zoom: 14 } },
  { slug: "saint-clement-des-baleines", name: "Saint-Clément-des-Baleines", geo: { lat: 46.236, lng: -1.553, zoom: 14 } },
  { slug: "les-portes-en-re", name: "Les Portes-en-Ré", geo: { lat: 46.251, lng: -1.586, zoom: 14 } },
];

// Sous-pages par commune : [segFr, segEn, template, intent, stay22, titleFr, titleEn]
const VILLAGE_SUBPAGES: [string, string, Template, Intent, boolean, string, string][] = [
  ["que-faire", "things-to-do", "activite", "informationnel", false, "Que faire à", "Things to do in"],
  ["ou-dormir", "where-to-stay", "ou-dormir", "transactionnel", true, "Où dormir à", "Where to stay in"],
  ["restaurants", "restaurants", "restaurant", "informationnel", false, "Où manger à", "Restaurants in"],
  ["plages", "beaches", "plage", "informationnel", true, "Les plages de", "The beaches of"],
];

// --- Plages individuelles (~28) ----------------------------------------
export const BEACHES: { slug: string; name: string; geo: Geo }[] = [
  { slug: "sablanceaux", name: "Sablanceaux", geo: { lat: 46.152, lng: -1.262, zoom: 15 } },
  { slug: "rivedoux-nord", name: "Rivedoux Nord", geo: { lat: 46.163, lng: -1.282, zoom: 15 } },
  { slug: "rivedoux-sud", name: "Rivedoux Sud", geo: { lat: 46.154, lng: -1.272, zoom: 15 } },
  { slug: "les-grenettes", name: "Les Grenettes", geo: { lat: 46.146, lng: -1.345, zoom: 15 } },
  { slug: "la-cible", name: "La Cible", geo: { lat: 46.198, lng: -1.358, zoom: 15 } },
  { slug: "arnerault", name: "L'Arnérault", geo: { lat: 46.186, lng: -1.323, zoom: 15 } },
  { slug: "la-clouse", name: "La Clouse", geo: { lat: 46.149, lng: -1.33, zoom: 15 } },
  { slug: "les-gollandieres", name: "Les Gollandières", geo: { lat: 46.172, lng: -1.395, zoom: 15 } },
  { slug: "le-gros-jonc", name: "Le Gros Jonc", geo: { lat: 46.164, lng: -1.39, zoom: 15 } },
  { slug: "le-petit-sergent", name: "Le Petit Sergent", geo: { lat: 46.168, lng: -1.38, zoom: 15 } },
  { slug: "le-peu-ragot", name: "Le Peu Ragot", geo: { lat: 46.189, lng: -1.446, zoom: 15 } },
  { slug: "les-prises", name: "Les Prises", geo: { lat: 46.185, lng: -1.44, zoom: 15 } },
  { slug: "la-pergola", name: "La Pergola", geo: { lat: 46.188, lng: -1.45, zoom: 15 } },
  { slug: "la-benaie", name: "La Bénaie", geo: { lat: 46.205, lng: -1.46, zoom: 15 } },
  { slug: "le-goisil", name: "Le Goisil", geo: { lat: 46.195, lng: -1.42, zoom: 15 } },
  { slug: "le-grouin", name: "Le Grouin (Loix)", geo: { lat: 46.225, lng: -1.43, zoom: 15 } },
  { slug: "la-conche-des-baleines", name: "La Conche des Baleines", geo: { lat: 46.24, lng: -1.56, zoom: 15 } },
  { slug: "le-lizay", name: "Le Lizay", geo: { lat: 46.245, lng: -1.57, zoom: 15 } },
  { slug: "trousse-chemise", name: "Trousse-Chemise", geo: { lat: 46.255, lng: -1.6, zoom: 15 } },
  { slug: "gros-jonc-les-portes", name: "Gros Jonc (Les Portes)", geo: { lat: 46.25, lng: -1.59, zoom: 15 } },
  { slug: "la-patache", name: "La Patache", geo: { lat: 46.25, lng: -1.58, zoom: 15 } },
  { slug: "le-petit-bec", name: "Le Petit Bec", geo: { lat: 46.248, lng: -1.575, zoom: 15 } },
  { slug: "le-marchais", name: "Le Marchais", geo: { lat: 46.23, lng: -1.54, zoom: 15 } },
  { slug: "la-redoute", name: "La Redoute", geo: { lat: 46.215, lng: -1.51, zoom: 15 } },
  { slug: "la-salee", name: "La Salée", geo: { lat: 46.21, lng: -1.49, zoom: 15 } },
  { slug: "la-loge", name: "La Loge", geo: { lat: 46.2, lng: -1.47, zoom: 15 } },
  { slug: "le-boutillon", name: "Le Boutillon", geo: { lat: 46.205, lng: -1.455, zoom: 15 } },
  { slug: "plage-du-phare", name: "La Plage du Phare", geo: { lat: 46.245, lng: -1.565, zoom: 15 } },
];

// --- Mois (12) ----------------------------------------------------------
export const MONTHS: { fr: string; en: string; frName: string; enName: string }[] = [
  { fr: "janvier", en: "january", frName: "janvier", enName: "January" },
  { fr: "fevrier", en: "february", frName: "février", enName: "February" },
  { fr: "mars", en: "march", frName: "mars", enName: "March" },
  { fr: "avril", en: "april", frName: "avril", enName: "April" },
  { fr: "mai", en: "may", frName: "mai", enName: "May" },
  { fr: "juin", en: "june", frName: "juin", enName: "June" },
  { fr: "juillet", en: "july", frName: "juillet", enName: "July" },
  { fr: "aout", en: "august", frName: "août", enName: "August" },
  { fr: "septembre", en: "september", frName: "septembre", enName: "September" },
  { fr: "octobre", en: "october", frName: "octobre", enName: "October" },
  { fr: "novembre", en: "november", frName: "novembre", enName: "November" },
  { fr: "decembre", en: "december", frName: "décembre", enName: "December" },
];

// --- Piliers (hubs de silo) --------------------------------------------
export const PILLARS: Raw[] = [
  { slugFr: "", slugEn: "", fr: "Guide de l'Île de Ré", en: "Île de Ré travel guide", silo: "home", template: "home", intent: "navigation", stay22: false, geo: ISLAND, priority: 1 },
  { slugFr: "villages", slugEn: "villages", fr: "Les 10 villages de l'Île de Ré", en: "The 10 villages of Île de Ré", silo: "villages", template: "pillar", intent: "informationnel", geo: ISLAND, priority: 0.9 },
  { slugFr: "plages", slugEn: "beaches", fr: "Les plus belles plages de l'Île de Ré", en: "The best beaches of Île de Ré", silo: "plages", template: "pillar", intent: "informationnel", stay22: true, geo: ISLAND, priority: 0.9 },
  { slugFr: "ou-dormir", slugEn: "where-to-stay", fr: "Où dormir sur l'Île de Ré : le guide complet", en: "Where to stay on Île de Ré: the complete guide", silo: "ou-dormir", template: "ou-dormir", intent: "transactionnel", stay22: true, geo: ISLAND, priority: 0.95 },
  { slugFr: "ou-dormir-mariage", slugEn: "weddings", fr: "Se marier et loger ses invités sur l'Île de Ré", en: "Weddings on Île de Ré: venues and where to stay", silo: "ou-dormir-mariage", template: "ou-dormir", intent: "transactionnel", stay22: true, geo: ISLAND, priority: 0.7 },
  { slugFr: "que-faire", slugEn: "things-to-do", fr: "Que faire sur l'Île de Ré", en: "Things to do on Île de Ré", silo: "que-faire", template: "pillar", intent: "informationnel", geo: ISLAND, priority: 0.9 },
  { slugFr: "restaurants", slugEn: "restaurants", fr: "Où manger sur l'Île de Ré", en: "Where to eat on Île de Ré", silo: "restaurants", template: "pillar", intent: "informationnel", geo: ISLAND, priority: 0.85 },
  { slugFr: "quand-venir", slugEn: "when-to-go", fr: "Quand partir sur l'Île de Ré", en: "When to visit Île de Ré", silo: "quand-venir", template: "quand-venir", intent: "saisonnier", stay22: true, geo: ISLAND, priority: 0.85 },
  { slugFr: "sejour", slugEn: "itineraries", fr: "Combien de temps rester sur l'Île de Ré", en: "How long to stay on Île de Ré", silo: "sejour", template: "sejour", intent: "comparatif", stay22: true, geo: ISLAND, priority: 0.8 },
  { slugFr: "preparer", slugEn: "plan-your-trip", fr: "Préparer son séjour sur l'Île de Ré", en: "Plan your trip to Île de Ré", silo: "preparer", template: "pillar", intent: "informationnel", geo: ISLAND, priority: 0.8 },
  { slugFr: "comparatifs", slugEn: "comparisons", fr: "Bien choisir : nos comparatifs Île de Ré", en: "Make the right call: our Île de Ré comparisons", silo: "comparatifs", template: "pillar", intent: "comparatif", geo: ISLAND, priority: 0.7 },
];

// --- Silo C : Où dormir (types + comparatifs) --------------------------
// [segFr, segEn, fr, en, stay22, template, intent]
const OU_DORMIR_TYPES: [string, string, string, string][] = [
  ["hotels", "hotels", "Meilleurs hôtels de l'île", "The best hotels on the island"],
  ["hotels-bord-de-mer", "seafront-hotels", "Hôtels les pieds dans l'eau", "Seafront hotels"],
  ["hotels-avec-piscine", "hotels-with-pool", "Hôtels avec piscine", "Hotels with a pool"],
  ["hotels-spa", "spa-hotels", "Hôtels avec spa", "Spa hotels"],
  ["hotels-de-charme", "boutique-hotels", "Hôtels de charme", "Boutique hotels"],
  ["hotels-luxe", "luxury-hotels", "Hôtels haut de gamme et 5 étoiles", "Luxury and 5-star hotels"],
  ["hotels-pas-cher", "cheap-hotels", "Dormir pas cher sur l'Île de Ré", "Cheap places to stay"],
  ["hotels-romantiques", "romantic-hotels", "Hôtels romantiques", "Romantic hotels"],
  ["maisons-dhotes", "guesthouses", "Chambres et maisons d'hôtes", "Bed & breakfasts and guesthouses"],
  ["locations-vacances", "holiday-rentals", "Locations et villas", "Holiday rentals and villas"],
  ["campings", "campsites", "Campings de l'Île de Ré", "Campsites on Île de Ré"],
  ["glamping", "glamping", "Glamping et hébergements insolites", "Glamping and unusual stays"],
  ["avec-piscine-interieure", "indoor-pool", "Hébergements avec piscine chauffée ou couverte", "Stays with a heated or indoor pool"],
  ["en-famille", "family-stays", "Hébergements en famille", "Family-friendly stays"],
  ["animaux-acceptes", "pet-friendly", "Hébergements qui acceptent les chiens", "Pet-friendly stays"],
  ["proche-plage", "near-the-beach", "Dormir au plus près de la plage", "Stay closest to the beach"],
  ["proche-port", "near-the-harbour", "Dormir près d'un port", "Stay near a harbour"],
  ["sans-voiture", "car-free", "Dormir sans voiture (vélo et bus)", "Car-free stays (bike & bus)"],
];

const OU_DORMIR_COMPARATIFS: [string, string, string, string][] = [
  ["comparatifs/quel-village-pour-dormir", "comparisons/which-village-to-stay-in", "Quel village choisir pour dormir", "Which village to stay in"],
  ["comparatifs/premiere-fois", "comparisons/first-visit", "Où loger pour une première visite", "Where to stay on a first visit"],
  ["comparatifs/saint-martin-ou-la-flotte", "comparisons/saint-martin-or-la-flotte", "Saint-Martin ou La Flotte ?", "Saint-Martin or La Flotte?"],
  ["comparatifs/nord-ou-sud", "comparisons/north-or-south", "Nord ou sud de l'île ?", "North or south of the island?"],
];

// --- Silo D : Occasions -------------------------------------------------
const MARIAGE_PAGES: [string, string, string, string][] = [
  ["ou-dormir-mariage/salles-reception", "weddings/reception-venues", "Salles et domaines de réception", "Reception venues and estates"],
  ["ou-dormir-mariage/hotels-pour-invites", "weddings/hotels-for-guests", "Hôtels pour héberger ses invités", "Hotels to house your guests"],
  ["ou-dormir-mariage/lieux-avec-hebergement", "weddings/venues-with-accommodation", "Lieux de mariage avec hébergement sur place", "Wedding venues with on-site accommodation"],
  ["ou-dormir-mariage/petit-mariage-intime", "weddings/intimate-weddings", "Se marier en petit comité", "Small intimate weddings"],
];
const MARIAGE_VILLAGES = ["saint-martin-de-re", "la-flotte", "ars-en-re", "le-bois-plage-en-re", "loix", "les-portes-en-re"];

const OCCASIONS: [string, string, string, string][] = [
  ["ou-dormir/lune-de-miel", "where-to-stay/honeymoon", "Lune de miel sur l'Île de Ré", "Honeymoon on Île de Ré"],
  ["ou-dormir/week-end-amoureux", "where-to-stay/romantic-weekend", "Week-end en amoureux", "Romantic weekend"],
  ["ou-dormir/evjf", "where-to-stay/hen-party", "EVJF sur l'Île de Ré", "Hen party on Île de Ré"],
  ["ou-dormir/evg", "where-to-stay/stag-party", "EVG sur l'Île de Ré", "Stag party on Île de Ré"],
  ["ou-dormir/anniversaire", "where-to-stay/birthday", "Fêter un anniversaire", "Celebrate a birthday"],
  ["ou-dormir/seminaire-entreprise", "where-to-stay/corporate-retreat", "Séminaire et team building", "Corporate retreats & team building"],
  ["ou-dormir/grand-groupe", "where-to-stay/large-group", "Hébergement pour grand groupe", "Stays for a large group"],
  ["ou-dormir/reunion-famille", "where-to-stay/family-reunion", "Réunion de famille et grande tablée", "Family reunions"],
];

// --- Silo E : Que faire / Activités -------------------------------------
// [segFr, segEn, fr, en, stay22, geo?]
const ACTIVITIES: [string, string, string, string, boolean, Geo?][] = [
  ["incontournables", "highlights", "Les incontournables de l'Île de Ré", "Île de Ré highlights", false],
  ["velo", "cycling", "Faire du vélo sur l'Île de Ré", "Cycling on Île de Ré", false],
  ["location-velo", "bike-rental", "Où louer un vélo", "Where to rent a bike", false],
  ["phare-des-baleines", "baleines-lighthouse", "Visiter le Phare des Baleines", "Visiting the Phare des Baleines", true, { lat: 46.245, lng: -1.567, zoom: 14 }],
  ["marais-salants", "salt-marshes", "Découvrir les marais salants", "Discover the salt marshes", false, { lat: 46.22, lng: -1.46, zoom: 13 }],
  ["ecomusee-marais-salant", "salt-marsh-ecomuseum", "Écomusée du Marais Salant (Loix)", "Salt Marsh Ecomuseum (Loix)", false, { lat: 46.224, lng: -1.443, zoom: 14 }],
  ["reserve-lilleau-des-niges", "lilleau-des-niges-reserve", "Réserve naturelle de Lilleau des Niges", "Lilleau des Niges nature reserve", false, { lat: 46.248, lng: -1.578, zoom: 14 }],
  ["fortifications-vauban", "vauban-fortifications", "Les fortifications de Vauban (Saint-Martin)", "Vauban's fortifications (Saint-Martin)", false, { lat: 46.203, lng: -1.366, zoom: 14 }],
  ["abbaye-des-chateliers", "chateliers-abbey", "L'abbaye des Châteliers", "The Châteliers Abbey", false, { lat: 46.182, lng: -1.32, zoom: 14 }],
  ["fort-de-la-pree", "fort-de-la-pree", "Le Fort de La Prée", "Fort de La Prée", false, { lat: 46.177, lng: -1.315, zoom: 14 }],
  ["musee-ernest-cognacq", "ernest-cognacq-museum", "Le musée Ernest Cognacq", "The Ernest Cognacq Museum", false, { lat: 46.202, lng: -1.366, zoom: 15 }],
  ["degustation-huitres", "oyster-tasting", "Déguster des huîtres (cabanes)", "Oyster tasting at the shacks", true, { lat: 46.224, lng: -1.443, zoom: 13 }],
  ["degustation-vin", "wine-tasting", "Vins et Pineau de l'île", "Island wines and Pineau", false],
  ["marches", "markets", "Les marchés de l'Île de Ré", "The markets of Île de Ré", false],
  ["surf", "surfing", "Surf : spots et écoles", "Surfing: spots and schools", true, { lat: 46.146, lng: -1.345, zoom: 13 }],
  ["kitesurf", "kitesurfing", "Kitesurf sur l'Île de Ré", "Kitesurfing on Île de Ré", false],
  ["paddle", "paddleboarding", "Stand up paddle", "Stand-up paddleboarding", false],
  ["voile-catamaran", "sailing", "Voile et catamaran", "Sailing and catamaran", false],
  ["kayak", "kayaking", "Kayak de mer", "Sea kayaking", false],
  ["peche-a-pied", "shellfish-foraging", "Pêche à pied (règles et spots)", "Shellfish foraging (rules & spots)", false],
  ["randonnee", "hiking", "Randonnées et sentiers", "Hikes and trails", false],
  ["observation-oiseaux", "birdwatching", "Observation des oiseaux", "Birdwatching", false],
  ["fort-boyard-croisiere", "fort-boyard-cruise", "Croisière vers Fort Boyard", "Cruise to Fort Boyard", true],
  ["excursion-ile-daix", "ile-daix-day-trip", "Excursion à l'Île d'Aix", "Day trip to Île d'Aix", false],
  ["en-famille", "with-kids", "Que faire en famille", "Things to do with kids", true],
  ["avec-enfants-en-bas-age", "with-toddlers", "Avec des tout-petits", "With toddlers", false],
  ["en-couple", "for-couples", "Que faire en couple", "Things to do as a couple", true],
  ["par-temps-de-pluie", "rainy-day", "Que faire quand il pleut", "What to do when it rains", false],
  ["gratuit", "free", "Activités gratuites", "Free things to do", false],
  ["un-jour", "in-one-day", "L'Île de Ré en une journée", "Île de Ré in one day", false],
  ["insolite", "offbeat", "Activités insolites", "Offbeat activities", false],
];

const VELO_ITINERAIRES: [string, string, string, string][] = [
  ["pont-loix", "bridge-to-loix", "Du pont à Loix par les marais", "From the bridge to Loix via the marshes"],
  ["marais-salants", "salt-marshes-loop", "La boucle des marais salants", "The salt marshes loop"],
  ["tour-de-l-ile", "island-loop", "Le tour de l'île à vélo", "The full island loop by bike"],
  ["sud-plages", "southern-beaches", "Les plages du sud à vélo", "The southern beaches by bike"],
  ["nord-phare", "north-to-the-lighthouse", "Du nord au Phare des Baleines", "North to the Phare des Baleines"],
];

// --- Silo F : Restaurants / Gastronomie ---------------------------------
const RESTO_TYPES: [string, string, string, string, boolean][] = [
  ["restaurants/fruits-de-mer", "restaurants/seafood", "Fruits de mer et plateaux", "Seafood and platters", false],
  ["restaurants/cabanes-a-huitres", "restaurants/oyster-shacks", "Cabanes à huîtres", "Oyster shacks", false],
  ["restaurants/pieds-dans-le-sable", "restaurants/on-the-beach", "Restaurants les pieds dans le sable", "Restaurants on the beach", true],
  ["restaurants/gastronomiques", "restaurants/fine-dining", "Tables gastronomiques", "Fine-dining tables", false],
  ["restaurants/avec-vue-mer", "restaurants/sea-view", "Restaurants avec vue mer", "Restaurants with a sea view", false],
  ["restaurants/creperies", "restaurants/creperies", "Crêperies de l'île", "Creperies on the island", false],
  ["restaurants/glaciers", "restaurants/ice-cream", "Glaciers (glace à la fleur de sel)", "Ice-cream parlours (fleur de sel)", false],
  ["restaurants/bons-plans", "restaurants/budget-eats", "Bien manger pas cher", "Eat well on a budget", false],
  ["restaurants/romantiques", "restaurants/romantic", "Restaurants romantiques", "Romantic restaurants", false],
];
const GASTRONOMIE: [string, string, string, string][] = [
  ["gastronomie/specialites", "food/specialities", "Les spécialités de l'île à goûter", "Island specialities to taste"],
  ["gastronomie/huitres", "food/oysters", "Tout sur les huîtres de Ré", "Everything about Ré oysters"],
  ["gastronomie/fleur-de-sel", "food/fleur-de-sel", "La fleur de sel de Ré", "The fleur de sel of Ré"],
  ["gastronomie/pommes-de-terre-aop", "food/ile-de-re-potatoes", "La pomme de terre AOP de Ré", "The AOP potato of Ré"],
];

// --- Silo G : Quand venir (saisons, divers, annualise) ------------------
const SEASONS: [string, string, string, string, boolean][] = [
  ["printemps", "spring", "L'Île de Ré au printemps", "Île de Ré in spring", true],
  ["ete", "summer", "L'Île de Ré en été", "Île de Ré in summer", true],
  ["automne", "autumn", "L'Île de Ré en automne", "Île de Ré in autumn", true],
  ["hiver", "winter", "L'Île de Ré en hiver", "Île de Ré in winter", false],
];
const QUAND_DIVERS: [string, string, string, string, boolean][] = [
  ["temperature-eau", "sea-temperature", "Température de l'eau mois par mois", "Sea temperature month by month", false],
  ["meteo", "weather", "Climat et météo de l'Île de Ré", "Île de Ré climate and weather", false],
  ["hors-saison", "off-season", "Visiter l'Île de Ré hors saison", "Visiting Île de Ré off-season", true],
  ["eviter-la-foule", "avoid-the-crowds", "Éviter l'affluence", "Avoiding the crowds", false],
  ["se-baigner", "swimming-season", "Quand peut-on se baigner", "When can you swim", false],
  ["ponts-week-ends", "long-weekends", "Meilleurs ponts et longs week-ends", "Best long weekends", true],
  ["vacances-scolaires", "school-holidays", "L'Île de Ré pendant les vacances scolaires", "Île de Ré during school holidays", true],
];
const YEAR_PAGES: [string, string, string, string, Silo, Template][] = [
  ["quand-venir/2026", "when-to-go/2026", "Que faire sur l'Île de Ré en 2026", "Things to do on Île de Ré in 2026", "quand-venir", "quand-venir"],
  ["quand-venir/2027", "when-to-go/2027", "Que faire sur l'Île de Ré en 2027", "Things to do on Île de Ré in 2027", "quand-venir", "quand-venir"],
  ["quand-venir/ete-2026", "when-to-go/summer-2026", "Été 2026 sur l'Île de Ré : météo, prix, réserver", "Summer 2026 on Île de Ré", "quand-venir", "quand-venir"],
  ["quand-venir/ete-2027", "when-to-go/summer-2027", "Été 2027 sur l'Île de Ré", "Summer 2027 on Île de Ré", "quand-venir", "quand-venir"],
  ["evenements/2026", "events/2026", "Agenda et événements 2026", "Events and what's on in 2026", "evenements", "guide"],
  ["evenements/2027", "events/2027", "Agenda et événements 2027", "Events and what's on in 2027", "evenements", "guide"],
  ["ou-dormir/ete-2026", "where-to-stay/summer-2026", "Où dormir l'été 2026 (réserver tôt)", "Where to stay in summer 2026", "ou-dormir", "ou-dormir"],
  ["ou-dormir/ete-2027", "where-to-stay/summer-2027", "Où dormir l'été 2027", "Where to stay in summer 2027", "ou-dormir", "ou-dormir"],
];

// --- Silo H : Séjour / itinéraires --------------------------------------
const SEJOUR: [string, string, string, string, boolean][] = [
  ["week-end", "weekend", "Un week-end sur l'Île de Ré", "A weekend on Île de Ré", true],
  ["2-jours", "2-days", "Île de Ré en 2 jours", "Île de Ré in 2 days", true],
  ["3-jours", "3-days", "Île de Ré en 3 jours", "Île de Ré in 3 days", true],
  ["4-jours", "4-days", "Île de Ré en 4 jours", "Île de Ré in 4 days", true],
  ["5-jours", "5-days", "Île de Ré en 5 jours", "Île de Ré in 5 days", true],
  ["une-semaine", "one-week", "Une semaine sur l'Île de Ré", "One week on Île de Ré", true],
  ["10-jours", "10-days", "10 jours sur l'Île de Ré", "10 days on Île de Ré", true],
  ["une-journee", "day-trip", "Une journée depuis La Rochelle", "A day trip from La Rochelle", false],
  ["itineraire-velo-2-jours", "2-day-cycling-route", "Itinéraire vélo de 2 jours", "A 2-day cycling itinerary", true],
  ["itineraire-famille", "family-itinerary", "Itinéraire famille d'une semaine", "A one-week family itinerary", true],
  ["premiere-visite", "first-visit", "Premier séjour : que voir en priorité", "First visit: what to see first", true],
  ["budget", "budget", "Budget pour un séjour sur l'Île de Ré", "Budget for a trip to Île de Ré", false],
  ["hors-saison-week-end", "off-season-weekend", "Week-end hors saison", "An off-season weekend", true],
];

// --- Silo I : Préparer --------------------------------------------------
const PREPARER: [string, string, string, string, boolean][] = [
  ["acces-pont", "bridge-access", "Accès et pont (péage, tarifs)", "Access and the bridge (toll, prices)", false],
  ["depuis-la-rochelle", "from-la-rochelle", "Aller sur l'Île de Ré depuis La Rochelle", "Getting to Île de Ré from La Rochelle", false],
  ["depuis-paris", "from-paris", "Y aller depuis Paris", "Getting there from Paris", false],
  ["en-train", "by-train", "Venir en train (gare de La Rochelle)", "Coming by train (La Rochelle station)", false],
  ["sans-voiture", "car-free", "Visiter l'Île de Ré sans voiture", "Visiting Île de Ré without a car", false],
  ["se-deplacer", "getting-around", "Se déplacer sur l'île", "Getting around the island", false],
  ["bus-navettes", "buses", "Bus et navettes", "Buses and shuttles", false],
  ["parking", "parking", "Où se garer sur l'Île de Ré", "Where to park on Île de Ré", false],
  ["avec-chien", "with-a-dog", "Partir sur l'Île de Ré avec son chien", "Île de Ré with your dog", true],
  ["avec-bebe", "with-a-baby", "Partir avec un bébé", "Travelling with a baby", false],
  ["pmr-accessibilite", "accessibility", "Accessibilité PMR", "Accessibility (reduced mobility)", false],
  ["budget-vacances", "trip-budget", "Budget vacances sur l'Île de Ré", "Holiday budget for Île de Ré", false],
  ["que-mettre-dans-la-valise", "what-to-pack", "Quoi emporter dans sa valise", "What to pack", false],
  ["meteo-marees-app", "weather-and-tides-apps", "Apps utiles (marées, météo)", "Useful apps (tides, weather)", false],
  ["faq", "faq", "Questions fréquentes sur l'Île de Ré", "Île de Ré FAQ", false],
  ["carte-de-lile", "island-map", "Carte interactive de l'Île de Ré", "Interactive map of Île de Ré", true],
  ["glossaire-retais", "glossary", "Petit lexique rétais", "A little Ré glossary", false],
];

// --- Silo J : Comparatifs -----------------------------------------------
const COMPARATIFS: [string, string, string, string, boolean][] = [
  ["comparatifs/re-vs-oleron", "comparisons/re-vs-oleron", "Île de Ré ou Oléron ?", "Île de Ré or Oléron?", true],
  ["comparatifs/re-vs-noirmoutier", "comparisons/re-vs-noirmoutier", "Ré ou Noirmoutier ?", "Ré or Noirmoutier?", true],
  ["comparatifs/re-vs-yeu", "comparisons/re-vs-yeu", "Ré ou l'Île d'Yeu ?", "Ré or Île d'Yeu?", false],
  ["comparatifs/quel-village-choisir", "comparisons/which-village-to-choose", "Quel village choisir selon son profil", "Which village suits you", true],
  ["comparatifs/nord-ou-sud-ile", "comparisons/north-or-south", "Nord ou sud de l'île ?", "North or south of the island?", true],
  ["comparatifs/famille-vs-couple", "comparisons/family-vs-couple", "Où séjourner selon son profil", "Where to stay by traveller type", true],
  ["comparatifs/le-plus-beau-village", "comparisons/prettiest-village", "Le plus beau village de Ré", "The prettiest village on Ré", false],
  ["comparatifs/ile-de-re-en-vaut-la-peine", "comparisons/is-it-worth-it", "L'Île de Ré vaut-elle le coup ?", "Is Île de Ré worth it?", false],
  ["comparatifs/le-plus-calme", "comparisons/quietest-spot", "Le coin le plus calme de l'île", "The quietest spot on the island", true],
  ["comparatifs/le-plus-anime", "comparisons/liveliest-spot", "Le coin le plus animé de l'île", "The liveliest spot on the island", true],
];

// --- Plages thématiques -------------------------------------------------
const BEACH_THEMES: [string, string, string, string, boolean][] = [
  ["familiales", "family", "Plages familiales de l'Île de Ré", "Family beaches on Île de Ré", true],
  ["surveillees", "lifeguarded", "Plages surveillées (juillet-août)", "Lifeguarded beaches (July-August)", false],
  ["sauvages", "wild", "Plages sauvages et nature", "Wild and natural beaches", false],
  ["surf", "surfing", "Spots de surf", "Surf spots", false],
  ["kitesurf-windsurf", "kitesurf-windsurf", "Spots de kite et windsurf", "Kite and windsurf spots", false],
  ["peche-a-pied", "shellfish-foraging", "Meilleures plages pour la pêche à pied", "Best beaches for shellfish foraging", false],
  ["chien-autorise", "dog-friendly", "Plages où les chiens sont admis", "Dog-friendly beaches", false],
  ["nudistes", "naturist", "Plages naturistes", "Naturist beaches", false],
  ["coucher-de-soleil", "sunset", "Meilleures plages au coucher du soleil", "Best beaches for sunset", false],
  ["marees-horaires", "tides", "Marées et estran : comprendre avant d'y aller", "Tides and foreshore: what to know", false],
  ["accessibles-pmr", "accessible", "Plages accessibles (tiralos / PMR)", "Accessible beaches (beach wheelchairs)", false],
];

// --- Pages utilitaires / legal -----------------------------------------
const LEGAL: [string, string, string, string, Template][] = [
  ["a-propos", "about", "À propos", "About", "legal"],
  ["affiliation", "affiliate-disclosure", "Affiliation et transparence", "Affiliate disclosure", "legal"],
  ["confidentialite", "privacy", "Politique de confidentialité", "Privacy policy", "legal"],
  ["mentions-legales", "legal-notice", "Mentions légales", "Legal notice", "legal"],
];

// =======================================================================
// Expansion -> RAW_PAGES
// =======================================================================
function buildRaw(): Raw[] {
  const pages: Raw[] = [...PILLARS];

  // Silo A : villages
  for (const c of COMMUNES) {
    pages.push({
      slugFr: `villages/${c.slug}`,
      slugEn: `villages/${c.slug}`,
      fr: `Visiter ${c.name}`,
      en: `Visiting ${c.name}`,
      silo: "villages",
      template: "village",
      intent: "informationnel",
      stay22: true,
      geo: c.geo,
      mapLabel: { fr: c.name, en: c.name },
      parent: "villages",
      related: [`ou-dormir/${c.slug}`, `villages/${c.slug}/plages`, `villages/${c.slug}/restaurants`],
    });
    for (const [segFr, segEn, template, intent, stay22, tFr, tEn] of VILLAGE_SUBPAGES) {
      pages.push({
        slugFr: `villages/${c.slug}/${segFr}`,
        slugEn: `villages/${c.slug}/${segEn}`,
        fr: `${tFr} ${c.name}`,
        en: `${tEn} ${c.name}`,
        silo: "villages",
        template,
        intent,
        stay22,
        geo: c.geo,
        mapLabel: { fr: c.name, en: c.name },
        parent: `villages/${c.slug}`,
        related: [`villages/${c.slug}`],
      });
    }
  }

  // Silo B : plages
  for (const [segFr, segEn, fr, en, stay22] of BEACH_THEMES) {
    pages.push({ slugFr: `plages/${segFr}`, slugEn: `beaches/${segEn}`, fr, en, silo: "plages", template: "plage", intent: "comparatif", stay22, geo: ISLAND, parent: "plages" });
  }
  for (const b of BEACHES) {
    pages.push({
      slugFr: `plages/${b.slug}`,
      slugEn: `beaches/${b.slug}`,
      fr: `Plage ${b.name}`,
      en: `${b.name} beach`,
      titleFr: `${b.name}, Île de Ré : accès, baignade, parking`,
      titleEn: `${b.name} beach, Île de Ré: access, swimming, parking`,
      silo: "plages",
      template: "plage",
      intent: "informationnel",
      stay22: true,
      geo: b.geo,
      mapLabel: { fr: b.name, en: b.name },
      parent: "plages",
    });
  }

  // Silo C : où dormir
  for (const c of COMMUNES) {
    pages.push({ slugFr: `ou-dormir/${c.slug}`, slugEn: `where-to-stay/${c.slug}`, fr: `Où dormir à ${c.name}`, en: `Where to stay in ${c.name}`, silo: "ou-dormir", template: "ou-dormir", intent: "transactionnel", stay22: true, geo: c.geo, mapLabel: { fr: c.name, en: c.name }, parent: "ou-dormir", related: [`villages/${c.slug}`] });
  }
  for (const [segFr, segEn, fr, en] of OU_DORMIR_TYPES) {
    pages.push({ slugFr: `ou-dormir/${segFr}`, slugEn: `where-to-stay/${segEn}`, fr, en, silo: "ou-dormir", template: "ou-dormir", intent: "comparatif", stay22: true, geo: ISLAND, parent: "ou-dormir" });
  }
  for (const [slugFr, slugEn, fr, en] of OU_DORMIR_COMPARATIFS) {
    pages.push({ slugFr: `ou-dormir/${slugFr}`, slugEn: `where-to-stay/${slugEn}`, fr, en, silo: "ou-dormir", template: "comparatif", intent: "comparatif", stay22: true, geo: ISLAND, parent: "ou-dormir" });
  }

  // Silo D : occasions
  for (const [slugFr, slugEn, fr, en] of MARIAGE_PAGES) {
    pages.push({ slugFr, slugEn, fr, en, silo: "ou-dormir-mariage", template: "comparatif", intent: "comparatif", stay22: true, geo: ISLAND, parent: "ou-dormir-mariage" });
  }
  for (const v of MARIAGE_VILLAGES) {
    const c = COMMUNES.find((x) => x.slug === v)!;
    pages.push({ slugFr: `ou-dormir-mariage/${v}`, slugEn: `weddings/${v}`, fr: `Se marier à ${c.name}`, en: `Getting married in ${c.name}`, silo: "ou-dormir-mariage", template: "ou-dormir", intent: "transactionnel", stay22: true, geo: c.geo, mapLabel: { fr: c.name, en: c.name }, parent: "ou-dormir-mariage" });
  }
  for (const [slugFr, slugEn, fr, en] of OCCASIONS) {
    pages.push({ slugFr, slugEn, fr, en, silo: "ou-dormir-mariage", template: "ou-dormir", intent: "transactionnel", stay22: true, geo: ISLAND, parent: "ou-dormir-mariage" });
  }

  // Silo E : que faire
  for (const [segFr, segEn, fr, en, stay22, geo] of ACTIVITIES) {
    pages.push({ slugFr: `que-faire/${segFr}`, slugEn: `things-to-do/${segEn}`, fr, en, silo: "que-faire", template: "activite", intent: "informationnel", stay22, geo: geo ?? ISLAND, parent: "que-faire" });
  }
  for (const [segFr, segEn, fr, en] of VELO_ITINERAIRES) {
    pages.push({ slugFr: `que-faire/velo/itineraires/${segFr}`, slugEn: `things-to-do/cycling/routes/${segEn}`, fr, en, silo: "que-faire", template: "sejour", intent: "informationnel", stay22: true, geo: ISLAND, parent: "que-faire/velo" });
  }

  // Silo F : restaurants + gastronomie
  for (const c of COMMUNES) {
    pages.push({ slugFr: `restaurants/${c.slug}`, slugEn: `restaurants/${c.slug}`, fr: `Où manger à ${c.name}`, en: `Restaurants in ${c.name}`, silo: "restaurants", template: "restaurant", intent: "informationnel", geo: c.geo, parent: "restaurants", related: [`villages/${c.slug}`] });
  }
  for (const [slugFr, slugEn, fr, en, stay22] of RESTO_TYPES) {
    pages.push({ slugFr, slugEn, fr, en, silo: "restaurants", template: "restaurant", intent: "informationnel", stay22, geo: ISLAND, parent: "restaurants" });
  }
  for (const [slugFr, slugEn, fr, en] of GASTRONOMIE) {
    pages.push({ slugFr, slugEn, fr, en, silo: "gastronomie", template: "guide", intent: "informationnel", parent: "restaurants" });
  }

  // Silo G : quand venir
  for (const m of MONTHS) {
    pages.push({ slugFr: `quand-venir/${m.fr}`, slugEn: `when-to-go/${m.en}`, fr: `L'Île de Ré en ${m.frName}`, en: `Île de Ré in ${m.enName}`, silo: "quand-venir", template: "quand-venir", intent: "saisonnier", stay22: true, geo: ISLAND, parent: "quand-venir" });
  }
  for (const [segFr, segEn, fr, en, stay22] of SEASONS) {
    pages.push({ slugFr: `quand-venir/${segFr}`, slugEn: `when-to-go/${segEn}`, fr, en, silo: "quand-venir", template: "quand-venir", intent: "saisonnier", stay22, geo: ISLAND, parent: "quand-venir" });
  }
  for (const [segFr, segEn, fr, en, stay22] of QUAND_DIVERS) {
    pages.push({ slugFr: `quand-venir/${segFr}`, slugEn: `when-to-go/${segEn}`, fr, en, silo: "quand-venir", template: "quand-venir", intent: "saisonnier", stay22, geo: ISLAND, parent: "quand-venir" });
  }
  for (const [slugFr, slugEn, fr, en, silo, template] of YEAR_PAGES) {
    pages.push({ slugFr, slugEn, fr, en, silo, template, intent: "saisonnier", stay22: !slugFr.startsWith("evenements"), geo: ISLAND, parent: silo === "evenements" ? "quand-venir" : silo === "ou-dormir" ? "ou-dormir" : "quand-venir", year: true });
  }

  // Silo H : séjour
  for (const [segFr, segEn, fr, en, stay22] of SEJOUR) {
    pages.push({ slugFr: `sejour/${segFr}`, slugEn: `itineraries/${segEn}`, fr, en, silo: "sejour", template: "sejour", intent: "comparatif", stay22, geo: ISLAND, parent: "sejour" });
  }

  // Silo I : préparer
  for (const [segFr, segEn, fr, en, stay22] of PREPARER) {
    pages.push({ slugFr: `preparer/${segFr}`, slugEn: `plan-your-trip/${segEn}`, fr, en, silo: "preparer", template: "guide", intent: "informationnel", stay22, geo: stay22 ? ISLAND : undefined, parent: "preparer" });
  }

  // Silo J : comparatifs
  for (const [slugFr, slugEn, fr, en, stay22] of COMPARATIFS) {
    pages.push({ slugFr, slugEn, fr, en, silo: "comparatifs", template: "comparatif", intent: "comparatif", stay22, geo: ISLAND, parent: "comparatifs" });
  }

  // Légal / utilitaires
  for (const [slugFr, slugEn, fr, en, template] of LEGAL) {
    pages.push({ slugFr, slugEn, fr, en, silo: "legal", template, intent: "navigation", priority: 0.2 });
  }

  return pages;
}

export const RAW_PAGES: Raw[] = buildRaw();
