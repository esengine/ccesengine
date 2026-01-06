# Contributing to CCESEngine

Thank you for your interest in contributing to CCESEngine! This document provides guidelines and standards for contributing to this project.

## Table of Contents

- [Branch Strategy](#branch-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)
- [Development Setup](#development-setup)

## Branch Strategy

We use a simplified Git Flow model:

```
main        ← Production-ready code, protected
  ↑
develop     ← Integration branch for features
  ↑
feature/*   ← New features (e.g., feature/add-physics)
bugfix/*    ← Bug fixes (e.g., bugfix/fix-memory-leak)
hotfix/*    ← Urgent production fixes (branch from main)
```

### Branch Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<description>` | `feature/webgpu-optimization` |
| Bug Fix | `bugfix/<issue-id>-<description>` | `bugfix/123-fix-texture-loading` |
| Hotfix | `hotfix/<description>` | `hotfix/critical-crash-fix` |
| Release | `release/<version>` | `release/1.1.0` |

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, semicolons, etc.) |
| `refactor` | Code refactoring (no feature/fix) |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, tooling |

### Examples

```bash
feat(gfx): add WebGPU compute shader support

fix(audio): resolve memory leak in AudioSource component

refactor(core): remove deprecated v3.x APIs

chore(deps): update TypeScript to 5.0
```

## Code Style

### TypeScript Guidelines

1. **Use TypeScript strict mode** - All code must pass strict type checking
2. **Explicit types** - Prefer explicit type annotations over inference for public APIs
3. **No `any`** - Avoid `any` type; use `unknown` if type is truly unknown
4. **Readonly** - Use `readonly` for properties that shouldn't be modified

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Classes | PascalCase | `RenderPipeline` |
| Interfaces | PascalCase with `I` prefix (optional) | `IRenderable` |
| Functions | camelCase | `createBuffer()` |
| Variables | camelCase | `vertexCount` |
| Constants | UPPER_SNAKE_CASE | `MAX_TEXTURE_SIZE` |
| Private members | underscore prefix | `_internalState` |
| Files | kebab-case | `render-pipeline.ts` |

### Code Quality Rules

- No `console.log` in production code (use debug utilities)
- No commented-out code in commits
- Maximum file length: 500 lines (prefer smaller, focused modules)
- Maximum function length: 50 lines
- Always handle errors appropriately

## Pull Request Process

### Before Submitting

1. **Create issue first** - Discuss significant changes before implementing
2. **Branch from develop** - Create feature/bugfix branch from `develop`
3. **Run tests** - Ensure all tests pass locally
4. **Build check** - Run `npm run build` successfully
5. **Self-review** - Review your own code before requesting review

### PR Requirements

- [ ] Descriptive title following commit convention
- [ ] Link to related issue(s)
- [ ] Summary of changes
- [ ] Test plan or steps to verify
- [ ] Screenshots (for UI changes)
- [ ] No merge conflicts with `develop`

### PR Template

```markdown
## Summary
Brief description of changes

## Related Issues
Fixes #123

## Changes
- Change 1
- Change 2

## Test Plan
- [ ] Test case 1
- [ ] Test case 2

## Screenshots (if applicable)
```

### Review Process

1. At least 1 approval required
2. All CI checks must pass
3. No unresolved conversations
4. Squash merge to develop

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/esengine/ccesengine.git
cd ccesengine

# Install dependencies
npm install

# Build the engine
npm run build

# Run tests
npm test
```

### Useful Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build engine (minified + declarations) |
| `npm run build:dev` | Build for development |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint |

## Questions?

If you have questions, please open an issue with the `question` label.

---

Thank you for contributing to CCESEngine!
