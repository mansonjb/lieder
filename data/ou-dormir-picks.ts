export type OuDormirPick = {
  name: string;
  village: string;
  villageSlug: string;
  photoIndex: 0 | 1 | 2;
  imageUrl?: string;
  type: { fr: string; en: string };
  stars?: number;
  priceLevel: 1 | 2 | 3 | 4;
  features: { fr: string; en: string }[];
  stayAddress: string;
};

const TOIRAS: OuDormirPick = {
  name: "Hôtel de Toiras",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  type: { fr: "Hôtel 5★ Relais & Châteaux", en: "5★ Relais & Châteaux hotel" },
  stars: 5,
  priceLevel: 4,
  features: [
    { fr: "Piscine intérieure & spa", en: "Indoor pool & spa" },
    { fr: "Vue sur les remparts", en: "Rampart views" },
    { fr: "Restaurant gastronomique", en: "Gourmet restaurant" },
  ],
  stayAddress: "Hôtel de Toiras, Saint-Martin-de-Ré, Île de Ré",
};

const ATELIERS_IMAGE: OuDormirPick = {
  name: "Les Ateliers de l'Image",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  type: { fr: "Hôtel boutique 4★", en: "4★ boutique hotel" },
  stars: 4,
  priceLevel: 4,
  features: [
    { fr: "Galerie photo & ateliers créatifs", en: "Photo gallery & creative workshops" },
    { fr: "Piscine chauffée & jardin", en: "Heated pool & garden" },
    { fr: "Centre historique à pied", en: "Historic centre on foot" },
  ],
  stayAddress: "Les Ateliers de l'Image, Saint-Martin-de-Ré, Île de Ré",
};

const BARONNIE: OuDormirPick = {
  name: "La Baronnie Hôtel & Spa",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  type: { fr: "Hôtel spa 4★", en: "4★ spa hotel" },
  stars: 4,
  priceLevel: 4,
  features: [
    { fr: "Spa privatif & hammam", en: "Private spa & hammam" },
    { fr: "Suite romanesque avec terrasse", en: "Romantic suite with terrace" },
    { fr: "Petit-déjeuner bio maison", en: "Homemade organic breakfast" },
  ],
  stayAddress: "La Baronnie Hôtel Spa, Saint-Martin-de-Ré, Île de Ré",
};

const RICHELIEU: OuDormirPick = {
  name: "Hôtel Le Richelieu",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 0,
  type: { fr: "Hôtel bord de mer 4★", en: "4★ seafront hotel" },
  stars: 4,
  priceLevel: 3,
  features: [
    { fr: "Face à la plage de La Cible", en: "Facing La Cible beach" },
    { fr: "Restaurant fruits de mer", en: "Seafood restaurant" },
    { fr: "Piscine & spa", en: "Pool & spa" },
  ],
  stayAddress: "Hôtel Le Richelieu, La Flotte-en-Ré, Île de Ré",
};

const VILLA_RHEA: OuDormirPick = {
  name: "La Villa Rhéa",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 1,
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Suites avec terrasse privée", en: "Suites with private terrace" },
    { fr: "Jardin planté à 200m de la plage", en: "Garden 200m from the beach" },
    { fr: "Petit-déjeuner fait maison", en: "Homemade breakfast" },
  ],
  stayAddress: "La Villa Rhéa, La Flotte, Île de Ré",
};

const SENECHAL: OuDormirPick = {
  name: "Hôtel Le Sénéchal",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 0,
  type: { fr: "Hôtel logis 3★", en: "3★ logis hotel" },
  stars: 3,
  priceLevel: 3,
  features: [
    { fr: "Cour intérieure fleurie", en: "Flower-filled courtyard" },
    { fr: "À deux pas du port d'Ars", en: "Steps from Ars harbour" },
    { fr: "Piscine & vélos en prêt", en: "Pool & free bike loan" },
  ],
  stayAddress: "Hôtel Le Sénéchal, Ars-en-Ré, Île de Ré",
};

const MARTRAY: OuDormirPick = {
  name: "Hôtel du Martray",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 1,
  type: { fr: "Hôtel de charme 3★", en: "3★ charming hotel" },
  stars: 3,
  priceLevel: 3,
  features: [
    { fr: "Terrasse face aux marais salants", en: "Terrace overlooking salt marshes" },
    { fr: "Cuisine locale & vins régionaux", en: "Local cuisine & regional wines" },
    { fr: "Vélos électriques disponibles", en: "Electric bikes available" },
  ],
  stayAddress: "Hôtel du Martray, Ars-en-Ré, Île de Ré",
};

