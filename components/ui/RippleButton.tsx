"use client";

import { useState } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export const RippleButton = ({ children, className, onClick, ...props }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    if (onClick) {
      onClick(e);
    }
  };

  const handleRippleComplete = (id: number) => {
    setRipples((prev) => prev.filter(r => r.id !== id));
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <AnimatePresence>
        {ripples.map((rip) => (
          <motion.span
            key={rip.id}
            initial={{ 
              top: rip.y, 
              left: rip.x, 
              width: 0, 
              height: 0, 
              opacity: 0.5 
            }}
            animate={{ 
              width: 500, 
              height: 500, 
              top: rip.y - 250, 
              left: rip.x - 250, 
              opacity: 0 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => handleRippleComplete(rip.id)}
            className="absolute rounded-full bg-white/40 pointer-events-none z-0"
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};
