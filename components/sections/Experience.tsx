import { FileText } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader badge="Experience" title="Professional Journey" />

        <div className="space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                  {item.period}
                </span>
              </div>

              <p className="font-medium text-violet-300">{item.company}</p>
              <p className="mb-6 text-sm text-zinc-500">{item.location}</p>

              <ul className="space-y-3">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 50)}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-cyan-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {item.certificateUrl && (
                <div className="mt-6">
                  <Button
                    href={item.certificateUrl}
                    variant="outline"
                    className="text-violet-300"
                  >
                    <FileText className="h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