const OCEAN_BOIS: OuDormirPick = {
  name: "Hôtel L'Océan",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 2,
  type: { fr: "Hôtel 2★", en: "2★ hotel" },
  stars: 2,
  priceLevel: 2,
  features: [
    { fr: "100m de la plage du Bois", en: "100m from Le Bois beach" },
    { fr: "Tarifs accessibles toute l'année", en: "Affordable rates year-round" },
    { fr: "Piste cyclable au pied", en: "Cycling path at the door" },
  ],
  stayAddress: "Hôtel L'Océan, Le Bois-Plage-en-Ré, Île de Ré",
};

const YELLOH_TOUR: OuDormirPick = {
  name: "Yelloh! Village La Tour des Prises",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 0,
  type: { fr: "Camping 5★", en: "5★ campsite" },
  stars: 5,
  priceLevel: 2,
  features: [
    { fr: "Accès direct plage", en: "Direct beach access" },
    { fr: "Piscines & toboggans", en: "Pools & water slides" },
    { fr: "Lodges & mobil-homes tout équipés", en: "Fully equipped lodges & mobile homes" },
  ],
  stayAddress: "Yelloh Village La Tour des Prises, Le Bois-Plage, Île de Ré",
};

const INTERLUDE: OuDormirPick = {
  name: "Camping Interlude",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 1,
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 2,
  features: [
    { fr: "Piscine chauffée couverte", en: "Covered heated pool" },
    { fr: "Mobil-homes & emplacements tente", en: "Mobile homes & tent pitches" },
    { fr: "À 500m de la plage du Bois", en: "500m from Le Bois beach" },
  ],
  stayAddress: "Camping Interlude, Le Bois-Plage, Île de Ré",
};

const YELLOH_ILATES: OuDormirPick = {
  name: "Yelloh! Village Les Ilates",
  village: "Les Portes-en-Ré",
  villageSlug: "les-portes-en-re",
  photoIndex: 0,
  type: { fr: "Camping 5★", en: "5★ campsite" },
  stars: 5,
  priceLevel: 2,
  features: [
    { fr: "Pieds dans l'eau côte sauvage", en: "Wild coast waterfront" },
    { fr: "Spa, animations & club enfants", en: "Spa, entertainment & kids club" },
    { fr: "Tentes lodges & cottages haut de gamme", en: "Luxury lodges & cottages" },
  ],
  stayAddress: "Yelloh Village Les Ilates, Les Portes-en-Ré, Île de Ré",
};

const GRAINETIERE: OuDormirPick = {
  name: "Camping La Grainetière",
  village: "La Couarde-sur-Mer",
  villageSlug: "la-couarde-sur-mer",
  photoIndex: 0,
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Accès plage du Peu Ragot", en: "Access to Peu Ragot beach" },
    { fr: "Parc aquatique & terrain de jeux", en: "Water park & playground" },
    { fr: "Idéal familles avec enfants", en: "Ideal for families with children" },
  ],
  stayAddress: "Camping La Grainetière, La Couarde-sur-Mer, Île de Ré",
};

const GRILLOTIERE: OuDormirPick = {
  name: "Camping La Grillotière",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 2,
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Accès direct plage de La Cible", en: "Direct access to La Cible beach" },
    { fr: "Animaux bienvenus", en: "Pets welcome" },
    { fr: "Emplacements ombragés & mobil-homes", en: "Shaded pitches & mobile homes" },
  ],
  stayAddress: "Camping La Grillotière, La Flotte, Île de Ré",
};

const BALEINES_CAMPING: OuDormirPick = {
  name: "Camping Les Baleines",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 0,
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "À 800m du phare des Baleines", en: "800m from the Baleines lighthouse" },
    { fr: "Cadre naturel & dunes préservées", en: "Natural setting & preserved dunes" },
    { fr: "Piste cyclable devant l'entrée", en: "Cycle path at the entrance" },
  ],
  stayAddress: "Camping Les Baleines, Saint-Clément-des-Baleines, Île de Ré",
};

