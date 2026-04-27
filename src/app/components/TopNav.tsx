'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: 'https://blog.bhoomild.com', external: true },
];

export default function TopNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-white/92 shadow-[0_10px_35px_rgba(18,32,54,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-white/72 backdrop-blur-md'
      }`}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Link href="/" aria-label="Bhoomil Dayani - Cloud DevOps Engineer" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-black text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)]">
            BD
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black text-foreground">Bhoomil Dayani</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">Cloud DevOps Engineer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-bold text-gray-medium transition-colors hover:bg-primary/10 hover:text-primary-dark"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-bold transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary-dark'
                    : 'text-gray-medium hover:bg-primary/10 hover:text-primary-dark'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-black text-white shadow-[0_10px_26px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-gray-dark transition-colors hover:border-primary/35 hover:text-primary-dark lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="border-t border-line bg-white/96 px-5 py-4 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="grid gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="flex rounded-md px-3 py-3 text-sm font-bold text-gray-dark transition-colors hover:bg-primary/10 hover:text-primary-dark"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex rounded-md px-3 py-3 text-sm font-bold transition-colors ${
                          isActive(link.href)
                            ? 'bg-primary/10 text-primary-dark'
                            : 'text-gray-dark hover:bg-primary/10 hover:text-primary-dark'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center rounded-md bg-primary px-3 py-3 text-sm font-black text-white"
                  >
                    Start a Project
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
