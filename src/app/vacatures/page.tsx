import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { VACATURES } from "@/data/vacatures";

export const metadata: Metadata = {
  title: "Vacatures | OBI",
  description:
    "OBI zoekt mensen die graag werken met beton, techniek en hun handen. Bekijk onze openstaande functies in Ossendrecht.",
};

export default function VacaturesPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Vacatures"
          title="Werken bij"
          accent="OBI"
          intro="OBI wil een groeiend bedrijf zijn in Ossendrecht. Daarvoor zoeken we mensen die graag werken met beton, techniek en hun handen. Bekijk onze openstaande functies."
        />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl divide-y divide-border border-y border-border">
            {VACATURES.map((job) => (
              <Link
                key={job.slug}
                href={`/vacatures/${job.slug}`}
                className="group flex items-center justify-between gap-6 py-7 transition-colors duration-200 hover:bg-surface focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
                    {job.location} · {job.type}
                  </p>
                  <h2 className="font-display mt-2 text-xl font-bold text-ink sm:text-2xl">
                    {job.title}
                  </h2>
                </div>
                <span
                  aria-hidden
                  className="font-display flex-none text-2xl text-ink-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-dark-maroon px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="accent-rule mx-auto w-fit font-display text-lg font-bold uppercase tracking-[0.15em] text-accent">
              Open sollicitatie
            </p>
            <h2 className="font-display mt-4 text-2xl font-bold text-on-dark sm:text-3xl">
              Zie je geen passende functie, maar wel een plek voor jezelf bij OBI?
            </h2>
            <p className="mt-4 text-lg text-on-dark-secondary">
              Stuur dan uw open sollicitatie op naar{" "}
              <a href="mailto:martijn@obibeton.nl" className="text-accent underline">
                martijn@obibeton.nl
              </a>{" "}
              met de volgende documenten:
            </p>
            <ul className="mt-4 inline-flex flex-col gap-2 text-left text-on-dark-secondary">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 flex-none rounded-full bg-accent" aria-hidden />
                Curriculum Vitae
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 flex-none rounded-full bg-accent" aria-hidden />
                Motivatiebrief (max. 2 A4&apos;tjes)
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg text-ink-secondary">
              Nieuwsgierig naar het bedrijf achter deze vacatures?{" "}
              <Link href="/over-ons" className="font-semibold text-accent underline underline-offset-4 hover:text-accent-dim">
                Lees meer over OBI en ons vakmanschap
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
