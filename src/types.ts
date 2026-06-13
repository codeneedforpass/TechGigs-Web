export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectDetails {
  overview: string;
  techStack: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface ProjectPlaceholder {
  id: string;
  title: string;
  category: string;
  description: string;
  label: string;
  details: ProjectDetails;
}

export interface ContactFormInput {
  name: string;
  email: string;
  service: string;
  message: string;
}
