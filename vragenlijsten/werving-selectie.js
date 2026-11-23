/* Vragenlijst Werving & Selectie (zie SCHEMA.md) */
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
 "id": "ws",
 "order": 2,
 "title": "Werving & Selectie",
 "short": "W&S",
 "tagline": "Van vacatureaanvraag tot aanname",
 "intro": "Vacatureaanvraag, vacaturesjabloon, publiceren, de werken-bij-pagina, sollicitatie en beoordelen.",
 "flow": [
  {
   "s": "s1",
   "t": "Aanvragen",
   "d": "Leidinggevende vraagt aan"
  },
  {
   "s": "s2",
   "t": "Opstellen",
   "d": "Vacature en sjabloon"
  },
  {
   "s": "s3",
   "t": "Publiceren",
   "d": "InSite en OutSite"
  },
  {
   "s": "s4",
   "t": "Werken-bij",
   "d": "Opmaak en inhoud"
  },
  {
   "s": "s5",
   "t": "Selecteren",
   "d": "Sollicitatie en workflow"
  },
  {
   "s": "s5b",
   "t": "Beoordelen",
   "d": "Score en keuze"
  }
 ],
 "flowSub": [
  "ws0",
  "s6",
  "s7",
  "s8",
  "s9",
  "s10"
 ],
 "sections": [
  {
   "id": "ws0",
   "title": "Huidige werving",
   "short": "Huidige werving",
   "intro": "Een beeld van de manier van werven nu. Zo stemmen we de best practice af op jullie situatie.",
   "qs": [
    {
     "id": "volume",
     "t": "choice",
     "l": "Hoeveel vacatures openen jullie gemiddeld per jaar?",
     "o": [
      "Minder dan 25",
      "25 tot 100",
      "100 tot 250",
      "Meer dan 250"
     ]
    },
    {
     "id": "sollperv",
     "t": "choice",
     "l": "Hoeveel sollicitaties komen er gemiddeld per vacature binnen?",
     "o": [
      "Minder dan 10",
      "10 tot 30",
      "30 tot 100",
      "Meer dan 100"
     ]
    },
    {
     "id": "huidig",
     "t": "choice",
     "l": "Hoe werven jullie nu?",
     "o": [
      "Al deels in AFAS",
      "Ander recruitmentsysteem",
      "E-mail en Excel",
      "Grotendeels via bureaus"
     ]
    },
    {
     "id": "huidigsys",
     "t": "text",
     "l": "Welk systeem gebruiken jullie nu en wanneer loopt dat contract af?",
     "opt": true
    },
    {
     "id": "url",
     "t": "text",
     "l": "Adres (URL) van jullie huidige werken-bij-pagina",
     "opt": true
    }
   ]
  },
  {
   "id": "s1",
   "title": "Vacatureaanvraag en goedkeuring",
   "short": "Aanvragen",
   "intro": "Een leidinggevende die iemand nodig heeft, vraagt een vacature aan. Na goedkeuring staat de vacature in AFAS klaar om te publiceren.",
   "qs": [
    {
     "id": "hoe",
     "t": "choice",
     "l": "Hoe wordt een vacature aangevraagd?",
     "o": [
      "Via InSite (workflow Vacature)",
      "Per e-mail aan HR",
      "HR maakt de vacature zelf aan"
     ],
     "a": "Via InSite (workflow Vacature)",
     "at": "Laat de aanvraag via InSite lopen. Dan liggen de gegevens vanaf het begin vast, is de goedkeuring traceerbaar en hoeft HR niets over te typen.",
     "link": "133958.htm"
    },
    {
     "id": "wie",
     "t": "multi",
     "l": "Wie mag een vacature aanvragen?",
     "o": [
      "Leidinggevende",
      "HR-adviseur",
      "Recruiter",
      "Directie"
     ],
     "a": [
      "Leidinggevende",
      "HR-adviseur"
     ],
     "at": "De leidinggevende vraagt aan; HR kan namens de leidinggevende aanvragen."
    },
    {
     "id": "lagen",
     "t": "choice",
     "l": "Hoeveel goedkeuringsstappen zijn er nodig?",
     "o": [
      "Geen goedkeuring",
      "Eén stap (HR)",
      "Twee stappen (HR en directie of budgethouder)",
      "Afhankelijk van het soort vacature"
     ],
     "a": "Eén stap (HR)",
     "at": "Houd de goedkeuring kort. Elke extra stap verlengt de doorlooptijd. Leg een tweede stap alleen vast voor uitzonderingen, zoals een nieuwe functie of uitbreiding."
    },
    {
     "id": "goedkeurders",
     "t": "area",
     "l": "Wie keurt de aanvraag goed (functie of naam)?"
    },
    {
     "id": "norm",
     "t": "choice",
     "l": "Binnen hoeveel werkdagen moet een aanvraag beoordeeld zijn?",
     "o": [
      "2 werkdagen",
      "5 werkdagen",
      "Geen vaste termijn"
     ],
     "a": "2 werkdagen",
     "at": "Een vaste termijn houdt de aanvraag in beweging. AFAS heeft hiervoor geen standaardsignaal; een herinnering vraagt een eigen signaal."
    },
    {
     "id": "velden",
     "t": "multi",
     "l": "Welke gegevens zijn verplicht bij de aanvraag?",
     "h": "AFAS kent onder meer de volgende velden in de vacature.",
     "o": [
      "Functie",
      "Organisatorische eenheid",
      "Locatie",
      "Contracttype",
      "Uren / FTE",
      "Salarissoort",
      "Werkniveau",
      "Opleidingsniveau",
      "Werkervaring",
      "Begindatum",
      "Verantwoordelijke(n)",
      "Reden vacature (vrij veld)"
     ],
     "a": [
      "Functie",
      "Organisatorische eenheid",
      "Locatie",
      "Contracttype",
      "Uren / FTE",
      "Begindatum",
      "Verantwoordelijke(n)"
     ],
     "at": "Maak alleen verplicht wat je echt nodig hebt om te publiceren en te selecteren. Te veel verplichte velden remt de aanvrager.",
     "link": "133958.htm"
    },
    {
     "id": "formatieplaats",
     "t": "choice",
     "l": "Koppelen jullie een vacature aan een formatieplaats?",
     "h": "Dan kan AFAS bij de aanvraag controleren of er formatieruimte is.",
     "o": [
      "Ja",
      "Nee",
      "Weet nog niet"
     ],
     "link": "141326.htm",
     "lt": "Vacature met formatiecontrole",
     "ifNot": "formatie"
    },
    {
     "id": "status",
     "t": "advies",
     "l": "Status vacature verplicht",
     "h": "Elke vacature heeft een status (bijvoorbeeld Open of Gesloten).",
     "at": "Maak het veld Status vacature verplicht in het profiel voor het aanmaken van een vacature. Zo is altijd duidelijk welke vacatures openstaan.",
     "link": "133958.htm"
    },
    {
     "id": "verantw",
     "t": "choice",
     "l": "Wie zijn de verantwoordelijken op een vacature?",
     "o": [
      "Alleen recruiter / HR",
      "Recruiter en leidinggevende",
      "Alleen leidinggevende"
     ],
     "a": "Recruiter en leidinggevende",
     "at": "Met beiden als verantwoordelijke ziet de leidinggevende de eigen sollicitanten en blijft de recruiter regisseur."
    },
    {
     "id": "wijzig",
     "t": "choice",
     "l": "Wat gebeurt er als een goedgekeurde vacature later wordt gewijzigd?",
     "o": [
      "Wijziging direct doorvoeren",
      "Wijziging opnieuw laten beoordelen"
     ],
     "a": "Wijziging opnieuw laten beoordelen",
     "at": "Laat wijzigingen in bijvoorbeeld uren of salaris opnieuw beoordelen. In de workflow stel je dit in.",
     "link": "133958.htm"
    },
    {
     "id": "afsluiten",
     "t": "choice",
     "l": "Wanneer sluit een vacature automatisch?",
     "o": [
      "Bij bereikt aantal FTE",
      "Bij bereikt aantal sollicitanten",
      "Wat het eerst bereikt wordt",
      "Niet automatisch"
     ],
     "a": "Wat het eerst bereikt wordt",
     "at": "Automatisch afsluiten voorkomt dat vervulde vacatures online blijven staan.",
     "link": "133958.htm"
    },
    {
     "id": "maxsoll",
     "t": "number",
     "l": "Maximaal aantal sollicitanten per vacature (indien van toepassing)",
     "opt": true
    }
   ]
  },
  {
   "id": "s2",
   "title": "Vacature en vacaturesjabloon",
   "short": "Opstellen",
   "intro": "De vacature in AFAS is de basis; het documentsjabloon bepaalt hoe de vacaturetekst eruitziet en waar die verschijnt.",
   "qs": [
    {
     "id": "functiegroepen",
     "t": "area",
     "l": "Welke soorten vacatures (functiegroepen) hebben jullie?",
     "h": "Bijvoorbeeld: zorg, kantoor, techniek, stage. Per soort kan AFAS andere velden tonen (profielen)."
    },
    {
     "id": "profielen",
     "t": "choice",
     "l": "Hoeveel vacatureprofielen verwachten jullie nodig te hebben?",
     "o": [
      "Eén voor alles",
      "Twee tot drie",
      "Vier of meer"
     ],
     "a": "Twee tot drie",
     "at": "Maak een profiel per functiegroep met echt andere velden, niet per functie. Dat blijft beheersbaar.",
     "link": "133958.htm"
    },
    {
     "id": "opbouw",
     "t": "multi",
     "l": "Uit welke blokken bestaat de vacaturetekst?",
     "o": [
      "Over ons",
      "De functie",
      "Wat ga je doen",
      "Wat vragen wij",
      "Wat bieden wij",
      "Salarisindicatie",
      "Sollicitatieprocedure",
      "Contactpersoon"
     ],
     "a": [
      "Over ons",
      "De functie",
      "Wat ga je doen",
      "Wat vragen wij",
      "Wat bieden wij",
      "Salarisindicatie",
      "Sollicitatieprocedure",
      "Contactpersoon"
     ],
     "at": "Gebruik één vaste opbouw voor elke vacaturetekst. Kandidaten vergelijken vacatures makkelijker en de aanvrager weet wat er gevraagd wordt."
    },
    {
     "id": "salaris",
     "t": "choice",
     "l": "Tonen jullie salaris in de vacature?",
     "o": [
      "Altijd een bedrag of schaal",
      "Een bandbreedte (van–tot)",
      "Nooit"
     ],
     "a": "Een bandbreedte (van–tot)",
     "at": "Een salarisindicatie levert meer en beter passende reacties op, en sluit aan op de Europese richtlijn loontransparantie."
    },
    {
     "id": "standaard",
     "t": "text",
     "l": "Wie beheert de vaste teksten, zoals “Over ons” en “Wat bieden wij”?",
     "h": "Vaste teksten die in elke vacature terugkomen, wil je op één plek actueel houden."
    },
    {
     "id": "schrijver",
     "t": "choice",
     "l": "Wie schrijft de vacaturetekst?",
     "o": [
      "Leidinggevende",
      "Recruiter / HR",
      "Samen: leidinggevende levert input, recruiter schrijft"
     ],
     "a": "Samen: leidinggevende levert input, recruiter schrijft",
     "at": "De leidinggevende kent de functie, de recruiter de doelgroep en de toon."
    },
    {
     "id": "eisen",
     "t": "choice",
     "l": "Gebruiken jullie de vaste velden werkniveau, opleidingsniveau en werkervaring?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Deze velden maken filteren en matchen mogelijk. De lijsten met waarden kunnen we uitbreiden.",
     "link": "133958.htm"
    },
    {
     "id": "vrijevelden",
     "t": "area",
     "l": "Welke extra gegevens willen jullie per vacature vastleggen?",
     "h": "Deze leggen we vast als vrije velden.",
     "opt": true
    },
    {
     "id": "googletxt",
     "t": "advies",
     "l": "Korte omschrijving voor Google for Jobs",
     "at": "Vul bij elke vacature het veld 'Google Jobs omschrijving'. Zonder deze tekst neemt Google de vacature niet over.",
     "link": "135381.htm"
    },
    {
     "id": "engels",
     "t": "choice",
     "l": "Publiceren jullie ook Engelstalige vacatures?",
     "o": [
      "Nee",
      "Soms",
      "Vaak"
     ]
    },
    {
     "id": "voorbeeld",
     "t": "upload",
     "l": "Upload een of twee huidige vacatureteksten die jullie goed vinden",
     "opt": true
    }
   ]
  },
  {
   "id": "s3",
   "title": "Publiceren van vacatures",
   "short": "Publiceren",
   "intro": "Een vacature wordt in AFAS gepubliceerd op InSite (voor medewerkers) en OutSite (de externe werken-bij-site).",
   "qs": [
    {
     "id": "intern",
     "t": "choice",
     "l": "Werven jullie eerst intern?",
     "o": [
      "Nee, direct intern en extern",
      "Eerst 1 week intern",
      "Eerst 2 weken intern",
      "Per vacature bepalen"
     ],
     "a": "Eerst 2 weken intern",
     "at": "Met 'afwijkend publiceren' zet je de vacature eerst alleen op InSite en daarna ook op OutSite. Dat geeft eigen medewerkers voorrang.",
     "link": "133958.htm"
    },
    {
     "id": "insite",
     "t": "advies",
     "l": "Interne vacatures op InSite",
     "at": "Toon alle vacatures ook op InSite, zodat medewerkers intern kunnen solliciteren.",
     "link": "130034.htm"
    },
    {
     "id": "google",
     "t": "choice",
     "l": "Moeten vacatures automatisch in Google for Jobs verschijnen?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Google for Jobs zet je per OutSite aan. Het levert extra bereik zonder extra werk.",
     "link": "135381.htm"
    },
    {
     "id": "jobalert",
     "t": "choice",
     "l": "Kunnen kandidaten zich abonneren op nieuwe vacatures (job alert)?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Met een job alert bouw je een eigen kandidatenpool op.",
     "link": "129739.htm"
    },
    {
     "id": "open",
     "t": "choice",
     "l": "Kunnen kandidaten een open sollicitatie doen?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Maak hiervoor een vacature 'Open sollicitatie'. Een sollicitant koppel je later aan een echte vacature.",
     "link": "133956.htm"
    },
    {
     "id": "publiceerder",
     "t": "choice",
     "l": "Wie publiceert de vacature?",
     "o": [
      "Recruiter / HR",
      "Leidinggevende",
      "Automatisch na goedkeuring"
     ],
     "a": "Recruiter / HR",
     "at": "Laat één partij publiceren. Dan is de kwaliteit van de tekst geborgd."
    },
    {
     "id": "duur",
     "t": "choice",
     "l": "Hoe lang staat een vacature standaard online?",
     "o": [
      "4 weken",
      "6 weken",
      "Tot de vacature vervuld is"
     ],
     "a": "4 weken",
     "at": "Een vaste looptijd houdt de site actueel; verlengen kan altijd."
    },
    {
     "id": "perwerkgever",
     "t": "choice",
     "l": "Hebben jullie meerdere werkgevers met elk een eigen uitstraling?",
     "o": [
      "Nee, één uitstraling",
      "Ja, per werkgever een eigen uitstraling"
     ]
    },
    {
     "id": "overig",
     "t": "area",
     "l": "Op welke andere plekken plaatsen jullie nu vacatures?",
     "h": "Ter informatie, zodat we het totale wervingsproces in beeld hebben.",
     "opt": true
    }
   ]
  },
  {
   "id": "s4",
   "title": "Werken-bij-pagina: opmaak en inhoud",
   "short": "Werken-bij",
   "intro": "De werken-bij-pagina is een OutSite. Kleuren, lettertypen, menu, banners en knoppen stel je in met de thema-editor.",
   "qs": [
    {
     "id": "site",
     "t": "choice",
     "l": "Gaat het om een nieuwe of een bestaande OutSite?",
     "o": [
      "Nieuwe OutSite",
      "Bestaande OutSite aanpassen",
      "Weet niet of we een OutSite hebben"
     ]
    },
    {
     "id": "thema",
     "t": "advies",
     "l": "Thema volgens jullie huisstijl",
     "at": "We nemen de kleuren (hexcodes) en lettertypen uit jullie huisstijl over in het thema van de OutSite. Eén thema per site houdt de uitstraling consistent.",
     "link": "Ins_Theme.htm"
    },
    {
     "id": "kleur1",
     "t": "text",
     "l": "Primaire kleur (hexcode, bijvoorbeeld #262E73)",
     "short": true
    },
    {
     "id": "kleur2",
     "t": "text",
     "l": "Secundaire kleur (hexcode)",
     "short": true
    },
    {
     "id": "kleur3",
     "t": "text",
     "l": "Accentkleur voor knoppen (hexcode)",
     "short": true,
     "opt": true
    },
    {
     "id": "font",
     "t": "text",
     "l": "Lettertype(n) voor koppen en tekst"
    },
    {
     "id": "logo",
     "t": "upload",
     "l": "Upload jullie logo (bij voorkeur SVG of PNG met transparante achtergrond)"
    },
    {
     "id": "huisstijl",
     "t": "upload",
     "l": "Upload de huisstijlgids (PDF)",
     "opt": true
    },
    {
     "id": "beeld",
     "t": "upload",
     "l": "Upload beeldmateriaal voor banners (foto's van eigen medewerkers werken het best)",
     "opt": true
    },
    {
     "id": "menu",
     "t": "multi",
     "l": "Welke onderdelen komen in het menu?",
     "o": [
      "Vacatures",
      "Over ons",
      "Werken bij ons",
      "Sollicitatieproces",
      "Veelgestelde vragen",
      "Contact",
      "Mijn sollicitaties (inloggen)"
     ],
     "a": [
      "Vacatures",
      "Werken bij ons",
      "Sollicitatieproces",
      "Contact",
      "Mijn sollicitaties (inloggen)"
     ],
     "at": "Houd het menu kort; de vacatures staan centraal. 'Mijn sollicitaties' geeft kandidaten toegang tot hun eigen portal."
    },
    {
     "id": "banner",
     "t": "area",
     "l": "Welke boodschap moet bovenaan de pagina staan?",
     "h": "Bijvoorbeeld een korte zin over waarom het fijn werken is bij jullie."
    },
    {
     "id": "toegankelijk",
     "t": "advies",
     "l": "Digitale toegankelijkheid",
     "at": "Kies kleuren met voldoende contrast en geef afbeeldingen een beschrijving, zodat de pagina voor iedereen bruikbaar is.",
     "link": "Ins_Theme.htm",
     "lt": "Thema’s in AFAS"
    },
    {
     "id": "vindbaar",
     "t": "area",
     "l": "Hoe komen bezoekers vanaf jullie hoofdwebsite bij de vacatures?",
     "h": "Bijvoorbeeld een knop 'Werken bij' in het menu van jullie website."
    },
    {
     "id": "inspiratie",
     "t": "area",
     "l": "Welke werken-bij-sites vinden jullie goed (links)?",
     "opt": true
    },
    {
     "id": "contentwie",
     "t": "text",
     "l": "Wie levert de teksten en beelden en keurt de opmaak goed?"
    }
   ]
  },
  {
   "id": "s5",
   "title": "Sollicitatie en selectie",
   "short": "Selecteren",
   "intro": "Een kandidaat solliciteert via de werken-bij-site of InSite. Daarna loopt de sollicitatie via de workflow Sollicitatie: beoordelen, uitnodigen, afwijzen of doorzetten.",
   "qs": [
    {
     "id": "formvelden",
     "t": "multi",
     "l": "Wat vraag je op het sollicitatieformulier?",
     "o": [
      "Naam en adres",
      "E-mail",
      "Telefoon",
      "CV (upload)",
      "Motivatiebrief (upload)",
      "Motivatie (tekstveld)",
      "LinkedIn-profiel",
      "Beschikbaarheid",
      "Hoe heb je ons gevonden?"
     ],
     "a": [
      "Naam en adres",
      "E-mail",
      "Telefoon",
      "CV (upload)",
      "Motivatie (tekstveld)",
      "Hoe heb je ons gevonden?"
     ],
     "at": "Hoe korter het formulier, hoe meer kandidaten het afmaken. 'Hoe heb je ons gevonden?' geeft inzicht in je beste kanalen."
    },
    {
     "id": "motivatie",
     "t": "choice",
     "l": "Is een motivatie verplicht?",
     "o": [
      "Verplicht",
      "Optioneel",
      "Niet vragen"
     ],
     "a": "Optioneel"
    },
    {
     "id": "captcha",
     "t": "advies",
     "l": "Bescherming tegen spam (CAPTCHA)",
     "at": "Zet een CAPTCHA op het sollicitatieformulier om nep-sollicitaties te voorkomen.",
     "link": "133635.htm"
    },
    {
     "id": "portal",
     "t": "advies",
     "l": "Eigen portal voor sollicitanten",
     "at": "Na het solliciteren krijgt de kandidaat een inlog. Daar ziet hij de status, kan hij gegevens aanvullen en vragen beantwoorden.",
     "link": "130034.htm"
    },
    {
     "id": "workflow",
     "t": "advies",
     "l": "Standaard sollicitatieworkflow",
     "h": "De standaardworkflow kent de statussen Open, Uitgenodigd, Gekoppeld aan andere vacature en Afgewezen.",
     "at": "Start met de standaardworkflow Sollicitatie en voeg alleen stappen toe die echt nodig zijn.",
     "link": "134067.htm"
    },
    {
     "id": "fases",
     "t": "area",
     "l": "Welke extra stappen of fases hebben jullie nodig?",
     "h": "Bijvoorbeeld tweede gesprek, assessment, proefdag, referentiecheck.",
     "opt": true
    },
    {
     "id": "rondes",
     "t": "choice",
     "l": "Hoeveel gespreksrondes zijn er meestal?",
     "o": [
      "Eén",
      "Twee",
      "Twee plus assessment of proefdag",
      "Verschilt per functie"
     ]
    },
    {
     "id": "eerstesel",
     "t": "choice",
     "l": "Wie doet de eerste selectie op cv?",
     "o": [
      "Recruiter / HR",
      "Leidinggevende",
      "Samen"
     ],
     "a": "Recruiter / HR",
     "at": "De recruiter doet de eerste schifting; de leidinggevende beoordeelt alleen de kandidaten die door zijn. Dat scheelt de leidinggevende veel tijd."
    },
    {
     "id": "afwijzen",
     "t": "advies",
     "l": "Afwijzen altijd via de workflow, met reden",
     "at": "Wijs altijd af via de workflow, met een vaste reden. De bewaartermijn voor de AVG sluit daarop aan, en je krijgt inzicht in afwijsredenen.",
     "link": "134067.htm"
    },
    {
     "id": "redenen",
     "t": "area",
     "l": "Welke afwijsredenen willen jullie gebruiken?",
     "h": "Bijvoorbeeld: onvoldoende ervaring, andere kandidaat gekozen, salaris, kandidaat trekt zich terug."
    },
    {
     "id": "reactie",
     "t": "choice",
     "l": "Binnen hoeveel werkdagen krijgt een sollicitant een eerste reactie?",
     "o": [
      "2 werkdagen",
      "5 werkdagen",
      "10 werkdagen"
     ],
     "a": "5 werkdagen",
     "at": "Een vaste reactietermijn houdt kandidaten betrokken. AFAS bewaakt deze termijn niet standaard; dat vraagt een eigen signaal of een vaste werkafspraak."
    },
    {
     "id": "interne",
     "t": "choice",
     "l": "Moet de huidige leidinggevende geïnformeerd worden als een medewerker intern solliciteert?",
     "o": [
      "Ja",
      "Nee",
      "Weet nog niet"
     ],
     "link": "130034.htm",
     "h": "Medewerkers solliciteren via InSite. AFAS levert hiervoor geen aparte standaardworkflow mee; een eigen route richten we zelf in."
    },
    {
     "id": "checks",
     "t": "multi",
     "l": "Welke controles doen jullie tijdens de selectie?",
     "o": [
      "Referentiecheck",
      "VOG",
      "Assessment",
      "Diplomacontrole",
      "Geen"
     ]
    },
    {
     "id": "agenda",
     "t": "choice",
     "l": "Willen jullie gespreksafspraken in AFAS vastleggen?",
     "o": [
      "Ja",
      "Nee, dat doen we in Outlook"
     ],
     "link": "133938.htm"
    },
    {
     "id": "ai",
     "t": "choice",
     "l": "Hebben jullie interesse in AI-matching van cv's en vacatures?",
     "h": "AFAS kan cv’s analyseren en sollicitanten en medewerkers matchen met vacatures. Dit vraagt een aparte activering.",
     "o": [
      "Ja, graag meer informatie",
      "Nee",
      "Weet nog niet"
     ],
     "opt": true,
     "link": "140215.htm",
     "lt": "Inrichting AI-matching"
    }
   ]
  },
  {
   "id": "s5b",
   "title": "Beoordelen van sollicitanten",
   "short": "Beoordelen",
   "intro": "Vanaf de sollicitant (of vanuit de sollicitatieworkflow) vraag je een beoordeling op. De beoordelaars krijgen een taak, scoren de kandidaat op de criteria van de vacature en AFAS toont de gemiddelde beoordeling op de stamkaart van de sollicitant.",
   "qs": [
    {
     "id": "taak",
     "t": "advies",
     "l": "Beoordelen via een taak in AFAS",
     "at": "Vraag beoordelingen op via 'Beoordeling sollicitant opvragen'. Elke beoordelaar krijgt een taak en alle beoordelingen staan bij de sollicitant, in plaats van verspreid in mails en notities.",
     "link": "133959.htm"
    },
    {
     "id": "moment",
     "t": "multi",
     "l": "Op welke momenten wordt een kandidaat beoordeeld?",
     "o": [
      "Na cv-selectie",
      "Na het eerste gesprek",
      "Na het tweede gesprek",
      "Na assessment of proefdag"
     ],
     "a": [
      "Na het eerste gesprek",
      "Na het tweede gesprek"
     ],
     "at": "Beoordeel na elk gesprek, zolang de indruk vers is. Bij cv-selectie volstaat de keuze van de recruiter."
    },
    {
     "id": "wie",
     "t": "multi",
     "l": "Wie beoordelen de kandidaat?",
     "o": [
      "Leidinggevende",
      "Recruiter / HR",
      "Collega uit het team",
      "Sollicitatiecommissie"
     ],
     "a": [
      "Leidinggevende",
      "Recruiter / HR"
     ]
    },
    {
     "id": "aanwijzen",
     "t": "advies",
     "l": "Beoordelaars vastleggen op de vacature",
     "at": "Leg beoordelaars vast als verantwoordelijke op de vacature met 'Beoordelaar aan'. Dan weet AFAS bij elke sollicitant wie er moet beoordelen.",
     "link": "130565.htm"
    },
    {
     "id": "criteriaset",
     "t": "choice",
     "l": "Hoe stellen jullie de beoordelingscriteria vast?",
     "o": [
      "Eén standaardset voor alle vacatures",
      "Standaardset, per vacature aan te vullen",
      "Per vacature zelf kiezen"
     ],
     "a": "Standaardset, per vacature aan te vullen",
     "at": "Criteria richt je centraal in en koppel je aan de vacature. Een vaste basis maakt kandidaten vergelijkbaar; per vacature voeg je functiespecifieke criteria toe.",
     "link": "130565.htm"
    },
    {
     "id": "criteria",
     "t": "area",
     "l": "Op welke criteria beoordelen jullie kandidaten?",
     "h": "Bijvoorbeeld vakkennis, motivatie, communicatieve vaardigheden, cultuurmatch, groeipotentieel."
    },
    {
     "id": "schaal",
     "t": "area",
     "l": "Hoe willen jullie kandidaten scoren?",
     "h": "Bijvoorbeeld een cijfer of een beoordeling per criterium. We stemmen dit in de inrichting af op de mogelijkheden van het veld Beoordeling in AFAS."
    },
    {
     "id": "toelichting",
     "t": "choice",
     "l": "Geeft de beoordelaar een toelichting?",
     "o": [
      "Altijd",
      "Alleen bij een lage score",
      "Niet nodig"
     ],
     "a": "Altijd",
     "at": "Een korte toelichting in de reactie maakt een score begrijpelijk voor de andere beoordelaars en helpt bij een goede afwijzing."
    },
    {
     "id": "eindadvies",
     "t": "choice",
     "l": "Willen jullie dat elke beoordelaar ook een eindadvies geeft (bijvoorbeeld geschikt, twijfel, niet geschikt)?",
     "o": [
      "Ja",
      "Nee"
     ]
    },
    {
     "id": "onafhankelijk",
     "t": "choice",
     "l": "Beoordelen beoordelaars eerst zelfstandig, zonder elkaars score te kennen?",
     "o": [
      "Ja, eerst zelfstandig",
      "Nee, gezamenlijk na het gesprek"
     ],
     "h": "Dit is een werkafspraak. Zelfstandig beoordelen voorkomt dat de eerste mening de rest stuurt; AFAS dwingt dit niet af."
    },
    {
     "id": "termijn",
     "t": "choice",
     "l": "Binnen welke termijn moet een beoordeling ingevuld zijn?",
     "o": [
      "Dezelfde dag",
      "Binnen 2 werkdagen",
      "Binnen 5 werkdagen"
     ],
     "a": "Binnen 2 werkdagen",
     "at": "Snel beoordelen houdt de doorlooptijd kort. Goede kandidaten zijn anders vaak al elders aan de slag."
    },
    {
     "id": "gemiddelde",
     "t": "advies",
     "l": "Gemiddelde beoordeling als basis voor het gesprek over de keuze",
     "at": "Gebruik de gemiddelde beoordeling en het overzicht 'Beoordelingen bij sollicitant' op de stamkaart als startpunt voor de keuze. De uiteindelijke beslissing neemt de leidinggevende.",
     "link": "133959.htm"
    },
    {
     "id": "verslag",
     "t": "choice",
     "l": "Willen jullie gespreksverslagen bij de sollicitant in AFAS vastleggen?",
     "o": [
      "Ja",
      "Nee"
     ]
    }
   ]
  },
  {
   "id": "s6",
   "title": "Communicatie met sollicitanten",
   "short": "Communicatie",
   "intro": "AFAS heeft standaard berichtsjablonen voor de stappen in de workflow. De teksten passen we aan op jullie toon.",
   "qs": [
    {
     "id": "berichten",
     "t": "multi",
     "l": "Welke berichten moeten automatisch of met één klik verstuurd worden?",
     "o": [
      "Ontvangstbevestiging",
      "Uitnodiging gesprek",
      "Verzoek om meer informatie",
      "Afwijzing na cv-selectie",
      "Afwijzing na gesprek",
      "Contractvoorstel / aanbod"
     ],
     "a": [
      "Ontvangstbevestiging",
      "Uitnodiging gesprek",
      "Verzoek om meer informatie",
      "Afwijzing na cv-selectie",
      "Afwijzing na gesprek",
      "Contractvoorstel / aanbod"
     ],
     "at": "Gebruik de standaardsjablonen van AFAS en pas alleen de teksten aan. Zo krijgt elke kandidaat op tijd een reactie.",
     "link": "OverzichtWerving_en_selectie.htm",
     "lt": "Standaardinhoud W&S"
    },
    {
     "id": "toon",
     "t": "choice",
     "l": "Welke aanspreekvorm gebruiken jullie?",
     "o": [
      "Je / jij",
      "U",
      "Verschilt per doelgroep"
     ]
    },
    {
     "id": "afzender",
     "t": "choice",
     "l": "Van wie komen de berichten?",
     "o": [
      "Algemeen adres (bijv. werkenbij@)",
      "Persoonlijk adres van de recruiter"
     ],
     "a": "Algemeen adres (bijv. werkenbij@)",
     "at": "Een algemeen adres blijft werken bij vakantie of vertrek. Zet de naam van de recruiter in de ondertekening."
    },
    {
     "id": "meerinfo",
     "t": "advies",
     "l": "Meer informatie opvragen via e-mail én portal",
     "at": "Vraag aanvullende gegevens op via e-mail met een reactie in de portal. De kandidaat vult zelf aan en HR hoeft niets over te nemen.",
     "link": "134067.htm"
    },
    {
     "id": "belafwijzing",
     "t": "advies",
     "l": "Na een gesprek eerst bellen, dan mailen",
     "at": "Wijs kandidaten die op gesprek zijn geweest eerst telefonisch af en stuur daarna de bevestiging uit AFAS."
    },
    {
     "id": "mails",
     "t": "upload",
     "l": "Upload jullie huidige standaardmails of -brieven",
     "opt": true
    },
    {
     "id": "teksteigenaar",
     "t": "text",
     "l": "Wie schrijft en keurt de berichtteksten?"
    }
   ]
  },
  {
   "id": "s7",
   "title": "Privacy en bewaartermijnen (AVG)",
   "short": "AVG",
   "intro": "AFAS berekent zelf wanneer de gegevens van een sollicitant verwijderd moeten worden. Het verwijderen zelf is een vaste taak voor HR.",
   "qs": [
    {
     "id": "toestemming",
     "t": "choice",
     "l": "Vragen jullie sollicitanten om toestemming hun gegevens een jaar te bewaren?",
     "h": "Zonder toestemming worden gegevens 4 weken na de laatste afwijzing verwijderd, met toestemming 1 jaar.",
     "o": [
      "Ja, toestemmingsvraag tonen",
      "Nee, altijd de korte termijn"
     ],
     "a": "Ja, toestemmingsvraag tonen",
     "at": "Met toestemming kun je afgewezen kandidaten later benaderen voor een andere vacature.",
     "link": "134858.htm"
    },
    {
     "id": "routine",
     "t": "choice",
     "l": "Hoe vaak verwijderen jullie verlopen sollicitantgegevens?",
     "o": [
      "Maandelijks",
      "Per kwartaal",
      "Wanneer het uitkomt"
     ],
     "a": "Maandelijks",
     "at": "AFAS verwijdert niet automatisch. Een vaste maandelijkse routine voorkomt dat gegevens te lang bewaard blijven.",
     "link": "144566.htm"
    },
    {
     "id": "routinewie",
     "t": "text",
     "l": "Wie is verantwoordelijk voor deze routine?"
    },
    {
     "id": "privacy",
     "t": "text",
     "l": "Adres (URL) van jullie privacyverklaring voor sollicitanten"
    },
    {
     "id": "avgopm",
     "t": "area",
     "l": "Zijn er afspraken met de privacy officer of OR waar we rekening mee moeten houden?",
     "opt": true
    }
   ]
  },
  {
   "id": "s8",
   "title": "Aanbod, contract en onboarding",
   "short": "Onboarding",
   "intro": "Is de kandidaat gekozen, dan start je vanuit de sollicitatie de onboarding: contractvoorstel, digitaal tekenen en gegevens aanvullen. Daarna staat de nieuwe medewerker in AFAS. Kiezen jullie ook de vragenlijst Onboarding en contractering, dan vragen we dit daar uitgebreider uit.",
   "qs": [
    {
     "id": "start",
     "t": "advies",
     "l": "Onboarding direct vanuit de sollicitatie",
     "at": "Start de onboarding vanuit de sollicitatie. Alle gegevens gaan dan mee en niemand hoeft ze opnieuw in te voeren.",
     "link": "130526.htm"
    },
    {
     "id": "voorstel",
     "t": "choice",
     "l": "Werken jullie met een digitaal contractvoorstel?",
     "o": [
      "Ja",
      "Nee, contract gaat buiten AFAS om"
     ],
     "a": "Ja",
     "at": "De kandidaat keurt het voorstel goed in de portal, vult gegevens aan en tekent digitaal. Daarna wordt de medewerker automatisch aangemaakt.",
     "link": "131095.htm"
    },
    {
     "id": "tekenen",
     "t": "choice",
     "l": "Hoe wordt de arbeidsovereenkomst getekend?",
     "o": [
      "Digitaal in AFAS (met sms-code)",
      "Ander tekenpakket",
      "Op papier"
     ],
     "a": "Digitaal in AFAS (met sms-code)",
     "at": "Eerst tekent de leidinggevende of HR, daarna de medewerker met een sms-code.",
     "link": "131095.htm"
    },
    {
     "id": "tekenaars",
     "t": "text",
     "l": "Wie tekent namens de werkgever?"
    },
    {
     "id": "oprofielen",
     "t": "choice",
     "l": "Hoeveel onboardingprofielen hebben jullie nodig?",
     "o": [
      "Eén standaardprofiel",
      "Per functiegroep",
      "Per werkgever"
     ],
     "a": "Eén standaardprofiel",
     "at": "Begin met één standaardprofiel en voeg alleen profielen toe als de stappen echt verschillen."
    },
    {
     "id": "draaiboek",
     "t": "multi",
     "l": "Wat moet de nieuwe medewerker vóór de eerste werkdag aanleveren?",
     "o": [
      "Kopie identiteitsbewijs",
      "Diploma's",
      "VOG",
      "Familie- en noodcontactgegevens",
      "Pasfoto",
      "Gegevens loonheffingskorting"
     ],
     "a": [
      "Kopie identiteitsbewijs",
      "Diploma's",
      "Familie- en noodcontactgegevens",
      "Gegevens loonheffingskorting"
     ],
     "at": "Deze taken zet je klaar in het draaiboek. De kandidaat levert alles zelf aan via de portal.",
     "link": "130526.htm"
    },
    {
     "id": "pocket",
     "t": "advies",
     "l": "Uitnodiging voor AFAS Pocket op de begindatum",
     "at": "Zet ‘Uitnodigen voor AFAS Pocket’ aan bij het starten van de onboarding. De medewerker kan dan vanaf de begindatum bij loonstroken, verlof en nieuws.",
     "link": "135040.htm"
    },
    {
     "id": "idcheck",
     "t": "choice",
     "l": "Willen jullie de identiteit digitaal laten controleren (Valicare)?",
     "o": [
      "Ja",
      "Nee",
      "Graag meer informatie"
     ],
     "opt": true
    },
    {
     "id": "collegas",
     "t": "multi",
     "l": "Wat moet er voor de eerste werkdag door collega's geregeld worden?",
     "o": [
      "Account en e-mail (IT)",
      "Laptop / telefoon",
      "Toegangspas of sleutel",
      "Werkplek",
      "Buddy of inwerkplan",
      "Welkomstpakket"
     ]
    },
    {
     "id": "meenemen",
     "t": "area",
     "l": "Welke gegevens uit de sollicitatie moeten mee naar de medewerker?",
     "h": "Bijvoorbeeld rijbewijs, BIG-registratie of talen.",
     "opt": true
    },
    {
     "id": "doorloop",
     "t": "choice",
     "l": "Hoeveel tijd zit er meestal tussen akkoord en eerste werkdag?",
     "o": [
      "Minder dan 2 weken",
      "2 tot 4 weken",
      "1 tot 2 maanden",
      "Langer"
     ]
    }
   ],
   "ifNot": "onboarding"
  },
  {
   "id": "s9",
   "title": "Rollen en autorisatie",
   "short": "Rollen",
   "intro": "Wie mag wat zien? In AFAS regel je dat met de rol Werving & selectie en filters op sollicitanten en sollicitaties.",
   "qs": [
    {
     "id": "recruiters",
     "t": "area",
     "l": "Wie zijn de recruiters of HR-medewerkers die met werving en selectie werken?"
    },
    {
     "id": "beheerder",
     "t": "text",
     "l": "Wie wordt functioneel beheerder van werving en selectie in AFAS?"
    },
    {
     "id": "rol",
     "t": "advies",
     "l": "Standaardrol Werving & selectie",
     "at": "Gebruik de standaard autorisatierol Werving & selectie voor HR en recruiters en voeg alleen toe wat nodig is.",
     "link": "102445.htm"
    },
    {
     "id": "zichtlg",
     "t": "choice",
     "l": "Welke sollicitanten ziet een leidinggevende?",
     "o": [
      "Alleen van eigen vacatures",
      "Van de eigen afdeling",
      "Alle sollicitanten"
     ],
     "a": "Alleen van eigen vacatures",
     "at": "Met het filter op Verantwoordelijke ziet de leidinggevende alleen de sollicitanten voor de eigen vacatures.",
     "link": "130428.htm"
    },
    {
     "id": "zichthr",
     "t": "choice",
     "l": "Welke sollicitanten ziet HR?",
     "o": [
      "Alle sollicitanten",
      "Alleen eigen organisatorische eenheid"
     ]
    },
    {
     "id": "extbeoord",
     "t": "choice",
     "l": "Moeten mensen buiten de lijn ook beoordelen (bijv. collega's in de commissie)?",
     "o": [
      "Ja",
      "Nee"
     ]
    },
    {
     "id": "filters",
     "t": "advies",
     "l": "Filters eerst testen",
     "at": "Zet filters pas aan nadat ze zijn getest met de voorbeeldfunctie. Aanzetten geldt direct voor alle gebruikers.",
     "link": "130428.htm"
    }
   ]
  },
  {
   "id": "s10",
   "title": "Rapportage",
   "short": "Rapportage",
   "intro": "Welke cijfers willen jullie volgen om het wervingsproces te verbeteren?",
   "qs": [
    {
     "id": "kpi",
     "t": "multi",
     "l": "Welke cijfers willen jullie kunnen volgen?",
     "o": [
      "Aantal openstaande vacatures",
      "Doorlooptijd tot aanname (time-to-hire)",
      "Aantal sollicitaties per vacature",
      "Bron van sollicitanten",
      "Conversie per fase",
      "Afwijsredenen",
      "Doorlooptijd goedkeuring"
     ],
     "h": "AFAS levert voor werving en selectie twee standaardrapporten mee. Cijfers als doorlooptijd, bron of conversie per fase vragen een eigen analyse of Power BI.",
     "link": "OverzichtWerving_en_selectie.htm",
     "lt": "Standaard in AFAS"
    },
    {
     "id": "ontvanger",
     "t": "text",
     "l": "Wie krijgt deze cijfers?"
    },
    {
     "id": "frequentie",
     "t": "choice",
     "l": "Hoe vaak?",
     "o": [
      "Maandelijks",
      "Per kwartaal",
      "Op aanvraag"
     ],
     "a": "Maandelijks"
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
    },
    {
     "id": "slot",
     "t": "area",
     "l": "Is er nog iets dat we moeten weten?",
     "opt": true
    }
   ]
  }
 ]
});
