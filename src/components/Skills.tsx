import { Section } from './Section';
import { skillGroups, type Strength } from '../data/skills';

const strengthMeta: Record<Strength, { label: string; className: string }> = {
  strong: {
    label: 'Shipped',
    className: 'text-[color:var(--color-accent)] border-[color:var(--color-accent)]/40',
  },
  moderate: {
    label: 'Used in projects',
    className: 'text-[color:var(--color-accent-2)] border-[color:var(--color-accent-2)]/40',
  },
  learning: {
    label: 'Currently learning',
    className: 'text-[color:var(--color-accent-amber)] border-[color:var(--color-accent-amber)]/40',
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with — and how honestly I can say so"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="surface p-5">
            <header className="mb-4 flex items-baseline justify-between gap-3">
              <h3 className="text-base font-semibold text-[color:var(--color-text)]">
                {group.title}
              </h3>
              <p className="text-xs text-[color:var(--color-text-muted)]">{group.blurb}</p>
            </header>
            <ul className="space-y-3">
              {group.items.map((item) => {
                const meta = strengthMeta[item.strength];
                return (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 border-b border-[color:var(--color-border)] pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[color:var(--color-text)]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--color-text-muted)]">
                        {item.note}
                      </p>
                    </div>
                    <span
                      className={
                        'shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ' +
                        meta.className
                      }
                    >
                      {meta.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