const PERGOLA: OuDormirPick = {
  name: "Camping La Pergola",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 0,
  type: { fr: "Camping 3★", en: "3★ campsite" },
  stars: 3,
  priceLevel: 1,
  features: [
    { fr: "Première commune après le pont", en: "First village after the bridge" },
    { fr: "Tarifs parmi les plus bas de l'île", en: "Some of the lowest rates on the island" },
    { fr: "Piste vélo vers Saint-Martin", en: "Cycle path to Saint-Martin" },
  ],
  stayAddress: "Camping La Pergola, Rivedoux-Plage, Île de Ré",
};

const COTE_MARAIS: OuDormirPick = {
  name: "Chambres Côté Marais",
  village: "Loix",
  villageSlug: "loix",
  photoIndex: 0,
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 2,
  features: [
    { fr: "Vue panoramique sur les marais salants", en: "Panoramic view of salt marshes" },
    { fr: "Village préservé de Loix", en: "Preserved village of Loix" },
    { fr: "Table d'hôtes sur réservation", en: "Dinner by reservation" },
  ],
  stayAddress: "Chambres Côté Marais, Loix, Île de Ré",
};

const MAISON_PHARE: OuDormirPick = {
  name: "La Maison du Phare",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 1,
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "À 5 min du phare des Baleines", en: "5 min from the Baleines lighthouse" },
    { fr: "Jardin & vélos mis à disposition", en: "Garden & bikes provided" },
    { fr: "Petit-déjeuner produits locaux", en: "Breakfast with local produce" },
  ],
  stayAddress: "La Maison du Phare, Saint-Clément-des-Baleines, Île de Ré",
};

const HORTENSIAS: OuDormirPick = {
  name: "Maison des Hortensias",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison de maître intra-muros", en: "Manor house within the ramparts" },
    { fr: "Terrasse jardin ombragée", en: "Shaded garden terrace" },
    { fr: "À pied des musées et restaurants", en: "Walking distance to museums & restaurants" },
  ],
  stayAddress: "Maison des Hortensias, Saint-Martin-de-Ré, Île de Ré",
};

const GITE_INTRA: OuDormirPick = {
  name: "Gîtes intra-muros",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  type: { fr: "Location saisonnière", en: "Holiday rental" },
  priceLevel: 4,
  features: [
    { fr: "Maisons de village au coeur des remparts", en: "Village houses within the ramparts" },
    { fr: "Terrasse & charme authentique", en: "Terrace & authentic charm" },
    { fr: "Tout à pied : port, marché, restaurants", en: "Everything on foot: harbour, market, restaurants" },
  ],
  stayAddress: "Saint-Martin-de-Ré centre, Île de Ré",
};

const MAISON_JARDIN: OuDormirPick = {
  name: "Maisons de vacances avec jardin",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 1,
  type: { fr: "Location saisonnière", en: "Holiday rental" },
  priceLevel: 3,
  features: [
    { fr: "Maisons typiques avec jardin clôturé", en: "Typical houses with enclosed garden" },
    { fr: "À vélo des plages de sable fin", en: "Cycling distance to sandy beaches" },
    { fr: "Capacité 4 à 8 personnes", en: "Capacity for 4 to 8 guests" },
  ],
  stayAddress: "Le Bois-Plage-en-Ré, Île de Ré",
};

const MAISON_PECHEUR: OuDormirPick = {
  name: "Maisons de pêcheur rénovées",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 2,
  type: { fr: "Location saisonnière", en: "Holiday rental" },
  priceLevel: 3,
  features: [
    { fr: "Cottages blancs au coeur du village", en: "White cottages in the village centre" },
    { fr: "Patios fleuris face aux ruelles", en: "Flower-filled patios on cobbled lanes" },
    { fr: "À 300m du marché & des halles", en: "300m from the market & food hall" },
  ],
  stayAddress: "La Flotte-en-Ré, Île de Ré",
};

const GRENETTES_CAMP: OuDormirPick = {
  name: "Camping Les Grenettes",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 0,
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Face à la plage des Grenettes", en: "Opposite Les Grenettes beach" },
    { fr: "Piscine & espace aquatique", en: "Pool & water complex" },
    { fr: "Animations été & club enfants", en: "Summer entertainment & kids club" },
  ],
  stayAddress: "Camping Les Grenettes, Sainte-Marie-de-Ré, Île de Ré",
};

