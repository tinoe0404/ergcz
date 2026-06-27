import { FadeIn } from "@/components/ui/FadeIn";
import { Heart, Send } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

export function PartnerSection() {
  return (
    <section id="partner" className="py-20 px-6 md:px-12 bg-primary-dark text-white scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto">
            <Heart className="text-white w-8 h-8" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Partner With Us</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We partner with schools, the Ministry of Primary and Secondary Education (MoPSE), local women organizations, and civil societies. Together, we can scale our impact and reach more rural communities.
          </p>
          <a href={`mailto:${SITE_DATA.contact.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-colors">
            <Send className="w-5 h-5" /> Contact Partnerships
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
