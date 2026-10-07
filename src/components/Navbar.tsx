import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Check, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.identity.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-stone-50/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single Wordmark Element */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-stone-900 hover:text-amber-700 transition-colors whitespace-nowrap"
        >
          {PORTFOLIO_DATA.identity.fullName}
        </a>

        {/* Zone 2: Clean 5-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-stone-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Resume button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200/80 border border-stone-300/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
            title="Preview and print clean one-page resume"
          >
            <FileText className="w-3.5 h-3.5 text-stone-600" />
            Resume
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs focus:outline-hidden focus:ring-2 focus:ring-stone-900/40"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResume}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 focus:outline-hidden focus:ring-2 focus:ring-stone-400"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-stone-100 hover:text-stone-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 border border-stone-300 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              View & Print Resume
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-lg"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5 text-stone-500" />}
                {copiedEmail ? 'Email Copied' : 'Copy Email'}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-stone-600 bg-stone-100 rounded-lg"
              >
                Quality Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
