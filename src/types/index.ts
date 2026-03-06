// Project type for FeaturedProjects
export interface Project {
  title: string;
  description: string;
  link?: string;
}

// Skill type for SkillBar
export interface Skill {
  name: string;
  level: string;
  percent: number;
}
