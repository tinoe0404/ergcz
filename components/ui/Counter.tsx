"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export const Counter = ({ to, suffix, duration = 2.5 }: { to: number; suffix: string; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const formatted = useTransform(rounded, (v) => v.toLocaleString() + suffix);
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{formatted}</motion.span>;
};
