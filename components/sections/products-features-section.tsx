"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, BarChart3, Globe, Zap, Award, CheckCircle, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Institutional Grade",
    description: "Bank-level security and compliance with institutional investment standards",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: Users,
    title: "Expert Management",
    description: "Experienced investment team with deep technology sector expertise",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "Rigorous analysis and due diligence backed by comprehensive market data",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "International investment opportunities with local market expertise",
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    icon: Zap,
    title: "Active Value Creation",
    description: "Hands-on approach to accelerate portfolio company growth",
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Consistent outperformance with 99.9% success rate across investments",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
  },
]

const investmentProcess = [
  {
    step: "01",
    title: "Sourcing & Screening",
    description: "Identify high-potential opportunities through our extensive network and proprietary deal flow.",
    features: ["Global network access", "Proprietary screening", "Market intelligence"]
  },
  {
    step: "02",
    title: "Due Diligence",
    description: "Comprehensive analysis of business model, market opportunity, and management team.",
    features: ["Financial analysis", "Market assessment", "Technology review"]
  },
  {
    step: "03",
    title: "Investment & Partnership",
    description: "Strategic investment with active involvement in growth acceleration and value creation.",
    features: ["Capital deployment", "Strategic guidance", "Operational support"]
  },
  {
    step: "04",
    title: "Value Creation & Exit",
    description: "Drive growth initiatives and optimize for successful exit opportunities.",
    features: ["Growth acceleration", "Exit optimization", "Return maximization"]
  },
]

export function ProductsFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Features Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700">
                Why Choose CapEdge
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display">
                Investment Excellence
                <span className="block text-blue-600 dark:text-blue-400">Built on Experience</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our investment approach combines deep sector expertise, rigorous analysis, and active value creation to deliver superior returns for our investors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4 font-display">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investment Process */}
          <div>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur-sm border-emerald-200 text-emerald-700">
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display">
                Disciplined Investment
                <span className="block text-emerald-600 dark:text-emerald-400">Methodology</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our proven four-step investment process ensures thorough evaluation and successful value creation across our portfolio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentProcess.map((process, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 relative overflow-hidden">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4 font-display pr-16">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {process.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {process.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Connecting Line */}
                  {index < investmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transform -translate-y-1/2 z-10"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="mt-20">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-4 font-display">
                    Performance Highlights
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Consistent outperformance across all investment products
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$2.4B</div>
                    <div className="text-gray-600 dark:text-gray-300">Total AUM</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">99.9%</div>
                    <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">28.5%</div>
                    <div className="text-gray-600 dark:text-gray-300">Avg. Returns</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
                    <div className="text-gray-600 dark:text-gray-300">Portfolio Companies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
