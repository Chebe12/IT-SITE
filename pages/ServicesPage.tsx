import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Code, Globe, Shield, BarChart, Rocket, Server, Smartphone, PenTool, Database, ArrowDown } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const location = useLocation();

  const services = [
    {
      id: 'software',
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to address your specific business challenges. We build robust, scalable, and secure applications.',
      icon: Code,
      features: ['Web Application Development', 'Mobile App Development', 'Legacy System Modernization', 'API Integration']
    },
    {
      id: 'marketing',
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing strategies to increase your online visibility and drive qualified traffic to your business.',
      icon: Globe,
      features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC)', 'Social Media Management', 'Content Marketing']
    },
    {
      id: 'saas',
      title: 'SaaS Product Engineering',
      description: 'End-to-end SaaS development from ideation to deployment. We help startups and enterprises launch successful products.',
      icon: Rocket,
      features: ['MVP Development', 'Product Strategy', 'Multi-tenant Architecture', 'Subscription Management']
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure services. We help you migrate, manage, and optimize your cloud environment.',
      icon: Server,
      features: ['AWS / Azure / GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Serverless Architecture']
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security services to protect your business from evolving digital threats and ensure compliance.',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR/HIPAA)', 'Incident Response']
    },
    {
      id: 'data',
      title: 'Data Analytics & AI',
      description: 'Unlock the power of your data with advanced analytics and machine learning solutions.',
      icon: BarChart,
      features: ['Business Intelligence', 'Predictive Analytics', 'Machine Learning Models', 'Data Warehousing']
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
      icon: Smartphone,
      features: ['React Native / Flutter', 'iOS & Android Native', 'App Store Optimization', 'Mobile UI/UX']
    },
    {
      id: 'consulting',
      title: 'IT Consultation',
      description: 'Strategic IT advice to align your technology with your business goals and drive digital transformation.',
      icon: Database,
      features: ['Digital Strategy', 'IT Roadmap Planning', 'Technology Assessment', 'Vendor Management']
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'User-centric design services that create engaging and intuitive digital experiences for your customers.',
      icon: PenTool,
      features: ['User Research', 'Wireframing & Prototyping', 'Interface Design', 'Usability Testing']
    }
  ];

  // Handle scrolling to section if passed via state
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const elementId = (location.state as any).scrollTo;
      const element = document.getElementById(elementId);
      if (element) {
        // Small delay to ensure rendering is complete and to provide a nice UX
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            We provide a holistic approach to technology, covering every aspect of your digital journey.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex flex-wrap justify-center gap-2 min-w-max px-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className="px-4 py-2 bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 rounded-full text-sm font-medium transition-colors border border-slate-200"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col md:flex-row gap-12 items-center scroll-mt-28 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl text-indigo-600 mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 relative group">
                  <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-24 bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
             <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-indigo-600/30 blur-[100px]"></div>
             <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">Not sure what you need?</h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                    Our AI Consultant is available 24/7 to help you figure out the best solution for your business needs. 
                    Alternatively, our human experts are just a message away.
                </p>
                <button 
                  onClick={() => window.location.hash = '#/contact'}
                  className="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:bg-indigo-50 transition-colors"
                >
                    Contact an Expert
                </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;