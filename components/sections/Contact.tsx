"use client";

import { Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up EmailJS, Resend, or API route when ready
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Work Together"
          description="Questions, thoughts, or just want to say hello?"
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="subject" className="mb-2 block text-sm text-zinc-300">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or idea..."
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none"
            />
          </div>

          <Button type="submit" className="mt-8 w-full py-3">
            Send Message
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
