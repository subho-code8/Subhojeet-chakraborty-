import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-stone-200 py-12 text-stone-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-100">
          <div>
            <span className="text-base font-bold text-stone-900 block">
              {PORTFOLIO_DATA.identity.fullName}
            </span>
            <p className="text-xs text-stone-500 mt-0.5">
              BBA Student · Vedanta College, Kolkata · Business, Analytics, Marketing & AI
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-amber-800 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-amber-800 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Quality Audit</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-700 hover:text-amber-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Quiet, genuine footnote without fake telemetry */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Subhojeet Chakraborty. Built with authentic student learning records.
          </p>
          <p>
            Vedanta College, Kolkata · Open for 2025/2026 Opportunities
          </p>
        </div>

      </div>
    </footer>
  );
};
