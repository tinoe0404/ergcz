"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      content: SITE_DATA.missionStatement,
      bg: "bg-primary-dark",
      textColor: "text-white",
      bodyColor: "text-white/90",
      dividerColor: "bg-white/30",
      iconBg: "bg-white/10",
      iconColor: "text-white",
      icon: Target,
    },
    {
      title: "Our Vision",
      content: SITE_DATA.visionStatement,
      bg: "bg-white",
      textColor: "text-slate-900",
      bodyColor: "text-slate-600",
      dividerColor: "bg-primary/20",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-off-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`${card.bg} rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col items-start`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`${card.iconColor} w-7 h-7`} />
                </div>
                <h3 className={`font-display text-3xl ${card.textColor} mb-4`}>{card.title}</h3>
                <div className={`w-12 h-[3px] ${card.dividerColor} rounded-full mb-6`} />
                <p className={`${card.bodyColor} leading-relaxed text-lg`}>
                  {card.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
