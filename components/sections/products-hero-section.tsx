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
                Investment Products
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 font-display leading-tight">
                Investment
                <span className="block text-blue-600 dark:text-blue-400">Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Institutional-grade funds targeting high-growth technology companies with proven market traction.
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

            {/* Right Content - Creative Visual */}
            <AnimatedSection className="relative">
              <div className="relative">
                {/* Main Visual Display */}
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 overflow-hidden">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Investment Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-400">Institutional-grade fund management</p>
                  </div>

                  {/* Creative Visual Element */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl overflow-hidden mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&crop=center"
                      alt="Investment Portfolio"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl px-3 py-2">
                      <div className="text-sm font-semibold text-blue-600">Enterprise</div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl px-3 py-2">
                      <div className="text-sm font-semibold text-blue-600">Growth</div>
                    </div>
                  </div>

                  {/* Fund Summary */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center">
                    <div className="text-lg font-semibold text-black dark:text-white mb-2">Premium Investment Funds</div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">Technology-Focused Portfolio</div>
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
