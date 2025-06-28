"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Download, Eye, ArrowLeft, CheckCircle } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const insightCategories = [
  { id: "all", label: "All Insights" },
  { id: "market-analysis", label: "Market Analysis" },
  { id: "investment-trends", label: "Investment Trends" },
  { id: "sector-reports", label: "Sector Reports" },
  { id: "thought-leadership", label: "Thought Leadership" },
]

const insights = [
  {
    id: 1,
    category: "market-analysis",
    title: "Enterprise Software Market Outlook 2024: AI Integration Drives Growth",
    excerpt: "Comprehensive analysis of the enterprise software market, examining how AI integration is reshaping the industry landscape and creating new investment opportunities.",
    date: "2024-06-25",
    readTime: "12 min read",
    author: "Dr. Sarah Chen, Chief Investment Officer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    featured: true,
    type: "report",
    downloads: "2.4k",
    features: ["Market analysis", "AI integration trends", "Investment opportunities", "Growth projections"],
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    category: "investment-trends",
    title: "The Rise of Vertical SaaS: Niche Markets, Big Opportunities",
    excerpt: "Exploring the growing trend of vertical SaaS solutions and why specialized software platforms are attracting significant investor attention.",
    date: "2024-06-20",
    readTime: "8 min read",
    author: "Michael Rodriguez, Senior Analyst",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    featured: false,
    type: "analysis",
    downloads: "1.8k",
    features: ["Vertical SaaS trends", "Market opportunities", "Investment analysis", "Growth metrics"],
    iconColor: "text-green-600",
  },
  {
    id: 3,
    category: "sector-reports",
    title: "Fintech Innovation Report: Digital Banking Transformation",
    excerpt: "Deep dive into the fintech sector, analyzing digital banking trends, regulatory changes, and emerging technologies shaping the future of financial services.",
    date: "2024-06-18",
    readTime: "15 min read",
    author: "Jennifer Park, Sector Lead",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop&crop=center",
    featured: false,
    type: "report",
    downloads: "3.1k",
    features: ["Digital banking trends", "Regulatory analysis", "Technology insights", "Market forecasts"],
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    category: "thought-leadership",
    title: "Building Resilient Technology Platforms in Uncertain Times",
    excerpt: "Strategic insights on how technology companies can build resilience and maintain growth momentum during economic uncertainty.",
    date: "2024-06-15",
    readTime: "10 min read",
    author: "David Kim, Managing Partner",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    featured: false,
    type: "opinion",
    downloads: "1.5k",
    features: ["Resilience strategies", "Growth momentum", "Economic uncertainty", "Platform stability"],
    iconColor: "text-indigo-600",
  },
  {
    id: 5,
    category: "market-analysis",
    title: "Cybersecurity Investment Landscape: Threats Drive Innovation",
    excerpt: "Analysis of the cybersecurity market, examining how evolving threats are creating new investment opportunities in security technology.",
    date: "2024-06-12",
    readTime: "9 min read",
    author: "Lisa Thompson, Security Analyst",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&crop=center",
    featured: false,
    type: "analysis",
    downloads: "2.2k",
    features: ["Cybersecurity trends", "Threat analysis", "Investment opportunities", "Security innovation"],
    iconColor: "text-red-600",
  },
  {
    id: 6,
    category: "investment-trends",
    title: "ESG in Technology Investments: Beyond Compliance",
    excerpt: "Exploring how ESG considerations are becoming integral to technology investment decisions and portfolio company operations.",
    date: "2024-06-10",
    readTime: "7 min read",
    author: "Robert Chen, ESG Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&crop=center",
    featured: false,
    type: "opinion",
    downloads: "1.9k",
    features: ["ESG considerations", "Investment decisions", "Portfolio operations", "Compliance strategies"],
    iconColor: "text-cyan-600",
  },
]

export function InsightsGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [api, setApi] = useState<CarouselApi>()

  const filteredInsights = selectedCategory === "all"
    ? insights
    : insights.filter(item => item.category === selectedCategory)

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "report": return "bg-blue-100 text-blue-700 border-blue-200"
      case "analysis": return "bg-green-100 text-green-700 border-green-200"
      case "opinion": return "bg-purple-100 text-purple-700 border-purple-200"
      default: return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <section className="py-8 pb-32 sm:py-12 sm:pb-40 lg:py-16 lg:pb-40 bg-white dark:bg-gray-900 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <AnimatedSection>
          {/* Section Header with Navigation */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 font-display leading-tight">
                Research
                <span className="block text-blue-600 dark:text-blue-400">Insights</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                Explore our comprehensive research reports and market analysis across different categories.
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
            {insightCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Research Insights Carousel */}
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
                {filteredInsights.map((insight, index) => (
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

                          {/* Featured Badge */}
                          {insight.featured && (
                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-blue-600 text-white">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                          <Badge variant="outline" className="w-fit mb-2 capitalize text-xs">
                            {insight.category.replace("-", " ")}
                          </Badge>

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
                                <CheckCircle
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

                          {/* Date and Read Time */}
                          <div className="flex items-center justify-between mb-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {new Date(insight.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                              {insight.readTime}
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
            {filteredInsights.map((_, index) => (
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
