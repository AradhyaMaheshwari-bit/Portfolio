import { profile } from '../data/profile';

const focusAreas = [
  { label: 'Data & analytics' },
  { label: 'Python automation' },
  { label: 'SQL & databases' },
  { label: 'Discord bots' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 mx-auto w-full max-w-6xl px-5 pt-28 pb-20 md:pt-36 md:pb-24"
    >
      {/* Background wash — restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[360px] w-[760px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, color-mix(in oklab, var(--color-border-strong) 70%, transparent), transparent)',
        }}
      />

      <p
        data-reveal
        className="mb-5 inline-flex items-center gap-2 chip"
      >
        <span
          className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]"
          aria-hidden="true"
        />
        {profile.status}
      </p>

      <h1
        data-reveal
        data-reveal-delay="1"
        className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] md:text-6xl"
      >
        I build small, useful software
        <span className="block text-[color:var(--color-text-dim)]">
          that actually does the job.
        </span>
      </h1>

      <p
        data-reveal
        data-reveal-delay="2"
        className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--color-text-dim)] md:text-lg"
      >
        I'm <span className="text-[color:var(--color-text)]">{profile.name}</span>, a BCA student
        working across Python, TypeScript, and SQL. I like the part of software
        where the work <em className="not-italic text-[color:var(--color-text)]">does</em> something —
        cleaning a messy dataset, automating a tedious task, wiring a bot to a
        database so the boring parts run themselves.
      </p>

      <ul
        data-reveal
        data-reveal-delay="3"
        className="mt-7 flex flex-wrap gap-2"
        aria-label="Focus areas"
      >
        {focusAreas.map((f) => (
          <li
            key={f.label}
            className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-3 py-1.5 text-xs text-[color:var(--color-text-dim)]"
          >
            {f.label}
          </li>
        ))}
      </ul>

      <div
        data-reveal
        data-reveal-delay="4"
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="rounded-md bg-[color:var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[#0a0a0f] transition-transform hover:-translate-y-0.5"
        >
          See the work
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
