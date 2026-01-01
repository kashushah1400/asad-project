
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Elevating Brands Through <span className="gradient-text">Digital Excellence.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Hi, I'm Asad. A Digital Marketing Specialist dedicated to transforming your online presence with data-backed strategies and creative high-performance campaigns.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <div className="flex items-center gap-4 px-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-[#0f172a]" 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    alt="Client" 
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">50+ Happy Clients</p>
                <p className="text-slate-500">Across 10+ industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
