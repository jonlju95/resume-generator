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
  coverBody:
    label: Cover letter body
    type: multiline
    default: "Cover letter body"
---

{{coverBody}}
