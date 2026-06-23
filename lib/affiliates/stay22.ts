// Integration Stay22 (affiliation hebergement). L'ID d'affiliation est lu cote
// serveur depuis l'environnement, jamais code en dur dans les pages.
// Doc carte embarquee : https://www.stay22.com/

const AID = process.env.STAY22_AID || "";
const LMA = process.env.NEXT_PUBLIC_STAY22_LMA_ID || "";

export function hasStay22(): boolean {
  return AID.length > 0;
}

export type Stay22MapOpts = {
  lat: number;
  lng: number;
  zoom?: number;
  campaign?: string;
  checkin?: string; // YYYY-MM-DD
  checkout?: string; // YYYY-MM-DD
  markerLabel?: string;
  maincolor?: string; // hex sans #
};

/** URL de la carte Stay22 a embarquer dans une iframe. */
export function stay22MapSrc(opts: Stay22MapOpts): string {
  const p = new URLSearchParams();
  p.set("aid", AID || "PLACEHOLDER_AID");
  p.set("lat", String(opts.lat));
  p.set("lng", String(opts.lng));
  if (opts.zoom) p.set("zoom", String(opts.zoom));
  if (opts.markerLabel) p.set("markerlabel", opts.markerLabel);
  if (opts.checkin) p.set("checkin", opts.checkin);
  if (opts.checkout) p.set("checkout", opts.checkout);
  if (opts.campaign) p.set("campaign", opts.campaign);
  if (opts.maincolor) p.set("maincolor", opts.maincolor.replace(/^#/, ""));
  p.set("hidemstickyfooter", "true");
  return `https://www.stay22.com/embed/gm?${p.toString()}`;
}

/** Lien de secours (nouvelle fenetre) si l'utilisateur prefere ouvrir la recherche. */
export function stay22Url(addressOrLabel: string): string {
  const p = new URLSearchParams();
  if (AID) p.set("aid", AID);
  if (LMA) p.set("lmaid", LMA);
  p.set("address", addressOrLabel);
  return `https://www.stay22.com/l/${AID || "partner"}?${p.toString()}`;
}
