"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, Globe, ArrowRight, CheckCircle, Users, BarChart3 } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"

const investmentFunds = [
  {
    icon: Building2,
    title: "CapEdge Enterprise Fund",
    description: "Our flagship fund focused on growth-stage enterprise software companies with proven market traction and scalable business models.",
    aum: "$1.2B",
    companies: "8 Active",
    performance: "+28.5%",
    minInvestment: "$1M",
    features: [
      "Enterprise software focus",
      "Growth-stage companies",
      "Proven market traction",
      "Scalable business models"
    ],
    color: "blue",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "CapEdge Growth Fund",
    description: "Targeting high-growth technology companies in expansion phase with global market opportunities and strong competitive advantages.",
    aum: "$800M",
    companies: "5 Active",
    performance: "+32.1%",
    minInvestment: "$500K",
    features: [
      "High-growth technology",
      "Global market expansion",
      "Competitive advantages",
      "Experienced leadership"
    ],
    color: "emerald",
    bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "CapEdge Platform Fund",
    description: "Specialized fund for platform businesses and marketplace technologies with network effects and data-driven insights.",
    aum: "$400M",
    companies: "2 Active",
    performance: "+41.3%",
    minInvestment: "$2M",
    features: [
      "Platform businesses",
      "Network effects",
      "Marketplace technologies",
      "Data-driven insights"
    ],
    color: "purple",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

export function ProductsMainSection() {
  const { setIsOpen } = useContactDialog()

  const handleContactClick = () => {
    setIsOpen(true)
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 text-emerald-700">
              <Building2 className="w-4 h-4 mr-2" />
              Investment Funds
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-display">
              Our Investment
              <span className="block text-emerald-600 dark:text-emerald-400">Products</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Institutional-grade investment solutions designed to provide targeted exposure to high-growth technology sectors.
            </p>
          </div>

          {/* Investment Funds Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {investmentFunds.map((fund, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gradient-to-br ${fund.bgGradient}`}>
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${fund.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <fund.icon className={`w-8 h-8 ${fund.iconColor}`} />
                    </div>
                    <Badge className="bg-green-600 text-white">Active</Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                    {fund.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {fund.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {fund.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${fund.iconColor} flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black dark:text-white">{fund.aum}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">AUM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black dark:text-white">{fund.companies}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Companies</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${fund.iconColor}`}>{fund.performance}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Returns</div>
                    </div>
                  </div>

                  {/* Minimum Investment */}
                  <div className="text-center mb-6 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Minimum Investment</div>
                    <div className="text-xl font-bold text-black dark:text-white">{fund.minInvestment}</div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full group/btn" onClick={handleContactClick}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Overview */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
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
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$2.4B</div>
                    <div className="text-gray-600 dark:text-gray-300">Total AUM</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">99.9%</div>
                    <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                      <Building2 className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                    <div className="text-gray-600 dark:text-gray-300">Portfolio Companies</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">500+</div>
                    <div className="text-gray-600 dark:text-gray-300">Institutional Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Process */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-12 border border-emerald-100 dark:border-slate-600">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6 font-display">
                Ready to Invest?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our investor relations team to learn more about our investment products and how to participate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleContactClick} className="px-8 py-4 text-lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Download Prospectus
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
