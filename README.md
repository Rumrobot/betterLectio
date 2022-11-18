![Netlify](https://img.shields.io/netlify/12e95056-413a-458c-9f0a-e753f4a4f83e?label=Better%20Lectio&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/victorDigital/betterLectio?style=flat-square)


# BetterLectio

Better Lectio er en forbredelse af [Lectio](https://lectio.dk). Lectio er et dansk webbaseret lektionssystem udviklet af det danske softwarefirma MaCom A/S. [vi](https://github.com/victorDigital/betterLectio/graphs/contributors) har udviklet Better Lectio for at gøre det nemmere at bruge Lectio. Vi har fokuseret på at gøre det nemmere at finde informationer, og at gøre det nemmere at få overblik over sin skolegang. og vi har lavet en række andre forbedringer som f.eks. at lave en hel ny brugerflade, som både er mere brugervenlig og mere moderne.  
læs hvordan systemet fungerer [HER](https://betlec.netlify.app/help)  

Better lectio er et open source projekt, hvilket betyder at alle kan se koden, og alle kan bidrage til projektet. Better lectio er på nuværende tidspunkt under udvikling, hvis du har nogle forslag til forbedringer, eller hvis du har fundet en fejl, så er du meget velkommen til åbne en issue, eller lave en pull request.

Lavet af [os](https://github.com/victorDigital/betterLectio/graphs/contributors)  
<img src="https://contrib.rocks/image?repo=victorDigital/betterLectio" />

## TODO
1. opgave side
   - udvid API til at kunne hente specifikke opgaver og (API)
   - hvis det er en opgave med en fil, så skal der være en download knap (API) (UI)
   - hvis det er en gruppeopgave, så skal der være en liste over alle gruppemedlemmer og man skal kunne vælge personer fra listen (API) (UI)
   - der kan være en måde at uploade filer på (UI) (API)
   - der skal være en måde at skrive beskeder på (UI) (API)
   - den skal se folt ud ved hjælp af Daisy UI (UI)
   - Afsluttede opgaver (API, UI)

2. skema side
   - lav skemaet kompatibelt med daisy UI (UI) ✅
   - mulighed for at cache skemaet (API)
   - kunne se andre elevers skema (API) (UI)

3. værktøjs side (nyttige værktøjer til brugeren)
   - IDÉ - hvornår møder jeg samme tid / tag hjem som min klassekammerat (elev id / elev navn) (client side med callback til server) (API)
   - IDÉ - opgave formatter (Askes side projekt) (API? måske client side)
   - IDÉ - hvor mange dage til næste prøve (API)
   - IDÉ - hvornår har jeg fri (client side med callback til server) ✅
   - IDÉ - hvor mange moduler kan jeg i teorien pjekke før jeg får x% fravær (client side med callback til server) (brug data fra fravær side)
   - IDÉ - Skole community side hvor man kan ved hjælp af Discord OAuth2 lave private Discord servere hvor man kan vælge hvilke klasser/grupper/klubber der kan være med eller hele skolen om hele skolen kan være med (Discord OAuth2, database)
   - IDÉ - Man kan højre klikke på en anden bruger og så kommer der en popup lidt som på Discord hvor der står en status som er om de har fri eller om de har time og hvilken time de har og med en knap til at skrive til dem osv.

4. fravær side
   - lav fravær side backend (API)
   - lav fravær side frontend (UI)
   - Måske lav en graf over fravær evt. snup den fra lectio? (UI) (API)

5. beskeder side
   - Cache billeder (Client side)
   - Modtagere (API + Client side)
   - Klik på beskeder og fremvis dem (UI + API)
   - IDÉ - :emojis: (UI)

6. features
   - IDÉ - mulighed for at gemme skemaet local storage (med tids stempel) (client side)
   - terms of service (har lavet en seperat branch) (UI)
   - lectio billder? (UI) (API)

7. bugs
   - løs z-index problemer (UI)
   - Daisy UI CSS på skema ✅

8. dokumentation
   - lav en dokumentation (UI)
   - lav en help side (UI)
   - lav en about side (UI)