const HIPPOCAMPE: OuDormirPick = {
  name: "Hôtel L'Hippocampe",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 1,
  type: { fr: "Hôtel 3★", en: "3★ hotel" },
  stars: 3,
  priceLevel: 2,
  features: [
    { fr: "À 2 min à pied de la plage", en: "2 min walk to the beach" },
    { fr: "Premier arrêt après le pont", en: "First stop after the bridge" },
    { fr: "Prix raisonnables haute saison", en: "Reasonable high-season rates" },
  ],
  stayAddress: "Hôtel L'Hippocampe, Rivedoux-Plage, Île de Ré",
};

const GITE_GROUPE: OuDormirPick = {
  name: "Gîte de groupe La Couarde",
  village: "La Couarde-sur-Mer",
  villageSlug: "la-couarde-sur-mer",
  photoIndex: 1,
  type: { fr: "Gîte de groupe", en: "Group gîte" },
  priceLevel: 3,
  features: [
    { fr: "Jusqu'à 15 personnes", en: "Up to 15 guests" },
    { fr: "Grand séjour & cuisine équipée", en: "Large living room & fully equipped kitchen" },
    { fr: "Jardin avec barbecue", en: "Garden with barbecue" },
  ],
  stayAddress: "La Couarde-sur-Mer, Île de Ré",
};

const VILLA_FLOTS: OuDormirPick = {
  name: "Villa Les Flots",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 0,
  type: { fr: "Villa 8 personnes", en: "8-person villa" },
  priceLevel: 4,
  features: [
    { fr: "Piscine privée & pool house", en: "Private pool & pool house" },
    { fr: "8 personnes avec 4 chambres", en: "8 guests with 4 bedrooms" },
    { fr: "À vélo de la plage", en: "Cycling distance to the beach" },
  ],
  stayAddress: "Le Bois-Plage-en-Ré, Île de Ré",
};

const LODGE_BALEINES: OuDormirPick = {
  name: "Lodges de la Côte Sauvage",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 2,
  type: { fr: "Glamping", en: "Glamping" },
  priceLevel: 3,
  features: [
    { fr: "Cabanes sur pilotis face aux dunes", en: "Stilted cabins facing the dunes" },
    { fr: "Literie hôtelière & kit de confort", en: "Hotel bedding & comfort kit" },
    { fr: "À 200m de la plage sauvage", en: "200m from the wild beach" },
  ],
  stayAddress: "Saint-Clément-des-Baleines, Île de Ré",
};

const GITE_NATURE: OuDormirPick = {
  name: "Gîte Côté Nature",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 2,
  type: { fr: "Gîte rural", en: "Rural gîte" },
  priceLevel: 2,
  features: [
    { fr: "Grand terrain clôturé, chiens bienvenus", en: "Large enclosed grounds, dogs welcome" },
    { fr: "Accès direct aux sentiers ornithologiques", en: "Direct access to birdwatching paths" },
    { fr: "Vue sur les marais salants", en: "Views over the salt marshes" },
  ],
  stayAddress: "Ars-en-Ré, Île de Ré",
};

const MAREE_STE_MARIE: OuDormirPick = {
  name: "Hôtel de la Marée",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 1,
  type: { fr: "Hôtel 3★", en: "3★ hotel" },
  stars: 3,
  priceLevel: 2,
  features: [
    { fr: "À 10 min du pont en vélo", en: "10 min from the bridge by bike" },
    { fr: "Rapport qualité-prix apprécié", en: "Great value for money" },
    { fr: "Idéal week-end sans voiture", en: "Ideal for a car-free weekend" },
  ],
  stayAddress: "Hôtel de la Marée, Sainte-Marie-de-Ré, Île de Ré",
};

