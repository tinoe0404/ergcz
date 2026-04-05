import PageHeader from "@/components/layout/PageHeader";
import ContactLayout from "@/components/contact/ContactLayout";
import MapPlaceholder from "@/components/contact/MapPlaceholder";

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
