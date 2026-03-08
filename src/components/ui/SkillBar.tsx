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
      className="bg-white/90 dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-blue-100"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-900 text-center">My Top Skills</h3>
      <p className="text-base text-blue-800 mb-8 text-center max-w-xl mx-auto">
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
              <span className="font-medium text-blue-800 text-lg">{skill.name}</span>
              <span className="text-sm text-blue-500 font-semibold">{skill.level}</span>
            </div>
            <div className="w-full bg-blue-100 dark:bg-zinc-800 rounded-full h-3">
              <motion.div
                className="bg-blue-600 h-3 rounded-full"
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
