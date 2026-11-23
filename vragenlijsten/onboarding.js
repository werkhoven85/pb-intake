/* Vragenlijst Onboarding en contractering (zie SCHEMA.md) */
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
 "id": "onboarding",
 "order": 3,
 "title": "Onboarding en contractering",
 "short": "Onboarding",
 "tagline": "Contractvoorstel, AOK, draaiboek en eerste werkdag",
 "intro": "Van gekozen kandidaat tot geregistreerde medewerker: contractvoorstel, arbeidsovereenkomst digitaal tekenen, gegevens laten aanleveren en collega's laten voorbereiden.",
 "flow": [
  {
   "s": "ob2",
   "t": "Starten",
   "d": "Vanuit sollicitatie of blanco"
  },
  {
   "s": "ob4",
   "t": "Contractvoorstel",
   "d": "Akkoord kandidaat"
  },
  {
   "s": "ob5",
   "t": "Gegevens aanleveren",
   "d": "Draaiboek kandidaat"
  },
  {
   "s": "ob7",
   "t": "Arbeidsovereenkomst",
   "d": "Document genereren"
  },
  {
   "s": "ob8",
   "t": "Ondertekenen",
   "d": "Digitaal via Pocket"
  },
  {
   "s": "ob11",
   "t": "Registreren",
   "d": "Medewerker in Payroll"
  }
 ],
 "flowSub": [
  "ob1",
  "ob3",
  "ob6",
  "ob9",
  "ob10"
 ],
 "sections": [
  {
   "id": "ob1",
   "title": "Welke processen vallen eronder",
   "short": "Processen",
   "intro": "Met onboarden in AFAS regel je indiensttreding, herindiensttreding en een nevendienstverband in één workflow. AFAS ondersteunt alleen aansluitende contracten; contractverlenging en functiewijziging lopen via andere workflows.",
   "qs": [
    {
     "id": "proc",
     "t": "multi",
     "l": "Welke situaties willen jullie via onboarden laten lopen?",
     "o": [
      "Nieuwe medewerker (indienst)",
      "Oud-medewerker die terugkomt (herindienst)",
      "Extra dienstverband naast het huidige (nevendienstverband)",
      "Opvolgend dienstverband (dezelfde medewerker uit en direct weer in dienst)"
     ],
     "a": [
      "Nieuwe medewerker (indienst)",
      "Oud-medewerker die terugkomt (herindienst)"
     ],
     "at": "Begin met de situaties die het vaakst voorkomen. Nevendienstverbanden en opvolgende dienstverbanden vragen extra aandacht; onboarden ondersteunt alleen aansluitende contracten.",
     "link": "130526.htm"
    },
    {
     "id": "aantal",
     "t": "choice",
     "l": "Hoeveel nieuwe medewerkers komen er gemiddeld per jaar in dienst?",
     "o": [
      "Minder dan 25",
      "25 tot 100",
      "100 tot 250",
      "Meer dan 250"
     ]
    },
    {
     "id": "aansluit",
     "t": "advies",
     "l": "Alleen aansluitende contracten",
     "at": "Onboarden werkt alleen voor aansluitende contracten. Contractverlengingen en contract- of functiewijzigingen regel je met de daarvoor bedoelde workflows, niet via onboarden.",
     "link": "135425.htm"
    },
    {
     "id": "huidig",
     "t": "area",
     "l": "Hoe verloopt een indiensttreding nu, van 'ja' tegen de kandidaat tot de eerste werkdag?",
     "h": "Bijvoorbeeld: wie maakt het contract, hoe wordt getekend, wie zet de medewerker in AFAS."
    }
   ]
  },
  {
   "id": "ob2",
   "title": "Starten van de onboarding",
   "short": "Starten",
   "intro": "Je start onboarden blanco vanuit het leidinggevende portaal, vanaf de sollicitant of medewerker stamkaart, of direct vanuit de sollicitatie.",
   "qs": [
    {
     "id": "wie",
     "t": "multi",
     "l": "Wie start de onboarding?",
     "o": [
      "Recruiter",
      "HR / personeelszaken",
      "Leidinggevende"
     ],
     "a": [
      "Recruiter",
      "HR / personeelszaken"
     ],
     "at": "Laat de partij die het contact met de kandidaat heeft de onboarding starten. Dan zijn de gegevens vanaf het begin juist.",
     "link": "135040.htm"
    },
    {
     "id": "vanuit",
     "t": "choice",
     "l": "Waarvandaan start de onboarding meestal?",
     "o": [
      "Vanuit de sollicitatie (Werving & Selectie in AFAS)",
      "Blanco vanuit het leidinggevende portaal",
      "Vanaf de stamkaart van sollicitant of medewerker"
     ],
     "a": "Vanuit de sollicitatie (Werving & Selectie in AFAS)",
     "at": "Start vanuit de sollicitatie als jullie Werving & Selectie in AFAS gebruiken. Alle gegevens van de kandidaat gaan dan mee en niemand hoeft ze opnieuw in te voeren. Bij de sollicitatiestatus moet 'Onboarden vanuit sollicitatie' aanstaan.",
     "link": "135040.htm"
    },
    {
     "id": "mwcode",
     "t": "choice",
     "l": "Willen jullie zelf het medewerkernummer kunnen bepalen?",
     "h": "Een afwijkende medewerkercode kan alleen bij blanco starten of vanaf de sollicitant stamkaart.",
     "o": [
      "Nee, AFAS nummert automatisch",
      "Ja, we gebruiken een eigen nummering"
     ],
     "a": "Nee, AFAS nummert automatisch",
     "at": "Automatisch nummeren voorkomt dubbele of verkeerde nummers.",
     "link": "130493.htm"
    }
   ]
  },
  {
   "id": "ob3",
   "title": "Onboardingprofielen",
   "short": "Profielen",
   "intro": "Een onboardingprofiel bepaalt welke workflow, welk draaiboek en welke toegang een nieuwe medewerker krijgt. AFAS levert standaardprofielen mee die je als basis gebruikt.",
   "qs": [
    {
     "id": "aantal",
     "t": "choice",
     "l": "Hoeveel onboardingprofielen verwachten jullie nodig te hebben?",
     "o": [
      "Eén voor iedereen",
      "Per werkgever",
      "Per doelgroep of cao",
      "Weet ik nog niet"
     ],
     "a": "Eén voor iedereen",
     "at": "Begin met één profiel en voeg alleen profielen toe als de stappen echt verschillen, bijvoorbeeld een andere workflow of ander draaiboek.",
     "link": "135008.htm"
    },
    {
     "id": "doelgr",
     "t": "area",
     "l": "Welke doelgroepen hebben een duidelijk andere indiensttreding?",
     "h": "Bijvoorbeeld stagiairs, oproepkrachten, BBL-leerlingen of medewerkers bij een andere werkgever.",
     "opt": true
    },
    {
     "id": "match",
     "t": "choice",
     "l": "Moet AFAS controleren of iemand al bekend is (matchen op overeenkomstige personen)?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Matchen voorkomt dat dezelfde persoon twee keer in AFAS komt, bijvoorbeeld bij een oud-medewerker of eerdere sollicitant.",
     "link": "138614.htm"
    },
    {
     "id": "privacy",
     "t": "choice",
     "l": "Mag degene die de onboarding start privacygevoelige gegevens zien (zoals BSN en geboortedatum) als die geen rechten heeft op de medewerker?",
     "o": [
      "Nee, verbergen",
      "Ja, tonen"
     ],
     "a": "Nee, verbergen",
     "at": "Toon privacygevoelige gegevens alleen aan wie ze nodig heeft. Let op: bij verbergen kan de instuurder deze velden niet corrigeren, tenzij je een stap ‘Controleren door instuurder’ toevoegt.",
     "link": "138614.htm"
    },
    {
     "id": "rechten",
     "t": "text",
     "l": "Wie mag welke profielen gebruiken (bijvoorbeeld alleen HR, of ook leidinggevenden)?"
    }
   ]
  },
  {
   "id": "ob4",
   "title": "Contractvoorstel en workflow",
   "short": "Contractvoorstel",
   "intro": "AFAS heeft vier varianten van de onboardingworkflow: standaard, met contractvoorstel, zonder digitaal ondertekenen en zonder draaiboektaken. Met een contractvoorstel keurt de kandidaat eerst de arbeidsvoorwaarden goed in de portal, voordat de arbeidsovereenkomst wordt gemaakt.",
   "qs": [
    {
     "id": "variant",
     "t": "choice",
     "l": "Welke workflow past het best bij jullie?",
     "o": [
      "Onboarden met contractvoorstel",
      "Onboarden (standaard)",
      "Onboarden zonder digitaal ondertekenen",
      "Onboarden zonder draaiboektaken"
     ],
     "a": "Onboarden met contractvoorstel",
     "at": "Met een contractvoorstel weet je zeker dat de kandidaat akkoord is met de arbeidsvoorwaarden voordat de arbeidsovereenkomst wordt gemaakt. Dat voorkomt het opnieuw opstellen en tekenen van het contract.",
     "link": "131095.htm"
    },
    {
     "id": "beoord",
     "t": "multi",
     "l": "Wie beoordeelt de onboarding voordat het voorstel naar de kandidaat gaat?",
     "o": [
      "De indiener zelf",
      "HR / personeelszaken",
      "Leidinggevende",
      "Salarisadministratie"
     ],
     "a": [
      "HR / personeelszaken"
     ],
     "at": "Eén vaste beoordelaar houdt de doorlooptijd kort. Afkeuren kan bij elke beoordelingsstap, met een verplichte onderbouwing.",
     "link": "131095.htm"
    },
    {
     "id": "nietakk",
     "t": "advies",
     "l": "Kandidaat niet akkoord: terug naar de beoordelaar",
     "at": "Kiest de kandidaat 'Niet akkoord' op het contractvoorstel, dan gaat de taak terug naar de beoordelaar. Die past het voorstel aan of overlegt eerst met de kandidaat.",
     "link": "131095.htm"
    },
    {
     "id": "voorsteldoc",
     "t": "choice",
     "l": "Willen jullie het standaard document 'Contractvoorstel' gebruiken?",
     "o": [
      "Ja, met onze eigen huisstijl en teksten",
      "Ja, ongewijzigd",
      "Nee, we sturen het voorstel op een andere manier"
     ],
     "a": "Ja, met onze eigen huisstijl en teksten",
     "at": "Het voorstel gaat als pdf naar de kandidaat, samen met de mail voor portaltoegang.",
     "link": "131095.htm"
    },
    {
     "id": "status",
     "t": "advies",
     "l": "Voortgang volgen via de statussen",
     "at": "Volg de voortgang via de statussen van de onboarding: ingestuurd, in behandeling, ter ondertekening, ondertekend en geregistreerd. Zo zie je in één oogopslag waar elke nieuwe medewerker staat.",
     "link": "130493.htm"
    }
   ]
  },
  {
   "id": "ob5",
   "title": "Draaiboek voor de nieuwe medewerker",
   "short": "Draaiboek kandidaat",
   "intro": "Via het draaiboek levert de kandidaat zelf gegevens en documenten aan in de portal. Elke taak is één gegeven of document. Ontbreekt er na 5 dagen nog iets, dan krijgt de kandidaat automatisch een herinnering.",
   "qs": [
    {
     "id": "gegevens",
     "t": "multi",
     "l": "Welke gegevens en documenten moet iedere nieuwe medewerker aanleveren?",
     "o": [
      "Aanvullende persoonsgegevens (BSN, adres, bank)",
      "Kopie identiteitsbewijs",
      "VOG",
      "Diploma's en opleidingen",
      "Familie- en noodcontactgegevens",
      "Pasfoto",
      "Opgaaf loonheffingen"
     ],
     "a": [
      "Aanvullende persoonsgegevens (BSN, adres, bank)",
      "Kopie identiteitsbewijs",
      "Familie- en noodcontactgegevens",
      "Opgaaf loonheffingen"
     ],
     "at": "Vraag in het algemene draaiboek alleen wat je van iedereen nodig hebt. Functiespecifieke gegevens vraag je via een apart draaiboek per functie.",
     "link": "139648.htm"
    },
    {
     "id": "perfunctie",
     "t": "area",
     "l": "Welke gegevens zijn alleen voor bepaalde functies nodig?",
     "h": "Bijvoorbeeld BIG-registratie, rijbewijs, VOG voor zorgfuncties. Dit wordt het draaiboek 'vanuit functie'."
    },
    {
     "id": "verplicht",
     "t": "advies",
     "l": "Verplichte taken eerst afronden",
     "at": "Markeer taken die echt nodig zijn als verplicht ('Vervolgtaak moet geaccordeerd zijn voor onboarden'). De onboarding gaat dan pas verder als die gegevens binnen zijn.",
     "link": "141164.htm"
    },
    {
     "id": "accordeer",
     "t": "text",
     "l": "Wie controleert en accordeert de aangeleverde gegevens en documenten?"
    },
    {
     "id": "herinner",
     "t": "advies",
     "l": "Automatische herinnering na 5 dagen",
     "at": "Ontbreken er na 5 dagen nog gegevens of documenten, dan stuurt AFAS de kandidaat een herinnering. Pas de tekst van die herinnering aan jullie toon aan.",
     "link": "130493.htm"
    },
    {
     "id": "vrij",
     "t": "area",
     "l": "Welke extra gegevens (vrije velden) moeten van de kandidaat mee naar de medewerker?",
     "h": "Bijvoorbeeld kledingmaat, voorkeur werktijden of talen.",
     "opt": true
    }
   ]
  },
  {
   "id": "ob6",
   "title": "Draaiboek voor collega's",
   "short": "Draaiboek collega's",
   "intro": "Met het draaiboek in- en uitdienst krijgen collega's automatisch taken om de nieuwe medewerker voor te bereiden, zoals een laptop of toegangspas. Elke taak gaat naar een gebruikersgroep en heeft een timing in dagen voor of na de eerste werkdag.",
   "qs": [
    {
     "id": "taken",
     "t": "multi",
     "l": "Welke voorbereidingen moeten collega's voor de eerste werkdag regelen?",
     "o": [
      "Account en e-mail (IT)",
      "Laptop / telefoon",
      "Toegangspas of sleutel",
      "Werkplek",
      "Welkomstpakket",
      "Inwerkplan / buddy"
     ],
     "at": "Leg elke voorbereiding vast als taak in het draaiboek. Dan wordt niets vergeten en zie je wie wat nog moet doen.",
     "link": "App_Script_Empl_Config.htm"
    },
    {
     "id": "groepen",
     "t": "area",
     "l": "Welke afdelingen of teams krijgen die taken?",
     "h": "Bijvoorbeeld ICT, facilitair, de leidinggevende. In AFAS wordt elke taak gekoppeld aan een gebruikersgroep."
    },
    {
     "id": "timing",
     "t": "choice",
     "l": "Hoe ver vóór de eerste werkdag moeten de taken klaarstaan?",
     "o": [
      "1 week",
      "2 weken",
      "Verschilt per taak"
     ],
     "a": "Verschilt per taak",
     "at": "Stel per taak de timing in dagen voor of na de eerste werkdag in. Een laptop bestel je eerder dan een welkomstpakket.",
     "link": "App_Script_Empl_Config.htm"
    },
    {
     "id": "datum",
     "t": "advies",
     "l": "Datum in dienst gewijzigd? Taken controleren",
     "at": "Draaiboektaken worden klaargezet bij het registreren en schuiven niet mee als de datum in dienst later verandert. Spreek af wie de taken dan controleert.",
     "link": "App_Script_Empl_Config.htm"
    },
    {
     "id": "buddy",
     "t": "choice",
     "l": "Krijgt een buddy ook taken in het draaiboek?",
     "h": "Dat kan alleen als de buddy vooraf is vastgelegd.",
     "o": [
      "Ja",
      "Nee"
     ]
    },
    {
     "id": "herindienst",
     "t": "choice",
     "l": "Is er een apart, korter draaiboek nodig voor medewerkers die terugkomen?",
     "o": [
      "Ja",
      "Nee, hetzelfde draaiboek"
     ],
     "a": "Ja",
     "at": "Per profiel koppel je aparte draaiboeken voor nieuwe medewerkers en voor herindienst. Een terugkerende medewerker hoeft niet alles opnieuw aan te leveren.",
     "link": "App_Script_Empl_Config.htm"
    },
    {
     "id": "gesprekken",
     "t": "choice",
     "l": "Willen jullie kennismakings- en exitgesprekken in AFAS vastleggen?",
     "h": "Dit behandelen we in de vragenlijst Talentmanagement. In het draaiboek nemen we alleen de praktische voorbereidingen op.",
     "o": [
      "Ja",
      "Nee",
      "Weet nog niet"
     ]
    }
   ]
  },
  {
   "id": "ob7",
   "title": "Arbeidsovereenkomst en documenten",
   "short": "Arbeidsovereenkomst",
   "intro": "AFAS genereert de arbeidsovereenkomst als bijlage in de workflow. Je controleert en vult het document aan, waarna het als pdf klaarstaat om te tekenen. AFAS levert ook sjablonen mee voor onder meer een geheimhoudingsverklaring en de opgaaf loonheffingen.",
   "qs": [
    {
     "id": "varianten",
     "t": "multi",
     "l": "Welke soorten arbeidsovereenkomsten gebruiken jullie?",
     "o": [
      "Bepaalde tijd",
      "Onbepaalde tijd",
      "Oproep / nul-uren",
      "BBL-leerling",
      "Stage-overeenkomst",
      "Per werkgever een eigen versie"
     ]
    },
    {
     "id": "aantal",
     "t": "number",
     "l": "Hoeveel verschillende contractteksten (sjablonen) hebben jullie nu ongeveer?",
     "short": true
    },
    {
     "id": "standaard",
     "t": "advies",
     "l": "Uitgaan van het standaardsjabloon",
     "at": "Gebruik het meegeleverde sjabloon 'Arbeidsovereenkomst indienst workflow mutatie' als basis en zet jullie eigen tekst erin. Dat is sneller en beter te onderhouden dan een sjabloon vanaf nul.",
     "link": "OverzichtOnboarden.htm"
    },
    {
     "id": "extra",
     "t": "multi",
     "l": "Welke extra documenten moeten mee in de onboarding?",
     "o": [
      "Geheimhoudingsverklaring",
      "Opgaaf loonheffingen",
      "Ambtseed / belofte",
      "Gedragscode of reglement",
      "Geen"
     ],
     "link": "OverzichtOnboarden.htm"
    },
    {
     "id": "huidige",
     "t": "upload",
     "l": "Stuur jullie huidige contracten en standaardbrieven mee",
     "opt": true
    },
    {
     "id": "extensie",
     "t": "advies",
     "l": "Bestandstypen docx en pdf toestaan",
     "at": "Zorg dat .docx en .pdf als bestandstypen zijn toegestaan en geef eigen bijlagen een andere naam dan het gegenereerde document. Anders kan AFAS het document niet aanmaken.",
     "link": "129301.htm"
    }
   ]
  },
  {
   "id": "ob8",
   "title": "Digitaal ondertekenen",
   "short": "Ondertekenen",
   "intro": "Met de AFAS Signing Service tekenen leidinggevende en kandidaat de arbeidsovereenkomst digitaal in InSite of Pocket, met een sms-code. Eerst tekent de tekenbevoegde, daarna de kandidaat. Pas na ondertekening wordt de medewerker geregistreerd.",
   "qs": [
    {
     "id": "digitaal",
     "t": "choice",
     "l": "Willen jullie de arbeidsovereenkomst digitaal laten ondertekenen in AFAS?",
     "o": [
      "Ja, via AFAS (InSite en Pocket)",
      "Nee, we tekenen op papier",
      "Weet ik nog niet"
     ],
     "a": "Ja, via AFAS (InSite en Pocket)",
     "at": "Digitaal tekenen in AFAS scheelt printen, scannen en nasturen. Het getekende document wordt verzegeld en elke handtekening wordt vastgelegd.",
     "link": "Crm_SignSr.htm"
    },
    {
     "id": "tekenaar",
     "t": "text",
     "l": "Wie tekent namens de werkgever (functie)?"
    },
    {
     "id": "meer",
     "t": "choice",
     "l": "Moeten er meer dan twee partijen tekenen?",
     "h": "Bijvoorbeeld leidinggevende, directeur en kandidaat.",
     "o": [
      "Nee, één tekenbevoegde en de kandidaat",
      "Ja"
     ],
     "a": "Nee, één tekenbevoegde en de kandidaat",
     "at": "Twee tekenaars is gebruikelijk. Meer tekenaars is mogelijk; je stelt dit in bij de ondertekenstap van de workflow. Houd er rekening mee dat tekenen door meerdere gebruikers langer kan duren.",
     "link": "Crm_SignSr_Config.htm"
    },
    {
     "id": "mobiel",
     "t": "advies",
     "l": "Mobiele nummers op orde",
     "at": "De sms-code gaat naar het eerste bruikbare nummer van de tekenaar: mobiel werk, mobiel privé, vast werk of vast privé. Zorg dat bij tekenbevoegden en kandidaten een mobiel nummer is vastgelegd.",
     "link": "Crm_SignSr_Config.htm"
    },
    {
     "id": "verklaring",
     "t": "advies",
     "l": "Juridische verklaring van AFAS lezen",
     "at": "Laat de juridische verklaring over de Signing Service in de AFAS Klantportal lezen door degene die over contracten gaat, voordat jullie digitaal gaan tekenen.",
     "link": "Crm_SignSr.htm"
    },
    {
     "id": "weiger",
     "t": "text",
     "l": "Wie wordt ingeschakeld als een kandidaat weigert te tekenen?",
     "h": "In de standaardworkflow gaat de taak dan naar personeelszaken."
    }
   ]
  },
  {
   "id": "ob9",
   "title": "ID-check en werkvergunning (Valicare)",
   "short": "ID-check",
   "intro": "Via Valicare controleert AFAS het identiteitsbewijs van de kandidaat. Per omgeving zijn 100 ID-checks per jaar gratis. Een controle op werkvergunning (right-to-work) valt buiten die gratis checks.",
   "qs": [
    {
     "id": "id",
     "t": "choice",
     "l": "Willen jullie het identiteitsbewijs digitaal laten controleren?",
     "o": [
      "Ja",
      "Nee",
      "Graag meer informatie"
     ],
     "link": "140314.htm"
    },
    {
     "id": "rtw",
     "t": "choice",
     "l": "Moet ook gecontroleerd worden of iemand in Nederland mag werken (right-to-work-check)?",
     "o": [
      "Ja",
      "Nee",
      "Alleen bij kandidaten van buiten de EU"
     ],
     "link": "140319.htm"
    },
    {
     "id": "volume",
     "t": "advies",
     "l": "Let op het aantal gratis checks",
     "at": "Per omgeving zijn 100 ID-checks per jaar gratis; daarna wordt de koppeling geblokkeerd. Houd rekening met jullie aantal indiensttredingen.",
     "link": "140314.htm"
    },
    {
     "id": "fg",
     "t": "choice",
     "l": "Heeft jullie functionaris gegevensbescherming (FG) of privacy officer de ID-check al beoordeeld?",
     "h": "Jullie moeten zelf toetsen of er een privacygrondslag is voor het controleren van identiteitsbewijzen.",
     "o": [
      "Ja, akkoord",
      "Nog niet",
      "We hebben geen FG"
     ],
     "link": "140319.htm"
    }
   ]
  },
  {
   "id": "ob10",
   "title": "Toegang en accounts",
   "short": "Toegang",
   "intro": "De kandidaat krijgt tijdens de onboarding toegang tot een portal (OutSite) en/of AFAS Pocket. Op de eerste werkdag kan AFAS automatisch een uitnodiging voor Pocket als medewerker sturen en een gebruikersnaam (UPN) aanmaken.",
   "qs": [
    {
     "id": "kanaal",
     "t": "choice",
     "l": "Waar levert de kandidaat zijn gegevens aan?",
     "o": [
      "AFAS Pocket",
      "OutSite (werken-bij-portal)",
      "Beide"
     ],
     "a": "AFAS Pocket",
     "at": "Externe kandidaten gebruiken Pocket in de sollicitantmodus, interne kandidaten in de medewerkermodus. Pocket werkt prettig op de telefoon. Een gecombineerde mail voor Pocket en OutSite kan niet.",
     "link": "139654.htm"
    },
    {
     "id": "mail",
     "t": "choice",
     "l": "Welk e-mailadres gebruiken jullie voor de toegang tot AFAS na indiensttreding?",
     "o": [
      "Privé e-mailadres",
      "Zakelijk e-mailadres"
     ],
     "h": "Het e-mailadres van de gebruiker moet uniek zijn."
    },
    {
     "id": "pocket",
     "t": "advies",
     "l": "Uitnodiging voor AFAS Pocket op de eerste werkdag",
     "at": "Zet 'Gebruiker aanmaken' en de Pocket-uitnodiging aan. De medewerker krijgt dan op de eerste werkdag automatisch toegang tot loonstroken, verlof en nieuws.",
     "link": "135425.htm"
    },
    {
     "id": "moment",
     "t": "choice",
     "l": "Wanneer moet de toegang als medewerker ingaan?",
     "o": [
      "Bij het registreren",
      "Op de datum in dienst"
     ],
     "a": "Op de datum in dienst",
     "at": "Toegang op de datum in dienst voorkomt dat iemand al bij gegevens kan voordat het dienstverband begint.",
     "link": "138614.htm"
    },
    {
     "id": "upn",
     "t": "choice",
     "l": "Moet AFAS automatisch een gebruikersnaam (UPN) voor de nieuwe medewerker maken?",
     "h": "Bijvoorbeeld voornaam.achternaam@organisatie.nl.",
     "o": [
      "Ja",
      "Nee, dat doet ICT",
      "Weet ik nog niet"
     ],
     "link": "144326.htm"
    },
    {
     "id": "opbouw",
     "t": "choice",
     "l": "Hoe is een gebruikersnaam opgebouwd?",
     "o": [
      "Roepnaam + achternaam",
      "Voorletters + achternaam",
      "Medewerkernummer",
      "Anders"
     ],
     "link": "144326.htm"
    },
    {
     "id": "entra",
     "t": "choice",
     "l": "Is AFAS gekoppeld met Microsoft Entra ID (Azure AD)?",
     "o": [
      "Ja",
      "Nee",
      "Weet ik niet"
     ],
     "h": "Met de koppeling reserveert AFAS de gebruikersnaam ook in Entra ID. Zonder koppeling controleert AFAS alleen in AFAS zelf.",
     "link": "144326.htm"
    }
   ]
  },
  {
   "id": "ob11",
   "title": "Aansluiting op Payroll",
   "short": "Payroll",
   "intro": "Bij het afronden van de onboarding legt AFAS het dienstverband vast: werkgever, cao, contract, functie, rooster en salaris. Zo kan de nieuwe medewerker direct mee in de verloning.",
   "qs": [
    {
     "id": "cao",
     "t": "area",
     "l": "Welke cao's en arbeidsvoorwaardenregelingen gelden bij jullie?"
    },
    {
     "id": "rooster",
     "t": "choice",
     "l": "Hoe zien de roosters eruit?",
     "o": [
      "Elke week gelijk",
      "Wisselende weken (cyclus)",
      "Beide komt voor"
     ],
     "link": "135425.htm"
    },
    {
     "id": "einddatum",
     "t": "choice",
     "l": "Moet een einddatum verplicht zijn bij een contract voor bepaalde tijd?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Stel per type contract in dat de einddatum verplicht is. Dan wordt bij bepaalde tijd ook het ketennummer goed vastgelegd voor de ketenregeling.",
     "link": "135425.htm"
    },
    {
     "id": "formatie",
     "t": "choice",
     "l": "Koppelen jullie nieuwe medewerkers bij indiensttreding aan een formatieplaats?",
     "o": [
      "Ja",
      "Nee",
      "Weet ik nog niet"
     ],
     "ifNot": "formatie",
     "link": "138614.htm"
    },
    {
     "id": "soort",
     "t": "multi",
     "l": "Welke soorten medewerkers komen in dienst?",
     "h": "Alleen personeelslid, ondernemer, stagiair (met salaris of vergoeding) en expat gaan mee in de loonaangifte.",
     "o": [
      "Personeelslid",
      "Stagiair met vergoeding",
      "Stagiair zonder vergoeding",
      "Uitzendkracht / inhuur",
      "Expat"
     ],
     "link": "135425.htm"
    },
    {
     "id": "indienst",
     "t": "advies",
     "l": "Velden bijwerken op de datum in dienst",
     "at": "Sommige gegevens worden pas op de datum in dienst bijgewerkt door een geplande taak. Die taak draait niet in een testomgeving; houd daar rekening mee bij het testen.",
     "link": "135425.htm"
    },
    {
     "id": "salaris",
     "t": "text",
     "l": "Wie controleert de salarisgegevens voordat de medewerker wordt geregistreerd?"
    }
   ]
  }
 ]
});
