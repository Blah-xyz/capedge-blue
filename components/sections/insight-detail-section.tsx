"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Calendar, Clock, Download, User, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"
import { Insight, getRelatedInsights } from "@/lib/data"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

interface InsightDetailSectionProps {
  insight: Insight
}

export function InsightDetailSection({ insight }: InsightDetailSectionProps) {
  const { setIsOpen } = useContactDialog()
  const relatedInsights = getRelatedInsights(insight.id, 3)
  const [api, setApi] = useState<CarouselApi>()

  const handleDownload = () => {
    // In a real app, this would trigger a download
    console.log(`Downloading insight: ${insight.title}`)
  }

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
    <div className="relative">
      {/* Hero Section */}
      <AnimatedSection className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 capitalize">
                {insight.type}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 font-display leading-tight">
                {insight.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {insight.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{insight.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{new Date(insight.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{insight.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">{insight.downloads} downloads</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button
                  variant="outline"
                  onClick={handleContactClick}
                  className="px-8 py-3"
                >
                  Contact Analyst
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className={`py-16 ${relatedInsights.length === 0 ? 'pb-32 sm:pb-40 lg:pb-40' : ''} bg-white dark:bg-gray-800`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Key Insights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {insight.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 ${insight.iconColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Executive Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {insight.fullContent || "This comprehensive report provides detailed analysis and insights into the current market trends and future opportunities. Our research team has conducted extensive analysis to provide actionable intelligence for investment decisions."}
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Market Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The market landscape continues to evolve rapidly, driven by technological innovation and changing consumer demands. Our analysis reveals key trends that will shape the industry over the next 12-24 months.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Investment Implications</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Based on our research findings, we identify several strategic investment opportunities that align with current market dynamics and future growth projections.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <AnimatedSection className="py-16 pb-32 sm:pb-40 lg:pb-40 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 lg:mb-16">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 font-display leading-tight">
                  Related
                  <span className="block text-blue-600 dark:text-blue-400">Insights</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                  Explore more insights and analysis from our research team
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

            {/* Related Insights Carousel */}
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
                  {relatedInsights.map((relatedInsight) => (
                    <CarouselItem
                      key={relatedInsight.id}
                      className="pl-1 sm:pl-2 md:pl-4 basis-[85%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3 min-w-0"
                    >
                      <Link href={`/insights/${relatedInsight.id}`}>
                        <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                          <CardContent className="p-0 flex flex-col h-full">
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                              <img
                                src={relatedInsight.image}
                                alt={relatedInsight.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                              <Badge variant="outline" className="w-fit mb-3 capitalize text-xs">
                                {relatedInsight.type}
                              </Badge>

                              <h3 className="text-lg font-bold text-black dark:text-white mb-3 font-display leading-tight line-clamp-2">
                                {relatedInsight.title}
                              </h3>

                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
                                {relatedInsight.excerpt}
                              </p>

                              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>{new Date(relatedInsight.date).toLocaleDateString()}</span>
                                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                                  <span>Read more</span>
                                  <ArrowRight className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}
