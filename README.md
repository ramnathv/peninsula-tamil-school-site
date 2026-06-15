# Peninsula Tamil School Website

Official website for **Peninsula Tamil School** – providing high-quality Tamil language and cultural education in San Mateo, CA.

This website is a modern, high-performance, responsive single-page web application built with **React 19**, **Vite 7**, and **Tailwind CSS**. It features full bilingual support (English & Tamil) and integrates seamlessly with a headless **Google Sheets CMS** allowing staff to update content dynamically in real-time.

---

## 🏫 About Peninsula Tamil School

Peninsula Tamil School is a volunteer-driven, 501(c)(3) nonprofit organization dedicated to helping children and adults learn the Tamil language and explore rich Tamil culture. We are a subsidiary of the Peninsula Indian Cultural Association (PICA).

* **Location:** Hillsdale High School, 3115 Del Monte St, San Mateo, CA 94403
* **Schedule:** Every Sunday, 10:20 AM – 12:20 PM
* **Levels:** Pre-Kindergarten (Pre-K) to Grade 10, plus dedicated Adult classes

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** React 19 (functional components, React Context API)
* **Build Tooling:** Vite 7 (extremely fast development and bundling tool)
* **Styling:** Tailwind CSS 3 & PostCSS 8 (utility-first, responsive grid systems)
* **Routing:** React Router DOM 7 (bilingual path state support)
* **Animations:** Framer Motion 12 (smooth spring physics and scroll-driven entry animations)
* **CMS Backend:** Headless Google Sheets CSV integration (zero-dependency custom parser with local static standby fallback protection)

---

## 📖 Project Documentation

For deeper details regarding administration, configuration, and structural workflows, see the dedicated documentation files:

* 🗃️ **[Google Sheets CMS Guide](docs/CMS_GUIDE.md):** Learn how the spreadsheet schema works, how to publish new sheets, field requirements, and how settings are mapped.
* 💻 **[Developer Guide](docs/DEVELOPER_GUIDE.md):** Onboarding instructions for developers, covering local state translation framework, directory structure, custom design extensions, coding guidelines, and deployment details.
* 📂 **[Legacy Documentation Archive](docs/_archive/):** Previous architecture notes and development instructions.

---

## 🚀 Quick Start & Development

To get started with local development:

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the project root containing your published Google Sheet CSV URLs. For full structure details, reference [docs/CMS_GUIDE.md](docs/CMS_GUIDE.md).

```env
VITE_CMS_SETTINGS_URL="https://docs.google.com/spreadsheets/d/[SHEET_ID]/export?format=csv&gid=[SETTINGS_TAB]"
VITE_CMS_ANNOUNCEMENT_URL="https://docs.google.com/spreadsheets/d/[SHEET_ID]/export?format=csv&gid=[BANNER_TAB]"
VITE_CMS_EVENTS_URL="https://docs.google.com/spreadsheets/d/[SHEET_ID]/export?format=csv&gid=[EVENTS_EN_TAB]"
VITE_CMS_EVENTS_TAMIL_URL="https://docs.google.com/spreadsheets/d/[SHEET_ID]/export?format=csv&gid=[EVENTS_TA_TAB]"
VITE_CMS_CLASSES_URL="https://docs.google.com/spreadsheets/d/[SHEET_ID]/export?format=csv&gid=[CLASSES_TAB]"
VITE_CMS_GALLERY_URL="https://docs.google.com/spreadsheets/d/[SHEET_ID]/export?format=csv&gid=[GALLERY_TAB]"
```

*Note: If no `.env` file is present or if sheet fetches fail, the site automatically loads fallback content stored locally inside `src/data/content.js`.*

### 4. Run Development Server
```bash
npm run dev
```
Open **http://localhost:5173** in your browser.

### 5. Build for Production
```bash
npm run build
```
This outputs compiled, optimized static files to the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## ✈️ Deployment & CI/CD

Continuous Integration and Continuous Deployment (CI/CD) is automated via **GitHub Actions**:
* **Workflow:** Defined in `.github/workflows/static.yml`.
* **Automation:** Pushes to the `main` branch automatically build, optimize, and deploy the application to GitHub Pages static hosting.

---

## 📞 Contact & Support

* **Phone:** 408-203-6500
* **Email:** info@peninsulatamilschool.org
* **Facebook:** [Peninsula Tamil School](https://www.facebook.com/PeninsulaTamilSchool)
* **Instagram:** [@pts_insta1920](https://www.instagram.com/pts_insta1920)

---

## 🎗️ Nonprofit Information

* **EIN:** 45-5506063
* **Status:** 501(c)(3) Nonprofit Organization

© 2026 Peninsula Tamil School. All rights reserved.
