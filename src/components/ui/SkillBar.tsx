import skillsData from "@/data/skills.json";
import type { Skill } from "@/types";

const skills = skillsData as Skill[];

export default function SkillBar() {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="font-medium text-blue-800">{skill.name}</span>
            <span className="text-sm text-blue-500">{skill.level}</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
