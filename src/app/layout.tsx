/**
 * Mise en page racine volontairement neutre : la balise <html> (avec la bonne langue) est rendue
 * par src/app/[locale]/layout.tsx.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
