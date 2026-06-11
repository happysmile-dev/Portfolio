"use client";

import { useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type TrailParticle = {
  x: number;
  y: number;
  vx: number;      // tiny drift velocity
  vy: number;
  age: number;     // frames alive
  maxAge: number;  // lifetime in frames
  r: number;
  g: number;
  b: number;
  radius: number;
  active: boolean;
};

// ─── Palette ─────────────────────────────────────────────────────────────────

const COLORS: [number, number, number][] = [
  [139,  92, 246], // violet
  [ 45, 212, 191], // teal
  [167, 139, 250], // soft violet
  [ 94, 234, 212], // soft teal
  [196, 181, 253], // lavender
  [255, 255, 255], // white accent
];

// ─── Constants ───────────────────────────────────────────────────────────────

const POOL_SIZE  = 200;  // max simultaneous particles
const SPAWN_DIST =   8;  // px between consecutive spawns along the path
const MAX_DIST   = 220;  // px — particle fully invisible at this distance from cursor

// ─── Component ───────────────────────────────────────────────────────────────

export function CustomCursor() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cvs = ref.current!;
    const ctx = cvs.getContext("2d")!;

    // Mouse state
    let mx = -400, my = -400;
    let lastSpawnX = -400, lastSpawnY = -400;
    let clicking   = false;
    let ringScale  = 1;
    let conicAngle = 0;
    let raf = 0;

    // ── Fixed pool of particles (ring buffer) ────────────────────────────────
    const pool: TrailParticle[] = Array.from({ length: POOL_SIZE }, () => ({
      x: -999, y: -999, vx: 0, vy: 0,
      age: 9999, maxAge: 1,
      r: 255, g: 255, b: 255,
      radius: 1,
      active: false,
    }));
    let head = 0; // next slot to overwrite

    function spawn(x: number, y: number, extraRadius = 0) {
      const p  = pool[head % POOL_SIZE];
      const [r, g, b] = COLORS[Math.floor(Math.random() * COLORS.length)];
      p.x       = x + (Math.random() - 0.5) * 2;
      p.y       = y + (Math.random() - 0.5) * 2;
      p.vx      = (Math.random() - 0.5) * 0.5;
      p.vy      = (Math.random() - 0.5) * 0.5;
      p.age     = 0;
      p.maxAge  = 70 + Math.random() * 60;
      p.r = r; p.g = g; p.b = b;
      p.radius  = 1.2 + Math.random() * 3.8 + extraRadius;
      p.active  = true;
      head++;
    }

    // ── Resize ───────────────────────────────────────────────────────────────

    function resize() {
      cvs.width  = window.innerWidth;
      cvs.height = window.innerHeight;
    }

    // ── Draw loop ─────────────────────────────────────────────────────────────

    function draw() {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      conicAngle += 0.018;
      ringScale  += ((clicking ? 0.65 : 1.0) - ringScale) * 0.20;

      // ── Update + draw trail particles ──────────────────────────────────────

      for (const p of pool) {
        if (!p.active) continue;

        p.age++;
        if (p.age >= p.maxAge) { p.active = false; continue; }

        // Gentle drift that decays to zero
        p.x  += p.vx;
        p.y  += p.vy;
        p.vx *= 0.91;
        p.vy *= 0.91;

        // Age-based fade: linear
        const ageFade = 1 - p.age / p.maxAge;

        // Distance from current cursor: quadratic fade
        const dx   = p.x - mx;
        const dy   = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const dRaw = Math.max(0, 1 - dist / MAX_DIST);
        const distFade = dRaw * dRaw; // steeper falloff near cursor edge

        // Combined opacity: must be BOTH recent AND close to cursor to be bright
        const opacity = ageFade * distFade * 0.95;
        if (opacity < 0.012) continue;

        // Radius shrinks gently with age and distance
        const radius = p.radius * (0.4 + 0.6 * ageFade) * (0.5 + 0.5 * distFade);
        if (radius < 0.15) continue;

        // Glow halo
        const gr = radius * 4.5;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gr);
        glow.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${opacity * 0.45})`);
        glow.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, gr, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Solid core
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${opacity})`;
        ctx.fill();
      }

      // ── Custom cursor ring + dot ───────────────────────────────────────────

      if (mx < -300) return;

      ctx.save();
      ctx.translate(mx, my);
      ctx.scale(ringScale, ringScale);

      // Soft aura
      const aura = ctx.createRadialGradient(0, 0, 0, 0, 0, 42);
      aura.addColorStop(0,    "rgba(139, 92, 246, 0.22)");
      aura.addColorStop(0.45, "rgba( 45,212, 191, 0.12)");
      aura.addColorStop(1,    "rgba( 45,212, 191, 0.00)");
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.fillStyle = aura;
      ctx.fill();

      // Rotating conic-gradient ring
      ctx.save();
      ctx.rotate(conicAngle);
      const ring = ctx.createConicGradient(0, 0, 0);
      ring.addColorStop(0.00, "rgba(139,  92, 246, 0.95)");
      ring.addColorStop(0.25, "rgba( 45, 212, 191, 0.95)");
      ring.addColorStop(0.50, "rgba(167, 139, 250, 0.95)");
      ring.addColorStop(0.75, "rgba( 94, 234, 212, 0.95)");
      ring.addColorStop(1.00, "rgba(139,  92, 246, 0.95)");
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.strokeStyle = ring;
      ctx.lineWidth   = 2;
      ctx.stroke();
      ctx.restore();

      // Center dot
      const dot = ctx.createRadialGradient(0, 0, 0, 0, 0, 5);
      dot.addColorStop(0,   "rgba(255, 255, 255, 1.0)");
      dot.addColorStop(0.5, "rgba(196, 181, 253, 0.9)");
      dot.addColorStop(1,   "rgba(139,  92, 246, 0.0)");
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fillStyle = dot;
      ctx.fill();

      ctx.restore();
    }

    // ── Event listeners ───────────────────────────────────────────────────────

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      // Spawn along path: only when the cursor has moved SPAWN_DIST px since last spawn
      const dx   = mx - lastSpawnX;
      const dy   = my - lastSpawnY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist >= SPAWN_DIST) {
        // Interpolate spawn points so fast movement doesn't leave gaps
        const steps = Math.max(1, Math.floor(dist / SPAWN_DIST));
        for (let i = 0; i < steps; i++) {
          const t = (i + 1) / steps;
          spawn(lastSpawnX + dx * t, lastSpawnY + dy * t);
        }
        lastSpawnX = mx;
        lastSpawnY = my;
      }
    };

    const onDown = () => {
      clicking = true;
      // Click burst: 8 larger particles exploding from cursor
      for (let i = 0; i < 8; i++) spawn(mx, my, 2);
    };

    const onUp     = () => { clicking = false; };
    const onLeave  = () => { mx = -400; my = -400; };
    const onResize = () => resize();

    resize();
    draw();

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize",     onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize",     onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    />
  );
}
