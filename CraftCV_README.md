# CraftCV
Build polished CVs faster with a modern, smart, and beautifully structured experience.

## 🌟 Overview
CraftCV is a lightweight CV builder designed to help job seekers create professional resumes quickly and confidently. It solves the common problem of formatting and presenting career information clearly by turning a simple form into a polished, live-updating CV preview.

## ✨ Features
- Live CV preview as you type
- AI-powered text enhancement per section
- Country code phone selector with flags
- Multiple experience and education entries (add/remove)
- LocalStorage autosave with session restore banner
- Copy CV as plain text to clipboard
- Share via Gmail with pre-filled subject and body
- PDF export via print
- Color theme selector (Classic Blue, Modern Dark, Minimal White)
- Inline form validation
- Browser autofill support
- Personal API key input, stored locally in the browser only

## 🚀 How to Use
1. Open the app in your browser.
2. Add your Anthropic API key in the settings bar at the top.
3. Fill in your personal details, experience, education, and skills.
4. Use AI Enhance to improve summary or job description text.
5. Export, share, or copy your CV whenever you are ready.

## 🛠️ Tech Stack
HTML5, CSS3 (custom properties, flexbox/grid), Vanilla JavaScript, Anthropic Claude API (claude-sonnet-4-6)

## 📁 File Structure
- index.html — The main entry page that loads the CraftCV experience.
- CraftCV.css — Styles the layout, theme, preview, and print behavior.
- CraftCV.js — Handles live preview, form logic, API integration, autosave, and exports.

## 🔐 API Key Setup
1. Go to platform.claude.com
2. Create a free account (comes with $5 free credits)
3. Generate an API key
4. Paste it into the CraftCV settings bar at the top of the page
5. The key is saved in your browser only, never on any server

## 🧠 Key Code Concepts
- CSS custom properties for theming
- Live DOM updates for real-time preview
- Dynamic cloning of input groups
- localStorage for persistence and session restore
- Fetch API for Claude integration
- encodeURIComponent for Gmail URL building
- window.print() for PDF export

## 🔮 Upgrade Suggestions
- More CV templates and layout options
- LinkedIn profile data import
- Multiple language support (i18n)
- Drag and drop section reordering
- ATS (Applicant Tracking System) score checker
- Photo/avatar upload for the CV header

## 🗂️ Planned Backend (Coming Soon)
- User accounts with saved CVs
- Cloud storage for CV data
- Shareable CV links (e.g. craftcv.app/assem)
- Backend: Node.js with Express or Python with FastAPI
- Database: PostgreSQL or MongoDB
- Auth: JWT or OAuth (Google login)
- Hosting: Vercel, Railway, or Render

## 👨‍💻 Developer
**Assem Bakr**
Built with passion and too much coffee.
Open to feedback, collaboration, and opportunities.

## 📄 License
MIT License
Copyright (c) 2025 Assem Bakr
Permission is hereby granted, free of charge, to any person obtaining a copy of this software to use, copy, modify, merge, publish, or distribute it, subject to the condition that the above copyright notice appears in all copies.
