export type SkillItem = {
  title: string;
  description: string;
  backgroundImage: string;
};

export type ExperienceItem = {
  company: string;
  job: string;
  reap: string;
  beginTime: string;
  endTime: string;
};

export type ProjectCard = {
  cover?: string;
  name: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ResumeData = {
  aboutme: string[];
  skillText: string;
  skill: string[];
  skillItem: SkillItem[];
  experienceText: string;
  experience: ExperienceItem[];
  project: ProjectCard[];
  contact: {
    email: string;
    phone: string;
    github: string;
  };
};
