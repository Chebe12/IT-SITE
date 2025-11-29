import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-slate-900 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"></div>
         </div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
             <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6">Innovating for the Future</h1>
             <p className="max-w-2xl mx-auto text-xl text-slate-300">
                 We are a team of visionaries, engineers, and strategists dedicated to reshaping the digital landscape.
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      At NovaTech, we believe that technology should be an enabler, not a barrier. Our mission is to democratize access to enterprise-grade digital solutions for businesses of all sizes.
                  </p>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      Founded in 2015, we've grown from a small garage startup to a global consultancy with over 500 successful projects. We pride ourselves on our transparency, technical excellence, and user-centric approach.
                  </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/office1/400/500" alt="Office" className="rounded-2xl shadow-lg mt-8" />
                  <img src="https://picsum.photos/seed/office2/400/500" alt="Meeting" className="rounded-2xl shadow-lg" />
              </div>
          </div>
          
          <div className="mt-32">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Leadership Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                      { name: 'Sarah Jenkins', role: 'CEO & Founder', img: 'https://picsum.photos/seed/sarah/300/300' },
                      { name: 'Michael Chen', role: 'CTO', img: 'https://picsum.photos/seed/michael/300/300' },
                      { name: 'David Ross', role: 'Head of Product', img: 'https://picsum.photos/seed/david/300/300' },
                  ].map((leader, i) => (
                      <div key={i} className="text-center group">
                          <div className="relative inline-block mb-4">
                              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
                              <img src={leader.img} alt={leader.name} className="w-48 h-48 rounded-full object-cover shadow-md mx-auto" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                          <p className="text-indigo-600 font-medium">{leader.role}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default AboutPage;