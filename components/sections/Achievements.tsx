import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { certifications } from "@/data/certifications";

export function Achievements() {
  return (
    <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge="Achievements"
          title="Verified Certifications"
          description="Industry-recognized certifications, each linked to its official verification page."
        />

        <div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <FadeIn
                key={cert.id}
                delay={(i % 3) * 0.15}
                direction="up"
                className={
                  i === certifications.length - 1 && certifications.length % 3 === 1
                    ? "lg:col-start-2"
                    : undefined
                }
              >
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} — ${cert.issuer} certificate`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-3 py-4">
                    <div>
                      <p className="font-semibold text-white">{cert.title}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-emerald-400" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
