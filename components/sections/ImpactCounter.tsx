"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const counters = [
  { value: 3000, suffix: "+", label: "Girls Reached" },
  { value: 10, suffix: "+", label: "Districts" },
  { value: 4, suffix: "", label: "Core Pillars" },
  { value: 5, suffix: "", label: "Work Areas" },
];

const Counter = ({ to, suffix }: { to: number, suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const formatted = useTransform(rounded, (v) => v.toLocaleString() + suffix);
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{formatted}</motion.span>;
};

export default function ImpactCounter() {
  return (
    <section className="relative w-full py-20 bg-off-white overflow-hidden">
      {/* Subtle blue grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #2A7FCA 1px, transparent 1px), linear-gradient(to bottom, #2A7FCA 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {counters.map((counter, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-display text-5xl md:text-6xl text-primary mb-2">
                <Counter to={counter.value} suffix={counter.suffix} />
              </h3>
              <p className="text-slate font-medium text-sm md:text-base uppercase tracking-wider">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
