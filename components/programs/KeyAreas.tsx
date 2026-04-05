"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

export default function KeyAreas() {
  return (
    <section className="py-12 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-24 md:space-y-32">
        {SITE_DATA.keyAreasOfWork.map((area, index) => {
          const isEven = index % 2 === 1;
          const number = String(index + 1).padStart(2, '0');
          const areaWithLabel = area as typeof area & { label?: string };

          return (
            <div
              key={area.title}
              id={`program-${index + 1}`}
              className={`flex flex-col gap-12 lg:gap-24 items-center px-6 md:px-12 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Side */}
              <motion.div
                className="w-full lg:w-1/2 relative flex justify-center"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Huge Watermark Number behind image */}
                <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-display text-[140px] md:text-[200px] text-primary/[0.06] select-none pointer-events-none z-0 tracking-tighter">
                  {number}
                </span>

                <motion.div
                  className="relative z-10 w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl group touch-pan-y"
                  whileHover={{ rotate: 1, y: -8 }}
                  drag="x"
                  dragConstraints={{ left: -15, right: 15 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20"
                    style={{ background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent 40%)' }}
                  />
                  <Image
                    src={`/images/programs/program-${index + 1}.jpg`}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                className="w-full lg:w-1/2 flex flex-col items-start relative z-10"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              >
                <div className="px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                  {areaWithLabel.label || "Key Initiative"}
                </div>

                <h2 className="font-display text-4xl leading-tight text-navy mb-6">
                  {area.title}
                </h2>

                <div className="w-16 h-1 bg-gold rounded-full mb-6" />

                <p className="text-slate text-lg leading-relaxed mb-10">
                  {area.description}
                </p>

                <a href={`#program-${index + 1}`}>
                  <motion.button
                    whileHover="hover"
                    className="group flex items-center space-x-2 text-primary font-bold text-sm tracking-wide uppercase"
                  >
                    <span className="border-b-2 border-transparent transition-colors group-hover:border-primary">
                      Learn More
                    </span>
                    <motion.div
                      variants={{
                        hover: { x: 5 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>
                </a>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
