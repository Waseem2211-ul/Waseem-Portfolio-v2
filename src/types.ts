export interface Project {
  id: string;
  name: string;
  category: string;
  tags: string[];
  client: string;
  problem: string;
  solution: string;
  process: string[];
  results: string;
  liveUrl: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}
