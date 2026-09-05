import type { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  /** Override the default vertical padding. Use for sections that need extra room. */
  spacing?: 'default' | 'tight' | 'loose';
};

const spacingClass = {
  default: 'py-14 md:py-20',
  tight: 'py-10 md:py-14',
  loose: 'py-20 md:py-28',
} as const;

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = '',
  spacing = 'default',
}: Props) {
  return (
    <section
      id={id}
      className={
        'scroll-mt-24 mx-auto w-full max-w-6xl px-5 ' +
        spacingClass[spacing] +
        ' ' +
        className
      }
    >
      <header className="mb-8 max-w-2xl md:mb-10">
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
