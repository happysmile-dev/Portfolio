import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    accent: "purple",
    skills: [
      { name: "Python", iconSlug: "python", iconColor: "3776AB" },
      { name: "TensorFlow", iconSlug: "tensorflow", iconColor: "FF6F00" },
      { name: "Keras", iconSlug: "keras", iconColor: "D00000" },
      { name: "Scikit-learn", iconSlug: "scikitlearn", iconColor: "F7931E" },
      { name: "Streamlit", iconSlug: "streamlit", iconColor: "FF4B4B" },
      { name: "Anaconda", iconSlug: "anaconda", iconColor: "44A833" },
    ],
  },
  {
    title: "Frontend Development",
    accent: "blue",
    skills: [
      { name: "HTML", iconSlug: "html5", iconColor: "E34F26" },
      { name: "CSS", iconSlug: "css3", iconColor: "1572B6" },
      { name: "JavaScript", iconSlug: "javascript", iconColor: "F7DF1E" },
      { name: "React", iconSlug: "react", iconColor: "61DAFB" },
      { name: "Next.js", iconSlug: "nextdotjs", iconColor: "FFFFFF" },
      { name: "Tailwind", iconSlug: "tailwindcss", iconColor: "06B6D4" },
      { name: "Bootstrap", iconSlug: "bootstrap", iconColor: "7952B3" },
      { name: "Material UI", iconSlug: "mui", iconColor: "007FFF" },
    ],
  },
  {
    title: "Backend & Database",
    accent: "green",
    skills: [
      { name: "Node.js", iconSlug: "nodedotjs", iconColor: "339933" },
      { name: "Express", iconSlug: "express", iconColor: "FFFFFF" },
      { name: "MongoDB", iconSlug: "mongodb", iconColor: "47A248" },
      { name: "SQL", iconSlug: "postgresql", iconColor: "4169E1" },
      { name: "GraphQL", iconSlug: "graphql", iconColor: "E10098" },
      { name: "PHP", iconSlug: "php", iconColor: "777BB4" },
    ],
  },
];

export const secondarySkillCategories: SkillCategory[] = [
  {
    title: "DevOps & Tools",
    accent: "orange",
    skills: [
      { name: "Git", iconSlug: "git", iconColor: "F05032" },
      { name: "GitHub", iconSlug: "github", iconColor: "FFFFFF" },
      { name: "Docker", iconSlug: "docker", iconColor: "2496ED" },
      { name: "Bash", iconSlug: "gnubash", iconColor: "4EAA25" },
      { name: "Vercel", iconSlug: "vercel", iconColor: "FFFFFF" },
      { name: "XAMPP", iconSlug: "apache", iconColor: "D22128" },
    ],
  },
  {
    title: "Languages",
    accent: "red",
    skills: [
      { name: "C", iconSlug: "c", iconColor: "A8B9CC" },
      { name: "Python", iconSlug: "python", iconColor: "3776AB" },
      { name: "JavaScript", iconSlug: "javascript", iconColor: "F7DF1E" },
      { name: "PHP", iconSlug: "php", iconColor: "777BB4" },
    ],
  },
];
