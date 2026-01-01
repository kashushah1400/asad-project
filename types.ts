
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string;
  image: string;
}

export interface MarketingStrategy {
  overview: string;
  channels: string[];
  suggestedActions: string[];
  estimatedImpact: string;
}

export interface Rating {
  id: string;
  name: string;
  role: string;
  content: string;
  stars: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
