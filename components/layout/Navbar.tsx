"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
            {siteConfig.nameInitial}
          </span>
          <GradientText className="text-base sm:text-lg">
            {siteConfig.name}
          </GradientText>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact">Hire Me</Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-white/5 bg-[#050505]/95 px-4 py-4 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-zinc-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="#contact" className="w-full">
              Hire Me
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
