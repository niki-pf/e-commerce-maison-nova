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
- **Startsida** med hero-sektion och möjlighet att välja huvudkategori: *Man* eller *Kvinna*.  
- **Sub-navigation** på respektive kategori-sida som gör det möjligt att filtrera produkter ytterligare (t.ex. Kvinna → Accessoarer, Klänningar osv.).  
- **Sökfunktion** för att hitta produkter snabbt.  
- **Dynamiska produktsidor** med titel, bild, beskrivning och pris.  
- **Knapp för att lägga till i kassan** (visuell feedback vid klick).  
- **Kontaktformulär** på kontaktsidan med fält för e-post, meddelande och valfri ämneskategori.  
- **Om oss-sida** med information om företaget eller projektgruppen.
- **Admin-sida (för produkter)** – Administrera produkter direkt via `/admin/admin-products`.  
  *Observera:* Admin-sidan är inte kopplad till användarroll ännu, man når den genom att skriva in sökvägen manuellt.

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
* Startsida -> visar produkter + hero
* Om oss -> statisk sida med text och bild
* osv
* osv
* osv

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

* Skillnaden mellan Server & Client Components i Next.js
* Agila metoder
* API
* Responsivitet

---

## 📜 Licens

Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.

---

## ✍️ Kontakt

Ev. kontaktuppgifter
