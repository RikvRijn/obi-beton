import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/obibeton.nl/";

const MORE_LINKS = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Afwerking & kleuren", href: "/afwerking-en-kleuren" },
  { label: "Duurzaamheid", href: "/duurzaamheid" },
  { label: "Kwaliteit", href: "/kwaliteit" },
  { label: "Vacatures", href: "/vacatures" },
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
          <p>Molenbosstraat 7</p>
          <p>4641 SH Ossendrecht</p>
        </div>

        <div className="text-sm text-on-dark-secondary">
          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-on-dark">
            Contact
          </p>
          <a href="tel:+31164673855" className="block hover:text-on-dark">
            +31 (0)164 673 855
          </a>
          <a href="mailto:info@obibeton.nl" className="block hover:text-on-dark">
            info@obibeton.nl
          </a>
          <p className="mt-2 text-on-dark-muted">Ma t/m vr: 08:30 tot 17:00</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 hover:text-on-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
            </svg>
            Instagram
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
