// Project data — only projects that actually exist in the user's repositories.
// No fabricated metrics or awards.
//
// `featured` controls layout: true = full visual treatment with preview, false = compact card.
// `kind` declares the placeholder preview style to render until real assets are added.

export type ProjectKind = 'bot' | 'data' | 'app' | 'web';

export type Project = {
  title: string;
  /** One-line description shown everywhere. */
  summary: string;
  /** Longer, "why it exists" copy shown only on featured layouts. */
  context?: string;
  stack: string[];
  highlights: string[];
  repo?: string;
  status: 'shipped' | 'in-progress';
  featured: boolean;
  kind: ProjectKind;
  /** Optional role/period — only include if accurate. */
  role?: string;
};

export const projects: Project[] = [
  {
    title: 'DCRP-Darkweb Discord Bot',
    summary:
      'A custom Discord bot with a registration system, anonymized messaging, moderation, and a staff dashboard. Uses Discord.js v14, Prisma, and PostgreSQL.',
    context:
      'A community-management bot built around anonymized, tag-based identity. Users register to get a 4-digit tag, exchange messages without exposing their Discord account, and are moderated by staff — all backed by a relational schema and tested core flows.',
    stack: ['TypeScript', 'Node.js', 'Discord.js v14', 'Prisma', 'PostgreSQL', 'Vitest'],
    highlights: [
      '3-table Prisma schema with relations and an enum for user status.',
      'Race-safe tag registration using Prisma P2002 error handling.',
      'Extensible moderation rule chain and a TTL reply-target cache.',
      'Unit tests including a concurrency stress test for tag registration.',
    ],
    repo: 'https://github.com/AradhyaMaheshwari-bit/DCRP-Discord-Darkweb-Bot',
    status: 'shipped',
    featured: true,
    kind: 'bot',
    role: 'Sole developer',
  },
  {
    title: 'DevSphere User Analytics',
    summary:
      'A Python data pipeline that ingests a DevSphere user dataset, cleans it, and produces structured outputs ready for analysis or visualization.',
    context:
      'A small, focused analytics project. The point is to take a raw dataset, apply a reproducible cleaning pass, and produce a clean output others (or future me) can build on. Modularity is deliberate: cleaning logic lives in its own module, separate from the entrypoint.',
    stack: ['Python', 'pandas', 'NumPy', 'JSON pipelines'],
    highlights: [
      'Modular cleaning layer (modules/cleaning.py) separate from the entrypoint.',
      'README with a pipeline diagram, badges, and a roadmap section.',
      'Designed to be reusable: drop in a new dataset, get cleaned output.',
    ],
    repo: 'https://github.com/AradhyaMaheshwari-bit/devsphere-user-analytics',
    status: 'shipped',
    featured: true,
    kind: 'data',
    role: 'Sole developer',
  },
  {
    title: 'Python Simple Calculator (Tkinter)',
    summary:
      'A small desktop calculator GUI built with Tkinter to practice event-driven Python and a clean UI layout.',
    stack: ['Python', 'Tkinter'],
    highlights: [
      'Event-driven UI with a clear separation of display and state.',
      'Demonstrates basics of desktop app structure in Python.',
    ],
    repo: 'https://github.com/AradhyaMaheshwari-bit/python-simple-calculator',
    status: 'shipped',
    featured: false,
    kind: 'app',
  },
  {
    title: 'This Portfolio Site',
    summary:
      'The site you are reading. Built with Vite, React 19, TypeScript, and Tailwind CSS v4 with a dark, accessible theme.',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS v4'],
    highlights: [
      'No framework bloat — single-page, data-driven from /src/data.',
      'Dark professional theme with semantic color tokens.',
      'Mobile-first, keyboard-navigable, and accessible contrast.',
    ],
    repo: 'https://github.com/AradhyaMaheshwari-bit/Portfolio',
    status: 'shipped',
    featured: false,
    kind: 'web',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
