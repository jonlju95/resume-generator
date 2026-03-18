---
variables:
  fullName:
    label: Full name
    type: text
    default: Firstname Lastname
  jobTitle:
    label: Job title
    type: text
    default: Job title
  email:
    label: Email
    type: text
    default: your@email.com
  phone:
    label: Phone
    type: text
    default: 123-456 78 90
  city:
    label: City
    type: text
    default: City
  linkedinUrl:
    label: LinkedIn URL
    type: text
    default: Url
  portfolioUrl:
    label: Portfolio URL
    type: text
    default: Url
  openToRelocation:
    label: Open to relocation
    type: boolean
    default: true
  relocationCity:
    label: Relocation city
    type: text
    default: City
  summary:
    label: Summary
    type: multiline
    default: Summary text
  skillsBackend:
    label: Backend
    type: text
    default: Skills
  skillsFrontend:
    label: Frontend
    type: text
    default: Skills
  skillsTools:
    label: Tools
    type: text
    default: Tools
  skillsMethods:
    label: Methods
    type: text
    default: Methods
  skillsStrengths:
    label: Strengths
    type: text
    default: Strengths
  skillsLanguages:
    label: Languages
    type: text
    default: Languages
---

# {{fullName}}
**{{jobTitle}}**

{{email}} | {{linkedinUrl}} | {{portfolioUrl}} | {{phone}} | {{city}}{{#if openToRelocation}} · Open to relocation to {{relocationCity}}{{/if}}

---

## Summary

{{summary}}

---

## Experience

**Company — Job title**
Location | To - From

- Description point 1
- Description point 2

---

## Education

**School — Education name**
Location | To - From

- Description point 1
- Description point 2

---

## Skills

**Backend:** {{skillsBackend}}
**Frontend:** {{skillsFrontend}}
**Tools:** {{skillsTools}}
**Methods:** {{skillsMethods}}
**Strengths:** {{skillsStrengths}}
**Languages:** {{skillsLanguages}}
