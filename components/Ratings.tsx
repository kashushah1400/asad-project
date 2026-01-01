
import React from 'react';
import { Rating } from '../types';

const ratings: Rating[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO, Bloom Skincare',
    content: "Asad completely transformed our online presence. Our organic traffic doubled within just 4 months of implementing his SEO strategy.",
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder, TechFlow SaaS',
    content: "The PPC campaigns Asad managed for us had a better ROAS than any agency we've worked with previously. Highly recommended!",
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Director, Globalize',
    content: "Incredible attention to detail and data-driven insights. Asad doesn't just 'post'; he builds a comprehensive growth engine.",
    stars: 5,
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Ratings: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ratings.map((rating) => (
        <div 
          key={rating.id} 
          className="p-8 rounded-2xl bg-[#1e293b]/40 border border-white/5 hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(rating.stars)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-300 italic mb-8 leading-relaxed">"{rating.content}"</p>
          <div className="flex items-center gap-4">
            <img src={rating.avatar} alt={rating.name} className="w-12 h-12 rounded-full border-2 border-indigo-500/20" />
            <div>
              <h4 className="text-white font-bold">{rating.name}</h4>
              <p className="text-slate-500 text-sm">{rating.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
