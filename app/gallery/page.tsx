"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import { SITE_DATA } from "@/constants/data";
import { X } from "lucide-react";

// Placeholder data for gallery images
const galleryItems = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  category: SITE_DATA.galleryCategories[(i % (SITE_DATA.galleryCategories.length - 1)) + 1],
  title: `EmpowerHer Activity ${i + 1}`,
}));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Gallery" 
        subtitle="A visual journey of our impact in communities." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]} 
      />

      <section className="py-20 px-6 md:px-12 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {SITE_DATA.galleryCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === category 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-slate-100"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary-dark/80 transition-colors duration-300 z-10" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                    <h3 className="text-white font-display text-lg">{item.title}</h3>
                  </div>
                  {/* Decorative placeholder pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
               {/* Pattern inside modal */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
               <div className="text-center relative z-10">
                 <h3 className="font-display text-3xl text-white mb-2">{selectedImage.title}</h3>
                 <span className="text-accent text-sm font-bold uppercase tracking-wider">{selectedImage.category}</span>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
