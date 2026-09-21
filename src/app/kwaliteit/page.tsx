import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kwaliteit | OBI",
  description: "OBI werkt conform de eisen van het KOMO-certificaat (BRL 2813) voor prefab betonelementen.",
};

export default function KwaliteitPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Kwaliteit"
          title="Gecertificeerd &"
          accent="gecontroleerd"
          intro="Onze kwaliteitsborging is geen bijzaak. OBI werkt conform de eisen van het KOMO-certificaat, waarbij productieprocedures dagelijks worden gevolgd en gecontroleerd. Dit geeft opdrachtgevers de zekerheid dat onze betonelementen voldoen aan de hoogste kwaliteitseisen."
        />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
                KOMO / Kiwa keurmerk
              </p>
              <h2 className="font-display mt-4 text-2xl font-bold uppercase text-ink">KOMO certificaat</h2>
              <p className="mt-3 text-lg text-ink-secondary">
                Het KOMO-keurmerk staat garant voor gecontroleerde en
                betrouwbare bouwproducten. OBI produceert conform de BRL 2813,
                de beoordelingsrichtlijn voor prefab betonelementen. Dit
                betekent dat onze producten voldoen aan strikte eisen op het
                gebied van kwaliteit, maatnauwkeurigheid en sterkte.
              </p>
              <p className="mt-4 text-lg text-ink-secondary">
                Het KOMO-certificaat geeft opdrachtgevers, aannemers en
                architecten de zekerheid dat OBI werkt volgens een
                onafhankelijk getoetst kwaliteitssysteem.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface p-8">
              <h3 className="font-display text-lg font-bold text-ink">KOMO Certificaat</h3>
              <p className="mt-2 text-sm text-ink-secondary">
                Bekijk ons officiële KOMO-certificaat als bewijs van onze
                gecertificeerde kwaliteit.
              </p>
              <Button href="/komo-certificaat.pdf" variant="primary" className="mt-6" target="_blank">
                Certificaat bekijken
              </Button>
              <p className="mt-4 text-xs text-ink-muted">Afgegeven door KIWA / KOMO</p>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Gecertificeerde kwaliteit voor uw bouwproject"
          description="Vraag vrijblijvend een offerte aan en ervaar zelf de KOMO-gecertificeerde kwaliteit van OBI prefab beton."
        />
      </main>
      <Footer />
    </>
  );
}
