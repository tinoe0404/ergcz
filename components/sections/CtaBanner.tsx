"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

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
    <section className="w-full bg-navy py-28 px-6 md:px-12 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          className="font-display text-4xl md:text-6xl text-white mb-10 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Together We Can Change a Girl&apos;s Story.
        </motion.h2>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-lg"
          >
            <Link 
              href="/contact" 
              className="block w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-light transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-lg"
          >
            <Link 
              href="/programs" 
              className="block w-full sm:w-auto px-8 py-4 bg-gold text-navy font-bold rounded-lg shadow-lg hover:bg-[#ffb63d] transition-colors"
            >
              Our Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
