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
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/666796841.jpg?k=a1977132d0cd1c2177811c3e3a5ee80768d4eece6a74695d863a4d5c3f021e42&o=",
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
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/377562272.jpg?k=ea9922c34143506ec51b325c616c49255fdca3b5a5e44dd057bd00097eed557c&o=",
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
  imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/da/b8/07/hotel-le-richelieu-la.jpg?w=1900&h=1100&s=1",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFCmUWuMuNcI5RSQWcrF_lenBcVSQ7W_1VkhFKA7osO4-KMSECO18ksGa0wGMB2dfqizwX6vY5HbfAa62F-Bxv-s66iPpd1c7wy-BM7UUSe9VgOAWPOns54F0Uym0z1Es4hkzreZw=w408-h306-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGpZqGphZBRzTQ4DgGzb2TmOGouznMlDF-p62TXO55bIvg8TlkFBLks-8bPr3y3c0TC8wRIo_iw7zbzARFjAO_WREzCD4GQvu5-nMTuy5P6K5clhzR0-g2zK2POLy6oZMECVw-k=w408-h543-k-no",
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
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/843087333.jpg?k=991d4d0a02a1ad34e4a48d35bfa0c149ccbe590c5e9811057b95091be7eb3cc5&o=",
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
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121080133.jpg?k=cbc5b94a00198405472c428baef9e9087121ee0548618557d19594174b532087&o=",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFMA92Lnd81uml3jTrvm4oquBkBnKYQVZPwFht4haST_Nlk2He24SwUis8ERSIjrO24_Np-KW8vmvNAMYMrbd743ILvjLs0dAAxTzhJnp1bxpb30OueHN9il320bGWSazqC3HE=w460-h240-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF43_08EXZYk1OyBzYQ8c0uohE6jbzfWYyO6tUIk1C2Z1-bj1ISACcot8Akh4ukG9_33BqJAA1b7cffZICY-vYkrpY0aKykBEF556xdYh4zC_uS_dKMjQ-UsfYCk2E2lZmjMTuDIPVRhE2T=w426-h240-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHql16IE6Xl1ni2H_VHSQJouNPNmILmtksyecDOD7VQxTuMz-W3NwVFXxiuGcygoFLYeC5M4QoO6LLm9hRs9IP6vmybbjCd7Yf1D4z38z8I22L0Yaao14YRed0Cia5Q3BCFVy2M=w408-h271-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHUUpprlgr7-v9UAUDXv7fE_fge4ZQJs231LXmIQRY2LF97RnbrwxHWsqKlCF5Vchf__0m21KUI5anqcRcyrWIkGjOB2ay-c65YNa_WTFazGjKK3akKXrMBsTsmt0iwpVdL02o=w426-h240-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF4MsAgItHrHewAR_Z2dRk9oLuCjafSSS2Hxg8pV0QGnVr5d67a34UHJNGADyf-4iUSQuau4-nwfl6OfoD6J4TwWVE2KSVc6XDOUp2zIsQNsWF97af-vBptuZsMcKZCQpBQmtaE4Q=w533-h240-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHsuZuHvgwe8FltkIGoKO8b5BdgSqwFOPyBDpBSCucAjnuuVpO8ijmY7J7_wjbm45F5WKJUuamgVh_ti3bN9CNIa-6EGGTEpJCbeORzNM2MKB11lciEeT7CA1_4HH3f8fXrpFzNodd-jPFn=w408-h544-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHmKQvoqXzQQJy97f17LaUbI2-rd4gAn1Piq4jpPGEQq7udg2q8T_KTImfJQPZ2G8qChf0yWzRIHUizTK8nLXBrobIJiqi2z7jlvdwGqrfk9oMSij9SwdDBFWCJJ5_Ou0XAXrdV5hnLsbPk=w426-h240-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE3kcWzN6h419rTL2Cz4673ND3QV5Sexmt1Y44o8tFV_tRIA0UlGExs1oZwiE-dtZsFXN8SynrzBVBslkuY9EKKyYFXbyT4muhSzOHyFMI7Bf3HqLZaKsfPP0l7NTMl1cAjyQqbIw=w408-h271-k-no",
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
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/483415324.jpg?k=b6162d285f6b733bee26045ffe6e0267c22878b1d06336042a077600e0747223&o=",
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
  imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x683/492362506.jpg?k=04a41571a93908b6db20837984e71cc459fedadbc28d2c6858dfae535a8c30c3&o=",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGOs_0gXdE45s0uP5x9szZ73UJu0hax_Nt_wJ4_rqKkLB3D6tZt34sxAkIN1MS7nqU-snZpILfHiVqyFSDOCjkpUU_8T3QI7ou_aFJClaIZYAtFGx1rhWGIkYg5qYZD-rVSlwHp8zqqP_Zq=w408-h306-k-no",
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
  imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHxWvcN5oOBa9hdLQoGtyMKPyC96Ra2TXTM3u0lfIpGjHyVETSQY8GZpAwi_PXiX4mw1eyGy6omQdgCepk-SeiKAn9jjddN2QxzDrp0JIY7JWR5Ai3M5jfZJ8HvZFpLqQKO-udkPA=w408-h272-k-no",
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
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/210236628.jpg?k=9139d2fed493455907d8c65ba26e492d921121615f253709e3a7bf719d2ca5e0&o=",
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

// ============ NOUVELLES ADDITIONS ============

const CLOS_SAINT_MARTIN: OuDormirPick = {
  name: "Le Clos Saint-Martin Hôtel & Spa",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/98819739.jpg?k=e1170c740d5f83ce489c8246e41e92e1c14d78cb01c910e71417fa693efac2fe&o=",
  type: { fr: "Hôtel spa 4★", en: "4★ spa hotel" },
  stars: 4,
  priceLevel: 4,
  features: [
    { fr: "Piscine chauffée & spa intra-muros", en: "Heated pool & spa within the ramparts" },
    { fr: "Suite avec terrasse sur jardin", en: "Suite with garden terrace" },
    { fr: "À deux pas du port", en: "Steps from the harbour" },
  ],
  stayAddress: "Le Clos Saint-Martin, Saint-Martin-de-Ré, Île de Ré",
};

const HOTEL_JETEE: OuDormirPick = {
  name: "Hôtel La Jetée",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227408866.jpg?k=97cce79bdb72a55c5c8b5cc00b928db9a6e7255c8f543d256ef24ec17b74b675&o=",
  type: { fr: "Hôtel de charme 3★", en: "3★ charming hotel" },
  stars: 3,
  priceLevel: 3,
  features: [
    { fr: "Vue directe sur le port", en: "Direct harbour view" },
    { fr: "Terrasse panoramique", en: "Panoramic terrace" },
    { fr: "Petit-déjeuner maison", en: "Homemade breakfast" },
  ],
  stayAddress: "Hôtel La Jetée, Saint-Martin-de-Ré, Île de Ré",
};

