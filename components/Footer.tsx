
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">A</div>
            <span className="text-lg font-bold tracking-tight text-white">ASAD<span className="text-indigo-500">.</span></span>
          </div>

          <div className="flex gap-10">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Medium</a>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Asad Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
