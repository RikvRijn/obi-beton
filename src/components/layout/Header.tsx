"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Referenties", href: "/#referenties" },
  { label: "Producten", href: "/#producten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Vacatures", href: "/vacatures" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

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
              className="rounded-sm text-sm font-medium text-ink-secondary transition-colors hover:text-ink focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/offerte" variant="primary" className="!px-5 !py-2.5 text-xs">
            Offerte aanvragen
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          className="flex h-11 w-11 flex-none items-center justify-center rounded-sm text-ink md:hidden focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm py-3 text-base font-medium text-ink-secondary transition-colors hover:text-ink focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/offerte"
                variant="primary"
                className="mt-3 w-full justify-center"
              >
                Offerte aanvragen
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
