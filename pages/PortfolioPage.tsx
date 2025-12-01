import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ArrowUpRight, Filter } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const { portfolioItems } = useData();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Explore our latest projects and see how we help businesses transform and grow.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
              <div className="relative overflow-hidden aspect-w-16 aspect-h-10 h-64">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
            <div className="text-center py-20 text-slate-400">
                <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No projects found in this category.</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default PortfolioPage;