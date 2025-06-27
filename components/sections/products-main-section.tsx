"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, ArrowRight, CheckCircle, Zap, ArrowLeft } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

const softwarePlatforms = [
  {
    icon: Building2,
    title: "CapEdge Analytics Platform",
    description: "Advanced business intelligence and data analytics platform for enterprise decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    pricing: "Enterprise",
    features: [
      "Real-time data analytics",
      "Custom dashboard creation",
      "Advanced reporting tools",
      "API integrations"
    ],
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "CapEdge Automation Suite",
    description: "Comprehensive workflow automation platform to streamline business operations and processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    pricing: "Custom",
    features: [
      "Workflow automation",
      "Process optimization",
      "Integration capabilities",
      "Performance monitoring"
    ],
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "CapEdge Integration Hub",
    description: "Seamless integration platform connecting all your business tools and data sources.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&crop=center",
    pricing: "Pro",
    features: [
      "API management",
      "Data synchronization",
      "Real-time connections",
      "Security protocols"
    ],
    iconColor: "text-blue-600",
  },
  {
    icon: Building2,
    title: "CapEdge Cloud Solutions",
    description: "Scalable cloud infrastructure platform for modern enterprise applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    pricing: "Scalable",
    features: [
      "Cloud infrastructure",
      "Auto-scaling capabilities",
      "Global deployment",
      "24/7 monitoring"
    ],
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "CapEdge AI Platform",
    description: "Artificial intelligence and machine learning platform for intelligent business automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=center",
    pricing: "AI-Powered",
    features: [
      "Machine learning models",
      "Predictive analytics",
      "Natural language processing",
      "Computer vision"
    ],
    iconColor: "text-blue-600",
  },
]

export function ProductsMainSection() {
  const { setIsOpen } = useContactDialog()
  const [api, setApi] = useState<CarouselApi>()

  const handleContactClick = () => {
    setIsOpen(true)
  }

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-display">
                Software
                <span className="block text-blue-600 dark:text-blue-400">Platforms</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Enterprise-grade software solutions designed to accelerate business growth.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 justify-center md:justify-end">
              <button
                onClick={scrollPrev}
                className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={scrollNext}
                className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Software Platforms Carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {softwarePlatforms.map((platform, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Image Section - Dominant */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={platform.image}
                            alt={platform.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                          {/* Floating Icon */}
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <platform.icon className={`w-6 h-6 ${platform.iconColor}`} />
                          </div>

                          {/* Pricing Badge */}
                          <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                            <div className="text-xs text-gray-600 dark:text-gray-400">Pricing</div>
                            <div className="text-sm font-bold text-blue-600">{platform.pricing}</div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-black dark:text-white mb-3 font-display">
                            {platform.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-1">
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
                          <Button className="w-full text-base py-3 bg-blue-600 hover:bg-blue-700 mt-auto" onClick={handleContactClick}>
                            Request Demo
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
