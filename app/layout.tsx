import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Layout racine : passe-plat. Le vrai <html>/<body>, les fonts et le chrome vivent
// dans app/[locale]/layout.tsx ; le middleware mappe chaque chemin vers une locale.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: "%s" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
