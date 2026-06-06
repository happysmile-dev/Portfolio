export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1033_0%,_#050505_50%,_#050505_100%)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 80px 120px, rgba(139,92,246,0.5), transparent), radial-gradient(1px 1px at 160px 80px, rgba(45,212,191,0.4), transparent)",
          backgroundSize: "200px 200px",
        }}
      />
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full border border-violet-500/20 opacity-30" />
      <div className="absolute -right-24 top-1/3 h-48 w-48 rotate-45 border border-cyan-500/20 opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 h-32 w-32 border border-violet-500/10 opacity-20" />
    </div>
  );
}