const HOTEL_PEU_BRETON: OuDormirPick = {
  name: "Hôtel Le Peu Breton",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/753562163.jpg?k=bd03af31765e3b6f149f894c52115949e25ee69484f9276fd66b60448e0f8caa&o=",
  type: { fr: "Hôtel 3★", en: "3★ hotel" },
  stars: 3,
  priceLevel: 3,
  features: [
    { fr: "Piscine chauffée privée", en: "Private heated pool" },
    { fr: "Jardin & terrasse", en: "Garden & terrace" },
    { fr: "Proximité plages nord", en: "Close to north beaches" },
  ],
  stayAddress: "Hôtel Le Peu Breton, Saint-Martin-de-Ré, Île de Ré",
};

const HOTEL_DU_PORT: OuDormirPick = {
  name: "Hôtel du Port",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554034195.jpg?k=52d452056d7f7249b115872bc8c3c7ffd67bfc61f8ed8c7106386f2bd9e4ec71&o=",
  type: { fr: "Hôtel 2★", en: "2★ hotel" },
  stars: 2,
  priceLevel: 2,
  features: [
    { fr: "Vue directe sur le port de Saint-Martin", en: "Direct view of Saint-Martin harbour" },
    { fr: "Tarifs accessibles", en: "Affordable rates" },
    { fr: "Idéal base nautique", en: "Ideal for nautical activities" },
  ],
  stayAddress: "Hôtel du Port, Saint-Martin-de-Ré, Île de Ré",
};

const SLOW_VILLAGE: OuDormirPick = {
  name: "Slow Village Saint-Martin",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/487893659.jpg?k=b133541071dff28f7bf9170fea897738330043c268c16222c084410893ff83d9&o=",
  type: { fr: "Éco-lodge", en: "Eco lodge" },
  priceLevel: 3,
  features: [
    { fr: "Hébergements durables & éco-responsables", en: "Sustainable eco-responsible lodges" },
    { fr: "Piscine naturelle", en: "Natural pool" },
    { fr: "Ambiance slow life", en: "Slow life atmosphere" },
  ],
  stayAddress: "Slow Village, Saint-Martin-de-Ré, Île de Ré",
};

const HOTEL_FRANCAIS: OuDormirPick = {
  name: "Hôtel Le Français",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/398104330.jpg?k=eb3241d45f8bf67fdf155e93b4ab7f2882e2b655c7c51a87077344a8ccf37343&o=",
  type: { fr: "Hôtel 3★", en: "3★ hotel" },
  stars: 3,
  priceLevel: 2,
  features: [
    { fr: "Rapport qualité-prix excellent", en: "Excellent value for money" },
    { fr: "Proche marché couvert", en: "Near covered market" },
    { fr: "Parking & vélos", en: "Parking & bikes" },
  ],
  stayAddress: "Hôtel Le Français, Saint-Martin-de-Ré, Île de Ré",
};

const THALACAP: OuDormirPick = {
  name: "Thalacap Île de Ré",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207160992.jpg?k=179fa8d327ceaff30a34fe3ce9b26f75aac14124030da6e2ed1c0f8393567f11&o=",
  type: { fr: "Hôtel thalasso", en: "Thalasso hotel" },
  priceLevel: 3,
  features: [
    { fr: "Thalassothérapie eau de mer", en: "Seawater thalassotherapy" },
    { fr: "Accès direct plage", en: "Direct beach access" },
    { fr: "Soins & remise en forme", en: "Treatments & wellness" },
  ],
  stayAddress: "Thalacap Thalasso, Saint-Martin-de-Ré, Île de Ré",
};

const CLOS_GALION: OuDormirPick = {
  name: "Le Clos du Galion",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383816330.jpg?k=fdc5b5a0268f48fe885a6e6b48508aba77589037fcde1b5d9d135bf050aebbbc&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison de maître face au port", en: "Manor house facing the harbour" },
    { fr: "Jardin clos & piscine", en: "Enclosed garden & pool" },
    { fr: "Petits-déjeuners gastronomiques", en: "Gourmet breakfasts" },
  ],
  stayAddress: "Le Clos du Galion, La Flotte-en-Ré, Île de Ré",
};

const CAMPING_TAMARINS: OuDormirPick = {
  name: "Camping Les Tamarins",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/626257375.jpg?k=154eff87e173a9ae0d3e653cd2f972222f4e1f3ab78bbf439f920b201da1c631&o=",
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Bord de plage de La Cible", en: "On La Cible beach" },
    { fr: "Piscine & jeux aquatiques", en: "Pool & water play" },
    { fr: "Mobil-homes & tentes", en: "Mobile homes & tents" },
  ],
  stayAddress: "Camping Les Tamarins, La Flotte-en-Ré, Île de Ré",
};

const GALIOTE: OuDormirPick = {
  name: "Hôtel La Galiote en Ré",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/21234331.jpg?k=cebbe01faa759ca29b475e11cd6492653965567e58805b796d23ca0616479834&o=",
  type: { fr: "Hôtel de charme 2★", en: "2★ charming hotel" },
  stars: 2,
  priceLevel: 2,
  features: [
    { fr: "Village classé plus beaux villages", en: "Listed as one of France's most beautiful villages" },
    { fr: "Bâtisse ancienne rénovée", en: "Renovated historic building" },
    { fr: "Vélos mis à disposition", en: "Bikes provided" },
  ],
  stayAddress: "Hôtel La Galiote, Ars-en-Ré, Île de Ré",
};

const ZECAMPING_ARS: OuDormirPick = {
  name: "ZEcamping Ars-en-Ré",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/785770003.jpg?k=5a969ae0252352f18b78cf6ca6cc442173d6a56714513062b355d29eee899e76&o=",
  type: { fr: "Camping éco 4★", en: "4★ eco campsite" },
  stars: 4,
  priceLevel: 2,
  features: [
    { fr: "Plage à 300m, esprit zen & nature", en: "Beach 300m, zen & nature spirit" },
    { fr: "Chiens bienvenus", en: "Dogs welcome" },
    { fr: "Emplacements ombragés sous les pins", en: "Shaded pitches under pine trees" },
  ],
  stayAddress: "ZEcamping, Ars-en-Ré, Île de Ré",
};

const CAMPING_MARAISES: OuDormirPick = {
  name: "Camping Les Maraises",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/324058324.jpg?k=84c7a703dae86c0b8af9478e56e3c192ee7df62de542f66f4c5408533a8f8d41&o=",
  type: { fr: "Camping 3★", en: "3★ campsite" },
  stars: 3,
  priceLevel: 1,
  features: [
    { fr: "Face aux marais salants", en: "Facing the salt marshes" },
    { fr: "Ambiance nature & calme", en: "Natural peaceful atmosphere" },
    { fr: "Idéal ornithologie", en: "Ideal for birdwatching" },
  ],
  stayAddress: "Camping Les Maraises, Ars-en-Ré, Île de Ré",
};

