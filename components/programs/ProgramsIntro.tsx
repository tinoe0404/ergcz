"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

const stats = [
  { label: "5 Programs" },
  { label: "Rural Focus" },
  { label: "Holistic Approach" },
];

export default function ProgramsIntro() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white flex flex-col items-center overflow-hidden">
      <motion.div 
        className="max-w-[680px] w-full text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-slate text-xl leading-relaxed mb-12">
          {SITE_DATA.programsIntro}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="px-4 py-2 border-l-4 border-gold bg-off-white rounded-r-md"
            >
              <span className="font-display text-navy text-lg">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
