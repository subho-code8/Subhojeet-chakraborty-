import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section className="py-16 border-b border-stone-200/70 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            02. Academic Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
            Formal Education
          </h2>
        </div>

        {/* Education Timeline Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-100">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 tracking-wide uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                {education.degree}
              </h3>
              <p className="text-base font-semibold text-stone-800">
                {education.institution}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500 pt-0.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.status}
                </span>
              </div>
            </div>

            <div className="text-xs text-stone-500 md:text-right max-w-xs bg-stone-50 p-3 rounded-lg border border-stone-200/60">
              <span className="font-semibold text-stone-700 block mb-0.5">Academic Scope</span>
              Comprehensive 3-year business administration curriculum emphasizing commercial literacy and quantitative management.
            </div>
          </div>

          {/* Key Subject Areas & Foundational Coursework */}
          <div className="pt-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Core Coursework & Management Disciplines
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.keyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50/70 border border-stone-200/60 text-xs sm:text-sm text-stone-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            {/* Honest Disclosure / Transparency Note */}
            <p className="text-xs text-stone-500 pt-2 italic">
              Note for hiring managers: Coursework and academic grading are actively progressing at Vedanta College, Kolkata. Official semester transcripts and verification are readily available upon request.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
