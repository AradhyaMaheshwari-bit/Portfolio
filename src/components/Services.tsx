import { Section } from './Section';
import { services } from '../data/services';

const toneClass: Record<string, string> = {
  mint: 'text-[color:var(--color-accent)]',
  azure: 'text-[color:var(--color-accent-2)]',
  violet: 'text-[color:var(--color-accent-3)]',
  amber: 'text-[color:var(--color-accent-amber)]',
};

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I can build"
      title="Areas I work in"
    >
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[color:var(--color-text-dim)]">
        These are the kinds of problems I like working on. Most of my work
        lives at the intersection of data, automation, and small tools — not
        in shipping a full SaaS.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const isFourth = i === 3;
          const isLast = i === services.length - 1;
          const spanClass = isFourth || isLast ? 'lg:col-span-2 lg:col-start-3' : 'lg:col-span-2';
          return (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
              className={
                'surface flex flex-col p-5 transition-colors hover:border-[color:var(--color-border-strong)] ' +
                spanClass
              }
            >
              <h3
                className={
                  'text-base font-semibold ' +
                  (toneClass[s.tone] ?? 'text-[color:var(--color-text)]')
                }
              >
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-dim)]">
                {s.summary}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--color-text-dim)]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-border-strong)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
