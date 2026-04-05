"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";

const slideLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AimsObjectives() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Aims Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Left Decorative Heading */}
          <div className="lg:w-1/3 relative">
            <h2 className="font-display text-4xl md:text-5xl text-navy relative z-10 pt-4">
              Our Aims
            </h2>
            {/* Watermark */}
            <div className="absolute top-[-20%] left-[-10%] font-display text-[120px] md:text-[180px] text-primary-light/10 select-none z-0 pointer-events-none tracking-tighter leading-none">
              Aims
            </div>
          </div>
          
          {/* Right Aims List */}
          <motion.div 
            className="lg:w-2/3 flex flex-col gap-6 relative z-10 pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {SITE_DATA.aims?.map((aim, index) => (
              <motion.div 
                key={index} 
                variants={slideLeftVariants}
                className="flex items-start gap-6 p-6 bg-off-white rounded-xl shadow-sm border border-slate-100"
              >
                <span className="font-display text-4xl text-primary-light bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-slate text-lg leading-relaxed pt-1">
                  {aim}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-slate-200" />

        {/* Objectives Section */}
        <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
          <motion.h2 
            className="font-display text-4xl text-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Objectives
          </motion.h2>
          
          <motion.div 
            className="flex flex-col gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {SITE_DATA.objectives?.map((objective, index) => (
              <motion.div 
                key={index} 
                variants={slideUpVariants}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                  0{index + 1}
                </div>
                <p className="text-slate text-lg">
                  {objective}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
