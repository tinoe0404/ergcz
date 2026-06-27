import PageHeader from "@/components/layout/PageHeader";
import ImpactCounter from "@/components/sections/ImpactCounter";
import { AchievementsSection } from "@/components/impact/AchievementsSection";
import { KeyResultsSection } from "@/components/impact/KeyResultsSection";
import { SuccessStorySection } from "@/components/impact/SuccessStorySection";

export default function ImpactPage() {
  return (
    <>
      <PageHeader 
        title="Our Impact" 
        subtitle="See how we are empowering rural girls to pursue STEM careers in Zimbabwe." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Impact" }]} 
      />
      <AchievementsSection />
      <KeyResultsSection />
      <SuccessStorySection />
      <ImpactCounter />
    </>
  );
}
