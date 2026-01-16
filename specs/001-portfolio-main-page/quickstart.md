# Quickstart Guide: Portfolio Main Page

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Modern web browser for testing

## Setup Instructions

### 1. Clone and Initialize
```bash
# Navigate to your project directory
cd portfolio--web

# If this is a new project, initialize:
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### 2. Install Dependencies
```bash
npm install react-router-dom tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind CSS
Update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Create Project Structure
```bash
mkdir -p src/components/{Hero,Skills,CTA,Footer}
mkdir -p src/pages/{Home}
mkdir -p src/styles
mkdir -p src/assets/images
```

### 5. Development Server
```bash
npm run dev
```
The application will be available at http://localhost:5173

## Key Files to Implement

### 1. Main App Component (`src/App.jsx`)
- Set up routing
- Include main layout structure
- Add global styles

### 2. Home Page (`src/pages/Home/index.jsx`)
- Compose all portfolio sections
- Implement responsive layout
- Ensure proper component hierarchy

### 3. Hero Component (`src/components/Hero/index.jsx`)
- Display name "MUHAMMAD DAWOOD" prominently
- Include professional bio
- Center content with proper spacing

### 4. Skills Component (`src/components/Skills/index.jsx`)
- Organize skills by category
- Display as badges or grid
- Include all specified skill categories

### 5. CTA Component (`src/components/CTA/index.jsx`)
- Create "Contact Me" button
- Implement scroll or modal action
- Style according to design guidelines

### 6. Footer Component (`src/components/Footer/index.jsx`)
- Include navigation links
- Add copyright information
- Add social media links (optional)

## Testing Commands
```bash
# Run unit tests
npm test

# Run end-to-end tests (once implemented)
npx cypress run

# Build for production
npm run build
```

## Environment Variables
No environment variables required for static portfolio site.

## Deployment
```bash
# Build the application
npm run build

# The built files will be in the `dist` directory
# Deploy these static files to any hosting service (Netlify, Vercel, GitHub Pages, etc.)
```

## Development Workflow
1. Create components following the structure defined in the plan
2. Implement responsive design using Tailwind CSS
3. Ensure accessibility compliance
4. Test across different devices and browsers
5. Optimize for performance (under 3-second load time)