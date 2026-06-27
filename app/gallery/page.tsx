import PageHeader from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Gallery" 
        subtitle="A visual journey of our impact in communities." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]} 
      />
      <GalleryGrid />
    </>
  );
}
