"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight, FileText, Download, Search } from "lucide-react"

export function ResourcesHeroSection() {
  return (
    <section
      id="resources-hero"
      className="relative flex items-center overflow-hidden -mt-24 min-h-[80vh]"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -top-24 bg-gradient-to-br from-emerald-100 via-teal-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-8 bg-white/90 backdrop-blur-sm border-emerald-200 text-emerald-700 px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Hub
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 font-display leading-tight">
                Resource
                <span className="block text-emerald-600 dark:text-emerald-400">Center</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Access comprehensive investment insights, market research, and educational resources to stay ahead in enterprise software investing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group px-8 py-4 text-lg">
                  Explore Resources
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Download Guides
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Content - Resource Library Illustration */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Main Resource Card */}
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Badge className="bg-emerald-600 text-white">Updated</Badge>
                  </div>

                  {/* Search Bar */}
                  <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-700 rounded-lg p-3 mb-6">
                    <Search className="w-4 h-4 text-gray-500" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Search resources...</div>
                  </div>

                  {/* Resource Categories */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Market Reports</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">12</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Download className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium">Investment Guides</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">8</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium">Case Studies</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">15</Badge>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Resources</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">25K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
