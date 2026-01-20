
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}
