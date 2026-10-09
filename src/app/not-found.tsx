import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | OBI",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="404"
          title="Deze pagina"
          accent="bestaat niet"
          intro="De link is verouderd of er staat een typfout in het adres. Hieronder vindt u de belangrijkste pagina's."
        />

        <section className="bg-dark px-6 pb-20">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-4">
            <Button href="/" variant="primary">
              Naar de homepage
            </Button>
            <Button href="/afwerking-en-kleuren" variant="secondary">
              Afwerking &amp; kleuren
            </Button>
            <Button href="/vacatures" variant="secondary">
              Vacatures
            </Button>
            <Button href="/offerte" variant="secondary">
              Offerte aanvragen
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
