import { useState } from "react";
import { HeaderV2 } from "./components/v2/HeaderV2";
import { HeroSectionV2 } from "./components/v2/HeroSectionV2";
import { SkillsSectionV2 } from "./components/v2/SkillsSectionV2";
import { CertificationsSectionV2 } from "./components/v2/CertificationsSectionV2";
import { WorkSectionV2 } from "./components/v2/WorkSectionV2";
import { ContactSectionV2 } from "./components/v2/ContactSectionV2";
import { FooterV2 } from "./components/v2/FooterV2";
import { DynamicCaseStudy } from "./components/v2/DynamicCaseStudy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'casestudy'>('portfolio');
  const [currentProjectId, setCurrentProjectId] = useState<string>('');

  const handleViewCaseStudy = (projectId: string) => {
    setCurrentProjectId(projectId);
    setCurrentPage('casestudy');
  };

  if (currentPage === 'casestudy') {
    return <DynamicCaseStudy projectId={currentProjectId} onBack={() => setCurrentPage('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      <HeaderV2 />
      
      <main>
        <HeroSectionV2 />
        <SkillsSectionV2 />
        <CertificationsSectionV2 />
        <WorkSectionV2 onViewCaseStudy={handleViewCaseStudy} />
        <ContactSectionV2 />
      </main>
      
      <FooterV2 />
    </div>
  );
}