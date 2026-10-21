import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillDiscipline } from '../types/portfolio';
import { SkillModal } from './SkillModal';

interface SkillsProps {
  onSelectService?: (serviceName: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onSelectService }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillDiscipline | null>(null);

  const handleInquire = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-6 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 tracking-tight">
            Design Disciplines
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Where I focus my creative energy, strategic thinking, and art direction.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILLS_DATA.map((skill) => {
            const isBlueGradient = skill.themeStyle === 'blue-gradient';
            const isDeepBlue = skill.themeStyle === 'deep-blue';
            const isColored = isBlueGradient || isDeepBlue;

            let cardClasses = '';
            let textTitleClass = '';
            let subtitleClass = '';
            let btnClass = '';
            let btnIconColor = '';

            if (isBlueGradient) {
              cardClasses = 'bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] text-white shadow-xl shadow-blue-500/10';
              textTitleClass = 'text-white';
              subtitleClass = 'text-white/80';
              btnClass = 'bg-white text-[#3B82F6] hover:bg-white/90';
              btnIconColor = '#3B82F6';
            } else if (isDeepBlue) {
              cardClasses = 'bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] text-white shadow-xl shadow-blue-900/20';
              textTitleClass = 'text-white';
              subtitleClass = 'text-white/80';
              btnClass = 'bg-white text-[#1E40AF] hover:bg-white/90';
              btnIconColor = '#1E40AF';
            } else {
              cardClasses = 'bg-[var(--card-bg)] text-[var(--text-main)] border border-[var(--border-color)] shadow-[var(--card-shadow)] hover:border-[#3B82F6]';
              textTitleClass = 'text-[var(--text-main)]';
              subtitleClass = 'text-[var(--text-muted)]';
              btnClass = 'bg-[var(--text-main)] text-[var(--card-bg)] hover:opacity-90';
              btnIconColor = 'currentColor';
            }

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`group relative p-8 sm:p-10 min-h-[320px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardClasses}`}
              >
                {/* Text Content */}
                <div className="relative z-10 max-w-[70%]">
                  <h3 className={`font-space text-2xl sm:text-3xl font-bold tracking-tight mb-2 leading-tight ${textTitleClass}`}>
                    {skill.title}
                  </h3>
                  <span className={`font-mono-code text-xs uppercase tracking-wider block mb-8 font-medium ${subtitleClass}`}>
                    {skill.subtitle}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSkill(skill);
                    }}
                    className={`inline-flex items-center gap-2.5 px-4 py-2 font-mono-code text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:translate-x-1 cursor-pointer ${btnClass}`}
                  >
                    <span className="w-5 h-5 rounded-none bg-black/10 flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5" style={{ color: btnIconColor }} />
                    </span>
                    <span>Explore</span>
                  </button>
                </div>

                {/* 3D Visual Illustration Graphic */}
                <div className="absolute -right-2 -bottom-2 w-44 h-44 sm:w-52 sm:h-52 z-0 flex items-center justify-center opacity-85 pointer-events-none">
                  <img
                    src={skill.iconUrl}
                    alt={skill.title}
                    className="w-full h-full object-contain skill-card-visual-img"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        onInquire={handleInquire}
      />
    </section>
  );
};
