import { JsonLd } from "@/components/JsonLd";

export type FaqItem = { q: string; a: string };

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

      <div className="flex flex-col gap-3">
        {items.map((it, i) => (
          <div
            key={it.q}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-sea-deep/60 to-sea/20" />
            <div className="px-5 py-4 sm:px-6 sm:py-5">
              <p className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea-deep font-mono text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-display text-base font-semibold leading-snug text-ink">
                  {it.q}
                </span>
              </p>
              <p className="mt-3 pl-9 text-sm leading-relaxed text-muted">{it.a}</p>
            </div>
          </div>
        ))}
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
