import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
  tags: string[];
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  contactEmail: string;
  contactPhone: string;
  statsProjects: string;
  statsRetention: string;
  statsYears: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageRoute {
  HOME = '/',
  SERVICES = '/services',
  CONTACT = '/contact',
  ABOUT = '/about',
  PORTFOLIO = '/portfolio',
  ADMIN = '/admin'
}