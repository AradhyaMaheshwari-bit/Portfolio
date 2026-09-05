import { profile } from '../data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 mx-auto w-full max-w-6xl px-5 pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%)',
        }}
      />
      <p className="mb-5 inline-flex items-center gap-2 chip">
        <span
          className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]"
          aria-hidden="true"
        />
        {profile.status}
      </p>
      <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] md:text-6xl">
        {profile.role}
        <span className="block text-[color:var(--color-text-dim)]">{profile.tagline}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--color-text-dim)] md:text-lg">
        {profile.shortBio} I build data pipelines, automations, and small applications
        that are honest about what they do and easy to maintain.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-md bg-[color:var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[#0a0a0f] transition-transform hover:-translate-y-0.5"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-2)] px-4 py-2.5 text-sm text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-accent-2)] hover:text-[color:var(--color-accent-2)]"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-[color:var(--color-text-dim)] underline-offset-4 hover:text-[color:var(--color-text)] hover:underline"
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}
