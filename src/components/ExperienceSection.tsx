import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Users, Award, BookCheck, Check } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experienceAndLeadership } = PORTFOLIO_DATA;

  const roleIcons = [
    <Users className="w-5 h-5 text-amber-700" />,
    <span className="text-xl" role="img" aria-label="Chess Knight">♞</span>,
    <BookCheck className="w-5 h-5 text-amber-700" />,
  ];

  return (
    <section id="experience" className="py-20 border-b border-stone-200/70 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            06. Leadership & Extracurriculars
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 text-balance">
            Experience, Leadership & Activities
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Honest record of student leadership, academic representation, and competitive activities. No fabricated corporate titles—just demonstrated accountability, coordination, and strategic discipline.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experienceAndLeadership.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-2xs hover:border-stone-300 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-stone-100">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200/80 shrink-0">
                    {roleIcons[idx % roleIcons.length]}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-950">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-stone-700">
                      {item.organization}
                    </div>
                  </div>
                </div>

                {/* Unboxed Metadata (NO PILL) */}
                <div className="text-xs font-medium text-stone-500 sm:text-right pl-12 sm:pl-0">
                  {item.period}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="pt-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Actual Key Responsibilities & Contributions
                </div>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="text-amber-700 font-bold shrink-0 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic takeaway */}
              <div className="mt-5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm text-stone-700 flex items-start gap-2.5">
                <span className="font-semibold text-stone-900 shrink-0">Takeaway:</span>
                <span className="text-stone-600 leading-relaxed">{item.strategicTakeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Callout */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-1">
          <div className="font-bold text-stone-900">
            Open to Formal Business & Analytical Internships
          </div>
          <p className="leading-relaxed">
            I am eager to translate this background in student coordination, structured academic presentation, and analytical modeling into an early-career internship role.
          </p>
        </div>

      </div>
    </section>
  );
};
