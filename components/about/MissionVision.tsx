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
      icon: Target,
    },
    {
      title: "Our Vision",
      content: SITE_DATA.visionStatement,
      bg: "bg-navy",
      icon: Eye,
    },
    {
      title: "Our Values",
      content: SITE_DATA.values,
      bg: "bg-gold",
      icon: Star,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto perspective-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`${card.bg} rounded-2xl p-10 shadow-xl flex flex-col items-start`}
                initial={{ opacity: 0, rotateY: 45, z: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl text-white mb-4">{card.title}</h3>
                <p className="text-white/90 leading-relaxed">
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
