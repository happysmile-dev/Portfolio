import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "Cosmic Classifier",
    description:
      "ML pipeline for classifying astronomical objects with high accuracy using deep learning and interactive visualizations.",
    tags: ["Python", "TensorFlow", "Streamlit"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "02",
    title: "Portfolio Platform",
    description:
      "Modern personal portfolio with dark cosmic theme, animated hero, and responsive project showcase.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "03",
    title: "Data Dashboard",
    description:
      "Real-time analytics dashboard with REST APIs, charts, and role-based access for business insights.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    id: "04",
    title: "NLP Sentiment API",
    description:
      "Scalable sentiment analysis API serving transformer models with caching and batch inference.",
    tags: ["Python", "FastAPI", "Hugging Face"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "05",
    title: "E-Commerce Store",
    description:
      "Full-stack online store with cart, checkout, and admin panel built for performance and SEO.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "06",
    title: "Chat Assistant",
    description:
      "AI-powered chat widget integrated with custom knowledge base and streaming responses.",
    tags: ["OpenAI", "React", "Node.js"],
    githubUrl: "https://github.com",
  },
];
