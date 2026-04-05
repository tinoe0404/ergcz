"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Users, Laptop, Heart } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "book-open": BookOpen,
  "users": Users,
  "laptop": Laptop,
  "heart": Heart,
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

export default function Pillars() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-display text-4xl text-navy mb-4">What We Stand For</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-slate text-lg">Our core focuses for empowering the next generation.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {SITE_DATA.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || BookOpen;
            const number = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                whileHover={{ y: -8, rotate: 1, boxShadow: "0 20px 25px -5px rgba(42, 127, 202, 0.15), 0 8px 10px -6px rgba(42, 127, 202, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
                className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(42,127,202,0.08)] overflow-hidden cursor-default border border-slate-100"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-0"
                  style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(42,127,202,0.06), transparent 40%)' }}
                />
                {/* Watermark Number */}
                <div className="absolute -right-6 -bottom-10 font-display text-primary text-[180px] leading-none select-none z-0 pointer-events-none opacity-[0.06]">
                  {number}
                </div>

                <div className="relative z-10 flex flex-col items-start h-full pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl text-navy mb-3">{pillar.title}</h3>
                  <p className="text-slate leading-relaxed flex-grow">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
