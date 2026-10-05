/*
 * CONCEPT – Deze privacyverklaring is een concept en moet door OBI (de klant)
 * worden gecontroleerd en aangevuld vóór publicatie. Alle tekst tussen
 * [vierkante haken] is een placeholder die nog ingevuld/bevestigd moet worden.
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Privacyverklaring | OBI",
  description:
    "Lees hoe Ossendrechtse Beton Industrie (OBI) omgaat met uw persoonsgegevens wanneer u onze website bezoekt, contact met ons opneemt of solliciteert.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const linkClass = "text-accent-dim underline underline-offset-2 hover:text-accent";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display text-xl font-bold uppercase text-ink sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-secondary sm:text-lg">{children}</div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.7em] h-1 w-1 flex-none rounded-full bg-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Privacyverklaring"
          title="Zorgvuldig met uw"
          accent="gegevens"
          intro="In deze privacyverklaring leest u welke persoonsgegevens OBI verwerkt wanneer u onze website bezoekt, contact met ons opneemt of bij ons solliciteert, en welke rechten u daarbij heeft."
        />

        <div className="bg-page px-6 py-16 sm:py-20">
          <article className="mx-auto max-w-3xl">
            <Section title="Wie zijn wij?">
              <p>
                Ossendrechtse Beton Industrie B.V. (hierna: &ldquo;OBI&rdquo;, &ldquo;wij&rdquo;) is
                verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze
                privacyverklaring.
              </p>
              <p>
                Ossendrechtse Beton Industrie B.V.
                <br />
                Molenbosstraat 7
                <br />
                4641 SH Ossendrecht
                <br />
                KvK-nummer: 20049349
                <br />
                E-mail:{" "}
                <a href="mailto:info@obibeton.nl" className={linkClass}>
                  info@obibeton.nl
                </a>
                <br />
                Telefoon:{" "}
                <a href="tel:+31164673855" className={linkClass}>
                  0164 67 38 55
                </a>
              </p>
            </Section>

            <Section title="Contact per e-mail of telefoon">
              <p>
                Deze website bevat geen contactformulieren. Neemt u per e-mail of telefoon contact met
                ons op, bijvoorbeeld via{" "}
                <a href="mailto:info@obibeton.nl" className={linkClass}>
                  info@obibeton.nl
                </a>{" "}
                of voor een offerteaanvraag via{" "}
                <a href="mailto:calculatie@obibeton.nl" className={linkClass}>
                  calculatie@obibeton.nl
                </a>
                , dan verwerken wij de gegevens die u ons zelf verstrekt, zoals:
              </p>
              <List
                items={[
                  "naam en eventueel bedrijfsnaam;",
                  "e-mailadres en/of telefoonnummer;",
                  "de inhoud van uw bericht en eventuele bijlagen (zoals tekeningen of projectgegevens).",
                ]}
              />
              <p>
                Wij gebruiken deze gegevens uitsluitend om uw vraag te beantwoorden, een offerte op te
                stellen en eventueel een overeenkomst met u uit te voeren. De grondslag hiervoor is het
                nemen van precontractuele maatregelen of de uitvoering van een overeenkomst, dan wel ons
                gerechtvaardigd belang om op uw vraag te reageren. Wij bewaren deze gegevens niet langer
                dan nodig is voor dit doel, tenzij een wettelijke bewaarplicht (zoals de fiscale
                bewaarplicht van 7 jaar voor administratie) een langere termijn vereist. [Bewaartermijn
                correspondentie en offertes te bevestigen]
              </p>
            </Section>

            <Section title="Solliciteren">
              <p>
                Solliciteert u op een vacature of stuurt u een open sollicitatie per e-mail naar{" "}
                <a href="mailto:martijn@obibeton.nl" className={linkClass}>
                  martijn@obibeton.nl
                </a>
                , dan verwerken wij de gegevens die u daarbij meestuurt, zoals uw naam,
                contactgegevens, curriculum vitae, motivatiebrief en andere informatie die u zelf met ons
                deelt.
              </p>
              <p>
                Wij gebruiken deze gegevens uitsluitend om uw sollicitatie te beoordelen en met u in
                contact te treden over de sollicitatieprocedure. De gegevens zijn alleen toegankelijk voor
                de personen die bij de procedure betrokken zijn.
              </p>
              <p>
                Wij bewaren uw sollicitatiegegevens tot [4 weken] na afronding van de
                sollicitatieprocedure. Met uw toestemming bewaren wij uw gegevens maximaal [1 jaar], zodat
                wij u kunnen benaderen voor een toekomstige passende functie. [Bewaartermijnen te
                bevestigen door OBI] Wordt u aangenomen, dan worden de gegevens onderdeel van uw
                personeelsdossier.
              </p>
            </Section>

            <Section title="Bezoek aan de website">
              <p>
                Deze website wordt gehost door Netlify. Bij elk bezoek worden technische gegevens
                verwerkt in serverlogbestanden, zoals uw IP-adres, het tijdstip van het bezoek, de
                opgevraagde pagina en het type browser. Deze gegevens zijn nodig om de website technisch
                goed en veilig te laten werken. De grondslag hiervoor is ons gerechtvaardigd belang bij
                een goed functionerende en beveiligde website. Netlify kan deze gegevens ook buiten de
                Europese Economische Ruimte verwerken; daarbij gelden passende waarborgen zoals de
                standaardcontractbepalingen van de Europese Commissie. Meer informatie vindt u in de{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  privacyverklaring van Netlify
                </a>
                .
              </p>
              <p>
                De lettertypen op deze website worden vanaf onze eigen server geladen. Er worden daarvoor
                geen gegevens naar externe partijen zoals Google Fonts gestuurd.
              </p>
            </Section>

            <Section title="Cookies en Google Maps">
              <p>
                Deze website gebruikt geen analytische, tracking- of advertentiecookies en houdt uw
                surfgedrag niet bij.
              </p>
              <p>
                Op de pagina{" "}
                <Link href="/over-ons" className={linkClass}>
                  Over ons
                </Link>{" "}
                kunt u een kaart van Google Maps bekijken. Deze kaart wordt pas geladen nadat u daar zelf
                op klikt. Vanaf dat moment maakt uw browser verbinding met Google en kan Google cookies
                plaatsen en gegevens zoals uw IP-adres verwerken. OBI heeft daar geen invloed op. Lees
                hiervoor het{" "}
                <a
                  href="https://policies.google.com/privacy?hl=nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  privacybeleid van Google
                </a>
                .
              </p>
            </Section>

            <Section title="Sociale media">
              <p>
                Op onze website staan links naar onze pagina&apos;s op Instagram en LinkedIn. Dit zijn
                gewone links: er worden geen gegevens met deze platforms gedeeld zolang u er niet op
                klikt. Bezoekt u deze platforms, dan is het privacybeleid van Instagram (Meta)
                respectievelijk LinkedIn van toepassing.
              </p>
            </Section>

            <Section title="Delen met derden">
              <p>
                Wij verkopen uw gegevens niet en delen ze alleen met derden als dat nodig is voor de
                hierboven genoemde doelen, bijvoorbeeld met onze hostingpartij en [e-mail- en
                IT-dienstverleners], of als wij daartoe wettelijk verplicht zijn. Met partijen die in
                onze opdracht gegevens verwerken, sluiten wij waar nodig een verwerkersovereenkomst.
              </p>
            </Section>

            <Section title="Beveiliging">
              <p>
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te
                beschermen tegen verlies en onrechtmatige verwerking. De website maakt gebruik van een
                beveiligde verbinding (HTTPS). Heeft u het idee dat uw gegevens niet goed beveiligd zijn,
                neem dan contact met ons op.
              </p>
            </Section>

            <Section title="Uw rechten">
              <p>U heeft op grond van de Algemene verordening gegevensbescherming (AVG) het recht om:</p>
              <List
                items={[
                  "uw persoonsgegevens in te zien;",
                  "onjuiste gegevens te laten corrigeren;",
                  "uw gegevens te laten verwijderen;",
                  "de verwerking van uw gegevens te laten beperken;",
                  "bezwaar te maken tegen de verwerking van uw gegevens;",
                  "uw gegevens over te laten dragen (dataportabiliteit);",
                  "een gegeven toestemming op elk moment in te trekken.",
                ]}
              />
              <p>
                U kunt een verzoek sturen naar{" "}
                <a href="mailto:info@obibeton.nl" className={linkClass}>
                  info@obibeton.nl
                </a>
                . Wij reageren zo snel mogelijk, uiterlijk binnen een maand. Om misbruik te voorkomen
                kunnen wij u vragen om u te identificeren.
              </p>
            </Section>

            <Section title="Klacht indienen">
              <p>
                Bent u niet tevreden over hoe wij met uw gegevens omgaan, laat het ons dan eerst weten.
                Daarnaast heeft u het recht om een klacht in te dienen bij de{" "}
                <a
                  href="https://autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Autoriteit Persoonsgegevens
                </a>
                .
              </p>
            </Section>

            <Section title="Wijzigingen">
              <p>
                Wij kunnen deze privacyverklaring aanpassen, bijvoorbeeld als onze website of de
                wetgeving verandert. De meest actuele versie staat altijd op deze pagina.
              </p>
              <p className="text-sm text-ink-muted">Laatst bijgewerkt: [datum]</p>
            </Section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
