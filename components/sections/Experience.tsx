"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Experience"
          title="Professional Journey"
          description="Where I've applied my skills and made an impact."
        />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent md:left-8" />

          <div className="space-y-10">
            {experience.map((item, idx) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                className="relative pl-16 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-violet-500 bg-[#050505] md:left-5.5">
                  <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                </div>

                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 sm:p-8">
                  {/* Top shimmer */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 font-semibold text-violet-300">{item.company}</p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </span>
                  </div>

                  <p className="mb-6 flex items-center gap-1.5 text-sm text-zinc-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </p>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bullet.slice(0, 50)}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + bi * 0.06 }}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>

                  {item.certificateUrl && (
                    <div className="mt-6">
                      <Button
                        href={item.certificateUrl}
                        variant="outline"
                        className="text-violet-300"
                      >
                        <FileText className="h-4 w-4" />
                        View Certificate
                      </Button>
                    </div>
                  )}
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
