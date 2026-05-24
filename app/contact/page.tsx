"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_DATA } from "@/constants/data";
import PageHeader from "@/components/layout/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]} 
      />
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-8">Send Us a Message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl border border-slate-200 font-body text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-off-white transition-colors shadow-sm" />
              <input type="email" placeholder="Your Email" className="w-full px-5 py-4 rounded-xl border border-slate-200 font-body text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-off-white transition-colors shadow-sm" />
              <input type="text" placeholder="Subject" className="w-full px-5 py-4 rounded-xl border border-slate-200 font-body text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-off-white transition-colors shadow-sm" />
              <textarea placeholder="Your Message" rows={6} className="w-full px-5 py-4 rounded-xl border border-slate-200 font-body text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-off-white resize-none transition-colors shadow-sm" />
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-8 py-4 rounded-xl font-body font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-md w-full sm:w-auto"
              >
                <Send className="w-4 h-4" /> Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-8">Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                Have questions about our programs, partnerships, or how to get involved? Reach out to us using the contact details below.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: SITE_DATA.contact.email, href: `mailto:${SITE_DATA.contact.email}` },
                { icon: Phone, label: "Phone", value: SITE_DATA.contact.phone, href: `tel:${SITE_DATA.contact.phone}` },
                { icon: MapPin, label: "Location", value: SITE_DATA.contact.address },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-6 bg-off-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 mb-2">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="font-body text-slate-600 hover:text-primary transition-colors break-all text-lg">{item.value}</a>
                    ) : (
                      <p className="font-body text-slate-600 text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
