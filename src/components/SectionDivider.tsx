import React from 'react';

interface SectionDividerProps {
  number: string;
  label: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ number, label }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center gap-6 relative z-10">
      <div className="font-mono-code text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap text-[var(--text-muted)] flex items-center gap-2 transition-colors">
        <span className="text-[#3B82F6] font-bold">{number}</span>
        <span>—</span>
        <span>{label}</span>
      </div>
      <div className="flex-1 h-[1px] bg-[var(--border-color)] transition-colors opacity-70" />
    </div>
  );
};
