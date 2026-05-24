"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { SITE_DATA } from "@/constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CtaBanner() {
  return (
    <section className="w-full bg-primary-dark py-28 px-6 md:px-12 text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-80" />
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <motion.h2 
          className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {SITE_DATA.ctaCopy}
        </motion.h2>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={itemVariants} className="w-full sm:w-auto">
            <Link 
              href="/get-involved#donate" 
              className="block w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-accent-dark transition-colors"
            >
              Donate
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full sm:w-auto">
            <Link 
              href="/get-involved#volunteer" 
              className="block w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Volunteer
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full sm:w-auto">
            <Link 
              href="/get-involved#partner" 
              className="block w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Partner
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
