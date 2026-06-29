export type VillaBooking = {
  name: string;
  city: string;
  villageSlug: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  highlights: string[];
  url: string;
  currency: string;
};

import rawData from "./villas-booking.json";
export const VILLAS_BOOKING: VillaBooking[] = rawData as VillaBooking[];
