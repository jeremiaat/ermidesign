import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  FolderKanban,
  Layers,
  Mail,
  Sun,
  Moon,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  currentProjectId?: string | null;
  onNavigateHome?: () => void;
  onNavigateProject?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProjectId,
  onNavigateHome,
  onNavigateProject,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isOnHero, setIsOnHero] = useState<boolean>(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Services', href: '#skills', icon: <Layers className="w-5 h-5" /> },
    { id: 'projects', label: 'Work', href: '#projects', icon: <FolderKanban className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
  ];

  // Calculate project indices if in project detail view
  const currentProjectIndex = currentProjectId
    ? PROJECTS_DATA.findIndex((p) => p.id === currentProjectId)
    : -1;
  const prevProject =
    currentProjectIndex > 0
      ? PROJECTS_DATA[currentProjectIndex - 1]
      : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    currentProjectIndex >= 0 && currentProjectIndex < PROJECTS_DATA.length - 1
      ? PROJECTS_DATA[currentProjectIndex + 1]
      : PROJECTS_DATA[0];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.getElementById('home');

      if (heroElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        setIsOnHero(scrollY < heroBottom - 120);
      } else {
        // If on project detail page
        setIsOnHero(scrollY < 400);
      }

      // Scroll spy logic for homepage
      if (!currentProjectId) {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        let current = 'home';

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 150) {
              current = sectionId;
            }
          }
        }

        if (scrollY < 120) {
          current = 'home';
        }

        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentProjectId]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (currentProjectId && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 20,
            behavior: 'smooth',
          });
        }
      }, 100);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center items-center pointer-events-none px-4">
      <nav
        className={`pointer-events-auto flex items-center justify-center gap-1.5 px-3 py-2 rounded-full shadow-2xl transition-all duration-300 floating-dock-anim border max-w-[95vw] ${
          isOnHero
            ? 'bg-white text-zinc-900 border-white/60 shadow-black/40'
            : 'bg-[var(--nav-bg)] text-[var(--nav-text)] border-[var(--nav-border)] shadow-black/30'
        }`}
        aria-label="Main Floating Navigation"
      >
        {/* Brand Logo Avatar */}
        <button
          type="button"
          onClick={() => {
            if (currentProjectId && onNavigateHome) {
              onNavigateHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className={`w-10 h-10 rounded-full overflow-hidden border-2 mr-1 shrink-0 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
            isOnHero ? 'border-zinc-900' : 'border-[var(--primary-accent)]'
          }`}
          title={currentProjectId ? 'Return to Homepage' : 'Scroll to Top'}
          aria-label="Ermias Tesfaye Home"
        >
          <img
            src={PERSONAL_INFO.avatarImage}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover"
          />
        </button>

        {/* Dynamic Nav Menu Icons */}
        {currentProjectId ? (
          /* Project Detail View Navigation Controls */
          <div className="flex items-center gap-1 font-mono-code text-xs">
            {/* Back to Works Button */}
            <div className="relative">
              <button
                type="button"
                onClick={onNavigateHome}
                onMouseEnter={() => setHoveredItem('back')}
                onMouseLeave={() => setHoveredItem(null)}
                className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isOnHero
                    ? 'text-zinc-700 hover:text-zinc-950 hover:bg-black/5'
                    : 'text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-white/10'
                }`}
                aria-label="Back to All Works"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              {hoveredItem === 'back' && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium font-mono-code rounded bg-black text-white pointer-events-none whitespace-nowrap shadow-lg border border-white/20 animate-in fade-in zoom-in-95 duration-150">
                  All Works
                </div>
              )}
            </div>

            {/* Prev Project */}
            {onNavigateProject && prevProject && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => onNavigateProject(prevProject.id)}
                  onMouseEnter={() => setHoveredItem('prev')}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isOnHero
                      ? 'text-zinc-700 hover:text-zinc-950 hover:bg-black/5'
                      : 'text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-white/10'
                  }`}
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {hoveredItem === 'prev' && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium font-mono-code rounded bg-black text-white pointer-events-none whitespace-nowrap shadow-lg border border-white/20 animate-in fade-in zoom-in-95 duration-150">
                    Prev: {prevProject.title.split(' ')[0]}
                  </div>
                )}
              </div>
            )}

            {/* Current Project Badge */}
            <div className="px-2 py-1 text-[11px] font-semibold text-[#3B82F6] whitespace-nowrap hidden sm:block">
              {PROJECTS_DATA[currentProjectIndex]?.num || '01'}/04
            </div>

            {/* Next Project */}
            {onNavigateProject && nextProject && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => onNavigateProject(nextProject.id)}
                  onMouseEnter={() => setHoveredItem('next')}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isOnHero
                      ? 'text-zinc-700 hover:text-zinc-950 hover:bg-black/5'
                      : 'text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-white/10'
                  }`}
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                {hoveredItem === 'next' && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium font-mono-code rounded bg-black text-white pointer-events-none whitespace-nowrap shadow-lg border border-white/20 animate-in fade-in zoom-in-95 duration-150">
                    Next: {nextProject.title.split(' ')[0]}
                  </div>
                )}
              </div>
            )}

            {/* Quick Contact Link */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('project-contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredItem('inquire')}
                onMouseLeave={() => setHoveredItem(null)}
                className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isOnHero
                    ? 'text-zinc-700 hover:text-zinc-950 hover:bg-black/5'
                    : 'text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-white/10'
                }`}
                aria-label="Inquire"
              >
                <Mail className="w-5 h-5" />
              </button>
              {hoveredItem === 'inquire' && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium font-mono-code rounded bg-black text-white pointer-events-none whitespace-nowrap shadow-lg border border-white/20 animate-in fade-in zoom-in-95 duration-150">
                  Inquire
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Homepage Navigation Items */
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              let btnClass = '';
              if (isOnHero) {
                btnClass = isActive
                  ? 'bg-zinc-950 text-white shadow-md'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/5';
              } else {
                btnClass = isActive
                  ? 'bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] shadow-md'
                  : 'text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-white/10';
              }

              return (
                <div key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-200 ${btnClass}`}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>

                  {hoveredItem === item.id && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium font-mono-code rounded bg-black text-white pointer-events-none whitespace-nowrap shadow-lg border border-white/20 animate-in fade-in zoom-in-95 duration-150">
                      {item.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div
          className={`h-5 w-[1px] mx-1 ${
            isOnHero ? 'bg-zinc-300' : 'bg-white/20'
          }`}
        />

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
            isOnHero
              ? 'text-zinc-700 hover:text-zinc-950 hover:bg-black/5'
              : 'text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:bg-white/10'
          }`}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          aria-label="Toggle theme mode"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-zinc-800 dark:text-zinc-200 transition-transform hover:rotate-12" />
          ) : (
            <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45" />
          )}
        </button>
      </nav>
    </div>
  );
};
