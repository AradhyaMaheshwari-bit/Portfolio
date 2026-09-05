import { Section } from './Section';

const points = [
  {
    title: 'Honest scope',
    body: 'I tell you what I can do this week and what I can’t. I won’t pad a quote to look impressive.',
  },
  {
    title: 'Code you can read',
    body: 'I keep projects small enough that I can explain every file. No magic, no leftover hacks.',
  },
  {
    title: 'One layer deep, on purpose',
    body: 'I focus on the part that needs doing — the script, the query, the bot — without dragging in unnecessary frameworks.',
  },
  {
    title: 'Documentation included',
    body: 'Every deliverable comes with a short README so the next person (or future me) can pick it up fast.',
  },
  {
    title: 'Fast feedback loop',
    body: 'Small commits, quick check-ins, no disappearing for a week before a reveal.',
  },
  {
    title: 'You stay in control',
    body: 'Clear status updates, reversible changes, and a working version in your hands as early as possible.',
  },
];

export function WhyMe() {
  return (
    <Section id="why" eyebrow="Why work with me" title="Working with me, in plain terms">
      <ul className="grid gap-3 md:grid-cols-2">
        {points.map((p) => (
          <li key={p.title} className="surface p-5">
            <h3 className="text-sm font-semibold text-[color:var(--color-text)]">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--color-text-dim)]">
              {p.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
