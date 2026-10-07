import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, MapPin, Send, ExternalLink, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
  
  // Quick message form states
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderRole, setSenderRole] = useState('Internship Opportunity');
  const [messageText, setMessageText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // fallback
    }
  };

  const handleCopyLinkedIn = async () => {
    try {
      await navigator.clipboard.writeText(identity.linkedinPlaceholder);
      setCopiedLinkedIn(true);
      setTimeout(() => setCopiedLinkedIn(false), 2200);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${senderRole} from ${senderName || 'Recruiter'} (${senderOrg || 'Company'})`);
    const body = encodeURIComponent(
      `Hello Subhojeet,\n\n${messageText || 'I reviewed your BBA portfolio and would like to discuss an opportunity.'}\n\nBest regards,\n${senderName || 'Hiring Manager'}\n${senderOrg}`
    );
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-stone-200/70 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-2">
            07. Connect & Inquire
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 text-balance">
            Let's Discuss Internships & Collaborations
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            I am currently open to internship opportunities in business analysis, data management, digital marketing, and management training. Feel free to copy my direct contact details or send a note below.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Recruiter Touchpoints */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with 1-Click Copy */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Direct Email
                </span>
                <span className="text-xs font-medium text-emerald-700">Preferred Channel</span>
              </div>

              <div className="text-base sm:text-lg font-bold text-stone-950 break-all">
                {identity.email}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                  <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${identity.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail</span>
                </a>
              </div>
            </div>

            {/* Location & Academic Base Card */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 space-y-3 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Location & Availability
              </span>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Base:</strong> Kolkata, West Bengal, India
                    <span className="block text-stone-500 text-xs">Available for on-site Kolkata roles or remote internships worldwide.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <span className="w-4 h-4 flex items-center justify-center text-amber-700 font-bold shrink-0">⏳</span>
                  <div>
                    <strong className="text-stone-900">Timeline:</strong> Summer / Fall 2025 & 2026 Cohorts
                    <span className="block text-stone-500 text-xs">Full-time during semester breaks; flexible part-time during active terms.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Profiles Placeholders */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 space-y-3 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Professional Links
              </span>

              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 border border-stone-200/60">
                  <span className="font-semibold text-stone-900">LinkedIn Profile</span>
                  <button
                    onClick={handleCopyLinkedIn}
                    className="text-xs text-stone-600 hover:text-stone-950 font-medium underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedLinkedIn ? 'Copied Link' : '[Copy Profile Link]'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 border border-stone-200/60">
                  <span className="font-semibold text-stone-900">GitHub (Analytics / Code)</span>
                  <span className="text-xs text-stone-500 font-mono">[github.com/subhojeet-c]</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 pb-4 border-b border-stone-100 mb-6">
                <MessageSquare className="w-4 h-4 text-amber-700" />
                <h3 className="text-base font-bold text-stone-950">
                  Send a Direct Note to Subhojeet
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700 block">
                      Your Name / Recruiter Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700 block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Analytics Firm / Startup"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Opportunity / Inquiry Type
                  </label>
                  <select
                    value={senderRole}
                    onChange={(e) => setSenderRole(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 bg-white"
                  >
                    <option value="Summer 2025/2026 Internship">Summer 2025/2026 Internship</option>
                    <option value="Data & Business Analyst Role">Data & Business Analyst Role</option>
                    <option value="Digital Marketing Project">Digital Marketing Project</option>
                    <option value="Academic or Student Collaboration">Academic or Student Collaboration</option>
                    <option value="Informational Interview / Mentorship">Informational Interview / Mentorship</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe the internship scope, required timeline, or questions regarding my projects..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 bg-white resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>

                {submitted && (
                  <p className="text-xs text-emerald-700 font-medium pt-1">
                    Draft prepared! If your email client did not automatically launch, feel free to write directly to {identity.email}.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
