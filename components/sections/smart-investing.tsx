"use client";

import { CheckCircle } from "lucide-react";

// Overlapping Cards Component
function OverlappingCards() {
  return (
    <div className="relative flex items-center justify-center h-[600px] w-full">
      <div className="relative w-[650px] h-[500px]">

        {/* Card 1 - Back card */}
        <div className="absolute top-[60px] left-0 w-[360px] h-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform rotate-[-8deg] z-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Growth Analytics</h3>
            </div>
          </div>
        </div>

        {/* Card 2 - Middle card */}
        <div className="absolute top-[76px] left-20 w-[360px] h-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform rotate-[2deg] z-20">
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Smart Investing</h3>
            </div>
          </div>
        </div>

        {/* Card 3 - Front card */}
        <div className="absolute top-[92px] left-40 w-[360px] h-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform rotate-[8deg] z-30">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio Management</h3>
            </div>
          </div>
        </div>

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
          {/* Overlapping Cards on the left side */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <OverlappingCards />
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
