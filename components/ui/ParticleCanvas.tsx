"use client";

import { useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Particle = {
  x: number;
  y: number;
  angle: number;       // current movement direction (radians)
  turnSpeed: number;   // per-particle drift (creates individual curves)
  speed: number;
  radius: number;
  colorIdx: number;    // index into the active palette
  opacity: number;
  pulsePhase: number;  // for gentle size / brightness pulsing
  pulseSpeed: number;
};

// ─── Color palettes ──────────────────────────────────────────────────────────

const DARK_PALETTE: [number, number, number][] = [
  [139,  92, 246], // violet
  [ 45, 212, 191], // teal
  [167, 139, 250], // soft violet
  [ 94, 234, 212], // soft teal
  [196, 181, 253], // lavender
  [255, 255, 255], // white accent
];

// ─── Constants ───────────────────────────────────────────────────────────────

const CONNECTION_DIST   = 160;   // px — max distance for a connecting line
const MOUSE_RADIUS      = 120;   // px — repulsion radius
const MOUSE_FORCE       = 1.2;   // repulsion strength
const FLOW_INFLUENCE    = 0.012; // how strongly the global field bends particles
const FLOW_SPEED        = 0.0004; // how fast the field rotates over time

// ─── Helpers ─────────────────────────────────────────────────────────────────

function particleCount(): number {
  return window.innerWidth < 640 ? 45 : window.innerWidth < 1024 ? 70 : 95;
}

function makeParticle(
  W: number,
  H: number,
  paletteLen: number,
): Particle {
  const angle = Math.random() * Math.PI * 2;
  return {
    x:          Math.random() * W,
    y:          Math.random() * H,
    angle,
    turnSpeed:  (Math.random() - 0.5) * 0.022, // −0.011 … +0.011 rad/frame
    speed:      0.18 + Math.random() * 0.38,
    radius:     0.9 + Math.random() * 2.2,
    colorIdx:   Math.floor(Math.random() * paletteLen),
    opacity:    0.45 + Math.random() * 0.55,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.018 + Math.random() * 0.022,
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Non-null assertion is safe here: useEffect only runs after mount
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d");
    if (!ctx) return;
    // Capture as const-typed locals so nested functions keep the narrowed type
    const cvs = canvas;
    const cx  = ctx;

    let raf     = 0;
    let frame   = 0;
    let mouseX  = -9999;
    let mouseY  = -9999;
    let particles: Particle[] = [];

    // ── Initialise / re-initialise ──────────────────────────────────────────

    function init() {
      cvs.width  = window.innerWidth;
      cvs.height = window.innerHeight;
      const n = particleCount();
      particles = Array.from({ length: n }, () =>
        makeParticle(cvs.width, cvs.height, DARK_PALETTE.length),
      );
    }

    // ── Draw loop ────────────────────────────────────────────────────────────

    function draw() {
      raf = requestAnimationFrame(draw);
      frame++;

      const W = cvs.width;
      const H = cvs.height;
      cx.clearRect(0, 0, W, H);

      const palette = DARK_PALETTE;
      const t       = frame * FLOW_SPEED; // slowly advancing time for the field

      // ── Update positions ─────────────────────────────────────────────────

      for (const p of particles) {
        // Global flow field: a gentle sine-based vector that rotates over time.
        // Different x/y frequencies give the field a non-uniform, swirling feel.
        const fieldAngle =
          Math.sin(p.x / W * Math.PI * 1.5 + t) * Math.PI * 0.6 +
          Math.cos(p.y / H * Math.PI * 1.0 + t * 0.7) * Math.PI * 0.4;

        // Blend particle's own angle toward the field angle
        const da = fieldAngle - p.angle;
        // Normalise to [−π, π] so the rotation always takes the short arc
        const norm = da - Math.round(da / (Math.PI * 2)) * Math.PI * 2;
        p.angle    += norm * FLOW_INFLUENCE + p.turnSpeed;

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Mouse repulsion
        const dxM = p.x - mouseX;
        const dyM = p.y - mouseY;
        const dM  = Math.sqrt(dxM * dxM + dyM * dyM);
        if (dM < MOUSE_RADIUS && dM > 0) {
          const f  = ((MOUSE_RADIUS - dM) / MOUSE_RADIUS) ** 2 * MOUSE_FORCE;
          p.x     += (dxM / dM) * f;
          p.y     += (dyM / dM) * f;
          // Nudge angle away from mouse so particles don't get stuck
          const repelAngle = Math.atan2(dyM, dxM);
          p.angle  = p.angle * 0.94 + repelAngle * 0.06;
        }

        // Soft-wrap: particles that drift off an edge reappear on the opposite
        // side with a small random offset so they don't form visible lines.
        const pad = 20;
        if (p.x < -pad) p.x = W + pad - Math.random() * 10;
        if (p.x > W + pad) p.x = -pad + Math.random() * 10;
        if (p.y < -pad) p.y = H + pad - Math.random() * 10;
        if (p.y > H + pad) p.y = -pad + Math.random() * 10;

        p.pulsePhase += p.pulseSpeed;
      }

      // ── Draw lines ───────────────────────────────────────────────────────
      // Only check pairs; skip if both are outside viewport (micro-optimisation)

      const maxAlpha = 0.20;

      for (let i = 0; i < particles.length - 1; i++) {
        const a = particles[i];
        const [ar, ag, ab] = palette[a.colorIdx];

        for (let j = i + 1; j < particles.length; j++) {
          const b   = particles[j];
          const dx  = a.x - b.x;
          const dy  = a.y - b.y;
          // Skip expensive sqrt when clearly too far
          if (Math.abs(dx) > CONNECTION_DIST || Math.abs(dy) > CONNECTION_DIST) continue;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= CONNECTION_DIST) continue;

          const t    = 1 - dist / CONNECTION_DIST;
          const alpha = t * t * maxAlpha; // quadratic falloff → sharp near, fades far

          const [br, bg, bb] = palette[b.colorIdx];
          const grad = cx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(${ar},${ag},${ab},${alpha})`);
          grad.addColorStop(1, `rgba(${br},${bg},${bb},${alpha})`);

          cx.beginPath();
          cx.moveTo(a.x, a.y);
          cx.lineTo(b.x, b.y);
          cx.strokeStyle = grad;
          cx.lineWidth   = 0.65;
          cx.stroke();
        }
      }

      // ── Draw particles ───────────────────────────────────────────────────

      for (const p of particles) {
        const [r, g, b] = palette[p.colorIdx];
        const pulse   = 0.75 + 0.25 * Math.sin(p.pulsePhase);
        const alpha   = p.opacity * pulse;
        const glowR   = p.radius * 6;

        // Soft glow halo
        const glow = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        glow.addColorStop(0,   `rgba(${r},${g},${b},${alpha * 0.55})`);
        glow.addColorStop(0.4, `rgba(${r},${g},${b},${alpha * 0.20})`);
        glow.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        cx.beginPath();
        cx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        cx.fillStyle = glow;
        cx.fill();

        // Solid core
        cx.beginPath();
        cx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
        cx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        cx.fill();
      }
    }

    // ── Event listeners ──────────────────────────────────────────────────────

    const onResize = () => { init(); };
    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -9999; mouseY = -9999; };

    window.addEventListener("resize",     onResize);
    window.addEventListener("mousemove",  onMouseMove,  { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",     onResize);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -9 }}
      aria-hidden="true"
    />
  );
}
