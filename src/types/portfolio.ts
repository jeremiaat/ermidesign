export type ProjectCategory = 'all' | 'web' | 'social' | 'brand' | 'art';

export interface GalleryDetailItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Project {
  id: string;
  num: string;
  title: string;
  category: 'Website' | 'Social Media' | 'Branding' | 'Artistic';
  categoryKey: 'web' | 'social' | 'brand' | 'art';
  subCategory: string;
  role: string;
  year: string;
  client: string;
  summary: string;
  coverImage: string;
  galleryImages: string[];
  galleryDetails?: GalleryDetailItem[];
  challenge: string;
  solution: string;
  deliverables: string[];
  tools: string[];
  liveUrl?: string;
  timeline?: string;
  impact?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface SkillDiscipline {
  id: string;
  title: string;
  titleHtml?: string;
  subtitle: string;
  themeStyle: 'blue-gradient' | 'white-card' | 'deep-blue';
  iconUrl: string;
  description: string;
  capabilities: string[];
  software: string[];
  deliverables: string[];
}

export interface StatItem {
  id: string;
  num: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
