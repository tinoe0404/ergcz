"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BecomePartnerCta() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white flex justify-center">
      <motion.div 
        className="w-full max-w-[700px] bg-sky rounded-3xl p-12 text-center border-l-[8px] border-primary shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-display text-4xl text-navy mb-6">Interested in Partnering With Us?</h2>
        <p className="text-slate text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          We are always looking for visionary organizations aligned with our mission. Partnering with ERGCZ means gaining a transparent, on-the-ground collaborative platform to drive real change across rural communities.
        </p>
        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="inline-block"
        >
          <Link href="/contact" className="px-10 py-4 bg-gold text-navy font-bold text-lg rounded-full shadow-md hover:bg-[#ffb63d] transition-colors">
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
