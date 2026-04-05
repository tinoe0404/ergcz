"use client";

import { motion } from "framer-motion";
import { RefreshCw, XCircle, UserMinus, AlertTriangle } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import Image from "next/image";

const iconMap: Record<string, any> = {
  "refresh-cw": RefreshCw,
  "x-circle": XCircle,
  "user-minus": UserMinus,
  "alert-triangle": AlertTriangle,
};

export default function OurStory() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column: Image with offset frame */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Frame */}
          <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border-[12px] border-primary rounded-xl z-0" />
          
          <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-slate-100">
            <Image 
              src="/images/about/story.jpg" 
              alt="Rural school in Zimbabwe" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Right Column: Story Text */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl text-navy mb-6">Our Founding Story</h2>
          <div className="w-12 h-1 bg-gold rounded-full mb-8" />
          
          <p className="text-slate text-lg leading-relaxed mb-10">
            {SITE_DATA.story}
          </p>

          <h3 className="text-navy font-bold text-lg mb-4">Core Barriers We Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE_DATA.barriers?.map((barrier, index) => {
              const Icon = iconMap[barrier.icon] || RefreshCw;
              return (
                <div key={index} className="flex items-center space-x-3 bg-off-white px-4 py-3 rounded-lg border border-slate-100">
                  <Icon className="text-gold w-5 h-5 flex-shrink-0" />
                  <span className="text-slate font-medium text-sm">{barrier.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