export const OU_DORMIR_PICKS: Record<string, OuDormirPick[]> = {
  "ou-dormir/hotels": [
    TOIRAS,
    RICHELIEU,
    SENECHAL,
    OCEAN_BOIS,
    HIPPOCAMPE,
    MAREE_STE_MARIE,
  ],
  "ou-dormir/hotels-luxe": [
    TOIRAS,
    ATELIERS_IMAGE,
    BARONNIE,
  ],
  "ou-dormir/hotels-de-charme": [
    RICHELIEU,
    SENECHAL,
    MARTRAY,
    VILLA_RHEA,
    HORTENSIAS,
  ],
  "ou-dormir/hotels-bord-de-mer": [
    RICHELIEU,
    OCEAN_BOIS,
    YELLOH_ILATES,
    GRENETTES_CAMP,
  ],
  "ou-dormir/hotels-spa": [
    BARONNIE,
    TOIRAS,
    RICHELIEU,
  ],
  "ou-dormir/hotels-romantiques": [
    TOIRAS,
    ATELIERS_IMAGE,
    VILLA_RHEA,
    BARONNIE,
  ],
  "ou-dormir/hotels-pas-cher": [
    OCEAN_BOIS,
    HIPPOCAMPE,
    MAREE_STE_MARIE,
    PERGOLA,
  ],
  "ou-dormir/hotels-avec-piscine": [
    YELLOH_TOUR,
    BARONNIE,
    RICHELIEU,
    INTERLUDE,
  ],
  "ou-dormir/campings": [
    YELLOH_TOUR,
    YELLOH_ILATES,
    GRAINETIERE,
    GRILLOTIERE,
    INTERLUDE,
    BALEINES_CAMPING,
    GRENETTES_CAMP,
    PERGOLA,
  ],
  "ou-dormir/glamping": [
    YELLOH_TOUR,
    YELLOH_ILATES,
    LODGE_BALEINES,
  ],
  "ou-dormir/locations-vacances": [
    GITE_INTRA,
    MAISON_JARDIN,
    MAISON_PECHEUR,
    GITE_GROUPE,
    VILLA_FLOTS,
  ],
  "ou-dormir/maisons-dhotes": [
    VILLA_RHEA,
    COTE_MARAIS,
    MAISON_PHARE,
    HORTENSIAS,
  ],
  "ou-dormir/proche-plage": [
    YELLOH_TOUR,
    RICHELIEU,
    GRENETTES_CAMP,
    OCEAN_BOIS,
    GRILLOTIERE,
  ],
  "ou-dormir/en-famille": [
    YELLOH_TOUR,
    YELLOH_ILATES,
    GRAINETIERE,
    GRENETTES_CAMP,
    INTERLUDE,
  ],
  "ou-dormir/grand-groupe": [
    GITE_GROUPE,
    VILLA_FLOTS,
    YELLOH_TOUR,
  ],
  "ou-dormir/week-end-amoureux": [
    TOIRAS,
    ATELIERS_IMAGE,
    VILLA_RHEA,
    BARONNIE,
  ],
  "ou-dormir/lune-de-miel": [
    TOIRAS,
    BARONNIE,
    ATELIERS_IMAGE,
  ],
  "ou-dormir/animaux-acceptes": [
    GRILLOTIERE,
    GITE_NATURE,
    SENECHAL,
    MAISON_JARDIN,
  ],
  "ou-dormir/sans-voiture": [
    TOIRAS,
    RICHELIEU,
    ATELIERS_IMAGE,
    SENECHAL,
  ],
  "ou-dormir/proche-port": [
    TOIRAS,
    ATELIERS_IMAGE,
    BARONNIE,
    YELLOH_ILATES,
  ],
  "ou-dormir/seminaire-entreprise": [
    BARONNIE,
    RICHELIEU,
    TOIRAS,
    GITE_GROUPE,
  ],
  "ou-dormir/reunion-famille": [
    GITE_GROUPE,
    VILLA_FLOTS,
    YELLOH_TOUR,
    MAISON_JARDIN,
  ],
  "ou-dormir/anniversaire": [
    TOIRAS,
    ATELIERS_IMAGE,
    RICHELIEU,
    BARONNIE,
  ],
  "ou-dormir/evg": [
    YELLOH_ILATES,
    GITE_GROUPE,
    SENECHAL,
  ],
  "ou-dormir/evjf": [
    YELLOH_ILATES,
    VILLA_FLOTS,
    BARONNIE,
  ],
  "ou-dormir/avec-piscine-interieure": [
    BARONNIE,
    TOIRAS,
    RICHELIEU,
  ],
  "ou-dormir/ete-2026": [
    YELLOH_TOUR,
    YELLOH_ILATES,
    TOIRAS,
    GRAINETIERE,
    RICHELIEU,
  ],
  "ou-dormir/ete-2027": [
    YELLOH_TOUR,
    YELLOH_ILATES,
    TOIRAS,
    GRAINETIERE,
    RICHELIEU,
  ],
};
