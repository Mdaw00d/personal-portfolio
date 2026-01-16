# Data Model: Portfolio Main Page

## Overview
The portfolio main page is primarily a static content presentation with minimal data requirements. The data is organized into sections that represent different aspects of Muhammad Dawood's professional profile.

## Data Entities

### 1. PortfolioProfile
Represents the core personal information displayed in the hero section

**Fields**:
- `name`: String - Full name (Muhammad Dawood)
- `title`: String - Professional title (Full-stack developer)
- `bio`: String - Brief professional description
- `avatarUrl`: String? - URL to profile image (optional)

**Validation**:
- name: Required, minimum 2 characters
- title: Required, minimum 5 characters
- bio: Required, 50-500 characters

### 2. SkillCategory
Represents a group of related technical skills

**Fields**:
- `id`: String - Unique identifier for the category
- `name`: String - Category name (e.g., "Frontend", "Backend", "Version Control", "UI/UX", "Other")
- `skills`: Array<String> - List of specific skills in this category
- `order`: Number - Display order for the category

**Validation**:
- id: Required, unique
- name: Required, minimum 2 characters
- skills: Required, minimum 1 skill per category
- order: Required, positive integer

### 3. NavigationLink
Represents a link in the navigation system

**Fields**:
- `id`: String - Unique identifier
- `label`: String - Display text (e.g., "Home", "About", "Projects", "Skills", "Contact")
- `url`: String - Destination URL or anchor link
- `order`: Number - Display order in navigation

**Validation**:
- id: Required, unique
- label: Required, minimum 2 characters
- url: Required, valid URL format
- order: Required, positive integer

### 4. SocialLink (Optional)
Represents a link to social media or contact platform

**Fields**:
- `id`: String - Unique identifier
- `platform`: String - Platform name (e.g., "LinkedIn", "GitHub", "Email")
- `url`: String - Direct link to profile or contact method
- `icon`: String? - Icon identifier for display (optional)

**Validation**:
- id: Required, unique
- platform: Required, minimum 2 characters
- url: Required, valid URL format

## Relationships

### PortfolioProfile to SkillCategory
- One PortfolioProfile has many SkillCategories
- Relationship: 1:M (One-to-Many)

### PortfolioProfile to NavigationLink
- One PortfolioProfile has many NavigationLinks
- Relationship: 1:M (One-to-Many)

### PortfolioProfile to SocialLink
- One PortfolioProfile has many SocialLinks (optional)
- Relationship: 1:M (One-to-Many)

## Data Sources

### Static Content
Most data will be statically defined in the application:
- PortfolioProfile information
- SkillCategory definitions with skills
- NavigationLink configurations

### Future Extensibility
For potential CMS integration:
- JSON file configuration
- API endpoints (if integrated with a backend later)

## State Transitions

### None Required
This portfolio page is primarily static content with no complex state transitions required. The only dynamic elements would be:
- Active navigation highlighting
- Hover states for interactive elements
- Form state (if contact form is implemented in the future)