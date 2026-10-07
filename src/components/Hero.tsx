import React, { useState } from 'react';
import { ArrowDown, FileText, Mail, Check, Copy, GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAudit }) => {
  const [copied, setCopied] = useState(false);
  const { identity, recruiterQuickScan } = PORTFOLIO_DATA;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Typographic Presentation, Right Student Identity Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial kicker (No pill enclosure) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-700">
              <span>Undergraduate Portfolio</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Vedanta College, Kolkata</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>BBA Candidate</span>
            </div>

            {/* Display Heading with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 text-balance leading-[1.08]">
              {identity.fullName}
            </h1>

            {/* Clear, honest positioning subtitle */}
            <p className="text-lg sm:text-xl font-medium text-stone-700 leading-snug">
              {identity.headline}
            </p>

            {/* Positioning Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              {identity.positioning} Focused on turning raw business spreadsheets into clean insights, evaluating digital growth channels, and applying generative AI responsibly for strategic research.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-xs focus:outline-hidden focus:ring-2 focus:ring-stone-900/40"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-amber-500/40"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-700" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Contact & Location Bar (Unboxed text) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Kolkata, India</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Open for 2025/2026 Internships</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-stone-700 hover:text-amber-800 font-medium underline underline-offset-2 transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-stone-400" />
                    <span>{identity.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 5 Cols — Recruiter 10-Second Brief Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-7 space-y-6">
              
              {/* Header with Monogram & Intent */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 text-stone-50 flex items-center justify-center font-bold text-lg tracking-wider shadow-inner">
                    SC
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-stone-900 leading-tight">
                      Recruiter Quick-Scan
                    </h2>
                    <p className="text-xs text-stone-500">10-Second Candidate Snapshot</p>
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="text-xs text-stone-500 hover:text-amber-800 underline transition-colors cursor-pointer"
                  title="View portfolio quality criteria"
                >
                  Quality Audit
                </button>
              </div>

              {/* Snapshot Metrics & Proof Points */}
              <div className="space-y-4">
                {recruiterQuickScan.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-stone-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>

              {/* Verified Training & Highlights list (Unboxed text) */}
              <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                <div className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
                  Verified Training Completed
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">✓</span>
                    <span><strong>Google:</strong> Students Generative AI Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">✓</span>
                    <span><strong>Deloitte:</strong> Data Analytics Job Simulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">✓</span>
                    <span><strong>Leadership:</strong> Class Representative (CR) @ Vedanta</span>
                  </li>
                </ul>
              </div>

              {/* Direct email call to action banner */}
              <div className="pt-2">
                <a
                  href={`mailto:${identity.email}?subject=Internship%20Opportunity%20-%20Subhojeet%20Chakraborty`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-100 hover:bg-stone-200/90 text-stone-900 text-xs font-semibold transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-700" />
                  <span>Reach Out Directly to Subhojeet</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
