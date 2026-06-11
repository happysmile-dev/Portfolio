export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,_#1a1033_0%,_#050505_60%)]" />

      {/* Grid */}
      <div className="grid-bg absolute inset-0 opacity-60" />

      {/* Primary violet orb */}
      <div
        className="animate-glow-pulse absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />

      {/* Teal orb bottom-right */}
      <div
        className="animate-glow-pulse absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.5) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Mid-page violet orb */}
      <div
        className="animate-float-slow absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
          animationDelay: "1s",
        }}
      />

      {/* Spinning orbit rings */}
      <div className="animate-spin-slow absolute -left-20 top-1/4 h-80 w-80 rounded-full border border-violet-500/10" />
      <div className="animate-spin-reverse absolute -right-10 top-1/3 h-60 w-60 rounded-full border border-cyan-500/10" />
      <div className="animate-spin-slow absolute bottom-1/4 left-1/3 h-48 w-48 rounded-full border border-violet-500/8" style={{ animationDuration: "30s" }} />

      {/* Star field */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 25% 40%, rgba(139,92,246,0.7), transparent),
            radial-gradient(1.5px 1.5px at 40% 10%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 55% 60%, rgba(45,212,191,0.6), transparent),
            radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1.5px 1.5px at 80% 70%, rgba(139,92,246,0.5), transparent),
            radial-gradient(1px 1px at 90% 45%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 15% 80%, rgba(45,212,191,0.5), transparent),
            radial-gradient(1px 1px at 60% 85%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1.5px 1.5px at 35% 70%, rgba(139,92,246,0.4), transparent),
            radial-gradient(1px 1px at 48% 35%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 75% 50%, rgba(45,212,191,0.4), transparent)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Shooting star 1 */}
      <div
        className="absolute h-px w-24 opacity-0"
        style={{
          top: "20%",
          left: "10%",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent)",
          animation: "shoot 5s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* Shooting star 2 */}
      <div
        className="absolute h-px w-16 opacity-0"
        style={{
          top: "50%",
          left: "60%",
          background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.8), transparent)",
          animation: "shoot 7s ease-in-out infinite",
          animationDelay: "5s",
        }}
      />
    </div>
  );
}
