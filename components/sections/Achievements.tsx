import { SectionHeader } from "@/components/ui/SectionHeader";

const achievements = [
  {
    title: "Hackathon Winner",
    description: "Built an ML solution under 48 hours with top jury scores.",
    year: "2025",
  },
  {
    title: "Open Source Contributor",
    description: "Merged PRs improving docs and tooling for developer communities.",
    year: "2024",
  },
  {
    title: "Certified ML Practitioner",
    description: "Completed advanced coursework in deep learning and MLOps.",
    year: "2024",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader badge="Achievements" title="Highlights & Milestones" />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-cyan-400">
                {item.year}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
