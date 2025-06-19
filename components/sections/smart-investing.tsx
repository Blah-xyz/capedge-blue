"use client";

import { CheckCircle } from "lucide-react";

// Smart Investing Video Component
function SmartInvestingVideo() {
  // TODO: Replace with your video URL
  const videoUrl = "YOUR_VIDEO_URL_HERE";

  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[600px] w-full">
      <div className="relative w-full max-w-lg h-[400px] transform scale-95">

        {/* Video Card Container */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-2xl border border-gray-700/50 dark:border-gray-600/50 overflow-hidden">

          {/* Video Element */}
          <video
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src={videoUrl} type="video/mp4" />

            {/* Fallback content when no video URL is provided */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Investing</h3>
                <p className="text-blue-100">Add your video URL</p>
              </div>
            </div>
          </video>

          {/* Corner Badge */}
          <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
            Smart Investing
          </div>
        </div>

        {/* Floating Elements Around Video */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-15 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 left-8 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute -bottom-2 right-12 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 -left-2 w-2 h-2 bg-green-500 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 -right-2 w-2 h-2 bg-yellow-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '1.5s'}}></div>
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
          {/* Smart Investing Video on the left side */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <SmartInvestingVideo />
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
