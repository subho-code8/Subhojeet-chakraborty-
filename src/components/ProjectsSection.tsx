import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowRight, Sparkles, BarChart2, Lightbulb } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return project.type === 'completed';
    if (filter === 'ideas') return project.type === 'idea';
    if (filter === 'analytics') return project.category === 'analytics';
    if (filter === 'marketing') return project.category === 'marketing';
    if (filter === 'ai') return project.category === 'ai';
    return true;
  });

  return (
    <section id="projects" className="py-20 border-b border-stone-200/70 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            04. Evidence & Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 text-balance">
            Projects & Practical Case Studies
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Hands-on work demonstrating practical execution in spreadsheet modeling, marketing attribution, and applied AI workflows. Upcoming projects are explicitly demarcated as <strong>Project Ideas</strong>.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs / Functional Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            All Projects ({projects.length})
          </button>

          <button
            onClick={() => setFilter('completed')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'completed'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Completed Work ({projects.filter((p) => p.type === 'completed').length})
          </button>

          <button
            onClick={() => setFilter('analytics')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'analytics'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Data Analytics
          </button>

          <button
            onClick={() => setFilter('marketing')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'marketing'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Digital Marketing
          </button>

          <button
            onClick={() => setFilter('ai')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'ai'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Applied AI
          </button>

          <button
            onClick={() => setFilter('ideas')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'ideas'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Project Ideas ({projects.filter((p) => p.type === 'idea').length})
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isCompleted = project.type === 'completed';

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`group bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md cursor-pointer ${
                  isCompleted
                    ? 'border-stone-200/90 hover:border-stone-400'
                    : 'border-amber-200/90 bg-stone-50/40 hover:border-amber-400'
                }`}
              >
                <div>
                  {/* Top Metadata: Clean unboxed text with dot separator (NO PILL BOXES) */}
                  <div className="flex items-center justify-between text-xs mb-3 text-stone-500">
                    <div className="flex items-center gap-1.5 font-medium">
                      {project.category === 'analytics' && <BarChart2 className="w-3.5 h-3.5 text-amber-700" />}
                      {project.category === 'marketing' && <BarChart2 className="w-3.5 h-3.5 text-blue-700" />}
                      {project.category === 'ai' && <Sparkles className="w-3.5 h-3.5 text-purple-700" />}
                      {project.category === 'strategy' && <Lightbulb className="w-3.5 h-3.5 text-amber-700" />}
                      <span>{project.categoryLabel}</span>
                    </div>

                    <span
                      className={`font-semibold ${
                        isCompleted ? 'text-emerald-700' : 'text-amber-800'
                      }`}
                    >
                      {isCompleted ? 'Completed Case' : 'Project Idea'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-stone-950 group-hover:text-amber-800 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* One Liner */}
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {project.oneLiner}
                  </p>

                  {/* Structured Snapshot: Problem vs Learning */}
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-stone-900 block mb-0.5">Objective:</span>
                      <p className="text-stone-600 line-clamp-2">{project.problem}</p>
                    </div>

                    <div className="pt-1">
                      <span className="font-semibold text-stone-900 block mb-0.5">Core Takeaway:</span>
                      <p className="text-stone-600 line-clamp-2">{project.keyLearning}</p>
                    </div>
                  </div>
                </div>

                {/* Footer with Tools & Action Affordance */}
                <div className="mt-6 pt-4 border-t border-stone-100 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-600">
                    {project.toolsUsed.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[11px] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.toolsUsed.length > 3 && (
                      <span className="text-stone-400">+{project.toolsUsed.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-amber-800 group-hover:text-amber-950 pt-1">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity & Project Ideas */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <strong className="text-stone-900">Authenticity Guarantee:</strong> Projects labeled <em>"Project Idea"</em> represent planned research roadmaps, not completed deliverables. Completed projects are fully documented with analytical models.
          </div>
          <button
            onClick={() => setFilter('completed')}
            className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2 whitespace-nowrap cursor-pointer text-left sm:text-right"
          >
            Show only completed works
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
