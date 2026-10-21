import React from 'react';
import { ArrowUp, Instagram, Linkedin, Globe, Dribbble } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-28 md:pb-32 px-6 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#3B82F6] shrink-0">
                <img
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-space text-2xl font-bold tracking-tight">
                  Ermias Studio
                </h4>
                <span className="font-mono-code text-xs text-white/60 uppercase tracking-wider block">
                  Art Direction & Design
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Graphic designer & art director crafting visual narratives and brand identities that leave a lasting impression.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all hover:-translate-y-1"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Behance Custom SVG */}
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all hover:-translate-y-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 7h-7v2h7V7zm-11.5 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9 13.83 9 13s.67-1.5 1.5-1.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15.5H5v-9h5.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.85 1.85.83.46 1.35 1.32 1.35 2.3 0 1.52-1.24 2.75-2.75 2.75z"/>
                </svg>
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all hover:-translate-y-1"
              >
                <Dribbble className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h5 className="font-mono-code text-xs font-semibold uppercase tracking-[0.15em] text-white mb-2">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-sm font-mono-code text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('skills')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h5 className="font-mono-code text-xs font-semibold uppercase tracking-[0.15em] text-white mb-2">
              Services
            </h5>
            <ul className="space-y-2.5 text-sm font-mono-code text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('skills')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Brand Identity
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('skills')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Website Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('skills')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Social Media Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('skills')}
                  className="hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  Artistic Design
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h5 className="font-mono-code text-xs font-semibold uppercase tracking-[0.15em] text-white mb-2">
              Get In Touch
            </h5>
            <ul className="space-y-2.5 text-sm text-zinc-400 font-mono-code">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#3B82F6] transition-colors block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="text-zinc-400">{PERSONAL_INFO.location}</li>
              <li className="text-zinc-400">{PERSONAL_INFO.phone}</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500">
          <p>© {new Date().getFullYear()} Ermias Tesfaye. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#3B82F6] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#3B82F6] cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
