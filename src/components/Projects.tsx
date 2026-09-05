import { Section } from './Section';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { featuredProjects, otherProjects } from '../data/projects';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I have actually built and shipped"
    >
      <div className="space-y-5">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.title} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      {otherProjects.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            Other work
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
