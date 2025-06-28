"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, BookOpen, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Success Rate",
    description: "Investment performance accuracy",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    icon: Users,
    value: "50+",
    label: "Expert Analysts",
    description: "Dedicated research team",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "Research Reports",
    description: "Published annually",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
    description: "For research excellence",
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
]

export function InsightsStatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 text-indigo-700">
              Research Excellence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display">
              Data-Driven Investment
              <span className="block text-indigo-600 dark:text-indigo-400">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our research team delivers comprehensive market analysis and investment insights backed by rigorous data analysis and industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-black dark:text-white mb-2 font-display">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-indigo-100 dark:border-slate-600">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                Trusted by Leading Institutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Our insights and analysis are relied upon by Fortune 500 companies, institutional investors, and industry leaders worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                <div className="text-gray-500 dark:text-gray-400 font-semibold">Fortune 500</div>
                <div className="text-gray-500 dark:text-gray-400 font-semibold">Institutional Investors</div>
                <div className="text-gray-500 dark:text-gray-400 font-semibold">Private Equity</div>
                <div className="text-gray-500 dark:text-gray-400 font-semibold">Venture Capital</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
