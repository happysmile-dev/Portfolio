import { Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { TypingText } from "@/components/ui/TypingText";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6"
    >
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Hi! I&apos;m
        <br />
        <GradientText as="span" className="mt-2 block">
          {siteConfig.name}
        </GradientText>
      </h1>

      <div className="mt-6">
        <TypingText words={siteConfig.typingRoles} />
      </div>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        {siteConfig.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="#contact">Hire Me</Button>
        <Button href={siteConfig.resumeUrl} variant="outline">
          <Download className="h-4 w-4" />
          Resume
        </Button>
      </div>

      <a
        href="#about"
        className="mt-16 animate-bounce text-zinc-500"
        aria-label="Scroll to about section"
      >
        ↓
      </a>
    </section>
  );
}
