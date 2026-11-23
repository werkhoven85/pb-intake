# Opbouw van een vragenlijst

Elke vragenlijst is één JavaScript-bestand in deze map dat zichzelf registreert:

```js
window.PB_MODULES = window.PB_MODULES || [];
window.PB_MODULES.push({
  id: "formatie",                 // korte id, a-z, wordt prefix van alle antwoordsleutels
  order: 1,                       // volgorde op de portal (1 = eerst)
  title: "Formatiebeheer",        // volledige naam
  short: "Formatie",              // korte naam (menu, chips)
  tagline: "Formatieplaatsen, begroting en bezetting",   // 3-7 woorden voor de tegel
  intro: "Eén of twee zinnen voor de tegel op de startpagina.",
  flow: [                          // procesplaat: 4-7 stappen, elk verwijst naar een sectie-id
    { s: "fb2", t: "Formatieplaatsen", d: "OE of OE + functie" }
  ],
  flowSub: ["fb1", "fb7"],         // optioneel: secties die als 'randvoorwaarden' chips onder de procesplaat staan
  timeline: [                      // optioneel (alleen verzuim): tijdlijn i.p.v. procesplaat
    { w: "Week 6", t: "Oordeel bedrijfsarts (probleemanalyse)", afas: "AFAS-taak in week 4" }
  ],
  sections: [
    { id: "fb1", title: "Uitgangssituatie en organigram", short: "Organigram",
      intro: "Korte uitleg van dit onderdeel in AFAS.",
      qs: [ /* vragen */ ] }
  ]
});
```

## Vraagobject

| veld | betekenis |
|---|---|
| `id` | korte id, uniek binnen de sectie (a-z, 0-9) |
| `t` | type: `text`, `area`, `number`, `date`, `choice` (één keuze), `multi` (meerdere), `advies` (akkoord/wijkt af op een stelling), `upload` (vinkje "stuur ik mee per mail") |
| `l` | de vraag |
| `h` | optionele hulptekst onder de vraag |
| `o` | opties (choice/multi) |
| `a` | geadviseerde optie (choice) of lijst (multi) |
| `at` | toelichting op het advies; bij `advies` is dit de stelling zelf |
| `link` | AFAS Help-pagina, bv. `"13666.htm"` (wordt `https://help.afas.nl/help/NL/SE/` + link) of een volledige `https://`-URL |
| `lt` | optionele linktekst (standaard "Meer info") |
| `opt` | `true` = optioneel, telt niet mee in voortgang |
| `short` | `true` = smal tekstveld |
| `ifNot` | module-id: vraag alleen tonen als die vragenlijst NIET gekozen is |

Sleutel van een antwoord: `<module.id>.<sectie.id>_<vraag.id>`.

## Schrijfregels

- Nederlands, je-vorm, jargonvrij; AFAS-termen tussen haakjes.
- De consultant heet **Mentor** ("je Mentor").
- Advies (`a`/`at`/`advies`) alleen op functionaliteit die op help.afas.nl staat, met `link`.
- Niet-gedocumenteerde functionaliteit laten we weg. Vragen naar de huidige werkwijze mag, zonder iets toe te zeggen.
- 40-60 vragen per vragenlijst; elke sectie 3-8 vragen.
