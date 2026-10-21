export type ProjectCategory = 'all' | 'web' | 'social' | 'brand' | 'art';

export interface GalleryDetailItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  /** Renders the figure full-width at natural scale instead of cropped to a grid cell. */
  fullWidth?: boolean;
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
  /** CSS object-position for the cover image. Defaults to 'center'. */
  coverPosition?: string;
  galleryImages: string[];
  galleryDetails?: GalleryDetailItem[];
  /** Number of gallery columns on desktop. Defaults to 2. */
  galleryColumns?: 2 | 3;
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
