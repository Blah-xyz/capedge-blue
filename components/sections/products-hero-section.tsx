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
                {/* Laptop Mockup */}
                <div className="relative bg-gray-800 dark:bg-gray-900 rounded-t-2xl p-4 shadow-2xl">
                  {/* Laptop Screen Bezel */}
                  <div className="bg-black rounded-t-xl p-1">
                    {/* Screen Content */}
                    <div className="bg-white dark:bg-slate-900 rounded-t-lg overflow-hidden relative h-80">
                      {/* Browser Bar */}
                      <div className="bg-gray-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-slate-700">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white dark:bg-slate-700 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-300 ml-4">
                          capedge.com/dashboard
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 h-full bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-bold text-black dark:text-white">Analytics Dashboard</h3>
                          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg px-3 py-1">
                            <span className="text-blue-600 text-sm font-medium">Live</span>
                          </div>
                        </div>

                        {/* Dashboard Widgets */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-2xl font-bold text-blue-600 mb-1">$2.4M</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Revenue</div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                            <div className="text-2xl font-bold text-green-600 mb-1">+24%</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Growth</div>
                          </div>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm h-32">
                          <div className="flex items-end justify-between h-full">
                            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                              <div
                                key={i}
                                className="bg-blue-500 rounded-t w-4"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Floating Platform Badges */}
                      <div className="absolute top-20 -right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/20">
                        <div className="text-sm font-semibold text-blue-600">Analytics</div>
                      </div>
                      <div className="absolute bottom-20 -left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/20">
                        <div className="text-sm font-semibold text-blue-600">Automation</div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="bg-gray-700 dark:bg-gray-800 h-4 rounded-b-2xl relative">
                    <div className="absolute inset-x-0 top-1 h-2 bg-gray-600 dark:bg-gray-700 rounded-b-xl mx-8"></div>
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
