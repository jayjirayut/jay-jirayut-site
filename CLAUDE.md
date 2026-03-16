# Personal Site

Personal portfolio and writing site for Jay Jirayut. Built with Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS 3, and MDX for content. Deployed on Vercel.

## Commands

- `npm run dev` — start dev server (clears `.next/` first for clean state)
- `npm run build` — production build
- `npm run lint` — ESLint with zero warnings policy (`--max-warnings=0`)
- `npm run typecheck` — TypeScript type check (`tsc --noEmit`)
- Run `lint` and `typecheck` to verify changes (no test framework configured)

## Architecture

```
app/              Next.js App Router pages and layouts
  layout.tsx      Root layout (fonts, metadata, theme provider, header/footer)
  error.tsx       Global error boundary (client component)
  page.tsx        Homepage
  writing/        Writing index + [slug] dynamic pages + [slug]/opengraph-image
  writing/tags/   Tags index + [tag] filtered pages
  work/           Work index + [slug] dynamic pages
  about/          About page
  now/            /now page
  sitemap.ts      Auto-generated sitemap (includes tag pages)
  rss.xml/        RSS feed route
components/       Reusable UI components
  theme-provider  Client-side theme context (light/dark/system)
  theme-toggle    Footer theme cycle button
lib/
  content.ts      Content loading (Zod-validated frontmatter, tag helpers)
  site.ts         Site config, date formatting, URL utilities
  theme.ts        Theme constants and types
content/
  writing/        MDX essays (blog posts)
  work/           MDX work/project notes
public/           Static assets (logo, favicon)
scripts/          Dev helper scripts
```

## Conventions

### Components & files
- All components are **server components by default**. Add `'use client'` only when state or browser APIs are needed
- File names: `kebab-case.tsx`. Component exports: `PascalCase`
- Imports: use `@/` path alias (e.g., `import { Container } from '@/components/container'`)
- No barrel exports — import directly from component files

### TypeScript
- Strict mode enabled. Use `type` (not `interface`) for props and data shapes
- Example: `type ContainerProps = { children: ReactNode; size?: 'shell' | 'reading' }`

### Styling
- Tailwind utility classes for all styling. No CSS modules or styled-components
- Design tokens defined as CSS custom properties in `app/globals.css`:
  - Colors: `--bg`, `--surface`, `--ink`, `--body`, `--muted`, `--rule`, `--accent`, `--accent-soft`
  - Fonts: `--font-inter` (sans), `--font-jetbrains-mono` (mono)
- Custom Tailwind values in `tailwind.config.ts`: `max-w-reading` (42.5rem), `max-w-shell` (60rem)
- Key CSS classes: `.editorial-prose` (MDX content), `.surface-panel` (bordered card with hover)
- Dark mode: production toggle via `html[data-theme='dark']` attribute, managed by `ThemeProvider`
- Theme supports light/dark/system with localStorage persistence and no FOUC (blocking inline script)

### Routing
- Fully static site — all dynamic routes use `generateStaticParams()` for pre-rendering
- Redirects for old URLs configured in `next.config.mjs`
- No middleware, no API routes beyond RSS/sitemap

## Content System

MDX files in `content/writing/` and `content/work/` with YAML frontmatter:

```yaml
title: "Post Title"
date: "YYYY-MM-DD"
description: "Short description"
tags: ["tag1", "tag2"]
published: true        # only published entries are displayed
featured: true         # optional, shows on homepage
```

Pipeline: `gray-matter` parses frontmatter → Zod validates schema → `compileMDX` (next-mdx-remote/rsc) renders content → `reading-time` calculates read time. Custom MDX element overrides in `components/mdx-components.tsx`. Malformed frontmatter fails at build time with clear Zod errors.

To add content: create a new `.mdx` file in the appropriate `content/` subdirectory.

### Content voice

This is a **personal site**, not a company site. Content should:
- Sound personal and honest — the doubts, the failures, the mess. Not confessional, but real.
- Be direct, slightly skeptical of hype, no jargon. Short sentences. Conviction without arrogance.
- Vary in format — some essays, some narratives, some lessons-learned. No rigid templates.
- Tell stories through a personal lens, not as company case studies
- Acknowledge tradeoffs and limitations. "Show the mess."
- Themes: AI, decisions, constraint, autonomy, building a life vs building a career

## Deployment

- **Platform**: Vercel (auto-deploys from main branch)
- **Analytics**: Vercel Analytics (`@vercel/analytics`) — auto-tracks page views
- **Environment variables**:
  - `NEXT_PUBLIC_SITE_URL` — production URL (falls back to `VERCEL_PROJECT_PRODUCTION_URL`)
  - `NEXT_PUBLIC_CONTACT_EMAIL` — contact email (defaults to `jay.jirayut@gmail.com`)

## Guidelines

- Keep dependencies minimal — do not add libraries without explicit request
- Preserve the editorial, minimalist design tone (substance over flash)
- Respect `prefers-reduced-motion` in any animation work
- Accessibility: use semantic HTML, aria attributes on interactive elements
- Zero ESLint warnings — fix all warnings before considering work complete
- When modifying design tokens, update both light (`html[data-theme='dark']`) and light (`:root`) values in `globals.css`
- Security headers configured in `next.config.mjs` — update CSP if adding external resources
- Each writing post gets a dynamic OG image — update `app/writing/[slug]/opengraph-image.tsx` if changing branding
