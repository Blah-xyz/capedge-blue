"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"

const featuredNews = [
  {
    id: 1,
    title: "CapEdge Group Announces $50M Investment in Enterprise AI Platform",
    excerpt: "Strategic investment in next-generation artificial intelligence platform serving Fortune 500 enterprises with advanced automation solutions.",
    date: "2024-06-25",
    readTime: "3 min read",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Portfolio Company SecureFlow Achieves 200% Revenue Growth",
    excerpt: "Our cybersecurity portfolio company reports exceptional growth driven by enterprise demand for zero-trust security solutions.",
    date: "2024-06-20",
    readTime: "2 min read",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "The Future of Enterprise Software: 2024 Market Analysis",
    excerpt: "Comprehensive analysis of emerging trends in enterprise software, including AI integration and cloud-native architectures.",
    date: "2024-06-18",
    readTime: "5 min read",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Investment": return "bg-blue-100 text-blue-700 border-blue-200"
    case "Portfolio": return "bg-green-100 text-green-700 border-green-200"
    case "Insights": return "bg-purple-100 text-purple-700 border-purple-200"
    default: return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

export function NewsMainSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-blue-50 dark:bg-blue-900/30 border-blue-200 text-blue-700">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-display">
              Latest News &
              <span className="block text-blue-600 dark:text-blue-400">Updates</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay up to date with our latest investments, portfolio company achievements, and market insights.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredNews[0].image}
                    alt={featuredNews[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-12 flex flex-col justify-center">
                  <Badge variant="outline" className={`w-fit mb-6 ${getCategoryColor(featuredNews[0].category)}`}>
                    {featuredNews[0].category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display leading-tight">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {featuredNews[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {new Date(featuredNews[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        {featuredNews[0].readTime}
                      </div>
                    </div>
                    <Button size="lg" className="group">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Recent Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.slice(1).map((article) => (
              <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-slate-800">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="outline" className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-display group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="group/btn">
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg rounded-full">
              View All News
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
