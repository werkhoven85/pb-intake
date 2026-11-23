/* Vragenlijst Talentmanagement (zie SCHEMA.md) */
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
 "id": "talent",
 "order": 4,
 "title": "Talentmanagement",
 "short": "Talent",
 "tagline": "Gesprekken, competenties en ontwikkeling",
 "intro": "Competenties, de gesprekscyclus, beoordelen, feedback en opleidingen. In AFAS bundelt een ontwikkeltraject per medewerker per jaar alle gesprekken en afspraken.",
 "flow": [
  {
   "s": "tm2",
   "t": "Competenties",
   "d": "Rollen en profielen"
  },
  {
   "s": "tm3",
   "t": "Gesprekscyclus",
   "d": "Momenten en ritme"
  },
  {
   "s": "tm4",
   "t": "Gesprekken",
   "d": "Formulieren en workflows"
  },
  {
   "s": "tm6",
   "t": "Beoordelen",
   "d": "HR3P of 9-GRID"
  },
  {
   "s": "tm8",
   "t": "Ontwikkelen",
   "d": "Opleidingen en certificaten"
  }
 ],
 "flowSub": [
  "tm1",
  "tm5",
  "tm7",
  "tm9",
  "tm10"
 ],
 "sections": [
  {
   "id": "tm1",
   "title": "Huidige werkwijze",
   "short": "Huidige werkwijze",
   "intro": "Een beeld van hoe jullie nu met gesprekken en ontwikkeling omgaan, zodat we de inrichting daarop afstemmen.",
   "qs": [
    {
     "id": "huidig",
     "t": "choice",
     "l": "Hoe voeren jullie nu ontwikkel- en beoordelingsgesprekken?",
     "o": [
      "Op papier of in Word",
      "In een ander HR-systeem",
      "Deels al in AFAS",
      "Niet structureel"
     ]
    },
    {
     "id": "systeem",
     "t": "text",
     "l": "Welk systeem of welke formulieren gebruiken jullie nu?",
     "opt": true
    },
    {
     "id": "aantal",
     "t": "number",
     "l": "Voor hoeveel medewerkers geldt de gesprekscyclus?",
     "short": true
    },
    {
     "id": "doelgroepen",
     "t": "area",
     "l": "Verschilt de gesprekscyclus per doelgroep?",
     "h": "Bijvoorbeeld kantoor tegenover zorg, of docenten tegenover ondersteunend personeel."
    },
    {
     "id": "knelpunt",
     "t": "area",
     "l": "Wat loopt er nu niet goed in de gesprekscyclus?",
     "h": "Bijvoorbeeld gesprekken die niet gevoerd worden, verslagen die kwijtraken of afspraken die niet worden opgevolgd."
    }
   ]
  },
  {
   "id": "tm2",
   "title": "Rollen en competenties",
   "short": "Competenties",
   "intro": "AFAS maakt per werkgever en functie automatisch een rol aan. Aan rollen koppel je competenties, die je in gesprekken waardeert.",
   "qs": [
    {
     "id": "functiehuis",
     "t": "choice",
     "l": "Hebben jullie functiebeschrijvingen met competenties?",
     "o": [
      "Ja, voor alle functies",
      "Voor een deel van de functies",
      "Nee"
     ]
    },
    {
     "id": "soort",
     "t": "choice",
     "l": "Met welke competenties willen jullie werken?",
     "o": [
      "Alleen kerncompetenties (voor iedereen)",
      "Kerncompetenties plus per rol aanvullende",
      "Alleen per rol"
     ],
     "link": "134714.htm"
    },
    {
     "id": "aantal",
     "t": "choice",
     "l": "Hoeveel competenties per functie willen jullie gebruiken?",
     "o": [
      "Minder dan 4",
      "4 tot 8",
      "Meer dan 8"
     ],
     "a": "4 tot 8",
     "at": "AFAS adviseert 4 tot 8 competenties per functie. Dan blijft het gesprek over competenties behapbaar.",
     "link": "134714.htm"
    },
    {
     "id": "profiel",
     "t": "choice",
     "l": "Werken jullie met competentieprofielen of met losse competenties per rol?",
     "o": [
      "Competentieprofielen",
      "Losse competenties per rol"
     ],
     "a": "Competentieprofielen",
     "at": "Met een profiel beheer je competenties voor meerdere rollen tegelijk. Dat beperkt het onderhoud.",
     "link": "134715.htm"
    },
    {
     "id": "waardering",
     "t": "advies",
     "l": "Waarderen met 1 tot 5 sterren",
     "at": "Competenties worden gewaardeerd met 1 tot 5 sterren, met per sterniveau een eigen toelichting. Per rol stel je de gewenste waardering in; InSite toont dan behaald tegenover gewenst.",
     "link": "134839.htm"
    },
    {
     "id": "aanvullend",
     "t": "choice",
     "l": "Willen jullie aanvullende rollen gebruiken, zoals BHV'er of vertrouwenspersoon?",
     "h": "Een aanvullende rol heeft een begin- en einddatum en kan eigen competenties hebben.",
     "o": [
      "Ja",
      "Nee"
     ],
     "link": "134839.htm"
    },
    {
     "id": "onderhoud",
     "t": "advies",
     "l": "ESCO als inspiratie en ongebruikte functies blokkeren",
     "at": "Gebruik ESCO als inspiratiebron voor competenties en blokkeer functies die niet meer gebruikt worden. Na wijzigingen draai je 'Bijwerken competenties'.",
     "link": "134714.htm"
    },
    {
     "id": "aanleveren",
     "t": "choice",
     "l": "Hoe komen de competenties in AFAS?",
     "o": [
      "Handmatig aanmaken",
      "Importeren uit een bestand"
     ]
    }
   ]
  },
  {
   "id": "tm3",
   "title": "Gesprekscyclus",
   "short": "Gesprekscyclus",
   "intro": "Gesprekstaken worden automatisch klaargezet op vooraf ingestelde momenten: een vaste maand, de begindatum of de einddatum van een rol.",
   "qs": [
    {
     "id": "jaar",
     "t": "choice",
     "l": "Volgt de cyclus het kalenderjaar of het schooljaar?",
     "o": [
      "Kalenderjaar",
      "Schooljaar",
      "Ander jaar"
     ],
     "link": "134719.htm"
    },
    {
     "id": "cycli",
     "t": "choice",
     "l": "Hoeveel verschillende cycli hebben jullie nodig?",
     "o": [
      "Eén voor iedereen",
      "Twee of meer, per doelgroep"
     ],
     "a": "Eén voor iedereen",
     "at": "Begin met één cyclus. Maak alleen een aparte cyclus voor een groep met echt een ander ritme, bijvoorbeeld docenten.",
     "link": "134719.htm"
    },
    {
     "id": "gesprekken",
     "t": "multi",
     "l": "Welke gesprekken horen bij jullie cyclus?",
     "o": [
      "Nulmeting",
      "Doelstellingsgesprek",
      "Voortgangsgesprek",
      "Beoordelingsgesprek",
      "Exitgesprek"
     ],
     "a": [
      "Nulmeting",
      "Doelstellingsgesprek",
      "Voortgangsgesprek",
      "Beoordelingsgesprek"
     ],
     "at": "Dit zijn de standaard gesprekstypen in AFAS. Een nulmeting geeft nieuwe medewerkers direct een goed startpunt.",
     "link": "134721.htm"
    },
    {
     "id": "schema",
     "t": "advies",
     "l": "Voorbeeldschema van AFAS als basis",
     "at": "Doelstellingsgesprek in januari, voortgangsgesprekken in mei en september, beoordelingsgesprek in december. De maanden schuif je naar jullie eigen ritme.",
     "link": "134721.htm"
    },
    {
     "id": "maanden",
     "t": "area",
     "l": "In welke maanden willen jullie de gesprekken voeren?",
     "opt": true
    },
    {
     "id": "voortgang",
     "t": "choice",
     "l": "Hoe vaak is er een voortgangsgesprek?",
     "o": [
      "Eén keer per jaar",
      "Twee keer per jaar",
      "Vaker"
     ]
    },
    {
     "id": "zelfstart",
     "t": "choice",
     "l": "Mag de medewerker zelf een extra voortgangsgesprek starten?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Een medewerker die zelf een gesprek kan aanvragen, neemt eigenaarschap over de eigen ontwikkeling.",
     "link": "134842.htm"
    },
    {
     "id": "nulexit",
     "t": "choice",
     "l": "Hoe plannen jullie de nulmeting en het exitgesprek?",
     "h": "Kiezen jullie ook de vragenlijst Onboarding, dan stemmen we dit daarop af.",
     "o": [
      "Via een gespreksmoment op begin- of einddatum rol",
      "Via het in- en uitdiensttredingsdraaiboek",
      "Geen nulmeting of exitgesprek"
     ],
     "a": "Via een gespreksmoment op begin- of einddatum rol",
     "at": "Met een moment op de begindatum van de rol (bijvoorbeeld 7 dagen erna) en de einddatum (bijvoorbeeld 14 dagen ervoor) zet AFAS het gesprek automatisch klaar.",
     "link": "134721.htm"
    },
    {
     "id": "automatisch",
     "t": "advies",
     "l": "Gespreksmomenten automatisch laten aanmaken",
     "at": "De dagelijkse geplande taak 'Gespreksmoment genereren' zet de gesprekken op tijd klaar en waarschuwt bij openstaande gesprekken. Het volgende werkjaar komt er twee maanden voor het einde automatisch bij.",
     "link": "134842.htm"
    }
   ]
  },
  {
   "id": "tm4",
   "title": "Gesprekken en workflows",
   "short": "Gesprekken",
   "intro": "Elk gesprekstype heeft in AFAS een eigen dossieritem, profiel en standaardworkflow. Er zijn varianten met digitaal ondertekenen, een feedbackronde of een AI-samenvatting.",
   "qs": [
    {
     "id": "workflow",
     "t": "advies",
     "l": "Standaardworkflows als basis",
     "at": "Kopieer de standaardworkflow per gesprekstype en koppel die aan het profiel, in plaats van een eigen workflow op te bouwen.",
     "link": "135836.htm"
    },
    {
     "id": "variant",
     "t": "choice",
     "l": "Welke vorm van het beoordelingstraject past bij jullie?",
     "o": [
      "Standaard beoordelingstraject",
      "Met digitale ondertekening",
      "Met feedbackronde"
     ],
     "link": "135836.htm"
    },
    {
     "id": "ondertekenen",
     "t": "choice",
     "l": "Moet het verslag van het beoordelingsgesprek digitaal ondertekend worden?",
     "o": [
      "Ja",
      "Nee"
     ]
    },
    {
     "id": "voorbereiding",
     "t": "choice",
     "l": "Wie bereidt het gesprek voor in AFAS?",
     "o": [
      "Medewerker en leidinggevende allebei",
      "Alleen de leidinggevende",
      "Alleen de medewerker"
     ]
    },
    {
     "id": "extravragen",
     "t": "area",
     "l": "Welke eigen vragen willen jullie aan de gespreksformulieren toevoegen?",
     "h": "Bijvoorbeeld werkplezier, werkdruk of loopbaanwensen. Die leggen we vast als vrije velden.",
     "opt": true,
     "link": "135836.htm"
    },
    {
     "id": "pocket",
     "t": "advies",
     "l": "Gesprekken ook in AFAS Pocket",
     "at": "Gespreksformulieren kunnen zonder extra inrichting in AFAS Pocket worden ingevuld, beoordeeld en doorgestuurd.",
     "link": "OverzichtTalentmanagement.htm"
    },
    {
     "id": "ai",
     "t": "choice",
     "l": "Hebben jullie interesse in een AI-samenvatting van voortgangsgesprekken?",
     "h": "AFAS kan met AI (Jonas) een samenvatting maken van een audio-opname van het gesprek.",
     "o": [
      "Ja, graag meer informatie",
      "Nee",
      "Weet nog niet"
     ],
     "opt": true,
     "link": "135836.htm",
     "lt": "Over de AI-variant"
    }
   ]
  },
  {
   "id": "tm5",
   "title": "Ontwikkelafspraken",
   "short": "Afspraken",
   "intro": "Ontwikkelafspraken hangen aan een rol en lopen door naar het volgende jaar. Ze ontstaan in een gesprek.",
   "qs": [
    {
     "id": "ingesprek",
     "t": "advies",
     "l": "Afspraken vastleggen in het gesprek",
     "at": "Leg ontwikkelafspraken vast tijdens het gesprek. Ze lopen door naar het volgende jaar, zodat de rode draad zichtbaar blijft.",
     "link": "135930.htm"
    },
    {
     "id": "soort",
     "t": "area",
     "l": "Wat voor afspraken maken jullie meestal?",
     "h": "Bijvoorbeeld persoonlijke doelen, teamdoelen of opleidingswensen.",
     "opt": true
    },
    {
     "id": "percentage",
     "t": "choice",
     "l": "Willen jullie bij afspraken ook een percentage voortgang bijhouden?",
     "h": "Een afspraak heeft de status Behaald, Niet behaald, Onderhanden of Vervallen; een percentage (0 tot 100%) is optioneel.",
     "o": [
      "Ja",
      "Nee"
     ],
     "link": "135930.htm"
    },
    {
     "id": "acties",
     "t": "choice",
     "l": "Mogen medewerkers zelf ontwikkelacties vastleggen in Mijn InSite?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Een medewerker die zelf de acties bijhoudt, is eigenaar van de eigen ontwikkeling en komt voorbereid naar het gesprek.",
     "link": "135930.htm"
    }
   ]
  },
  {
   "id": "tm6",
   "title": "Beoordelen",
   "short": "Beoordelen",
   "intro": "Na het beoordelingsgesprek bepaalt AFAS automatisch een talentprofiel volgens HR3P of het 9-GRID.",
   "qs": [
    {
     "id": "eind",
     "t": "choice",
     "l": "Sluiten jullie het jaar af met een beoordeling?",
     "o": [
      "Ja, met een eindbeoordeling",
      "Nee, alleen ontwikkelgesprekken"
     ]
    },
    {
     "id": "model",
     "t": "choice",
     "l": "Welk model past bij jullie?",
     "h": "Er kan maar één model tegelijk actief zijn.",
     "o": [
      "HR3P (5 profielen)",
      "9-GRID (3 x 3)",
      "Geen van beide"
     ],
     "link": "135962.htm"
    },
    {
     "id": "namen",
     "t": "choice",
     "l": "Willen jullie eigen namen voor de profielen?",
     "h": "De namen zijn aan te passen; extra profielen toevoegen kan niet.",
     "o": [
      "Standaardnamen",
      "Eigen namen"
     ],
     "link": "135962.htm"
    },
    {
     "id": "automatisch",
     "t": "advies",
     "l": "Profiel automatisch laten bepalen",
     "at": "Laat AFAS het profiel na het beoordelingsgesprek automatisch bepalen. In het dashboard vergelijk je de profielen over meerdere jaren.",
     "link": "135962.htm"
    },
    {
     "id": "schaal",
     "t": "area",
     "l": "Hoe ziet jullie huidige beoordelingsschaal eruit?",
     "opt": true
    }
   ]
  },
  {
   "id": "tm7",
   "title": "360-gradenfeedback",
   "short": "Feedback",
   "intro": "Met een feedbackronde verzamel je feedback van collega's op de competenties uit het ontwikkeltraject.",
   "qs": [
    {
     "id": "gebruik",
     "t": "choice",
     "l": "Willen jullie feedback van collega's verzamelen (360-gradenfeedback)?",
     "o": [
      "Ja",
      "Nee",
      "Later"
     ],
     "link": "134723.htm"
    },
    {
     "id": "starter",
     "t": "multi",
     "l": "Wie mag een feedbackronde starten?",
     "o": [
      "Medewerker",
      "Leidinggevende"
     ],
     "a": [
      "Medewerker",
      "Leidinggevende"
     ],
     "at": "Laat beiden starten: de medewerker kiest de feedbackgevers, de leidinggevende beoordeelt en vult aan.",
     "link": "134723.htm"
    },
    {
     "id": "gevers",
     "t": "multi",
     "l": "Wie geven standaard feedback?",
     "o": [
      "De medewerker zelf",
      "De hoofdleidinggevende",
      "Collega's die de medewerker kiest"
     ]
    },
    {
     "id": "weigeren",
     "t": "choice",
     "l": "Mag een feedbackgever het verzoek weigeren?",
     "h": "Hiervoor is er een workflowvariant 'incl. weigeren'.",
     "o": [
      "Ja",
      "Nee"
     ],
     "link": "134723.htm"
    },
    {
     "id": "extra",
     "t": "area",
     "l": "Welke vragen willen jullie naast de competenties stellen?",
     "opt": true,
     "link": "134723.htm"
    },
    {
     "id": "meenemen",
     "t": "advies",
     "l": "Feedback meenemen in het beoordelingsgesprek",
     "at": "De competenties uit het traject komen automatisch in het feedbackverzoek. Neem de uitkomst mee in het beoordelingsgesprek.",
     "link": "134723.htm"
    }
   ]
  },
  {
   "id": "tm8",
   "title": "Opleidingen en certificaten",
   "short": "Opleidingen",
   "intro": "Per medewerker leg je opleidingen, cursussen en behaalde certificaten met een geldigheidsduur vast. Aanvragen kunnen via een workflow in InSite.",
   "qs": [
    {
     "id": "vastleggen",
     "t": "choice",
     "l": "Leggen jullie opleidingen en cursussen per medewerker vast in AFAS?",
     "o": [
      "Ja",
      "Nee, in een ander systeem",
      "Willen we gaan doen"
     ],
     "link": "Hrm_Employ_Train.htm"
    },
    {
     "id": "catalogus",
     "t": "choice",
     "l": "Werken jullie met een vaste lijst opleidingen en cursussen?",
     "o": [
      "Ja",
      "Nee"
     ],
     "link": "Hrm_Config_Employ_Train.htm"
    },
    {
     "id": "aanvraag",
     "t": "choice",
     "l": "Lopen opleidingsaanvragen via een goedkeuringsworkflow?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Met de workflow 'Aanvraag opleiding' gaat een aanvraag langs de leidinggevende en de personeelsadministratie, en staat alles bij de medewerker.",
     "link": "100453.htm"
    },
    {
     "id": "goedkeurders",
     "t": "text",
     "l": "Wie keurt opleidingsaanvragen goed?"
    },
    {
     "id": "cursusbeheer",
     "t": "choice",
     "l": "Organiseren jullie zelf cursussen met inschrijvingen?",
     "h": "Daarvoor is er Cursusmanagement in AFAS.",
     "o": [
      "Ja",
      "Nee",
      "Weet nog niet"
     ],
     "link": "Hrm_Employ_Train.htm"
    },
    {
     "id": "kosten",
     "t": "choice",
     "l": "Willen jullie opleidingskosten registreren?",
     "h": "Kosten leg je vast als registratie, zonder koppeling met het salaris.",
     "o": [
      "Ja",
      "Nee"
     ]
    },
    {
     "id": "certificaten",
     "t": "area",
     "l": "Hoe bewaken jullie nu verlopende certificaten, diploma's en registraties?",
     "h": "Bijvoorbeeld BIG-registratie, VCA of BHV."
    },
    {
     "id": "import",
     "t": "choice",
     "l": "Willen jullie bestaande opleidingsgegevens importeren?",
     "o": [
      "Ja",
      "Nee"
     ],
     "opt": true
    }
   ]
  },
  {
   "id": "tm9",
   "title": "Medewerkertevredenheid",
   "short": "Tevredenheid",
   "intro": "Met de enquêtemodule laat je medewerkers via InSite vragenlijsten invullen. Een vragenlijst zoals een tevredenheidsonderzoek kun je ook als vrij dossieritem aan een gespreksmoment koppelen.",
   "qs": [
    {
     "id": "mto",
     "t": "choice",
     "l": "Meten jullie medewerkertevredenheid?",
     "o": [
      "Ja, via een extern bureau",
      "Ja, zelf",
      "Nee"
     ]
    },
    {
     "id": "insite",
     "t": "choice",
     "l": "Willen jullie enquêtes via InSite laten invullen?",
     "o": [
      "Ja",
      "Nee",
      "Weet nog niet"
     ],
     "link": "Ins_Config_Survey.htm"
    },
    {
     "id": "onderwerpen",
     "t": "area",
     "l": "Welke onderwerpen willen jullie meten?",
     "opt": true
    }
   ]
  },
  {
   "id": "tm10",
   "title": "Rapportage",
   "short": "Rapportage",
   "intro": "Welke informatie willen jullie volgen om de ontwikkeling van medewerkers te sturen?",
   "qs": [
    {
     "id": "kpi",
     "t": "multi",
     "l": "Welke informatie willen jullie volgen?",
     "o": [
      "Voortgang van de gesprekscyclus (gevoerd en open)",
      "Verdeling over de talentprofielen",
      "Ontwikkeling over meerdere jaren",
      "Gevolgde opleidingen"
     ]
    },
    {
     "id": "dashboard",
     "t": "advies",
     "l": "Dashboard voor talentprofielen",
     "at": "Voor HR3P en 9-GRID is er een gegevensverzameling en een BI-dashboard, ook om over jaren te vergelijken.",
     "link": "135962.htm"
    },
    {
     "id": "ontvanger",
     "t": "text",
     "l": "Wie krijgt deze informatie?"
    },
    {
     "id": "frequentie",
     "t": "choice",
     "l": "Hoe vaak?",
     "o": [
      "Maandelijks",
      "Per kwartaal",
      "Per jaar"
     ]
    },
    {
     "id": "slot",
     "t": "area",
     "l": "Is er nog iets dat je Mentor moet weten over talentmanagement?",
     "opt": true
    }
   ]
  }
 ]
});
