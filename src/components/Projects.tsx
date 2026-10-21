import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCategory } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'web', label: 'Website Design' },
    { key: 'social', label: 'Social Media' },
    { key: 'brand', label: 'Brand Identity' },
    { key: 'art', label: 'Artistic' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categoryKey === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 bg-[linear-gradient(135deg,var(--bg-primary)_0%,var(--bg-secondary)_100%)] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 tracking-tight">
            Selected Works
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            A curated selection of website designs, social media posts, brand identities, and artistic projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`font-mono-code text-xs uppercase tracking-wider px-4 py-2 border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-md shadow-blue-500/20'
                    : 'bg-[var(--card-bg)] text-[var(--text-muted)] border-[var(--border-color)] hover:text-[var(--text-main)] hover:border-[var(--text-muted)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group relative bg-[#0d0d0e] p-2 h-[410px] border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]/60 cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden flex flex-col">
                
                {/* Visual Header Image */}
                <div className="absolute top-0 left-0 w-full h-[215px] overflow-hidden z-0">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ objectPosition: project.coverPosition ?? 'center' }}
                    loading="lazy"
                  />
                  {/* Image Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 z-10" />
                </div>

                {/* Header Category Tag (Top Right) */}
                <div className="absolute top-5 right-5 text-right z-20 text-white drop-shadow-md">
                  <h4 className="font-space text-sm font-semibold uppercase tracking-wider leading-tight">
                    {project.category}
                  </h4>
                  <span className="font-mono-code text-[11px] text-white/80 block uppercase tracking-wider">
                    {project.subCategory.split('&')[0].trim()}
                  </span>
                </div>

                {/* The Signature Taskello SVG Cutout Geometry Overlay */}
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

                {/* Project Foreground Content */}
                <div className="relative z-20 flex flex-col h-full justify-between p-6 pt-0">
                  
                  {/* Tab Title (Aligned with Cutout Step) */}
                  <div className="mt-[155px] pl-2">
                    <h3 className="font-space text-2xl font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider mt-1 font-medium">
                      {project.subCategory}
                    </p>
                  </div>

                  {/* Bottom Stats & Action */}
                  <div className="flex flex-col gap-3 pl-2 pb-1">
                    <div className="flex items-end justify-between border-t border-white/10 pt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-space text-2xl font-bold text-white leading-none">
                          {project.num}
                        </span>
                        <span className="font-mono-code text-[11px] text-[#8e8e93] uppercase tracking-wider font-medium">
                          {project.categoryKey}
                        </span>
                      </div>
                      <div className="font-mono-code text-xs font-semibold text-white/80">
                        {project.year}
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono-code text-xs font-medium text-[#3B82F6] uppercase tracking-wider group-hover:text-white transition-colors">
                      <span className="flex items-center gap-1.5 underline underline-offset-4">
                        View Project Detail Page
                      </span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[var(--text-muted)] font-mono-code text-sm">
            No projects in this category currently.
          </div>
        )}
      </div>
    </section>
  );
};
