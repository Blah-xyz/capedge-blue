"use client";

import { CheckCircle } from "lucide-react";

// Skewed Graph Mesh with Zigzag Line SVG
function SkewedGraphSVG() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[600px] w-full">
      <div className="relative w-[500px] h-[400px] transform scale-95">

        <svg
          className="w-full h-full"
          viewBox="0 0 500 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Arrow marker - smaller size, green to match zigzag line */}
            <marker id="arrowhead" markerWidth="8" markerHeight="6"
              refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
            </marker>
          </defs>

          {/* Graph Mesh - No background, transparent */}
          <g>
            {/* Vertical grid lines - black */}
            <g stroke="#000000" strokeWidth="3" opacity="0.6">
              <line x1="100" y1="80" x2="100" y2="330" />
              <line x1="150" y1="80" x2="150" y2="330" />
              <line x1="200" y1="80" x2="200" y2="330" />
              <line x1="250" y1="80" x2="250" y2="330" />
              <line x1="300" y1="80" x2="300" y2="330" />
              <line x1="350" y1="80" x2="350" y2="330" />
            </g>

            {/* Horizontal grid lines - black */}
            <g stroke="#000000" strokeWidth="3" opacity="0.6">
              <line x1="50" y1="120" x2="400" y2="120" />
              <line x1="50" y1="160" x2="400" y2="160" />
              <line x1="50" y1="200" x2="400" y2="200" />
              <line x1="50" y1="240" x2="400" y2="240" />
              <line x1="50" y1="280" x2="400" y2="280" />
            </g>
          </g>

          {/* Simplified Zigzag Line with 5 corners */}
          <g>
            {/* Main zigzag path - solid green throughout */}
            <path
              d="M 60 300
                 L 150 250
                 L 220 280
                 L 290 200
                 L 360 230
                 L 450 150"
              stroke="#10b981"
              strokeWidth="8"
              fill="none"
              markerEnd="url(#arrowhead)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points on the zigzag line - green */}
            <g fill="#10b981">
              <circle cx="150" cy="250" r="4" />
              <circle cx="220" cy="280" r="4" />
              <circle cx="290" cy="200" r="4" />
              <circle cx="360" cy="230" r="4" />
              <circle cx="450" cy="150" r="4" />
            </g>

            {/* Glowing effect for the line - green */}
            <path
              d="M 60 300
                 L 150 250
                 L 220 280
                 L 290 200
                 L 360 230
                 L 450 150"
              stroke="#10b981"
              strokeWidth="12"
              fill="none"
              opacity="0.3"
              filter="blur(3px)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>


        </svg>

      </div>
    </div>
  );
}

export function SmartInvestingSection() {
  return (
    <section
      id="smart-investing"
      className="relative px-4 md:px-8 bg-blue-50 dark:bg-gray-800 overflow-visible flex items-center min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Skewed Graph on the left side */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <SkewedGraphSVG />
          </div>

          {/* Content on the right side */}
          <div className="space-y-6 lg:pl-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] text-black dark:text-white">
                Unlocking Financial
                <br />
                <span className="text-blue-600">Potential</span>
                <br />
                through Smart Investing
              </h2>

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-2xl">
                Smart investing with realistic risk understanding and well-thought-out strategy.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 group/item hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white">Scalable Business Model</h4>
              </div>

              <div className="flex items-center gap-3 group/item hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white">Predictable Revenue Streams</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
