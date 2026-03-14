# ⚡ SC Command Dashboard

A StarCraft-themed command dashboard built with React, Vite, Tailwind CSS, and shadcn/ui.

![StarCraft Dashboard](https://img.shields.io/badge/Theme-StarCraft-00bcd4?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)

## 🎮 Features

- **Dual Theme System** — Light "Terran Command" (steel gray) and Dark "Protoss Nexus" (deep space cyan glow)
- **8 Dashboard Widgets** — Stats Row, Resource Income Chart, Supply Gauge, Tactical Minimap, Active Units Table, Threat Feed, and more
- **Full SC Immersion** — Glow borders, scanline overlays, sweep animations, corner accents
- **Custom Typography** — Orbitron (headings), Rajdhani (body), Share Tech Mono (data)
- **Collapsible Sidebar** with animated transitions
- **Live Clock** with sector identifier
- **Responsive Layout** — works on desktop and mobile

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs on `http://localhost:5000`.

## 🏗️ Build

```bash
npm run build
```

Production files are output to `dist/`.

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # SC-themed components
│   │   │   ├── ui/         # shadcn/ui base components
│   │   │   ├── sc-card.tsx  # Base card with corner accents
│   │   │   ├── stats-row.tsx
│   │   │   ├── mineral-chart.tsx
│   │   │   ├── supply-gauge.tsx
│   │   │   └── ...
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   └── index.css       # SC theme variables
│   └── index.html
├── server/
│   ├── index.ts        # Express server
│   ├── routes.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

## 🎨 Theme Variables

All SC theme values live in `client/src/index.css` as CSS custom properties:

```css
/* Dark (Protoss Nexus) */
--sc-bg: #0a0e1a;
--sc-border: #00bcd4;
--sc-glow: 0 0 12px rgba(0,188,212,0.6);

/* Light (Terran Command) */
--sc-bg: #e8eaed;
--sc-border: #546e7a;
--sc-glow: 0 2px 8px rgba(84,110,122,0.3);
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + TypeScript |
| Build | Vite 7 |
| Styles | Tailwind CSS 3 |
| Components | shadcn/ui |
| Charts | Recharts |
| Server | Express + Node |
| DB ORM | Drizzle ORM |
