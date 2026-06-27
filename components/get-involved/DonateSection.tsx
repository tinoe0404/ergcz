import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CreditCard, Smartphone, Landmark, Gift, Shirt, BookOpen, Package, Send } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "smartphone": Smartphone,
  "landmark": Landmark,
  "credit-card": CreditCard,
};

export function DonateSection() {
  return (
    <section id="donate" className="py-24 px-6 md:px-12 bg-off-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          badge="Donate"
          title="Support a Girl's Future Today"
          subtitle="Your financial support provides school fees, sanitary wear, and resources for our programs."
        />

        <div className="grid grid-cols-1 max-w-md mx-auto gap-8">
          {SITE_DATA.donationMethods.map((method, idx) => {
            const Icon = iconMap[method.icon] || CreditCard;
            return (
              <FadeIn key={method.name} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-accent w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900 mb-3">{method.name}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{method.description}</p>
                  <div className="bg-slate-50 py-3 px-4 rounded-lg border border-slate-200">
                    <span className="text-slate-900 font-semibold font-mono text-sm">{method.details}</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DonateItemsSection() {
  return (
    <section id="donate-items" className="py-24 px-6 md:px-12 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          badge="Donate Items"
          title="Give What You Can"
          subtitle="Beyond financial contributions, you can donate essential items that directly support girls in need. Every item makes a difference."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Gift, title: "Sanitary Pads", description: "Help girls stay in school by providing menstrual hygiene products." },
            { icon: Shirt, title: "Clothes & Uniforms", description: "Donate clean clothes and school uniforms for young girls." },
            { icon: BookOpen, title: "School Supplies", description: "Books, stationery, bags, and other educational materials." },
            { icon: Package, title: "Care Packages", description: "Toiletries, blankets, shoes, and other essentials." },
          ].map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1}>
              <div className="bg-off-white rounded-2xl p-6 border border-slate-100 text-center hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="font-display text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center bg-off-white rounded-2xl p-8 border border-slate-100 max-w-2xl mx-auto">
            <p className="text-slate-700 mb-4">
              To arrange a drop-off or collection, please get in touch with us.
            </p>
            <a
              href={`mailto:${SITE_DATA.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Send className="w-4 h-4" /> Contact Us to Donate Items
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
