# ForbesFolio

[![Deploy to GitHub Pages](https://github.com/ErickGods/ForbesFolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ErickGods/ForbesFolio/actions/workflows/deploy.yml)
[![CI — Lint & Build](https://github.com/ErickGods/ForbesFolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ErickGods/ForbesFolio/actions/workflows/ci.yml)

> 🌐 **Live:** [erickgods.github.io/ForbesFolio](https://erickgods.github.io/ForbesFolio)

A developer portfolio inspired by Forbes magazine aesthetic, built with React + Vite and deployed via GitHub Pages with a full CI/CD pipeline.

---

## ✨ Features

- 📰 Magazine-style page flip animations (Framer Motion)
- 🎨 Forbes-inspired design with Playfair Display & Inter fonts
- 📱 Fully responsive layout
- ♿ ARIA-compliant navigation and keyboard support
- ⚡ Built with Vite for fast development and optimized builds

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Framer Motion | Animations |
| Vanilla CSS | Styling with custom properties |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Hosting |

## 🚀 CI/CD Pipeline

Every change goes through an automated pipeline:

```
Issue → Branch → PR → CI (Lint + Build) → Review → Merge → Deploy
```

| Workflow | Trigger | Description |
|----------|---------|-------------|
| **CI** | PR to `main` | Runs ESLint + build check |
| **PR Preview** | PR to `main` | Generates downloadable build artifact |
| **Deploy** | Push to `main` | Builds and deploys to GitHub Pages |

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for the full development workflow.

## 📦 Getting Started

```bash
# Clone
git clone https://github.com/ErickGods/ForbesFolio.git
cd ForbesFolio/website

# Install
npm install

# Dev server
npm run dev

# Lint
npm run lint

# Build
npm run build
```

## 📊 What's Inside

- 📊 Data Analysis & Visualization
- ⚙️ Automation with Python
- 💻 Web & App Development
- 🧠 Machine Learning Experiments
- 📱 Power Platform Solutions (Power BI, Power Apps, Power Automate)
- 🗂️ Case Studies & Business Projects

## 🤝 Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines on:
- Branch naming conventions
- Commit message format
- PR process and templates
- CI/CD pipeline details

## 📬 Contact

- **LinkedIn:** [erickpdias](https://www.linkedin.com/in/erickpdias/)
- **GitHub:** [ErickGods](https://github.com/ErickGods)
- **Email:** erickpassosdias@gmail.com

---

Credits: Design inspired by [Forbes](https://forbes.com.br/)