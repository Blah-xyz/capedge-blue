"use client";

import { CheckCircle } from "lucide-react";

// Large Realistic Phone SVG Illustration (partial view)
function PhoneSVG() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[700px] w-full">
      <div className="relative w-[380px] h-[900px] transform translate-y-40 scale-110">
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

              {/* App Header */}
              <div className="mx-6 mb-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center shadow-lg">
                <h1 className="text-white text-3xl font-bold tracking-wide">CapEdge</h1>
                <p className="text-blue-100 text-sm mt-2">Portfolio Management</p>
              </div>

              {/* Navigation */}
              <div className="mx-6 mb-6 bg-white/95 backdrop-blur rounded-2xl p-2 flex shadow-lg">
                <div className="flex-1 bg-blue-600 rounded-xl py-3 text-center shadow-sm">
                  <span className="text-white text-base font-semibold">Portfolio</span>
                </div>
                <div className="flex-1 py-3 text-center">
                  <span className="text-slate-600 text-base">Analytics</span>
                </div>
                <div className="flex-1 py-3 text-center">
                  <span className="text-slate-600 text-base">Reports</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="mx-6 space-y-4 pb-20">

                {/* Portfolio Performance Graph */}
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-lg border border-white/20">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-slate-800">Portfolio Performance</h3>
                      <p className="text-xs text-slate-500">Last 12 months</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">+24.8%</div>
                      <div className="text-xs text-slate-500">Total Return</div>
                    </div>
                  </div>

                  {/* Compact Graph */}
                  <div className="relative h-24 mb-3">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 96">
                      <defs>
                        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 80 L 50 75 L 100 65 L 150 55 L 200 45 L 250 35 L 300 25 L 300 96 L 0 96 Z" fill="url(#graphGradient)" />
                      <path d="M 0 80 L 50 75 L 100 65 L 150 55 L 200 45 L 250 35 L 300 25" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      <circle cx="150" cy="55" r="3" fill="#3b82f6" />
                      <circle cx="300" cy="25" r="3" fill="#3b82f6" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-sm font-semibold text-slate-800">$2.4M</div>
                      <div className="text-xs text-slate-500">Total Value</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600">5</div>
                      <div className="text-xs text-slate-500">Holdings</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-600">+18%</div>
                      <div className="text-xs text-slate-500">This Month</div>
                    </div>
                  </div>
                </div>

                {/* Active Investments */}
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-lg border border-white/20">
                  <h3 className="text-base font-semibold text-slate-800 mb-4">Active Investments</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xs">FS</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">FinTech Solutions</div>
                          <div className="text-xs text-slate-500">Enterprise Software</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">+32%</div>
                        <div className="text-xs text-slate-500">$480K</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-xs">DS</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">DataStream AI</div>
                          <div className="text-xs text-slate-500">Analytics Platform</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">+28%</div>
                        <div className="text-xs text-slate-500">$620K</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-xs">CP</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">CloudPay</div>
                          <div className="text-xs text-slate-500">Payment Solutions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">+15%</div>
                        <div className="text-xs text-slate-500">$350K</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Market Insights */}
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-lg border border-white/20">
                  <h3 className="text-base font-semibold text-slate-800 mb-4">Market Insights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">Enterprise Software Surge</div>
                        <div className="text-xs text-slate-500">SaaS valuations up 18% this quarter</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">AI Integration Trends</div>
                        <div className="text-xs text-slate-500">75% of portfolio companies adopting AI</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">Q4 Outlook Positive</div>
                        <div className="text-xs text-slate-500">Expected 12% growth in tech sector</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-lg border border-white/20">
                  <h3 className="text-base font-semibold text-slate-800 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs">↗</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-800">Investment in CloudPay completed</div>
                        <div className="text-xs text-slate-500">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">📊</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-800">Q3 portfolio review published</div>
                        <div className="text-xs text-slate-500">1 day ago</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 text-xs">🤝</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-800">Partnership with DataStream AI</div>
                        <div className="text-xs text-slate-500">3 days ago</div>
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

          {/* Antenna Lines */}
          <div className="absolute top-20 left-0 w-full h-px bg-gray-400/30"></div>
          <div className="absolute top-40 left-0 w-full h-px bg-gray-400/30"></div>
          <div className="absolute bottom-20 left-0 w-full h-px bg-gray-400/30"></div>

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
    <section id="about" className="relative py-24 px-4 md:px-8 bg-white dark:bg-gray-900 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">About CapEdge</span>
            </div>

            <div>
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
                Building the Future
                <br />
                <span className="text-slate-700 dark:text-slate-300">of Enterprise Software.</span>
              </h3>
            </div>

            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              CapEdge Group, Inc. is a private portfolio management company focused on making strategic investments in
              businesses, alternative investments and enterprise software. We partner with management teams to build
              transformational technology solutions.
            </p>

            <div className="space-y-5 mt-6">
              <div className="flex items-start gap-3 group/item">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Enterprise Software Focus</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">Specialized expertise in enterprise software and financial services technology</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Strategic Partnerships</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">Long-term partnerships with management teams beyond just capital</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Market Transformation</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">Creating solutions that reshape key markets through innovation</p>
                </div>
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
