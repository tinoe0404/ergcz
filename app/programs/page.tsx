import { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ProgramsIntro from "@/components/programs/ProgramsIntro";
import KeyAreas from "@/components/programs/KeyAreas";
import PillarsSummary from "@/components/programs/PillarsSummary";
import ProgramsCta from "@/components/programs/ProgramsCta";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore the 5 key areas ERGCZ focuses on to drive measurable change tailored for rural Zimbabwean girls.",
  openGraph: {
    images: [{ url: '/images/og-image.jpg' }],
    type: 'website',
    title: 'Our Programs | ERGCZ',
    description: 'Explore the 5 key areas ERGCZ focuses on to drive measurable change tailored for rural Zimbabwean girls.',
  },
  twitter: { card: 'summary_large_image' }
};

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
