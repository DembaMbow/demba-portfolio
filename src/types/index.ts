export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'design' | 'dev' | 'marketing' | 'business';
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  color: string;
  image: string;
  link?: string;
  linkLabel?: string;
}

export interface ExperienceLink {
  label: string;
  url: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
  links?: ExperienceLink[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}
