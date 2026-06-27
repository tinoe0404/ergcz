"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_DATA } from "@/constants/data";

export default function WhoWeAre() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6 leading-relaxed">
            {SITE_DATA.whoWeAre}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            {SITE_DATA.aboutDescription}
          </p>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-4 right-4 left-[-16px] bottom-[-16px] border-[12px] border-primary-light/30 rounded-xl z-0" />
          <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/community-outreach-2.jpeg"
              alt="ERGCZ community outreach with students"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
