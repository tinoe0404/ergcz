"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

export default function AboutPreview() {
  return (
    <section className="w-full bg-primary py-16 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" }}
           whileInView={{ y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display italic text-3xl md:text-[32px] text-white leading-relaxed mb-6">
            &quot;{SITE_DATA.aboutDescription}&quot;
          </h2>
          <motion.div 
            className="w-10 h-[3px] bg-accent rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
