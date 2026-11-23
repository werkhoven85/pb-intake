/* Vragenlijst Verzuim en Wet verbetering poortwachter (zie SCHEMA.md) */
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
 "id": "verzuim",
 "order": 5,
 "title": "Verzuim en Wet verbetering poortwachter",
 "short": "Verzuim",
 "tagline": "Ziekmelden, re-integratie en poortwachter",
 "intro": "Van ziekmelding tot re-integratie: hoe jullie verzuim in AFAS registreren, de wettelijke stappen van de Wet verbetering poortwachter bewaken en de loondoorbetaling regelen.",
 "flow": [
  {
   "s": "vz2",
   "t": "Ziekmelden",
   "d": "Pocket, InSite of HR"
  },
  {
   "s": "vz3",
   "t": "Arbodienst",
   "d": "Melding doorgeven"
  },
  {
   "s": "vz5",
   "t": "Poortwachter",
   "d": "Taken en termijnen"
  },
  {
   "s": "vz6",
   "t": "Dossier",
   "d": "Re-integratieverslag"
  },
  {
   "s": "vz4",
   "t": "UWV",
   "d": "42e week en vangnet"
  },
  {
   "s": "vz7",
   "t": "Loon",
   "d": "Doorbetaling bij ziekte"
  }
 ],
 "flowSub": [
  "vz1",
  "vz8",
  "vz9"
 ],
 "timeline": [
  {
   "w": "Week 6",
   "t": "Oordeel bedrijfsarts (probleemanalyse)",
   "afas": "AFAS-taak in week 4"
  },
  {
   "w": "Week 8",
   "t": "Plan van aanpak",
   "afas": "AFAS-taak in week 6"
  },
  {
   "w": "Elke 6 weken",
   "t": "Evaluatie en bijstelling plan van aanpak",
   "afas": "AFAS-taken van week 10 tot en met 100"
  },
  {
   "w": "Week 42",
   "t": "Melding langdurige ziekte aan UWV",
   "afas": "Automatisch met Digi-ZSM"
  },
  {
   "w": "Week 52",
   "t": "Eerstejaarsevaluatie",
   "afas": "AFAS-taak in week 50"
  },
  {
   "w": "Week 91",
   "t": "Eindevaluatie",
   "afas": "AFAS-taak in week 87"
  },
  {
   "w": "Week 93",
   "t": "WIA-aanvraag door de medewerker",
   "afas": "AFAS-taak in week 89"
  },
  {
   "w": "Week 104",
   "t": "Einde loondoorbetaling",
   "afas": "AFAS-taak in week 102"
  }
 ],
 "sections": [
  {
   "id": "vz1",
   "title": "Huidige situatie en verzuimbeleid",
   "short": "Huidige situatie",
   "intro": "Een beeld van hoe jullie verzuim nu organiseren. Zo stemmen we de inrichting in AFAS af op jullie verzuimbeleid.",
   "qs": [
    {
     "id": "pct",
     "t": "text",
     "l": "Wat is jullie verzuimpercentage ongeveer?",
     "h": "Een schatting is genoeg.",
     "short": true,
     "opt": true
    },
    {
     "id": "nu",
     "t": "choice",
     "l": "Hoe registreren jullie verzuim nu?",
     "o": [
      "Al in AFAS",
      "In het systeem van de arbodienst",
      "In Excel of op papier",
      "Combinatie"
     ]
    },
    {
     "id": "protocol",
     "t": "choice",
     "l": "Hebben jullie een vastgesteld verzuimprotocol?",
     "o": [
      "Ja, actueel",
      "Ja, maar verouderd",
      "Nee"
     ]
    },
    {
     "id": "protocolup",
     "t": "upload",
     "l": "Upload jullie verzuimprotocol",
     "opt": true
    },
    {
     "id": "model",
     "t": "choice",
     "l": "Hoe is de verzuimbegeleiding georganiseerd?",
     "o": [
      "Leidinggevende begeleidt, HR ondersteunt",
      "Casemanager of HR begeleidt",
      "Arbodienst doet de casemanagement",
      "Verschilt per afdeling"
     ]
    },
    {
     "id": "casemanager",
     "t": "text",
     "l": "Wie is (interne) casemanager of eerste aanspreekpunt voor verzuim?"
    },
    {
     "id": "knelpunt",
     "t": "area",
     "l": "Wat gaat er nu mis of kost veel tijd in de verzuimbegeleiding?",
     "h": "Bijvoorbeeld: termijnen die gemist worden, dossiers die niet compleet zijn, veel handmatig overtypen."
    }
   ]
  },
  {
   "id": "vz2",
   "title": "Ziek- en betermelden",
   "short": "Ziekmelden",
   "intro": "In AFAS kan een ziekmelding vastgelegd worden door de medewerker zelf (Pocket of InSite), door de leidinggevende of door HR in Profit. Een nieuwe melding binnen 28 dagen na herstel wordt automatisch doorlopend verzuim.",
   "qs": [
    {
     "id": "wie",
     "t": "choice",
     "l": "Wie legt de ziekmelding vast in AFAS?",
     "o": [
      "De medewerker zelf in Pocket of InSite",
      "De leidinggevende in InSite",
      "HR centraal in Profit"
     ],
     "a": "De leidinggevende in InSite",
     "at": "De medewerker meldt zich ziek bij de leidinggevende, die de melding direct vastlegt. Zo blijft het persoonlijke contact bij de melding bestaan en staat het verzuim meteen in AFAS.",
     "link": "142896.htm"
    },
    {
     "id": "beter",
     "t": "choice",
     "l": "Wie legt de betermelding vast?",
     "o": [
      "De medewerker zelf",
      "De leidinggevende",
      "HR"
     ],
     "a": "De leidinggevende",
     "at": "Laat dezelfde rol die de ziekmelding doet ook de betermelding vastleggen. Dan is één persoon verantwoordelijk voor een kloppende registratie."
    },
    {
     "id": "gedeeltelijk",
     "t": "choice",
     "l": "Komt gedeeltelijk verzuim of gedeeltelijk herstel vaak voor?",
     "o": [
      "Ja, regelmatig",
      "Soms",
      "Bijna nooit"
     ],
     "h": "In AFAS leg je dit vast met verloopregels op de verzuimmelding.",
     "link": "HRM_Sick_Entry.htm"
    },
    {
     "id": "types",
     "t": "multi",
     "l": "Welke soorten verzuim willen jullie registreren?",
     "h": "De soorten verzuim zijn in AFAS gekoppeld aan vaste ARBO-codes en niet zelf uit te breiden.",
     "o": [
      "Ziekte",
      "Zwangerschap en bevalling",
      "Ongeval (werk)",
      "Ongeval (privé)",
      "Orgaandonatie"
     ],
     "link": "HRM_Sick_Entry.htm"
    },
    {
     "id": "vervanger",
     "t": "choice",
     "l": "Willen jullie bij de ziekmelding vastleggen wie de taken overneemt?",
     "o": [
      "Ja",
      "Nee"
     ]
    },
    {
     "id": "informeren",
     "t": "text",
     "l": "Wie moet op de hoogte zijn van een ziekmelding, en wie controleert de registratie achteraf?",
     "h": "AFAS registreert een ziekmelding direct; er zit geen goedkeuringsstap vooraf in. Bijvoorbeeld: leidinggevende en HR krijgen bericht, HR controleert wekelijks.",
     "opt": true
    },
    {
     "id": "bereik",
     "t": "choice",
     "l": "Hebben alle medewerkers toegang tot AFAS Pocket of InSite?",
     "o": [
      "Ja, iedereen",
      "Een deel van de medewerkers",
      "Nee"
     ]
    }
   ]
  },
  {
   "id": "vz3",
   "title": "Koppeling met de arbodienst",
   "short": "Arbodienst",
   "intro": "AFAS stuurt verzuimmeldingen digitaal door naar een aantal grote arbodiensten via de communicatieservice. Voor andere arbodiensten maak je een exportbestand dat je zelf verstuurt.",
   "qs": [
    {
     "id": "arbo",
     "t": "choice",
     "l": "Met welke arbodienst werken jullie?",
     "o": [
      "Zorg van de Zaak",
      "Arbo Unie",
      "ArboNed of HumanCapitalCare",
      "Andere arbodienst",
      "Eigen bedrijfsarts zonder arbodienst"
     ]
    },
    {
     "id": "arbonaam",
     "t": "text",
     "l": "Naam van de arbodienst als die niet in de lijst staat",
     "opt": true
    },
    {
     "id": "koppeling",
     "t": "advies",
     "l": "Digitale koppeling met de arbodienst",
     "at": "Koppel AFAS met de arbodienst via de communicatieservice als die dat ondersteunt. Ziek- en betermeldingen gaan dan automatisch door, zonder dubbel invoeren.",
     "link": "Hrm_Sick_Arbo.htm"
    },
    {
     "id": "extra",
     "t": "choice",
     "l": "Willen jullie ook medewerkergegevens buiten verzuim of een bestand met dienstverbanden naar de arbodienst sturen?",
     "o": [
      "Ja",
      "Nee",
      "Weet niet, eerst afstemmen met de arbodienst"
     ],
     "a": "Weet niet, eerst afstemmen met de arbodienst",
     "at": "Stuur deze aanvullende bestanden alleen na overleg met de arbodienst. Niet elke arbodienst verwerkt ze, en je deelt dan meer gegevens dan nodig.",
     "link": "Hrm_Sick_Arbo.htm"
    },
    {
     "id": "contract",
     "t": "choice",
     "l": "Wat voor contract hebben jullie met de arbodienst?",
     "o": [
      "Maatwerkregeling",
      "Vangnetregeling",
      "Weet ik niet"
     ]
    }
   ]
  },
  {
   "id": "vz4",
   "title": "Meldingen aan UWV (Digi-ZSM)",
   "short": "UWV",
   "intro": "Met Digi-ZSM stuurt AFAS meldingen automatisch naar UWV: de melding van langdurige ziekte (42e week), de vangnetmeldingen, de WAZO-aanvraag bij zwangerschap en hersteldmeldingen. Je zet dit per werkgever aan.",
   "qs": [
    {
     "id": "digizsm",
     "t": "choice",
     "l": "Willen jullie de meldingen aan UWV automatisch laten versturen met Digi-ZSM?",
     "o": [
      "Ja, voor alle werkgevers",
      "Ja, voor een deel van de werkgevers",
      "Nee, we melden zelf via het UWV-werkgeversportaal"
     ],
     "a": "Ja, voor alle werkgevers",
     "at": "Met Digi-ZSM gaat de 42e-weekmelding automatisch op tijd. Een te late melding kan een boete van UWV opleveren.",
     "link": "Hrm_Sick_UWV.htm"
    },
    {
     "id": "vangnet",
     "t": "multi",
     "l": "Voor welke situaties hebben jullie vangnetmeldingen nodig?",
     "h": "Bij deze groepen betaalt UWV een Ziektewet-uitkering in plaats van of naast de werkgever.",
     "o": [
      "No-riskpolis (arbeidsgehandicapte medewerkers)",
      "Oproepkrachten",
      "Ziek uit dienst",
      "Zwangerschapsgerelateerde ziekte",
      "Komt niet voor"
     ],
     "link": "Hrm_Sick_UWV.htm"
    },
    {
     "id": "lopend",
     "t": "advies",
     "l": "Lopende meldingen bij overstap",
     "at": "Meldingen van vóór het aanzetten van Digi-ZSM worden niet met terugwerkende kracht verstuurd. Leg vast welke lopende gevallen jullie zelf nog bij UWV moeten melden.",
     "link": "Hrm_Sick_UWV.htm"
    },
    {
     "id": "wazo",
     "t": "choice",
     "l": "Willen jullie ook de WAZO-aanvraag (zwangerschaps- en bevallingsverlof) via AFAS laten lopen?",
     "o": [
      "Ja",
      "Nee"
     ],
     "a": "Ja",
     "at": "Dan hoeft HR de aanvraag niet apart in het UWV-portaal in te voeren.",
     "link": "Hrm_Sick_UWV.htm"
    }
   ]
  },
  {
   "id": "vz5",
   "title": "Poortwachter-signalen en rollen",
   "short": "Poortwachter",
   "intro": "AFAS heeft standaardsignalen voor de stappen van de Wet verbetering poortwachter. Ze maken taken aan vóór de wettelijke deadline, zodat er tijd is om de stap uit te voeren. De signalen staan standaard uit en moet je eerst aanzetten.",
   "qs": [
    {
     "id": "signalen",
     "t": "advies",
     "l": "Standaard poortwachter-signalen aanzetten",
     "at": "Zet de standaardsignalen aan (deblokkeren). AFAS maakt de taken dan ruim voor de wettelijke termijn aan, bijvoorbeeld het plan van aanpak in week 6 terwijl de wettelijke deadline week 8 is.",
     "link": "Hrm_Config_Sick_WVP.htm"
    },
    {
     "id": "speling",
     "t": "advies",
     "l": "Standaardtiming van de poortwachter-signalen aanhouden",
     "at": "De standaardsignalen maken taken ongeveer twee weken voor de wettelijke termijn aan. Dat geeft voldoende speling.",
     "link": "Hrm_Config_Sick_WVP.htm"
    },
    {
     "id": "rollen",
     "t": "multi",
     "l": "Wie voert de poortwachter-taken uit?",
     "o": [
      "Leidinggevende",
      "HR-adviseur",
      "Casemanager",
      "Medewerker zelf",
      "Arbodienst"
     ]
    },
    {
     "id": "eigenaar",
     "t": "area",
     "l": "Wie is verantwoordelijk voor welke stap (probleemanalyse, plan van aanpak, evaluaties, eindevaluatie, WIA)?",
     "h": "Een korte opsomming is genoeg."
    },
    {
     "id": "melding42",
     "t": "choice",
     "l": "Hoe wordt de 42e-weekmelding bewaakt?",
     "h": "AFAS heeft hiervoor geen standaardsignaal. Met Digi-ZSM verstuurt AFAS de melding zelf; anders voeg je een eigen signaal toe.",
     "o": [
      "Automatisch via Digi-ZSM",
      "Eigen signaal in AFAS (zelf toe te voegen)",
      "Handmatig door HR"
     ],
     "a": "Automatisch via Digi-ZSM",
     "at": "Dan hoeft niemand eraan te denken.",
     "link": "Hrm_Config_Sick_WVP.htm"
    },
    {
     "id": "overgang",
     "t": "choice",
     "l": "Hoeveel lopende verzuimgevallen langer dan 6 weken zijn er nu ongeveer?",
     "h": "Signalen werken niet met terugwerkende kracht. Voor lopende gevallen is bij de overstap eenmalig een plan van aanpak in AFAS nodig.",
     "o": [
      "Geen",
      "1 tot 5",
      "6 tot 20",
      "Meer dan 20"
     ],
     "link": "Hrm_Config_Sick_WVP.htm"
    },
    {
     "id": "insite",
     "t": "advies",
     "l": "Verzuimbegeleiding in InSite",
     "at": "Gebruik de InSite-pagina's Verzuimbegeleiding (voor leidinggevende en HR) en Mijn verzuimbegeleiding (voor de medewerker). Iedereen ziet dan de openstaande taken en documenten op één plek.",
     "link": "Hrm_Config_Sick_WVP.htm"
    }
   ]
  },
  {
   "id": "vz6",
   "title": "Re-integratiedossier",
   "short": "Dossier",
   "intro": "Bij twee jaar verzuim vraagt UWV een volledig re-integratieverslag. AFAS heeft voor de onderdelen Word-documenten die digitaal ondertekend kunnen worden.",
   "qs": [
    {
     "id": "documenten",
     "t": "choice",
     "l": "Willen jullie de standaard Word-documenten van AFAS gebruiken voor het re-integratiedossier?",
     "o": [
      "Ja, met digitaal ondertekenen",
      "Ja, zonder digitaal ondertekenen",
      "Nee, we gebruiken documenten van de arbodienst"
     ],
     "a": "Ja, met digitaal ondertekenen",
     "at": "AFAS heeft documenten met digitale ondertekening voor alle onderdelen van het re-integratieverslag. Het dossier is dan compleet en vindbaar in AFAS.",
     "link": "Hrm_Config_Sick_WVP.htm"
    },
    {
     "id": "tekenaars",
     "t": "multi",
     "l": "Wie ondertekenen de documenten?",
     "o": [
      "Medewerker",
      "Leidinggevende",
      "HR of casemanager"
     ],
     "h": "Het oordeel van de bedrijfsarts wordt buiten AFAS ondertekend en als bijlage toegevoegd."
    },
    {
     "id": "wia",
     "t": "advies",
     "l": "WIA-aanvraag buiten AFAS",
     "at": "Voor de WIA-aanvraag zelf heeft AFAS geen standaarddocument. De medewerker vraagt de WIA aan bij UWV; AFAS zet wel een taak klaar voor de leidinggevende.",
     "link": "Hrm_Config_Sick_WVP.htm"
    },
    {
     "id": "uwvverslag",
     "t": "advies",
     "l": "Volledig re-integratieverslag",
     "at": "Houd het dossier vanaf week 10 compleet: probleemanalyse, plan van aanpak met bijstellingen, evaluaties, actueel oordeel en eindevaluatie. Dat zijn de onderdelen die UWV vraagt.",
     "link": "https://www.uwv.nl/nl/ziek/re-integratie/verslag",
     "lt": "Re-integratieverslag (UWV)"
    },
    {
     "id": "bestaand",
     "t": "upload",
     "l": "Upload de sjablonen die jullie nu gebruiken voor het re-integratiedossier",
     "opt": true
    }
   ]
  },
  {
   "id": "vz7",
   "title": "Loondoorbetaling bij ziekte",
   "short": "Loondoorbetaling",
   "intro": "Bij ziekte betaal je minimaal 70% van het loon door, maximaal 104 weken. Veel cao's betalen in het eerste jaar 100%. In AFAS Payroll regel je dit met een cao-component.",
   "qs": [
    {
     "id": "jaar1",
     "t": "choice",
     "l": "Hoeveel loon betalen jullie door in het eerste ziektejaar?",
     "o": [
      "100%",
      "Tussen 70% en 100%",
      "70%",
      "Verschilt per cao of werkgever"
     ]
    },
    {
     "id": "jaar2",
     "t": "choice",
     "l": "Hoeveel loon betalen jullie door in het tweede ziektejaar?",
     "o": [
      "70%",
      "Meer dan 70%",
      "Verschilt per cao of werkgever"
     ]
    },
    {
     "id": "comp70",
     "t": "advies",
     "l": "70%-regeling in Payroll",
     "at": "Activeer de cao-component 'Ziektedagen 70%' (100.000.107). De rest van de regeling wordt dan automatisch actief, en na een jaar voeg je een nieuwe verloopregel toe.",
     "link": "Hrm_WgImpl_70Sick.htm"
    },
    {
     "id": "cao",
     "t": "text",
     "l": "Welke cao('s) gelden voor de loondoorbetaling bij ziekte?"
    },
    {
     "id": "wachtdagen",
     "t": "area",
     "l": "Werken jullie met wachtdagen? Zo ja, hoe regelen jullie die nu?",
     "opt": true
    },
    {
     "id": "erd",
     "t": "choice",
     "l": "Zijn jullie eigenrisicodrager voor de Ziektewet of de WGA?",
     "o": [
      "Nee, publiek verzekerd bij UWV",
      "Eigenrisicodrager Ziektewet",
      "Eigenrisicodrager WGA",
      "Beide",
      "Weet ik niet"
     ]
    },
    {
     "id": "uitkering",
     "t": "area",
     "l": "Hoe verwerken jullie nu een Ziektewet-uitkering van UWV in het salaris?",
     "h": "Bijvoorbeeld bij een no-riskpolis. Beschrijf de huidige werkwijze.",
     "opt": true
    }
   ]
  },
  {
   "id": "vz8",
   "title": "Privacy en autorisatie",
   "short": "Privacy",
   "intro": "Medische gegevens horen niet in AFAS. Wie toegang heeft tot verzuimgegevens, regel je met de autorisatierol Verzuim en via workflows in InSite.",
   "qs": [
    {
     "id": "medisch",
     "t": "advies",
     "l": "Geen medische gegevens in AFAS",
     "at": "Leg geen diagnoses of medische details vast in AFAS, ook niet in vrije velden, opmerkingen of bijlagen. Alleen de bedrijfsarts beoordeelt de medische situatie.",
     "link": "Hrm_Sick_PW.htm"
    },
    {
     "id": "rol",
     "t": "advies",
     "l": "Autorisatierol Verzuim alleen voor wie het nodig heeft",
     "at": "De rol Verzuim geeft volledig beheer over verzuimgegevens. Geef die alleen aan HR of de casemanager; leidinggevenden werken via de workflows in InSite.",
     "link": "100590.htm"
    },
    {
     "id": "rolwie",
     "t": "text",
     "l": "Wie krijgen de autorisatierol Verzuim?"
    },
    {
     "id": "zichtlg",
     "t": "choice",
     "l": "Welke verzuimgegevens ziet een leidinggevende?",
     "o": [
      "Alleen van eigen medewerkers",
      "Van de hele afdeling",
      "Geen, alleen HR"
     ],
     "a": "Alleen van eigen medewerkers",
     "at": "Een leidinggevende heeft alleen gegevens nodig van de medewerkers die hij begeleidt."
    },
    {
     "id": "fg",
     "t": "choice",
     "l": "Is de functionaris gegevensbescherming of privacy officer betrokken bij de inrichting van verzuim?",
     "o": [
      "Ja",
      "Nee, maar dat willen we wel",
      "We hebben geen FG"
     ]
    }
   ]
  },
  {
   "id": "vz9",
   "title": "Rapportage",
   "short": "Rapportage",
   "intro": "AFAS heeft een BI-model Verzuim met onder meer verzuimpercentage, aantal meldingen en verzuimduur. Hoe het percentage wordt berekend, stel je zelf in.",
   "qs": [
    {
     "id": "kpi",
     "t": "multi",
     "l": "Welke verzuimcijfers willen jullie volgen?",
     "o": [
      "Verzuimpercentage",
      "Meldingsfrequentie",
      "Gemiddelde verzuimduur",
      "Verzuim per duurklasse (kort, middellang, lang)",
      "Verzuim per afdeling",
      "Openstaande poortwachter-taken"
     ],
     "a": [
      "Verzuimpercentage",
      "Verzuim per duurklasse (kort, middellang, lang)"
     ],
     "at": "Verzuimpercentage, aantal meldingen en duurklassen zitten standaard in het BI-model Verzuim. Meldingsfrequentie en openstaande poortwachter-taken vragen een eigen berekening of rapport.",
     "link": "138725.htm"
    },
    {
     "id": "methode",
     "t": "choice",
     "l": "Hoe willen jullie het verzuimpercentage berekenen?",
     "h": "Dit stel je in AFAS in bij de dashboardinstellingen.",
     "o": [
      "Methode 2 (meest gebruikt)",
      "Een andere methode uit de AFAS-instellingen",
      "Weet ik niet, graag advies van de Mentor"
     ],
     "a": "Methode 2 (meest gebruikt)",
     "at": "De meeste organisaties gebruiken methode 2. Dat maakt vergelijken met andere organisaties makkelijker.",
     "link": "138725.htm"
    },
    {
     "id": "zwanger",
     "t": "choice",
     "l": "Telt zwangerschapsgerelateerd verzuim mee in het verzuimpercentage?",
     "o": [
      "Ja",
      "Nee",
      "Weet ik niet"
     ]
    },
    {
     "id": "ontvanger",
     "t": "text",
     "l": "Wie krijgt de verzuimcijfers, en hoe vaak?"
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
     "l": "Is er verder nog iets over verzuim dat we moeten weten?",
     "opt": true
    }
   ]
  }
 ]
});
