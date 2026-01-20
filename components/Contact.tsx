
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Contact</h2>
            <h3 className="text-4xl font-bold text-zinc-900 mb-8">Let's discuss your project goals.</h3>
            
            <p className="text-lg text-zinc-600 mb-10">
              Whether you have a fully-formed idea or just the beginnings of a concept, I am here to help you strategize and execute.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Email Me</span>
                  <a href="mailto:hello@alexrivera.dev" className="text-zinc-900 font-semibold hover:text-indigo-600 transition-colors">hello@alexrivera.dev</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Find Me</span>
                  <div className="flex space-x-4 mt-1">
                    <a href="#" className="text-zinc-900 font-semibold hover:text-indigo-600 transition-colors">GitHub</a>
                    <a href="#" className="text-zinc-900 font-semibold hover:text-indigo-600 transition-colors">LinkedIn</a>
                    <a href="#" className="text-zinc-900 font-semibold hover:text-indigo-600 transition-colors">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-zinc-900">Message Received</h4>
                <p className="text-zinc-600">Thanks for reaching out! I typically respond within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Project Details</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Tell me a bit about what you're looking to build..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
