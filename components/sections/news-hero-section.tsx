"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp } from "lucide-react"

export function NewsHeroSection() {
  return (
    <section
      id="news-hero"
      className="relative flex items-center overflow-hidden -mt-4 min-h-[60vh]"
      style={{ paddingTop: '8rem', paddingBottom: '4rem' }}
    >
      {/* Background */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                Latest Updates
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 font-display">
                CapEdge Group
                <span className="block text-blue-600 dark:text-blue-400">News & Updates</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Stay informed with the latest developments, announcements, and insights from CapEdge Group's investment activities and portfolio companies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Updated Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Real-time Market Insights</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-3xl"></div>
    </section>
  )
}
