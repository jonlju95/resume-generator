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
  coverBody:
    label: Brevtext
    type: multiline
    default: "Personligt brev brevtext"
---

{{coverBody}}
