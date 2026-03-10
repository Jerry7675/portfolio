"use client";
import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";
import type { Skill } from "@/types";

const skills = skillsData as Skill[];

export default function SkillBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto px-8 py-12"
      style={{
        background: "linear-gradient(135deg, #f7f7f7 80%, #ededed 100%)",
        color: "#232323",
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
      }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#232323" }}>
        My Top Skills
      </h3>
      <p className="text-base mb-8 text-center max-w-xl mx-auto" style={{ color: "#444" }}>
        Here’s a quick look at the technologies and tools I use most. I’m always learning and adding
        more to this list!
      </p>
      <div className="flex flex-col gap-5">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-1"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg" style={{ color: "#232323" }}>
                {skill.name}
              </span>
              <span className="text-sm font-semibold" style={{ color: "#666" }}>
                {skill.level}
              </span>
            </div>
            <div className="w-full rounded-full h-3" style={{ background: "var(--accent)" }}>
              <motion.div
                className="h-3 rounded-full"
                style={{ background: "var(--primary)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
