"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, ArrowRight, Share2 } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"
import { NewsArticle, getRelatedNews } from "@/lib/data"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

interface NewsDetailSectionProps {
  article: NewsArticle
}

export function NewsDetailSection({ article }: NewsDetailSectionProps) {
  const { setIsOpen } = useContactDialog()
  const relatedNews = getRelatedNews(article.id, 3)
  const [api, setApi] = useState<CarouselApi>()

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
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

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "investment": return "bg-blue-100 text-blue-700 border-blue-200"
      case "portfolio": return "bg-green-100 text-green-700 border-green-200"
      case "insights": return "bg-purple-100 text-purple-700 border-purple-200"
      case "company": return "bg-indigo-100 text-indigo-700 border-indigo-200"
      default: return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <AnimatedSection className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className={`mb-4 ${getCategoryColor(article.category)}`}>
                {article.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 font-display leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{article.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="px-8 py-3"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
                <Button
                  variant="outline"
                  onClick={handleContactClick}
                  className="px-8 py-3"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className={`py-16 ${relatedNews.length === 0 ? 'pb-32 sm:pb-40 lg:pb-40' : ''} bg-white dark:bg-gray-800`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Key Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Key Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {article.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <CheckCircle className={`w-5 h-5 ${article.iconColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Full Story</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {article.fullContent || "This breaking news story represents a significant development in our ongoing commitment to innovation and growth. Our team continues to work diligently to deliver exceptional results for our clients and stakeholders."}
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Impact and Implications</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              This development has far-reaching implications for our industry and reinforces our position as a leader in enterprise software investment. We remain committed to identifying and supporting innovative companies that are transforming their respective markets.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Looking Forward</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              As we continue to execute our strategic vision, we remain focused on delivering value to our portfolio companies and investors. This announcement is part of our broader commitment to supporting the next generation of enterprise software leaders.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-3">About CapEdge Group</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                CapEdge Group is a leading enterprise software investment firm focused on identifying and supporting innovative companies that are transforming their industries through technology. With a proven track record of successful investments and a deep understanding of the enterprise software market, we partner with exceptional entrepreneurs to build market-leading companies.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <AnimatedSection className="py-16 pb-32 sm:pb-40 lg:pb-40 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 lg:mb-16">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 font-display leading-tight">
                  Related
                  <span className="block text-blue-600 dark:text-blue-400">News</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                  Stay updated with the latest news and announcements from CapEdge Group
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

            {/* Related News Carousel */}
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
                  {relatedNews.map((relatedArticle) => (
                    <CarouselItem
                      key={relatedArticle.id}
                      className="pl-1 sm:pl-2 md:pl-4 basis-[85%] sm:basis-[80%] md:basis-1/2 lg:basis-1/2 min-w-0"
                    >
                      <Link href={`/news/${relatedArticle.id}`}>
                        <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                          <CardContent className="p-0 flex flex-col h-full">
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                              <img
                                src={relatedArticle.image}
                                alt={relatedArticle.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                              <Badge variant="outline" className={`w-fit mb-3 text-xs ${getCategoryColor(relatedArticle.category)}`}>
                                {relatedArticle.category}
                              </Badge>

                              <h3 className="text-lg font-bold text-black dark:text-white mb-3 font-display leading-tight line-clamp-2">
                                {relatedArticle.title}
                              </h3>

                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
                                {relatedArticle.excerpt}
                              </p>

                              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
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
