
import React, { useState } from 'react';
import { generateMarketingStrategy } from '../geminiService';
import { MarketingStrategy } from '../types';

const MarketingAI: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [goal, setGoal] = useState('Brand Awareness');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;

    setLoading(true);
    setError(null);
    setStrategy(null);
    
    try {
      const result = await generateMarketingStrategy(niche, goal);
      setStrategy(result);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1e293b] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Marketing Strategy Generator</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Curious about what a strategy from me looks like? Enter your business details below, and my AI-powered tool (trained on my marketing frameworks) will generate a high-level plan for you instantly.
          </p>
          
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Business Niche</label>
              <input 
                type="text"
                placeholder="e.g. Luxury Real Estate, SaaS for HR, Vegan Skincare"
                className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Primary Goal</label>
              <select 
                className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option>Brand Awareness</option>
                <option>Lead Generation</option>
                <option>Direct Sales/ROI</option>
                <option>Customer Retention</option>
              </select>
            </div>
            <button 
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-3 ${loading ? 'bg-indigo-600/50 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20'}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Data...
                </>
              ) : 'Generate My Strategy'}
            </button>
          </form>
        </div>

        <div className="min-h-[400px] flex items-center justify-center">
          {loading && (
            <div className="text-center animate-pulse">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-slate-400">Asad's AI Brain is thinking...</p>
            </div>
          )}

          {!loading && !strategy && !error && (
            <div className="p-10 border-2 border-dashed border-white/10 rounded-3xl text-center w-full">
              <p className="text-slate-500 italic">Strategy report will appear here.</p>
            </div>
          )}

          {error && <div className="text-red-400 bg-red-400/10 p-6 rounded-xl border border-red-400/20">{error}</div>}

          {strategy && (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-slate-900 rounded-2xl p-8 border border-white/10 shadow-inner">
                <div className="mb-6">
                  <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Strategy Overview</h4>
                  <p className="text-white text-lg leading-relaxed">{strategy.overview}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">Priority Channels</h4>
                    <ul className="space-y-2">
                      {strategy.channels.map((ch, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                          {ch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">Tactical Actions</h4>
                    <ul className="space-y-2">
                      {strategy.suggestedActions.map((ac, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          {ac}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                  <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Estimated Impact</h4>
                  <p className="text-indigo-100 font-medium">{strategy.estimatedImpact}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-slate-500 text-sm mb-4 italic">Want to implement this plan? Let's talk.</p>
                  <a href="#contact" className="text-white font-bold hover:text-indigo-400 transition-colors">Book a Free Consultation &rarr;</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketingAI;
