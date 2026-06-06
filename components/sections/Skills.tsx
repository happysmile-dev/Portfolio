import {
  skillCategories,
  secondarySkillCategories,
} from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCategoryCard } from "@/components/ui/SkillCategoryCard";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader badge="My Skills" title="Tech Stack & Tools" />

        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {secondarySkillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
