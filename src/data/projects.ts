// Project data — only projects that actually exist in the user's repositories.
// No fabricated metrics or awards.

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  repo?: string;
  status: 'shipped' | 'in-progress';
};

export const projects: Project[] = [
  {
    title: 'DCRP-Darkweb Discord Bot',
    summary:
      'A custom Discord bot with a registration system, anonymized messaging, moderation, and a staff dashboard. Uses Discord.js v14, Prisma, and PostgreSQL.',
    stack: ['TypeScript', 'Node.js', 'Discord.js v14', 'Prisma', 'PostgreSQL', 'Vitest'],
    highlights: [
      'Designed 3-table Prisma schema with relations and an enum for user status.',
      'Race-safe tag registration using Prisma P2002 error handling.',
      'Extensible moderation rule chain and TTL reply-target cache.',
      'Unit tests including a concurrency stress test for tag registration.',
    ],
    repo: 'https://github.com/AradhyaMaheshwari-bit/DCRP-Discord-Darkweb-Bot',
    status: 'shipped',
  },
  {
    title: 'DevSphere User Analytics',
    summary:
      'A Python data pipeline that ingests a DevSphere user dataset, cleans it, and produces structured outputs ready for analysis or visualization.',
    stack: ['Python', 'pandas', 'NumPy', 'JSON pipelines'],
    highlights: [
      'Modular cleaning layer (modules/cleaning.py) separate from entrypoint.',
      'README with a pipeline diagram, badges, and a roadmap section.',
      'Designed to be reusable: drop in a new dataset, get cleaned output.',
    ],
    repo: 'https://github.com/AradhyaMaheshwari-bit/devsphere-user-analytics',
    status: 'shipped',
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
    repo: 'https://github.com/AradhyaMaheshwari-bit',
    status: 'shipped',
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
    status: 'in-progress',
  },
];
