"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative w-full pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-primary/10 to-off-white">
      {/* Texture Layer */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #2A7FCA 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 mb-6 text-sm font-medium text-primary uppercase tracking-widest"
        >
          {breadcrumb.map((item, index) => (
            <div key={item.label} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="hover:text-primary-dark transition-colors">{item.label}</Link>
              ) : (
                <span className="text-slate">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && <ChevronRight size={14} className="mx-2 text-slate-400" />}
            </div>
          ))}
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
           }}
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="font-display text-4xl sm:text-5xl lg:text-[56px] text-navy mb-6 leading-tight max-w-[90vw]"
          >
            {title}
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl text-slate"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
