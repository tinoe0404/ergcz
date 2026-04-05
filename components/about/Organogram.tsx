"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

export default function Organogram() {
  const { board, executive, ancillary } = SITE_DATA.organogram || {};

  return (
    <section className="py-24 px-6 md:px-12 bg-off-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-display text-4xl text-navy mb-4">Our Team Structure</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="w-full flex flex-col items-center relative py-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Vertical Main Connector line spanning from top block to bottom block */}
          <div className="hidden md:block absolute top-[120px] bottom-[120px] left-1/2 w-0.5 bg-primary -translate-x-1/2 z-0" />

          {/* Level 1: Board */}
          <div className="relative z-10 w-full max-w-sm mb-16 md:mb-24">
            <div className="bg-primary text-white p-6 rounded-xl shadow-lg relative border-2 border-primary">
              <h3 className="font-display text-2xl mb-3 text-center">{board?.title}</h3>
              <ul className="flex flex-wrap justify-center gap-2 text-sm text-primary-light/90">
                {board?.roles?.map((role, i) => (
                  <li key={i} className="bg-white/10 px-3 py-1 rounded-full">{role}</li>
                ))}
              </ul>
            </div>
            {/* Mobile connector */}
            <div className="md:hidden absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary -translate-x-1/2 z-0" />
          </div>

          {/* Level 2: Executive */}
          <div className="relative w-full max-w-4xl mb-16 md:mb-24 z-10 flex flex-col items-center">
            {/* Horizontal Branching line for desktop */}
            <div className="hidden md:block absolute -top-12 left-1/4 right-1/4 h-0.5 bg-primary z-0" />
            {/* Prongs attaching horizontal line to boxes */}
            <div className="hidden md:block absolute -top-12 left-1/4 w-0.5 h-12 bg-primary z-0" />
            <div className="hidden md:block absolute -top-12 right-1/4 w-0.5 h-12 bg-primary z-0" />

            <div className="bg-primary-light text-navy p-6 rounded-xl shadow-lg w-full max-w-md relative bg-opacity-90 backdrop-blur-sm border border-primary/20">
              <h3 className="font-display text-2xl mb-3 text-center">{executive?.title}</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-navy/80 font-medium">
                {executive?.roles?.map((role, i) => (
                  <li key={i} className="bg-white px-3 py-2 rounded shadow-sm text-center">{role}</li>
                ))}
              </ul>
            </div>
             {/* Mobile connector */}
             <div className="md:hidden absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary -translate-x-1/2 z-0" />
          </div>

          {/* Level 3: Ancillary */}
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-sky text-navy p-6 rounded-xl shadow-lg border-2 border-primary-light relative">
              <h3 className="font-display text-2xl mb-3 text-center">{ancillary?.title}</h3>
              <ul className="flex flex-wrap justify-center gap-2 text-sm font-medium">
                {ancillary?.roles?.map((role, i) => (
                  <li key={i} className="bg-white border border-primary-light/50 px-3 py-1.5 rounded-full text-center">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
