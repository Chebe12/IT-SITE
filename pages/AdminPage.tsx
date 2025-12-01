import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, Plus, Trash2, LayoutDashboard, Briefcase, MessageSquare, LogOut, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem, Testimonial } from '../types';

const AdminPage: React.FC = () => {
  const { 
    siteContent, 
    updateSiteContent, 
    portfolioItems, 
    addPortfolioItem, 
    deletePortfolioItem,
    testimonials,
    addTestimonial,
    deleteTestimonial
  } = useData();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'content' | 'portfolio' | 'testimonials'>('content');

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // --- Content Tab Logic ---
  const [contentForm, setContentForm] = useState(siteContent);
  const handleContentSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteContent(contentForm);
    alert('Site content updated successfully!');
  };

  // --- Portfolio Tab Logic ---
  const [newPortfolio, setNewPortfolio] = useState<Partial<PortfolioItem>>({
    title: '', category: '', description: '', imageUrl: '', tags: []
  });
  const [tagInput, setTagInput] = useState('');
  
  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPortfolio.title || !newPortfolio.imageUrl) return;
    addPortfolioItem({
      id: Date.now().toString(),
      title: newPortfolio.title!,
      category: newPortfolio.category || 'Uncategorized',
      description: newPortfolio.description || '',
      imageUrl: newPortfolio.imageUrl!,
      tags: newPortfolio.tags || [],
      link: newPortfolio.link
    });
    setNewPortfolio({ title: '', category: '', description: '', imageUrl: '', tags: [], link: '' });
    setTagInput('');
  };

  // --- Testimonial Tab Logic ---
  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
    name: '', role: '', company: '', content: '', avatar: ''
  });

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.content) return;
    addTestimonial({
      id: Date.now().toString(),
      name: newTestimonial.name!,
      role: newTestimonial.role || '',
      company: newTestimonial.company || '',
      content: newTestimonial.content!,
      avatar: newTestimonial.avatar || 'https://via.placeholder.com/100'
    });
    setNewTestimonial({ name: '', role: '', company: '', content: '', avatar: '' });
  };


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Lock className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Admin Access</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter password (admin123)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-slate-200 min-h-[20vh] md:min-h-screen">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">CMS Dashboard</h2>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Site Content</span>
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'portfolio' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Briefcase className="h-5 w-5" />
            <span>Portfolio</span>
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'testimonials' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Testimonials</span>
          </button>
          <div className="pt-8 border-t border-slate-200 mt-8">
             <button
                onClick={() => setIsAuthenticated(false)}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        
        {/* === Site Content Tab === */}
        {activeTab === 'content' && (
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Site Content</h1>
            <form onSubmit={handleContentSave} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Hero Title</label>
                  <input
                    type="text"
                    value={contentForm.heroTitle}
                    onChange={(e) => setContentForm({...contentForm, heroTitle: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Hero Subtitle</label>
                  <textarea
                    rows={3}
                    value={contentForm.heroSubtitle}
                    onChange={(e) => setContentForm({...contentForm, heroSubtitle: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Stat: Projects</label>
                    <input type="text" value={contentForm.statsProjects} onChange={(e) => setContentForm({...contentForm, statsProjects: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Stat: Retention</label>
                    <input type="text" value={contentForm.statsRetention} onChange={(e) => setContentForm({...contentForm, statsRetention: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Stat: Years</label>
                    <input type="text" value={contentForm.statsYears} onChange={(e) => setContentForm({...contentForm, statsYears: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="pt-4 flex justify-end">
                <button type="submit" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 font-medium">
                  <Save className="h-4 w-4" /> Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* === Portfolio Tab === */}
        {activeTab === 'portfolio' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-slate-900">Portfolio Items</h1>
            </div>

            {/* Add New Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Plus className="h-5 w-5" /> Add New Project</h3>
              <form onSubmit={handleAddPortfolio} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Project Title" value={newPortfolio.title} onChange={e => setNewPortfolio({...newPortfolio, title: e.target.value})} className="px-4 py-2 border rounded-lg" required />
                  <input placeholder="Category (e.g. Software, AI)" value={newPortfolio.category} onChange={e => setNewPortfolio({...newPortfolio, category: e.target.value})} className="px-4 py-2 border rounded-lg" required />
                  <input placeholder="Image URL (Unsplash or direct link)" value={newPortfolio.imageUrl} onChange={e => setNewPortfolio({...newPortfolio, imageUrl: e.target.value})} className="px-4 py-2 border rounded-lg" required />
                   <input placeholder="External Link (Optional)" value={newPortfolio.link} onChange={e => setNewPortfolio({...newPortfolio, link: e.target.value})} className="px-4 py-2 border rounded-lg" />
                </div>
                <textarea placeholder="Description" value={newPortfolio.description} onChange={e => setNewPortfolio({...newPortfolio, description: e.target.value})} className="w-full px-4 py-2 border rounded-lg" rows={2} required />
                <div>
                  <input 
                    placeholder="Tags (comma separated)" 
                    value={tagInput} 
                    onChange={e => {
                        setTagInput(e.target.value);
                        setNewPortfolio({...newPortfolio, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)});
                    }} 
                    className="w-full px-4 py-2 border rounded-lg" 
                  />
                  <p className="text-xs text-slate-500 mt-1">Example: React, Python, AWS</p>
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Add Project</button>
              </form>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
              {portfolioItems.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4">
                  <img src={item.imageUrl} alt="" className="w-16 h-16 rounded-lg object-cover bg-slate-100" />
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.category}</p>
                  </div>
                  <button onClick={() => deletePortfolioItem(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
              {portfolioItems.length === 0 && <p className="text-slate-500 italic">No projects added yet.</p>}
            </div>
          </div>
        )}

        {/* === Testimonials Tab === */}
        {activeTab === 'testimonials' && (
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Manage Testimonials</h1>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
               <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Plus className="h-5 w-5" /> Add Testimonial</h3>
               <form onSubmit={handleAddTestimonial} className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Client Name" value={newTestimonial.name} onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})} className="px-4 py-2 border rounded-lg" required />
                    <input placeholder="Role" value={newTestimonial.role} onChange={e => setNewTestimonial({...newTestimonial, role: e.target.value})} className="px-4 py-2 border rounded-lg" />
                    <input placeholder="Company" value={newTestimonial.company} onChange={e => setNewTestimonial({...newTestimonial, company: e.target.value})} className="px-4 py-2 border rounded-lg" />
                    <input placeholder="Avatar URL" value={newTestimonial.avatar} onChange={e => setNewTestimonial({...newTestimonial, avatar: e.target.value})} className="px-4 py-2 border rounded-lg" />
                 </div>
                 <textarea placeholder="Quote content..." value={newTestimonial.content} onChange={e => setNewTestimonial({...newTestimonial, content: e.target.value})} className="w-full px-4 py-2 border rounded-lg" rows={2} required />
                 <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Add Testimonial</button>
               </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 relative group">
                  <button onClick={() => deleteTestimonial(item.id)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-3 mb-3">
                    <img src={item.avatar} alt="" className="w-10 h-10 rounded-full bg-slate-100" />
                    <div>
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 italic">"{item.content}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPage;