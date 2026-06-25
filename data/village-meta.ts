export type AccommodationPick = {
  name: string;
  type: { fr: string; en: string };
  price: string;
  stars?: number;
};

export type VillageMeta = {
  distancePontKm: number;
  beachCount: number;
  pbeauVillage?: boolean;
  tags: { fr: string; en: string }[];
  goodToKnow: { fr: string; en: string }[];
  marketDay: { fr: string; en: string };
  restaurantPicks?: { name: string; tag: { fr: string; en: string }; price: string }[];
  accommodationPicks?: AccommodationPick[];
};

export const VILLAGE_META: Record<string, VillageMeta> = {
  "rivedoux-plage": {
    distancePontKm: 4,
    beachCount: 3,
    tags: [
      { fr: "Entrée de l'île", en: "Gateway village" },
      { fr: "Port de pêche", en: "Fishing port" },
      { fr: "Côté pertuis", en: "Sheltered coast" },
    ],
    goodToKnow: [
      { fr: "Première commune après le pont — la plus facile d'accès depuis le continent", en: "First village past the bridge — easiest access from the mainland" },
      { fr: "Plage de Sablanceaux face au continent : vents et courants à surveiller, moins fréquentée que les plages de l'ouest", en: "Sablanceaux beach faces the mainland — watch winds and currents, less crowded than western beaches" },
      { fr: "Point de départ idéal pour longer la côte est à vélo jusqu'à La Flotte et Saint-Martin", en: "Ideal starting point for cycling the eastern coast to La Flotte and Saint-Martin" },
    ],
    marketDay: { fr: "Samedi matin", en: "Saturday morning" },
    restaurantPicks: [
      { name: "Le Phare", tag: { fr: "Brasserie vue mer", en: "Sea-view brasserie" }, price: "€€" },
      { name: "La Flambée", tag: { fr: "Poissons & grillades", en: "Fish & grills" }, price: "€€" },
    ],
    accommodationPicks: [
      { name: "Camping La Pergola", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
      { name: "Gîtes du Pertuis", type: { fr: "Locations semaine", en: "Weekly rentals" }, price: "€€" },
      { name: "Villa du Sablanceaux", type: { fr: "Chambres d'hôtes", en: "B&B" }, price: "€€€" },
    ],
  },
  "sainte-marie-de-re": {
    distancePontKm: 8,
    beachCount: 3,
    tags: [
      { fr: "Station balnéaire", en: "Beach resort" },
      { fr: "Côté pertuis", en: "Sheltered coast" },
      { fr: "Eau calme", en: "Calm waters" },
    ],
    goodToKnow: [
      { fr: "L'une des communes les plus animées en été — animations garanties mais affluence à prévoir", en: "One of the liveliest communes in summer — expect crowds but also guaranteed atmosphere" },
      { fr: "Les Grenettes et la Cible : eau calme et peu profonde, idéales pour les enfants et les baigneurs débutants", en: "Les Grenettes and La Cible: calm, shallow water — ideal for children and beginner swimmers" },
      { fr: "Marché quotidien en juillet-août, jeudi et dimanche hors saison ; excellents producteurs locaux", en: "Daily market July-August, Thursday and Sunday off-season; excellent local producers" },
    ],
    marketDay: { fr: "Jeu. & Dim. (été : quotidien)", en: "Thu. & Sun. (summer: daily)" },
    accommodationPicks: [
      { name: "Camping Les Grenettes", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
      { name: "Résidence Les Baleines", type: { fr: "Locations semaine", en: "Weekly rentals" }, price: "€€" },
      { name: "Maison du Pertuis", type: { fr: "Chambres d'hôtes", en: "B&B" }, price: "€€€" },
    ],
  },
  "la-flotte": {
    distancePontKm: 13,
    beachCount: 2,
    pbeauVillage: true,
    tags: [
      { fr: "Plus Beau Village", en: "Plus Beau Village" },
      { fr: "Port de pêche actif", en: "Working harbour" },
      { fr: "Gastronomie", en: "Gastronomy" },
    ],
    goodToKnow: [
      { fr: "Labellisé « Plus Beaux Villages de France » — l'un des deux seuls de l'île avec Ars-en-Ré", en: "Certified as one of France's Most Beautiful Villages — one of only two on Île de Ré" },
      { fr: "Le port de La Flotte accueille des pêcheurs actifs : les restaurants servent le poisson du matin même", en: "La Flotte's harbour still has working fishermen — restaurants serve that morning's catch" },
      { fr: "Marché dans les halles médiévales le mercredi et le samedi matin ; marché nocturne en juillet-août", en: "Market in the medieval covered hall Wednesday and Saturday; night market July-August" },
    ],
    marketDay: { fr: "Mer. & Sam.", en: "Wed. & Sat." },
    restaurantPicks: [
      { name: "L'Ecailler", tag: { fr: "Étoile Michelin", en: "Michelin star" }, price: "€€€" },
      { name: "Chai Nous Comme Chai Vous", tag: { fr: "Gastronomique créatif", en: "Creative gastronomy" }, price: "€€€" },
      { name: "Le Saint Georges", tag: { fr: "Bistrot de port", en: "Harbour bistrot" }, price: "€€" },
    ],
    accommodationPicks: [
      { name: "Hôtel Le Richelieu", type: { fr: "Hôtel face à la mer", en: "Seafront hotel" }, price: "€€€", stars: 4 },
      { name: "La Villa Rhéa", type: { fr: "Chambres d'hôtes", en: "B&B" }, price: "€€€" },
      { name: "Camping La Grillotière", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
    ],
  },
  "saint-martin-de-re": {
    distancePontKm: 15,
    beachCount: 2,
    tags: [
      { fr: "Patrimoine UNESCO", en: "UNESCO Heritage" },
      { fr: "Capitale de l'île", en: "Island capital" },
      { fr: "Port historique", en: "Historic port" },
    ],
    goodToKnow: [
      { fr: "Les fortifications Vauban sont classées au Patrimoine mondial de l'UNESCO depuis 2008", en: "The Vauban fortifications have been UNESCO World Heritage since 2008" },
      { fr: "En haute saison, le centre est inaccessible en voiture — garez-vous en périphérie et terminez à vélo", en: "In high season the centre is car-free — park outside and cycle the last stretch" },
      { fr: "Les Halles (marché couvert, 2 rue Jean Jaurès) ouvrent quotidiennement d'avril à septembre", en: "Les Halles covered market (2 rue Jean Jaurès) open daily from April to September" },
    ],
    marketDay: { fr: "Quotidien avr-sep.", en: "Daily Apr-Sep." },
    restaurantPicks: [
      { name: "Le Réfectoire", tag: { fr: "Bistronomique", en: "Bistronomy" }, price: "€€" },
      { name: "La Table d'Olivia", tag: { fr: "Gastronomique", en: "Gastronomic" }, price: "€€€" },
      { name: "Le Tout du Cru", tag: { fr: "Bar à huîtres", en: "Oyster bar" }, price: "€€" },
    ],
    accommodationPicks: [
      { name: "Hôtel de Toiras", type: { fr: "Relais & Châteaux 5★", en: "Relais & Châteaux 5★" }, price: "€€€€", stars: 5 },
      { name: "Les Ateliers de l'Image", type: { fr: "Boutique hôtel", en: "Boutique hotel" }, price: "€€€€" },
      { name: "Gîtes intra-muros", type: { fr: "Locations centre historique", en: "Historic centre rentals" }, price: "€€€" },
    ],
  },
  "le-bois-plage-en-re": {
    distancePontKm: 20,
    beachCount: 5,
    tags: [
      { fr: "Capitale des plages", en: "Beach capital" },
      { fr: "Vignes de l'île", en: "Island vineyards" },
      { fr: "Côte atlantique", en: "Atlantic coast" },
    ],
    goodToKnow: [
      { fr: "Le Bois-Plage possède le plus grand linéaire de plages atlantiques accessibles de l'île", en: "Le Bois-Plage has the longest stretch of accessible Atlantic beaches on the island" },
      { fr: "Les vignes AOC Pineau-des-Charentes entourent le village — plusieurs domaines ouvrent à la visite", en: "AOC Pineau-des-Charentes vineyards surround the village — several estates open for visits" },
      { fr: "Les vents d'ouest sont dominants : parfaits pour le kitesurf et le windsurf, moins pour la baignade tranquille", en: "Westerly winds dominate — ideal for kitesurfing and windsurfing, less so for calm swimming" },
    ],
    marketDay: { fr: "Quotidien (été), jeu. & dim.", en: "Daily (summer), Thu. & Sun." },
    accommodationPicks: [
      { name: "Camping Yelloh! La Tour des Prises", type: { fr: "Camping 5★", en: "5★ campsite" }, price: "€€", stars: 5 },
      { name: "Camping Interlude", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
      { name: "Hôtel L'Océan", type: { fr: "Hôtel village", en: "Village hotel" }, price: "€€", stars: 2 },
    ],
  },
  "la-couarde-sur-mer": {
    distancePontKm: 24,
    beachCount: 3,
    tags: [
      { fr: "Deux côtes à vélo", en: "Two coasts by bike" },
      { fr: "Marais & atlantique", en: "Marshes & Atlantic" },
      { fr: "Village central", en: "Central village" },
    ],
    goodToKnow: [
      { fr: "La Couarde est au carrefour géographique de l'île — 15 min à vélo des plages atlantiques et des marais du pertuis", en: "La Couarde is at the geographical crossroads of the island — 15 min by bike to Atlantic beaches or sheltered marshes" },
      { fr: "Le Réseau de pistes cyclables passe directement par le village, idéal comme point de départ de balades", en: "The island's main cycle path runs through the village — a natural hub for bike rides" },
      { fr: "Le marché de La Couarde est réputé pour ses producteurs de légumes bio et ses huîtres", en: "La Couarde's market is known for its organic vegetable growers and fresh oysters" },
    ],
    marketDay: { fr: "Quotidien (été), lun. & ven.", en: "Daily (summer), Mon. & Fri." },
    accommodationPicks: [
      { name: "Camping La Grainetière", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
      { name: "Camping de la Côte", type: { fr: "Camping 4★ bord de mer", en: "4★ seafront campsite" }, price: "€", stars: 4 },
      { name: "Gîtes & villas", type: { fr: "Locations semaine", en: "Weekly rentals" }, price: "€€-€€€" },
    ],
  },
  "loix": {
    distancePontKm: 28,
    beachCount: 2,
    tags: [
      { fr: "Presqu'île", en: "Peninsula" },
      { fr: "Marais salants", en: "Salt marshes" },
      { fr: "Bout du monde", en: "End of the world" },
    ],
    goodToKnow: [
      { fr: "Loix est une presqu'île dans la presqu'île — on n'y passe pas par hasard, on y vient intentionnellement", en: "Loix is a peninsula within a peninsula — you don't end up here by accident" },
      { fr: "L'Écomusée du marais salant explique la production de fleur de sel, avec accès à des marais actifs", en: "The salt marsh ecomuseum explains fleur de sel production, with access to working marshes" },
      { fr: "Village très calme hors saison, quasiment sans restaurant ouvert — à prévoir si vous séjournez en hiver", en: "Very quiet off-season with almost no restaurants open — plan accordingly if staying in winter" },
    ],
    marketDay: { fr: "Mar. & Ven. (été : quotidien)", en: "Tue. & Fri. (summer: daily)" },
    restaurantPicks: [
      { name: "La Cabane du Grouin", tag: { fr: "Huîtres & fruits de mer", en: "Oysters & seafood" }, price: "€€" },
      { name: "La Route du Sel", tag: { fr: "Bistrot local", en: "Local bistrot" }, price: "€€" },
      { name: "La Cabane du Feneau", tag: { fr: "Cabane ostréicole", en: "Oyster cabin" }, price: "€" },
    ],
    accommodationPicks: [
      { name: "Gîtes de la presqu'île", type: { fr: "Locations semaine", en: "Weekly rentals" }, price: "€€" },
      { name: "Chambres d'hôtes du Fier", type: { fr: "Chambres d'hôtes", en: "B&B" }, price: "€€€" },
    ],
  },
  "ars-en-re": {
    distancePontKm: 32,
    beachCount: 2,
    pbeauVillage: true,
    tags: [
      { fr: "Plus Beau Village", en: "Plus Beau Village" },
      { fr: "Clocher amer de mer", en: "Maritime landmark spire" },
      { fr: "Huîtres & fleur de sel", en: "Oysters & sea salt" },
    ],
    goodToKnow: [
      { fr: "L'un des deux villages « Plus Beaux Villages de France » de l'île — l'autre est La Flotte", en: "One of Île de Ré's two Plus Beaux Villages de France — the other is La Flotte" },
      { fr: "Le clocher noir et blanc servait d'amer (repère visuel) aux marins entrant dans le Fier d'Ars", en: "The black-and-white church spire served as a visual landmark for sailors entering the Fier d'Ars" },
      { fr: "Le marché du vendredi est l'un des plus animés et des plus locaux de l'île — arrivez avant 9h30", en: "Friday market is one of the island's most local and lively — arrive before 9:30am" },
    ],
    marketDay: { fr: "Vendredi matin", en: "Friday morning" },
    accommodationPicks: [
      { name: "Hôtel du Martray", type: { fr: "Hôtel de charme", en: "Boutique hotel" }, price: "€€€", stars: 3 },
      { name: "Camping de la Monnerie", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
      { name: "Chambres d'hôtes du village", type: { fr: "Chambres d'hôtes", en: "B&B" }, price: "€€" },
    ],
  },
  "saint-clement-des-baleines": {
    distancePontKm: 35,
    beachCount: 2,
    tags: [
      { fr: "Phare des Baleines", en: "Whales' Lighthouse" },
      { fr: "Réserve naturelle", en: "Nature reserve" },
      { fr: "Bout de l'île", en: "Island's western tip" },
    ],
    goodToKnow: [
      { fr: "Le Phare des Baleines (57 m, 257 marches) offre le plus beau panorama de l'île", en: "Phare des Baleines (57 m, 257 steps) offers the finest panorama on the island" },
      { fr: "La Réserve naturelle de Lilleau des Niges, juste à côté, accueille flamants roses, avocettes et canards migrateurs", en: "Lilleau des Niges nature reserve nearby hosts flamingos, avocets and migrating ducks" },
      { fr: "La piscine d'eau de mer en accès libre est l'une des curiosités locales — chauffée naturellement par les marées", en: "The free-access natural seawater pool is a local curiosity — warmed naturally by the tides" },
    ],
    marketDay: { fr: "Quotidien (été)", en: "Daily (summer)" },
    restaurantPicks: [
      { name: "Le Chat Botté", tag: { fr: "Gastronomique", en: "Gastronomic" }, price: "€€€" },
      { name: "JUSTE Restaurant", tag: { fr: "Fruits de mer & phare", en: "Seafood by the lighthouse" }, price: "€€" },
      { name: "A l'Ouest", tag: { fr: "Crêperie créative (Gault & Millau)", en: "Creative crêperie (Gault & Millau)" }, price: "€" },
    ],
    accommodationPicks: [
      { name: "Camping Les Baleines", type: { fr: "Camping 4★ près du phare", en: "4★ campsite near lighthouse" }, price: "€", stars: 4 },
      { name: "La Maison du Phare", type: { fr: "Chambres d'hôtes", en: "B&B" }, price: "€€€" },
      { name: "Gîtes du bout de l'île", type: { fr: "Locations semaine", en: "Weekly rentals" }, price: "€€" },
    ],
  },
  "les-portes-en-re": {
    distancePontKm: 38,
    beachCount: 4,
    tags: [
      { fr: "Extrémité nord", en: "Northern tip" },
      { fr: "Dunes & forêt", en: "Dunes & forest" },
      { fr: "Fier d'Ars", en: "Fier d'Ars lagoon" },
    ],
    goodToKnow: [
      { fr: "Les Portes-en-Ré est le village le plus reculé de l'île — sérénité garantie hors juillet-août", en: "Les Portes-en-Ré is the most remote village on the island — guaranteed peace outside July-August" },
      { fr: "La forêt de Trousse-Chemise et les dunes du nord offrent les paysages les plus sauvages de l'île", en: "The Trousse-Chemise forest and northern dunes offer the island's wildest landscapes" },
      { fr: "Le Fier d'Ars, lagon naturel, est un site privilégié pour l'observation des oiseaux migrateurs", en: "The Fier d'Ars natural lagoon is one of the best birdwatching spots on the island" },
    ],
    marketDay: { fr: "Quotidien (été)", en: "Daily (summer)" },
    restaurantPicks: [
      { name: "Le Bout du Monde", tag: { fr: "Mouclade & tapas", en: "Mouclade & tapas" }, price: "€€" },
      { name: "Les Huîtres de Trousse-Chemise", tag: { fr: "Dégustation directe", en: "Direct farm tasting" }, price: "€" },
      { name: "Le Bistrot des Portes", tag: { fr: "Ouvert toute l'année", en: "Open year-round" }, price: "€€" },
    ],
    accommodationPicks: [
      { name: "Camping Yelloh! Les Ilates", type: { fr: "Camping 5★ prestige", en: "5★ premium campsite" }, price: "€€", stars: 5 },
      { name: "Camping de la Monnerie", type: { fr: "Camping 4★", en: "4★ campsite" }, price: "€", stars: 4 },
      { name: "Gîtes & maisons de charme", type: { fr: "Locations semaine", en: "Weekly rentals" }, price: "€€€" },
    ],
  },
};
