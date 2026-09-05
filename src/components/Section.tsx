import type { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className = '' }: Props) {
  return (
    <section
      id={id}
      className={
        'scroll-mt-24 mx-auto w-full max-w-6xl px-5 py-20 md:py-24 ' + className
      }
    >
      <header className="mb-10 max-w-2xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--color-text)] md:text-3xl">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
