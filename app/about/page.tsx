import PageHeader from "@/components/layout/PageHeader";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurBackground from "@/components/about/OurBackground";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our mission to empower rural girls through STEM education." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]} 
      />
      <WhoWeAre />
      <OurBackground />
      <MissionVision />
      <CoreValues />
    </>
  );
}
