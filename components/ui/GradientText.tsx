import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3";
  className?: string;
};

export function GradientText({
  children,
  as: Tag = "span",
  className,
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
