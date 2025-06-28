"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Filter, ArrowLeft, CheckCircle } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const newsCategories = [
  { id: "all", label: "All News" },
  { id: "investments", label: "Investments" },
  { id: "portfolio", label: "Portfolio Updates" },
  { id: "press", label: "Press Releases" },
  { id: "insights", label: "Market Insights" },
]

const newsItems = [
  {
    id: 1,
    category: "investments",
    title: "CapEdge Group Announces $50M Investment in Enterprise AI Platform",
    excerpt: "Strategic investment in next-generation artificial intelligence platform serving Fortune 500 enterprises with advanced automation solutions.",
    date: "2024-06-25",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center",
    featured: true,
    highlights: ["$50M investment", "Enterprise AI platform", "Fortune 500 clients", "Advanced automation"],
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    category: "portfolio",
    title: "Portfolio Company SecureFlow Achieves 200% Revenue Growth",
    excerpt: "Our cybersecurity portfolio company reports exceptional growth driven by enterprise demand for zero-trust security solutions.",
    date: "2024-06-20",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&crop=center",
    featured: false,
    highlights: ["200% revenue growth", "Zero-trust security", "Enterprise demand", "Portfolio success"],
    iconColor: "text-green-600",
  },
  {
    id: 3,
    category: "press",
    title: "CapEdge Group Named Top Private Equity Firm by Industry Weekly",
    excerpt: "Recognition for outstanding performance in enterprise software investments and portfolio company value creation.",
    date: "2024-06-18",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&crop=center",
    featured: false,
    highlights: ["Industry recognition", "Outstanding performance", "Software investments", "Value creation"],
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    category: "insights",
    title: "The Future of Enterprise Software: 2024 Market Analysis",
    excerpt: "Comprehensive analysis of emerging trends in enterprise software, including AI integration, cloud-native architectures, and market opportunities.",
    date: "2024-06-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center",
    featured: false,
    highlights: ["Market analysis", "AI integration", "Cloud-native", "Enterprise trends"],
    iconColor: "text-indigo-600",
  },
  {
    id: 5,
    category: "investments",
    title: "New Partnership with Global Fintech Leader DataVault",
    excerpt: "Strategic partnership announcement to accelerate growth in financial services technology sector.",
    date: "2024-06-12",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop&crop=center",
    featured: false,
    highlights: ["Strategic partnership", "Fintech leader", "Growth acceleration", "Financial services"],
    iconColor: "text-emerald-600",
  },
  {
    id: 6,
    category: "portfolio",
    title: "CloudOps Platform Expands to European Markets",
    excerpt: "Portfolio company announces successful expansion into European markets with new data centers and partnerships.",
    date: "2024-06-10",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    featured: false,
    highlights: ["European expansion", "New data centers", "Strategic partnerships", "Market growth"],
    iconColor: "text-cyan-600",
  },
]

export function NewsGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [api, setApi] = useState<CarouselApi>()

  const filteredNews = selectedCategory === "all"
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory)

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  return (
    <section className="py-8 pb-32 sm:py-12 sm:pb-40 lg:py-16 lg:pb-40 bg-white dark:bg-gray-900 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <AnimatedSection>
          {/* Section Header with Navigation */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 font-display leading-tight">
                Latest News &
                <span className="block text-blue-600 dark:text-blue-400">Updates</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                Stay up to date with our latest investments, portfolio company achievements, and market insights.
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
            {newsCategories.map((category) => (
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

          {/* News Articles Carousel */}
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
                {filteredNews.map((article, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 sm:pl-2 md:pl-4 basis-[85%] sm:basis-[80%] md:basis-1/2 lg:basis-1/2 min-w-0"
                  >
                    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Image Section */}
                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm capitalize">
                              {article.category}
                            </Badge>
                          </div>

                          {/* Read Time Badge */}
                          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                            {article.readTime}
                          </div>

                          {/* Featured Badge */}
                          {article.featured && (
                            <div className="absolute bottom-3 left-3">
                              <Badge className="bg-blue-600 text-white">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                          <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 font-display leading-tight">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1 line-clamp-3">
                            {article.excerpt}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                            {article.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-start gap-2">
                                <CheckCircle
                                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${article.iconColor} flex-shrink-0 mt-0.5`}
                                />
                                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-tight">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                            {article.highlights.length > 3 && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 ml-5 sm:ml-6">
                                + more highlights
                              </div>
                            )}
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-auto">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
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
            {filteredNews.map((_, index) => (
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
