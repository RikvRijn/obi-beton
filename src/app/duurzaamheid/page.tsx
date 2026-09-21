import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Duurzaamheid | OBI",
  description:
    "Hoe OBI de CO₂-uitstoot van haar prefab beton stap voor stap verlaagt, van CEM-I naar CEM-III/A.",
};

const CO2_MAX = 355;
const CO2_BARS = [
  { label: "Mengsel 2025 (CEM-I)", value: 355 },
  { label: "Mengsel 2026 (CEM-III)", value: 185 },
];
const CEILING = { label: "Plafondwaarde Betonakkoord 2027", value: 195 };

export default function DuurzaamheidPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Duurzaamheid"
          title="Beton met"
          accent="minder impact"
          intro="OBI werkt actief aan CO₂-reductie van haar prefab beton. Voor een prefabproducent is dit niet gemakkelijk, maar met onze eerste stap om sinds de zomer van 2026 over te gaan naar CEM-III/A zijn we de goede weg ingeslagen."
        />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-6 text-lg text-ink-secondary">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">Betonakkoord</h2>
              <p className="mt-3">
                De betonsector heeft afgesproken de CO₂-uitstoot per m³ beton
                stapsgewijs te verlagen. OBI volgt dit traject en zoekt naar
                oplossingen die passen bij het proces van OBI, zodat onze
                mengsels en werkmethoden minder cement of energie vragen
                waardoor de CO₂ per m³ beton binnen OBI afneemt.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">Nieuwe mengsels</h2>
              <p className="mt-3">
                Na intern onderzoek in voorjaar 2026 heeft OBI de stap gezet
                richting CEM-III/A. Ons nieuwe mengsel presteert technisch
                gelijkwaardig, maar vermindert de CO₂-uitstoot significant.
                Daarnaast maakt OBI ook al gebruik van circulaire grondstoffen
                zoals gerecycled grind.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">Lange termijn</h2>
              <p className="mt-3">
                OBI kijkt graag richting de toekomst en wil daarin mee blijven
                doen. Zo bekijken wij opties zoals geopolymeer beton,
                energiebesparende opties binnen het productieproces en opties
                om onze grondstoffen warm te krijgen en te houden, allemaal om
                ervoor te zorgen dat onze footprint zo klein mogelijk is.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-dark px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold uppercase text-on-dark">
              CO₂-uitstoot per m³ beton
            </h2>

            <div className="relative mt-10 space-y-8">
              <div
                className="absolute inset-y-0 border-l-2 border-dashed border-accent"
                style={{ left: `${(CEILING.value / CO2_MAX) * 100}%` }}
              >
                <span className="font-display absolute -top-7 -translate-x-1/2 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-accent">
                  Plafond {CEILING.value}
                </span>
              </div>

              {CO2_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm text-on-dark-secondary">{bar.label}</span>
                    <span className="font-display text-lg font-bold text-on-dark">
                      ± {bar.value} kg
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-sm bg-dark-surface">
                    <div
                      className="h-full rounded-sm bg-accent"
                      style={{ width: `${(bar.value / CO2_MAX) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs text-on-dark-muted">
              CO₂-data op basis van intern onderzoek OBI uit 2026. Plafondwaarde
              volgens Betonakkoord.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
