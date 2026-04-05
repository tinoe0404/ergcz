"use client";

import { motion, Variants } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function PartnerCategories() {
  return (
    <section className="py-24 px-6 md:px-12 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        {SITE_DATA.partnerCategories?.map((category) => (
          <div key={category.title} className="flex flex-col">
            <motion.h3 
              className="font-display text-3xl text-navy mb-10 border-b border-slate-200 pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {category.title}
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.partners.map((partner, idx) => (
                <motion.div 
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, borderColor: "rgba(42,127,202,0.2)" }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-white transition-colors cursor-default"
                >
                  <div className="w-full h-24 rounded-lg bg-slate-100 flex items-center justify-center mb-6 overflow-hidden">
                    {/* Placeholder Logo Box */}
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs px-4 text-center">
                      Logo Placeholder
                    </span>
                  </div>
                  <h4 className="text-navy font-bold text-lg mb-2">{partner.name}</h4>
                  <p className="text-slate text-sm leading-relaxed">{partner.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
