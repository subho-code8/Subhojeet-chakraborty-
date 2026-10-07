import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BarChart3, Briefcase, Sparkles, Megaphone, Presentation, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Data & Analytics': <BarChart3 className="w-4 h-4 text-amber-700" />,
    'Business & Management': <Briefcase className="w-4 h-4 text-amber-700" />,
    'Technology & AI': <Sparkles className="w-4 h-4 text-amber-700" />,
    'Digital Marketing': <Megaphone className="w-4 h-4 text-amber-700" />,
    'Productivity & Presentation': <Presentation className="w-4 h-4 text-amber-700" />,
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === selectedCategory);

  return (
    <section id="skills" className="py-20 border-b border-stone-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            03. Competencies & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 text-balance">
            Skills & Practical Toolkit
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Organized across business strategy, data modeling, digital marketing, and applied AI. All capabilities are honestly labeled by current proficiency—no inflated percentage bars or exaggerated claims.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.name
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 pb-3 border-b border-stone-200/60 mb-4">
                  {categoryIcons[category.name]}
                  <h3 className="text-base font-bold text-stone-900">
                    {category.name}
                  </h3>
                </div>
                <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List with Zero-Pill Unboxed Metadata */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-xl p-4 border border-stone-200/70 space-y-1.5 shadow-2xs"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-bold text-stone-900">
                          {skill.name}
                        </h4>

                        {/* Unboxed Status Metadata with dot separator (NO PILL BADGE) */}
                        <div className="text-xs font-medium text-amber-800 shrink-0">
                          {skill.level}
                        </div>
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        {skill.practicalContext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet footnote in card */}
              <div className="mt-5 pt-3 border-t border-stone-200/50 flex items-center justify-between text-[11px] text-stone-400">
                <span>Domain: Business & Analytics</span>
                <span>Evidence-backed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Scale Legend (Unboxed, accessible) */}
        <div className="mt-10 p-4 rounded-xl bg-stone-50 border border-stone-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <div className="font-semibold text-stone-900">
            Honest Proficiency Criteria:
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div>
              <strong className="text-stone-900">Working knowledge:</strong> Able to execute tasks independently in spreadsheets/models.
            </div>
            <div>
              <strong className="text-stone-900">Developing:</strong> Actively training and applying concepts in structured case studies.
            </div>
            <div>
              <strong className="text-stone-900">Familiar with:</strong> Understands foundational theory and practical use cases.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
