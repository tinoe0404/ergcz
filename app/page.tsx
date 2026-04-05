import Hero from "@/components/sections/Hero";
import MissionStrip from "@/components/sections/MissionStrip";
import Pillars from "@/components/sections/Pillars";
import ImpactCounter from "@/components/sections/ImpactCounter";
import Partners from "@/components/sections/Partners";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStrip />
      <Pillars />
      <ImpactCounter />
      <Partners />
      <CtaBanner />
    </>
  );
}
