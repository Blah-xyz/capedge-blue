"use client";

import { Check } from "lucide-react";

// About Section SVG Illustration that appears to overflow from the dark investment section above
function AboutSectionSVG() {
  return (
    <div className="relative">
      {/* Dark background element that creates the illusion of overflowing from the section above */}
      <div className="absolute -top-32 -right-16 w-96 h-64 bg-[#002236] rounded-3xl transform rotate-12 opacity-80 -z-10"></div>
      <div className="absolute -top-24 -right-8 w-72 h-48 bg-[#002D47] rounded-2xl transform rotate-6 opacity-60 -z-10"></div>

      <svg
        viewBox="0 0 600 700"
        className="w-full h-auto relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient circles */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="darkOverflow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#002236" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#002D47" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Elements that appear to be coming from the dark section above */}
        <g transform="translate(400, 0)">
          {/* Dark overflow shapes */}
          <ellipse cx="0" cy="50" rx="120" ry="40" fill="url(#darkOverflow)" transform="rotate(-15 0 50)" />
          <rect x="-60" y="20" width="80" height="60" rx="12" fill="#002D47" fillOpacity="0.6" transform="rotate(-10 -20 50)" />
          <circle cx="60" cy="80" r="30" fill="#002236" fillOpacity="0.5" />

          {/* Transitioning elements from dark to light blue */}
          <circle cx="-40" cy="120" r="20" fill="#1E40AF" fillOpacity="0.7" />
          <rect x="20" y="140" width="40" height="40" rx="8" fill="#2563EB" fillOpacity="0.5" transform="rotate(20 40 160)" />
        </g>

        {/* Main illustration elements */}
        <g transform="translate(150, 200)">
          {/* Building/growth bars */}
          <rect x="0" y="80" width="30" height="100" rx="4" fill="#3B82F6" fillOpacity="0.4" />
          <rect x="40" y="60" width="30" height="120" rx="4" fill="#1D4ED8" fillOpacity="0.5" />
          <rect x="80" y="40" width="30" height="140" rx="4" fill="#2563EB" fillOpacity="0.6" />
          <rect x="120" y="20" width="30" height="160" rx="4" fill="#1E40AF" fillOpacity="0.7" />

          {/* Connecting lines/network */}
          <path d="M15 80 Q60 60 95 40" stroke="#3B82F6" strokeWidth="2" fill="none" strokeOpacity="0.5" />
          <path d="M55 60 Q100 40 135 20" stroke="#1D4ED8" strokeWidth="2" fill="none" strokeOpacity="0.6" />

          {/* Growth arrow */}
          <path d="M160 180 L200 140 L190 150 M200 140 L190 130" stroke="#1E40AF" strokeWidth="3" fill="none" strokeOpacity="0.8" />
        </g>

        {/* Floating geometric shapes */}
        <circle cx="100" cy="300" r="25" fill="#60A5FA" fillOpacity="0.3" />
        <polygon points="500,350 520,330 540,350 520,370" fill="#1D4ED8" fillOpacity="0.2" />
        <rect x="80" y="450" width="50" height="50" rx="10" fill="#3B82F6" fillOpacity="0.2" transform="rotate(15 105 475)" />

        {/* Additional flowing elements */}
        <g transform="translate(300, 400)">
          <path d="M0 0 Q50 -20 100 0 Q150 20 200 0" stroke="#3B82F6" strokeWidth="3" fill="none" strokeOpacity="0.4" />
          <circle cx="50" cy="-10" r="8" fill="#1D4ED8" fillOpacity="0.5" />
          <circle cx="150" cy="10" r="12" fill="#2563EB" fillOpacity="0.4" />
        </g>

        {/* Large background circle */}
        <circle cx="250" cy="350" r="150" fill="url(#blueGradient)" />
      </svg>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="relative py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:pr-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-3">ABOUT CAPEDGE</h2>
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Investment Philosophy
              <br />
              <span className="text-gray-700">that drives results.</span>
            </h3>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our systematic approach to investing is built on three guiding principles that ensure sustainable growth and
            transformational impact.
          </p>

          <div className="space-y-6 mt-8">
            <div className="flex items-start group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Deep Business Understanding</h4>
                <p className="text-gray-600">Deepening our knowledge and understanding of the business</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Operational Insight</h4>
                <p className="text-gray-600">Understanding operational challenges</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Strategic Investment</h4>
                <p className="text-gray-600">Investing in promising solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-visible">
          <AboutSectionSVG />
        </div>
      </div>
    </section>
  );
}
