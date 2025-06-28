"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Download, User, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"
import { Insight, getRelatedInsights } from "@/lib/data"

interface InsightDetailSectionProps {
  insight: Insight
}

export function InsightDetailSection({ insight }: InsightDetailSectionProps) {
  const { setIsOpen } = useContactDialog()
  const relatedInsights = getRelatedInsights(insight.id, 3)

  const handleDownload = () => {
    // In a real app, this would trigger a download
    console.log(`Downloading insight: ${insight.title}`)
  }

  const handleContactClick = () => {
    setIsOpen(true)
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
      <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
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
        <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Related Insights</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore more insights and analysis from our research team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedInsights.map((relatedInsight) => (
                <Link key={relatedInsight.id} href={`/insights/${relatedInsight.id}`}>
                  <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden">
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
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}
