import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-sm text-[color:var(--color-text-muted)] md:flex-row md:items-center">
        <p>
          © {year} {profile.name}. Built with React, Vite, and Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[color:var(--color-text)]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[color:var(--color-text)]"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[color:var(--color-text)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
