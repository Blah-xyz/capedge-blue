"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Download, ArrowRight, Brain, BarChart3, FileText, ArrowLeft } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

const featuredInsights = [
  {
    id: 1,
    title: "Enterprise Software Market Outlook 2024: AI Integration Drives Growth",
    excerpt: "Comprehensive analysis of the enterprise software market, examining how AI integration is reshaping the industry landscape and creating new investment opportunities.",
    date: "2024-06-25",
    author: "Dr. Sarah Chen, Chief Investment Officer",
    type: "Market Report",
    downloads: "2.4k",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    features: ["Market analysis", "AI integration trends", "Investment opportunities", "Growth projections"],
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "The Rise of Vertical SaaS: Niche Markets, Big Opportunities",
    excerpt: "Exploring the growing trend of vertical SaaS solutions and why specialized software platforms are attracting significant investor attention.",
    date: "2024-06-20",
    author: "Michael Rodriguez, Senior Analyst",
    type: "Analysis",
    downloads: "1.8k",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    features: ["Vertical SaaS trends", "Market opportunities", "Investment analysis", "Growth metrics"],
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "Fintech Innovation Report: Digital Banking Transformation",
    excerpt: "Deep dive into the fintech sector, analyzing digital banking trends, regulatory changes, and emerging technologies shaping financial services.",
    date: "2024-06-18",
    author: "Jennifer Park, Sector Lead",
    type: "Sector Report",
    downloads: "3.1k",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop&crop=center",
    features: ["Digital banking trends", "Regulatory analysis", "Technology insights", "Market forecasts"],
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Investment Trends 2024",
    excerpt: "Analysis of cloud infrastructure market dynamics and emerging investment opportunities in enterprise cloud solutions.",
    date: "2024-06-15",
    author: "David Kim, Technology Analyst",
    type: "Technology Report",
    downloads: "1.9k",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    features: ["Cloud market analysis", "Infrastructure trends", "Investment insights", "Technology roadmap"],
    iconColor: "text-indigo-600",
  },
  {
    id: 5,
    title: "Cybersecurity Market Analysis: Zero Trust Architecture",
    excerpt: "Comprehensive study of the cybersecurity landscape focusing on zero trust security models and their market impact.",
    date: "2024-06-12",
    author: "Lisa Chen, Security Analyst",
    type: "Security Report",
    downloads: "2.7k",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&crop=center",
    features: ["Zero trust models", "Security trends", "Market analysis", "Implementation strategies"],
    iconColor: "text-red-600",
  },
  {
    id: 6,
    title: "AI Platform Investment Guide 2024",
    excerpt: "Strategic guide to artificial intelligence platform investments, covering market opportunities and risk assessment.",
    date: "2024-06-10",
    author: "Robert Zhang, AI Specialist",
    type: "Investment Guide",
    downloads: "3.2k",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=center",
    features: ["AI market insights", "Investment strategies", "Risk assessment", "Platform evaluation"],
    iconColor: "text-cyan-600",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Market Report": return Brain
    case "Analysis": return BarChart3
    case "Sector Report": return FileText
    case "Technology Report": return BarChart3
    case "Security Report": return Brain
    case "Investment Guide": return FileText
    default: return FileText
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Market Report": return "bg-blue-100 text-blue-700 border-blue-200"
    case "Analysis": return "bg-green-100 text-green-700 border-green-200"
    case "Sector Report": return "bg-purple-100 text-purple-700 border-purple-200"
    case "Technology Report": return "bg-indigo-100 text-indigo-700 border-indigo-200"
    case "Security Report": return "bg-red-100 text-red-700 border-red-200"
    case "Investment Guide": return "bg-cyan-100 text-cyan-700 border-cyan-200"
    default: return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

export function InsightsMainSection() {
  const [api, setApi] = useState<CarouselApi>()

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  return (
    <section className="py-8 pb-32 sm:py-12 sm:pb-40 lg:py-16 lg:pb-40 lg:min-h-[calc(50vh-4rem)] xl:min-h-[calc(50vh-4rem)] bg-white dark:bg-gray-900 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 font-display leading-tight">
                Investment
                <span className="block text-blue-600 dark:text-blue-400">Intelligence</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                Access our latest research reports, market analysis, and investment insights from our expert team.
              </p>
            </div>

            {/* Navigation Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:flex gap-2 justify-center md:justify-end">
              <button
                onClick={scrollPrev}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={scrollNext}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Research Reports Carousel */}
          <div className="relative w-full overflow-hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
                {featuredInsights.map((insight, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 sm:pl-2 md:pl-4 basis-[85%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3 min-w-0"
                  >
                    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Image Section */}
                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                          <img
                            src={insight.image || "/placeholder.svg"}
                            alt={insight.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                          {/* Type Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge variant="outline" className={`bg-white/90 backdrop-blur-sm ${getTypeColor(insight.type)}`}>
                              {insight.type}
                            </Badge>
                          </div>

                          {/* Downloads Badge */}
                          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                            {insight.downloads}
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                          <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 font-display leading-tight">
                            {insight.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1 line-clamp-3">
                            {insight.excerpt}
                          </p>

                          {/* Author */}
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
                            By {insight.author}
                          </div>

                          {/* Features */}
                          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                            {insight.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-2">
                                <Download
                                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${insight.iconColor} flex-shrink-0 mt-0.5`}
                                />
                                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-tight">
                                  {feature}
                                </span>
                              </div>
                            ))}
                            {insight.features.length > 3 && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 ml-5 sm:ml-6">
                                + more insights
                              </div>
                            )}
                          </div>

                          {/* Date and CTA */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {new Date(insight.date).toLocaleDateString()}
                            </div>
                          </div>

                          {/* CTA */}
                          <Button
                            className="w-full text-sm sm:text-base py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 mt-auto"
                            asChild
                          >
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              Download Report
                              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex sm:hidden justify-center mt-6 gap-2">
            {featuredInsights.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors"
              />
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  )
}
