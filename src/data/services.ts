// Areas of technical capability — not Fiverr gigs. Honest, no fabricated results.

export type Service = {
  title: string;
  summary: string;
  bullets: string[];
  tone: 'mint' | 'azure' | 'violet' | 'amber';
};

export const services: Service[] = [
  {
    title: 'Data analytics & insights',
    summary:
      'Turn raw CSV/JSON/Excel into a clean, structured dataset and a short summary you can actually use.',
    bullets: [
      'Cleaning and shaping with pandas + NumPy',
      'Aggregations, group-bys, and basic statistics',
      'Charts and a written summary of findings',
    ],
    tone: 'mint',
  },
  {
    title: 'Python development & automation',
    summary:
      'Small, reliable scripts and tools that remove repetitive work — file renames, report assembly, scheduled jobs, web hooks.',
    bullets: [
      'Clear input/output and error handling',
      'Readable code with comments where it matters',
      'Easy-to-run setup (venv + a short README)',
    ],
    tone: 'azure',
  },
  {
    title: 'SQL queries & data modeling',
    summary:
      'Write and review SQL, design or fix schemas, and clean messy data in a database without breaking what works.',
    bullets: [
      'Query writing, optimization, and review',
      'Prisma or raw SQL — your call',
      'Documentation for non-technical teammates',
    ],
    tone: 'violet',
  },
  {
    title: 'Python debugging & code review',
    summary:
      'Stuck on a bug, a weird traceback, or messy code? I will read the code, find the cause, and explain the fix in plain language.',
    bullets: [
      'Root-cause explanation, not just a patch',
      'Suggestions for tests that would have caught it',
      'Light refactor recommendations',
    ],
    tone: 'amber',
  },
  {
    title: 'Discord bots (custom)',
    summary:
      'Custom Discord.js bots for moderation, registration, dashboards, and structured community workflows.',
    bullets: [
      'Slash commands, buttons, and modals',
      'Prisma + PostgreSQL or SQLite',
      'Tested core flows (Vitest)',
    ],
    tone: 'mint',
  },
];
