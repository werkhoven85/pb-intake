# AFAS Intake – Proces Bouwers

Portal met intakevragenlijsten voor het inrichten van AFAS Profit volgens best practice. De klant kiest de onderwerpen, vult alles in één formulier in en downloadt het resultaat als Word-bestand voor de Mentor.

**Live:** https://werkhoven85.github.io/pb-intake/

## Onderwerpen

| # | Vragenlijst | Bestand |
|---|---|---|
| – | Organisatie (altijd, gedeeld) | `vragenlijsten/organisatie.js` |
| 1 | Formatiebeheer | `vragenlijsten/formatie.js` |
| 2 | Werving & Selectie | `vragenlijsten/werving-selectie.js` |
| 3 | Onboarding en contractering | `vragenlijsten/onboarding.js` |
| 4 | Talentmanagement | `vragenlijsten/talent.js` |
| 5 | Verzuim en Wet verbetering poortwachter | `vragenlijsten/verzuim.js` |

## Werking

- Antwoorden worden automatisch bewaard in de browser van de invuller. Er gaat niets naar een server.
- **Download als Word** maakt één document met per onderwerp een hoofdstuk, inclusief scope, afwijkingen van het advies en open punten.
- **Bestand inlezen** laadt een gedownload Word-bestand weer in (ook oude W&S-bestanden).
- Met `?kies=ws,onboarding` in de link staan die onderwerpen alvast aangevinkt.

## Een vragenlijst aanpassen of toevoegen

- Vragen aanpassen: bewerk het bestand in `vragenlijsten/`. De opbouw staat in [`vragenlijsten/SCHEMA.md`](vragenlijsten/SCHEMA.md).
- Nieuw onderwerp: maak een nieuw bestand volgens het schema en voeg één `<script>`-regel toe in `index.html`.

## Techniek

Gewone HTML, CSS en JavaScript zonder bouwstap. De Word-export gebruikt de bibliotheek `docx` en het inlezen `JSZip`; beide worden pas geladen als ze nodig zijn.

> Na een wijziging: verhoog het versienummer `?v=` achter de bestanden in `index.html`, zodat browsers de nieuwe versie direct ophalen.
