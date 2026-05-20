# Hopper — Claude Instructions

## Branch Rules

**NEVER push to `main` directly.**

- All work goes on `dev` or a feature branch that merges into `dev`
- `main` is only updated by explicitly merging `dev` into it — and only when the user asks for it
- If a task would require touching `main`, stop and ask the user first

## Workflow

1. Default branch for all development: `dev`
2. Feature branches merge into `dev`, not `main`
3. `dev` → `main` only on user request
