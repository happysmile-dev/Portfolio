"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Sparkles, ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { TypingText } from "@/components/ui/TypingText";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
} as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6"
    >
      {/* Decorative floating badges */}
      <motion.div
        className="absolute left-[8%] top-[30%] hidden rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300 backdrop-blur-sm lg:flex items-center gap-2"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-3 w-3" /> AI Developer
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[35%] hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-sm lg:flex items-center gap-2"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        Full Stack
      </motion.div>

      <motion.div
        className="absolute left-[12%] bottom-[30%] hidden rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300 backdrop-blur-sm lg:flex items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        8+ Years Exp
      </motion.div>

      <motion.div
        className="absolute right-[12%] bottom-[32%] hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur-sm lg:flex items-center gap-2"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        50+ Projects
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer spinning gradient ring */}
            <motion.div
              className="absolute -inset-1.5 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #8b5cf6, #2dd4bf, #8b5cf6)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner glow pulse */}
            <motion.div
              className="absolute -inset-3 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Avatar image */}
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-[#050505] sm:h-40 sm:w-40">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#050505] bg-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </span>
          </div>
        </motion.div>

        {/* Location badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire · {siteConfig.location}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi! I&apos;m
          <br />
          <GradientText as="span" className="mt-2 block shimmer-text">
            {siteConfig.name}
          </GradientText>
        </motion.h1>

        {/* Typing animation */}
        <motion.div variants={item} className="mt-6">
          <TypingText words={siteConfig.typingRoles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#contact" className="glow-violet">
            Hire Me
          </Button>
          <Button href={siteConfig.resumeUrl} variant="outline" download>
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
