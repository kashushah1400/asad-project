
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies to rank your business on page one and drive organic growth.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    id: '2',
    title: 'Pay-Per-Click Ads',
    description: 'High-conversion Google and Social Media ads focused on maximizing ROI and reducing CPA.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    id: '3',
    title: 'Content Strategy',
    description: 'Compelling content creation that builds authority and engages your target audience.',
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
  },
  {
    id: '4',
    title: 'Social Media Mgmt',
    description: 'End-to-end management of your social presence to foster community and brand loyalty.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
  },
  {
    id: '5',
    title: 'Email Marketing',
    description: 'Automated nurture sequences and newsletters that turn leads into loyal customers.',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: '6',
    title: 'Analytics & Reporting',
    description: 'Transparent tracking of all KPIs with custom dashboards to monitor performance.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  }
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div 
          key={service.id} 
          className="p-8 rounded-2xl bg-[#1e293b]/50 border border-white/5 hover:border-indigo-500/50 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-slate-400 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
