# 🛍️ E-handelsplattform i Next.js

En minimalistisk och responsiv **e-handelsplattform** byggd med **Next.js** och **TypeScript**, där produkter hanteras via **Supabase** och **Prisma**, erbjuder sök- och filterfunktioner samt interaktiva inslag som kontaktformulär och dynamiska produktsidor.




---

## 📑 Innehåll
- 📖 [Om projektet](#-om-projektet)
- ✨ [Funktioner](#-funktioner)
- 🛠 [Teknologier](#-teknologier)
- ⚙️ [Installation](#-installation)
- 🚀 [Användning](#-användning)
- 📂 [Projektstruktur](#-projektstruktur)
- 📈 [Arbetsflöde](#-arbetsflöde)
- 🗓 [Sprintplan](#-sprintplan)
- 🤝 [Bidra](#-bidra)
- 📚 [Lärdomar](#-lärdomar)
- 📜 [Licens](#-licens)
- ✍️ [Kontakt](#-kontakt)


---

## 📖 Om projektet
Detta projekt är en **e-handelsplattform** byggd med **Next.js 15** och **TypeScript** som en del av en gruppövning. Plattformen är minimalistisk, responsiv och fokuserar på interaktivitet och användarvänlighet.  

Vi använder **Supabase** med **Prisma** som backend för att hantera produktdata, istället för externa API:er.  

Projektet har också varit en övning i **agilt grupparbete**, inklusive versionskontroll med Git/GitHub, projekthantering med GitHub Projects, samt fokus på **tillgänglighet** genom tester med WAVE.  

Plattformen använder moderna Next.js-funktioner som **Server Components**, **Client Components**, **statiska och dynamiska routes** samt **asynkron datahantering**, vilket ger praktisk erfarenhet av verkliga webbutvecklingsprojekt.

## ✨ Funktioner
Plattformen erbjuder bland annat:  
✅ **Startsida med produköversikt** – visar ett urval av produkter med hero-sektion och CTA.  
✅ **Val av huvudkategori** – Man eller Kvinna med sub-navigation för ytterligare filtrering (t.ex. Kvinna → Accessoarer, Klänningar).  
✅ **Sökfunktion** – hitta produkter snabbt.  
✅ **Dynamiska produktsidor** – visar titel, bild, beskrivning, pris, antal som betygsatt, totalt betyg visualiserat med stjärnor och rabattinformation (procentuell rabatt, nytt pris med gammalt överstruket).  
✅ **Lägg till i kassan** – visuell feedback vid klick.  
✅ **Kontaktformulär** – e-post, meddelande och ämneskategori.  
✅ **Om oss-sida** – information om projektgruppen/företaget.  
✅ **Admin-sida** – administrera produkter via `/admin/admin-products` (nåbar via manuell sökväg).  


---

## 🛠 Teknologier
- [Next.js 15 (App Router)](https://nextjs.org/) – Ramverk för React, används för både server- och klientkomponenter.  
- [TypeScript](https://www.typescriptlang.org/) – Starkt typat språk för JavaScript som används i hela projektet.  
- [Supabase](https://supabase.com/) – Backend som hanterar databasen och autentisering.  
- [Prisma](https://www.prisma.io/) – ORM för att hantera databasfrågor mot Supabase.  
- [Tailwind CSS](https://tailwindcss.com/) – CSS-ramverk för snabb och responsiv styling.  
- [WAVE](https://wave.webaim.org/) – Verktyg för att testa tillgänglighet.  

---

## ⚙️ Installation
```bash
# Klona repo
git clone https://github.com/ingakonstigheter/e-commerce-maison-nova

# Gå in i projektmappen
cd e-commerce-maison-nova

# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev
```

---

## 🚀 Användning
- **Startsida** → visar produkter + hero, välj huvudkategori (Man/Kvinna).  
- **Kvinna/Man-sidor** → filtrera produkter med sub-navigation efter underkategori.  
- **Sök** → skriv produktnamn i sökfältet för att hitta produkter.  
- **Produktdetaljer** → klicka på produkt för att se titel, bild, beskrivning, pris, betyg och rabattinformation.  
- **Lägg till i kassan** → klicka på knappen “Lägg till i kassan” för visuell feedback.  
- **Kontakt** → fyll i formulär med e-post, meddelande och ämneskategori, klicka på skicka.  
- **Om oss** → statisk sida med text och bild om projektgruppen/företaget.  
- **Admin-sida** → gå till `/admin/admin-products` för att administrera produkter (endast nåbar via manuell sökväg för tillfället).

---

## 📂 Projektstruktur

```
|-- app/
|  |-- page.tsx            # Startsida
|  |-- about/page.tsx      # Om oss
|-- components/            # Återanvändbara komponenter                
|
|
```

---


## 📈 Arbetsflöde

* 👥 Grupparbete i agila sprintar (SCRUM)
* 🌱 Feature branches
* 🔍 PR + kodgranskning


---


## 🗓 Sprintplan

### Sprint 1 - Grundläggande struktur

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 2 - Grundläggande struktur

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 3 - Grundläggande struktur

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

### Sprint 4 - Finputs

* Satte upp Next.js-projektet
* Skapade menyer & statiska sidor

---

## 🤝 Bidra

Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout ......`)
3. Commit & push
4. Skicka en Pull Request

---

## 📚 Lärdomar

- **Skillnaden mellan Server & Client Components i Next.js** – Vi lärde oss när och varför man ska använda server- respektive klientkomponenter för att optimera prestanda och användarupplevelse.  
- **Agila metoder** – Vi fick praktisk erfarenhet av sprintplanering, backloghantering och samarbete i grupp enligt agila principer.  
- **API-användning** – Ursprungligen användes externa API:er, men vi fick även erfarenhet av att hämta och hantera data från **Supabase** via **Prisma**.  
- **Responsivitet** – Vi lärde oss att skapa gränssnitt som fungerar på olika skärmstorlekar med hjälp av Tailwind CSS och flexibla komponenter.  
- **Databashantering med Prisma & Supabase** – Vi fick förståelse för hur man definierar datamodeller, gör CRUD-operationer och integrerar en databas i ett Next.js-projekt.
  
---

## 📜 Licens

Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.

---

## ✍️ Kontakt

Ev. kontaktuppgifter
