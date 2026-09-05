import { useState } from 'react';
import { Section } from './Section';
import { profile } from '../data/profile';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initial: FormState = { name: '', email: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const onChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
      if (sent) setSent(false);
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Please tell me your name.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'That email doesn’t look right.';
    if (!form.message.trim()) next.message = 'Tell me a bit about what you need.';
    else if (form.message.trim().length < 12)
      next.message = 'A few more words helps me reply usefully.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Static portfolio — no backend. Open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Tell me what you're working on">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2 space-y-5 text-sm text-[color:var(--color-text-dim)]">
          <p>
            The fastest way to reach me is email. I read every message and reply
            within a day or two.
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-[color:var(--color-text)] underline-offset-4 hover:underline"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[color:var(--color-text)]"
              >
                GitHub: {profile.github.replace('https://', '')}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[color:var(--color-text)]"
              >
                LinkedIn: /in/aradhya-maheshwari
              </a>
            </li>
          </ul>
          <p className="text-xs text-[color:var(--color-text-muted)]">
            This form opens your email client with a pre-filled message. Nothing
            is sent from the site.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="md:col-span-3 surface space-y-4 p-5"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[color:var(--color-text)]">
              Your name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={onChange('name')}
              className="mt-1.5 w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2 text-sm text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-accent)]"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-[color:var(--color-accent-amber)]">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[color:var(--color-text)]">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={onChange('email')}
              className="mt-1.5 w-full rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2 text-sm text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-accent)]"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-[color:var(--color-accent-amber)]">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[color:var(--color-text)]">
              What do you need?
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={onChange('message')}
              className="mt-1.5 w-full resize-y rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2 text-sm text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-accent)]"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-[color:var(--color-accent-amber)]">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-[color:var(--color-text-muted)]" role="status" aria-live="polite">
              {sent ? 'Opened your email client. Send it from there to reach me.' : ' '}
            </p>
            <button
              type="submit"
              className="rounded-md bg-[color:var(--color-accent)] px-4 py-2 text-sm font-medium text-[#0a0a0f] transition-transform hover:-translate-y-0.5"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
