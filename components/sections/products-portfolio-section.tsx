"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, Users, Globe, ArrowRight, ExternalLink } from "lucide-react"

const portfolioCompanies = [
  {
    name: "CloudOps Platform",
    category: "Enterprise Software",
    description: "Cloud infrastructure management platform serving Fortune 500 companies",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    metrics: {
      growth: "+180%",
      employees: "250+",
      markets: "15 Countries"
    },
    fund: "Enterprise Fund",
    status: "Active",
    color: "blue"
  },
  {
    name: "SecureFlow",
    category: "Cybersecurity",
    description: "Zero-trust security platform for enterprise networks and applications",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&h=100&fit=crop&crop=center",
    metrics: {
      growth: "+200%",
      employees: "180+",
      markets: "12 Countries"
    },
    fund: "Growth Fund",
    status: "Active",
    color: "emerald"
  },
  {
    name: "DataVault",
    category: "Fintech",
    description: "Financial data analytics platform for institutional investors",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&h=100&fit=crop&crop=center",
    metrics: {
      growth: "+150%",
      employees: "120+",
      markets: "8 Countries"
    },
    fund: "Enterprise Fund",
    status: "Active",
    color: "purple"
  },
  {
    name: "MarketPlace Pro",
    category: "Platform Business",
    description: "B2B marketplace connecting suppliers with enterprise buyers",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
    metrics: {
      growth: "+300%",
      employees: "90+",
      markets: "6 Countries"
    },
    fund: "Platform Fund",
    status: "Active",
    color: "orange"
  },
  {
    name: "AI Analytics",
    category: "Artificial Intelligence",
    description: "Machine learning platform for enterprise data analytics and insights",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center",
    metrics: {
      growth: "+220%",
      employees: "160+",
      markets: "10 Countries"
    },
    fund: "Growth Fund",
    status: "Active",
    color: "indigo"
  },
  {
    name: "WorkFlow Suite",
    category: "Productivity",
    description: "Enterprise workflow automation and collaboration platform",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    metrics: {
      growth: "+140%",
      employees: "200+",
      markets: "18 Countries"
    },
    fund: "Enterprise Fund",
    status: "Exited",
    color: "green"
  },
]

const getFundColor = (fund: string) => {
  switch (fund) {
    case "Enterprise Fund": return "bg-blue-100 text-blue-700 border-blue-200"
    case "Growth Fund": return "bg-emerald-100 text-emerald-700 border-emerald-200"
    case "Platform Fund": return "bg-purple-100 text-purple-700 border-purple-200"
    default: return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-700 border-green-200"
    case "Exited": return "bg-blue-100 text-blue-700 border-blue-200"
    default: return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

export function ProductsPortfolioSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-blue-50 dark:bg-blue-900/30 border-blue-200 text-blue-700">
              Portfolio Companies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display">
              Our Investment
              <span className="block text-blue-600 dark:text-blue-400">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the innovative companies in our portfolio that are transforming their industries and delivering exceptional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-slate-800">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black dark:text-white font-display">
                          {company.name}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {company.category}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {company.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm font-bold text-green-600">{company.metrics.growth}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-sm font-bold text-blue-600">{company.metrics.employees}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Team</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Globe className="w-4 h-4 text-purple-600 mr-1" />
                        <span className="text-sm font-bold text-purple-600">{company.metrics.markets}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Markets</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className={getFundColor(company.fund)}>
                      {company.fund}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(company.status)}>
                      {company.status}
                    </Badge>
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group/btn justify-between">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="mt-16">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                    Portfolio Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Aggregate performance across our active portfolio companies
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                    <div className="text-gray-600 dark:text-gray-300">Active Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">+185%</div>
                    <div className="text-gray-600 dark:text-gray-300">Avg. Revenue Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2,000+</div>
                    <div className="text-gray-600 dark:text-gray-300">Total Employees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">25+</div>
                    <div className="text-gray-600 dark:text-gray-300">Global Markets</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full">
              View Complete Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
