"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

export default function PartnershipPhilosophy() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative quote mark */}
          <div className="absolute top-[-80px] left-[-40px] font-display text-[200px] leading-none text-primary/5 select-none pointer-events-none z-0">
            &ldquo;
          </div>
          <h2 className="font-display italic text-3xl md:text-[36px] text-primary relative z-10 leading-tight">
            "No single organisation can educate a nation — but together, we can."
          </h2>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {SITE_DATA.partnershipPhilosophy?.map((paragraph, idx) => (
            <p key={idx} className="text-slate text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
