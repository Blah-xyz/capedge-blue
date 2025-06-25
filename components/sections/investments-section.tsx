"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "../Counter"
import { TrendingUp, Shield, Zap, Award } from "lucide-react"

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            CapEdge Group
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Driving exceptional returns through strategic enterprise software investments
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Investment Success */}
          <AnimatedSection delay={0.1}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-right">
                    <Counter
                      target={17}
                      duration={2000}
                      suffix="+"
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Investments</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Successful Investments</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Proven track record in enterprise software and business investments with consistent growth
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Transaction Volume */}
          <AnimatedSection delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-cyan-200 dark:hover:border-cyan-800 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-xl">
                    <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="text-right">
                    <Counter
                      target={137}
                      duration={2000}
                      suffix="%"
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Growth Rate</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Portfolio Growth</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Average growth rate across our enterprise software investment portfolio
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Success Rate */}
          <AnimatedSection delay={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl">
                    <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="text-right">
                    <Counter
                      target={99.9}
                      duration={2000}
                      suffix="%"
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Success Rate</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Investment Success</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Exceptional success rate across our enterprise software investment portfolio
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>


      </div>
    </section>
  )
}
