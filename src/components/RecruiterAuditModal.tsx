import React from 'react';
import { X, CheckCircle, ShieldCheck, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RecruiterAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterAuditModal: React.FC<RecruiterAuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { qualityAudit } = PORTFOLIO_DATA;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-stone-200 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:px-8 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 27 · Master Prompt Verification</span>
            </div>
            <h2 id="audit-title" className="text-xl font-bold text-stone-950 mt-0.5">
              Portfolio Quality & Recruiter Audit
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close quality audit modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 space-y-1">
            <span className="font-bold text-amber-900">Evaluation Philosophy:</span>
            <p className="leading-relaxed">
              Every element on this portfolio strictly obeys the <strong>Honesty Protocol</strong>: zero fabricated work experience, zero inflated skill bars (no "Excel 95%"), zero AI corporate jargon, and explicit distinction between completed deliverables and future project ideas.
            </p>
          </div>

          {/* 8 Quality Categories Grid */}
          <div className="space-y-3.5">
            {qualityAudit.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div className="space-y-1 sm:max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-500 font-mono">0{idx + 1}.</span>
                    <h3 className="text-sm font-bold text-stone-900">{item.criterion}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 sm:self-center font-bold text-xs text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-3 py-1.5 rounded-lg shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recruiter Summary Checklist */}
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-100/50 text-xs text-stone-600 space-y-2">
            <div className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
              Key Recruiter Questions Answered in 10 Seconds:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>Who is he? BBA student at Vedanta College, Kolkata.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>Focus: Business analysis, Excel, marketing, and applied AI.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>Real projects: Retail margin model & digital funnel case.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>Contact: Instant email copy & printable resume.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};
