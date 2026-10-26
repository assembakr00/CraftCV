# CraftCV https://assembakr00.github.io/CraftCV/
Build polished CVs faster with a modern, smart, and beautifully structured experience bec some kid dev decdied to do a site for u for that :)

## 🌟 Overview
CraftCV is a lightweight CV builder designed to help job seekers create professional resumes quickly and confidently. It solves the common problem of formatting and presenting career information clearly by turning a simple form into a polished, live-updating CV preview — all in the browser, with zero setup and no backend required (for now).

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


##  How to Use
1. Open the app in your browser.
2. (Optional) Add your API key in the settings bar at the top to enable AI Enhance.
3. Fill in your personal details, experience, education, projects, and skills.
4. Use AI Enhance on any section to polish your text with your LLM.
5. Watch the live preview update on the right as you type.
6. Export, share, or copy your CV whenever you are ready.

## Known Issues
- **Test Connection is a placeholder** — it currently only checks that the key string is a plausible length, it does not verify the key against the Anthropic API yet.
- **Demo Mode is not fully wired up** — the toggle saves its state and disables the key input, but AI Enhance still requires a saved API key. "No API key required" is currently inaccurate.
- **Avatar uploads aren't quota-checked** — a large photo can silently fail to save if it pushes `localStorage` past its size limit; there's no error message yet.
- **API key is stored client-side and used directly from the browser** — fine for personal/local use, but it means the key lives in `localStorage` and is sent straight to Anthropic from the page. The planned FastAPI backend (below) would move this server-side.


## Demo Link
-https://assembakr00.github.io/CraftCV/

##  Developer
**Assem Bakr**
Built with passion and too much error oh and dry humor too

also NOTE: u have extradocs,md file in the projects check it out if u like to see details and formal nerdy stuff and what i did in each version

## 📄 License
MIT License
Copyright (c) 2025 Assem Bakr
Permission is hereby granted, free of charge, to any person obtaining a copy of this software to use, copy, modify, merge, publish, or distribute it, subject to the condition that the above copyright notice appears in all copies.
