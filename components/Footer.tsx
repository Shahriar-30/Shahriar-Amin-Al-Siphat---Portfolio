import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-zinc-900"
          >
            Shahriar Amin <span className="text-indigo-600">.Al Siphat</span>
          </a>
          <p className="text-sm text-zinc-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          <a
            href="#about"
            className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
