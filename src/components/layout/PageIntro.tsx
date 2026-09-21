import type { ReactNode } from "react";

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
        <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-on-dark sm:text-6xl">
          {title} {accent && <span className="text-accent">{accent}</span>}
        </h1>
        {intro && <div className="mt-6 max-w-2xl text-lg text-on-dark-secondary">{intro}</div>}
      </div>
    </section>
  );
}
