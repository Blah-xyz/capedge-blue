"use client";

import { CheckCircle } from "lucide-react";

// Realistic Phone SVG Illustration (partial view)
function PhoneSVG() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[600px] w-full">
      <div className="relative w-[360px] h-[650px] transform translate-y-32 scale-95">
        {/* Phone Shadow */}
        <div className="absolute inset-0 bg-black/20 rounded-[5rem] blur-3xl translate-x-4 translate-y-8 scale-105"></div>

        {/* Phone Body - iPhone Style */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 rounded-[5rem] p-2 shadow-2xl border border-gray-300/80">

          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[4.5rem] overflow-hidden relative shadow-inner border border-gray-800">

            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">

              {/* Status Bar */}
              <div className="flex justify-between items-center px-8 pt-16 pb-6 text-white text-base">
                <span className="font-semibold">9:41</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-4 bg-white rounded-full"></div>
                    <div className="w-1.5 h-4 bg-white rounded-full"></div>
                    <div className="w-1.5 h-4 bg-white rounded-full"></div>
                    <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
                  </div>
                  <div className="w-8 h-4 border-2 border-white rounded-sm relative">
                    <div className="w-5 h-2.5 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                    <div className="w-1 h-2 bg-white rounded-r absolute -right-1 top-1"></div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="mx-4 mb-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5 bg-gray-100 rounded-lg px-3 py-2 flex-1 mr-3">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div className="flex-1 text-blue-600 font-medium text-sm">capedgegroup.com</div>
                    <div className="w-0.5 h-4 bg-blue-600 animate-pulse"></div>
                  </div>
                  {/* User Avatar */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-semibold">JD</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mx-4 mb-4 bg-white/95 backdrop-blur rounded-xl p-1.5 flex shadow-lg">
                <div className="flex-1 bg-blue-600 rounded-lg py-2 text-center shadow-sm">
                  <span className="text-white text-sm font-semibold">Dashboard</span>
                </div>
                <div className="flex-1 py-2 text-center">
                  <span className="text-slate-600 text-sm">Investments</span>
                </div>
                <div className="flex-1 py-2 text-center">
                  <span className="text-slate-600 text-sm">Reports</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="mx-4 space-y-3 pb-16">

                {/* Portfolio Performance Graph */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-white/20">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">Portfolio Performance</h3>
                      <p className="text-xs text-slate-500">Last 12 months</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">+32.4%</div>
                      <div className="text-xs text-slate-500">Total Return</div>
                    </div>
                  </div>

                  {/* Compact Graph */}
                  <div className="relative h-20 mb-3">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 80">
                      <defs>
                        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 65 L 50 60 L 100 50 L 150 40 L 200 30 L 250 20 L 300 15 L 300 80 L 0 80 Z" fill="url(#graphGradient)" />
                      <path d="M 0 65 L 50 60 L 100 50 L 150 40 L 200 30 L 250 20 L 300 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      <circle cx="150" cy="40" r="2.5" fill="#3b82f6" />
                      <circle cx="300" cy="15" r="2.5" fill="#3b82f6" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm font-semibold text-slate-800">$125M</div>
                      <div className="text-xs text-slate-500">AUM</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600">25+</div>
                      <div className="text-xs text-slate-500">Investments</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-600">98%</div>
                      <div className="text-xs text-slate-500">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Top Investments */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-white/20">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3">Top Investments</h3>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xs">ES</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">Enterprise SaaS</div>
                          <div className="text-xs text-slate-500">B2B Software</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">+45%</div>
                        <div className="text-xs text-slate-500">$18.2M</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-xs">AI</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">AI Analytics</div>
                          <div className="text-xs text-slate-500">Data Platform</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">+38%</div>
                        <div className="text-xs text-slate-500">$12.8M</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-xs">FT</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">FinTech Suite</div>
                          <div className="text-xs text-slate-500">Financial Services</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">+29%</div>
                        <div className="text-xs text-slate-500">$9.4M</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Market Insights */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-white/20">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3">Market Insights</h3>
                  <div className="space-y-2.5">
                    <div className="flex items-start space-x-2.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">Enterprise SaaS Growth</div>
                        <div className="text-xs text-slate-500">B2B software market up 24% YoY</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">AI Adoption Accelerating</div>
                        <div className="text-xs text-slate-500">85% of enterprises investing in AI</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">Strong Exit Environment</div>
                        <div className="text-xs text-slate-500">Record M&A activity in tech sector</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-white/20">
                  <h3 className="text-sm font-semibold text-slate-800 mb-3">Recent Activity</h3>
                  <div className="space-y-2.5">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">↗</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-800">New SaaS investment closed</div>
                        <div className="text-xs text-slate-500">4 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">📊</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-800">Q4 portfolio report released</div>
                        <div className="text-xs text-slate-500">2 days ago</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 text-xs">🤝</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-800">Strategic partnership announced</div>
                        <div className="text-xs text-slate-500">1 week ago</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-white/70 rounded-full"></div>
            </div>
          </div>

          {/* Side Buttons - iPhone Style */}
          <div className="absolute -left-0.5 top-32 w-1 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-r shadow-sm"></div>
          <div className="absolute -left-0.5 top-44 w-1 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-r shadow-sm"></div>
          <div className="absolute -left-0.5 top-64 w-1 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-r shadow-sm"></div>

          {/* Power Button */}
          <div className="absolute -right-0.5 top-44 w-1 h-20 bg-gradient-to-l from-gray-400 to-gray-500 rounded-l shadow-sm"></div>

          {/* Lightning Port */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full"></div>

          {/* Speaker Grilles */}
          <div className="absolute bottom-4 left-16 flex space-x-1">
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-16 flex space-x-1">
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          </div>



          {/* Apple Logo Area (subtle) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-10 opacity-5">
            <div className="w-full h-full bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-4 md:px-8 bg-white dark:bg-gray-900 overflow-visible flex items-center"
      style={{ height: 'calc(100vh - 4rem)', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:pr-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] text-gray-900 dark:text-white">
                Building the Future
                <br />
                <span className="text-blue-600">of Enterprise Software.</span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-2xl">
                We partner with visionary teams to build transformational technology platforms.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 group/item hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Enterprise Software Focus</h4>
              </div>

              <div className="flex items-center gap-3 group/item hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Strategic Partnerships</h4>
              </div>

              <div className="flex items-center gap-3 group/item hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Market Transformation</h4>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <PhoneSVG />
          </div>
        </div>
      </div>

    </section>
  );
}
