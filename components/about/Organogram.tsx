"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

const tierVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Organogram() {
  const { board, executive, ancillary } = SITE_DATA.organogram || {};

  return (
    <section className="py-24 px-6 md:px-12 bg-off-white overflow-hidden">
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

        {/* Horizontally scrollable on mobile */}
        <div className="w-full overflow-x-auto">
          <motion.div
            className="flex flex-col items-center relative py-8 min-w-[500px] md:min-w-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >

            {/* TIER 1: Board of Directors */}
            <motion.div variants={tierVariants} transition={{ duration: 0.6 }} className="relative z-10 w-full flex justify-center mb-0">
              <div className="bg-primary text-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-2xl">
                <h3 className="font-display text-2xl mb-4 text-center">{board?.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {board?.roles?.map((role, i) => (
                    <span key={i} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">{role}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connector: Tier 1 → Tier 2 */}
            <div className="w-0.5 h-12 bg-primary mx-auto" />

            {/* Horizontal branch line */}
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-primary" />
              {/* Left prong */}
              <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-primary" />
              {/* Right prong */}
              <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-primary" />
            </div>

            {/* TIER 2: Executive Team */}
            <motion.div variants={tierVariants} transition={{ duration: 0.6 }} className="relative z-10 w-full flex justify-center mt-8 mb-0">
              <div className="bg-[#5BA4DC] text-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-xl">
                <h3 className="font-display text-2xl mb-4 text-center">{executive?.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {executive?.roles?.map((role, i) => (
                    <span key={i} className="bg-white/20 text-white text-sm px-3 py-1.5 rounded-full">{role}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connector: Tier 2 → Tier 3 */}
            <div className="w-0.5 h-12 bg-primary mx-auto" />

            {/* Horizontal branch line for 3 children */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="absolute top-0 left-[16%] right-[16%] h-0.5 bg-primary" />
              <div className="absolute top-0 left-[16%] w-0.5 h-8 bg-primary" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-primary" />
              <div className="absolute top-0 right-[16%] w-0.5 h-8 bg-primary" />
            </div>

            {/* TIER 3: Ancillary Staff */}
            <motion.div variants={tierVariants} transition={{ duration: 0.6 }} className="relative z-10 w-full mt-8">
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {ancillary?.roles?.slice(0, 3).map((role, i) => (
                  <div key={i} className="bg-sky text-navy p-4 md:p-6 rounded-xl shadow-sm border border-primary/20 text-center">
                    <p className="font-medium text-sm md:text-base">{role}</p>
                  </div>
                ))}
              </div>
              {(ancillary?.roles?.length ?? 0) > 3 && (
                <div className="flex justify-center gap-4 mt-4 max-w-3xl mx-auto">
                  {ancillary?.roles?.slice(3).map((role, i) => (
                    <div key={i} className="bg-sky text-navy p-4 md:p-6 rounded-xl shadow-sm border border-primary/20 text-center flex-1 max-w-[250px]">
                      <p className="font-medium text-sm md:text-base">{role}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <p className="text-center text-sm text-slate font-medium">{ancillary?.title}</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
