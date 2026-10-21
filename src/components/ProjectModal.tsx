import React, { useState } from 'react';
import { X, ExternalLink, Calendar, User, Tag, Sparkles, Layers, ChevronRight, Check } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!project) return null;

  const currentImage = project.galleryImages[activeImageIndex] || project.coverImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141416] border border-white/10 shadow-2xl overflow-y-auto max-h-[92vh] text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white/80 hover:text-white rounded-none border border-white/20 transition-all cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Gallery Showcase */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <img
            src={currentImage}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/50 pointer-events-none" />

          {/* Badges on hero */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono-code text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
                <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/40">
                  {project.category}
                </span>
                <span>•</span>
                <span>{project.subCategory}</span>
              </div>
              <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight">
                {project.title}
              </h2>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black font-mono-code text-xs uppercase tracking-wider transition-colors border border-white/20"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {project.galleryImages.length > 1 && (
          <div className="flex items-center gap-2 px-6 pt-4 pb-2 bg-[#0e0e10] border-b border-white/10 overflow-x-auto">
            {project.galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#3B82F6] scale-105 shadow-md shadow-blue-500/30'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 font-mono-code text-xs">
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <User className="w-3 h-3 text-[#3B82F6]" />
                Client
              </span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#3B82F6]" />
                Year
              </span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-[#3B82F6]" />
                Role
              </span>
              <span className="text-white font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-[#3B82F6]" />
                Index
              </span>
              <span className="text-[#3B82F6] font-bold">Project {project.num}</span>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="font-space text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              Project Overview
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.03] border border-white/10 p-5">
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
                <span>The Challenge</span>
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                <span>The Design Solution</span>
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-space text-sm font-semibold uppercase tracking-wider text-white mb-3">
                Deliverables
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-space text-sm font-semibold uppercase tracking-wider text-white mb-3">
                Software & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="font-mono-code text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
            >
              <span>Discuss a Similar Project</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 text-xs uppercase tracking-wider text-zinc-400 hover:text-white cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