const BOIS_FLOTTAIS: OuDormirPick = {
  name: "Hotel Les Bois Flottais",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/502903298.jpg?k=f977f8664bcb89fcba673cc941de837177680e03a44a89fde8c0da8c51e34e89&o=",
  type: { fr: "Hôtel 2★", en: "2★ hotel" },
  stars: 2,
  priceLevel: 2,
  features: [
    { fr: "À 800m de la plage du Bois", en: "800m from Le Bois beach" },
    { fr: "Cadre verdoyant & calme", en: "Green and peaceful setting" },
    { fr: "Parking gratuit", en: "Free parking" },
  ],
  stayAddress: "Hotel Les Bois Flottais, Le Bois-Plage-en-Ré, Île de Ré",
};

const VIGNES_CHAPELLE: OuDormirPick = {
  name: "Hôtel Les Vignes de la Chapelle",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/460400405.jpg?k=1202ed73aadb3ed25ec8e5c222d43acab2dbe638589247ffd497264f810b7f8c&o=",
  type: { fr: "Hôtel logis 3★", en: "3★ logis hotel" },
  stars: 3,
  priceLevel: 3,
  features: [
    { fr: "Face à la chapelle Notre-Dame-de-Ré", en: "Facing the Notre-Dame-de-Ré chapel" },
    { fr: "Jardin vigneron", en: "Vineyard garden" },
    { fr: "Terroir & gastronomie", en: "Local gastronomy" },
  ],
  stayAddress: "Hôtel Les Vignes de la Chapelle, Le Bois-Plage-en-Ré, Île de Ré",
};

const ODESIA: OuDormirPick = {
  name: "Odésia Horizons Ré",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/845853718.jpg?k=20a68968b79d98a09f3eab5b8ee8afaf03f78dda25dd8a622f8bd62d6cb657ec&o=",
  type: { fr: "Résidence hôtelière 4★", en: "4★ hotel residence" },
  stars: 4,
  priceLevel: 3,
  features: [
    { fr: "Studios & appartements avec kitchenette", en: "Studios & apartments with kitchenette" },
    { fr: "Piscine couverte chauffée", en: "Covered heated pool" },
    { fr: "À vélo des plages", en: "Cycling distance to beaches" },
  ],
  stayAddress: "Odésia Horizons Ré, Le Bois-Plage-en-Ré, Île de Ré",
};

const ZECAMPING_BOIS: OuDormirPick = {
  name: "ZEcamping Le Bois-Plage",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/811502936.jpg?k=90e8c9d6a5d0d84e8669e2fc7a83c1b91be6861df5f04b6b98910487d0ccfe40&o=",
  type: { fr: "Camping éco 4★", en: "4★ eco campsite" },
  stars: 4,
  priceLevel: 2,
  features: [
    { fr: "Parc aquatique & plage à 900m", en: "Water park & beach 900m away" },
    { fr: "Chiens bienvenus", en: "Dogs welcome" },
    { fr: "Lodges & mobil-homes", en: "Lodges & mobile homes" },
  ],
  stayAddress: "ZEcamping, Le Bois-Plage-en-Ré, Île de Ré",
};

const CAMPING_PORTES: OuDormirPick = {
  name: "Camping Les Portes en Ré",
  village: "Les Portes-en-Ré",
  villageSlug: "les-portes-en-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489404976.jpg?k=6d282d572ec6f0de26998da936054266d819bafaf04c94cf0fba9784827822b2&o=",
  type: { fr: "Camping 3★", en: "3★ campsite" },
  stars: 3,
  priceLevel: 1,
  features: [
    { fr: "Côte sauvage & nature préservée", en: "Wild coast & preserved nature" },
    { fr: "Le village le plus au nord de l'île", en: "Northernmost village on the island" },
    { fr: "Emplacements ombragés", en: "Shaded pitches" },
  ],
  stayAddress: "Camping Les Portes en Ré, Les Portes-en-Ré, Île de Ré",
};

const HOTE_PORTES: OuDormirPick = {
  name: "Hôte des Portes",
  village: "Les Portes-en-Ré",
  villageSlug: "les-portes-en-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374555114.jpg?k=86d4ff34f98883e2538d006ff462d3f1f4516832912d3268bdef92a3c0962dc1&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison rétaise au bout de l'île", en: "Traditional Ré house at island's tip" },
    { fr: "Calme absolu & nature", en: "Absolute calm & nature" },
    { fr: "Table d'hôtes sur réservation", en: "Dinner by reservation" },
  ],
  stayAddress: "Hôte des Portes, Les Portes-en-Ré, Île de Ré",
};

const CHAT_BOTTE: OuDormirPick = {
  name: "Le Chat Botté",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/358051196.jpg?k=9b539888e03a0391ea6ff5a0a1885a57b244e75f29900c381321fcc24aa906c5&o=",
  type: { fr: "Hôtel-restaurant 3★", en: "3★ hotel-restaurant" },
  stars: 3,
  priceLevel: 3,
  features: [
    { fr: "Face à la côte sauvage", en: "Facing the wild coast" },
    { fr: "Restaurant gastronomique réputé", en: "Renowned gourmet restaurant" },
    { fr: "Ambiance bout du monde", en: "End-of-the-world atmosphere" },
  ],
  stayAddress: "Le Chat Botté, Saint-Clément-des-Baleines, Île de Ré",
};

const GRAND_LARGE: OuDormirPick = {
  name: "Hôtel Le Grand Large",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/96915386.jpg?k=ec1490e24a05943ecf52f274529a498a546f7e548fc9d300a7dcd7d9edb3ffc0&o=",
  type: { fr: "Hôtel-restaurant", en: "Hotel restaurant" },
  priceLevel: 2,
  features: [
    { fr: "Face à la plage des Baleines", en: "Facing Les Baleines beach" },
    { fr: "Terrasse vue océan", en: "Ocean-view terrace" },
    { fr: "Produits de la mer frais", en: "Fresh seafood" },
  ],
  stayAddress: "Hôtel Le Grand Large, Saint-Clément-des-Baleines, Île de Ré",
};

const HOTEL_GRENETTES: OuDormirPick = {
  name: "Hôtel Les Grenettes",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/613820405.jpg?k=a78d7ff80ba10fed7dd6fbe92ba1e022e538279e55acf97f9cd896e468966b0d&o=",
  type: { fr: "Hôtel 3★", en: "3★ hotel" },
  stars: 3,
  priceLevel: 2,
  features: [
    { fr: "Bord de la plage des Grenettes", en: "On Les Grenettes beach" },
    { fr: "Accès direct plage de sable", en: "Direct sandy beach access" },
    { fr: "Idéal familles", en: "Ideal for families" },
  ],
  stayAddress: "Hôtel Les Grenettes, Sainte-Marie-de-Ré, Île de Ré",
};

