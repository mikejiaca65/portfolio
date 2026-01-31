
export enum ThemeType {
  CLASSIC = 'classic',
  MODERN = 'modern',
  TERMINAL = 'terminal'
}

export interface WorkExperience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location?: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  url?: string;
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  skills: SkillCategory[];
  experience: WorkExperience[];
  education: Education[];
  awards: Award[];
}
