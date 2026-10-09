import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://obibeton.nl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OBI · Ossendrechtse Betonindustrie | Beton dat blijft staan",
  description:
    "OBI vervaardigt prefab betonelementen: balkons, galerijen, gevelelementen, trappen en constructieve elementen. Sinds 1960 vanuit Ossendrecht.",
  // og:title/og:description en twitter:* worden per pagina automatisch
  // gevuld vanuit de title/description van die pagina.
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "OBI · Ossendrechtse Betonindustrie",
    images: [
      {
        url: "/og-obi-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Logo van OBI · Ossendrechtse Betonindustrie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": `${SITE_URL}/#organization`,
  name: "Ossendrechtse Betonindustrie",
  alternateName: "OBI",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-obi.png`,
  image: `${SITE_URL}/og-obi-logo.jpg`,
  description:
    "Producent van prefab betonelementen: balkons, galerijen, gevelelementen, trappen en constructieve elementen. Sinds 1960 vanuit Ossendrecht.",
  foundingDate: "1960",
  telephone: "+31164673855",
  email: "info@obibeton.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Molenbosstraat 7",
    postalCode: "4641 SH",
    addressLocality: "Ossendrecht",
    addressCountry: "NL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/obibeton.nl",
    "https://www.linkedin.com/company/ossendrechtse-betonindustrie-b.v./",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${archivo.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