const ATALANTE: OuDormirPick = {
  name: "Hôtel Atalante Thalasso",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554661310.jpg?k=5e4069db4d6a774f7413001112ddb0e978ab08dcab1c078cc3ade0a5f9c6c57b&o=",
  type: { fr: "Hôtel thalasso 4★", en: "4★ thalasso hotel" },
  stars: 4,
  priceLevel: 4,
  features: [
    { fr: "Thalassothérapie & soins marins", en: "Thalassotherapy & marine treatments" },
    { fr: "Piscine eau de mer chauffée", en: "Heated seawater pool" },
    { fr: "Face à l'océan", en: "Facing the ocean" },
  ],
  stayAddress: "Hôtel Atalante Thalasso, Sainte-Marie-de-Ré, Île de Ré",
};

const HOTEL_DE_RE: OuDormirPick = {
  name: "Hôtel de Ré",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/580035226.jpg?k=db68869943af5508f459481902800f219a8da3099f4e18376a48ffa1354e8e96&o=",
  type: { fr: "Résidence hôtelière 3★", en: "3★ hotel residence" },
  stars: 3,
  priceLevel: 2,
  features: [
    { fr: "Logements indépendants avec cuisine", en: "Self-contained units with kitchen" },
    { fr: "Proche plage de Sainte-Marie", en: "Near Sainte-Marie beach" },
    { fr: "Piscine chauffée", en: "Heated pool" },
  ],
  stayAddress: "Hôtel de Ré, Sainte-Marie-de-Ré, Île de Ré",
};

const HOTEL_OYAT: OuDormirPick = {
  name: "Hôtel OYAT Île de Ré",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/858863071.jpg?k=9230c1442d1edd9e7e74b5ae4686bf15fe12c636e798a601cbe852a71943844e&o=",
  type: { fr: "Hôtel 3★", en: "3★ hotel" },
  stars: 3,
  priceLevel: 2,
  features: [
    { fr: "Idéalement situé en entrée d'île", en: "Ideally located at island entrance" },
    { fr: "Buffet petit-déjeuner", en: "Breakfast buffet" },
    { fr: "Piscine extérieure", en: "Outdoor pool" },
  ],
  stayAddress: "Hôtel OYAT, Sainte-Marie-de-Ré, Île de Ré",
};

const CAMPING_PLATIN: OuDormirPick = {
  name: "Camping Le Platin",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/844887104.jpg?k=6a84a914bf0b55ba0879bd04fe740889f89e3a343e4830a5ce4e7c8af900e6c3&o=",
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Premier camping après le pont", en: "First campsite after the bridge" },
    { fr: "Plage à 5 min à pied", en: "Beach 5 min walk" },
    { fr: "Emplacements tout confort", en: "Fully serviced pitches" },
  ],
  stayAddress: "Camping Le Platin, Rivedoux-Plage, Île de Ré",
};

const CAMPING_PEUPLIERS: OuDormirPick = {
  name: "Camping Les Peupliers",
  village: "La Couarde-sur-Mer",
  villageSlug: "la-couarde-sur-mer",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/777082724.jpg?k=41f18f1a862935c3338d08fb5f05dd7c396c465a957c0a83ab6767f6cee202ce&o=",
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Au cœur de l'île à la Couarde", en: "In the heart of the island at La Couarde" },
    { fr: "Plage de sable fin proche", en: "Sandy beach nearby" },
    { fr: "Piscine & club enfants", en: "Pool & kids club" },
  ],
  stayAddress: "Camping Les Peupliers, La Couarde-sur-Mer, Île de Ré",
};

const CAMPING_FOUGERES: OuDormirPick = {
  name: "Camping Les Fougères",
  village: "La Couarde-sur-Mer",
  villageSlug: "la-couarde-sur-mer",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328907877.jpg?k=729372ccade21ee166ddc493cd9610bcbc44b560025ab06910f993d58000b225&o=",
  type: { fr: "Camping 4★", en: "4★ campsite" },
  stars: 4,
  priceLevel: 1,
  features: [
    { fr: "Cadre boisé & calme", en: "Wooded peaceful setting" },
    { fr: "Accès facile aux plages", en: "Easy beach access" },
    { fr: "Animations famille", en: "Family entertainment" },
  ],
  stayAddress: "Camping Les Fougères, La Couarde-sur-Mer, Île de Ré",
};

// ============ ADDITIONS MAXIMALES ============

const RELAX_SPA: OuDormirPick = {
  name: "Ré-lax Suites & Spa",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/889751276.jpg?k=53794d17621faff6265fa9dbc9bcffeeaf5f6a5f4eeecaa94b6463363f031be8&o=",
  type: { fr: "Suite spa", en: "Spa suite" },
  priceLevel: 4,
  features: [
    { fr: "Spa privatif dans chaque suite", en: "Private spa in each suite" },
    { fr: "Remparts à 2 min à pied", en: "2 min walk to the ramparts" },
    { fr: "Adresse confidentielle & exclusive", en: "Exclusive intimate address" },
  ],
  stayAddress: "Ré-lax, Saint-Martin-de-Ré, Île de Ré",
};

const CORPS_DE_GARDE: OuDormirPick = {
  name: "Le Corps de Garde",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117606306.jpg?k=bbedd23f712afe9e6be9aee1ddfe291d2a3d44c8c23677e4e1207b68f3dc0897&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Ancien bâtiment militaire Vauban", en: "Former Vauban military building" },
    { fr: "Terrasse sur les remparts", en: "Terrace on the ramparts" },
    { fr: "Cachet historique unique", en: "Unique historic character" },
  ],
  stayAddress: "Le Corps de Garde, Saint-Martin-de-Ré, Île de Ré",
};

const CLOS_VAUBAN: OuDormirPick = {
  name: "Clos Vauban",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/652623874.jpg?k=7d42cf533d0305fa3778942ed47daa13dac600c876d9f0c2ee741b696ddc59a1&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Jardin privatif intra-muros", en: "Private garden within the ramparts" },
    { fr: "Piscine chauffée", en: "Heated pool" },
    { fr: "Petit-déjeuner gourmet", en: "Gourmet breakfast" },
  ],
  stayAddress: "Clos Vauban, Saint-Martin-de-Ré, Île de Ré",
};

const HOTEL_VIEUX_GREEMENT: OuDormirPick = {
  name: "Hôtel Le Vieux Gréement",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/333283876.jpg?k=7588346ce60ef203f97fdbbcab5b278d09f7a9f63e4c7a5d500f3e2ab2f832ab&o=",
  type: { fr: "Hôtel 2★", en: "2★ hotel" },
  stars: 2,
  priceLevel: 2,
  features: [
    { fr: "À deux pas du port", en: "Steps from the harbour" },
    { fr: "Ambiance marin & voileux", en: "Nautical sailing atmosphere" },
    { fr: "Bon rapport qualité-prix", en: "Good value for money" },
  ],
  stayAddress: "Hôtel Le Vieux Gréement, Saint-Martin-de-Ré, Île de Ré",
};

