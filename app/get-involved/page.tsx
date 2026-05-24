"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import { Heart, Users, CreditCard, Smartphone, Landmark, Send } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "smartphone": Smartphone,
  "landmark": Landmark,
  "credit-card": CreditCard,
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader 
        title="Get Involved" 
        subtitle="Join our mission to empower the girl child in Zimbabwe." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get Involved" }]} 
      />

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 px-6 md:px-12 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6">Volunteer With Us</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Join our team and make a difference. We are always looking for passionate individuals who want to mentor, assist in workshops, or help organize community events.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full bg-accent" /> Mentor a student
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full bg-accent" /> Assist in skills training
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full bg-accent" /> Help with community outreach
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-off-white rounded-2xl p-8 border border-slate-100 shadow-sm"
          >
            <h3 className="font-display text-xl text-slate-900 mb-6">Sign Up to Volunteer</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
              <textarea placeholder="How would you like to help?" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white resize-none" />
              <button className="w-full bg-primary text-white px-8 py-3.5 rounded-lg font-body font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                <Send className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-20 px-6 md:px-12 bg-primary-dark text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-white w-8 h-8" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Partner With Us</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We welcome NGOs, donors, and organizations like UNICEF and Stronger Impact Fund to collaborate with us. Together, we can scale our impact and reach more communities.
            </p>
            <a href={`mailto:${SITE_DATA.contact.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-colors">
              <Send className="w-5 h-5" /> Contact Partnerships
            </a>
          </motion.div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-24 px-6 md:px-12 bg-off-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">Donate</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6">Support a Girl&apos;s Future Today</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Your financial support provides school fees, sanitary wear, and resources for our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.donationMethods.map((method, idx) => {
              const Icon = iconMap[method.icon] || CreditCard;
              return (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-accent w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900 mb-3">{method.name}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{method.description}</p>
                  <div className="bg-slate-50 py-3 px-4 rounded-lg border border-slate-200">
                    <span className="text-slate-900 font-semibold font-mono text-sm">{method.details}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
