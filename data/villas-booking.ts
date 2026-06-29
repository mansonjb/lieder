export type VillaBooking = {
  name: string;
  city: string;
  villageSlug: string;
  type: string;
  pricePerNight: number;
  rating: number;
  ratingLabel: string;
  reviews: number;
  description: string;
  image: string;
  images: string[];
  highlights: string[];
  url: string;
  currency: string;
};

import rawData from "./villas-booking.json";
export const VILLAS_BOOKING: VillaBooking[] = rawData as VillaBooking[];
