# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peninsula Tamil School website - A nonprofit Tamil language and cultural education institution in Foster City, CA. Currently a static HTML/CSS/JavaScript site being transformed into a modern React application with warm, culturally-rich UI/UX.

**CRITICAL CONTENT PRESERVATION RULE**: All existing text content, copy, contact information, event details, class descriptions, and factual information MUST remain exactly as written. This is purely a UI/UX visual and interaction redesign. Only the presentation layer, styling, animations, and component structure should change.

## Current Architecture (Static Site)

### Pages & Content Structure
- `index.html` - Homepage with hero, mission, quick info cards, schedule, event previews, location map
- `about.html` - History, mission, offerings (17+ years, volunteer-driven, Pre-K to Grade 10)
- `classes.html` - Class levels (Pre-K, Grades 1-3, 4-6, 7-10), schedule, expectations
- `events.html` - Full academic year calendar (2023-2024) with 15+ events
- `gallery.html` - Photo gallery with 4 images (cultural events, performances, classes)
- `contact.html` - Contact information, enrollment link to Google Forms

### Current Tech Stack
- Pure HTML/CSS/JavaScript (no build process)
- CSS: Single `css/styles.css` file (~600 lines)
- JavaScript: `js/main.js` (form validation), `js/gallery.js` (filtering & lightbox)
- Images: WebP format in `images/` directory
- Deployment: GitHub Pages via `.github/workflows/static.yml`

### Design System (Current)
- **Primary Color**: #D32F2F (Red) - used for headers, CTAs, accents
- **Secondary Color**: #B71C1C (Darker Red) - hover states
- **Typography**: Arial/Helvetica - generic sans-serif
- **Layout**: Grid-based (3-column info cards, 2-column events, 3-column gallery)
- **Issues**: Stark white backgrounds, corporate feel, minimal cultural identity, basic interactions

## Target Architecture (React Transformation)

### Tech Stack Migration
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "framer-motion": "^11.x",
    "react-hook-form": "^7.x",
    "@headlessui/react": "^2.x",
    "@heroicons/react": "^2.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "@vitejs/plugin-react": "^4.x"
  }
}
```

### Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Sticky nav with smooth scroll, mobile hamburger
│   │   ├── Footer.jsx          # Three-column footer (preserved content)
│   │   └── PageTransition.jsx  # Framer Motion page wrapper
│   ├── home/
│   │   ├── Hero.jsx            # Full-bleed hero with overlay, dual CTAs
│   │   ├── Mission.jsx         # Centered mission statement with subtle bg
│   │   ├── QuickInfoCards.jsx  # 3-card grid with hover states
│   │   ├── ClassSchedule.jsx   # Visual schedule display (When/Where/Who)
│   │   ├── EventsPreview.jsx   # 2 featured events with date badges
│   │   └── LocationMap.jsx     # Google Maps embed + contact summary
│   ├── pages/
│   │   ├── About.jsx           # Story, mission, offerings (list preserved)
│   │   ├── Classes.jsx         # Accordion or card-based class levels
│   │   ├── Events.jsx          # Full calendar with featured/regular cards
│   │   ├── Gallery.jsx         # Masonry grid with lightbox modal
│   │   └── Contact.jsx         # Contact cards + Google Forms link
│   ├── ui/
│   │   ├── Button.jsx          # Primary/secondary variants with animations
│   │   ├── Card.jsx            # Base card component with hover effects
│   │   ├── DateBadge.jsx       # Month/day display for events
│   │   ├── Modal.jsx           # Headless UI modal for gallery lightbox
│   │   └── LoadingSpinner.jsx  # Skeleton states for images
│   └── animations/
│       └── variants.js         # Framer Motion variants library
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ClassesPage.jsx
│   ├── EventsPage.jsx
│   ├── GalleryPage.jsx
│   └── ContactPage.jsx
├── hooks/
│   ├── useScrollReveal.js     # Intersection Observer for animations
│   └── useMediaQuery.js       # Responsive breakpoint detection
├── App.jsx                    # React Router setup with page transitions
└── main.jsx                   # Entry point
```

