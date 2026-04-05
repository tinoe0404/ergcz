"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramsCta() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-primary-dark py-32 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      
      {/* Animated Bokeh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-light/30 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 1.5, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-navy/40 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -100, 0],
            y: [0, -100, 50, 0] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[40%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px]"
        />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        <motion.h2 
          className="font-display text-4xl md:text-[40px] text-white leading-tight mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Want to support one of our programs?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contact" 
            className="px-10 py-4 bg-gold text-navy font-bold text-lg rounded-full shadow-xl hover:bg-[#ffb63d] transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
