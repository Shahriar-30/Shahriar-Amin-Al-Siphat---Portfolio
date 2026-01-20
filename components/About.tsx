
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">About Me</h2>
            <p className="text-3xl font-bold text-zinc-900 leading-tight">
              Building the future of the web, one component at a time.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl text-zinc-600 leading-relaxed">
              Based in Austin, Texas, I am a seasoned Full-Stack Developer with over 5 years of experience specialized in the MERN ecosystem. My goal isn't just to write code; it's to deliver digital products that are reliable, performant, and delightful to use.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              I specialize in turning complex requirements into simple, elegant technical solutions. Whether it's a high-growth startup or an established enterprise, I bring a collaborative mindset and a focus on long-term scalability. I believe in the power of clear communication and the impact of clean, well-documented code.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
               <div className="p-6 bg-zinc-50 rounded-2xl">
                 <h4 className="font-bold text-zinc-900 mb-2">My Philosophy</h4>
                 <p className="text-zinc-600 text-sm">Technology is a tool. Business impact is the objective. I build with growth in mind.</p>
               </div>
               <div className="p-6 bg-zinc-50 rounded-2xl">
                 <h4 className="font-bold text-zinc-900 mb-2">My Reliability</h4>
                 <p className="text-zinc-600 text-sm">I maintain a 100% project completion rate and pride myself on accurate timeline estimates.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
