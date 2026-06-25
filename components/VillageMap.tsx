"use client";
import dynamic from "next/dynamic";
import type { Locale } from "@/lib/i18n";

const VillageMapGL = dynamic(
  () => import("@/components/VillageMapGL").then((m) => m.VillageMapGL),
  {
    ssr: false,
    loading: () => (
      <div className="my-8 overflow-hidden rounded-2xl border border-line shadow-sm">
        <div className="flex items-center gap-3 border-b border-line bg-white px-5 py-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sea-deep">
            🗺 Carte des villages
          </span>
        </div>
        <div className="h-72 animate-pulse bg-sand sm:h-80" />
      </div>
    ),
  }
);

export function VillageMap({
  locale,
  highlighted,
}: {
  locale: Locale;
  highlighted?: string;
}) {
  return <VillageMapGL locale={locale} highlighted={highlighted} />;
}
