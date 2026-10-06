import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/obibeton.nl/";
const LINKEDIN_URL = "https://www.linkedin.com/company/ossendrechtse-betonindustrie-b.v./";

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
            Ossendrechtse Betonindustrie, prefab betonelementen sinds 1960.
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
            0164 67 38 55
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
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-fit items-center gap-2 hover:text-on-dark"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.83 2.67 4.83 6.13v5.43h-4v-4.81c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.89h-4v-11Z" />
            </svg>
            LinkedIn
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

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} OBI, Ossendrechtse Betonindustrie. Alle rechten voorbehouden. · KvK 20049349</p>
        <Link href="/privacy" className="underline-offset-2 hover:text-on-dark hover:underline">
          Privacyverklaring
        </Link>
      </div>
    </footer>
  );
}
