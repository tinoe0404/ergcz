import { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactLayout from "@/components/contact/ContactLayout";
import MapPlaceholder from "@/components/contact/MapPlaceholder";

export const metadata: Metadata = {
  title: "Get In Touch",
  description: "Connect with ERGCZ to discuss partnerships, volunteer opportunities, and donations.",
  openGraph: {
    images: [{ url: '/images/og-image.jpg' }],
    type: 'website',
    title: 'Get In Touch | ERGCZ',
    description: 'Connect with ERGCZ to discuss partnerships, volunteer opportunities, and donations.',
  },
  twitter: { card: 'summary_large_image' }
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Get In Touch"
        subtitle="We'd love to hear from you — whether you're a donor, volunteer, partner, or supporter."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactLayout />
      <MapPlaceholder />
    </>
  );
}
