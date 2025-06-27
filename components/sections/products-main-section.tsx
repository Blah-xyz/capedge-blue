"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
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

          {/* Software Platforms Grid - Creative Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {softwarePlatforms.map((platform, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br ${platform.bgGradient} relative`}>
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={platform.image}
                      alt={platform.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Floating Icon */}
                    <div className={`absolute top-6 right-6 w-16 h-16 ${platform.iconBg} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <platform.icon className={`w-8 h-8 ${platform.iconColor}`} />
                    </div>

                    {/* Pricing Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                      <div className="text-xs text-gray-600 dark:text-gray-400">Pricing</div>
                      <div className="text-lg font-bold text-blue-600">{platform.pricing}</div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {platform.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 ${platform.iconColor} flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button className="w-full group/btn text-lg py-4 bg-blue-600 hover:bg-blue-700" onClick={handleContactClick}>
                      Request Demo
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
