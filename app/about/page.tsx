import { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import AimsObjectives from "@/components/about/AimsObjectives";
import Organogram from "@/components/about/Organogram";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the ERGCZ's mission to combat poverty and empower the rural girl child in Zimbabwe.",
  openGraph: {
    images: [{ url: '/images/og-image.jpg' }],
    type: 'website',
    title: 'About Us | ERGCZ',
    description: 'Learn about the ERGCZ\'s mission to combat poverty and empower the rural girl child in Zimbabwe.',
  },
  twitter: { card: 'summary_large_image' }
};

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
