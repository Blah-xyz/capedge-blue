"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, Globe, Zap, Shield, Users, ArrowRight, CheckCircle } from "lucide-react"

const productCategories = [
  {
    icon: Building2,
    title: "Enterprise Software Fund",
    description: "Focused on B2B software companies serving enterprise markets",
    features: [
      "Growth-stage companies",
      "Proven market traction",
      "Scalable business models",
      "Strong management teams"
    ],
    aum: "$1.2B",
    companies: "8 Active",
    performance: "+28.5%",
    color: "blue",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Growth Capital Fund",
    description: "High-growth technology companies in expansion phase",
    features: [
      "Revenue growth >50% YoY",
      "Global market expansion",
      "Technology differentiation",
      "Experienced leadership"
    ],
    aum: "$800M",
    companies: "5 Active",
    performance: "+32.1%",
    color: "emerald",
    bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "Platform Business Fund",
    description: "Marketplace and platform technologies with network effects",
    features: [
      "Network effect dynamics",
      "Multi-sided platforms",
      "Data-driven insights",
      "Ecosystem partnerships"
    ],
    aum: "$400M",
    companies: "2 Active",
    performance: "+41.3%",
    color: "purple",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
]

export function ProductsCategoriesSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-blue-50 dark:bg-blue-900/30 border-blue-200 text-blue-700">
              Investment Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display">
              Diversified Investment
              <span className="block text-blue-600 dark:text-blue-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our investment products are designed to provide institutional investors with targeted exposure to high-growth technology sectors and business models.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gradient-to-br ${category.bgGradient}`}>
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    <Badge variant="outline" className={`border-${category.color}-200 text-${category.color}-700`}>
                      Active
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3 font-display">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${category.iconColor} flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black dark:text-white">{category.aum}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">AUM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black dark:text-white">{category.companies}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Companies</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${category.iconColor}`}>{category.performance}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Returns</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-blue-100 dark:border-slate-600">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                Interested in Our Investment Products?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our investor relations team to learn more about minimum investments, terms, and how to participate in our funds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Download Materials
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
