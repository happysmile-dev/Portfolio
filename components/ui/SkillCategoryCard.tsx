import type { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";
import { SkillItem } from "./SkillItem";

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

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
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
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
