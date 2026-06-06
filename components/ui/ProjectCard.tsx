import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-[#151329] p-6 transition-colors hover:border-violet-500/30">
      <div className="mb-4 flex items-start justify-between">
        <span className="text-sm font-medium text-violet-500/60">
          {project.id}
        </span>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 transition-colors hover:text-white"
              aria-label={`${project.title} on GitHub`}
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 transition-colors hover:text-white"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-3 text-lg font-bold text-white">{project.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
