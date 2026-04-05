import PageHeader from "@/components/layout/PageHeader";
import ProgramsIntro from "@/components/programs/ProgramsIntro";
import KeyAreas from "@/components/programs/KeyAreas";
import PillarsSummary from "@/components/programs/PillarsSummary";
import ProgramsCta from "@/components/programs/ProgramsCta";

export default function ProgramsPage() {
  return (
    <>
      <PageHeader 
        title="Our Programs"
        subtitle="Five pillars of action driving change for rural girls across Zimbabwe."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />
      <ProgramsIntro />
      <KeyAreas />
      <PillarsSummary />
      <ProgramsCta />
    </>
  );
}
