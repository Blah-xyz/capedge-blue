"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, ArrowRight, CheckCircle, Zap } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"

const softwarePlatforms = [
  {
    icon: Building2,
    title: "CapEdge Analytics Platform",
    description: "Advanced business intelligence and data analytics platform for enterprise decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    pricing: "Enterprise",
    features: [
      "Real-time data analytics",
      "Custom dashboard creation",
      "Advanced reporting tools",
      "API integrations"
    ],
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "CapEdge Automation Suite",
    description: "Comprehensive workflow automation platform to streamline business operations and processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    pricing: "Custom",
    features: [
      "Workflow automation",
      "Process optimization",
      "Integration capabilities",
      "Performance monitoring"
    ],
    bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "CapEdge Integration Hub",
    description: "Seamless integration platform connecting all your business tools and data sources.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center",
    pricing: "Pro",
    features: [
      "API management",
      "Data synchronization",
      "Real-time connections",
      "Security protocols"
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
              Software
              <span className="block text-blue-600 dark:text-blue-400">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade software solutions designed to accelerate business growth.
            </p>
          </div>

          {/* Software Platforms - Scrollable Layout */}
          <div className="relative">
            <div className="overflow-x-auto pb-6">
              <div className="flex gap-8 min-w-max lg:grid lg:grid-cols-2 lg:gap-12 lg:min-w-0">
                {softwarePlatforms.map((platform, index) => (
                  <Card key={index} className={`group border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-gradient-to-br ${platform.bgGradient} relative flex-shrink-0 w-96 lg:w-auto`}>
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={platform.image}
                          alt={platform.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                        {/* Floating Icon */}
                        <div className={`absolute top-4 right-4 w-12 h-12 ${platform.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20`}>
                          <platform.icon className={`w-6 h-6 ${platform.iconColor}`} />
                        </div>

                        {/* Pricing Badge */}
                        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                          <div className="text-xs text-gray-600 dark:text-gray-400">Pricing</div>
                          <div className="text-sm font-bold text-blue-600">{platform.pricing}</div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-3 font-display">
                          {platform.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                          {platform.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {platform.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className={`w-4 h-4 ${platform.iconColor} flex-shrink-0`} />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button className="w-full text-base py-3 bg-blue-600 hover:bg-blue-700" onClick={handleContactClick}>
                          Request Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scroll Indicator for Mobile */}
            <div className="lg:hidden flex justify-center mt-4">
              <div className="flex gap-2">
                {softwarePlatforms.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>


        </AnimatedSection>
      </div>
    </section>
  )
}
