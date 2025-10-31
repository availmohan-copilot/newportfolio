import { HeaderV2 } from "./components/v2/HeaderV2";
import { HeroSectionV2 } from "./components/v2/HeroSectionV2";
import { SkillsSectionV2 } from "./components/v2/SkillsSectionV2";
import { CertificationsSectionV2 } from "./components/v2/CertificationsSectionV2";
import { WorkSectionV2 } from "./components/v2/WorkSectionV2";
import { ContactSectionV2 } from "./components/v2/ContactSectionV2";
import { FooterV2 } from "./components/v2/FooterV2";

export default function AppV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      <HeaderV2 />
      
      <main>
        <HeroSectionV2 />
        <SkillsSectionV2 />
        <CertificationsSectionV2 />
        <WorkSectionV2 />
        <ContactSectionV2 />
      </main>
      
      <FooterV2 />
    </div>
  );
}