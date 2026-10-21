import React from 'react';
import { X, CheckCircle2, Monitor, Briefcase, ArrowRight } from 'lucide-react';
import { SkillDiscipline } from '../types/portfolio';

interface SkillModalProps {
  skill: SkillDiscipline | null;
  onClose: () => void;
  onInquire: (skillTitle: string) => void;
}

export const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose, onInquire }) => {
  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-[var(--text-main)] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-16 h-16 shrink-0 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center p-2">
            <img src={skill.iconUrl} alt={skill.title} className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#3B82F6] font-semibold">
              {skill.subtitle}
            </span>
            <h3 className="font-space text-2xl sm:text-3xl font-bold mt-1 text-[var(--text-main)]">
              {skill.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-[var(--text-muted)] leading-relaxed mb-6">
          {skill.description}
        </p>

        {/* Capabilities */}
        <div className="mb-6">
          <h4 className="font-space text-sm font-semibold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
            <span>Key Capabilities</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {skill.capabilities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Tools */}
        <div className="mb-6">
          <h4 className="font-space text-sm font-semibold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-2 mb-3">
            <Monitor className="w-4 h-4 text-[#3B82F6]" />
            <span>Software & Creative Suite</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {skill.software.map((tool, idx) => (
              <span
                key={idx}
                className="font-mono-code text-xs px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-main)] font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="font-space text-sm font-semibold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-[#3B82F6]" />
            <span>Typical Deliverables</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {skill.deliverables.map((deliv, idx) => (
              <span
                key={idx}
                className="font-mono-code text-xs px-2.5 py-1 bg-blue-500/10 text-[#3B82F6] border border-blue-500/20 font-medium"
              >
                {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onInquire(skill.title);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Inquire About {skill.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
