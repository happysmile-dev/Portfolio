import type { Skill } from "@/types";

type SkillItemProps = {
  skill: Skill;
};

export function SkillItem({ skill }: SkillItemProps) {
  const color = skill.iconColor ?? "FFFFFF";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${skill.iconSlug}/${color}`}
          alt={skill.name}
          width={28}
          height={28}
          className="h-7 w-7"
        />
      </div>
      <span className="text-center text-xs text-zinc-300">{skill.name}</span>
    </div>
  );
}
