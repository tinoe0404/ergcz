import PageHeader from "@/components/layout/PageHeader";
import ProgramsIntro from "@/components/programs/ProgramsIntro";
import ProgramsList from "@/components/programs/ProgramsList";
import ProgramsCta from "@/components/programs/ProgramsCta";

export const metadata = { title: "Our Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHeader 
        title="Our Programs" 
        subtitle="Comprehensive initiatives designed to transform education and opportunities for girls." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs" }]} 
      />
      <ProgramsIntro />
      <ProgramsList />
      <ProgramsCta />
    </>
  );
}
