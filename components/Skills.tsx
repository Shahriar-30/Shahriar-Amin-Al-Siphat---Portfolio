
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Technical Proficiency</h2>
          <h3 className="text-4xl font-bold text-zinc-900">Stack & Expertise</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-50 pb-4">{category.title}</h4>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-zinc-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
