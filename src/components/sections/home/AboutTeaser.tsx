import Image from "next/image";
import Link from "next/link";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export function AboutTeaser() {
  return (
    <section id="over-ons" className="relative bg-surface px-6 py-16 sm:py-20">
      <GrainOverlay />
      <PanelReveal className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
              Over ons
            </p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              Vakmanschap in iedere laag
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-lg text-ink-secondary">
              <p>
                Ossendrechtse Beton Industrie (OBI) is gevestigd aan de Molenbosstraat in
                Ossendrecht en groeide uit tot een gespecialiseerde fabrikant in prefab
                beton, met een duidelijke identiteit: sterke producten, korte lijnen en
                mensen die trots zijn op het bedrijf. Dit alles doet OBI al sinds 1960.
              </p>
              <p>
                Met circa 80 medewerkers maken wij dagelijks betonelementen voor de
                bouw. Onze kracht zit in de combinatie van jarenlange technische
                ervaring en persoonlijk klantcontact.
              </p>
            </div>

            <Link
              href="/over-ons"
              className="font-display mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dim hover:text-accent"
            >
              Meer over OBI
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div>
            <blockquote className="border-l-4 border-accent bg-page p-8">
              <p className="font-display text-2xl font-bold leading-snug text-ink">
                &ldquo;OBI is meer dan een leverancier. Wij denken mee vanaf het eerste
                bezoek, aan de tekentafel, en adviseren over maakbaarheid.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 flex items-center gap-10">
              <Image
                src="/logo-komo.png"
                alt="KOMO keurmerk"
                width={860}
                height={361}
                className="h-11 w-auto object-contain grayscale"
              />
              <Image
                src="/logo-kiwa.jpg"
                alt="Kiwa keurmerk"
                width={600}
                height={600}
                className="h-14 w-auto object-contain"
              />
            </div>

            <div className="mt-4">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                KOMO Certificaat
              </p>
              <p className="mt-2 text-sm text-ink-secondary">
                Het KOMO-keurmerk staat garant voor gecontroleerde en betrouwbare
                bouwproducten. OBI produceert conform de BRL 2813, de
                beoordelingsrichtlijn voor prefab betonelementen. Dit betekent
                dat onze producten voldoen aan strikte eisen op het gebied van
                kwaliteit, maatnauwkeurigheid en sterkte.
              </p>
              <p className="mt-3 text-sm text-ink-secondary">
                Het KOMO-certificaat geeft opdrachtgevers, aannemers en
                architecten de zekerheid dat OBI werkt volgens een
                onafhankelijk getoetst kwaliteitssysteem.
              </p>
            </div>
          </div>
        </div>
      </PanelReveal>
    </section>
  );
}
