import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";
import Image from "next/image";
import { SITE_DATA } from "@/constants/data";

export function SuccessStorySection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/about/community-outreach-1.jpeg"
              alt="ERGCZ students with donated supplies"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
        
        <FadeIn direction="left">
          <div className="bg-primary-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
               <Quote className="w-full h-full text-white" />
            </div>
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-accent mx-auto mb-8" />
              <p className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-8">
                &quot;{SITE_DATA.successStory.quote}&quot;
              </p>
              <span className="text-white/80 font-body uppercase tracking-wider text-sm font-semibold">
                {SITE_DATA.successStory.author}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
