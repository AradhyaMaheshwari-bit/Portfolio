import type { Project } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';

type Props = {
  project: Project;
  /** On featured layouts the preview can sit on the left (default) or right. */
  reverse?: boolean;
};

export function FeaturedProject({ project, reverse = false }: Props) {
  return (
    <article
      data-reveal
      className="surface relative overflow-hidden p-5 transition-colors hover:border-[color:var(--color-border-strong)] md:p-6"
    >
      <div
        className={
          'grid gap-6 md:grid-cols-2 md:items-center md:gap-7 ' +
          (reverse ? 'md:[&>*:first-child]:order-2' : '')
        }
      >
        <div className="min-w-0">
          <ProjectPreview kind={project.kind} title={project.title} />
        </div>

        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2">
            <span
              className={
                'rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ' +
                (project.status === 'shipped'
                  ? 'border-[color:var(--color-accent)]/40 text-[color:var(--color-accent)]'
                  : 'border-[color:var(--color-accent-amber)]/40 text-[color:var(--color-accent-amber)]')
              }
            >
              {project.status === 'shipped' ? 'Shipped' : 'In progress'}
            </span>
            {project.role && (
              <span className="text-[10px] uppercase tracking-wider text-[color:var(--color-text-muted)]">
                {project.role}
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-text)] md:text-2xl">
            {project.title}
          </h3>

          {project.context && (
            <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-text-dim)]">
              {project.context}
            </p>
          )}

          <ul className="mt-4 space-y-1.5 text-sm text-[color:var(--color-text-dim)]">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>

          {project.repo && (
            <div className="mt-5 flex items-center gap-4 text-sm">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-2)] px-3 py-1.5 text-[13px] text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3" />
                  <path d="M15 22v-4a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 5.77 5.07 5.07 0 0 0 18.91 2S17.73 1.65 15 3.48a13.38 13.38 0 0 0-7 0C5.27 1.65 4.09 2 4.09 2A5.07 5.07 0 0 0 4 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 19.13V23" />
                </svg>
                Source on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
