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


## How the code is organised
There are 3 files for the app: `index.html` (the page), `CraftCV.css` (how it looks) and `CraftCV.js` (what it does).

`CraftCV.js` goes from top to bottom:
1. **translations**: all the text, in English and Arabic. `t('key')` gives the text for the current language
2. **country list**: used for the phone code and the location dropdown
3. **small helpers**: `save`/`load` (browser storage), `escapeHtml`, `showToast`
4. **page elements**: one `const` per element we need, named after what it is (`fullNameInput`, `cvPreview`...)
5. **the form**: saving and loading it, the entries (education, jobs, projects), skills, photo, checking fields
6. **the preview**: `updatePreview()` builds the CV on the right, `buildCvText()` builds the copied text
7. **buttons and events**: `handleInput` runs on every typing, `handleClick` runs for the buttons in the form
8. **start**: `start()` is the very last thing, it sets up the page

How a typing works: you type, `handleInput` cleans the text, checks the field, saves the form to the browser, then redraws the preview and the progress bar.

The saved data is one object (see `getFormData`). Save, restore, undo, import and the language change all use `getFormData()` and `fillForm()`.

## Planned Backend (Comsing Soon)
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
- [x] Multiple languages (English and Arabic. More can be added in the `I18N` object in CraftCV.js)
- [x] Reordering (up/down buttons, no drag and drop yet)
- [ ] ATS (Applicant Tracking System) keyword score checker
- [x] More CV templates (Classic, Modern, Minimal)
- [ ] Python FastAPI backend (see above)

### v1.1
- Each job has its own description box with AI Enhance and a character counter
- The AI Enhance button is disabled and says "Enhancing..." while it waits
- Clear Form asks you to confirm first
- Projects section (name, technologies, link, description), only shown when filled in
- Skills are added one at a time with a level (Beginner to Expert)
- Character counters on the summary and descriptions
- Profile photo upload, saved in the browser
- Progress bar that turns green at 100%

### v1.2
- Theme toggle with only two themes, Forest Light and Dark. The CSS was made flat and simple
- The AI Enhance button shows "Enhancing..." while waiting for the AI

### v1.3
- Arabic and English, with right-to-left layout (Settings > Language)
- Three CV templates: Classic, Modern, Minimal
- Start and end dates for jobs, with an "I currently work here" box. The end date is optional
- Up and down buttons to reorder entries, and a section order list in Settings
- Undo button after clearing the form (8 seconds)
- Name and city only take letters, and email and phone are checked
- Location is a city plus a country from a list
- AI Enhance errors tell you to open Settings if the key is missing or wrong

### v1.4 (simplified)
- Rewrote CraftCV.js and CraftCV.css in a plainer style: shorter names, short comments, fewer helper functions
- The menu button now opens the Settings page directly (the side drawer is gone)
- Your last session comes back by itself when you open the page (no restore button anymore). Clear Form + Undo is how you start over
- Removed: the loading placeholder while enhancing, remembering which cards are collapsed, and support for the old free-text job dates

## What it has
- Live CV preview as you type
- AI-powered text enhancement per section
- Country code phone selector with flags (190+ countries)
- Multiple experience and education entries (add/remove)
- Autosave in the browser, restored when you come back
- Copy CV as formatted plain text to clipboard
- Share via Gmail with pre-filled subject and body
- PDF export via print
- Forest Light and Dark themes, saved across reloads
- English / Arabic interface with right-to-left layout
- Three CV templates and a configurable section order
- Undo after clearing the form
- Inline form validation with per-field error messages
- Browser autofill support
- Personal API key input, stored locally in thes browser only

## Known Issues
- The API key is saved in the browser (`localStorage`) and sent straight from the page to Anthropic. Fine for personal use, but a backend would be safer. That is what the planned FastAPI backend is for.
- A very big photo may not be saved (browser storage limit). You get a message and it only lasts until you reload.

## 📄 License
MIT License
Copyright (c) 2025 Assem Bakr
Permission is hereby granted, free of charge, to any person obtaining a copy of this software to use, copy, modify, merge, publish, or distribute it, subject to the condition that the above copyright notice appears in all copies.

also used ai for foramting pretty obious but this is not the readme so it doesnt count
