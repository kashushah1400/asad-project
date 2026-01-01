
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePos({ x: moveX, y: moveY });
  };

  return (
    <div 
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
      ></div>

      {/* Floating Marketing Elements */}
      <div className="hidden lg:block absolute top-1/4 right-[15%] animate-float pointer-events-none opacity-40">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-1/3 left-[5%] animate-float-delayed pointer-events-none opacity-30">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Growth Marketing Specialist
          </div>
          
          <h1 className="text-5xl md:text-[84px] font-[800] text-white leading-[1.05] mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.3s' }}>
            Turning Data Into <br />
            <span className="gradient-text">Market Dominance.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl fade-in-up" style={{ animationDelay: '0.5s' }}>
            Hi, I'm <span className="text-white font-semibold">Asad</span>. I build high-performance marketing engines that scale startups to industry leaders using AI and data-driven psychology.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center fade-in-up" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#portfolio" 
              className="group relative px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/30 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-3">
                See Case Studies
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            
            <button 
              onClick={() => document.getElementById('ai-tool')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-white transition-all backdrop-blur-sm group"
            >
              <span className="flex items-center gap-3">
                Generate Strategy
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative group">
                  <img 
                    className="w-12 h-12 rounded-full border-4 border-[#0f172a] group-hover:-translate-y-2 transition-transform duration-300" 
                    src={`https://i.pravatar.cc/150?u=client${i}`} 
                    alt="Client" 
                  />
                </div>
              ))}
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-sm font-bold">Trusted by 50+ Global Brands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
