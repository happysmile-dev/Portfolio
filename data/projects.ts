import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "Infoeste News Portal",
    description:
      "Full-stack national news platform for Brazil covering 27 states and 5,570+ cities, with a multi-scope CMS, editorial workflow, and automated social distribution.",
    tags: ["Next.js 14", "Node.js", "PostgreSQL", "Prisma", "AWS"],
  },
  {
    id: "02",
    title: "Cosmic Classifier",
    description:
      "ML pipeline for classifying astronomical objects with high accuracy using deep learning and interactive visualizations.",
    tags: ["Python", "TensorFlow", "Streamlit"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "03",
    title: "Portfolio Platform",
    description:
      "Modern personal portfolio with dark cosmic theme, animated hero, and responsive project showcase.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "04",
    title: "Data Dashboard",
    description:
      "Real-time analytics dashboard with REST APIs, charts, and role-based access for business insights.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    id: "05",
    title: "NLP Sentiment API",
    description:
      "Scalable sentiment analysis API serving transformer models with caching and batch inference.",
    tags: ["Python", "FastAPI", "Hugging Face"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "06",
    title: "E-Commerce Store",
    description:
      "Full-stack online store with cart, checkout, and admin panel built for performance and SEO.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  }
];
