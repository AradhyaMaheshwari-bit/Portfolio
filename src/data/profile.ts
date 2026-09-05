// Centralized, truthful content for the portfolio site.
// No fabricated clients, metrics, certifications, years of experience, or degrees.

export const profile = {
  name: 'Aradhya Maheshwari',
  initials: 'AM',
  role: 'Python & Data Analytics Developer',
  tagline: 'Automation, SQL & Software Solutions',
  location: 'India',
  email: 'maheshwariaradhya065@gmail.com',
  github: 'https://github.com/AradhyaMaheshwari-bit',
  linkedin: 'https://www.linkedin.com/in/aradhya-maheshwari/',
  status: 'Open to freelance work',
  shortBio:
    'BCA student building practical data and automation tools. I focus on clean code, clear data, and shipped results.',
} as const;

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Me' },
  { href: '#contact', label: 'Contact' },
] as const;
