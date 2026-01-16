---
description: "Task list for Portfolio Main Page implementation"
---

# Tasks: Portfolio Main Page

**Input**: Design documents from `/specs/001-portfolio-main-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - not explicitly requested in this feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `frontend/src/`, `frontend/public/`
- Paths shown below assume frontend directory structure from plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Vite React project in frontend/ directory
- [x] T002 Install dependencies: react, react-dom, react-router-dom, tailwindcss, postcss, autoprefixer
- [x] T003 [P] Configure Tailwind CSS in frontend/tailwind.config.js
- [x] T004 [P] Configure PostCSS in frontend/postcss.config.js
- [x] T005 [P] Create Tailwind directives in frontend/src/index.css
- [x] T006 [P] Create project directory structure: src/components/, src/pages/, src/styles/, src/assets/images/
- [x] T007 [P] Create component directories: src/components/Hero/, src/components/Skills/, src/components/CTA/, src/components/Footer/
- [x] T008 [P] Configure React Router in frontend/src/App.jsx
- [x] T009 [P] Create HTML template in frontend/public/index.html with proper meta tags

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T010 Create data constants file for portfolio profile in frontend/src/data/portfolioData.js
- [x] T011 [P] Create data constants file for skills categories in frontend/src/data/skillsData.js
- [x] T012 [P] Create data constants file for navigation links in frontend/src/data/navigationData.js
- [x] T013 [P] Set up global styles and theme variables in frontend/src/styles/theme.css
- [x] T014 [P] Create base layout component in frontend/src/components/Layout/index.jsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Portfolio Overview (Priority: P1) 🎯 MVP

**Goal**: Visitor lands on portfolio and sees Muhammad Dawood's name prominently with bio

**Independent Test**: Visit homepage and verify name "MUHAMMAD DAWOOD" and bio are clearly visible and centered

### Implementation for User Story 1

- [x] T015 [P] [US1] Create Hero component structure in frontend/src/components/Hero/index.jsx
- [x] T016 [P] [US1] Create Hero component styles in frontend/src/components/Hero/Hero.module.css or inline Tailwind
- [x] T017 [US1] Implement PortfolioProfile data display in Hero component (name, title, bio)
- [x] T018 [US1] Add responsive layout styling to Hero component (centered, proper spacing)
- [x] T019 [US1] Implement semantic HTML structure (h1 for name, section tags)
- [x] T020 [US1] Add accessibility attributes (ARIA labels, proper heading hierarchy)
- [x] T021 [US1] Create Home page in frontend/src/pages/Home/index.jsx
- [x] T022 [US1] Integrate Hero component into Home page
- [x] T023 [US1] Test Hero component on mobile, tablet, desktop viewports

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Skills Exploration (Priority: P2)

**Goal**: Visitor browses organized technical skills by category

**Independent Test**: Visit page and verify skills are organized in clear categories (Frontend, Backend, Version Control, UI/UX, Other)

### Implementation for User Story 2

- [x] T024 [P] [US2] Create Skills component structure in frontend/src/components/Skills/index.jsx
- [x] T025 [P] [US2] Create SkillCategory subcomponent in frontend/src/components/Skills/SkillCategory.jsx
- [x] T026 [P] [US2] Create SkillBadge subcomponent in frontend/src/components/Skills/SkillBadge.jsx
- [x] T027 [US2] Implement SkillCategory data mapping from skillsData.js
- [x] T028 [US2] Style Skills component with grid/flex layout using Tailwind CSS
- [x] T029 [US2] Add category labels and organize skills by category
- [x] T030 [US2] Implement responsive design for skill badges (wrap on smaller screens)
- [x] T031 [US2] Add hover effects to skill badges
- [x] T032 [US2] Integrate Skills component into Home page
- [x] T033 [US2] Test Skills component on mobile, tablet, desktop viewports

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Contact Action (Priority: P3)

**Goal**: Visitor finds and clicks "Contact Me" button

**Independent Test**: Verify "Contact Me" button is visible and clicking it triggers expected action (scroll or modal)

### Implementation for User Story 3

- [x] T034 [P] [US3] Create CTA component structure in frontend/src/components/CTA/index.jsx
- [x] T035 [P] [US3] Style "Contact Me" button with professional appearance using Tailwind CSS
- [x] T036 [US3] Implement scroll-to-section or modal logic for contact action
- [x] T037 [US3] Add button accessibility (proper labels, keyboard navigation)
- [x] T038 [US3] Add hover and focus states to button
- [x] T039 [US3] Center CTA component on page
- [x] T040 [US3] Integrate CTA component into Home page below Skills section
- [x] T041 [US3] Test CTA component interaction on all devices

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Footer & Navigation (Supporting Features)

**Goal**: Complete the portfolio with footer navigation and copyright

**Implementation**

- [x] T042 [P] Create Footer component structure in frontend/src/components/Footer/index.jsx
- [x] T043 [P] Create NavigationLinks subcomponent in frontend/src/components/Footer/NavigationLinks.jsx
- [x] T044 Create navigation links from navigationData.js (Home, About, Projects, Skills, Contact)
- [x] T045 [P] Add copyright information with current year
- [x] T046 [P] Style Footer with minimal, consistent design using Tailwind CSS
- [x] T047 Add optional social media links (LinkedIn, GitHub, Email)
- [x] T048 Implement responsive footer layout
- [x] T049 Integrate Footer component into Layout or Home page
- [x] T050 Test footer navigation on all devices

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T051 [P] Add smooth scroll behavior for navigation links
- [x] T052 [P] Optimize images in src/assets/images/ (if any)
- [x] T053 [P] Add favicon in frontend/public/favicon.ico
- [x] T054 [P] Configure meta tags for SEO in public/index.html
- [x] T055 [P] Run accessibility audit (WCAG 2.1 AA compliance check)
- [x] T056 [P] Test page load performance (target: under 3 seconds)
- [x] T057 [P] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [x] T058 [P] Verify responsive design on actual devices
- [x] T059 Code cleanup and remove unused imports
- [x] T060 Final review against constitution principles (Clarity, Responsiveness, Professional Branding, Action-Oriented, Accessibility, Organized Content)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Footer & Navigation (Phase 6)**: Can proceed in parallel with user stories
- **Polish (Phase 7)**: Depends on all desired features being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent from US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent from US1/US2

### Within Each User Story

- Setup tasks before implementation
- Component structure before styling
- Core functionality before polish
- Integration as final step within each story

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Component structure tasks marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch Hero component tasks together:
Task: "Create Hero component structure in frontend/src/components/Hero/index.jsx"
Task: "Create Hero component styles in frontend/src/components/Hero/Hero.module.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add Footer & Navigation → Complete portfolio
6. Polish phase → Production ready

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Hero)
   - Developer B: User Story 2 (Skills)
   - Developer C: User Story 3 (CTA) + Footer
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Tests not included (not requested in spec)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence