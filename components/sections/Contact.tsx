"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Code2, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";

const socials = [
  {
    label: "GitHub",
    href: siteConfig.githubUrl,
    icon: Code2,
    color: "hover:border-white/40 hover:text-white",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    color: "hover:border-violet-500/50 hover:text-violet-400",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message.");
      }

      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it."
        />

        {/* Social links */}
        <FadeIn delay={0.1}>
          <div className="mb-8 flex items-center justify-center gap-3">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-200 ${color}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center gap-4 py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400">
                  <Send className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-center text-zinc-400">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20"
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20"
                  />
                </div>

                {error && (
                  <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </p>
                )}

                <Button type="submit" disabled={sending} className="mt-8 w-full py-3">
                  {sending ? (
                    <>
                      Sending...
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
