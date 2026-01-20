import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center   pt-20 px-6 overflow-hidden bg-[#fafafa]">
      {/* Subtle background decoration */}
      {/* <div className="absolute top-0 right-0 -mr-20 -mt-20 w-150 h-150 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" /> */}
      {/* <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-100 h-100 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto flex gap-12 items-center relative z-10">
        <div className="space-y-10 lg:space-y-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="inline-block px-4 mt-8 lg:mt-3 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-indigo-700 text-md font-semibold uppercase text-center tracking-wider">
              Shahriar Amin Al Siphat
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1]">
            MERN Stack Developer <br />
            <span className="text-zinc-400">& Frontend Specialist.</span>
          </h1>

          <p className="text-xl text-zinc-600 max-w-xl leading-relaxed">
            I help businesses launch high-performance web applications by
            bridging the gap between pixel-perfect design and scalable
            engineering.
          </p>

          <div className="flex lg:justify-center flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-indigo-700 transition-all text-center shadow-lg shadow-indigo-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-zinc-50 transition-all text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
