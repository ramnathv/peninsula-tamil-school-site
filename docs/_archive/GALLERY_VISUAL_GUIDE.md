# 🎨 Gallery Page Visual Guide

## 🌟 What You'll See

### Hero Section
```
┌─────────────────────────────────────────────────────────┐
│  🔴🟠🟡 Vibrant Gradient Background                       │
│                                                         │
│  ○  ◇  □  (Kolam-inspired geometric patterns)         │
│                                                         │
│         📸 Photo Gallery                               │
│     Moments from our Tamil community                   │
│                                                         │
│  ○  ◇  □                                               │
└─────────────────────────────────────────────────────────┘
     ∿∿∿∿∿∿∿∿ (Wave divider) ∿∿∿∿∿∿∿∿
```

### Filter Buttons
```
┌────────────────────────────────────────────────────┐
│   🖼️ All Photos   💃 Performances                   │
│   📚 Classroom    🎉 Events                         │
└────────────────────────────────────────────────────┘
```
- **Active button**: Red background with shadow glow
- **Hover**: Scales up slightly and bounces
- **Click**: Smooth filter animation

### Gallery Grid
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│  Image   │  │  Image   │  │  Image   │
│          │  │          │  │          │
│  ─────── │  │  ─────── │  │  ─────── │
│  Title   │  │  Title   │  │  Title   │
│  Desc... │  │  Desc... │  │  Desc... │
└──────────┘  └──────────┘  └──────────┘
```

### Card Hover State
```
┌──────────────────┐
│ ✨ (sparkle)     │
│                  │
│   Image (zoomed) │
│   + gradient     │
│   + hover icon   │
│                  │
│  ────┬────       │ <- animated underline
│  Title           │
│  Description     │
│         ∿∿∿      │ <- corner decoration
└──────────────────┘
   ↑ Lifted 8px
```

### Lightbox (Desktop)
```
┌────────────────────────────────────────────────────────┐
│  × Close                                               │
│                                                        │
│  ┌──────────────────┐    ┌──────────────┐            │
│  │                  │    │ PERFORMANCES │            │
│  │                  │    │              │            │
│  │  ← [Image] →     │    │ Title        │            │
│  │                  │    │ ────         │            │
│  │   (Counter)      │    │ Description  │            │
│  │                  │    │              │            │
│  └──────────────────┘    │ ← → Keyboard │            │
│                          │ Esc Close    │            │
│  ○ ∿ ◇ (Animated BG)     └──────────────┘            │
└────────────────────────────────────────────────────────┘
```

## 🎬 Animation Showcase

### 1. Page Load
```
Step 1: Hero fades in + slides up (0s)
   ↓
Step 2: Filter buttons pop in one by one (0.3s)
   ↓
Step 3: Cards spring in with stagger (0.5s+)
        Card 1: 0.5s
        Card 2: 0.6s
        Card 3: 0.7s
        Card 4: 0.8s
```

### 2. Card Hover
```
Normal State      →      Hover State
┌─────────┐             ┌─────────┐
│  Image  │             │ ✨Image ↑│ (lifted)
│  Title  │     →       │ Title━━ │ (underline)
│  Desc   │             │ Desc ∿  │ (corner accent)
└─────────┘             └─────────┘
                        + Zoom image
                        + Gradient overlay
                        + Magnify icon
```

### 3. Filter Transition
```
Click "Performances":

All Cards → Fade out unwanted (0.3s)
            Scale down + opacity 0
              ↓
         Move remaining cards (layout animation)
              ↓
         Show filtered cards
            Fade in + scale up
```

### 4. Lightbox Open
```
Click Card:
  Card enlarges (layout animation)
    ↓
  Backdrop fades in (dark + blur)
    ↓
  Image slides in from right (spring)
    ↓
  Info panel slides in from right (delay)
    ↓
  Navigation buttons pop in
```

### 5. Lightbox Navigation
```
Click Next →:
  Current image slides out left
    ↓
  New image slides in from right
    ↓
  Counter updates
    ↓
  Info panel content fades/updates
