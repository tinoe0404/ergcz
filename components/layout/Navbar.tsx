"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import { cn } from "@/lib/utils";

const NavLink = ({ link, isActive }: { link: { name: string; href: string }; isActive: boolean }) => {
  return (
    <Link 
      href={link.href} 
      className={cn(
        "relative text-[13px] lg:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors py-2 px-1",
        isActive ? "text-primary" : "text-slate-600 hover:text-primary"
      )}
    >
      {link.name}
      {isActive && (
        <motion.div
          layoutId="navbar-active-indicator"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex items-center justify-center transition-all duration-300",
          isScrolled ? "py-3" : "py-5"
        )}
      >
        <motion.nav
          className={cn(
            "w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 rounded-none md:rounded-full",
            isScrolled ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 py-3 mx-4 md:mx-6" : "bg-transparent py-2"
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="flex flex-col relative z-20 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-sm shrink-0">
                <span className="text-white font-display font-bold text-sm">EH</span>
              </div>
              <span className="font-display text-base xl:text-lg tracking-tight text-slate-900 whitespace-nowrap">
                <span className="font-bold">EmpowerHer</span>
                <span className="font-light ml-1 text-slate-600 hidden sm:inline">Zimbabwe</span>
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {SITE_DATA.navigation.filter(link => link.name !== 'Home').map((link) => (
              <NavLink key={link.name} link={link} isActive={pathname === link.href} />
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/get-involved#donate" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full hover:bg-accent-dark transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Donate Now
            </Link>

            <button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="xl:hidden relative z-50 p-2 -mr-2 text-slate-900 hover:text-primary transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-5">
                <span className={cn("absolute left-0 w-full h-0.5 bg-current transition-all duration-300", isMobileMenuOpen ? "top-2 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 w-full h-0.5 bg-current transition-all duration-300", isMobileMenuOpen ? "opacity-0" : "top-2")} />
                <span className={cn("absolute left-0 w-full h-0.5 bg-current transition-all duration-300", isMobileMenuOpen ? "top-2 -rotate-45" : "top-4")} />
              </div>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl xl:hidden flex flex-col pt-28 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {SITE_DATA.navigation.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-2xl font-medium block",
                      pathname === link.href ? "text-primary" : "text-slate-800"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: SITE_DATA.navigation.length * 0.05 + 0.1 }}
                className="mt-8 pt-8 border-t border-slate-200"
              >
                <Link 
                  href="/get-involved#donate" 
                  className="w-full flex items-center justify-center px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl shadow-md"
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
