##  Key Code Concepts
- CSS custom properties for Forest Light and Dark themes
- Live DOM updates for real-time preview rendering
- Dynamic cloning of entry input groups (experience, education, projects)
- `localStorage` for persistence, session restore, and avatar storage
- `FileReader` API for local avatar image handling
- `navigator.clipboard` for formatted CV text copy
- Fetch API + async/await for Claude AI integration with loading states
- `encodeURIComponent` for Gmail URL building
- `window.print()` for PDF export with dedicated print CSS


##  Planned Backend (Comsing Soon)
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

## Upgrade Roadmap
- [ ] LinkedIn profile data import
- [ ] Multiple language support (i18n)
- [ ] Drag-and-drop section reordering
- [ ] ATS (Applicant Tracking System) keyword score checker
- [ ] More CV layout templates
- [ ] Python FastAPI backend (see above)

### New in v1.1
- **Per-entry Job Descriptions** — each experience entry now has its own description field with AI Enhance and a character counter (previously one shared global field)
- **AI Enhance loading state** — button disables and shows "Enhancing…" while waiting for the LLM, preventing double-clicks and user confusion
- **Clear Form confirmation modal** — a dialog asks you to confirm before wiping all data, preventing accidental data loss
- **Projects & Portfolio section** — add multiple projects with name, technologies used, URL, and description; appears in the preview and export only when filled
- **Skills tag input with proficiency levels** — add skills one at a time with Beginner / Intermediate / Advanced / Expert badges; no more comma-separated textarea
- **Character counters** — summary and per-entry job description fields show live character count with a warning colour when approaching the limit
- **Profile photo / avatar upload** — upload a photo that appears in the CV header preview; stored locally in the browser via localStorage
- **CV completion progress bar** — shows how complete your CV is (0–100%) and turns green at 100%

### New in v1.2
- Theme toggle — Forest Light and Dark only; the CSS was flattened (no animations/shadow effects)
- AI Enhance skeleton loader — the field being enhanced shows an animated placeholder instead of just a disabled button while waiting on the LLM response


## What it has
- Live CV preview as you type
- AI-powered text enhancement per section
- Country code phone selector with flags (190+ countries)
- Multiple experience and education entries (add/remove)
- LocalStorage autosave with session restore banner
- Copy CV as formatted plain text to clipboard
- Share via Gmail with pre-filled subject and body
- PDF export via print
- Color theme picker — Forest Light and Dark themes, saved across reloads
- Skeleton loading animation on AI Enhance while waiting for a response
- Inline form validation with per-field error messages
- Browser autofill support
- Personal API key input, stored locally in thes browser only

## Known Issues
- **API key is stored client-side and used directly from the browser** — fine for personal/local use, but the key lives in `localStorage` and is sent straight to Anthropic from the page. The planned FastAPI backend would move this server-side.
- **Large avatars may not persist** — if a photo exceeds the `localStorage` quota it shows for the session only (a toast warns you).

## 📄 License
MIT License
Copyright (c) 2025 Assem Bakr
Permission is hereby granted, free of charge, to any person obtaining a copy of this software to use, copy, modify, merge, publish, or distribute it, subject to the condition that the above copyright notice appears in all copies.
