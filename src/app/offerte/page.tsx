import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Offerte aanvragen | OBI",
  description: "Wat OBI nodig heeft om snel een correcte offerte op te maken voor prefab betonelementen.",
};

const CHECKLIST = [
  "Tekeningen, uitrekstaten, bestek en details van het project",
  "De datum van indiening offerte",
  "Een zo juist mogelijke beschrijving van het uitzicht van de prefabelementen",
  "De verankeringsmiddelen die moeten gebruikt worden",
  "De plaats en data van levering",
];

export default function OffertePage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Prijsaanvraag"
          title="Snel een"
          accent="offerte aanvragen"
          intro={
            <>
              Mocht u geïnteresseerd zijn in een offerte bij OBI, stuur dan de
              volgende gegevens naar{" "}
              <a href="mailto:calculatie@obibeton.nl" className="text-accent underline">
                calculatie@obibeton.nl
              </a>
              .
            </>
          }
        />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-bold uppercase text-ink">
              De informatie die nodig is voor opmaak van een snelle en correcte offerte
            </h2>

            <ul className="mt-8 space-y-4">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-ink-secondary">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:calculatie@obibeton.nl"
              className="font-display mt-10 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-on-dark transition-colors hover:bg-accent-glow"
            >
              Mail naar calculatie@obibeton.nl
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
