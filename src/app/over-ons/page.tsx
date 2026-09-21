import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Over ons | OBI",
  description:
    "OBI, Ossendrechtse Beton Industrie: sinds 1960 gevestigd in Ossendrecht, gespecialiseerd in prefab beton.",
};

const FACTS = [
  { value: "1960", label: "Opgericht" },
  { value: "80+", label: "Medewerkers" },
  { value: "4", label: "Productgroepen" },
];

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro eyebrow="Over ons" title="Vakmanschap in" accent="iedere laag" />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-lg text-ink-secondary">
              <p>
                Ossendrechtse Beton Industrie (OBI) is gevestigd aan de Molenbosstraat in
                Ossendrecht, uitgegroeid tot een gespecialiseerde fabrikant in prefab
                beton met een duidelijke identiteit: sterke producten, korte lijnen en
                mensen die trots zijn op het bedrijf. En dit alles doet OBI al sinds
                1960.
              </p>
              <p>
                Met circa 80 medewerkers maken wij dagelijks betonelementen voor de
                bouw. Van wanden en vloeren tot gevelpanelen, balkons, galerijplaten,
                trappen en veel meer specials. Onze kracht zit in de combinatie van
                jarenlange technische ervaring en persoonlijk klantcontact.
              </p>
              <p>
                OBI is meer dan een leverancier. Wij denken mee vanaf het eerste bezoek,
                aan de tekentafel, adviseren over maakbaarheid en leveren op het moment
                dat het voor jou in de planning past.
              </p>
            </div>

            <div className="grid h-fit grid-cols-3 gap-px overflow-hidden rounded-sm bg-border lg:grid-cols-1">
              {FACTS.map((fact) => (
                <div key={fact.label} className="bg-surface p-6 text-center lg:text-left">
                  <span className="font-display block text-3xl font-black text-ink">{fact.value}</span>
                  <span className="text-xs uppercase tracking-[0.15em] text-ink-muted">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
              Locatie
            </p>
            <h2 className="font-display mt-4 max-w-xl text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
              Te bezoeken in Ossendrecht
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center rounded-sm border border-border bg-page p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
                  Adres
                </p>
                <p className="mt-3 text-lg text-ink">Molenbosstraat 7</p>
                <p className="text-lg text-ink">4641 SH Ossendrecht</p>

                <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
                  Contact
                </p>
                <a href="tel:+31164673855" className="mt-3 block text-lg text-ink hover:text-accent">
                  +31 (0)164 673 855
                </a>
                <a href="mailto:info@obibeton.nl" className="block text-lg text-ink hover:text-accent">
                  info@obibeton.nl
                </a>
                <p className="mt-3 text-sm text-ink-muted">Ma t/m vr: 08:30 tot 17:00</p>
              </div>

              <div className="h-80 overflow-hidden rounded-sm border border-border lg:h-auto">
                <iframe
                  src="https://www.google.com/maps?q=Molenbosstraat+7,+4641+SH+Ossendrecht&output=embed"
                  title="OBI op de kaart, Molenbosstraat 7, Ossendrecht"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Word onderdeel van ons team"
          description="OBI groeit en zoekt vakmensen die met trots meebouwen aan prefab beton. Bekijk onze openstaande vacatures in Ossendrecht."
          buttonLabel="Bekijk vacatures"
          href="/vacatures"
        />
      </main>
      <Footer />
    </>
  );
}
