"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Instagram = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

import { SITE_DATA } from "@/constants/data";

const SocialIcon = ({ icon: Icon, href, name }: { icon: React.ElementType, href: string, name: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ERGCZ on ${name}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-11 h-11 flex items-center justify-center border border-slate-700 rounded-full text-slate-300"
      animate={{
        color: isHovered ? "#F5A623" : "#cbd5e1",
        borderColor: isHovered ? "#F5A623" : "#334155",
      }}
    >
      <Icon size={18} />
    </motion.a>
  );
};

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={href} className="flex flex-col w-fit">
        <motion.span
          animate={{ color: isHovered ? "#5BA4DC" : "#cbd5e1" }}
          className="text-sm pb-1"
        >
          {name}
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-0.5 bg-primary-light"
        />
      </Link>
    </motion.div>
  );
};

export default function Footer() {
  const getSocialIconMap = (n: string) => {
    switch(n.toLowerCase()) {
      case "facebook": return Facebook;
      case "twitter": return Twitter;
      case "linkedin": return Linkedin;
      case "instagram": return Instagram;
      default: return Facebook;
    }
  };

  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-6 px-6 md:px-12 w-full overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-start gap-12 lg:gap-24 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        
        {/* Left Column */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="flex-1"
        >
          <Link href="/" className="flex items-baseline space-x-1 mb-4">
            <span className="font-display text-3xl text-white tracking-wide">
              {SITE_DATA.orgName}
            </span>
            <div className="w-2 h-2 rounded-full bg-primary-light" />
          </Link>
          <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
            {SITE_DATA.missionStatement}
          </p>
          <div className="flex items-center space-x-3">
            {SITE_DATA.socialLinks.map((social) => (
              <SocialIcon
                key={social.name}
                name={social.name}
                icon={getSocialIconMap(social.name)}
                href={social.url}
              />
            ))}
          </div>
        </motion.div>

        {/* Center Column */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="flex-[0.5] flex flex-col space-y-4 pt-1 md:pt-0"
        >
          <h4 className="text-white font-display text-xl mb-2">Quick Links</h4>
          {SITE_DATA.navigation.map((link) => (
            <FooterLink key={link.name} href={link.href} name={link.name} />
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="flex-1 flex flex-col space-y-5 pt-1 md:pt-0"
        >
          <h4 className="text-white font-display text-xl mb-2">Contact Us</h4>
          
          <div className="flex items-center space-x-3 text-sm">
            <Mail size={18} className="text-primary-light flex-shrink-0" />
            <span>{SITE_DATA.contact.email}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Phone size={18} className="text-primary-light flex-shrink-0" />
            <span>{SITE_DATA.contact.phone}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <MapPin size={18} className="text-primary-light flex-shrink-0" />
            <span>{SITE_DATA.contact.address}</span>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-slate-700 pt-6 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {SITE_DATA.orgName}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with purpose.</p>
      </div>
    </footer>
  );
}
