---
variables:
  fullName:
    label: Fullständigt namn
    type: text
    default: Förnamn Efternamn
  jobTitle:
    label: Yrkestitel
    type: text
    default: Jobbtitel
  email:
    label: E-post
    type: text
    default: din@email.com
  phone:
    label: Telefon
    type: text
    default: 123-456 78 90
  city:
    label: Ort
    type: text
    default: Ort
  linkedinUrl:
    label: LinkedIn-URL
    type: text
    default: Url
  portfolioUrl:
    label: Portfolio-URL
    type: text
    default: Url
  openToRelocation:
    label: Öppen för flytt
    type: boolean
    default: true
  relocationCity:
    label: Flyttort
    type: text
    default: Ort
  summary:
    label: Sammanfattning
    type: multiline
    default: Sammanfattning
  skillsBackend:
    label: Backend
    type: text
    default: Kompetenser
  skillsFrontend:
    label: Frontend
    type: text
    default: Kompetenser
  skillsTools:
    label: Verktyg
    type: text
    default: Verktyg
  skillsMethods:
    label: Arbetsmetoder
    type: text
    default: Arbetsmetoder
  skillsStrengths:
    label: Styrkor
    type: text
    default: Styrkor
  skillsLanguages:
    label: Språk
    type: text
    default: Språk
---

# {{fullName}}
**{{jobTitle}}**

{{email}} | {{linkedinUrl}} | {{portfolioUrl}} | {{phone}} | {{city}}{{#if openToRelocation}} · Öppen för flytt till {{relocationCity}}{{/if}}

---

## Sammanfattning

{{summary}}

---

## Erfarenhet

**Företag — Jobbtitel**
Plats | Till - Från

- Beskrivning punkt 1
- Beskrivning punkt 2

---

## Utbildning

**Skola — Utbildning**
Plats | Till - Från

- Beskrivning punkt 1
- Beskrivning punkt 2

---

## Kompetenser

**Backend:** {{skillsBackend}}
**Frontend:** {{skillsFrontend}}
**Verktyg:** {{skillsTools}}
**Arbetsmetoder:** {{skillsMethods}}
**Styrkor:** {{skillsStrengths}}
**Språk:** {{skillsLanguages}}
