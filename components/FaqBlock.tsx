import { JsonLd } from "@/components/JsonLd";

export type FaqItem = { q: string; a: string };

// Rend la FAQ + le JSON-LD FAQPage. Ne rend rien si vide (evite le contenu mince).
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
      <h2 className="font-display text-2xl font-semibold text-ink">{heading}</h2>
      <dl className="mt-6 space-y-3">
        {items.map((it) => (
          <div
            key={it.q}
            className="rounded-2xl border border-line bg-paper p-5"
          >
            <dt className="font-display text-lg font-semibold text-ink">
              {it.q}
            </dt>
            <dd className="mt-2 leading-relaxed text-ink/90">{it.a}</dd>
          </div>
        ))}
      </dl>
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
