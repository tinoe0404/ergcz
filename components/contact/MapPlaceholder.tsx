"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white pb-24">
      <div className="max-w-7xl mx-auto w-full h-[400px] bg-sky rounded-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-inner border border-slate-100">
        <motion.div
           animate={{ scale: [1, 1.15, 1] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="mb-4 relative z-10"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin size={48} className="text-primary" />
          </div>
        </motion.div>
        <span className="font-display text-3xl text-navy relative z-10">Harare, Zimbabwe</span>
        
        {/* Subtle grid pattern for map texture */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #2A7FCA 1px, transparent 1px), linear-gradient(to bottom, #2A7FCA 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </section>
  );
}
