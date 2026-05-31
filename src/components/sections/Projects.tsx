import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Projects section — currently renders hardcoded data from @/data/projects.
 * To fetch from Supabase later, replace the import with an async fetch:
 *
 * const { data: projects } = await supabase.from("projects").select("*");
 */
export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            My Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-500" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            A selection of projects I&apos;ve built. Each one reflects my
            commitment to clean code, thoughtful design, and practical
            problem-solving.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
