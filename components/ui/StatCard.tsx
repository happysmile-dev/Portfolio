"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

type StatCardProps = {
  stat: Stat;
  index?: number;
};

export function StatCard({ stat, index = 0 }: StatCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/8"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.1), transparent 70%)" }}
      />
      <p
        className={cn(
          "relative text-3xl font-bold sm:text-4xl",
          stat.variant === "teal" && "text-cyan-400",
          stat.variant === "gradient" &&
            "bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent",
          !stat.variant && "text-white",
        )}
      >
        {stat.value}
      </p>
      <p className="relative mt-2 text-sm text-zinc-400">{stat.label}</p>
    </motion.div>
  );
}
