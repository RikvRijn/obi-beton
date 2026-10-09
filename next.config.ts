import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Oude .php-adressen van de vorige site, die Google nog in de zoekresultaten toont.
  async redirects() {
    const old: [string, string][] = [
      ["/index.php", "/"],
      ["/producten.php", "/#producten"],
      ["/foto-pro.php", "/#producten"],
      ["/prefab.php", "/#producten"],
      ["/referenties.php", "/#referenties"],
      ["/contact.php", "/#contact"],
      ["/productie.php", "/over-ons"],
      ["/kwaliteit.php", "/kwaliteit"],
      ["/afwerking.php", "/afwerking-en-kleuren"],
      ["/prijsaanvraag.php", "/offerte"],
    ];
    return old.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
