"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, BarChart3, ArrowRight } from "lucide-react"

export function InsightsHeroSection() {
  return (
    <section
      id="insights-hero"
      className="relative flex items-center overflow-hidden -mt-4 min-h-[70vh]"
      style={{ paddingTop: '8rem', paddingBottom: '4rem' }}
    >
      {/* Background */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 dark:bg-purple-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur-sm border-indigo-200 text-indigo-700">
                <Brain className="w-4 h-4 mr-2" />
                Market Intelligence
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 font-display">
                Investment
                <span className="block text-indigo-600 dark:text-indigo-400">Insights & Analysis</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Deep market analysis, investment perspectives, and thought leadership from CapEdge Group's experienced investment team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="group">
                  Explore Insights
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Subscribe to Updates
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Weekly Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Data-Driven Insights</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Illustration */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Main Chart Container */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Market Performance</h3>
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      +24.7%
                    </Badge>
                  </div>
                  
                  {/* Chart Bars */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm text-gray-600 dark:text-gray-400">Q1 2024</div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <div className="w-12 text-sm font-medium text-gray-800 dark:text-gray-200">75%</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm text-gray-600 dark:text-gray-400">Q2 2024</div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full w-4/5 animate-pulse delay-200"></div>
                      </div>
                      <div className="w-12 text-sm font-medium text-gray-800 dark:text-gray-200">82%</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm text-gray-600 dark:text-gray-400">Q3 2024</div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-5/6 animate-pulse delay-400"></div>
                      </div>
                      <div className="w-12 text-sm font-medium text-gray-800 dark:text-gray-200">89%</div>
                    </div>
                  </div>
                  
                  {/* Chart Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Portfolio Growth</span>
                      <span className="text-green-600 font-medium">+24.7% YTD</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-white/20">
                  <div className="text-2xl font-bold text-indigo-600">$2.4B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AUM</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-white/20">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Investments</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
