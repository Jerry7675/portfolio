import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";

const projects = projectsData as Project[];

export default function FeaturedProjects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white/90 dark:bg-zinc-900 rounded-2xl shadow-xl p-10 border border-blue-100"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 text-center">Featured Projects</h2>
      <p className="text-lg text-blue-800 mb-10 text-center max-w-2xl mx-auto">
        Here are some of the projects I’m most proud of. Each one taught me something new and pushed
        my skills further.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.slice(0, 4).map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-800 dark:to-zinc-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 border border-blue-100 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-blue-800 mb-1">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 flex-1">{project.description}</p>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
