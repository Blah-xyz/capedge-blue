"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Download, Eye } from "lucide-react"

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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: true,
    type: "report",
    downloads: "2.4k",
  },
  {
    id: 2,
    category: "investment-trends",
    title: "The Rise of Vertical SaaS: Niche Markets, Big Opportunities",
    excerpt: "Exploring the growing trend of vertical SaaS solutions and why specialized software platforms are attracting significant investor attention.",
    date: "2024-06-20",
    readTime: "8 min read",
    author: "Michael Rodriguez, Senior Analyst",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false,
    type: "analysis",
    downloads: "1.8k",
  },
  {
    id: 3,
    category: "sector-reports",
    title: "Fintech Innovation Report: Digital Banking Transformation",
    excerpt: "Deep dive into the fintech sector, analyzing digital banking trends, regulatory changes, and emerging technologies shaping the future of financial services.",
    date: "2024-06-18",
    readTime: "15 min read",
    author: "Jennifer Park, Sector Lead",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
    featured: false,
    type: "report",
    downloads: "3.1k",
  },
  {
    id: 4,
    category: "thought-leadership",
    title: "Building Resilient Technology Platforms in Uncertain Times",
    excerpt: "Strategic insights on how technology companies can build resilience and maintain growth momentum during economic uncertainty.",
    date: "2024-06-15",
    readTime: "10 min read",
    author: "David Kim, Managing Partner",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    featured: false,
    type: "opinion",
    downloads: "1.5k",
  },
  {
    id: 5,
    category: "market-analysis",
    title: "Cybersecurity Investment Landscape: Threats Drive Innovation",
    excerpt: "Analysis of the cybersecurity market, examining how evolving threats are creating new investment opportunities in security technology.",
    date: "2024-06-12",
    readTime: "9 min read",
    author: "Lisa Thompson, Security Analyst",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    featured: false,
    type: "analysis",
    downloads: "2.2k",
  },
  {
    id: 6,
    category: "investment-trends",
    title: "ESG in Technology Investments: Beyond Compliance",
    excerpt: "Exploring how ESG considerations are becoming integral to technology investment decisions and portfolio company operations.",
    date: "2024-06-10",
    readTime: "7 min read",
    author: "Robert Chen, ESG Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    featured: false,
    type: "opinion",
    downloads: "1.9k",
  },
]

export function InsightsGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const filteredInsights = selectedCategory === "all" 
    ? insights 
    : insights.filter(item => item.category === selectedCategory)

  const featuredInsight = filteredInsights.find(item => item.featured)
  const regularInsights = filteredInsights.filter(item => !item.featured)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "report": return "bg-blue-100 text-blue-700 border-blue-200"
      case "analysis": return "bg-green-100 text-green-700 border-green-200"
      case "opinion": return "bg-purple-100 text-purple-700 border-purple-200"
      default: return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {insightCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Featured Insight */}
          {featuredInsight && (
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredInsight.image}
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-indigo-600 text-white">
                      Featured
                    </Badge>
                    <Badge className={`absolute top-4 right-4 ${getTypeColor(featuredInsight.type)}`}>
                      {featuredInsight.type}
                    </Badge>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 capitalize">
                      {featuredInsight.category.replace("-", " ")}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4 font-display">
                      {featuredInsight.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                      {featuredInsight.excerpt}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      By {featuredInsight.author}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredInsight.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredInsight.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {featuredInsight.downloads}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button className="group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularInsights.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-slate-800">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${getTypeColor(item.type)}`}>
                    {item.type}
                  </Badge>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    <Eye className="w-3 h-3" />
                    {item.downloads}
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 capitalize text-xs">
                    {item.category.replace("-", " ")}
                  </Badge>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 font-display group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 text-sm">
                    {item.excerpt}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    By {item.author}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.readTime}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="group/btn h-8 w-8 p-0">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full">
              Load More Insights
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
