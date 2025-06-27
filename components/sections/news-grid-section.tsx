"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react"

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
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    category: "portfolio",
    title: "Portfolio Company SecureFlow Achieves 200% Revenue Growth",
    excerpt: "Our cybersecurity portfolio company reports exceptional growth driven by enterprise demand for zero-trust security solutions.",
    date: "2024-06-20",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    category: "press",
    title: "CapEdge Group Named Top Private Equity Firm by Industry Weekly",
    excerpt: "Recognition for outstanding performance in enterprise software investments and portfolio company value creation.",
    date: "2024-06-18",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    category: "insights",
    title: "The Future of Enterprise Software: 2024 Market Analysis",
    excerpt: "Comprehensive analysis of emerging trends in enterprise software, including AI integration, cloud-native architectures, and market opportunities.",
    date: "2024-06-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    category: "investments",
    title: "New Partnership with Global Fintech Leader DataVault",
    excerpt: "Strategic partnership announcement to accelerate growth in financial services technology sector.",
    date: "2024-06-12",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    category: "portfolio",
    title: "CloudOps Platform Expands to European Markets",
    excerpt: "Portfolio company announces successful expansion into European markets with new data centers and partnerships.",
    date: "2024-06-10",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    featured: false,
  },
]

export function NewsGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const filteredNews = selectedCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  const featuredNews = filteredNews.find(item => item.featured)
  const regularNews = filteredNews.filter(item => !item.featured)

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {newsCategories.map((category) => (
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

          {/* Featured News */}
          {featuredNews && (
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 capitalize">
                      {featuredNews.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 font-display">
                      {featuredNews.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredNews.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredNews.readTime}
                        </div>
                      </div>
                      <Button className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="outline" className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm capitalize">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 font-display group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full">
              Load More Articles
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
