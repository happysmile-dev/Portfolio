import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center text-sm text-zinc-500">
      <p>
        © {year} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
