import projectsData from "@/data/projects.json";
import type { Project } from "@/types";

const projects = projectsData as Project[];

export default function FeaturedProjects() {
  return (
    <div id="projects">
      <h2 className="text-2xl font-bold mb-8 text-blue-900">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <div
            key={project.title}
            className="bg-white/90 rounded-lg shadow p-6 flex flex-col gap-3 border border-blue-100 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
