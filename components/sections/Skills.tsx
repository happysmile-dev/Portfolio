import { skillCategories, secondarySkillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCategoryCard } from "@/components/ui/SkillCategoryCard";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge="My Skills"
          title="Tech Stack & Tools"
          description="Technologies I work with daily to build reliable, scalable products."
        />

        <div className="mb-6 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillCategoryCard key={category.title} category={category} delay={i * 0.1} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {secondarySkillCategories.map((category, i) => (
            <SkillCategoryCard key={category.title} category={category} delay={i * 0.1 + 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
