import React from "react";
import { VALUE_PROPS } from "../constants";

const WhyHireMe: React.FC = () => {
  return (
    <section id="why-hire" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">
              Working With Me
            </h2>
            <h3 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">
              Why I am the right partner for your next project.
            </h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Successful products aren't built in a vacuum. I prioritize
              transparency, directness, and deep technical research to ensure
              your vision is realized exactly as intended.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-zinc-900">
                    Proven Track Record
                  </h5>
                  <p className="text-sm text-zinc-500">
                    I deliver what I promise, every single time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUE_PROPS.map((prop) => (
              <div
                key={prop.title}
                className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  {/* Mock icons based on 'prop.icon' */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-3">
                  {prop.title}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
