import PageHeader from "@/components/layout/PageHeader";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import AimsObjectives from "@/components/about/AimsObjectives";
import Organogram from "@/components/about/Organogram";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us"
        subtitle="Learn about our story, mission, and the team behind the vision."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <OurStory />
      <MissionVision />
      <AimsObjectives />
      <Organogram />
    </>
  );
}
