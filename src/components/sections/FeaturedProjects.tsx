"use client";
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
      className="rounded-2xl shadow-xl p-10 border"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: "var(--primary)" }}>
        Featured Projects
      </h2>
      <p
        className="text-lg mb-10 text-center max-w-2xl mx-auto"
        style={{ color: "var(--primary)" }}
      >
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
            className="rounded-xl shadow-lg p-6 flex flex-col gap-3 border hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            style={{
              background: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="text-xl font-bold mb-1" style={{ color: "var(--primary)" }}>
              {project.title}
            </h3>
            <p className="flex-1" style={{ color: "var(--secondary)" }}>
              {project.description}
            </p>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{ background: "var(--accent)", color: "var(--primary)" }}
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
                className="inline-block mt-4 px-4 py-2 rounded-lg font-semibold shadow transition"
                style={{ background: "var(--primary)", color: "var(--background)" }}
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
