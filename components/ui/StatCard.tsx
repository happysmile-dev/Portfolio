import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

type StatCardProps = {
  stat: Stat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p
        className={cn(
          "text-3xl font-bold sm:text-4xl",
          stat.variant === "teal" && "text-cyan-400",
          stat.variant === "gradient" &&
            "bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent",
          !stat.variant && "text-white",
        )}
      >
        {stat.value}
      </p>
      <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
    </div>
  );
}
