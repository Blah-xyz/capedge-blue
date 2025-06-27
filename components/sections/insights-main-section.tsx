"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Download, ArrowRight, Brain, BarChart3, FileText } from "lucide-react"

const featuredInsights = [
  {
    id: 1,
    title: "Enterprise Software Market Outlook 2024: AI Integration Drives Growth",
    excerpt: "Comprehensive analysis of the enterprise software market, examining how AI integration is reshaping the industry landscape and creating new investment opportunities.",
    date: "2024-06-25",
    author: "Dr. Sarah Chen, Chief Investment Officer",
    type: "Market Report",
    downloads: "2.4k",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "The Rise of Vertical SaaS: Niche Markets, Big Opportunities",
    excerpt: "Exploring the growing trend of vertical SaaS solutions and why specialized software platforms are attracting significant investor attention.",
    date: "2024-06-20",
    author: "Michael Rodriguez, Senior Analyst",
    type: "Analysis",
    downloads: "1.8k",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Fintech Innovation Report: Digital Banking Transformation",
    excerpt: "Deep dive into the fintech sector, analyzing digital banking trends, regulatory changes, and emerging technologies shaping financial services.",
    date: "2024-06-18",
    author: "Jennifer Park, Sector Lead",
    type: "Sector Report",
    downloads: "3.1k",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
    featured: false,
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Market Report": return Brain
    case "Analysis": return BarChart3
    case "Sector Report": return FileText
    default: return FileText
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Market Report": return "bg-blue-100 text-blue-700 border-blue-200"
    case "Analysis": return "bg-green-100 text-green-700 border-green-200"
    case "Sector Report": return "bg-purple-100 text-purple-700 border-purple-200"
    default: return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

export function InsightsMainSection() {
  return (
    <section className="py-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 text-indigo-700">
              <Brain className="w-4 h-4 mr-2" />
              Research & Analysis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Investment
              <span className="block text-indigo-600 dark:text-indigo-400">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access our latest research reports, market analysis, and investment insights from our expert team.
            </p>
          </div>

          {/* Featured Insight */}
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredInsights[0].image}
                    alt={featuredInsights[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-6 left-6 bg-indigo-600 text-white px-4 py-2">
                    Featured Research
                  </Badge>
                </div>
                <CardContent className="p-12 flex flex-col justify-center">
                  <Badge variant="outline" className={`w-fit mb-6 ${getTypeColor(featuredInsights[0].type)}`}>
                    {featuredInsights[0].type}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display leading-tight">
                    {featuredInsights[0].title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredInsights[0].excerpt}
                  </p>
                  <div className="text-gray-500 dark:text-gray-400 mb-8">
                    By {featuredInsights[0].author}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {new Date(featuredInsights[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        {featuredInsights[0].downloads} downloads
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        Download
                      </Button>
                      <Button size="lg" className="group">
                        Read More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Recent Insights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredInsights.slice(1).map((insight) => {
              const TypeIcon = getTypeIcon(insight.type)
              return (
                <Card key={insight.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-slate-800">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <Badge variant="outline" className={`bg-white/90 backdrop-blur-sm ${getTypeColor(insight.type)}`}>
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {insight.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {insight.downloads}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display group-hover:text-indigo-600 transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      By {insight.author}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(insight.date).toLocaleDateString()}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="group/btn">
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Research Stats */}
          <div className="mt-16">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                    Research Excellence
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Trusted insights backed by rigorous analysis
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">200+</div>
                    <div className="text-gray-600 dark:text-gray-300">Research Reports</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                    <div className="text-gray-600 dark:text-gray-300">Expert Analysts</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                    <div className="text-gray-600 dark:text-gray-300">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
                    <div className="text-gray-600 dark:text-gray-300">Industry Awards</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg rounded-full">
              View All Research
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
