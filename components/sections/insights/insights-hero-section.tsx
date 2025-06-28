"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, ArrowRight, BarChart3, TrendingUp } from "lucide-react"

export function InsightsHeroSection() {
  return (
    <section
      id="insights-hero"
      className="relative flex items-center overflow-hidden -mt-24 min-h-[80vh]"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -top-24 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-8 bg-white/90 backdrop-blur-sm border-indigo-200 text-indigo-700 px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                Market Intelligence
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 font-display leading-tight">
                Deep
                <span className="block text-indigo-600 dark:text-indigo-400">Insights</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Data-driven market analysis and investment perspectives from our experienced research team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group px-8 py-4 text-lg">
                  Explore Research
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Download Reports
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Content - Clean Analytics Illustration */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Main Analytics Card */}
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Market Analysis</h3>
                    <Badge className="bg-indigo-600 text-white">Live Data</Badge>
                  </div>

                  {/* Chart Visualization */}
                  <div className="space-y-6">
                    <div className="flex items-end justify-between h-32 gap-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg h-16"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Q1</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg h-20"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Q2</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg h-24"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Q3</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 bg-gradient-to-t from-pink-500 to-pink-300 rounded-t-lg h-28"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Q4</span>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">+28.5%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">99.9%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-8 h-8 text-indigo-600" />
                </div>

                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-300/15 dark:bg-purple-700/15 rounded-full blur-3xl"></div>
    </section>
  )
}
