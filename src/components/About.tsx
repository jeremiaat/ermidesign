import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, STATS_DATA, ABOUT_TEXTS, SERVICES_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      window.scrollTo({
        top: contactEl.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-[linear-gradient(135deg,var(--bg-secondary)_0%,var(--bg-primary)_100%)] transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Image & Stats */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Studio Image */}
          <div className="relative group overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#3B82F6]/50">
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src={PERSONAL_INFO.aboutImage}
                alt="Ermias Tesfaye Studio & Creative Process"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-mono-code text-xs tracking-wider">
                Studio & Creative Workspace
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS_DATA.map((stat) => (
              <div
                key={stat.id}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6] hover:shadow-[var(--card-shadow-hover)]"
              >
                <span className="font-space text-3xl sm:text-4xl font-bold text-[#3B82F6] block mb-1 leading-none">
                  {stat.num}
                </span>
                <span className="font-mono-code text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bio & Services */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="font-mono-code text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6] mb-3 block">
            {ABOUT_TEXTS.subtitle}
          </span>

          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            {ABOUT_TEXTS.heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8">
            {ABOUT_TEXTS.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Services Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 pt-2 border-t border-[var(--border-color)]">
            {SERVICES_DATA.map((srv) => (
              <div key={srv.id} className="flex items-center gap-3 py-1">
                <div className="w-6 h-6 rounded-none bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-[#3B82F6]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium text-sm sm:text-base text-[var(--text-main)]">
                  {srv.title}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div>
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
