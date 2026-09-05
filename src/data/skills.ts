// Skills derived from the actual evidence audit.
// Each skill lists an evidence strength: strong | moderate | learning
// (so the site reflects reality and not aspirations).

export type Strength = 'strong' | 'moderate' | 'learning';

export type Skill = {
  name: string;
  strength: Strength;
  note: string;
};

export type SkillGroup = {
  title: string;
  blurb: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Core',
    blurb: 'Primary working languages.',
    items: [
      { name: 'Python', strength: 'strong', note: 'Data work, automation scripts, small apps.' },
      { name: 'SQL', strength: 'strong', note: 'Queries, joins, schema reasoning (used with Prisma & raw).' },
      { name: 'TypeScript', strength: 'moderate', note: 'Used across this site and the DCRP bot project.' },
      { name: 'JavaScript (Node.js)', strength: 'moderate', note: 'Discord bot backend, scripts.' },
    ],
  },
  {
    title: 'Data & Analytics',
    blurb: 'Cleaning, analysis, and presentation.',
    items: [
      { name: 'pandas, NumPy', strength: 'strong', note: 'ETL, aggregations, dataset shaping.' },
      { name: 'Matplotlib, Seaborn', strength: 'moderate', note: 'Charts and visual summaries.' },
      { name: 'Data cleaning pipelines', strength: 'strong', note: 'JSON → cleaned structured output.' },
    ],
  },
  {
    title: 'Backend & Tooling',
    blurb: 'Pragmatic backend and dev setup.',
    items: [
      { name: 'Prisma ORM', strength: 'strong', note: 'Schema design, relations, migration workflow.' },
      { name: 'PostgreSQL basics', strength: 'moderate', note: 'Schema, queries, simple joins.' },
      { name: 'Discord.js (v14)', strength: 'strong', note: 'Commands, modals, buttons, interactions.' },
      { name: 'Vitest', strength: 'moderate', note: 'Unit tests including a concurrency test.' },
    ],
  },
  {
    title: 'Currently Learning',
    blurb: 'Stretched by real projects.',
    items: [
      { name: 'React + Vite', strength: 'learning', note: 'You are looking at it. This site is the practice.' },
      { name: 'Tailwind CSS v4', strength: 'learning', note: 'Theme tokens, utility-first workflow.' },
      { name: 'Web scraping', strength: 'learning', note: 'Small, polite crawlers when permitted.' },
    ],
  },
];
