"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Users, Send } from "lucide-react";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="py-20 px-6 md:px-12 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Users className="text-primary w-8 h-8" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6">Volunteer With Us</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Join our team and make a difference. We are always looking for passionate individuals who want to mentor girls in STEM, assist in science workshops, or help with community outreach.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-2 h-2 rounded-full bg-accent" /> Mentor a girl in STEM
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-2 h-2 rounded-full bg-accent" /> Assist in science workshops
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-2 h-2 rounded-full bg-accent" /> Help with community outreach
            </li>
          </ul>
        </FadeIn>
        
        <FadeIn direction="left">
          <div className="bg-off-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h3 className="font-display text-xl text-slate-900 mb-6">Sign Up to Volunteer</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" />
              <textarea placeholder="How would you like to help?" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white resize-none" />
              <button className="w-full bg-primary text-white px-8 py-3.5 rounded-lg font-body font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                <Send className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
