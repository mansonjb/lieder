import { JsonLd } from "@/components/JsonLd";

export type FaqItem = { q: string; a: string };

const ACCENTS = [
  { border: "border-l-sea-deep",    bg: "bg-sea/5",         dot: "bg-sea-deep",    text: "text-sea-deep"    },
  { border: "border-l-amber-500",   bg: "bg-amber-50/60",   dot: "bg-amber-500",   text: "text-amber-600"   },
  { border: "border-l-emerald-600", bg: "bg-emerald-50/60", dot: "bg-emerald-600", text: "text-emerald-700" },
  { border: "border-l-sky-500",     bg: "bg-sky-50/60",     dot: "bg-sky-500",     text: "text-sky-700"     },
];

export function FaqBlock({
  heading,
  items,
}: {
  heading: string;
  items: FaqItem[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-14">
      <div className="flex items-center gap-4 mb-7">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          {heading}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="flex flex-col gap-4">
        {items.map((it, i) => {
          const a = ACCENTS[i % ACCENTS.length];
          return (
            <div
              key={it.q}
              className={`overflow-hidden rounded-2xl border border-l-4 border-line shadow-sm ${a.border} ${a.bg}`}
            >
              <div className="px-5 py-5 sm:px-6">
                {/* Question */}
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold text-white ${a.dot}`}>
                    Q
                  </span>
                  <p className="font-display text-[17px] font-semibold leading-snug text-ink">
                    {it.q}
                  </p>
                </div>
                {/* Séparateur */}
                <div className={`ml-10 mt-3 flex items-center gap-2 ${a.text}`}>
                  <span className={`inline-block h-px w-4 ${a.dot}`} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] opacity-70">
                    Réponse
                  </span>
                </div>
                {/* Réponse */}
                <p className="ml-10 mt-1.5 text-[15px] leading-relaxed text-ink/80">
                  {it.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
    </section>
  );
}
