"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import { BookOpen, Users, Laptop, Heart } from "lucide-react";

const iconMap: Record<string, any> = {
  "book-open": BookOpen,
  "users": Users,
  "laptop": Laptop,
  "heart": Heart,
};

export default function PillarsSummary() {
  return (
    <section className="py-24 px-6 md:px-12 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-display text-4xl text-navy mb-4">Built on Four Pillars</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Horizontal scrollable on mobile, Grid on Desktop */}
        <div className="w-full flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-4 md:overflow-visible gap-6 snap-x snap-mandatory hide-scrollbars">
          {SITE_DATA.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || BookOpen;

            return (
              <motion.div
                key={pillar.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  rest: { opacity: 1, y: 0, rotate: 0 },
                  hover: { opacity: 1, y: -8, rotate: 1 }
                }}
                initial="hidden"
                whileInView="rest"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.15 }}
                whileHover="hover"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
                className="group snap-center shrink-0 w-[280px] md:w-auto relative overflow-hidden rounded-2xl"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20"
                  style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 40%)' }}
                />
                
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-100 z-0" />
                
                <motion.div 
                  className="absolute inset-0 bg-primary rounded-2xl z-0"
                  variants={{
                    hidden: { opacity: 0 },
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 p-8 flex flex-col items-start h-full">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                    variants={{
                      hover: { backgroundColor: "rgba(255,255,255,0.2)" }
                    }}
                  >
                    <motion.div variants={{ hover: { color: "#FFFFFF" } }} className="text-primary">
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="font-display text-2xl text-navy mb-3"
                    variants={{ hover: { color: "#FFFFFF" } }}
                  >
                    {pillar.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-slate text-sm leading-relaxed"
                    variants={{ hover: { color: "#E8F4FD" } }} /* sky */
                  >
                    {pillar.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbars::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbars {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
