"use client";

import { motion } from "framer-motion";
import { RippleButton } from "@/components/ui/RippleButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProgramsCta() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }}
      />
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-4xl sm:text-5xl mb-6">Want to Support Our Programs?</h2>
        <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Your contribution helps us reach more rural schools and empower more girls through education and health support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/get-involved#donate">
            <RippleButton className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-accent-dark transition-colors flex items-center justify-center gap-2">
              <span>Donate Now</span>
              <ArrowRight size={18} />
            </RippleButton>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
