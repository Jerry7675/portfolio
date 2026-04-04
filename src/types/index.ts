// Project type for FeaturedProjects
export interface Project {
  title: string;
  description: string;
  link?: string;
  tech?: string[];
}

// Skill type for SkillBar
export interface Skill {
  name: string;
  level: string;
  percent: number;
}

// Blog post type for posts collection
export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  content: string;
}
