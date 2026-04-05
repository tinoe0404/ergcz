"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { RippleButton } from "@/components/ui/RippleButton";
import Image from "next/image";
import Link from "next/link";

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

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col overflow-visible pt-28 pb-20 md:pt-36 md:pb-20 lg:pt-44 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[400px] bottom-0 z-0 h-[calc(100svh+400px)] pointer-events-none">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Rural schoolgirls in Zimbabwe"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60 md:via-navy/60 md:to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[60%] flex flex-col items-start"
        >
          {/* Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 mb-6 rounded-full bg-gold text-navy font-bold text-xs uppercase tracking-widest shadow-sm"
          >
            Empowering Zimbabwe&apos;s Future
          </motion.div>

          {/* Heading — FIX 11: responsive font scale */}
          <motion.div variants={itemVariants} className="mb-6 relative">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight text-white">
              Educating Rural <span className="relative inline-block">Girls<AnimatedUnderline /></span>.<br />
              Transforming Zimbabwe.
            </h1>
          </motion.div>

          {/* Subheading — FIX 6: shorter punchy subtitle, not mission statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light drop-shadow-sm max-w-xl"
          >
            Bridging the STEM gap for over 3,000 rural girls across Zimbabwe — one community at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link href="/about" className="w-full sm:w-auto">
              <RippleButton
                className="w-full px-8 py-3.5 bg-primary text-white font-bold rounded-lg shadow-lg border border-transparent transition-colors hover:bg-primary-light"
              >
                <span>Learn More</span>
                <ArrowRight size={18} />
              </RippleButton>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3.5 bg-transparent border-2 border-white/80 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Support Our Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
