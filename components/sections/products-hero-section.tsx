"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Layers, TrendingUp, Building2, ArrowRight, Zap, Shield, Globe } from "lucide-react"
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
      style={{ paddingTop: '8rem', paddingBottom: '4rem' }}
    >
      {/* Background */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-emerald-100 via-blue-50 to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur-sm border-emerald-200 text-emerald-700">
                <Layers className="w-4 h-4 mr-2" />
                Investment Solutions
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 font-display">
                Enterprise
                <span className="block text-emerald-600 dark:text-emerald-400">Investment Products</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Comprehensive investment solutions designed for institutional investors, family offices, and high-net-worth individuals seeking exposure to enterprise software and technology platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={handleContactClick} className="group">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Prospectus
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">$2.4B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Investments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Product Cards */}
            <AnimatedSection className="relative">
              <div className="space-y-6">
                {/* Enterprise Fund Card */}
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-600 text-white">Flagship</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 font-display">
                      CapEdge Enterprise Fund
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our flagship fund focused on growth-stage enterprise software companies with proven market traction.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Min. Investment: $1M
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Growth Fund Card */}
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gradient-to-r from-emerald-50 to-green-50 dark:from-slate-800 dark:to-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                      </div>
                      <Badge variant="outline" className="border-emerald-200 text-emerald-700">Growth</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 font-display">
                      CapEdge Growth Fund
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Targeting high-growth technology companies in expansion phase with global market opportunities.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Min. Investment: $500K
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Platform Fund Card */}
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <Badge variant="outline" className="border-purple-200 text-purple-700">Platform</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 font-display">
                      CapEdge Platform Fund
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Specialized fund for platform businesses and marketplace technologies with network effects.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Min. Investment: $2M
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200/30 dark:bg-emerald-800/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
