import type { Locale } from "@/lib/i18n";
import Link from "next/link";

// Island outline — simplified polygon of Île de Ré (west → east)
const ISLAND_PATH = [
  "M 26,55",
  "Q 65,28 100,30",
  "Q 168,32 235,42",
  "Q 310,50 385,52",
  "Q 430,55 472,57",
  "Q 510,59 540,60",
  "Q 550,50 558,42",
  "Q 575,26 595,18",
  "Q 608,12 610,14",
  "Q 622,16 638,35",
  "Q 646,52 655,68",
  "Q 690,73 722,75",
  "Q 760,84 798,93",
  "Q 848,110 895,128",
  "L 902,148",
  "L 895,168",
  "Q 868,181 838,181",
  "Q 800,178 760,174",
  "Q 720,165 690,157",
  "Q 662,149 645,140",
  "Q 618,133 580,130",
  "Q 528,126 472,124",
  "Q 428,122 385,122",
  "Q 312,118 235,114",
  "Q 168,106 100,98",
  "Q 62,87 26,77",
  "Z",
].join(" ");

type VillagePin = {
  slug: string;
  short: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor: "start" | "middle" | "end";
  leader?: true;
};

const PINS: VillagePin[] = [
  { slug: "les-portes-en-re",           short: "Les Portes",    x: 26,  y: 65,  labelX: 22,  labelY: 49,  anchor: "start"  },
  { slug: "saint-clement-des-baleines", short: "St-Clément",   x: 235, y: 77,  labelX: 235, labelY: 61,  anchor: "middle" },
  { slug: "ars-en-re",                  short: "Ars-en-Ré",    x: 488, y: 88,  labelX: 488, labelY: 72,  anchor: "middle" },
  { slug: "loix",                       short: "Loix",          x: 608, y: 26,  labelX: 608, labelY: 10,  anchor: "middle" },
  { slug: "la-couarde-sur-mer",         short: "La Couarde",   x: 645, y: 105, labelX: 645, labelY: 120, anchor: "middle" },
  { slug: "le-bois-plage-en-re",        short: "Le Bois-Plage",x: 682, y: 130, labelX: 682, labelY: 147, anchor: "middle" },
  { slug: "saint-martin-de-re",         short: "St-Martin",    x: 734, y: 87,  labelX: 734, labelY: 70,  anchor: "middle" },
  { slug: "la-flotte",                  short: "La Flotte",    x: 800, y: 130, labelX: 800, labelY: 148, anchor: "middle" },
  { slug: "sainte-marie-de-re",         short: "Ste-Marie",    x: 858, y: 160, labelX: 858, labelY: 186, anchor: "middle"             },
  { slug: "rivedoux-plage",             short: "Rivedoux",     x: 882, y: 168, labelX: 880, labelY: 152, anchor: "end",   leader: true },
];

export function VillageMap({
  locale,
  highlighted,
}: {
  locale: Locale;
  highlighted?: string;
}) {
  const heading = locale === "fr" ? "Les villages de l'Île de Ré" : "Villages of Île de Ré";
  const bridgeLabel = locale === "fr" ? "Pont" : "Bridge";

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sea-deep">
          🗺 {heading}
        </span>
        <span className="ml-auto font-mono text-[10px] text-muted">
          {locale === "fr" ? "10 communes" : "10 communes"}
        </span>
      </div>

      {/* Map */}
      <div className="relative overflow-x-auto">
        <svg
          viewBox="0 0 940 215"
          className="w-full min-w-[480px]"
          aria-label={heading}
          style={{ display: "block" }}
        >
          {/* Sea background */}
          <rect width="940" height="215" fill="#dff0ee" rx="0" />

          {/* Island fill */}
          <path d={ISLAND_PATH} fill="#f5f0e8" stroke="#3fa99b" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Bridge (east end, dashed) */}
          <line x1="902" y1="148" x2="934" y2="162" stroke="#3fa99b" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5 3" />
          <text x="930" y="175" fontSize="8" fill="#3fa99b" fillOpacity="0.7" textAnchor="end" fontFamily="monospace">
            {bridgeLabel}
          </text>

          {/* North arrow */}
          <g transform="translate(22,185)">
            <line x1="0" y1="18" x2="0" y2="2" stroke="#6b7280" strokeWidth="1.5" />
            <polygon points="0,0 -4,8 4,8" fill="#6b7280" />
            <text x="0" y="28" fontSize="8" textAnchor="middle" fill="#6b7280" fontFamily="monospace">N</text>
          </g>

          {/* Village pins */}
          {PINS.map((v) => {
            const isHighlighted = v.slug === highlighted;
            const href = locale === "fr" ? `/villages/${v.slug}` : `/en/villages/${v.slug}`;
            const dotR = isHighlighted ? 6 : 4;
            const dotFill = isHighlighted ? "#f59e0b" : "#0f766e";
            const dotStroke = isHighlighted ? "#b45309" : "#0f766e";
            const labelWeight = isHighlighted ? "700" : "500";
            const labelFill = isHighlighted ? "#b45309" : "#374151";

            return (
              <Link key={v.slug} href={href}>
                {/* Leader line */}
                {v.leader && (
                  <line
                    x1={v.x} y1={v.y}
                    x2={v.labelX + (v.anchor === "end" ? 0 : 0)}
                    y2={v.labelY + 1}
                    stroke={labelFill}
                    strokeWidth="0.75"
                    strokeOpacity="0.5"
                  />
                )}

                {/* Dot */}
                <circle
                  cx={v.x} cy={v.y}
                  r={dotR + 4}
                  fill="transparent"
                  className="cursor-pointer"
                />
                <circle
                  cx={v.x} cy={v.y}
                  r={dotR}
                  fill={dotFill}
                  stroke="white"
                  strokeWidth="1.5"
                />
                {isHighlighted && (
                  <circle
                    cx={v.x} cy={v.y}
                    r={dotR + 4}
                    fill="none"
                    stroke={dotStroke}
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                )}

                {/* Label */}
                <text
                  x={v.labelX}
                  y={v.labelY}
                  textAnchor={v.anchor}
                  fontSize="10"
                  fontWeight={labelWeight}
                  fill={labelFill}
                  fontFamily="monospace"
                  className="cursor-pointer"
                >
                  {v.short}
                </text>
              </Link>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
