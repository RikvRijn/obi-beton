import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Referenties", href: "/#referenties" },
  { label: "Producten", href: "/#producten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Vacatures", href: "/#vacatures" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-obi-transparent.png"
            alt="OBI, Ossendrechtse Beton Industrie"
            width={757}
            height={408}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/offerte" variant="primary" className="!px-5 !py-2.5 text-xs">
          Offerte aanvragen
        </Button>
      </div>
    </header>
  );
}
