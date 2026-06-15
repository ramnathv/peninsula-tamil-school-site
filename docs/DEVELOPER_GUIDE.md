# Peninsula Tamil School Developer Guide

Welcome to the development guide for the Peninsula Tamil School website! This document serves as the primary onboarding and reference guide for engineers contributing to this repository.

---

## 1. Project Overview

The Peninsula Tamil School website is a high-performance, visually warm, and interactive single-page React application representing a volunteer-driven, nonprofit Tamil language and cultural education school in San Mateo, CA.

### Key Milestones
* **React Migration**: Transformed from a static legacy HTML/CSS/JS site into a component-driven React architecture.
* **Culturally-Rich Design**: Standardized on warm Tamil festival colors, custom wave dividers, and traditional decorative layouts instead of corporate designs.
* **Headless Google Sheets CMS**: Integrated with published Google Sheets so school staff can manage and update announcements, schedule information, course descriptions, events, and photos directly in spreadsheets without writing code or initiating server redeploys.

---

## 2. Tech Stack & Dependencies

* **Frontend Framework**: [React 19](https://react.dev/) (utilizing modern functional components, hooks, and context)
* **Build Tooling**: [Vite 7](https://vite.dev/) (blazing-fast development server, hot-module replacement, and optimized production builds)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & [PostCSS 8](https://postcss.org/) (for responsive utility-first layout)
* **Routing**: [React Router DOM 7](https://reactrouter.com/) (handles client-side single-page routing, scroll resets, and custom base paths)
* **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (powering spring physics, page-load stagger animations, and interactive lightbox transitions)
* **Form Handling**: [React Hook Form 7](https://react-hook-form.com/) (handles registration and contact queries)

---

## 3. Directory Structure

Below is an overview of the key folders and files in this workspace:

```
peninsula-tamil-school-site/
├── docs/                      # Architectural & CMS documentation
│   ├── _archive/              # Legacy / archived documentation
│   └── CMS_GUIDE.md           # Instructions on Google Sheets CMS
├── public/                    # Static public assets
│   └── images/                # Backup local images and WebP photos
├── src/
│   ├── App.jsx                # Application root with routing and settings fetch
│   ├── index.css              # Main CSS file injecting Tailwind
│   ├── main.jsx               # React DOM entry point
│   ├── components/            # Reusable UI components
│   │   ├── gallery/           # Photo gallery and interactive Lightbox
│   │   ├── home/              # Homepage-specific hero, mission, schedules, and maps
│   │   └── layout/            # Navigation Header, Footer, and Announcement banner
│   ├── context/               # React Context Providers
│   │   └── LanguageContext.jsx# Bilingual translations state (English & Tamil)
│   ├── data/                  # Local fallback data and static copies of content
│   │   └── content.js         # Fallback mappings for offline / misconfigured CMS
│   ├── pages/                 # Full-page routing components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ClassesPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── GalleryPage.jsx
│   │   └── ContactPage.jsx
│   └── services/              # External API and spreadsheet integration
│       └── cmsService.js      # Custom CSV parser & Google Sheet fetch handlers
├── package.json               # Dependencies and development scripts
├── tailwind.config.js         # Theme custom colors and fonts extensions
└── vite.config.js             # Vite configurations including assets and ports
```

---

## 4. Development Commands

### Installation
To install the project dependencies, run:
```bash
npm install
```

### Run Local Development Server
Starts the Vite dev server with hot-reloading:
```bash
npm run dev
```
*By default, the server is available at **http://localhost:5173** (or the port specified in the CLI).*

### Build Production Artifacts
Compiles and minifies assets to the `dist/` directory, optimized for rapid static hosting:
```bash
npm run build
```

### Preview the Production Build
Locally spins up a static server serving the built `dist/` folder to check performance and asset sizes before deploying:
```bash
npm run preview
```

---

## 5. Bilingual Layouts & Localization

The application features full bilingual translation support (English & Tamil). 

### How it works:
1. **`LanguageProvider` (`src/context/LanguageContext.jsx`)** wraps the application, exposing:
   - `language`: `"en"` or `"ta"`
   - `setLanguage(lang)`: function to change selected language
   - `t(translationObject)`: translation helper function that returns the language-appropriate value.
2. **Translation Content Structure**: Text strings in `src/data/content.js` are formatted as objects containing both language variations:
   ```javascript
   export const headerText = {
     en: "Welcome to Peninsula Tamil School",
     ta: "பெனின்சுலா தமிழ்ப் பள்ளிக்கு உங்களை வரவேற்கிறோம்"
   };
   ```
3. **Usage in Components**:
   ```jsx
   import { useLanguage } from '../context/LanguageContext';
   
   function MyComponent() {
     const { t } = useLanguage();
     return <h1>{t(headerText)}</h1>;
   }
   ```

Ensure any new hardcoded UI elements added to the site follow this localization standard to keep the user experience consistent.

---

## 6. Coding & Architectural Standards

* **Surgical Updates**: When editing components, preserve existing static content and focus exclusively on requested behavioral/visual changes. Do not strip out safety rules or local structural patterns.
* **Component Abstraction**: Keep pages clean. Extract modular, self-contained sections into components inside `src/components/`.
* **Tailwind Styles**: Always utilize the custom theme tailwind variables when setting colors or typography. Avoid arbitrary values (e.g., use `text-tamil-red` instead of `text-[#C62828]`).
* **State Preservation**: Dynamic state from the Google Sheets CMS must be safely written into local modules and handled with proper fallback boundaries. Always verify data existence prior to destructuring inside templates.
* **Image Delivery**: Always use WebP format for images to maintain swift page-load times and optimized mobile rendering.

---

## 7. Deployment

The website is continuously integrated and deployed automatically via GitHub Actions:
- **Configuration file**: `.github/workflows/static.yml`
- **Deploy Trigger**: Pushes to the `main` branch trigger a production build.
- **Hosting**: Deployed directly to GitHub Pages (or verified static host) as a lightweight, zero-overhead static distribution.
- **Client-Side Routing**: Because client routing is managed by `react-router-dom`, the router is configured to respect the `basename` provided by `import.meta.env.BASE_URL` to ensure route consistency across nested custom domains or subdirectories.
