"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Layers, ArrowRight } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"

export function ProductsHeroSection() {
  const { setIsOpen } = useContactDialog()

  const handleContactClick = () => {
    setIsOpen(true)
  }

  return (
    <section
      id="products-hero"
      className="relative flex items-center overflow-hidden -mt-4 min-h-[85vh]"
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-8 bg-white/90 backdrop-blur-sm border-blue-200 text-blue-700 px-4 py-2">
                <Layers className="w-4 h-4 mr-2" />
                Software Platforms
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 font-display leading-tight">
                Enterprise
                <span className="block text-blue-600 dark:text-blue-400">Platforms</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Cutting-edge software platforms designed to accelerate business growth and operational efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleContactClick} className="group px-8 py-4 text-lg">
                  Explore Platforms
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Request Demo
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Content - Creative Laptop Dashboard */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Realistic Laptop Mockup */}
                <div className="relative">
                  {/* Laptop Screen */}
                  <div className="bg-gray-900 dark:bg-black rounded-t-3xl p-3 shadow-2xl transform perspective-1000 rotate-x-12">
                    {/* Screen Bezel */}
                    <div className="bg-black rounded-t-2xl p-2">
                      {/* Actual Screen */}
                      <div className="bg-white dark:bg-slate-900 rounded-t-xl overflow-hidden relative h-80">
                        {/* Browser Bar */}
                        <div className="bg-gray-50 dark:bg-slate-800 px-4 py-2 flex items-center gap-3 border-b border-gray-200 dark:border-slate-700">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-white dark:bg-slate-700 rounded-md px-3 py-1 text-xs text-gray-500 dark:text-gray-400 ml-4">
                            app.capedge.com/platform
                          </div>
                        </div>

                        {/* Dashboard Layout */}
                        <div className="flex h-full">
                          {/* Sidebar */}
                          <div className="w-16 bg-slate-800 dark:bg-slate-900 flex flex-col items-center py-4 space-y-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <div className="w-8 h-8 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                            </div>
                            <div className="w-8 h-8 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                            </div>
                            <div className="w-8 h-8 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                            </div>
                          </div>

                          {/* Main Content */}
                          <div className="flex-1 bg-gray-50 dark:bg-slate-900 p-4">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">Dashboard</div>
                              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                                <div className="w-full h-2 bg-blue-100 dark:bg-blue-900/30 rounded mb-2"></div>
                                <div className="w-3/4 h-1.5 bg-gray-200 dark:bg-slate-700 rounded mb-1"></div>
                                <div className="w-1/2 h-1.5 bg-gray-200 dark:bg-slate-700 rounded"></div>
                              </div>
                              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                                <div className="w-full h-2 bg-green-100 dark:bg-green-900/30 rounded mb-2"></div>
                                <div className="w-2/3 h-1.5 bg-gray-200 dark:bg-slate-700 rounded mb-1"></div>
                                <div className="w-3/4 h-1.5 bg-gray-200 dark:bg-slate-700 rounded"></div>
                              </div>
                            </div>

                            {/* Table */}
                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                              <div className="p-3 border-b border-gray-200 dark:border-slate-700">
                                <div className="w-20 h-1.5 bg-gray-900 dark:bg-white rounded"></div>
                              </div>
                              <div className="p-3 space-y-2">
                                <div className="flex justify-between items-center">
                                  <div className="w-16 h-1 bg-gray-300 dark:bg-slate-600 rounded"></div>
                                  <div className="w-8 h-1 bg-blue-300 rounded"></div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="w-20 h-1 bg-gray-300 dark:bg-slate-600 rounded"></div>
                                  <div className="w-6 h-1 bg-green-300 rounded"></div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="w-14 h-1 bg-gray-300 dark:bg-slate-600 rounded"></div>
                                  <div className="w-10 h-1 bg-purple-300 rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="bg-gray-800 dark:bg-gray-900 h-6 rounded-b-3xl relative shadow-lg">
                    <div className="absolute inset-x-0 top-2 h-2 bg-gray-700 dark:bg-gray-800 rounded-b-2xl mx-12"></div>
                    {/* Trackpad */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-700 dark:bg-gray-800 rounded"></div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-300/15 dark:bg-blue-700/15 rounded-full blur-3xl"></div>
    </section>
  )
}
