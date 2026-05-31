import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image placeholder */}
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-50">
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
            <svg
              className="h-8 w-8 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4 border-t border-slate-100 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
