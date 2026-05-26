"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { RippleButton } from "@/components/ui/RippleButton";
import Image from "next/image";
import Link from "next/link";
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

const AnimatedUnderline = () => (
  <svg
    viewBox="0 0 100 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -bottom-2 left-0 w-full text-accent"
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
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[400px] bottom-0 z-0 h-[calc(100svh+400px)] pointer-events-none">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Rural schoolgirls in Zimbabwe"
            fill
            priority
            className="object-cover object-center blur-md"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary/60 md:via-primary-dark/60 md:to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }}
          />
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[60%] flex flex-col items-start"
        >
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 mb-6 rounded-full bg-accent text-white font-bold text-xs uppercase tracking-widest shadow-sm"
          >
            {SITE_DATA.orgName}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 relative">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight text-white">
              Empowering the <span className="relative inline-block">Girl Child<AnimatedUnderline /></span><br />
              in Zimbabwe.
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light drop-shadow-sm max-w-xl"
          >
            {SITE_DATA.heroSubheading}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link href="/get-involved#donate" className="w-full sm:w-auto">
              <RippleButton
                className="w-full px-8 py-3.5 bg-accent text-white font-bold rounded-lg shadow-lg border border-transparent transition-colors hover:bg-accent-dark flex items-center justify-center gap-2"
              >
                <span>👉 Donate Now</span>
                <ArrowRight size={18} />
              </RippleButton>
            </Link>

            <Link href="/get-involved#volunteer" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3.5 bg-transparent border-2 border-white/80 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                👉 Join Our Mission
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

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
