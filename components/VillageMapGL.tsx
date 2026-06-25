"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { Map as MLMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Locale } from "@/lib/i18n";

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

const ISLAND_CENTER: [number, number] = [-1.53, 46.192];
const ISLAND_ZOOM = 10.8;

type Village = {
  slug: string;
  name: string;
  lng: number;
  lat: number;
};

const VILLAGES: Village[] = [
  { slug: "les-portes-en-re",           name: "Les Portes-en-Ré",           lng: -1.7996, lat: 46.2462 },
  { slug: "saint-clement-des-baleines", name: "Saint-Clément-des-Baleines", lng: -1.6688, lat: 46.2324 },
  { slug: "ars-en-re",                  name: "Ars-en-Ré",                  lng: -1.5125, lat: 46.2128 },
  { slug: "loix",                       name: "Loix",                       lng: -1.4417, lat: 46.2350 },
  { slug: "la-couarde-sur-mer",         name: "La Couarde-sur-Mer",         lng: -1.4183, lat: 46.1965 },
  { slug: "le-bois-plage-en-re",        name: "Le Bois-Plage-en-Ré",       lng: -1.3953, lat: 46.1835 },
  { slug: "saint-martin-de-re",         name: "Saint-Martin-de-Ré",         lng: -1.3617, lat: 46.2022 },
  { slug: "la-flotte",                  name: "La Flotte",                  lng: -1.3218, lat: 46.1847 },
  { slug: "sainte-marie-de-re",         name: "Sainte-Marie-de-Ré",         lng: -1.2852, lat: 46.1584 },
  { slug: "rivedoux-plage",             name: "Rivedoux-Plage",             lng: -1.2732, lat: 46.1558 },
];

export function VillageMapGL({
  locale,
  highlighted,
}: {
  locale: Locale;
  highlighted?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MLMap | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: STYLE_URL,
      center: ISLAND_CENTER,
      zoom: ISLAND_ZOOM,
      minZoom: 9,
      maxZoom: 14,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      // All villages source
      map.addSource("villages", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: VILLAGES.map((v) => ({
            type: "Feature",
            geometry: { type: "Point", coordinates: [v.lng, v.lat] },
            properties: {
              slug: v.slug,
              name: v.name,
              highlighted: v.slug === highlighted,
            },
          })),
        } as GeoJSON.FeatureCollection,
      });

      // Regular village dots (teal)
      map.addLayer({
        id: "villages-dot",
        type: "circle",
        source: "villages",
        filter: ["!=", ["get", "highlighted"], true],
        paint: {
          "circle-color": "#0f766e",
          "circle-radius": 7,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2,
        },
      });

      // Highlighted village dot (amber)
      map.addLayer({
        id: "village-highlighted",
        type: "circle",
        source: "villages",
        filter: ["==", ["get", "highlighted"], true],
        paint: {
          "circle-color": "#f59e0b",
          "circle-radius": 11,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 3,
        },
      });

      // Village name labels
      map.addLayer({
        id: "villages-label",
        type: "symbol",
        source: "villages",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Noto Sans Regular"],
          "text-size": 11,
          "text-offset": [0, 1.4],
          "text-anchor": "top",
          "text-allow-overlap": false,
          "text-ignore-placement": false,
        },
        paint: {
          "text-color": "#1f2937",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.5,
        },
      });

      // Click → popup with link
      map.on("click", ["villages-dot", "village-highlighted"], (e) => {
        const f = e.features?.[0];
        if (!f) return;
        const [lng, lat] = (f.geometry as GeoJSON.Point).coordinates;
        const slug = f.properties?.slug as string;
        const name = f.properties?.name as string;
        const href = locale === "fr" ? `/villages/${slug}` : `/en/villages/${slug}`;
        const label = locale === "fr" ? "Voir le village →" : "See village →";

        new maplibregl.Popup({ closeButton: true, maxWidth: "200px", offset: 12 })
          .setLngLat([lng, lat])
          .setHTML(
            `<div style="font-family:system-ui,sans-serif;padding:2px">
              <div style="font-weight:600;font-size:13px;color:#111827;margin-bottom:6px">${name}</div>
              <a href="${href}" style="font-size:11px;color:#0f766e;text-decoration:none;font-weight:500">${label}</a>
            </div>`
          )
          .addTo(map);
      });

      map.on("mouseenter", "villages-dot", () => { map.getCanvas().style.cursor = "pointer"; });
      map.on("mouseenter", "village-highlighted", () => { map.getCanvas().style.cursor = "pointer"; });
      map.on("mouseleave", "villages-dot", () => { map.getCanvas().style.cursor = ""; });
      map.on("mouseleave", "village-highlighted", () => { map.getCanvas().style.cursor = ""; });

      setReady(true);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [highlighted, locale]);

  const heading = locale === "fr" ? "Les villages de l'Île de Ré" : "Villages of Île de Ré";

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-line bg-white px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sea-deep">
          🗺 {heading}
        </span>
        <span className="ml-auto font-mono text-[10px] text-muted">10 communes</span>
      </div>

      {/* Map container */}
      <div className="relative h-72 sm:h-80">
        <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center bg-sand">
            <div className="h-2 w-16 animate-pulse rounded-full bg-sea/20" />
          </div>
        )}
      </div>
    </div>
  );
}
