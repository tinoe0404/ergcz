"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import { Calendar, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/constants/data";

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Blog & News" 
        subtitle="Latest updates, stories, and news from EmpowerHer Zimbabwe." 
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]} 
      />

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.blogPosts.map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-primary-dark/5 group-hover:bg-primary-dark/10 transition-colors" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wide">
                     {post.category}
                   </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                  </div>
                  <h2 className="font-display text-xl text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-accent font-semibold text-sm group/btn w-fit">
                    Read More
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
