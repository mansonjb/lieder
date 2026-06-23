export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://exploreiledere.com"
).replace(/\/+$/, "");

// Nom de marque. Surchargeable par env (NEXT_PUBLIC_SITE_NAME).
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Explore Île de Ré";

// Couleur d'accent injectee dans les cartes Stay22 (sans #) : teal de la marque.
export const BRAND_ACCENT = "2e7d74";
