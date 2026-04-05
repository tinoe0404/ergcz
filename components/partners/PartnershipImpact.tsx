"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 4, suffix: "", label: "Types of Partners" },
  { value: 10, suffix: "+", label: "Active Collaborations" },
  { value: 5, suffix: "", label: "Districts Covered" },
];

export default function PartnershipImpact() {
  return (
    <section className="py-24 px-6 md:px-12 bg-navy text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-16 md:gap-24">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-display text-6xl text-gold mb-4">
              <Counter to={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-white text-lg tracking-wide uppercase font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
