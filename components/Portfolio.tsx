
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Eco-Friendly Fashion Growth',
    category: 'SEO & Content',
    description: 'Scaling organic traffic for a sustainable clothing brand using targeted keyword clusters.',
    results: '+140% Organic Traffic in 6 Months',
    image: 'https://picsum.photos/seed/fashion/800/600'
  },
  {
    id: '2',
    title: 'SaaS Lead Gen Campaign',
    category: 'PPC & Lead Gen',
    description: 'High-performance Google Ads campaign for a Fintech SaaS aimed at B2B acquisition.',
    results: '4.2x ROAS & 30% Lower CPL',
    image: 'https://picsum.photos/seed/tech/800/600'
  },
  {
    id: '3',
    title: 'Global Tech Conference',
    category: 'Social Media',
    description: 'Event-driven social strategy to drive ticket sales and global brand awareness.',
    results: '2M+ Reach & Sold Out Event',
    image: 'https://picsum.photos/seed/event/800/600'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <div key={project.id} className="group rounded-2xl overflow-hidden bg-[#1e293b]/30 border border-white/5 flex flex-col">
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
            <div className="pt-6 border-t border-white/5">
              <p className="text-white font-semibold flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {project.results}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
