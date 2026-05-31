import type { Project } from "@/types/project";

/**
 * Hardcoded project data for now.
 * Replace this with a Supabase fetch (e.g. supabase.from("projects").select("*")) later.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "Event Registration System",
    description:
      "A full-stack web application for managing event sign-ups, attendee tracking, and automated confirmation emails. Built with Spring Boot and MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "2",
    title: "Lost-and-Found Platform",
    description:
      "A campus lost-and-found platform where students can report and search for lost items. Features image uploads, category filtering, and a responsive UI.",
    technologies: ["JavaScript", "HTML", "CSS", "MySQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS. Designed for easy integration with Supabase for dynamic project and contact data.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://jess-portfolio-three.vercel.app/",
  },
];
