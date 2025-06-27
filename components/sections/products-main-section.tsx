"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"

const investmentFunds = [
  {
    icon: Building2,
    title: "CapEdge Enterprise Fund",
    description: "Growth-stage enterprise software companies with proven market traction.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    minInvestment: "$1M",
    features: [
      "Enterprise software focus",
      "Proven market traction",
      "Scalable business models"
    ],
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "CapEdge Growth Fund",
    description: "High-growth technology companies with global market opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    minInvestment: "$500K",
    features: [
      "High-growth technology",
      "Global market expansion",
      "Competitive advantages"
    ],
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
]

export function ProductsMainSection() {
  const { setIsOpen } = useContactDialog()

  const handleContactClick = () => {
    setIsOpen(true)
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-display">
              Investment
              <span className="block text-blue-600 dark:text-blue-400">Funds</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Institutional-grade solutions targeting high-growth technology companies.
            </p>
          </div>

          {/* Investment Funds Grid - Creative Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {investmentFunds.map((fund, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br ${fund.bgGradient} relative`}>
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={fund.image}
                      alt={fund.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Floating Icon */}
                    <div className={`absolute top-6 right-6 w-16 h-16 ${fund.iconBg} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <fund.icon className={`w-8 h-8 ${fund.iconColor}`} />
                    </div>

                    {/* Minimum Investment Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                      <div className="text-xs text-gray-600 dark:text-gray-400">Min. Investment</div>
                      <div className="text-lg font-bold text-blue-600">{fund.minInvestment}</div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
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
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button className="w-full group/btn text-lg py-4 bg-blue-600 hover:bg-blue-700" onClick={handleContactClick}>
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </AnimatedSection>
      </div>
    </section>
  )
}
