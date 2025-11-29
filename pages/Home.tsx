import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Shield, BarChart, Rocket, Server, Users, Zap } from 'lucide-react';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
             <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
            Digital Excellence for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Modern Business
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10">
            We transform ideas into powerful digital realities. From enterprise software to cutting-edge AI integration, NovaTech is your partner in innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={PageRoute.SERVICES} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-white hover:bg-indigo-50 md:text-lg transition-all">
              Explore Services
            </Link>
            <Link to={PageRoute.CONTACT} className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-full text-white hover:bg-slate-800 md:text-lg transition-all">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What We Do</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive IT Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              We deliver end-to-end technology services designed to scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'software', title: 'Software Development', icon: Code, desc: 'Custom enterprise applications built with modern frameworks.' },
              { id: 'marketing', title: 'Digital Marketing', icon: Globe, desc: 'SEO, SEM, and content strategies that drive real growth.' },
              { id: 'security', title: 'Cybersecurity', icon: Shield, desc: 'Advanced threat protection and security auditing for your assets.' },
              { id: 'data', title: 'Data Analytics', icon: BarChart, desc: 'Turn raw data into actionable insights with AI-driven tools.' },
              { id: 'saas', title: 'SaaS Engineering', icon: Rocket, desc: 'Scalable cloud-native architectures for your next product.' },
              { id: 'cloud', title: 'Cloud Infrastructure', icon: Server, desc: 'AWS/Azure migration, management, and optimization.' },
            ].map((service, idx) => (
              <div key={idx} className="relative group p-6 bg-slate-50 rounded-2xl hover:bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-6 right-6 text-slate-200 group-hover:text-indigo-100 transition-colors">
                  <service.icon className="h-12 w-12" />
                </div>
                <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <Link 
                  to={`${PageRoute.SERVICES}#${service.id}`}
                  className="text-indigo-600 font-medium flex items-center group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-200">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-indigo-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                Why businesses trust NovaTech
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We don't just write code; we build business value. Our team of senior engineers and consultants work as an extension of your company to solve complex challenges.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Agile Methodology", desc: "Rapid iteration and transparent communication." },
                  { title: "Top-Tier Talent", desc: "Our engineers are top 1% industry experts." },
                  { title: "Future-Proof Tech", desc: "We use scalable, modern stacks like React, Python, and Go." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                        <Zap className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-base text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
               <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-3 opacity-20"></div>
               <img 
                src="https://picsum.photos/800/600" 
                alt="Team working" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Ready to accelerate your digital growth?
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Schedule a free consultation with our experts today.
          </p>
          <div className="mt-8">
            <Link
              to={PageRoute.CONTACT}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;