const LE_MOLE: OuDormirPick = {
  name: "Le Môle",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582856464.jpg?k=bf6389251dea8795943ec8bb47c126423e28f98db6039a4abcab3b7e0b5c8c92&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Au bord du môle du port", en: "On the harbour jetty" },
    { fr: "Vue sur les voiliers", en: "Yacht views" },
    { fr: "Petit-déjeuner face à la mer", en: "Breakfast facing the sea" },
  ],
  stayAddress: "Le Môle, Saint-Martin-de-Ré, Île de Ré",
};

const PERLE_DE_RE: OuDormirPick = {
  name: "Appart'hotel Perle de Ré",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/22507375.jpg?k=a16b5c50cefc9f7c587e062faba4ef4517b59c142dcdf46be1967ac8e94a2679&o=",
  type: { fr: "Appart'hôtel", en: "Apart'hotel" },
  priceLevel: 2,
  features: [
    { fr: "Studios & appartements équipés", en: "Studios & equipped apartments" },
    { fr: "Idéal séjour longue durée", en: "Ideal for longer stays" },
    { fr: "Proche port et marché", en: "Near harbour and market" },
  ],
  stayAddress: "Appart'hotel Perle de Ré, Saint-Martin-de-Ré, Île de Ré",
};

const LANTERNON: OuDormirPick = {
  name: "Le Lanternon",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/446960268.jpg?k=34d01c2aba84709900f5c989154ad4151f4b799208eab01fb78238f83063d70a&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison de maître restaurée", en: "Restored manor house" },
    { fr: "Piscine & jardin fleuri", en: "Pool & flowered garden" },
    { fr: "Vue sur les vignes", en: "Vineyard views" },
  ],
  stayAddress: "Le Lanternon, Saint-Martin-de-Ré, Île de Ré",
};

const LE_SECRET: OuDormirPick = {
  name: "Le Secret",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447129372.jpg?k=400f9fafe2f56810a4d8bfcea58772906868d9f6e1e411f9797c10f548ce2a91&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Adresse discrète intra-muros", en: "Discreet address within the ramparts" },
    { fr: "Décoration soignée & cosy", en: "Tasteful cosy decor" },
    { fr: "Terrasse privée", en: "Private terrace" },
  ],
  stayAddress: "LE SECRET, Saint-Martin-de-Ré, Île de Ré",
};

const BOIS_SAINT_MARTIN: OuDormirPick = {
  name: "Le Bois Saint Martin",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/543540968.jpg?k=498fe0d7c501d4adb3b9f942d9f289b30dceec139500c2a98c5c2aa795711ae9&o=",
  type: { fr: "Résidence", en: "Residence" },
  priceLevel: 2,
  features: [
    { fr: "Appartements & studios de charme", en: "Charming studios & apartments" },
    { fr: "Piscine & jardin communs", en: "Shared pool & garden" },
    { fr: "Calme à deux pas du centre", en: "Peaceful close to the centre" },
  ],
  stayAddress: "Le Bois Saint Martin, Saint-Martin-de-Ré, Île de Ré",
};

const LE_BELEM: OuDormirPick = {
  name: "Le Belem",
  village: "Saint-Martin-de-Ré",
  villageSlug: "saint-martin-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/683631287.jpg?k=837c5232d1eba44fad9e64240992bc65428b39cb227fa8f6602fa364de8ac0fb&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Au cœur de Saint-Martin", en: "In the heart of Saint-Martin" },
    { fr: "Déco marine & authentique", en: "Nautical authentic decor" },
    { fr: "Petit-déjeuner maison", en: "Homemade breakfast" },
  ],
  stayAddress: "Le Belem, Saint-Martin-de-Ré, Île de Ré",
};

const CLOS_VIEUX_MOULINS: OuDormirPick = {
  name: "Le Clos des Vieux Moulins",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/880308702.jpg?k=df118d0f6e93b727e721aa61fea5c9873537d78071eca1b575de4ad78cd3a9c0&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Anciens moulins à vent rénovés", en: "Restored old windmills" },
    { fr: "Piscine chauffée & jardin", en: "Heated pool & garden" },
    { fr: "Nuit insolite & poétique", en: "Poetic unusual stay" },
  ],
  stayAddress: "Le Clos des Vieux Moulins, La Flotte-en-Ré, Île de Ré",
};

const ESCAPADE: OuDormirPick = {
  name: "Escapade Île de Ré",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/635741832.jpg?k=1ff13fa8395b7b1c2b54548327e2e1e1c90eedde791539ca5e9149b08dba2820&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Vue sur les vignes de La Flotte", en: "Views over La Flotte vineyards" },
    { fr: "Jardin méditerranéen", en: "Mediterranean garden" },
    { fr: "Vélos & balades à pied", en: "Bikes & walking trails" },
  ],
  stayAddress: "Escapade Île de Ré, La Flotte-en-Ré, Île de Ré",
};

const CLOS_STERNES: OuDormirPick = {
  name: "Le Clos des Sternes",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/847659715.jpg?k=ec4a60b6af4e6d7e2cb79efe68add446eabdbdf102c1c0f5172f47d3b04044b6&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison rétaise au calme", en: "Peaceful Ré island house" },
    { fr: "Jardin clos avec piscine", en: "Enclosed garden with pool" },
    { fr: "À 800m de la plage de La Cible", en: "800m from La Cible beach" },
  ],
  stayAddress: "Le Clos des Sternes, La Flotte-en-Ré, Île de Ré",
};

const GLAMPING_FLOTTE: OuDormirPick = {
  name: "Glamping Spot La Flotte",
  village: "La Flotte",
  villageSlug: "la-flotte",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/664914279.jpg?k=25a1b65346fd539c1de8247270e24a3f7be589d4de91b79fbcc0f0c10826937d&o=",
  type: { fr: "Glamping", en: "Glamping" },
  priceLevel: 2,
  features: [
    { fr: "Tentes lodge & cabanes insolites", en: "Luxury tents & unusual cabins" },
    { fr: "Nature & confort à La Flotte", en: "Nature & comfort at La Flotte" },
    { fr: "Nuit sous les étoiles", en: "Night under the stars" },
  ],
  stayAddress: "Glamping Spot, La Flotte-en-Ré, Île de Ré",
};

