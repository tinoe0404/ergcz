"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

export default function OurBackground() {
  if (!SITE_DATA.backgroundStory) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">
            Background of ERGCZ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6 leading-relaxed">
            Our Story & Founder
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-8 relative">
          {/* Decorative line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-slate-200 z-0" />

          {SITE_DATA.backgroundStory.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {index === 0 ? <BookOpen size={32} /> : <Heart size={32} />}
                </div>
              </div>
              <div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {paragraph}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
