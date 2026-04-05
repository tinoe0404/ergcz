"use client";

import { motion } from "framer-motion";
import { Target, Eye, Star } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      content: SITE_DATA.missionStatement,
      bg: "bg-primary",
      textColor: "text-white",
      bodyColor: "text-white/90",
      dividerColor: "bg-white/30",
      iconBg: "bg-white/20",
      iconColor: "text-white",
      icon: Target,
    },
    {
      title: "Our Vision",
      content: SITE_DATA.visionStatement,
      bg: "bg-navy",
      textColor: "text-white",
      bodyColor: "text-white/90",
      dividerColor: "bg-white/30",
      iconBg: "bg-white/20",
      iconColor: "text-white",
      icon: Eye,
    },
    {
      title: "Our Values",
      content: SITE_DATA.values,
      bg: "bg-gold",
      textColor: "text-navy",
      bodyColor: "text-navy/80",
      dividerColor: "bg-navy/20",
      iconBg: "bg-navy/15",
      iconColor: "text-navy",
      icon: Star,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`${card.bg} rounded-2xl p-8 shadow-xl flex flex-col items-start`}
                initial={{ opacity: 0, rotateY: 15 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`${card.iconColor} w-8 h-8`} />
                </div>
                <h3 className={`font-display text-2xl ${card.textColor} mb-3`}>{card.title}</h3>
                <div className={`w-12 h-[2px] ${card.dividerColor} rounded-full mb-4`} />
                <p className={`${card.bodyColor} leading-relaxed text-[15px]`}>
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
