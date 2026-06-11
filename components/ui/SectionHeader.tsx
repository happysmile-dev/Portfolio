import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto mb-16 max-w-3xl text-center", className)}>
      <FadeIn>
        <span className="mb-4 inline-block rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-violet-300 uppercase">
          {badge}
        </span>
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>

        {/* Animated decorative line */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500" />
          <div className="h-1.5 w-1.5 rotate-45 bg-violet-500" />
          <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />
          <div className="h-1.5 w-1.5 rotate-45 bg-cyan-400" />
          <div className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        {description && (
          <p className="mt-5 text-base text-zinc-400 sm:text-lg">{description}</p>
        )}
      </FadeIn>
    </div>
  );
}
