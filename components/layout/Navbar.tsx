"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import { cn } from "@/lib/utils";

const NavLink = ({ link, isActive }: { link: { name: string; href: string }; isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative px-2 py-1"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={link.href} className={cn("text-sm font-medium z-10 relative", isActive ? "text-primary" : "text-navy")}>
        {link.name}
      </Link>
      
      {!isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
        />
      )}
      {isActive && (
        <motion.div
          layoutId="navbar-active-indicator"
          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4"
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "0 0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo Section */}
        <Link href="/" className="flex flex-col relative z-20">
          <div className="flex items-baseline space-x-1">
            <span className="font-display text-2xl text-primary-dark tracking-wide">
              {SITE_DATA.orgName}
            </span>
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <span className="text-[10px] text-slate font-body mt-[-2px] uppercase tracking-wider">
            Empowering Rural Girls
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {SITE_DATA.navigation.map((link) => (
            <NavLink key={link.name} link={link} isActive={pathname === link.href} />
          ))}
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/donate" 
              className="px-6 py-2 bg-gold text-navy font-bold text-sm rounded-full shadow-md"
            >
              Donate
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden z-20 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center space-y-8"
          >
            {SITE_DATA.navigation.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "font-display text-4xl",
                    pathname === link.href ? "text-primary-light" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 + SITE_DATA.navigation.length * 0.1 }}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="mt-4 px-8 py-3 bg-gold text-navy font-bold text-lg rounded-full shadow-lg"
              >
                Donate
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
