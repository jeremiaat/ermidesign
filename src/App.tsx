import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { PROJECTS_DATA } from './data/portfolioData';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Brand Identity');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#project/')) {
      const id = window.location.hash.replace('#project/', '').trim();
      const exists = PROJECTS_DATA.some((p) => p.id === id);
      return exists ? id : null;
    }
    return null;
  });

  // Synchronize with URL hash changes (browser Back/Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '').trim();
        const exists = PROJECTS_DATA.some((p) => p.id === id);
        if (exists) {
          setCurrentProjectId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setCurrentProjectId(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const handleOpenProject = (projectId: string) => {
    window.location.hash = `project/${projectId}`;
    setCurrentProjectId(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    window.location.hash = 'projects';
    setCurrentProjectId(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const activeProject = currentProjectId
    ? PROJECTS_DATA.find((p) => p.id === currentProjectId)
    : null;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] selection:bg-[#3B82F6] selection:text-white transition-colors duration-300">
        
        {/* Floating Centered Bottom Navigation Bar */}
        <Navbar
          currentProjectId={activeProject ? activeProject.id : null}
          onNavigateHome={handleNavigateHome}
          onNavigateProject={handleOpenProject}
        />

        {activeProject ? (
          /* ========================================================
             PROJECT DETAIL PAGE
             (Matches Homepage Aesthetic Exactly)
             ======================================================== */
          <ProjectDetailPage
            projectId={activeProject.id}
            onNavigateHome={handleNavigateHome}
            onNavigateProject={handleOpenProject}
            onShowToast={showToast}
          />
        ) : (
          /* ========================================================
             HOMEPAGE SECTIONS
             ======================================================== */
          <>
            {/* Hero Section */}
            <Hero />

            {/* Section 01 Divider */}
            <SectionDivider number="01" label="About" />

            {/* About Section */}
            <About />

            {/* Section 02 Divider */}
            <SectionDivider number="02" label="Expertise" />

            {/* Skills / Design Disciplines Section */}
            <Skills onSelectService={handleSelectService} />

            {/* Section 03 Divider */}
            <SectionDivider number="03" label="Portfolio" />

            {/* Projects / Selected Works Section */}
            <Projects onSelectProject={handleOpenProject} />

            {/* Section 04 Divider */}
            <SectionDivider number="04" label="Contact" />

            {/* Contact Section */}
            <Contact
              prefilledService={selectedService}
              onShowToast={showToast}
            />

            {/* Dark Footer */}
            <Footer />
          </>
        )}

        {/* Notification Toast */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </ThemeProvider>
  );
}
