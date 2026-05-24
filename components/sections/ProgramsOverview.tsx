"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, HeartPulse, Trophy, Megaphone } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  "trophy": Trophy,
  "megaphone": Megaphone,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProgramsOverview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-display text-4xl text-slate-900 mb-4">Our Programs</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 text-lg">A holistic approach to empowering the next generation of female leaders.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {SITE_DATA.programs.map((program, idx) => {
            const Icon = iconMap[program.icon] || GraduationCap;
            const number = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={program.title}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.15), 0 8px 10px -6px rgba(124, 58, 237, 0.1)" }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-8 font-display text-primary text-[120px] leading-none select-none z-0 pointer-events-none opacity-[0.03]">
                  {number}
                </div>

                <div className="relative z-10 flex flex-col items-start h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <Icon className="text-primary w-6 h-6 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{program.description}</p>
                  <ul className="mt-auto space-y-2">
                    {program.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