```

## 🎨 Color Animation Flow

### Hero Gradient
```
Red (#C62828) → Orange (#F57C00) → Gold (#F9A825)
     ↓              ↓                  ↓
  Primary        Accent             Highlight
```

### Card Hover Gradient
```
Transparent
    ↓
Maroon (#6D1B1B) bottom
    ↓
Red (#C62828) middle
    ↓
Transparent top
```

### Loading State
```
Cream → Light Orange → Cream (pulse)
#FAF7F2 → #FFF3E0 → #FAF7F2
```

## 🎯 Interactive Elements

### 1. Filter Buttons
```
State       | Background | Text    | Shadow
------------|-----------|---------|----------
Default     | White     | Brown   | None
Hover       | Cream     | Brown   | Small
Active      | Red       | White   | Red glow
Clicked     | (scale)   |         |
```

### 2. Gallery Cards
```
Action      | Effect
------------|--------------------------------
Hover       | Lift 8px + Image zoom + Overlay
Click       | Open lightbox
Loading     | Skeleton + spinner
Loaded      | Fade in image
```

### 3. Lightbox Controls
```
Button      | Action           | Disable When
------------|------------------|---------------
Close (×)   | Close lightbox   | Never
← Prev      | Previous image   | First image
→ Next      | Next image       | Last image
Backdrop    | Close on click   | Never
Arrow Left  | Previous image   | First image
Arrow Right | Next image       | Last image
Escape      | Close lightbox   | Never
```

## 📐 Layout Breakpoints

### Mobile (< 768px)
```
Filter: Stack 2x2
┌─────────┐ ┌─────────┐
│  All    │ │  Perf   │
└─────────┘ └─────────┘
┌─────────┐ ┌─────────┐
│  Class  │ │  Events │
└─────────┘ └─────────┘

Gallery: 1 Column
┌─────────────┐
│   Image 1   │
└─────────────┘
┌─────────────┐
│   Image 2   │
└─────────────┘
```

### Tablet (768px - 1024px)
```
Gallery: 2 Columns
┌──────────┐  ┌──────────┐
│  Image 1 │  │  Image 2 │
└──────────┘  └──────────┘
┌──────────┐  ┌──────────┐
│  Image 3 │  │  Image 4 │
└──────────┘  └──────────┘
```

### Desktop (> 1024px)
```
Gallery: 3 Columns
┌────────┐  ┌────────┐  ┌────────┐
│ Image 1│  │ Image 2│  │ Image 3│
└────────┘  └────────┘  └────────┘
┌────────┐
│ Image 4│
└────────┘
```

## ✨ Special Effects Legend

```
Symbol  | Effect
--------|---------------------------
∿       | Wave/curve decoration
━       | Animated underline
○       | Circle decoration
◇       | Diamond decoration
□       | Square decoration
✨      | Sparkle animation
↑       | Upward movement
→       | Rightward movement
←       | Leftward movement
```

## 🎨 Design Tokens Reference

### Spacing
- Card gap: 2rem (32px)
- Card padding: 1.5rem (24px)
- Section padding: 3rem (48px)

### Border Radius
- Cards: 1rem (16px)
- Buttons: 9999px (full rounded)
- Lightbox: 1rem (16px)

### Shadows
- Card default: shadow-lg
- Card hover: shadow-2xl
- Lightbox: shadow-2xl
- Buttons: shadow-lg

### Transitions
- Fast: 200ms
- Normal: 300ms
- Slow: 500ms
- Spring: Dynamic

## 🌈 Atmosphere
The gallery feels:
- 🔥 **Warm** - Cream backgrounds, warm colors
- 🎨 **Cultural** - Traditional patterns, festival colors
- 🎭 **Playful** - Sparkles, bouncy animations
- 📚 **Educational** - Organized, structured, accessible
- ✨ **Polished** - Smooth transitions, attention to detail

---

**Experience it live at: http://localhost:3000/gallery** 🎉
