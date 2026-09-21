import Link from "next/link";

const MORE_LINKS = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Afwerking & kleuren", href: "/afwerking-en-kleuren" },
  { label: "Duurzaamheid", href: "/duurzaamheid" },
  { label: "Kwaliteit", href: "/kwaliteit" },
  { label: "Offerte aanvragen", href: "/offerte" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/25 bg-dark-maroon px-6 py-16 text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">OBI</p>
          <p className="mt-2 max-w-xs text-sm text-on-dark-secondary">
            Ossendrechtse Beton Industrie, prefab betonelementen sinds 1960.
          </p>
        </div>

        <div className="text-sm text-on-dark-secondary">
          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-on-dark">
            Adres
          </p>
          <p>Molenbosstraat, Ossendrecht</p>
          {/* TODO: huisnummer, postcode en telefoonnummer bevestigen, ontbreken nog */}
        </div>

        <div className="text-sm text-on-dark-secondary">
          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-on-dark">
            Contact
          </p>
          <a href="mailto:calculatie@obibeton.nl" className="hover:text-on-dark">
            calculatie@obibeton.nl
          </a>
        </div>

        <div className="text-sm text-on-dark-secondary">
          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-on-dark">
            Meer informatie
          </p>
          <ul className="space-y-2">
            {MORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-on-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-xs text-on-dark-muted">
        © {new Date().getFullYear()} OBI, Ossendrechtse Beton Industrie. Alle rechten voorbehouden.
      </p>
    </footer>
  );
}
