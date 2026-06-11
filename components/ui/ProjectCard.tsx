"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151329] p-6 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.4)" }}
    >
      {/* Glow overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />

      {/* Top shimmer line on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mb-4">
        <span className="text-sm font-bold text-violet-500/50 group-hover:text-violet-400 transition-colors">
          {project.id}
        </span>
      </div>

      <h3 className="relative mb-3 text-lg font-bold text-white transition-colors group-hover:text-violet-100">
        {project.title}
      </h3>
      <p className="relative mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="relative flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200 transition-colors group-hover:border-violet-500/40 group-hover:bg-violet-500/15"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
