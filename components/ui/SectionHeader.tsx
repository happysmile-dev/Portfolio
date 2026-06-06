import { cn } from "@/lib/utils";

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
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <span className="mb-4 inline-block rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-violet-300 uppercase">
        {badge}
      </span>
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
