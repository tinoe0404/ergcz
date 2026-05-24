"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import ImpactCounter from "@/components/sections/ImpactCounter";
import { TrendingUp, ArrowDownCircle, Star, Quote } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "trending-up": TrendingUp,
  "arrow-down-circle": ArrowDownCircle,
  "star": Star,
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader 
        title="Our Impact" 
        subtitle="See how your support is changing the lives of girls in Zimbabwe." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Impact" }]} 
      />

      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">Achievements</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 leading-relaxed mb-6">
              {SITE_DATA.impactAchievements}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.keyResults.map((result, idx) => {
              const Icon = iconMap[result.icon] || Star;
              return (
                <motion.div
                  key={result.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900 mb-3">{result.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{result.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
               <Quote className="w-full h-full text-white" />
            </div>
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-accent mx-auto mb-8" />
              <p className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-8">
                &quot;{SITE_DATA.successStory.quote}&quot;
              </p>
              <span className="text-white/80 font-body uppercase tracking-wider text-sm font-semibold">
                {SITE_DATA.successStory.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <ImpactCounter />
    </>
  );
}
