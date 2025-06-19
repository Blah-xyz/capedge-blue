"use client";

import { CheckCircle } from "lucide-react";

// Overlapping Cards Component
function OverlappingCards() {
  return (
    <div className="relative flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] w-full mx-auto">
      <div className="relative w-[320px] md:w-[500px] lg:w-[650px] h-[300px] md:h-[400px] lg:h-[500px]">

        {/* Card 1 - Back card (Real Investment Image with Graph) */}
        <div className="absolute top-[40px] md:top-[50px] lg:top-[60px] left-0 w-[280px] md:w-[320px] lg:w-[360px] h-[180px] md:h-[220px] lg:h-[260px]  rounded-xl shadow-lg overflow-hidden transform rotate-[-8deg] z-10">
          <div className="w-full h-full relative">
            {/* Real Investment Image */}
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Investment and Financial Growth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 2 - Middle card (Business Card) */}
        <div className="absolute top-[55px] md:top-[66px] lg:top-[76px] left-[50px] md:left-[70px] lg:left-20 w-[280px] md:w-[320px] lg:w-[360px] h-[180px] md:h-[220px] lg:h-[260px]   rounded-xl shadow-lg overflow-hidden transform rotate-[2deg] z-20">
          <div className="w-full h-full relative">
            {/* Business Card Design */}
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-between">
              {/* Top Section - Logo/Company */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-blue-400 text-2xl font-bold">CapEdge</div>
                  <div className="text-blue-300 text-sm">GROUP</div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>

              {/* Middle Section - Name & Title */}
              <div className="text-white">
                <div className="text-xl font-bold">John Smith</div>
                <div className="text-blue-300 text-sm">Investment Manager</div>
              </div>

              {/* Bottom Section - Contact */}
              <div className="text-gray-300 text-xs space-y-1">
                <div>john.smith@capedge.com</div>
                <div>+1 (555) 123-4567</div>
                <div className="text-blue-300 hidden md:block lg:block">www.capedgegroup.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Front card (Credit Card) */}
        <div className="absolute top-[70px] md:top-[81px] lg:top-[92px] left-[100px] md:left-[140px] lg:left-40 w-[280px] md:w-[320px] lg:w-[360px] h-[180px] md:h-[220px] lg:h-[260px]  rounded-xl shadow-xl overflow-hidden transform rotate-[8deg] z-30">
          <div className="w-full h-full relative">
            {/* Credit Card Design */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 flex flex-col justify-between relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
              </div>

              {/* Top Section - Bank/Card Type */}
              <div className="flex justify-between items-start relative z-10">
                <div className="text-white">
                  <div className="text-lg font-bold">CapEdge</div>
                  <div className="text-blue-200 text-xs">PREMIUM</div>
                </div>
                <div className="text-white text-right">
                  <div className="text-xs">VISA</div>
                </div>
              </div>

              {/* Middle Section - Chip & Number */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md border border-yellow-600"></div>
                </div>
                <div className="text-white text-lg font-mono tracking-wider">
                  4532 •••• •••• 8901
                </div>
              </div>

              {/* Bottom Section - Name & Expiry */}
              <div className="flex justify-between items-end text-white relative z-10">
                <div>
                  <div className="text-xs text-blue-200">CARDHOLDER</div>
                  <div className="text-sm font-semibold">JOHN SMITH</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-blue-200">EXPIRES</div>
                  <div className="text-sm font-semibold">12/28</div>
                </div>
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
      className="relative px-4 pt-8 md:px-8 bg-blue-50 dark:bg-gray-800 overflow-visible "
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
