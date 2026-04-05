"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useRef } from "react";

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
          layoutId="activeIndicator"
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
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setIsMobileMenuOpen(false);
      if (e.key === 'Tab' && isMobileMenuOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll('a[href], button');
        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[focusableElements.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        const first = menuRef.current?.querySelector('a[href]') as HTMLElement;
        first?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
      buttonRef.current?.focus();
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

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

        <div className="hidden md:flex items-center space-x-8">
          {SITE_DATA.navigation.map((link) => (
            <NavLink key={link.name} link={link} isActive={pathname === link.href} />
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          ref={buttonRef}
          whileTap={{ scale: 0.9 }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden z-20 text-navy focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center space-y-8 overscroll-none"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
