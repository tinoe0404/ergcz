import { FadeIn } from "@/components/ui/FadeIn";
import { TrendingUp, ArrowDownCircle, Star } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  "trending-up": TrendingUp,
  "arrow-down-circle": ArrowDownCircle,
  "star": Star,
};

export function KeyResultsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.keyResults.map((result, idx) => {
            const Icon = iconMap[result.icon] || Star;
            return (
              <FadeIn key={result.title} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl text-slate-900 mb-3">{result.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{result.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
