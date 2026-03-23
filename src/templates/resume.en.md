---
variables:
  fullName:
    label: Full name
    type: text
    group: personal
    default: Firstname Lastname
  jobTitle:
    label: Job title
    type: text
    group: personal
    default: Job title
  email:
    label: Email
    type: text
    group: personal
    default: your@email.com
  phone:
    label: Phone
    type: text
    group: personal
    default: 123-456 78 90
  city:
    label: City
    type: text
    group: personal
    default: City
  linkedinUrl:
    label: LinkedIn URL
    type: text
    group: personal
    default: Url
  portfolioUrl:
    label: Portfolio URL
    type: text
    group: personal
    default: Url
  openToRelocation:
    label: Open to relocation
    type: boolean
    group: personal
    default: true
  relocationCity:
    label: Relocation city
    type: text
    group: personal
    default: City
  summary:
    label: Summary
    type: multiline
    group: body
    default: Summary text
  skillsBackend:
    label: Backend
    type: text
    group: skills
    default: Skills
  skillsFrontend:
    label: Frontend
    type: text
    group: skills
    default: Skills
  skillsTools:
    label: Tools
    type: text
    group: skills
    default: Tools
  skillsMethods:
    label: Methods
    type: text
    group: skills
    default: Methods
  skillsStrengths:
    label: Strengths
    type: text
    group: skills
    default: Strengths
  skillsLanguages:
    label: Languages
    type: text
    group: skills
    default: Languages
---

# {{fullName}}
{{jobTitle}}

{{email}} | {{linkedinUrl}} | {{portfolioUrl}} | {{phone}} 
{{city}}{{#if openToRelocation}} | Open to relocation to {{relocationCity}}{{/if}}

---

## Summary

{{summary}}

---

## Experience

**Company – Job title**
Location | To - From

- Description point 1
- Description point 2

---

## Education

**School – Education name**
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
