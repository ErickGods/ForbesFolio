# ForbesFolio

[![Deploy](https://github.com/ErickGods/ForbesFolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ErickGods/ForbesFolio/actions/workflows/deploy.yml)
[![CI](https://github.com/ErickGods/ForbesFolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ErickGods/ForbesFolio/actions/workflows/ci.yml)

> 🌐 [erickgods.github.io/ForbesFolio](https://erickgods.github.io/ForbesFolio)

Meu portfólio pessoal com estética inspirada na Forbes, construído com React + Vite e deploy automatizado via GitHub Pages.

## ✨ Features

- 📰 Animação de virar página estilo revista (Framer Motion)
- 🎨 Design Forbes com Playfair Display & Inter
- 📱 Layout responsivo
- ♿ Navegação acessível com suporte a teclado

## 🛠️ Tech Stack

| Tecnologia | Uso |
|-----------|-----|
| React 18 | UI |
| Vite 5 | Build & dev server |
| Framer Motion | Animações |
| Vanilla CSS | Estilos com custom properties |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting |

## 🚀 Pipeline CI/CD

Cada mudança segue o fluxo:

```
Issue → Branch → PR → CI (Lint + Validate + Build) → Merge → Deploy automático
```

| Workflow | Trigger | O que faz |
|----------|---------|-----------|
| **CI** | PR → `main` | Roda ESLint + valida projetos + build |
| **Preview** | PR → `main` | Gera artifact do build para review |
| **Deploy** | Push → `main` | Build + deploy para GitHub Pages |

## 📂 Adicionando um Novo Projeto

1. Abrir Issue com template **"📂 New Project"**
2. Criar branch `feature/add-<nome>`
3. Preencher `projects/<slug>/README.md` (copiar de `_template/`)
4. Adicionar cover image em `website/public/images/projects/`
5. Registrar em `website/src/data/projects.js`
6. Abrir PR → CI valida → Merge → Nova página na revista

## 📦 Dev Local

```bash
cd website
npm install
npm run dev       # Dev server
npm run lint      # ESLint
npm run validate  # Valida dados dos projetos
npm run build     # Build produção
```

## 📬 Contato

- **LinkedIn:** [erickpdias](https://www.linkedin.com/in/erickpdias/)
- **GitHub:** [ErickGods](https://github.com/ErickGods)
- **Email:** erickpassosdias@gmail.com