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

export const metadata: Metadata = {
  title: "OBI · Ossendrechtse Beton Industrie | Beton dat blijft staan",
  description:
    "OBI vervaardigt prefab betonelementen: wanden en vloeren, gevelpanelen, balkons en trappen. Sinds 1960 vanuit Ossendrecht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${archivo.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
