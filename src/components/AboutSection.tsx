import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BookOpen, TrendingUp, Cpu, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 border-b border-stone-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 text-balance">
            About Me & My Approach
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {about.lead}
          </p>
        </div>

        {/* Two-Column Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
            {about.paragraphs.map((p, index) => (
              <p key={index}>
                {p}
              </p>
            ))}

            {/* Chess & Strategy Callout box */}
            <div className="mt-6 p-5 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-label="Chess Knight">♞</span>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Why Competitive Chess Shapes My Work
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    In chess, you cannot win by rushing into flashy tactics without positional control. Every move commits tempo and resources. I bring this same discipline to business problem solving: understand the current board state (the data), calculate two steps ahead, and focus on sustainable advantages rather than short-lived buzzwords.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Principles Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              How I Approach Work & Learning
            </h3>

            <div className="space-y-3.5">
              {about.principles.map((principle, index) => {
                const icons = [BookOpen, TrendingUp, Award, Cpu];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-stone-200/80 hover:border-stone-300 transition-colors bg-stone-50/50"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <IconComponent className="w-4 h-4 text-amber-700 shrink-0" />
                      <h4 className="text-sm font-bold text-stone-900">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6.5">
                      {principle.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Candidate Summary Statement */}
            <div className="p-4 rounded-xl border border-amber-200/70 bg-amber-50/60 text-xs text-amber-950 leading-relaxed">
              <span className="font-semibold text-amber-900">Recruiter Note:</span> I am actively seeking 2025–2026 internship opportunities where I can apply Excel modeling, digital marketing analysis, and business research to tangible team goals.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
