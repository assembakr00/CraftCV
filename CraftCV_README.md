# CraftCV
Build polished CVs faster with a modern, smart, and beautifully structured experience.

## 🌟 Overview
CraftCV is a lightweight CV builder designed to help job seekers create professional resumes quickly and confidently. It solves the common problem of formatting and presenting career information clearly by turning a simple form into a polished, live-updating CV preview — all in the browser, with zero setup and no backend required (for now).

## ✨ Features

### Core
- Live CV preview as you type
- AI-powered text enhancement (Claude claude-sonnet-4-6) per section
- Country code phone selector with flags (190+ countries)
- Multiple experience and education entries (add/remove)
- LocalStorage autosave with session restore banner
- Copy CV as formatted plain text to clipboard
- Share via Gmail with pre-filled subject and body
- PDF export via print
- Color theme selector (Classic Blue, Modern Dark, Minimal White) — persists across reloads
- Inline form validation with per-field error messages
- Browser autofill support
- Personal API key input, stored locally in the browser only

### New in v2
- **Per-entry Job Descriptions** — each experience entry now has its own description field with AI Enhance and a character counter (previously one shared global field)
- **AI Enhance loading state** — button disables and shows "Enhancing…" while waiting for Claude, preventing double-clicks and user confusion
- **Clear Form confirmation modal** — a dialog asks you to confirm before wiping all data, preventing accidental data loss
- **Projects & Portfolio section** — add multiple projects with name, technologies used, URL, and description; appears in the preview and export only when filled
- **Skills tag input with proficiency levels** — add skills one at a time with Beginner / Intermediate / Advanced / Expert badges; no more comma-separated textarea
- **Character counters** — summary and per-entry job description fields show live character count with a warning colour when approaching the limit
- **Profile photo / avatar upload** — upload a photo that appears in the CV header preview; stored locally in the browser via localStorage
- **CV completion progress bar** — shows how complete your CV is (0–100%) and turns green at 100%

## 🚀 How to Use
1. Open the app in your browser.
2. (Optional) Add your Anthropic API key in the settings bar at the top to enable AI Enhance.
3. Fill in your personal details, experience, education, projects, and skills.
4. Use **✦ AI Enhance** on any section to polish your text with Claude.
5. Watch the live preview update on the right as you type.
6. Export, share, or copy your CV whenever you are ready.

## 🛠️ Tech Stack
- **HTML5** — semantic markup and accessible form structure
- **CSS3** — custom properties, flexbox/grid, responsive layout, print styles
- **Vanilla JavaScript** — no framework dependencies
- **Anthropic Claude API** (`claude-sonnet-4-6`) — AI text enhancement
- *(Planned)* **Python + FastAPI** — backend for user accounts and CV storage

## 📁 File Structure
```
CraftCV/
├── index.html        — Main entry page
├── CraftCV.css       — Styles: layout, themes, preview, print, new UI components
├── CraftCV.js        — All logic: live preview, form, AI, autosave, skills, avatar
└── CraftCV_README.md — This file
```

## 🔐 API Key Setup
1. Go to [platform.claude.com](https://platform.claude.com)
2. Create a free account (comes with $5 free credits)
3. Generate an API key
4. Paste it into the CraftCV settings bar at the top of the page
5. Click **Save Key** — it is saved in your browser only, never sent to any server

## 🧠 Key Code Concepts
- CSS custom properties for multi-theme support
- Live DOM updates for real-time preview rendering
- Dynamic cloning of entry input groups (experience, education, projects)
- `localStorage` for persistence, session restore, and avatar storage
- `FileReader` API for local avatar image handling
- `navigator.clipboard` for formatted CV text copy
- Fetch API + async/await for Claude AI integration with loading states
- `encodeURIComponent` for Gmail URL building
- `window.print()` for PDF export with dedicated print CSS

## 🗂️ Planned Backend (Coming Soon)
The frontend is fully functional as a standalone tool. A Python backend is planned to add cloud features:

- **Framework:** Python with FastAPI
- **Database:** PostgreSQL or SQLite (local-first)
- **Auth:** JWT tokens or Google OAuth
- **Features:**
  - User accounts with saved CVs
  - Local-first storage (your data stays on your machine by default)
  - Shareable CV links (e.g. `craftcv.app/your-name`)
  - Multiple CV versions per user
- **Hosting options:** Vercel (frontend), Railway or Render (backend)

## 🔮 Upgrade Roadmap
- [ ] LinkedIn profile data import
- [ ] Multiple language support (i18n)
- [ ] Drag-and-drop section reordering
- [ ] ATS (Applicant Tracking System) keyword score checker
- [ ] More CV layout templates
- [ ] Python FastAPI backend (see above)
- [ ] Dark-mode-aware PDF export

## 👨‍💻 Developer
**Assem Bakr**
Built with passion and too much coffee.
Open to feedback, collaboration, and opportunities.

## 📄 License
MIT License
Copyright (c) 2025 Assem Bakr
Permission is hereby granted, free of charge, to any person obtaining a copy of this software to use, copy, modify, merge, publish, or distribute it, subject to the condition that the above copyright notice appears in all copies.