const HOTEL_CLOCHER: OuDormirPick = {
  name: "Hôtel Le Clocher",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528213880.jpg?k=553c7bb258ffa6cb4992cbad47b6c604d59b9db923b7ba349b91b3c1a608ec71&o=",
  type: { fr: "Hôtel 2★", en: "2★ hotel" },
  stars: 2,
  priceLevel: 1,
  features: [
    { fr: "Face à l'église d'Ars", en: "Facing Ars church" },
    { fr: "Cœur du plus beau village", en: "Heart of one of France's most beautiful villages" },
    { fr: "Calme & authenticité rétaise", en: "Calm & authentic Ré character" },
  ],
  stayAddress: "Hôtel Le Clocher, Ars-en-Ré, Île de Ré",
};

const CLOS_MARAIS_ARS: OuDormirPick = {
  name: "Clos des Marais",
  village: "Ars-en-Ré",
  villageSlug: "ars-en-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/881043685.jpg?k=280a7c5b322cf6c8fd8825507e5fe0452640695af2d5f416b7e323913bbb390b&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Vue panoramique sur les marais", en: "Panoramic salt marsh views" },
    { fr: "Maison de caractère rétaise", en: "Characterful Ré island house" },
    { fr: "Vélos & balades ornithologiques", en: "Bikes & birdwatching walks" },
  ],
  stayAddress: "Clos des Marais, Ars-en-Ré, Île de Ré",
};

const BOIS_FLOTTES: OuDormirPick = {
  name: "Les Bois Flottés en Ré",
  village: "Le Bois-Plage",
  villageSlug: "le-bois-plage-en-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/99055406.jpg?k=c9f83b155a459c7f69b923bee28cfd8d139438d94cb3117425c06221cd821e20&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison bois & plage à 200m", en: "Wooden house & beach 200m away" },
    { fr: "Design naturel & scandinave", en: "Natural Scandinavian design" },
    { fr: "Petit-déjeuner bio maison", en: "Organic homemade breakfast" },
  ],
  stayAddress: "Les Bois Flottés en Ré, Le Bois-Plage-en-Ré, Île de Ré",
};

const ILATTES: OuDormirPick = {
  name: "Ilattes entre port et plage",
  village: "Les Portes-en-Ré",
  villageSlug: "les-portes-en-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/866635006.jpg?k=17fcd23d2cb021a75bf5fe4134853c23888bf1bf924e65206eeec2d5e36b4dc1&o=",
  type: { fr: "Location saisonnière", en: "Holiday rental" },
  priceLevel: 3,
  features: [
    { fr: "Entre port naturel et plage sauvage", en: "Between natural harbour and wild beach" },
    { fr: "Cadre exceptionnel aux Portes", en: "Exceptional setting at Les Portes" },
    { fr: "Accès vélos & nature préservée", en: "Bikes & preserved nature" },
  ],
  stayAddress: "Ilattes, Les Portes-en-Ré, Île de Ré",
};

const MA_CHAMBRE_AMIS: OuDormirPick = {
  name: "Ma Chambre d'Amis",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/549286764.jpg?k=c707f60c6c389966ced1559f59acf4717ec4ede7060043a0810a158e404c3e5f&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 2,
  features: [
    { fr: "Atmosphère maison familiale", en: "Home-like friendly atmosphere" },
    { fr: "Jardin & terrasse paisible", en: "Peaceful garden & terrace" },
    { fr: "À 5 min du phare des Baleines", en: "5 min from the Baleines lighthouse" },
  ],
  stayAddress: "Ma Chambre d'Amis, Saint-Clément-des-Baleines, Île de Ré",
};

const LE_PHARE: OuDormirPick = {
  name: "Le Phare",
  village: "Saint-Clément-des-Baleines",
  villageSlug: "saint-clement-des-baleines",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532292701.jpg?k=64ef7f0f24f81207740979d053a62daee819662cffaef8fb3418dd722f36fef3&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 2,
  features: [
    { fr: "À 500m du phare des Baleines", en: "500m from Baleines lighthouse" },
    { fr: "Cadre sauvage bout du monde", en: "Wild end-of-the-world setting" },
    { fr: "Vélos & balades nocturnes au phare", en: "Bikes & evening lighthouse walks" },
  ],
  stayAddress: "Le Phare, Saint-Clément-des-Baleines, Île de Ré",
};

const ROSE_DES_VENTS: OuDormirPick = {
  name: "La Rose des Vents",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/669187782.jpg?k=45f0a92883c363fe9d0e821784f786c2450982e8e2c182de042dbd0bd0f0bda8&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison de charme & jardin", en: "Charming house & garden" },
    { fr: "À vélo de la plage", en: "Cycling distance to beach" },
    { fr: "Accueil chaleureux & petit-déjeuner maison", en: "Warm welcome & homemade breakfast" },
  ],
  stayAddress: "La Rose des Vents, Sainte-Marie-de-Ré, Île de Ré",
};

const SOLEIL_DORE: OuDormirPick = {
  name: "Le Soleil Do' Ré",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/363459556.jpg?k=9c12852fa0fcc3a255b763c0f3e32e0f97843dcbe79f7ef3bad7ed7ff6edc1bf&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison lumineuse proche plage", en: "Bright house near the beach" },
    { fr: "Terrasse ensoleillée", en: "Sunny terrace" },
    { fr: "Idéal base pour explorer l'île", en: "Ideal base for exploring the island" },
  ],
  stayAddress: "Le Soleil Do' Ré, Sainte-Marie-de-Ré, Île de Ré",
};

const UNE_PARENTHESE: OuDormirPick = {
  name: "Une Parenthèse",
  village: "Sainte-Marie-de-Ré",
  villageSlug: "sainte-marie-de-re",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/346860451.jpg?k=82cb15886110b02d6fe5c1b35cce73efa8f8dc36059b2c07ecca4670b009acc8&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Jardin piscine & terrasse", en: "Garden pool & terrace" },
    { fr: "Décoration soignée & contemporaine", en: "Tasteful contemporary decor" },
    { fr: "À vélo de la plage de Sainte-Marie", en: "Cycling distance to Sainte-Marie beach" },
  ],
  stayAddress: "Une Parenthèse, Sainte-Marie-de-Ré, Île de Ré",
};

const LA_PLAGE_RIVEDOUX: OuDormirPick = {
  name: "La Plage Rivedoux Beach House",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/852304081.jpg?k=2c9c2c6e966c8011476caa4c8fe0d8c3d0dd59ecd5b0f5a50c25cfd52bff3952&o=",
  type: { fr: "Maison de plage", en: "Beach house" },
  priceLevel: 3,
  features: [
    { fr: "Face à la plage de Rivedoux", en: "Facing Rivedoux beach" },
    { fr: "Première commune de l'île", en: "First village on the island" },
    { fr: "Accès direct sable & mer", en: "Direct beach access" },
  ],
  stayAddress: "La Plage Beach House, Rivedoux-Plage, Île de Ré",
};

