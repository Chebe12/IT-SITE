import React, { useState } from 'react';
import { Cpu, Twitter, Linkedin, Github, Mail, Check, Loader2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setSubscriptionStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">NovaTech</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering businesses through innovative technology solutions. From cloud architecture to AI integration, we build the future today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest news, updates, and special offers delivered directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 placeholder-slate-500 transition-all"
                  disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
              <button
                type="submit"
                disabled={subscriptionStatus === 'loading' || subscriptionStatus === 'success'}
                className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all flex items-center justify-center gap-2 ${
                  subscriptionStatus === 'success' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {subscriptionStatus === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                {subscriptionStatus === 'success' && <Check className="h-4 w-4" />}
                {subscriptionStatus === 'idle' && 'Subscribe'}
                {subscriptionStatus === 'success' && 'Subscribed!'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} NovaTech Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;