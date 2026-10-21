import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Clock,
  Layers,
  CheckCircle2,
  X,
  Send,
  Share2,
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { SectionDivider } from './SectionDivider';
import { Contact } from './Contact';
import { Footer } from './Footer';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigateHome: () => void;
  onNavigateProject: (id: string) => void;
  onShowToast: (message: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectId,
  onNavigateHome,
  onNavigateProject,
  onShowToast,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === projectId);
  const project = PROJECTS_DATA[projectIndex] || PROJECTS_DATA[0];

  // Calculate next and previous projects
  const prevProject =
    projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    projectIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[projectIndex + 1] : PROJECTS_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast('Project link copied to clipboard!');
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('project-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      
      {/* ========================================================
          1. IMMERSIVE HERO BANNER (Matches Homepage Aesthetic)
          ======================================================== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-end text-left px-6 sm:px-12 pb-16 pt-24 overflow-hidden bg-black select-none">
        {/* Background Project Cover Image */}
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 transform scale-105 transition-transform duration-1000 ease-out"
          style={{ objectPosition: project.coverPosition ?? 'center' }}
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black/80 pointer-events-none" />

        {/* Top Floating Navigation Bar inside Hero */}
        <div className="absolute top-8 left-6 sm:left-12 right-6 sm:right-12 z-20 flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-mono-code text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Works</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer"
              title="Share Project"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Title & Information */}
        <div className="relative z-20 max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-mono-code text-xs uppercase tracking-[0.2em]">
            <span className="text-[#3B82F6] font-bold">PROJECT {project.num}</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          {/* Massive Heading */}
          <h1 className="font-space text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] drop-shadow-lg">
            {project.title}
          </h1>

          {/* Subtitle / Role */}
          <p className="text-lg sm:text-2xl text-white/90 font-light max-w-3xl mb-8 leading-relaxed drop-shadow">
            {project.subCategory}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToContact}
              className="px-6 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <span>Inquire About This Style</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. METADATA STATS BAR
          ======================================================== */}
      <div className="border-y border-[var(--border-color)] bg-[var(--card-bg)] px-6 py-6 transition-colors">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 font-mono-code text-xs sm:text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <User className="w-3.5 h-3.5 text-[#3B82F6]" /> Client
            </span>
            <span className="font-semibold text-[var(--text-main)] text-sm sm:text-base">
              {project.client}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" /> Timeline & Year
            </span>
            <span className="font-semibold text-[var(--text-main)] text-sm sm:text-base">
              {project.timeline || '6 Weeks'} • {project.year}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <Layers className="w-3.5 h-3.5 text-[#3B82F6]" /> Role
            </span>
            <span className="font-semibold text-[var(--text-main)] text-sm sm:text-base">
              {project.role}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <Clock className="w-3.5 h-3.5 text-[#3B82F6]" /> Discipline
            </span>
            <span className="font-semibold text-[#3B82F6] text-sm sm:text-base">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. SECTION 01 — OVERVIEW (BRIEF, APPROACH, OUTCOME)
          ======================================================== */}
      <SectionDivider number="01" label="Overview" />

      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-xl text-[var(--text-main)] leading-relaxed font-light">
                {project.summary}
              </p>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="border-l-2 border-[#3B82F6] pl-4">
                  <p className="font-serif italic text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    "{project.testimonial.text}"
                  </p>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] mt-2 block">
                    {project.testimonial.author} — {project.testimonial.role}
                  </span>
                </div>
              )}
            </div>

            {/* The Brief & The Approach */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-amber-500 block mb-1.5">
                  The Brief
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.challenge}</p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-emerald-500 block mb-1.5">
                  The Approach
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Deliverables
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((deliv, idx) => (
                  <span
                    key={idx}
                    className="font-mono-code text-[11px] px-2.5 py-1 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-main)]"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="font-mono-code text-[11px] px-2.5 py-1 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-main)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Impact */}
          {project.impact && project.impact.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {project.impact.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-muted)] leading-snug">{point}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          4. SECTION 02 — VISUAL GALLERY & SHOWCASE
          ======================================================== */}
      <SectionDivider number="02" label="Gallery" />

      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Gallery Showcase — visual first, one-line caption, details on click */}
          {project.galleryDetails && project.galleryDetails.length > 0 ? (
            <div
              className={`grid grid-cols-1 gap-6 ${
                project.galleryColumns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
              }`}
            >
              {project.galleryDetails.map((item, idx) => (
                <figure
                  key={idx}
                  className={`group relative flex flex-col bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/50 ${
                    item.fullWidth ? 'md:col-span-full' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
                    className="flex flex-col h-full text-left cursor-pointer"
                    aria-label={`View ${item.title} in high resolution`}
                  >
                    {/* Image is sized to its own aspect ratio so the full artwork is always visible, never cropped.
                        Full-width figures render at natural scale for end-to-end page designs. */}
                    <div className="flex items-center justify-center overflow-hidden bg-zinc-950/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-auto h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                          item.fullWidth ? 'w-full' : 'max-w-full max-h-[60vh]'
                        }`}
                        loading="lazy"
                      />
                    </div>

                    <figcaption className="mt-auto px-4 py-3 flex items-center gap-2.5 border-t border-[var(--border-color)]">
                      <span className="font-mono-code text-[11px] text-[#3B82F6] uppercase tracking-wider shrink-0">
                        Fig 0{idx + 1}
                      </span>
                      <span className="font-space text-sm font-semibold text-[var(--text-main)] truncate">
                        {item.title}
                      </span>
                    </figcaption>
                  </button>
                </figure>
              ))}
            </div>
          ) : (
            /* Fallback Gallery Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`group relative overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] shadow-[var(--card-shadow)] cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#3B82F6]/50 ${
                    idx === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} detail ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white font-mono-code text-[11px] uppercase tracking-wider">
                    Figure 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          5. SECTION 03 — NEXT / PREVIOUS PROJECTS (Taskello Cutout Cards)
          ======================================================== */}
      <SectionDivider number="03" label="More Works" />

      <section className="py-12 sm:py-16 px-6 bg-[linear-gradient(135deg,var(--bg-secondary)_0%,var(--bg-primary)_100%)]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
            <h2 className="font-space text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
              More Works
            </h2>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider text-[#3B82F6] hover:underline cursor-pointer"
            >
              <span>View All 4 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[prevProject, nextProject].map((item, i) => (
              <div
                key={item.id + i}
                onClick={() => onNavigateProject(item.id)}
                className="group relative bg-[#0d0d0e] p-2 h-[280px] border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]/50 cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden flex flex-col">
                  {/* Visual Header */}
                  <div className="absolute top-0 left-0 w-full h-[150px] overflow-hidden z-0">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ objectPosition: item.coverPosition ?? 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 z-10" />
                  </div>

                  {/* Header Category Tag */}
                  <div className="absolute top-5 right-5 text-right z-20 text-white drop-shadow-md">
                    <h4 className="font-space text-sm font-semibold uppercase tracking-wider leading-tight">
                      {item.category}
                    </h4>
                    <span className="font-mono-code text-[11px] text-white/80 block uppercase tracking-wider">
                      {i === 0 ? '← Previous Work' : 'Next Work →'}
                    </span>
                  </div>

                  {/* Taskello Cutout Path */}
                  <svg
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    viewBox="0 0 344 364"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 132 A 18 18 0 0 1 18 114 L 154 114 A 16 16 0 0 1 170 130 A 20 20 0 0 0 190 150 L 328 150 A 16 16 0 0 1 344 166 L 344 342 A 22 22 0 0 1 322 364 L 22 364 A 22 22 0 0 1 0 342 Z"
                      fill="#1a1a1c"
                    />
                  </svg>

                  {/* Foreground Content */}
                  <div className="relative z-20 flex flex-col h-full justify-between p-6 pt-0">
                    <div className="mt-[150px] pl-2">
                      <h3 className="font-space text-2xl font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider mt-1">
                        {item.subCategory}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pl-2 border-t border-white/10 pt-3">
                      <span className="font-mono-code text-xs text-white/80 font-bold">
                        Project {item.num}
                      </span>
                      <span className="font-mono-code text-xs text-[#3B82F6] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Explore Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SECTION 04 — DIRECT PROJECT INQUIRY FORM
          ======================================================== */}
      <div id="project-contact">
        <SectionDivider number="04" label="Work Together" />
        <Contact
          prefilledService={`${project.title} (${project.category})`}
          onShowToast={onShowToast}
        />
      </div>

      {/* ========================================================
          8. DARK FOOTER
          ======================================================== */}
      <Footer />

      {/* ========================================================
          9. FULLSCREEN IMAGE LIGHTBOX
          ======================================================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full border border-white/20 transition-all cursor-pointer z-50 shadow-lg"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-[95vw] max-h-[72vh] object-contain shadow-2xl animate-in zoom-in-95 duration-200"
            />
            {(() => {
              const detail = project.galleryDetails?.find((d) => d.image === selectedImage);
              if (detail) {
                return (
                  <div className="mt-4 px-6 py-3.5 bg-[#111111]/90 border border-white/15 max-w-2xl text-center rounded-none backdrop-blur-md shadow-2xl">
                    <span className="font-mono-code text-[11px] text-[#3B82F6] uppercase tracking-wider block mb-0.5 font-semibold">
                      {detail.subtitle}
                    </span>
                    <h4 className="font-space text-base sm:text-lg font-bold text-white mb-1.5">
                      {detail.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {detail.description}
                    </p>

                    {/* Concept sheet callouts — detail lives here so the page stays short */}
                    {detail.title === 'Logo Concept & Geometric Anatomy' && (
                      <div className="mt-3 pt-3 border-t border-white/15 space-y-1.5 text-left">
                        <div className="flex items-start gap-2.5 text-[11px] text-zinc-300 font-mono-code">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
                          <span><strong>Two Stands Shape:</strong> Higher emotional experience</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-[11px] text-zinc-300 font-mono-code">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
                          <span><strong>Letterform 'H':</strong> First letter of Heaven brand name</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-[11px] text-zinc-300 font-mono-code">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
                          <span><strong>Bright Gold & Dark Violet:</strong> Premium product & brand luxury</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
