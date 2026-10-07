import React from 'react';
import { X, CheckCircle2, Lightbulb, Wrench, FileCheck, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-xl p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className={project.type === 'completed' ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
              {project.statusText}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl font-bold text-stone-950">
            {project.title}
          </h3>

          <p className="text-sm font-medium text-stone-600">
            {project.oneLiner}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700">
            <Lightbulb className="w-4 h-4 text-amber-700" />
            <span>Problem / Objective</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* What I Did */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
            What I Did / Execution Steps
          </div>
          <ul className="space-y-2.5">
            {project.whatIDid.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used (Clean unboxed inline list) */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600">
            <Wrench className="w-3.5 h-3.5 text-stone-500" />
            <span>Tools & Methodologies</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700">
            {project.toolsUsed.map((tool, idx) => (
              <span key={idx} className="bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md border border-stone-200/80 font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Key Learning & Outcome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Key Learning
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {project.keyLearning}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/50 space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Result / Outcome
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* Deliverables / Artifacts */}
        {project.deliverables && (
          <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-stone-400" />
              <span>Project Deliverables:</span>
              <span className="text-stone-800 font-medium">{project.deliverables.join(' · ')}</span>
            </div>
            
            <a
              href={`mailto:subhojeetchakraborty95@gmail.com?subject=Regarding%20${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-950 font-semibold"
            >
              <span>Ask Subhojeet about this case</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
