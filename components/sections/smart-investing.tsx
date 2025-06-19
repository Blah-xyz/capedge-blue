"use client";

import { CheckCircle } from "lucide-react";

// Overlapping Cards Component
function OverlappingCards() {
  return (
    <div className="relative flex items-center justify-center h-[600px] w-full">
      <div className="relative w-[650px] h-[500px]">

        {/* Card 1 - Back card (Real Dollar Bills) */}
        <div className="absolute top-[60px] left-0 w-[360px] h-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform rotate-[-8deg] z-10">
          <div className="w-full h-full relative">
            {/* Real Dollar Bills Pattern */}
            <div className="absolute inset-0">
              <div className="grid grid-cols-2 gap-1 p-2 h-full">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative bg-green-100 border border-green-300 rounded-sm overflow-hidden">
                    {/* Dollar Bill Design */}
                    <div className="w-full h-full bg-gradient-to-r from-green-100 to-green-50 p-2 text-xs">
                      <div className="border border-green-400 h-full rounded-sm relative">
                        <div className="absolute top-1 left-1 text-green-800 font-bold">$100</div>
                        <div className="absolute top-1 right-1 text-green-800 font-bold">$100</div>
                        <div className="absolute bottom-1 left-1 text-green-800 font-bold">$100</div>
                        <div className="absolute bottom-1 right-1 text-green-800 font-bold">$100</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-green-200 rounded-full border border-green-400 flex items-center justify-center">
                            <span className="text-green-800 font-bold text-xs">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center p-8 relative z-10">
                <div className="w-16 h-16 bg-green-600/90 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white drop-shadow-lg">Cash Flow</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Middle card (Real Dollar Coins) */}
        <div className="absolute top-[76px] left-20 w-[360px] h-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform rotate-[2deg] z-20">
          <div className="w-full h-full relative">
            {/* Real Dollar Coins Pattern */}
            <div className="absolute inset-0">
              <div className="flex flex-wrap gap-2 p-4 justify-center items-center h-full">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="relative">
                    {/* Realistic Dollar Coin */}
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-600 shadow-md relative overflow-hidden">
                      {/* Coin Edge */}
                      <div className="absolute inset-1 border border-yellow-600 rounded-full">
                        {/* Coin Face */}
                        <div className="w-full h-full flex flex-col items-center justify-center text-yellow-800">
                          <div className="text-xs font-bold leading-none">$1</div>
                          <div className="text-[6px] font-semibold">USA</div>
                        </div>
                      </div>
                      {/* Coin Shine Effect */}
                      <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-200 rounded-full opacity-60"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center p-8 relative z-10">
                <div className="w-16 h-16 bg-yellow-600/90 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white drop-shadow-lg">Returns</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Front card (Real Investment Image) */}
        <div className="absolute top-[92px] left-40 w-[360px] h-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform rotate-[8deg] z-30">
          <div className="w-full h-full relative">
            {/* Real Investment Image */}
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Investment and Financial Growth"
              className="w-full h-full object-cover"
            />

            {/* Overlay with content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="text-center p-6 w-full">
                <div className="w-16 h-16 bg-blue-600/90 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white drop-shadow-lg">Smart Investing</h3>
              </div>
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
