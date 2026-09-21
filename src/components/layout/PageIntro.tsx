import type { ReactNode } from "react";
import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  accent,
  intro,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: ReactNode;
}) {
  return (
    <section className="bg-dark px-6 pt-40 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-on-dark-secondary transition-colors duration-200 hover:text-accent"
        >
          &larr; Terug naar home
        </Link>

        <p className="accent-rule mt-8 font-display text-lg font-bold uppercase tracking-[0.15em] text-accent-glow">
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-on-dark sm:text-6xl">
          {title} {accent && <span className="text-accent-glow">{accent}</span>}
        </h1>
        {intro && <div className="mt-6 max-w-2xl text-lg text-on-dark-secondary">{intro}</div>}
      </div>
    </section>
  );
}
