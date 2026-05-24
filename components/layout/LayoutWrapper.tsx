"use client";

import dynamic from 'next/dynamic';
import { MotionConfig } from 'framer-motion';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
