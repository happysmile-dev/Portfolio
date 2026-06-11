import type { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";
import { SkillItem } from "./SkillItem";
import { FadeIn } from "./FadeIn";

const accentMap = {
  purple: "text-violet-400",
  blue: "text-blue-400",
  green: "text-emerald-400",
  orange: "text-orange-400",
  red: "text-red-400",
};

const dotMap = {
  purple: "bg-violet-500",
  blue: "bg-blue-500",
  green: "bg-emerald-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

const glowMap = {
  purple: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  blue: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  green: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  orange: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  red: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
};

const borderMap = {
  purple: "group-hover:border-violet-500/30",
  blue: "group-hover:border-blue-500/30",
  green: "group-hover:border-emerald-500/30",
  orange: "group-hover:border-orange-500/30",
  red: "group-hover:border-red-500/30",
};

type SkillCategoryCardProps = {
  category: SkillCategory;
  delay?: number;
};

export function SkillCategoryCard({ category, delay = 0 }: SkillCategoryCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div
        className={cn(
          "group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300",
          glowMap[category.accent],
          borderMap[category.accent],
        )}
      >
        <h3
          className={cn(
            "mb-6 flex items-center gap-2 text-sm font-semibold",
            accentMap[category.accent],
          )}
        >
          <span className={cn("h-2 w-2 rounded-full", dotMap[category.accent])} />
          {category.title}
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {category.skills.map((skill, i) => (
            <SkillItem key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
