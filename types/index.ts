export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  variant?: "teal" | "gradient";
};

export type Skill = {
  name: string;
  iconSlug: string;
  iconColor?: string;
};

export type SkillCategory = {
  title: string;
  accent: "purple" | "blue" | "green" | "orange" | "red";
  skills: Skill[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  certificateUrl?: string;
};
