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
  coverBody:
    label: Cover letter body
    type: multiline
    group: body
    default: "Cover letter body"
---

{{coverBody}}
