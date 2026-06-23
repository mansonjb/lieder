import { notFound } from "next/navigation";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { HTML_LANG, LOCALES, isLocale } from "@/lib/i18n";
import { orgNode } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Stay22Script } from "@/components/Stay22Script";

// Direction "Carte postale" : serif d'affichage editorial + grotesque humaniste.
const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-body",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${display.variable} ${body.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <JsonLd data={{ "@context": "https://schema.org", ...orgNode() }} />
        <Stay22Script lmaId={process.env.NEXT_PUBLIC_STAY22_LMA_ID} />
        {children}
      </body>
    </html>
  );
}
