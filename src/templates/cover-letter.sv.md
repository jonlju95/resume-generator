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
  coverBody:
    label: Brevtext
    type: multiline
    group: body
    default: "Personligt brev brevtext"
---

# {{fullName}}
{{jobTitle}}

{{email}} | {{linkedinUrl}} | {{portfolioUrl}} | {{phone}} 
{{city}}{{#if openToRelocation}} | Öppen för flytt till {{relocationCity}}{{/if}}

---

{{coverBody}}
