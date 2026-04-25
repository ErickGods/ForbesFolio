# Contributing to ForbesFolio

Thank you for your interest in contributing to ForbesFolio! This guide will help you understand our development workflow and CI/CD pipeline.

## 📋 Table of Contents

- [Development Workflow](#development-workflow)
- [Getting Started](#getting-started)
- [Branch Strategy](#branch-strategy)
- [Commit Conventions](#commit-conventions)
- [Pull Request Process](#pull-request-process)
- [CI/CD Pipeline](#cicd-pipeline)
- [Code Quality](#code-quality)

## 🔄 Development Workflow

```
1. Open Issue    →  Describe the work to be done
2. Create Branch →  Branch from main
3. Develop       →  Write code, run lint locally
4. Open PR       →  Fill the PR template
5. CI Pipeline   →  Automated lint + build checks
6. Review        →  Code review + preview build
7. Merge         →  Squash merge to main
8. Deploy        →  Automatic deploy to GitHub Pages
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- [npm](https://www.npmjs.com/) v9 or later
- [Git](https://git-scm.com/)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/ErickGods/ForbesFolio.git
cd ForbesFolio/website

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 🌿 Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to GitHub Pages |
| `feature/*` | New features (e.g. `feature/add-skills-section`) |
| `fix/*` | Bug fixes (e.g. `fix/mobile-nav-overflow`) |
| `docs/*` | Documentation changes |
| `style/*` | Visual/CSS changes |
| `refactor/*` | Code restructuring |
| `ci/*` | CI/CD pipeline changes |

### Creating a Branch

```bash
# Always branch from main
git checkout main
git pull origin main

# Create your branch
git checkout -b feature/your-feature-name
```

## 💬 Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | CSS/formatting changes (no logic) |
| `refactor` | Code restructuring |
| `perf` | Performance improvement |
| `test` | Adding or fixing tests |
| `ci` | CI/CD pipeline changes |
| `chore` | Maintenance tasks |

### Examples

```bash
feat(hero): add particle animation to background
fix(nav): resolve mobile menu overflow issue
docs(readme): update badge links
style(about): improve section spacing on tablet
ci(actions): add build cache step
```

## 🔀 Pull Request Process

1. **Open an Issue** first to describe the intended change
2. **Create a branch** following the naming convention
3. **Make your changes** and commit using conventional commits
4. **Run checks locally**:
   ```bash
   cd website
   npm run lint      # Ensure no lint errors
   npm run build     # Ensure build passes
   ```
5. **Push and open a PR** to `main`
6. **Fill out the PR template** completely
7. Wait for **CI checks** to pass
8. Request a **code review**
9. Once approved, **squash and merge**

## ⚙️ CI/CD Pipeline

Our pipeline uses GitHub Actions with three workflows:

### 1. CI — Lint & Build (`ci.yml`)

**Triggers:** Every PR to `main` that touches `website/` files

```
PR Opened/Updated
    ↓
🔍 Lint (ESLint)
    ↓
🏗️ Build (Vite)
    ↓
✅ Status Check → Required to merge
```

### 2. PR Preview Build (`pr-preview.yml`)

**Triggers:** Every PR to `main` that touches `website/` files

- Generates a production build artifact
- Comments on the PR with a download link
- Reviewers can download and test the build locally

### 3. Deploy to GitHub Pages (`deploy.yml`)

**Triggers:** Every push to `main` (after PR is merged)

```
Push to main
    ↓
📥 Install dependencies
    ↓
🔍 Lint
    ↓
🏗️ Build
    ↓
📦 Upload artifact
    ↓
🚀 Deploy to GitHub Pages
```

### Branch Protection Rules

The `main` branch has the following protections:

- ✅ Require pull request before merging
- ✅ Require status checks to pass (lint + build)
- ✅ Require branches to be up to date before merging

> To configure these, go to **Settings → Branches → Add branch protection rule** for `main`.

## 🧹 Code Quality

### ESLint

We use ESLint with React-specific rules. Run before committing:

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix where possible
```

### Style Guidelines

- Use **vanilla CSS** with CSS custom properties (variables)
- Follow the design system defined in `src/index.css`
- Use `clamp()` for responsive typography
- Prefix component-specific classes with the component name

---

_Last updated: April 2026_
