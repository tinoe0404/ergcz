"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

export default function Partners() {
  // We duplicate the partners list to create a seamless infinite scroll loop
  const logos = [...SITE_DATA.partners, ...SITE_DATA.partners, ...SITE_DATA.partners, ...SITE_DATA.partners];

  return (
    <section className="py-24 bg-white overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="font-display text-3xl md:text-4xl text-navy">Our Partners & Collaborators</h2>
      </motion.div>

      <div className="w-full max-w-[100vw] relative flex items-center overflow-hidden group py-4">
        {/* Fading transparent edges on left and right */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] animate-marquee group-hover:pause-marquee">
          {logos.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex justify-center items-center px-4 md:px-8 w-[25%]"
            >
              {/* Placeholder box for partner logo */}
              <div className="w-48 h-20 border-2 border-slate-200 border-dashed rounded flex flex-col items-center justify-center bg-slate-50 filter grayscale transition hover:grayscale-0 hover:border-primary-light">
                <span className="text-slate-400 font-bold text-sm text-center px-4 uppercase tracking-wide">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
