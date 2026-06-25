import type { Locale } from "@/lib/i18n";

// Données climatiques mensuelles de l'Île de Ré (moyennes historiques)
const DATA = {
  airTemp:  [7,  7,  9, 12, 16, 19, 22, 22, 19, 15, 11,  8],  // °C
  seaTemp:  [11, 10, 11, 13, 16, 19, 21, 22, 21, 18, 15, 12],  // °C
  sunshine: [90, 110, 160, 195, 220, 250, 280, 260, 195, 140, 95, 80], // h/mois
  rainDays: [12, 10,  9,  8,  7,  6,  4,  4,  7,  9, 11, 12], // jours de pluie
};

const MONTHS_FR = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",  "Aug",  "Sep", "Oct", "Nov", "Dec"];

// Géométrie du SVG
const W = 720, H = 240;
const ML = 38, MR = 12, MT = 18, MB = 36;
const CW = W - ML - MR;  // 670
const CH = H - MT - MB;  // 186

const MAX_TEMP = 28;
const MAX_SUN  = 300;
const N = 12;
const STEP = CW / N;

function tx(i: number) { return ML + STEP * i + STEP / 2; }
function ty(v: number) { return MT + CH - (v / MAX_TEMP) * CH; }
function sy(v: number) { return MT + CH - (v / MAX_SUN) * CH; }

// Polyline string helper
function poly(pts: [number, number][]): string {
  return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

// Area path (filled polygon down to baseline)
function area(yFn: (v: number) => number, values: number[]): string {
  const pts = values.map((v, i) => [tx(i), yFn(v)] as [number, number]);
  const base = MT + CH;
  return (
    `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} ` +
    pts.slice(1).map(([x, y]) => `L ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ") +
    ` L ${pts[N - 1][0].toFixed(1)} ${base} L ${pts[0][0].toFixed(1)} ${base} Z`
  );
}

// Labels de températures
const TEMP_TICKS = [0, 5, 10, 15, 20, 25];

export function ClimateChart({ locale }: { locale: Locale }) {
  const months = locale === "fr" ? MONTHS_FR : MONTHS_EN;
  const airLabel = locale === "fr" ? "Température air" : "Air temp.";
  const seaLabel = locale === "fr" ? "Température mer" : "Sea temp.";
  const sunLabel = locale === "fr" ? "Ensoleillement (h/mois)" : "Sunshine (h/month)";

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-white">
      {/* Légende */}
      <div className="flex flex-wrap items-center gap-5 px-5 pt-4 pb-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mr-auto">
          {locale === "fr" ? "Météo & ensoleillement" : "Climate & sunshine"}
        </p>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <span className="inline-block h-2.5 w-6 rounded-full bg-amber-300/70" />
          {sunLabel}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <span className="inline-block h-0.5 w-6 bg-sea-deep" />
          {airLabel}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <span className="inline-block h-0.5 w-6 border-t-2 border-dashed border-sky-400" />
          {seaLabel}
        </span>
      </div>

      {/* Chart SVG */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        aria-label={locale === "fr" ? "Graphique climatique mensuel de l'Île de Ré" : "Monthly climate chart for Île de Ré"}
      >
        <defs>
          <linearGradient id="airGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Sunshine bars (background) */}
        {DATA.sunshine.map((v, i) => {
          const bh = (v / MAX_SUN) * CH;
          return (
            <rect
              key={i}
              x={tx(i) - STEP * 0.35}
              y={MT + CH - bh}
              width={STEP * 0.7}
              height={bh}
              fill="#fbbf24"
              opacity="0.22"
              rx="3"
            />
          );
        })}

        {/* Grid lines */}
        {TEMP_TICKS.map((t) => (
          <g key={t}>
            <line
              x1={ML} y1={ty(t)} x2={W - MR} y2={ty(t)}
              stroke="#e5e7eb" strokeWidth="1"
            />
            <text x={ML - 4} y={ty(t)} textAnchor="end" dominantBaseline="middle"
              fontSize="10" fill="#9ca3af">
              {t}°
            </text>
          </g>
        ))}

        {/* Air temp area */}
        <path d={area(ty, DATA.airTemp)} fill="url(#airGrad)" />

        {/* Air temp line */}
        <polyline
          points={poly(DATA.airTemp.map((v, i) => [tx(i), ty(v)]))}
          fill="none" stroke="#0f766e" strokeWidth="2.5" strokeLinejoin="round"
        />

        {/* Air temp dots */}
        {DATA.airTemp.map((v, i) => (
          <circle key={i} cx={tx(i)} cy={ty(v)} r="3.5" fill="#0f766e" />
        ))}

        {/* Sea temp line (dashed) */}
        <polyline
          points={poly(DATA.seaTemp.map((v, i) => [tx(i), ty(v)]))}
          fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 4"
          strokeLinejoin="round"
        />

        {/* Sea temp dots */}
        {DATA.seaTemp.map((v, i) => (
          <circle key={i} cx={tx(i)} cy={ty(v)} r="3" fill="#38bdf8" />
        ))}

        {/* Month labels */}
        {months.map((m, i) => (
          <text
            key={m} x={tx(i)} y={H - 6}
            textAnchor="middle" fontSize="11" fill="#6b7280"
          >
            {m}
          </text>
        ))}

        {/* Temperature labels on air line — only peak months */}
        {[4, 6, 7, 8].map((i) => (
          <text key={i} x={tx(i)} y={ty(DATA.airTemp[i]) - 8}
            textAnchor="middle" fontSize="10" fontWeight="600" fill="#0f766e">
            {DATA.airTemp[i]}°
          </text>
        ))}

        {/* Sea temp label on Aug */}
        <text x={tx(7)} y={ty(DATA.seaTemp[7]) + 14}
          textAnchor="middle" fontSize="10" fill="#38bdf8" fontWeight="600">
          {DATA.seaTemp[7]}°
        </text>
      </svg>

      {/* Stat band */}
      <div className="grid grid-cols-2 divide-x divide-line border-t border-line sm:grid-cols-4">
        {[
          { label: locale === "fr" ? "Ensoleillement" : "Sunshine",        value: "2 400h/an" },
          { label: locale === "fr" ? "Temp. max été" : "Summer peak",      value: "22–27°C"   },
          { label: locale === "fr" ? "Temp. mer (juil.)" : "Sea (July)",   value: "21°C"      },
          { label: locale === "fr" ? "Jours de pluie/mois" : "Rain days",  value: "4–12/mois" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{s.label}</p>
            <p className="mt-0.5 font-semibold text-ink">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
