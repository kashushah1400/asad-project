
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: '1',
    question: "How long does it take to see results from SEO?",
    answer: "Typically, you'll start seeing significant improvements in rankings and traffic within 3 to 6 months. SEO is a long-term investment that builds compounded value over time."
  },
  {
    id: '2',
    question: "Do you offer custom marketing packages?",
    answer: "Absolutely. I understand that every business has unique needs. I offer tailored solutions ranging from specific channel management to full-scale digital transformations."
  },
  {
    id: '3',
    question: "Which industries do you specialize in?",
    answer: "I have extensive experience in SaaS, E-commerce, Fintech, and Professional Services. However, my data-driven methodology is adaptable to almost any industry."
  },
  {
    id: '4',
    question: "What reporting can I expect?",
    answer: "I provide monthly in-depth reports and a real-time custom dashboard. We'll track KPIs that actually matter to your bottom line, not just vanity metrics."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqData.map((item) => (
        <div 
          key={item.id} 
          className={`rounded-2xl border transition-all duration-300 ${openId === item.id ? 'bg-indigo-500/5 border-indigo-500/30' : 'bg-slate-900/50 border-white/5'}`}
        >
          <button 
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-5 flex items-center justify-between text-left"
          >
            <span className={`font-semibold text-lg ${openId === item.id ? 'text-white' : 'text-slate-300'}`}>
              {item.question}
            </span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-indigo-500' : 'text-slate-500'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
