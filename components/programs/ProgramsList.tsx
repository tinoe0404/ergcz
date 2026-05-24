"use client";

import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Trophy, Megaphone, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  "trophy": Trophy,
  "megaphone": Megaphone,
};

export default function ProgramsList() {
  return (
    <section className="py-24 px-6 md:px-12 bg-off-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {SITE_DATA.programs.map((program, index) => {
          const Icon = iconMap[program.icon] || GraduationCap;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={program.title}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <motion.div 
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`absolute top-4 ${isEven ? 'left-4 right-[-16px]' : 'right-4 left-[-16px]'} bottom-[-16px] border-[12px] border-primary-light/30 rounded-xl z-0`} />
                <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center">
                   {/* Fallback pattern since we don't have images for programs yet */}
                   <div className="absolute inset-0 bg-primary-dark opacity-10" />
                   <Icon className="w-32 h-32 text-primary opacity-20" />
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2 flex flex-col"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-slate-900">{program.title}</h2>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {program.description}
                </p>

                <h3 className="text-slate-900 font-bold text-lg mb-4 uppercase tracking-wider text-sm">Key Initiatives</h3>
                <ul className="flex flex-col gap-4">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
