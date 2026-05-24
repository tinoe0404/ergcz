"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

export default function WhoWeAre() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-8 leading-relaxed">
            {SITE_DATA.whoWeAre}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
