import { FadeIn } from "@/components/ui/FadeIn";
import { SITE_DATA } from "@/constants/data";

export function AchievementsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">Achievements</span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 leading-relaxed mb-6">
            {SITE_DATA.impactAchievements}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </FadeIn>
      </div>
    </section>
  );
}
