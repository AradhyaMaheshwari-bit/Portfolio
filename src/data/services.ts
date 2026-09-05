// Service offerings (5 Fiverr-aligned gigs), with explicit, honest deliverables.
// No guaranteed timelines or pricing invented here — those belong on the gig itself.

export type Service = {
  title: string;
  summary: string;
  bullets: string[];
  tone: 'mint' | 'azure' | 'violet' | 'amber';
};

export const services: Service[] = [
  {
    title: 'Data Analytics & Insights',
    summary:
      'Turn raw CSV/JSON/Excel data into a clean, structured dataset and a clear summary you can actually use.',
    bullets: [
      'Cleaning and shaping with pandas + NumPy',
      'Aggregations, group-bys, and basic statistics',
      'Charts and a short written summary of findings',
    ],
    tone: 'mint',
  },
  {
    title: 'Python Automation Scripts',
    summary:
      'Small, reliable scripts that remove repetitive work — file renames, report assembly, scheduled jobs, web hooks.',
    bullets: [
      'Clear input/output and error handling',
      'Readable code with comments where it matters',
      'Easy-to-run setup (venv + a short README)',
    ],
    tone: 'azure',
  },
  {
    title: 'SQL Queries & Data Cleaning',
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
    title: 'Python Debugging & Code Review',
    summary:
      'Stuck on a bug, weird traceback, or messy code? I will read the code, find the cause, and explain the fix in plain language.',
    bullets: [
      'Root-cause explanation, not just a patch',
      'Suggestions for tests that would have caught it',
      'Light refactor recommendations',
    ],
    tone: 'amber',
  },
  {
    title: 'Discord Bots (Custom)',
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
