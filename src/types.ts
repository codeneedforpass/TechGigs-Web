export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectTech {
  name: string;
  icon: string;
  position: { top: string; left: string };
}

export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  accentFrom: string;
  accentTo: string;
  tech: ProjectTech[];
  builderUrl?: string;
  builderLabel?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}
