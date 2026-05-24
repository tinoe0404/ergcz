"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { SITE_DATA } from "@/constants/data";

export default function ImpactCounter() {
  return (
    <section className="relative w-full py-20 bg-primary-dark overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #A78BFA 1px, transparent 1px), linear-gradient(to bottom, #A78BFA 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {SITE_DATA.impactStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{stat.emoji}</div>
              <h3 className="font-display text-5xl md:text-6xl text-accent mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/80 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
