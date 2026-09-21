import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Over ons | OBI",
  description:
    "OBI, Ossendrechtse Beton Industrie: sinds 1960 gevestigd in Ossendrecht, gespecialiseerd in prefab beton.",
};

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro eyebrow="Over ons" title="Vakmanschap in" accent="iedere laag" />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-6 text-lg text-ink-secondary">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
