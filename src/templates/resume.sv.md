---
variables:
  fullName:
    label: Fullständigt namn
    type: text
    group: personal
    default: Förnamn Efternamn
  jobTitle:
    label: Yrkestitel
    type: text
    group: personal
    default: Jobbtitel
  email:
    label: E-post
    type: text
    group: personal
    default: din@email.com
  phone:
    label: Telefon
    type: text
    group: personal
    default: 123-456 78 90
  city:
    label: Ort
    type: text
    group: personal
    default: Ort
  linkedinUrl:
    label: LinkedIn-URL
    type: text
    group: personal
    default: Url
  portfolioUrl:
    label: Portfolio-URL
    type: text
    group: personal
    default: Url
  openToRelocation:
    label: Öppen för flytt
    type: boolean
    group: personal
    default: true
  relocationCity:
    label: Flyttort
    type: text
    group: personal
    default: Ort
  summary:
    label: Sammanfattning
    type: multiline
    group: body
    default: Sammanfattning
  skillsBackend:
    label: Backend
    type: text
    group: skills
    default: Kompetenser
  skillsFrontend:
    label: Frontend
    type: text
    group: skills
    default: Kompetenser
  skillsTools:
    label: Verktyg
    type: text
    group: skills
    default: Verktyg
  skillsMethods:
    label: Arbetsmetoder
    type: text
    group: skills
    default: Arbetsmetoder
  skillsStrengths:
    label: Styrkor
    type: text
    group: skills
    default: Styrkor
  skillsLanguages:
    label: Språk
    type: text
    group: skills
    default: Språk
---

# {{fullName}}
{{jobTitle}}

{{email}} | {{linkedinUrl}} | {{portfolioUrl}} | {{phone}} 
{{city}}{{#if openToRelocation}} | Öppen för flytt till {{relocationCity}}{{/if}}

---

## Sammanfattning

{{summary}}

---

## Erfarenhet

**Företag – Jobbtitel**
Plats | Till - Från

- Beskrivning punkt 1
- Beskrivning punkt 2

---

## Utbildning

**Skola – Utbildning**
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
