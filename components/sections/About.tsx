import Image from "next/image";
import { aboutParagraphs, aboutStats, aboutTitle } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader badge="About Me" title={aboutTitle} />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-6">
            {aboutParagraphs.map((paragraph, i) => (
              <FadeIn key={paragraph.slice(0, 40)} delay={i * 0.1} direction="left">
                <p className="leading-relaxed text-zinc-400">{paragraph}</p>
              </FadeIn>
            ))}

            <FadeIn delay={0.3} direction="left">
              <div className="flex flex-wrap gap-3 pt-2">
                {["React", "Next.js", "Python", "AI/ML", "Node.js"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {aboutStats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>

          {/* Illustration — matches the height of the text column on lg */}
          <FadeIn delay={0.15} direction="right" className="flex items-center justify-center">
            <div className="group relative w-full max-w-md lg:h-full lg:max-w-none">
              {/* Glow behind the card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-violet-500/10 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 lg:h-full">
                {/* Top shimmer accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

                <div className="relative aspect-square w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-full">
                  <Image
                    src="/about-illustration.jpg"
                    alt="Developer illustration"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-violet-500/30 bg-[#050505]/90 px-4 py-2 text-xs font-medium text-violet-300 shadow-lg backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#050505]/90 px-4 py-2 text-xs font-medium text-cyan-300 shadow-lg backdrop-blur-sm">
                8+ Years Exp
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
