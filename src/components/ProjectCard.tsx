import type { Project } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article
      data-reveal
      className="surface flex h-full flex-col overflow-hidden p-4 transition-colors hover:border-[color:var(--color-border-strong)]"
    >
      <div className="mb-3">
        <ProjectPreview kind={project.kind} title={project.title} />
      </div>

      <div className="mb-2.5 flex items-center gap-2">
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
      </div>

      <h3 className="text-sm font-semibold text-[color:var(--color-text)]">
        {project.title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--color-text-dim)]">
        {project.summary}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      {project.repo && (
        <div className="mt-auto pt-3 text-sm">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[color:var(--color-accent-2)] hover:text-[color:var(--color-accent)]"
          >
            View on GitHub →
          </a>
        </div>
      )}
    </article>
  );
}
