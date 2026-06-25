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
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-7">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          {heading}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      {/* Q&A cards */}
      <div className="overflow-hidden rounded-2xl border border-line divide-y divide-line">
        {items.map((it, i) => (
          <div key={it.q} className="bg-white px-6 py-5">
            <p className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 font-mono text-[10px] font-semibold text-sea-deep leading-tight pt-[3px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold text-[15px] text-ink leading-snug">{it.q}</span>
            </p>
            <p className="mt-3 pl-7 text-sm leading-relaxed text-muted">{it.a}</p>
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
