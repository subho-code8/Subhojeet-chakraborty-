import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterAuditModal } from './components/RecruiterAuditModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  // Global ESC key listener for modal closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResumeOpen(false);
        setAuditOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section with Recruiter 10-Second Quick Scan */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenAudit={() => setAuditOpen(true)}
        />

        {/* 01. About Me & Chess Strategy Mindset */}
        <AboutSection />

        {/* 02. Formal Education (Vedanta College, Kolkata) */}
        <EducationSection />

        {/* 03. Skills & Practical Toolkit (Zero-Pill discipline) */}
        <SkillsSection />

        {/* 04. Projects & Practical Case Studies (Completed vs Project Ideas) */}
        <ProjectsSection />

        {/* 05. Certifications & Verified Training (Honesty Protocol) */}
        <CertificationsSection />

        {/* 06. Experience, Leadership & Activities (Class Representative & Chess) */}
        <ExperienceSection />

        {/* 07. Recruiter Contact & Outreach */}
        <ContactSection />
      </main>

      {/* Quiet, Clean Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <RecruiterAuditModal
        isOpen={auditOpen}
        onClose={() => setAuditOpen(false)}
      />
    </div>
  );
}
