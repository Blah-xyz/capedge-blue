"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Calculator,
  BookOpen,
  ArrowRight,
  Calendar,
  User,
  Tag,
  ExternalLink,
  Star,
  TrendingUp,
  Building2,
  Zap
} from "lucide-react"
import {
  resourceGuides,
  whitepapers,
  tools,
  caseStudies,
  newsArticles,
  insights,
  products
} from "@/lib/data"

export function ResourcesMainSection() {
  const featuredGuides = resourceGuides.filter(guide => guide.featured)
  const featuredWhitepapers = whitepapers.filter(whitepaper => whitepaper.featured)
  const featuredTools = tools.filter(tool => tool.featured)
  const featuredCaseStudies = caseStudies.filter(caseStudy => caseStudy.featured)

  return (
    <section className="py-8 pb-32 sm:py-12 sm:pb-40 lg:py-16 lg:pb-40 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-emerald-50 border-emerald-200 text-emerald-700 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Comprehensive Resources
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access our complete library of investment guides, market research, analytical tools, and success stories.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-12">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="whitepapers">Research</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="cases">Case Studies</TabsTrigger>
              <TabsTrigger value="existing">Latest</TabsTrigger>
            </TabsList>

            {/* All Resources Tab */}
            <TabsContent value="all" className="space-y-12">
              {/* Featured Resources Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Resources</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Featured Guide */}
                  {featuredGuides.slice(0, 1).map((guide) => (
                    <Card key={guide.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={guide.image}
                            alt={guide.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white">
                              <FileText className="w-3 h-3 mr-1" />
                              Guide
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            {guide.date}
                            <span>•</span>
                            <span>{guide.pages} pages</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                            {guide.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                            {guide.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Button size="sm" className="group/btn">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                            <span className="text-xs text-gray-500">{guide.fileSize}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Featured Whitepaper */}
                  {featuredWhitepapers.slice(0, 1).map((whitepaper) => (
                    <Card key={whitepaper.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={whitepaper.image}
                            alt={whitepaper.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-indigo-600 text-white">
                              <BookOpen className="w-3 h-3 mr-1" />
                              Research
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            {whitepaper.date}
                            <span>•</span>
                            <span>{whitepaper.pages} pages</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                            {whitepaper.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                            {whitepaper.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Button size="sm" variant="outline" className="group/btn">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                            <span className="text-xs text-gray-500">{whitepaper.fileSize}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Featured Tool */}
                  {featuredTools.slice(0, 1).map((tool) => (
                    <Card key={tool.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={tool.image}
                            alt={tool.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-green-600 text-white">
                              <Calculator className="w-3 h-3 mr-1" />
                              Tool
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            {tool.date}
                            <span>•</span>
                            <span>{tool.pricing}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                            {tool.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                            {tool.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Button size="sm" variant="outline" className="group/btn">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Access Tool
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                            <span className="text-xs text-green-600 font-medium">{tool.pricing}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Guides Tab */}
            <TabsContent value="guides" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourceGuides.map((guide) => (
                  <Card key={guide.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white">
                            <FileText className="w-3 h-3 mr-1" />
                            {guide.type}
                          </Badge>
                        </div>
                        {guide.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          {guide.date}
                          <span>•</span>
                          <span>{guide.pages} pages</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                          {guide.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {guide.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <Button size="sm" className="group/btn">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <span className="text-xs text-gray-500">{guide.fileSize}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Whitepapers Tab */}
            <TabsContent value="whitepapers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {whitepapers.map((whitepaper) => (
                  <Card key={whitepaper.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={whitepaper.image}
                          alt={whitepaper.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-indigo-600 text-white">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Whitepaper
                          </Badge>
                        </div>
                        {whitepaper.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          {whitepaper.date}
                          <span>•</span>
                          <User className="w-4 h-4" />
                          {whitepaper.author}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                          {whitepaper.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {whitepaper.description}
                        </p>
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 mb-4">
                          <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Abstract</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">
                            {whitepaper.abstract}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {whitepaper.tags.slice(0, 4).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <Button size="sm" variant="outline" className="group/btn">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">{whitepaper.fileSize}</div>
                            <div className="text-xs text-gray-500">{whitepaper.pages} pages</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool) => (
                  <Card key={tool.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={tool.image}
                          alt={tool.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-600 text-white">
                            <Calculator className="w-3 h-3 mr-1" />
                            {tool.type}
                          </Badge>
                        </div>
                        {tool.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          {tool.date}
                          <span>•</span>
                          <span className="text-green-600 font-medium">{tool.pricing}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                          {tool.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                          {tool.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <h5 className="text-xs font-medium text-gray-900 dark:text-white">Key Features:</h5>
                          <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                            {tool.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tool.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button size="sm" variant="outline" className="w-full group/btn">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Access Tool
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="cases" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((caseStudy) => (
                  <Card key={caseStudy.id} className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-600 text-white">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Case Study
                          </Badge>
                        </div>
                        {caseStudy.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-700">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Building2 className="w-4 h-4" />
                          {caseStudy.company}
                          <span>•</span>
                          <span>{caseStudy.industry}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                          {caseStudy.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {caseStudy.description}
                        </p>
                        <div className="space-y-3 mb-4">
                          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                            <h5 className="text-xs font-medium text-red-800 dark:text-red-300 mb-1">Challenge</h5>
                            <p className="text-xs text-red-700 dark:text-red-400">{caseStudy.challenge}</p>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                            <h5 className="text-xs font-medium text-blue-800 dark:text-blue-300 mb-1">Solution</h5>
                            <p className="text-xs text-blue-700 dark:text-blue-400">{caseStudy.solution}</p>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                            <h5 className="text-xs font-medium text-green-800 dark:text-green-300 mb-1">Key Results</h5>
                            <ul className="text-xs text-green-700 dark:text-green-400 space-y-1">
                              {caseStudy.results.slice(0, 2).map((result, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button size="sm" variant="outline" className="group/btn">
                            Read Full Case
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <span className="text-xs text-gray-500">{caseStudy.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Latest Resources Tab */}
            <TabsContent value="existing" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Latest News */}
                {newsArticles.slice(0, 2).map((article) => (
                  <Link key={article.id} href={`/news/${article.id}`}>
                    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white">
                              News
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                            {article.excerpt}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}

                {/* Latest Insight */}
                {insights.slice(0, 1).map((insight) => (
                  <Link key={insight.id} href={`/insights/${insight.id}`}>
                    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={insight.image}
                            alt={insight.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-indigo-600 text-white">
                              Insight
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            {insight.date}
                            <span>•</span>
                            <span>{insight.type}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                            {insight.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                            {insight.excerpt}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  )
}
