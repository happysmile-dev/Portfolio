import { aboutParagraphs, aboutStats, aboutTitle } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge="About Me"
          title={aboutTitle}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-zinc-400">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
