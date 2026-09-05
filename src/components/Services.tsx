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
      eyebrow="Services"
      title="What I offer on Fiverr — five focused gigs"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="surface flex flex-col p-5 transition-colors hover:border-[color:var(--color-border-strong)]"
          >
            <h3
              className={
                'text-base font-semibold ' + (toneClass[s.tone] ?? 'text-[color:var(--color-text)]')
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
        ))}
      </div>
    </Section>
  );
}
