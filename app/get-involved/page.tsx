import PageHeader from "@/components/layout/PageHeader";
import { VolunteerSection } from "@/components/get-involved/VolunteerSection";
import { PartnerSection } from "@/components/get-involved/PartnerSection";
import { DonateSection, DonateItemsSection } from "@/components/get-involved/DonateSection";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader 
        title="Get Involved" 
        subtitle="Join our mission to empower rural girls through STEM education." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get Involved" }]} 
      />
      <VolunteerSection />
      <PartnerSection />
      <DonateSection />
      <DonateItemsSection />
    </>
  );
}
