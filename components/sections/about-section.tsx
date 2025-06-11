"use client";

import { Building2, Users, Target } from "lucide-react";

// Large Realistic Phone SVG Illustration (partial view)
function PhoneSVG() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[500px] w-full">
      <div className="relative w-[300px] h-[600px] transform rotate-12 translate-y-16">
        {/* Phone Shadow */}
        <div className="absolute inset-0 bg-black/10 rounded-[3rem] blur-xl translate-x-4 translate-y-8 scale-105"></div>

        {/* Phone Body */}
        <div className="relative w-full h-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-[3rem] p-2 shadow-2xl border border-slate-300">

          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">

            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 relative">

              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-12 pb-4 text-white text-sm">
                <span className="font-medium">9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-6 h-3 border border-white rounded-sm">
                    <div className="w-4 h-2 bg-green-400 rounded-sm m-0.5"></div>
                  </div>
                </div>
              </div>

              {/* App Header */}
              <div className="mx-4 mb-4 bg-blue-600 rounded-2xl p-6 text-center">
                <h1 className="text-white text-2xl font-bold">CapEdge</h1>
              </div>

              {/* Navigation */}
              <div className="mx-4 mb-4 bg-white rounded-xl p-1 flex">
                <div className="flex-1 bg-blue-600 rounded-lg py-2 text-center">
                  <span className="text-white text-sm font-medium">Portfolio</span>
                </div>
                <div className="flex-1 py-2 text-center">
                  <span className="text-slate-600 text-sm">Analytics</span>
                </div>
                <div className="flex-1 py-2 text-center">
                  <span className="text-slate-600 text-sm">Reports</span>
                </div>
              </div>

              {/* Content Cards */}
              <div className="mx-4 space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">$</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">↗</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    </div>
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold">📊</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>

          {/* Side Buttons */}
          <div className="absolute left-0 top-20 w-1 h-12 bg-slate-400 rounded-r"></div>
          <div className="absolute left-0 top-36 w-1 h-8 bg-slate-400 rounded-r"></div>
          <div className="absolute left-0 top-48 w-1 h-8 bg-slate-400 rounded-r"></div>

          {/* Camera Bump */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-slate-300 rounded-2xl shadow-lg">
            <div className="absolute top-2 left-2 w-5 h-5 bg-slate-700 rounded-full"></div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-slate-700 rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3">ABOUT US</h2>
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Building the Future
                <br />
                <span className="text-gray-700 dark:text-gray-300">of Enterprise Software.</span>
              </h3>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              CapEdge Group, Inc. is a private portfolio management company focused on making strategic investments in
              businesses, alternative investments and enterprise software. We partner with management teams to build
              transformational technology solutions.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mr-4 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Enterprise Software Focus</h4>
                  <p className="text-gray-600 dark:text-gray-400">Specialized expertise in enterprise software and financial services technology</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mr-4 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Strategic Partnerships</h4>
                  <p className="text-gray-600 dark:text-gray-400">Long-term partnerships with management teams beyond just capital</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mr-4 mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Market Transformation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Creating solutions that reshape key markets through innovation</p>
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