## Design Philosophy & Visual Identity

### Cultural Design Principles
1. **Warm Earth Tones**: Replace stark white (#FFF) with cream/beige backgrounds (#FFF8F0, #FAF7F2)
2. **Tamil Cultural Elements**:
   - Consider traditional kolam patterns (geometric designs) as decorative borders
   - Warm reds, oranges, yellows (harvest/Pongal festival colors)
   - Deep maroons, golds, terracotta accents
3. **Educational Warmth**: Think library, community center, cultural hall - NOT corporate office
4. **Typography**: Replace Arial with:
   - Headings: Merriweather, Playfair Display, or Spectral (serif, warm, educational)
   - Body: Inter, Open Sans, or Source Sans Pro (clean but warmer than Arial)

### Color Palette Evolution
```css
/* Current (Corporate Red) */
--primary: #D32F2F;
--primary-dark: #B71C1C;

/* New (Warm Tamil-Inspired Palette) */
--tamil-red: #C62828;         /* Deeper, warmer red */
--tamil-orange: #F57C00;      /* Pongal sun, harvest */
--tamil-gold: #F9A825;        /* Festival accents */
--tamil-terracotta: #D84315;  /* Clay, earth */
--tamil-maroon: #6D1B1B;      /* Rich, traditional */

--bg-cream: #FFF8F0;          /* Main background */
--bg-warm: #FAF7F2;           /* Alternate sections */
--bg-light-orange: #FFF3E0;   /* Hover states */

--text-primary: #2C2416;      /* Warm dark brown */
--text-secondary: #5D4E37;    /* Medium warm brown */
--text-muted: #8B7355;        /* Light warm brown */
```

### Animation Guidelines
- **Page Transitions**: Subtle fade + slide (200-300ms)
- **Scroll Animations**: Fade up on scroll (stagger children by 100ms)
- **Hover States**: Scale(1.02) + shadow increase (200ms ease-out)
- **Image Loading**: Blur-up progressive loading with skeleton
- **CTA Buttons**: Subtle pulse on hover, no aggressive bouncing
- **Card Reveals**: Fade + translate Y on viewport enter
- **Gallery**: Smooth modal open with backdrop blur

## Development Commands

### Initial Setup
```bash
# Initialize Vite + React project
npm create vite@latest . -- --template react
npm install

# Install dependencies
npm install react-router-dom framer-motion react-hook-form @headlessui/react @heroicons/react

# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Development Workflow
```bash
# Start dev server
npm run dev              # Runs on http://localhost:5173

# Build for production
npm run build            # Output to dist/

# Preview production build
npm run preview
```

### Migration Strategy
```bash
# Step 1: Create React app structure
mkdir -p src/{components/{layout,home,pages,ui,animations},pages,hooks}

# Step 2: Copy existing images
cp -r images/ public/images/

# Step 3: Extract content from HTML files into JSON or constants
# Create src/data/content.js with all text content preserved

# Step 4: Build components incrementally (start with layout)
# Migrate in order: Header → Footer → HomePage → other pages

# Step 5: Configure GitHub Pages deployment
# Update .github/workflows/static.yml to build React app first
```

## Content Preservation Strategy

### Content Extraction
Create `src/data/content.js` to store all existing text content:
```javascript
export const schoolInfo = {
  name: "Peninsula Tamil School",
  tagline: "Preserving Tamil language and culture for future generations in the Bay Area.",
  phone: "(650) 555-1234",
  email: "info@peninsulatamilschool.org",
  address: {
    venue: "Foster City Recreation Center",
    street: "1000 E Hillsdale Blvd",
    city: "Foster City, CA 94404"
  },
  schedule: {
    day: "Every Sunday",
    time: "10:00 AM - 12:30 PM",
    duration: "34 weeks (August through May)"
  }
};

export const aboutContent = {
  story: "Peninsula Tamil School was established over 17 years ago...",
  mission: "To provide quality Tamil language education...",
  offerings: [
    "Structured curriculum from Pre-K through Grade 10",
    // ... all 8 items preserved exactly
  ]
};

export const classesContent = {
  levels: [
    {
      name: "Pre-K & Kindergarten",
      description: "Introduction to Tamil letters..."
    },
    // ... all 4 levels preserved exactly
  ]
};

export const eventsData = [
  {
    date: { month: "AUG", day: "20" },
    title: "First Day of PTS",
    // ... all 15 events preserved exactly
  }
];
```

### Form Integration
- **Enrollment**: Keep Google Forms link (https://docs.google.com/forms/d/e/1FAIpQLSfQ6O7ydiFo1bh2ZIqwGIx3y5PSgqBSkko5rilFHKRp6nHn9Q/viewform)
- **Contact Form**: Remove PHP handlers (don't work on GitHub Pages), use mailto: links or external form service (Formspree, Netlify Forms) if interactive form needed
- **Validation**: Use React Hook Form for client-side validation with visual feedback

## UI/UX Enhancement Checklist

### Navigation
- [ ] Sticky header with blur backdrop on scroll
- [ ] Active link indicator with underline animation
- [ ] Mobile hamburger menu with slide-in drawer (Headless UI Transition)
- [ ] Smooth scroll to sections on same page

### Homepage
- [ ] Hero with Ken Burns effect on background image
- [ ] Mission section with fade-in on scroll
- [ ] Quick info cards with staggered entrance animation
- [ ] Schedule cards with hover lift effect
- [ ] Event preview cards with date badge design
- [ ] Google Maps with custom marker styling

### About Page
- [ ] Story text with larger line-height for readability
- [ ] Mission callout box with warm background
- [ ] Offerings as visual checklist with icons

### Classes Page
- [ ] Class levels as expandable accordions or hover-reveal cards
- [ ] Visual progression indicator (Pre-K → Grade 10)
- [ ] Schedule in visual calendar format

### Events Page
- [ ] Filter by month or event type
- [ ] Featured events with distinct styling (border, background)
- [ ] Date badges with color coding
- [ ] Past events greyed out or hidden

### Gallery Page
- [ ] Masonry layout (3 columns desktop, 2 tablet, 1 mobile)
- [ ] Progressive image loading with blur-up
- [ ] Lightbox modal with prev/next navigation
- [ ] Smooth transitions on category filter (if added)

### Contact Page
- [ ] Contact info cards with icons
- [ ] Map integration
- [ ] CTA to Google Forms enrollment

### Accessibility
- [ ] ARIA labels on all interactive elements
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus visible states
- [ ] Alt text on all images
- [ ] Sufficient color contrast (WCAG AA minimum)

## Deployment

### GitHub Pages with React
Update `.github/workflows/static.yml`:
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Vite Configuration
Ensure `vite.config.js` has correct base path for GitHub Pages:
```javascript
export default {
  base: '/peninsula-tamil-school-site-main/', // or your repo name
}
```

## Key Files to Reference

- **Content Source**: All HTML files contain exact text to preserve
- **Design Reference**: `css/styles.css` lines 1-600 show current structure
- **Interactions**: `js/gallery.js` lines 44-124 (lightbox functionality to replicate)
- **Form Logic**: `js/main.js` lines 1-20 (validation patterns to preserve)
- **Deployment**: `.github/workflows/static.yml` (update for React build)

## Common Tasks

### Add New Event
```javascript
// src/data/content.js
export const eventsData = [
  // Add new object with: date, title, time, location, description, featured
];
```

### Update Contact Info
```javascript
// src/data/content.js - update schoolInfo object
```

### Change Color Scheme
```javascript
// tailwind.config.js - update theme.extend.colors
```

### Add Gallery Image
```bash
# 1. Add WebP image to public/images/
# 2. Update src/data/content.js galleryImages array
```

## Important Notes

- **Never modify** text content in components - always reference `src/data/content.js`
- **Always test** animations on mobile - reduce motion if needed
- **Maintain** Google Forms integration for enrollment
- **Preserve** all 15 events from 2023-2024 calendar exactly as written
- **Keep** nonprofit info (EIN: 45-5506063) if displayed
- **Test** deployment on GitHub Pages before pushing to main
- **Avoid** flashy animations - this is an educational institution, not a startup
