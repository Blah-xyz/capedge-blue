"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Newspaper } from "lucide-react"

export function NewsHeroSection() {
  return (
    <section
      id="news-hero"
      className="relative flex items-center overflow-hidden -mt-24 min-h-[80vh]"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -top-24 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-8 bg-white/90 backdrop-blur-sm border-blue-200 text-blue-700 px-4 py-2">
                <Newspaper className="w-4 h-4 mr-2" />
                Latest News
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 font-display leading-tight">
                Stay
                <span className="block text-blue-600 dark:text-blue-400">Informed</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Get the latest updates on our investments, portfolio companies, and market insights from CapEdge Group.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group px-8 py-4 text-lg">
                  Explore News
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Subscribe to Updates
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Content - Clean Illustration */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Badge className="bg-blue-600 text-white">Live</Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3"></div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">15K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Readers</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-blue-600" />
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
