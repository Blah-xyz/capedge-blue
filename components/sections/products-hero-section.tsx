"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Layers, ArrowRight, Building2, TrendingUp } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"

export function ProductsHeroSection() {
  const { setIsOpen } = useContactDialog()

  const handleContactClick = () => {
    setIsOpen(true)
  }

  return (
    <section
      id="products-hero"
      className="relative flex items-center overflow-hidden -mt-4 min-h-[80vh]"
      style={{ paddingTop: '8rem', paddingBottom: '6rem' }}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-8 bg-white/90 backdrop-blur-sm border-emerald-200 text-emerald-700 px-4 py-2">
                <Layers className="w-4 h-4 mr-2" />
                Investment Solutions
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 font-display leading-tight">
                Smart
                <span className="block text-emerald-600 dark:text-emerald-400">Investing</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Institutional-grade investment products designed for sophisticated investors seeking exposure to high-growth technology companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleContactClick} className="group px-8 py-4 text-lg">
                  Explore Funds
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Download Materials
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Content - Clean Fund Showcase */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Main Fund Display */}
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Investment Funds</h3>
                    <Badge className="bg-emerald-600 text-white">Active</Badge>
                  </div>

                  {/* Fund Cards */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-gray-200">Enterprise Fund</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">$1.2B AUM</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">+28.5%</div>
                        <div className="text-xs text-gray-500">Returns</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-gray-200">Growth Fund</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">$800M AUM</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600">+32.1%</div>
                        <div className="text-xs text-gray-500">Returns</div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">$2.4B</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total AUM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">15+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <Layers className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-300/15 dark:bg-blue-700/15 rounded-full blur-3xl"></div>
    </section>
  )
}
