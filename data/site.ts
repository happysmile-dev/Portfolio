import type { NavLink, Stat } from "@/types";

export const siteConfig = {
  name: "Kaito Yamamoto",
  nameInitial: "K",
  location: "Japan",
  role: "Senior Full Stack & AI Developer",
  tagline:
    "Senior Full Stack & AI developer from Japan with 8+ years of hands-on experience building projects from frontend to backend. I bring active motivation and trustworthy partnership to help your business succeed.",
  typingRoles: [
    "Senior Full Stack Developer",
    "AI Developer",
    "Full Stack Engineer",
    "Technology Partner",
  ],
  resumeUrl: "/resume.pdf",
  email: "hello@example.com",
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const aboutStats: Stat[] = [
  { value: "8+", label: "Years Experience", variant: "teal" },
  { value: "50+", label: "Projects Delivered", variant: "teal" },
  { value: "Full Stack", label: "& AI Development", variant: "gradient" },
  { value: "Japan", label: "Based · Global Ready", variant: "gradient" },
];

export const aboutParagraphs = [
  "Welcome to my profile page. I hope you achieve great success in your business.",
  "My name is Kaito Yamamoto from Japan, and I am a Senior Full Stack & AI developer with 8+ years of hands-on experience developing projects from frontend to backend.",
  "I value active motivation and trust in every partnership, and I will support you with my best effort.",
];

export const aboutTitle = "Your Technology Partner";
