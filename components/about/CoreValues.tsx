"use client";

import { motion } from "framer-motion";
import { Scale, Zap, Shield, HeartHandshake } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "scale": Scale,
  "zap": Zap,
  "shield": Shield,
  "heart-handshake": HeartHandshake,
};

export default function CoreValues() {
  return (
    <section className="py-24 px-6 md:px-12 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-display text-4xl text-slate-900 mb-4">Our Core Values</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_DATA.coreValues.map((value, idx) => {
            const Icon = iconMap[value.icon] || HeartHandshake;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-display text-xl text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
