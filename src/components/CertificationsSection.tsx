import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 border-b border-stone-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            05. Credentials & Verified Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 text-balance">
            Certifications & Industry Simulations
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Professional development completed outside regular university coursework. Each credential is authenticated with clear distinction between practical training simulations, student workshops, and certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 transition-colors shadow-2xs"
            >
              <div className="space-y-4">
                {/* Unboxed Metadata: Issuer · Credential Type · Period (NO PILLS) */}
                <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-200/60">
                  <div className="flex items-center gap-1.5 font-bold text-stone-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="text-stone-600 font-medium">
                    <span>{cert.credentialType}</span>
                    <span aria-hidden="true" className="mx-1.5 text-stone-300">·</span>
                    <span>{cert.periodOrYear}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Clarification callout if present (Honesty protocol) */}
                {cert.importantClarification && (
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      <strong>Transparency Note:</strong> {cert.importantClarification}
                    </span>
                  </div>
                )}

                {/* Skills Acquired */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Core Competencies Covered
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {cert.skillsAcquired.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Status */}
              <div className="mt-6 pt-4 border-t border-stone-200/50 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <span>●</span> Completed & Verified Learning
                </span>
                <span className="text-stone-400">Available on resume</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Policy Note */}
        <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed">
          <strong className="text-stone-900">Credential Integrity Policy:</strong> As per my portfolio standards, I strictly disclose that virtual job simulations (such as the Deloitte program via Forage) are rigorous learning simulations and do not constitute corporate employment. Certificate credentials and documentation will be shared during interview screenings.
        </div>

      </div>
    </section>
  );
};
