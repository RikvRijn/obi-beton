export type Vacature = {
  slug: string;
  title: string;
  location: string;
  type: string;
  intro: string;
  tasks: string[];
};

export const VACATURES: Vacature[] = [
  {
    slug: "productiemedewerker",
    title: "Productiemedewerker",
    location: "Ossendrecht",
    type: "Fulltime",
    intro:
      "Als productiemedewerker draag jij zorg voor de dagelijkse productie van onze betonelementen, met oog voor kwaliteit en planning. Je maakt deel uit van een vaste ploeg en werkt nauw samen met collega's binnen de productieafdeling.",
    tasks: [
      "Reinigt, olieert en stelt de mal in conform tekening.",
      "Plaatst de wapeningskorven en overige voorzieningen in de mal.",
      "Assisteert bij het stortproces van het beton.",
      "Verzorgt het ontkisten, afwerken en nabehandelen van het element.",
      "Draagt zorg voor een opgeruimde werkplek en meldt onveilige situaties aan de voorman.",
    ],
  },
  {
    slug: "junior-senior-tekenaar",
    title: "Junior of Senior tekenaar",
    location: "Ossendrecht",
    type: "Fulltime",
    intro:
      "Als tekenaar vertaal je tekeningen van klanten naar concrete 3D-werktekeningen ten behoeve van de productie. Je werkt met Tekla en stemt nauw af met de projectleider en werkvoorbereider.",
    tasks: [
      "Werkt elementen uit, inclusief maatvoering, wapening en sparingen.",
      "Verwerkt klantwijzigingen en beheert de revisies.",
      "Levert de benodigde gegevens aan voor de mal- en wapeningsplanning.",
      "Stemt af met collega-tekenaars bij vraagstukken rondom detaillering.",
    ],
  },
  {
    slug: "bedienaar-betoncentrale-storter",
    title: "Bedienaar betoncentrale & storter",
    location: "Ossendrecht",
    type: "Fulltime",
    intro:
      "Als bedienaar van de betoncentrale zorg jij dat het beton volgens recept wordt geproduceerd en tijdig, in de juiste consistentie, bij de mallen wordt aangeleverd. Met behulp van de heftruck breng je het beton naar de hal en verzorg je het storten conform werkinstructie.",
    tasks: [
      "Weegt en mengt de grondstoffen conform het vastgestelde recept.",
      "Bewaakt de consistentie en het vochtgehalte van het beton.",
      "Vervoert de kubel naar de mal en stort het beton gelijkmatig volgens instructie.",
      "Vervaardigt indien nodig proefkubussen en registreert het toegepaste recept per project.",
      "Signaleert afwijkingen in de betonkwaliteit direct aan de voorman.",
    ],
  },
  {
    slug: "kraanmedewerker",
    title: "Kraanmedewerker",
    location: "Ossendrecht",
    type: "Fulltime",
    intro:
      "Als kraanmedewerker verzorg jij het stapelen van gereedgekomen elementen op het tasveld en het beladen van vrachtwagens conform planning. Je werkt nauw samen met de afdeling logistiek en behoudt overzicht over de locatie van de elementen.",
    tasks: [
      "Neemt elementen vanuit de hal in ontvangst en stapelt deze conform de tasveldindeling.",
      "Registreert de locatie van elementen ten behoeve van een efficiënte terugvindbaarheid.",
      "Belaadt vrachtwagens in de juiste volgorde ten behoeve van de bouwplaats.",
      "Controleert elementen voorafgaand aan belading op zichtbare schade.",
      "Ziet toe op een veilige uitvoering van hijswerkzaamheden en verkeer op het terrein.",
    ],
  },
  {
    slug: "magazijnbeheerder",
    title: "Magazijnbeheerder",
    location: "Ossendrecht",
    type: "Fulltime",
    intro:
      "Als magazijnbeheerder stel jij per mal de benodigde materialen samen en beheer je de voorraad, zodat productiemedewerkers effectief kunnen werken. Je bent het aanspreekpunt waar collega's dagelijks terecht kunnen om hun werkdag te starten.",
    tasks: [
      "Stelt per mal de benodigde materialen samen op basis van de materiaallijst.",
      "Beheert de voorraad van onder meer ankers, isolatiemateriaal, PBM's en gereedschap.",
      "Registreert de materiaaluitgifte, zodat het verbruik per project inzichtelijk is.",
      "Signaleert tijdig aan het bedrijfsbureau welke materialen besteld dienen te worden.",
      "Draagt zorg voor een geordend magazijn en bewaakt de keuringsdata van gereedschap.",
    ],
  },
  {
    slug: "voorman-timmerwerken",
    title: "Voorman timmerwerken",
    location: "Ossendrecht",
    type: "Fulltime",
    intro:
      "Als voorman timmerwerken ben jij verantwoordelijk voor de mallen die in Ossendrecht worden vervaardigd. Daarnaast bereid je de overige mallen in de fabriek voor, zodat medewerkers bij aanvang van de dag direct aan de slag kunnen. Je onderhoudt nauw contact met de productiemanager en overige betrokkenen binnen de fabriek.",
    tasks: [
      "Voorziet mallen van QR-codes ten behoeve van een correcte registratie.",
      "Levert een actieve bijdrage aan de productieplanning.",
      "Draagt verantwoordelijkheid voor de mallen die in Ossendrecht vervaardigd worden.",
      "Controleert of mallen conform tekening worden of zijn vervaardigd.",
    ],
  },
];
