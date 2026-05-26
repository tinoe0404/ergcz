"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Instagram = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

const socialIcons = [
  { icon: Facebook, url: SITE_DATA.socialLinks?.find(i => i.name === 'Facebook')?.url || "#", color: "#1877F2" },
  { icon: Twitter, url: SITE_DATA.socialLinks?.find(i => i.name === 'Twitter')?.url || "#", color: "#000000" },
  { icon: Linkedin, url: SITE_DATA.socialLinks?.find(i => i.name === 'LinkedIn')?.url || "#", color: "#0A66C2" },
  { icon: Instagram, url: SITE_DATA.socialLinks?.find(i => i.name === 'Instagram')?.url || "#", color: "#E1306C" },
];


const infoBlocks = [
  { icon: MapPin, label: "Location", value: SITE_DATA.contact.address },
  { icon: Mail, label: "Email Address", value: SITE_DATA.contact.email },
  { icon: Phone, label: "Phone Number", value: SITE_DATA.contact.phone },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri, 8:00 AM – 5:00 PM" },
];

export default function ContactLayout() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState !== 'idle') return;
    
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Contact Details */}
        <motion.div 
          className="w-full lg:w-5/12 flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="font-display text-4xl text-navy mb-10"
          >
            Contact Information
          </motion.h2>

          <div className="flex flex-col gap-8 w-full mb-12">
            {infoBlocks.map((block, i) => (
              <motion.div 
                key={i} 
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <block.icon className="text-primary w-5 h-5" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-bold text-navy text-lg">{block.label}</span>
                  <span className="text-slate text-base mt-1">{block.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center gap-4"
          >
            {socialIcons.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500"
                  whileHover={{ scale: 1.15, backgroundColor: social.color, color: "#FFFFFF" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          className="w-full lg:w-7/12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-[0_4px_40px_-10px_rgba(42,127,202,0.15)] p-8 md:p-12 border border-slate-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-slate-600 font-medium text-sm">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full px-5 py-4 bg-off-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-navy"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-slate-600 font-medium text-sm">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-5 py-4 bg-off-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-navy"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-slate-600 font-medium text-sm">Subject</label>
                <div className="relative">
                  <select 
                    id="subject"
                    required
                    className="w-full px-5 py-4 bg-off-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-navy appearance-none"
                  >
                    <option value="" disabled selected>Select an inquiry type</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-600 font-medium text-sm">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-off-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-navy resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                layout
                whileHover={formState === 'idle' ? { scale: 1.02 } : {}}
                whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg transition-colors overflow-hidden mt-2 ${formState === 'success' ? 'bg-green-500 text-white shadow-green-500/20 pointer-events-none' : 'bg-primary text-white hover:bg-primary-dark pointer-events-auto'}`}
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="flex items-center space-x-2"
                    >
                      <span>Send Message</span>
                      <motion.span
                        className="inline-block"
                        variants={{ idle: { x: 0 }, hover: { x: 4 } }}
                        initial="idle"
                        whileHover="hover"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.div>
                  )}
                  {formState === 'loading' && (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </motion.div>
                  )}
                  {formState === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
