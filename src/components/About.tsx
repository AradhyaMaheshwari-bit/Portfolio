import { Section } from './Section';

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A pragmatic builder, not a brand">
      <div className="grid gap-8 md:grid-cols-3">
        <div data-reveal className="md:col-span-2 space-y-4 text-[color:var(--color-text-dim)] leading-relaxed">
          <p>
            I'm a BCA student who likes the part of software where the work actually
            does something useful — cleaning a messy dataset, automating a tedious
            task, or wiring a bot to a database so the boring parts run themselves.
          </p>
          <p>
            I work primarily in <span className="text-[color:var(--color-text)]">Python</span> for
            data and automation, and{' '}
            <span className="text-[color:var(--color-text)]">TypeScript / Node.js</span>{' '}
            for backend and tooling. I keep my projects small enough that I can
            explain every file in them.
          </p>
          <p>
            This portfolio is part of that practice — I built it myself with Vite,
            React, TypeScript, and Tailwind. The Skills and Projects sections are
            honest about what I've actually shipped, not what I'd like to ship.
          </p>
        </div>
        <aside data-reveal data-reveal-delay="1" className="surface p-5">
          <h3 className="text-sm font-semibold text-[color:var(--color-text)]">Quick facts</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[color:var(--color-text-muted)]">Based in</dt>
              <dd className="text-[color:var(--color-text-dim)]">India</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[color:var(--color-text-muted)]">Studying</dt>
              <dd className="text-[color:var(--color-text-dim)]">BCA</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[color:var(--color-text-muted)]">Focus</dt>
              <dd className="text-[color:var(--color-text-dim)]">Data &amp; automation</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[color:var(--color-text-muted)]">Available for</dt>
              <dd className="text-[color:var(--color-text-dim)]">Freelance</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
