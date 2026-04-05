import PageHeader from "@/components/layout/PageHeader";
import PartnershipPhilosophy from "@/components/partners/PartnershipPhilosophy";
import PartnerCategories from "@/components/partners/PartnerCategories";
import PartnershipImpact from "@/components/partners/PartnershipImpact";
import BecomePartnerCta from "@/components/partners/BecomePartnerCta";

export default function PartnersPage() {
  return (
    <>
      <PageHeader 
        title="Partners & Stakeholders"
        subtitle="Collaboration is at the heart of everything we do."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Partners" }]}
      />
      <PartnershipPhilosophy />
      <PartnerCategories />
      <PartnershipImpact />
      <BecomePartnerCta />
    </>
  );
}
