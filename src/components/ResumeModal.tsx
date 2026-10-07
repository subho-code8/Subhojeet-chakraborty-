import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { identity, education, skillCategories, certifications, projects, experienceAndLeadership } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextResume = async () => {
    const textResume = `
SUBHOJEET CHAKRABORTY
${identity.headline}
Email: ${identity.email} | Location: ${identity.location}
Portfolio: BBA Student at Vedanta College, Kolkata

CAREER OBJECTIVE:
${identity.positioning} Seeking business, data analytics, or digital marketing internships.

EDUCATION:
- ${education.degree} — ${education.institution} (${education.status})
  Focus: Management Principles, Business Economics, Marketing, Statistics, Communication.

KEY SKILLS & TOOLKIT:
- Data & Analytics: Microsoft Excel (Pivot tables, XLOOKUP, Modeling), Data Interpretation, Visualization, Business Metrics.
- Business & Management: Fundamentals, Team Coordination, Business Communication, Strategic Scenario Planning.
- Technology & AI: Applied Generative AI (Prompt Workflows, Gemini/ChatGPT), Research Synthesis, Output Fact-Checking.
- Digital Marketing: Funnel Economics, Campaign Metrics (CTR, CPC, CAC), Search & Social Channel Analysis.
- Productivity: Microsoft Office Suite (Word, Excel), Slide Decks & Structured Briefs.

VERIFIED CERTIFICATIONS & PRACTICAL TRAINING:
- Students Generative AI — Google
- Data Analytics Job Simulation — Deloitte (Practical Workshop)
- Data Analytics Practical Training & Certification
- Digital Marketing Professional Training

SELECTED PROJECTS:
1. Retail Sales Performance & Profitability Analysis (Excel Model & Margin Dashboard)
   - Cleaned transaction records, calculated product margins, and recommended inventory reallocations.
2. Digital Marketing Campaign ROI & Attribution Study
   - Evaluated multi-channel funnel decay and modeled budget shifts for 18% acquisition efficiency gain.
3. Generative AI Workflow for Rapid Market Research
   - Built a 4-stage verified prompt framework cutting competitor synthesis time by 60%.

LEADERSHIP & ACTIVITIES:
- Class Representative (CR) — Vedanta College, Kolkata (Cohort coordination & faculty liaison)
- Competitive Chess Player & Tournament Participant (Strategic reasoning, composure under pressure)
`.trim();

    try {
      await navigator.clipboard.writeText(textResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col border border-stone-200 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar (Hidden during window.print()) */}
        <div className="no-print p-4 sm:px-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <h2 id="resume-title" className="text-base font-bold text-stone-900">
              Resume Preview
            </h2>
            <span className="text-xs text-stone-500 hidden sm:inline">· Ready for Recruiter Review & PDF Print</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              title="Copy plain-text formatted resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors ml-1 cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 text-stone-900 font-sans space-y-6">
          
          {/* Resume Header */}
          <div className="border-b-2 border-stone-900 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 uppercase">
              {identity.fullName}
            </h1>
            <p className="text-sm font-semibold text-stone-700 mt-1">
              {identity.headline}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 text-xs text-stone-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-stone-500" />
                {identity.location}
              </span>
              <span>·</span>
              <a
                href={`mailto:${identity.email}`}
                className="flex items-center gap-1 text-stone-800 hover:underline font-medium"
              >
                <Mail className="w-3 h-3 text-stone-500" />
                {identity.email}
              </a>
              <span>·</span>
              <span>Open for Internships (2025/2026)</span>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {identity.positioning} Grounded in business principles and quantitative techniques through BBA coursework at Vedanta College, Kolkata. Completed hands-on training in Google Generative AI and Deloitte virtual analytics simulations. Passionate about transforming commercial data into clear executive insights.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              Education
            </h3>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <span className="font-bold text-stone-900">{education.degree}</span>
                <span className="text-stone-500 text-xs">{education.status}</span>
              </div>
              <div className="text-xs font-semibold text-stone-700">
                {education.institution} · Kolkata, India
              </div>
              <p className="text-xs text-stone-600 mt-1">
                Coursework: Management Principles, Business Economics, Marketing Management, Quantitative Statistics, Business Communication.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              Technical & Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-stone-700">
              <div>
                <strong className="text-stone-900">Data & Analytics:</strong> Microsoft Excel (Pivot tables, XLOOKUP, Data modeling), Data Visualization, Business Metrics.
              </div>
              <div>
                <strong className="text-stone-900">Technology & AI:</strong> Applied Generative AI (Gemini, ChatGPT), Structured Prompt Frameworks, Output Verification.
              </div>
              <div>
                <strong className="text-stone-900">Digital Marketing:</strong> Funnel Analysis, Campaign Economics (CTR, CPC, CAC), Market Research.
              </div>
              <div>
                <strong className="text-stone-900">Management & Soft Skills:</strong> Team Coordination, Class Representation, Structured Communication, Strategic Problem Solving.
              </div>
            </div>
          </div>

          {/* Practical Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              Key Projects & Practical Case Studies
            </h3>

            {projects.filter((p) => p.type === 'completed').map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-stone-900">{p.title}</span>
                  <span className="text-xs text-stone-500 font-medium">{p.categoryLabel}</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {p.problem}
                </p>
                <ul className="list-disc list-inside text-xs text-stone-600 space-y-0.5 pl-1">
                  {p.whatIDid.slice(0, 2).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              Certifications & Industry Simulations
            </h3>
            <div className="space-y-1.5 text-xs text-stone-700">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span>
                    <strong className="text-stone-900">{cert.title}</strong> — {cert.issuer}
                    <span className="text-stone-500 italic"> ({cert.credentialType})</span>
                  </span>
                  <span className="text-stone-500 text-[11px]">{cert.periodOrYear}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              Leadership & Extracurricular Activities
            </h3>
            <div className="space-y-2 text-xs text-stone-700">
              <div>
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Class Representative (CR) — Vedanta College, Kolkata</span>
                  <span className="text-stone-500 font-normal">Current Term</span>
                </div>
                <p className="text-stone-600 mt-0.5">
                  Liaising between 60+ students and college faculty; coordinating schedules and representing student perspectives.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Competitive Chess Player & Strategic Thinker</span>
                  <span className="text-stone-500 font-normal">Active Practice</span>
                </div>
                <p className="text-stone-600 mt-0.5">
                  Participating in tournaments, analyzing positional strategy, calculating multi-step outcomes under time constraints.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom note */}
        <div className="no-print p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>Click "Print / Save PDF" to download a clean, ATS-compliant resume sheet.</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
