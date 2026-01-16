---
id: 1
title: add-portfolio-constitution
stage: constitution
date: 2026-01-08
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Daw00d'sPc
command: /sp.constitution
labels: [constitution, portfolio, documentation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

# Portfolio Website – Main Page

## Constitution
**Project Name:** Muhammad Dawood – Portfolio Main Page

**Purpose:**
- Introduce Muhammad Dawood as a professional full-stack developer.
- Present a brief bio highlighting skills and expertise.
- Showcase technical skills in organized categories.
- Provide a clear call-to-action (Contact Me).
- Offer easy navigation and footer links for smooth browsing.

**Principles:**
1. **Clarity:** Information should be concise and easy to read.
2. **Responsiveness:** Fully functional on desktop, tablet, and mobile.
3. **Professional Branding:** Consistent colors, typography, and spacing.
4. **Action-Oriented:** Include a prominent CTA button (Contact Me).
5. **Accessibility:** Content must follow basic accessibility standards.

**Core Sections:**
1. **Header / Navigation:** Optional minimal navbar with links (Home, About, Projects, Contact).
2. **Main Heading / Hero:** Name prominently displayed.
3. **Bio:** Short introduction below the name.
4. **Skills Section:** Organized skill categories (Frontend, Backend, Version Control, UI/UX, Spec Driven Development).
5. **CTA Button:** `Contact Me`.
6. **Footer:** Navigation links and copyright.

---

## Response snapshot

# Muhammad Dawood – Portfolio Main Page Constitution

## Core Principles

### I. Clarity
Information must be concise and easy to read. All content should be structured logically with clear headings and readable typography to ensure users can quickly understand the portfolio content.

### II. Responsiveness
The portfolio must function fully across desktop, tablet, and mobile devices. Responsive design principles must be implemented to ensure consistent user experience regardless of device or screen size.

### III. Professional Branding
Consistent colors, typography, and spacing must be maintained throughout the portfolio. Visual elements should reflect professional quality and reinforce the developer's brand identity.

### IV. Action-Oriented Design
Include a prominent call-to-action (CTA) button to encourage user engagement. The portfolio should guide visitors toward meaningful actions, particularly contacting the developer.

### V. Accessibility Standards
Content must follow basic accessibility standards to ensure usability by individuals with disabilities. Proper semantic markup, alt attributes, and keyboard navigation support are required.

### VI. Organized Content Structure
Portfolio content must be organized into logical sections (Header/Navigation, Main Hero, Bio, Skills, CTA, Footer) to facilitate easy navigation and comprehension.

## Additional Requirements

The portfolio must include specific sections as outlined in the project requirements:
- Header/Navigation with links (Home, About, Projects, Contact)
- Main Hero section with prominent name display
- Bio section with brief professional introduction
- Skills section organized by categories (Frontend, Backend, Version Control, UI/UX, Spec Driven Development)
- Contact Me CTA button
- Footer with navigation links and copyright information

## Development Standards

- All code must follow modern web development best practices
- Cross-browser compatibility must be tested and maintained
- Performance optimization is required for fast loading times
- Semantic HTML structure must be used for SEO and accessibility
- Clean, maintainable code with appropriate comments where needed

## Governance

This constitution serves as the authoritative guide for all portfolio development decisions. All implementation work must comply with these principles. Any proposed changes to these core principles must undergo formal amendment procedures with proper documentation and approval.

**Version**: 1.0.0 | **Ratified**: 2026-01-08 | **Last Amended**: 2026-01-08

## Outcome

- ✅ Impact: Created complete constitution document with 6 core principles and additional requirements for portfolio website
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with comprehensive constitution
- 🔁 Next prompts: Ready for spec development based on this constitution
- 🧠 Reflection: Constitution successfully captures all required principles from user input and provides clear guidance for portfolio development

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS - All required principles included
- Prompt variant (if applicable): standard constitution update
- Next experiment (smallest change to try): Begin feature specification based on this constitution