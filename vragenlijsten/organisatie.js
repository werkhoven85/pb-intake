/* Gedeeld onderdeel Organisatie (zie SCHEMA.md) */
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
 "id": "org",
 "order": 0,
 "fixed": true,
 "title": "Organisatie",
 "short": "Organisatie",
 "tagline": "Algemene gegevens",
 "intro": "Algemene gegevens over jullie organisatie, voor alle onderwerpen samen.",
 "flow": [],
 "sections": [
  {
   "id": "o1",
   "title": "Organisatie en huidige situatie",
   "short": "Organisatie",
   "intro": "Een beeld van jullie organisatie. Deze vragen beantwoord je één keer, voor alle gekozen onderwerpen samen.",
   "qs": [
    {
     "id": "org",
     "t": "text",
     "l": "Naam organisatie"
    },
    {
     "id": "contact",
     "t": "text",
     "l": "Contactpersoon voor deze intake (naam en functie)"
    },
    {
     "id": "werkgevers",
     "t": "number",
     "l": "Hoeveel werkgevers (juridische entiteiten) hebben jullie in AFAS?",
     "h": "Vacatures en sollicitanten hangen in AFAS aan een werkgever."
    },
    {
     "id": "medewerkers",
     "t": "number",
     "l": "Hoeveel medewerkers hebben jullie ongeveer?"
    },
    {
     "id": "cao",
     "t": "area",
     "l": "Welke cao’s of arbeidsvoorwaardenregelingen gelden er?",
     "h": "Bijvoorbeeld cao VVT, cao Gehandicaptenzorg of een eigen regeling."
    },
    {
     "id": "modules",
     "t": "multi",
     "l": "Welke AFAS-onderdelen gebruiken jullie al?",
     "o": [
      "HRM",
      "Payroll",
      "InSite (intranet)",
      "OutSite (externe site)",
      "AFAS Pocket",
      "Workflows",
      "Digitaal ondertekenen"
     ]
    },
    {
     "id": "live",
     "t": "date",
     "l": "Wanneer willen jullie live gaan met werving en selectie in AFAS?"
    },
    {
     "id": "knelpunt",
     "t": "area",
     "l": "Wat zijn nu de grootste knelpunten in jullie HR-processen?",
     "h": "Bijvoorbeeld veel handwerk, trage goedkeuringen of gegevens die op meerdere plekken staan."
    },
    {
     "id": "succes",
     "t": "area",
     "l": "Wanneer is deze implementatie over een jaar geslaagd?"
    }
   ]
  }
 ]
});
