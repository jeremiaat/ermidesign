import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black select-none"
    >
      {/* Background Graphic Design Image */}
      <img
        src={PERSONAL_INFO.heroImage}
        alt="Ermias Tesfaye Graphic Design Portfolio"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-90 transform scale-105 transition-transform duration-1000 ease-out"
        loading="eager"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-black/60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center px-4 pt-12 pb-24 md:pb-28">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90 font-mono-code text-xs md:text-sm uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>{PERSONAL_INFO.eyebrow}</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-space text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05] drop-shadow-md">
          Ermias Tesfaye
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-white/85 font-light max-w-2xl mb-10 leading-relaxed drop-shadow">
          {PERSONAL_INFO.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 border border-blue-400/30 cursor-pointer"
          >
            <span>View My Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white text-white hover:text-zinc-950 border border-white/40 font-medium text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <span>Let's Collaborate</span>
          </button>
        </div>
      </div>
    </section>
  );
};
