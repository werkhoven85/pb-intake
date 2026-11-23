/* Vragenlijst Formatiebeheer (zie SCHEMA.md) */
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
 "id": "formatie",
 "order": 1,
 "title": "Formatiebeheer",
 "short": "Formatie",
 "tagline": "Formatieplaatsen, begroting en bezetting",
 "intro": "Leg per formatieplaats vast hoeveel FTE je begroot en vergelijk dat met de werkelijke bezetting. Zo zie je direct waar ruimte is en waar overbezetting dreigt.",
 "flow": [
  {
   "s": "fb1",
   "t": "Organigram",
   "d": "Eerst de basis op orde"
  },
  {
   "s": "fb2",
   "t": "Formatieplaatsen",
   "d": "Op OE of OE + functie"
  },
  {
   "s": "fb3",
   "t": "Begroting",
   "d": "FTE per periode"
  },
  {
   "s": "fb4",
   "t": "Bezetting",
   "d": "Medewerkers koppelen"
  },
  {
   "s": "fb6",
   "t": "Vacatures",
   "d": "Controle op formatie"
  }
 ],
 "flowSub": [
  "fb5",
  "fb7"
 ],
 "sections": [
  {
   "id": "fb1",
   "title": "Uitgangssituatie en organigram",
   "short": "Organigram",
   "intro": "Formatiebeheer bouwt voort op het organigram: de organisatorische eenheden (OE's) en functies in AFAS. Dat moet eerst kloppen.",
   "qs": [
    {
     "id": "huidig",
     "t": "choice",
     "l": "Hoe houden jullie de formatie nu bij?",
     "o": [
      "Nog niet",
      "In Excel",
      "In een ander systeem",
      "Al deels in AFAS"
     ]
    },
    {
     "id": "doel",
     "t": "area",
     "l": "Wat willen jullie met formatiebeheer bereiken?",
     "h": "Bijvoorbeeld: grip op de personeelskosten, vacatureruimte zichtbaar maken, overbezetting voorkomen."
    },
    {
     "id": "organigram",
     "t": "choice",
     "l": "Is het organigram in AFAS actueel?",
     "o": [
      "Ja, helemaal",
      "Grotendeels",
      "Nee, het moet nog worden bijgewerkt"
     ],
     "a": "Ja, helemaal",
     "at": "Formatiebeheer is gebaseerd op het organigram. Breng dat eerst op orde, anders kloppen begroting en bezetting niet.",
     "link": "Hrm_Format.htm"
    },
    {
     "id": "oes",
     "t": "number",
     "l": "Hoeveel organisatorische eenheden (afdelingen) hebben jullie ongeveer?",
     "short": true
    },
    {
     "id": "functiehuis",
     "t": "choice",
     "l": "Hebben jullie een vastgesteld functiehuis (lijst met functies)?",
     "o": [
      "Ja, en het staat in AFAS",
      "Ja, maar nog niet in AFAS",
      "Nee"
     ]
    },
    {
     "id": "werkgevers",
     "t": "choice",
     "l": "Doen alle werkgevers in AFAS mee met formatiebeheer?",
     "o": [
      "Ja, alle werkgevers",
      "Alleen een deel",
      "We hebben één werkgever"
     ]
    }
   ]
  },
  {
   "id": "fb2",
   "title": "Formatieplaatsen",
   "short": "Formatieplaatsen",
   "intro": "Een formatieplaats is de plek waarop je begroot: per werkgever, per organisatorische eenheid of per eenheid en functie.",
   "qs": [
    {
     "id": "niveau",
     "t": "choice",
     "l": "Op welk niveau begroten jullie de formatie?",
     "o": [
      "Per organisatorische eenheid",
      "Per organisatorische eenheid en functie",
      "Verschilt per afdeling"
     ],
     "a": "Verschilt per afdeling",
     "at": "AFAS adviseert kleine afdelingen alleen op organisatorische eenheid te begroten en grotere afdelingen per functie. Zo blijft het beheersbaar waar weinig te sturen valt.",
     "link": "Hrm_Format.htm"
    },
    {
     "id": "grens",
     "t": "text",
     "l": "Vanaf hoeveel medewerkers vinden jullie een afdeling 'groot'?",
     "h": "Alleen invullen als het niveau per afdeling verschilt.",
     "short": true,
     "opt": true
    },
    {
     "id": "aantal",
     "t": "number",
     "l": "Hoeveel formatieplaatsen verwachten jullie ongeveer?",
     "short": true
    },
    {
     "id": "codering",
     "t": "area",
     "l": "Hoe willen jullie formatieplaatsen coderen en benoemen?",
     "h": "Bijvoorbeeld: afdelingscode gevolgd door functiecode (FIN-ADM).",
     "opt": true
    },
    {
     "id": "vastleggen",
     "t": "choice",
     "l": "Hoe leggen we de formatieplaatsen de eerste keer vast?",
     "o": [
      "Handmatig in AFAS",
      "Via een import (Excel)"
     ],
     "a": "Via een import (Excel)",
     "at": "Bij meer dan een handvol formatieplaatsen is importeren sneller en minder foutgevoelig. AFAS heeft een standaardimport voor formatieplaatsen.",
     "link": "13666.htm"
    },
    {
     "id": "eerstebegroting",
     "t": "advies",
     "l": "Begroting direct meemaken",
     "at": "Vink bij het toevoegen van een formatieplaats 'Begroting aanmaken' aan. Dan staat de eerste begrotingsregel (FTE en aantal medewerkers) meteen klaar.",
     "link": "13666.htm"
    },
    {
     "id": "beheerder",
     "t": "text",
     "l": "Wie wordt verantwoordelijk voor het onderhoud van formatieplaatsen?"
    }
   ]
  },
  {
   "id": "fb3",
   "title": "Begroting",
   "short": "Begroting",
   "intro": "Per formatieplaats leg je een begroting vast voor een periode: begindatum, eventueel einddatum en het aantal FTE.",
   "qs": [
    {
     "id": "wat",
     "t": "multi",
     "l": "Wat willen jullie per formatieplaats begroten?",
     "o": [
      "FTE",
      "Aantal medewerkers",
      "Kosten per FTE"
     ],
     "a": [
      "FTE",
      "Aantal medewerkers",
      "Kosten per FTE"
     ],
     "at": "Met kosten per FTE berekent AFAS de werkgeverskosten (kosten per FTE × begrote FTE). Zo zie je naast de bezetting ook de financiële kant.",
     "link": "14297.htm"
    },
    {
     "id": "periode",
     "t": "choice",
     "l": "Voor welke periode stellen jullie de begroting vast?",
     "o": [
      "Per kalenderjaar",
      "Per boekjaar dat afwijkt van het kalenderjaar",
      "Doorlopend, alleen bij wijzigingen"
     ]
    },
    {
     "id": "perioden",
     "t": "advies",
     "l": "Begroting vastleggen met perioden",
     "at": "Leg wijzigingen vast als nieuwe begrotingsregel met een nieuwe begindatum in plaats van de oude te overschrijven. Dan blijft de historie bewaard en kun je terugkijken.",
     "link": "14297.htm"
    },
    {
     "id": "collectief",
     "t": "choice",
     "l": "Hoe stellen jullie de jaarlijkse begroting op?",
     "o": [
      "Per formatieplaats handmatig",
      "Meerdere tegelijk via de actie Formatiebegroting",
      "Via een import (Excel)"
     ],
     "a": "Via een import (Excel)",
     "at": "Wie de begroting in Excel voorbereidt, kan die in één keer importeren. Voor kleinere wijzigingen werkt de actie Formatiebegroting voor meerdere formatieplaatsen tegelijk.",
     "link": "14297.htm"
    },
    {
     "id": "kostenplaats",
     "t": "choice",
     "l": "Willen jullie de formatie ook op kostenplaats of kostendrager begroten?",
     "h": "Daarvoor moeten deze velden aan staan bij de werkgever (tabblad Journalisering).",
     "o": [
      "Ja, op kostenplaats",
      "Ja, op kostenplaats en kostendrager",
      "Nee"
     ],
     "link": "13666.htm"
    },
    {
     "id": "opsteller",
     "t": "text",
     "l": "Wie stelt de begroting op en wie stelt hem vast?"
    },
    {
     "id": "vaststellen",
     "t": "choice",
     "l": "Wanneer wordt de begroting voor het nieuwe jaar vastgesteld?",
     "o": [
      "In het vierde kwartaal",
      "In januari",
      "Anders"
     ],
     "opt": true
    }
   ]
  },
  {
   "id": "fb4",
   "title": "Bezetting en formatieverdeling",
   "short": "Bezetting",
   "intro": "AFAS vergelijkt de begroting met de werkelijke bezetting, inclusief in- en uitstroom. Alleen medewerkers die aan een formatieplaats gekoppeld zijn tellen mee.",
   "qs": [
    {
     "id": "koppelen",
     "t": "advies",
     "l": "Alle medewerkers koppelen aan een formatieplaats",
     "at": "Koppel elke medewerker aan een formatieplaats. Wie niet gekoppeld is, telt niet mee in de werkelijke bezetting en dan klopt het verschil tussen begroot en werkelijk niet.",
     "link": "Hrm_Format.htm"
    },
    {
     "id": "uitstroom",
     "t": "choice",
     "l": "Moet geplande uitstroom (contracten die aflopen) meetellen bij de vrije ruimte?",
     "h": "AFAS toont het verschil zowel met als zonder uitstroom van contracten voor bepaalde tijd.",
     "o": [
      "Ja, meetellen",
      "Nee, alleen vaste uitstroom",
      "Beide willen we zien"
     ],
     "a": "Beide willen we zien",
     "at": "Door beide te tonen zie je de ruimte die zeker ontstaat en de ruimte die ontstaat als tijdelijke contracten niet verlengd worden.",
     "link": "Hrm_Format.htm"
    },
    {
     "id": "verdeeld",
     "t": "choice",
     "l": "Werken medewerkers voor meerdere afdelingen of functies tegelijk?",
     "o": [
      "Nee",
      "Ja, een klein aantal",
      "Ja, veel medewerkers"
     ]
    },
    {
     "id": "verdeling",
     "t": "choice",
     "l": "Willen jullie die medewerkers over meerdere formatieplaatsen verdelen?",
     "h": "Per medewerker leg je dan per regel een organisatorische eenheid, functie, formatieplaats en percentage vast (samen 100%).",
     "o": [
      "Ja",
      "Nee",
      "Niet van toepassing"
     ],
     "link": "4825.htm"
    },
    {
     "id": "autorisatie",
     "t": "choice",
     "l": "Moeten leidinggevenden ook de medewerkers zien die deels bij hun afdeling werken?",
     "h": "Dit heet 'Medewerkerautorisatie op basis van formatieverdeling'. Het heeft gevolgen voor gebruikersgroepen, workflows en filters.",
     "o": [
      "Ja",
      "Nee",
      "Weten we nog niet"
     ],
     "link": "https://help.afas.nl/help/nl/se/Hrm_Config_OrgCht_Format.htm"
    },
    {
     "id": "autotest",
     "t": "advies",
     "l": "Autorisatie op formatieverdeling eerst testen",
     "at": "Zet deze autorisatie alleen aan als medewerkers echt verdeeld zijn, en test de conversie eerst in een testomgeving. Daarna kijken gebruikersgroepen, verantwoordelijken in workflows en filters naar de verdeling.",
     "link": "https://help.afas.nl/help/nl/se/Hrm_Config_OrgCht_Format.htm"
    },
    {
     "id": "loonkosten",
     "t": "choice",
     "l": "Moeten loonkosten volgens de formatieverdeling worden doorbelast in de journalisering?",
     "o": [
      "Ja",
      "Nee",
      "Weten we nog niet"
     ],
     "link": "4825.htm"
    }
   ]
  },
  {
   "id": "fb5",
   "title": "Workflows en goedkeuring",
   "short": "Workflows",
   "intro": "AFAS heeft standaardworkflows voor het aanmaken of wijzigen van formatieplaatsen en begrotingen, zodat wijzigingen niet zonder goedkeuring doorgevoerd worden.",
   "qs": [
    {
     "id": "wfplaats",
     "t": "choice",
     "l": "Moet een nieuwe of gewijzigde formatieplaats worden goedgekeurd?",
     "o": [
      "Ja, via de workflow",
      "Nee, HR legt het direct vast"
     ],
     "a": "Ja, via de workflow",
     "at": "Met de standaardworkflow Formatieplaats is altijd terug te zien wie een formatieplaats heeft aangevraagd en wie die heeft goedgekeurd.",
     "link": "141322.htm"
    },
    {
     "id": "wfbegroting",
     "t": "choice",
     "l": "Moet een wijziging van de begroting worden goedgekeurd?",
     "o": [
      "Ja, via de workflow",
      "Nee, HR legt het direct vast"
     ],
     "a": "Ja, via de workflow",
     "at": "Met de standaardworkflow Formatiebegroting beoordeelt de leidinggevende van de afdeling (of een vervanger) elke begrotingswijziging voordat die definitief wordt.",
     "link": "141324.htm"
    },
    {
     "id": "aanvrager",
     "t": "multi",
     "l": "Wie mag een wijziging in de formatie aanvragen?",
     "o": [
      "Leidinggevende",
      "HR-adviseur",
      "Controller",
      "Directie"
     ]
    },
    {
     "id": "beoordelaar",
     "t": "area",
     "l": "Wie beoordeelt formatiewijzigingen, en zijn er meerdere stappen?",
     "h": "Bijvoorbeeld: eerst de controller, daarna de directie bij uitbreiding."
    },
    {
     "id": "mandaat",
     "t": "area",
     "l": "Zijn er afspraken over mandaat, bijvoorbeeld tot welke uitbreiding een leidinggevende zelf mag beslissen?",
     "opt": true
    }
   ]
  },
  {
   "id": "fb6",
   "title": "Koppeling met werving en selectie",
   "short": "Vacatures",
   "intro": "Met de workflow 'Vacature met formatiecontrole' controleert AFAS bij een vacatureaanvraag of er ruimte is binnen de begroting van de formatieplaats.",
   "qs": [
    {
     "id": "controle",
     "t": "choice",
     "l": "Moeten vacatures gekoppeld worden aan een formatieplaats met formatiecontrole?",
     "o": [
      "Ja, altijd",
      "Alleen bij uitbreiding",
      "Nee"
     ],
     "a": "Ja, altijd",
     "at": "De workflow controleert de bezetting tegen de begroting van de gekoppelde formatieplaats. Zo wordt geen vacature uitgezet zonder dat er ruimte voor is.",
     "link": "141326.htm"
    },
    {
     "id": "overschrijding",
     "t": "choice",
     "l": "Mag een vacature worden goedgekeurd als de begroting overschreden wordt?",
     "o": [
      "Ja, met een aparte goedkeuring",
      "Nee, nooit"
     ],
     "a": "Ja, met een aparte goedkeuring",
     "at": "De workflow kent de keuze 'Goedkeuren met begrotingsoverschrijding'. Zo kun je bij vervanging of overlap toch werven, maar wel bewust.",
     "link": "141326.htm"
    },
    {
     "id": "overwie",
     "t": "text",
     "l": "Wie mag een overschrijding goedkeuren?"
    },
    {
     "id": "begindatum",
     "t": "advies",
     "l": "Let op de begindatum van de vacature",
     "at": "De formatiecontrole kijkt alleen naar de begindatum van de vacature. Spreek af dat aanvragers een realistische begindatum invullen.",
     "link": "141326.htm"
    },
    {
     "id": "wsafas",
     "t": "choice",
     "l": "Gebruiken jullie werving en selectie in AFAS (of gaan jullie dat doen)?",
     "o": [
      "Ja",
      "Nee",
      "Weten we nog niet"
     ],
     "ifNot": "ws"
    }
   ]
  },
  {
   "id": "fb7",
   "title": "InSite en rapportage",
   "short": "Rapportage",
   "intro": "In InSite is er een portal Formatiebeheer. Daarnaast toont AFAS overzichten van de actuele formatie en alle begrotingsregels.",
   "qs": [
    {
     "id": "portal",
     "t": "choice",
     "l": "Willen jullie de portal Formatiebeheer in InSite gebruiken?",
     "o": [
      "Ja",
      "Nee",
      "Weten we nog niet"
     ],
     "a": "Ja",
     "at": "Met het paginatype Formatiebeheer en de meegeleverde profielen kunnen leidinggevenden en controllers de formatie zelf inzien en wijzigingen aanvragen.",
     "link": "140873.htm"
    },
    {
     "id": "inzien",
     "t": "multi",
     "l": "Wie moet de formatie en bezetting kunnen inzien?",
     "o": [
      "HR",
      "Controller",
      "Leidinggevenden (eigen afdeling)",
      "Directie"
     ]
    },
    {
     "id": "peildatum",
     "t": "advies",
     "l": "Weergaven en peildatum",
     "at": "'Formatieplaatsen (actueel)' toont alleen wat vandaag geldt. Gebruik 'Overzicht formatiebegroting' voor alle begrotingsregels, bijvoorbeeld om te exporteren en te analyseren.",
     "link": "14306.htm"
    },
    {
     "id": "rapporten",
     "t": "multi",
     "l": "Welke overzichten willen jullie regelmatig zien?",
     "o": [
      "Begroot tegenover werkelijk per afdeling",
      "Vacatureruimte",
      "Overbezetting",
      "In- en uitstroom"
     ],
     "h": "Begroot, werkelijk en het verschil zie je standaard in de weergave Formatieplaatsen (actueel). Andere overzichten vragen een eigen weergave, rapport of Power BI; je Mentor bespreekt wat standaard kan.",
     "link": "14306.htm"
    },
    {
     "id": "frequentie",
     "t": "choice",
     "l": "Hoe vaak moeten deze overzichten worden besproken?",
     "o": [
      "Maandelijks",
      "Per kwartaal",
      "Bij de begroting"
     ]
    },
    {
     "id": "powerbi",
     "t": "choice",
     "l": "Gebruiken jullie Power BI voor HR-rapportages?",
     "o": [
      "Ja",
      "Nee",
      "Willen we wel"
     ]
    }
   ]
  }
 ]
});
