import { Section } from './Section';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I have actually built and shipped"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group surface flex flex-col p-5 transition-colors hover:border-[color:var(--color-border-strong)]"
          >
            <header className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-[color:var(--color-text)]">
                {p.title}
              </h3>
              <span
                className={
                  'shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ' +
                  (p.status === 'shipped'
                    ? 'border-[color:var(--color-accent)]/40 text-[color:var(--color-accent)]'
                    : 'border-[color:var(--color-accent-amber)]/40 text-[color:var(--color-accent-amber)]')
                }
              >
                {p.status === 'shipped' ? 'Shipped' : 'In progress'}
              </span>
            </header>
            <p className="text-sm leading-relaxed text-[color:var(--color-text-dim)]">
              {p.summary}
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--color-text-dim)]">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent-2)]"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            <footer className="mt-5 flex items-center gap-4 pt-3 text-sm">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[color:var(--color-accent-2)] hover:text-[color:var(--color-accent)]"
                >
                  View on GitHub →
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
