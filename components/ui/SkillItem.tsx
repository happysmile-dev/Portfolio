"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";

type SkillItemProps = {
  skill: Skill;
  index?: number;
};

export function SkillItem({ skill, index = 0 }: SkillItemProps) {
  const color = skill.iconColor ?? "FFFFFF";

  return (
    <motion.div
      className="group flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
    >
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-white/10"
        style={{
          boxShadow: "0 0 0px rgba(139,92,246,0)",
          transition: "box-shadow 0.3s, background 0.3s, border-color 0.3s",
        }}
      >
        {/* Glow effect on hover via CSS group */}
        <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `0 0 20px rgba(139,92,246,0.4)` }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${skill.iconSlug}/${color}`}
          alt={skill.name}
          width={28}
          height={28}
          className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-center text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">
        {skill.name}
      </span>
    </motion.div>
  );
}
