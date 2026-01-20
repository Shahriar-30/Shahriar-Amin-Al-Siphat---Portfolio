import React from "react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">
              Case Studies
            </h2>
            <h3 className="text-4xl font-bold text-zinc-900">
              Featured Projects
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h4 className="text-2xl font-bold text-zinc-900 mb-4">
                  {project.title}
                </h4>

                <div className="space-y-4 mb-6 grow">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                      Description
                    </span>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-[11px] font-bold text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="#"
                    className="flex-1 bg-zinc-900 text-white text-center py-3 rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="#"
                    className="flex-1 bg-white border-2 border-zinc-200 text-zinc-900 text-center py-3 rounded-xl text-sm font-semibold hover:bg-zinc-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