const LES_PINS_RIVEDOUX: OuDormirPick = {
  name: "Les Pins Rivedoux Beach House",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/852684263.jpg?k=1231127d40df72d931a2534ed8ff08661a0b3058415213e5bb5f771fdbac3064&o=",
  type: { fr: "Maison de plage", en: "Beach house" },
  priceLevel: 3,
  features: [
    { fr: "Sous les pins centenaires", en: "Under century-old pine trees" },
    { fr: "À 50m de la plage", en: "50m from the beach" },
    { fr: "Jardin & vélos inclus", en: "Garden & bikes included" },
  ],
  stayAddress: "Les Pins Beach House, Rivedoux-Plage, Île de Ré",
};

const LES_ILES_RIVEDOUX: OuDormirPick = {
  name: "Les Îles Rivedoux Beach House",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/853250344.jpg?k=473a3460c9d740f6966f1acc6b7804a9e3f628be5f1c471479ddaa52afb2dbbf&o=",
  type: { fr: "Maison de plage", en: "Beach house" },
  priceLevel: 3,
  features: [
    { fr: "Vue sur les îlots de Ré", en: "Views over Ré's islets" },
    { fr: "Terrasse & jardin clos", en: "Terrace & enclosed garden" },
    { fr: "Jusqu'à 8 personnes", en: "Up to 8 guests" },
  ],
  stayAddress: "Les Îles Beach House, Rivedoux-Plage, Île de Ré",
};

const AU_KRE: OuDormirPick = {
  name: "Au K'Ré",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/355766379.jpg?k=61dddc783e4c88d865ab5a4962ce795a022d6e54018101105cc34bcc09777d19&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Piscine chauffée & spa", en: "Heated pool & spa" },
    { fr: "Proche pont de l'île", en: "Close to the island bridge" },
    { fr: "Accueil aux petits soins", en: "Attentive personal service" },
  ],
  stayAddress: "Au K'Ré, Rivedoux-Plage, Île de Ré",
};

const ODALYS: OuDormirPick = {
  name: "Résidence Odalys Rêve d'Île",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 1,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/699488364.jpg?k=7b3e569c690ba67139ca9c0fe9de32f8b504871044edaa446bef65ab966fb338&o=",
  type: { fr: "Résidence hôtelière", en: "Hotel residence" },
  priceLevel: 2,
  features: [
    { fr: "Studios & appartements équipés", en: "Studios & equipped apartments" },
    { fr: "Piscine chauffée", en: "Heated pool" },
    { fr: "Proche de La Rochelle par le pont", en: "Easy access from La Rochelle bridge" },
  ],
  stayAddress: "Résidence Odalys Rêve d'île, Rivedoux-Plage, Île de Ré",
};

const CLOS_PINS: OuDormirPick = {
  name: "Résidence Le Clos des Pins",
  village: "Rivedoux-Plage",
  villageSlug: "rivedoux-plage",
  photoIndex: 2,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318036846.jpg?k=c4767d6e374bcccda036f03a0372c78b376c83ae9b54576a9db3aa4901b37c83&o=",
  type: { fr: "Résidence", en: "Residence" },
  priceLevel: 2,
  features: [
    { fr: "Mobil-homes & bungalows sous les pins", en: "Mobile homes & bungalows under pine trees" },
    { fr: "Piscine", en: "Pool" },
    { fr: "Entrée de l'île", en: "Island entrance location" },
  ],
  stayAddress: "Résidence Le Clos des Pins, Rivedoux-Plage, Île de Ré",
};

const LA_VIRGINIE: OuDormirPick = {
  name: "La Virginie",
  village: "La Couarde-sur-Mer",
  villageSlug: "la-couarde-sur-mer",
  photoIndex: 0,
  imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/476368817.jpg?k=80798c303523ef6da8f49bdc73ebde19cb3a90313c54bbdd91cdca19ae1f6752&o=",
  type: { fr: "Chambre d'hôtes", en: "B&B" },
  priceLevel: 3,
  features: [
    { fr: "Maison de charme au cœur de l'île", en: "Charming house in the heart of the island" },
    { fr: "Jardin & piscine privée", en: "Garden & private pool" },
    { fr: "À vélo de la plage de la Couarde", en: "Cycling distance to La Couarde beach" },
  ],
  stayAddress: "La Virginie, La Couarde-sur-Mer, Île de Ré",
};

