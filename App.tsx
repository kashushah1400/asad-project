
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Ratings from './components/Ratings';
import Portfolio from './components/Portfolio';
import MarketingAI from './components/MarketingAI';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/30">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Leveraging data-driven insights and creative storytelling to grow your brand in the digital landscape.
              </p>
            </div>
            <Services />
          </div>
        </section>

        <section id="ratings" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Don't just take my word for it. Here's what business leaders say about working with me.
              </p>
            </div>
            <Ratings />
          </div>
        </section>

        <section id="ai-tool" className="py-24 relative overflow-hidden bg-slate-900/30">
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 -z-10 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MarketingAI />
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Real results for real businesses. See how I've helped partners scale their reach.
              </p>
            </div>
            <Portfolio />
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Got questions? I've got answers. Everything you need to know about working together.
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to grow your brand?</h2>
            <p className="text-slate-400 mb-12 text-lg">
              Let's discuss your next project. Whether it's SEO, PPC, or a full-scale digital audit, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:asad@example.com" 
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20"
              >
                Get in Touch
              </a>
              <button 
                onClick={() => document.getElementById('ai-tool')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all"
              >
                Try My AI Strategy Tool
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
