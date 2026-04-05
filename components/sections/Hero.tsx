"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0, duration: 0.8 },
  },
};

// Animated SVG underline component
const AnimatedUnderline = () => (
  <svg
    viewBox="0 0 100 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -bottom-2 left-0 w-full text-gold"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M2 10C25 4 50 4 98 8"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    />
  </svg>
);

const stats = [
  { label: "3,000+ Girls Reached" },
  { label: "10+ Districts" },
  { label: "5 Key Programs" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* 1. Background Composition */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero/hero-main.jpg")' }}
        />
        {/* Gradient Overlay: Navy/70% to transparent horizontally */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        
        {/* Dot Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* 2. Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[55%] flex flex-col items-start"
        >
          {/* Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 mb-6 rounded-full bg-gold text-navy font-bold text-xs uppercase tracking-widest shadow-sm"
          >
            Empowering Zimbabwe&apos;s Future
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-6 relative">
            <h1 className="font-display text-5xl md:text-[72px] leading-[1.05] text-white">
              Educating Rural <span className="relative inline-block">Girls<AnimatedUnderline /></span>.<br />
              Transforming Zimbabwe.
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light"
          >
            {SITE_DATA.missionStatement}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-lg shadow-lg flex items-center justify-center space-x-2 border border-transparent transition-colors hover:bg-primary-light"
            >
              <span>Learn More</span>
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Support Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>
      </motion.div>

      {/* 4. Floating Stats Bar Overlapping out of bounds */}
      <div className="absolute -bottom-8 left-0 right-0 z-20 px-6 md:px-12 w-full max-w-7xl mx-auto flex justify-center lg:justify-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 border-l-[3px] border-l-primary-light px-6 py-4 rounded shadow-lg min-w-[200px]"
            >
              <h3 className="text-white font-display text-xl whitespace-nowrap">{stat.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