export const OU_DORMIR_PICKS: Record<string, OuDormirPick[]> = {
  "ou-dormir/hotels": [
    TOIRAS, RICHELIEU, CLOS_SAINT_MARTIN, SENECHAL, HOTEL_JETEE,
    OCEAN_BOIS, HIPPOCAMPE, MAREE_STE_MARIE, HOTEL_GRENETTES,
    BOIS_FLOTTAIS, GALIOTE, HOTEL_OYAT, HOTEL_FRANCAIS,
    HOTEL_VIEUX_GREEMENT, HOTEL_CLOCHER, MARTRAY,
  ],
  "ou-dormir/hotels-luxe": [
    TOIRAS, ATELIERS_IMAGE, BARONNIE, CLOS_SAINT_MARTIN, ATALANTE, RELAX_SPA,
  ],
  "ou-dormir/hotels-milieu-de-gamme": [
    RICHELIEU, SENECHAL, MARTRAY, CHAT_BOTTE, HOTEL_GRENETTES, VIGNES_CHAPELLE,
    HOTEL_PEU_BRETON, HOTEL_OYAT, PERLE_DE_RE, GRAND_LARGE, HOTEL_VIEUX_GREEMENT,
    GALIOTE, BOIS_FLOTTAIS, HOTEL_FRANCAIS, HOTEL_CLOCHER, ODESIA,
  ],
  "ou-dormir/hotels-de-charme": [
    RICHELIEU, SENECHAL, MARTRAY, VILLA_RHEA, HORTENSIAS,
    HOTEL_JETEE, GALIOTE, VIGNES_CHAPELLE, HOTEL_PEU_BRETON, HOTEL_CLOCHER,
  ],
  "ou-dormir/hotels-bord-de-mer": [
    RICHELIEU, OCEAN_BOIS, YELLOH_ILATES, GRENETTES_CAMP,
    HOTEL_GRENETTES, GRAND_LARGE, MAREE_STE_MARIE, LA_PLAGE_RIVEDOUX,
  ],
  "ou-dormir/hotels-spa": [
    BARONNIE, TOIRAS, CLOS_SAINT_MARTIN, ATALANTE, THALACAP, RICHELIEU, RELAX_SPA, AU_KRE,
  ],
  "ou-dormir/hotels-romantiques": [
    TOIRAS, ATELIERS_IMAGE, VILLA_RHEA, BARONNIE,
    HOTEL_JETEE, CLOS_GALION, CHAT_BOTTE, RELAX_SPA, UNE_PARENTHESE,
  ],
  "ou-dormir/hotels-pas-cher": [
    OCEAN_BOIS, HIPPOCAMPE, MAREE_STE_MARIE, PERGOLA,
    HOTEL_DU_PORT, BOIS_FLOTTAIS, HOTEL_OYAT, HOTEL_CLOCHER,
  ],
  "ou-dormir/hotels-avec-piscine": [
    YELLOH_TOUR, BARONNIE, RICHELIEU, INTERLUDE,
    CLOS_SAINT_MARTIN, ODESIA, ATALANTE, HOTEL_PEU_BRETON,
    CLOS_VAUBAN, AU_KRE, UNE_PARENTHESE, LA_VIRGINIE,
  ],
  "ou-dormir/campings": [
    YELLOH_TOUR, YELLOH_ILATES, GRAINETIERE, GRILLOTIERE,
    INTERLUDE, BALEINES_CAMPING, GRENETTES_CAMP, PERGOLA,
    CAMPING_TAMARINS, ZECAMPING_ARS, ZECAMPING_BOIS,
    CAMPING_PORTES, CAMPING_PLATIN, CAMPING_PEUPLIERS,
    CAMPING_FOUGERES, CAMPING_MARAISES,
  ],
  "ou-dormir/glamping": [
    YELLOH_TOUR, YELLOH_ILATES, LODGE_BALEINES, SLOW_VILLAGE, GLAMPING_FLOTTE,
  ],
  "ou-dormir/locations-vacances": [
    GITE_INTRA, MAISON_JARDIN, MAISON_PECHEUR, GITE_GROUPE, VILLA_FLOTS,
    ILATTES, LA_PLAGE_RIVEDOUX, LES_PINS_RIVEDOUX, LES_ILES_RIVEDOUX,
    BOIS_SAINT_MARTIN, ODALYS, CLOS_PINS,
  ],
  "ou-dormir/maisons-dhotes": [
    VILLA_RHEA, COTE_MARAIS, MAISON_PHARE, HORTENSIAS, CLOS_GALION,
    HOTE_PORTES, CORPS_DE_GARDE, CLOS_VAUBAN, LANTERNON, LE_SECRET,
    BOIS_FLOTTES, MA_CHAMBRE_AMIS, ROSE_DES_VENTS, SOLEIL_DORE,
    UNE_PARENTHESE, LA_VIRGINIE, ESCAPADE, CLOS_STERNES,
    CLOS_MARAIS_ARS, CLOS_VIEUX_MOULINS, AU_KRE, LE_MOLE,
    LE_PHARE, LE_BELEM,
  ],
  "ou-dormir/proche-plage": [
    YELLOH_TOUR, RICHELIEU, GRENETTES_CAMP, OCEAN_BOIS,
    GRILLOTIERE, GRAND_LARGE, HOTEL_GRENETTES, CAMPING_TAMARINS,
    LA_PLAGE_RIVEDOUX, LES_PINS_RIVEDOUX, CHAT_BOTTE,
  ],
  "ou-dormir/en-famille": [
    YELLOH_TOUR, YELLOH_ILATES, GRAINETIERE, GRENETTES_CAMP,
    INTERLUDE, CAMPING_PEUPLIERS, ODESIA, ZECAMPING_BOIS,
    LA_PLAGE_RIVEDOUX, LES_ILES_RIVEDOUX, CAMPING_PORTES,
  ],
  "ou-dormir/grand-groupe": [
    GITE_GROUPE, VILLA_FLOTS, YELLOH_TOUR, YELLOH_ILATES, LES_ILES_RIVEDOUX,
  ],
  "ou-dormir/week-end-amoureux": [
    TOIRAS, ATELIERS_IMAGE, VILLA_RHEA, BARONNIE,
    HOTEL_JETEE, CLOS_GALION, CHAT_BOTTE, RELAX_SPA,
    CLOS_VIEUX_MOULINS, LANTERNON, LE_SECRET, CORPS_DE_GARDE,
  ],
  "ou-dormir/lune-de-miel": [
    TOIRAS, BARONNIE, ATELIERS_IMAGE, CLOS_SAINT_MARTIN, RELAX_SPA,
    CLOS_GALION, CHAT_BOTTE, CLOS_VAUBAN,
  ],
  "ou-dormir/animaux-acceptes": [
    GRILLOTIERE, GITE_NATURE, SENECHAL, MAISON_JARDIN,
    ZECAMPING_ARS, ZECAMPING_BOIS, CLOS_MARAIS_ARS, CAMPING_PORTES,
  ],
  "ou-dormir/sans-voiture": [
    TOIRAS, RICHELIEU, ATELIERS_IMAGE, SENECHAL,
    HOTEL_JETEE, HOTEL_DU_PORT, GALIOTE, HOTEL_CLOCHER, LE_MOLE, LE_BELEM,
  ],
  "ou-dormir/proche-port": [
    TOIRAS, ATELIERS_IMAGE, BARONNIE, HOTEL_JETEE,
    HOTEL_DU_PORT, CLOS_GALION, LE_MOLE, HOTEL_VIEUX_GREEMENT, LE_BELEM,
  ],
  "ou-dormir/seminaire-entreprise": [
    BARONNIE, RICHELIEU, TOIRAS, GITE_GROUPE, CLOS_SAINT_MARTIN, ODESIA,
  ],
  "ou-dormir/reunion-famille": [
    GITE_GROUPE, VILLA_FLOTS, YELLOH_TOUR, MAISON_JARDIN, YELLOH_ILATES,
    LES_ILES_RIVEDOUX, CAMPING_PEUPLIERS,
  ],
  "ou-dormir/anniversaire": [
    TOIRAS, ATELIERS_IMAGE, RICHELIEU, BARONNIE, CLOS_SAINT_MARTIN, RELAX_SPA,
  ],
  "ou-dormir/evg": [
    YELLOH_ILATES, GITE_GROUPE, SENECHAL, ZECAMPING_ARS, CAMPING_PORTES,
  ],
  "ou-dormir/evjf": [
    YELLOH_ILATES, VILLA_FLOTS, BARONNIE, ATALANTE, RELAX_SPA, UNE_PARENTHESE,
  ],
  "ou-dormir/avec-piscine-interieure": [
    BARONNIE, TOIRAS, RICHELIEU, CLOS_SAINT_MARTIN,
  ],
  "ou-dormir/thalasso": [
    ATALANTE, THALACAP, BARONNIE, TOIRAS, RELAX_SPA,
  ],
  "ou-dormir/ete-2026": [
    YELLOH_TOUR, YELLOH_ILATES, TOIRAS, GRAINETIERE, RICHELIEU,
    CAMPING_PEUPLIERS, ZECAMPING_BOIS, INTERLUDE, CAMPING_TAMARINS, BALEINES_CAMPING,
  ],
  "ou-dormir/ete-2027": [
    YELLOH_TOUR, YELLOH_ILATES, TOIRAS, GRAINETIERE, RICHELIEU,
    CAMPING_PEUPLIERS, ZECAMPING_BOIS, INTERLUDE, CAMPING_TAMARINS, BALEINES_CAMPING,
  ],
};
