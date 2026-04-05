import { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import PartnershipPhilosophy from "@/components/partners/PartnershipPhilosophy";
import PartnerCategories from "@/components/partners/PartnerCategories";
import PartnershipImpact from "@/components/partners/PartnershipImpact";
import BecomePartnerCta from "@/components/partners/BecomePartnerCta";

export const metadata: Metadata = {
  title: "Partners & Stakeholders",
  description: "At ERGCZ we know that no single organization can educate a nation. Discover our strategic partners.",
  openGraph: {
    images: [{ url: '/images/og-image.jpg' }],
    type: 'website',
    title: 'Partners & Stakeholders | ERGCZ',
    description: 'At ERGCZ we know that no single organization can educate a nation. Discover our strategic partners.',
  },
  twitter: { card: 'summary_large_image' }
};

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
