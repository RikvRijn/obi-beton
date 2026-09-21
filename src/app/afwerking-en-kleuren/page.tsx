import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Afwerking & kleuren | OBI",
  description:
    "Afwerkingstechnieken en kleurmogelijkheden voor prefab betonelementen van OBI: uitgewassen, gestraald, geprofileerd en glad onbewerkt beton.",
};

const FINISHES = [
  {
    name: "Uitgewassen beton",
    description:
      "Uitgewassen beton is sierbeton waarbij de verharding van de cementhuid tijdens het productieproces wordt afgeremd door een oppervlaktevertrager. Na verharding wordt de cementhuid door middel van afspuiten of afborstelen verwijderd. Kenmerkend voor uitgewassen beton is dat de korrel door de bewerking glad blijft. Uitwassen van beton is bijzonder geschikt om het grove granulaat zichtbaar te maken.",
  },
  {
    name: "Gestraald beton",
    description:
      "Bij gestraald beton wordt het betonoppervlak onder hoge druk met straalgrit verwijderd. Afhankelijk van het gebruikte grit, de druk waarmee gestraald wordt en het aantal behandelingen kan gevarieerd worden met de dikte van de weg te nemen laag. Door het stralen wordt de korrel van het grove toeslagmateriaal beschadigd, het oppervlak wordt mat.",
  },
  {
    name: "Geprofileerd beton",
    description:
      "Profileringen kunnen door het gebruik van rubber profielmatten aangebracht worden. Diverse profileringen zijn in standaardmatten verkrijgbaar. Het is ook mogelijk een rubber profielmat naar wens te laten maken. Door het aanbrengen van profileringen is het eveneens mogelijk teksten of bedrijfslogo's in het beton aan te brengen.",
  },
  {
    name: "Glad onbewerkt beton",
    description:
      "Bij glad onbewerkt beton wordt het uiterlijk bepaald door de eventueel gekleurde cementsteen en de fijne zandkorrels. Glad egaal gekleurd beton is het meest moeilijk te maken. Het vereist een grote nauwkeurigheid bij dosering en fabricage, en een perfecte mal. Kleine onvolkomenheden in het oppervlak zijn inherent aan dit product: kleine gelijkmatig verspreide luchtbellen en kleurverschillen zichtbaar als wolken op het oppervlak.",
  },
];

export default function AfwerkingPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Afwerking & kleuren"
          title="Uiterlijk en"
          accent="textuur"
          intro="OBI biedt diverse afwerkingstechnieken en kleurmogelijkheden voor prefab betonelementen. Een overzicht van de mogelijkheden."
        />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
            {FINISHES.map((finish) => (
              <div key={finish.name} className="bg-page p-8">
                <h2 className="font-display text-xl font-bold text-ink">{finish.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{finish.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">Kleuren</h2>
              <p className="mt-3 text-lg text-ink-secondary">
                OBI fabriceert standaard grijze, maar ook regelmatig witte
                zelfverdichtende beton. Tot slot zijn bijna alle kleuren met
                toevoeging van kleurstof te verkrijgen. Het kleurenpalet kan
                uitgebreid worden door het percentage aan kleurstof of
                titaandioxide aan te passen. Dit alles met betonkwaliteit C45/55.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-ink">Metselwerkelementen</h2>
              <p className="mt-3 text-lg text-ink-secondary">
                Om bijvoorbeeld lateien onzichtbaar in een gemetselde gevel te
                maken, is het mogelijk om lateien te maken met ingestorte
                steenstrips. Achteraf, door deze elementen te laten voegen door
                de aannemer, is een onzichtbare constructielatei gecreëerd. Dit
                procedé kan ook gebruikt worden voor ingewikkelde elementen, die
                in traditioneel metselwerk niet te maken zijn.
              </p>
            </div>

            <div className="border-l-4 border-accent bg-page p-6">
              <p className="text-sm text-ink-secondary">
                OBI merkt op dat de kleuren van beton onderhevig zijn aan
                weersomstandigheden. Architectonisch beton is een natuurproduct.
                Lichte kleurverschillen, in eenzelfde element of tussen
                elementen onderling of ten opzichte van een monster, evenals
                varianten in de structuur dienen te worden beschouwd als eigen
                aan het materiaal.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
