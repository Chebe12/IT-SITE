import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { PortfolioItem, Testimonial, SiteContent } from '../types';

interface DataContextType {
  siteContent: SiteContent;
  portfolioItems: PortfolioItem[];
  testimonials: Testimonial[];
  updateSiteContent: (content: SiteContent) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  deletePortfolioItem: (id: string) => void;
  addTestimonial: (item: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
}

// Default Data
const defaultSiteContent: SiteContent = {
  heroTitle: "Digital Excellence for Modern Business",
  heroSubtitle: "We transform ideas into powerful digital realities. From enterprise software to cutting-edge AI integration, NovaTech is your partner in innovation.",
  contactEmail: "sales@novatech.solution",
  contactPhone: "+1 (555) 123-4567",
  statsProjects: "500+",
  statsRetention: "98%",
  statsYears: "10+"
};

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content: "NovaTech transformed our legacy infrastructure into a modern cloud powerhouse. The transition was seamless and we've seen a 300% increase in performance.",
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'StartUp Rocket',
    content: "The SaaS product they built for us helped us secure Series A funding. Their engineering standards are world-class.",
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'Global Retail',
    content: "Their digital marketing strategies doubled our online revenue in just 6 months. Highly recommended for any growth-focused business.",
    avatar: 'https://picsum.photos/seed/emily/100/100'
  }
];

const defaultPortfolio: PortfolioItem[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Software Development',
    description: 'A real-time financial analytics dashboard processing millions of transactions daily.',
    imageUrl: 'https://picsum.photos/seed/fintech/800/600',
    tags: ['React', 'Node.js', 'D3.js']
  },
  {
    id: '2',
    title: 'E-Commerce AI',
    category: 'AI & Data',
    description: 'Recommendation engine utilizing machine learning to boost cross-selling.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/600',
    tags: ['Python', 'TensorFlow', 'AWS']
  },
  {
    id: '3',
    title: 'HealthCare App',
    category: 'Mobile App',
    description: 'HIPAA compliant telemedicine application for remote patient monitoring.',
    imageUrl: 'https://picsum.photos/seed/health/800/600',
    tags: ['Flutter', 'Firebase', 'WebRTC']
  }
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or defaults
  const [siteContent, setSiteContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('siteContent');
    return saved ? JSON.parse(saved) : defaultSiteContent;
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('portfolioItems');
    return saved ? JSON.parse(saved) : defaultPortfolio;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : defaultTestimonials;
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('siteContent', JSON.stringify(siteContent));
  }, [siteContent]);

  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Actions
  const updateSiteContent = (content: SiteContent) => {
    setSiteContent(content);
  };

  const addPortfolioItem = (item: PortfolioItem) => {
    setPortfolioItems([...portfolioItems, item]);
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  const addTestimonial = (item: Testimonial) => {
    setTestimonials([...testimonials, item]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(item => item.id !== id));
  };

  return (
    <DataContext.Provider value={{
      siteContent,
      portfolioItems,
      testimonials,
      updateSiteContent,
      addPortfolioItem,
      deletePortfolioItem,
      addTestimonial,
      deleteTestimonial
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};