# Chetanya Kumar Portfolio

A modern, interactive developer portfolio built with React and Vite, focused on a backend-engineering profile.

## Overview

This project is a premium dark-theme portfolio for **Chetanya Kumar** (Backend Developer, BCA student from Mathura, India).  
It includes:

- Editorial tech-style UI with glassmorphism cards and cyan glow accents
- Animated Three.js network globe in the hero section
- Scroll-based motion and section reveals with Framer Motion
- Backend-focused content for skills, projects, experience, education, and contact
- Responsive layout for desktop and mobile

## Tech Stack

- React
- Vite
- Tailwind CSS (v4 via Vite plugin)
- Framer Motion
- Three.js + React Three Fiber + Drei
- React Icons

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open the URL shown in terminal (usually `http://localhost:5173`).

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - app shell, loader, cursor glow, scroll progress
- `src/components/` - reusable UI sections and 3D scene
- `src/data/portfolioData.js` - all portfolio content (roles, skills, projects, etc.)
- `src/index.css` - global styles, theme, layout, and animation styles

## Customization

- Update portfolio content in `src/data/portfolioData.js`
- Replace resume at `public/resume.pdf`
- Adjust theme, typography, and glow effects in `src/index.css`
- Update social/contact links in `src/data/portfolioData.js`

## Quality Checks

```bash
npm run lint
npm run build
```

## Notes

- Build may show a bundle-size warning due to Three.js usage. This is expected for 3D scenes.
- For optimization, consider lazy-loading the hero 3D scene.
