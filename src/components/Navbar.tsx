import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/profile';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-colors duration-200 ' +
        (scrolled
          ? 'backdrop-blur-md bg-[color:var(--color-bg)]/80 border-b border-[color:var(--color-border)]'
          : 'bg-transparent')
      }
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-2)] text-[color:var(--color-accent)]"
          >
            {profile.initials}
          </span>
          <span className="text-[color:var(--color-text)]">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[color:var(--color-text-dim)] transition-colors hover:text-[color:var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-2)] px-3.5 py-1.5 text-sm text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden grid h-9 w-9 place-items-center rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-2)]"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 bg-[color:var(--color-text-dim)]" />
            <span className="block h-0.5 w-4 bg-[color:var(--color-text-dim)]" />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-block rounded-md border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface-2)] px-3.5 py-1.5 text-sm text-[color:var(--color-text)]"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
