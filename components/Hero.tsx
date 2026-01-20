
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden bg-[#fafafa]">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-indigo-700 text-sm font-semibold uppercase tracking-wider">
              Open for 2024 Projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1]">
            MERN Stack Developer <br />
            <span className="text-zinc-400">& Frontend Specialist.</span>
          </h1>

          <p className="text-xl text-zinc-600 max-w-xl leading-relaxed">
            I help businesses launch high-performance web applications by bridging the gap between pixel-perfect design and scalable engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-indigo-700 transition-all text-center shadow-lg shadow-indigo-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-zinc-50 transition-all text-center"
            >
              Contact Me
            </a>
          </div>

          <div className="pt-8 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i}/40/40`} alt="Client" />
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500">
              Trusted by <span className="text-zinc-900 font-semibold">15+ clients</span> across the US and Europe.
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
           <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/developer/800/1000" 
                alt="Alex Rivera"
                className="relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
