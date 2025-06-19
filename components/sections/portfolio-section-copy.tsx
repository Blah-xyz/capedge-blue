"use client"

import { ArrowUpRight, Building2, TrendingUp, Zap, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useContactDialog } from "@/contexts/contact-dialog-context"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid } from "recharts"

// Portfolio performance data for the chart
const portfolioData = [
  { month: 'Jan', value: 100, growth: 0 },
  { month: 'Feb', value: 108, growth: 8 },
  { month: 'Mar', value: 115, growth: 15 },
  { month: 'Apr', value: 122, growth: 22 },
  { month: 'May', value: 135, growth: 35 },
  { month: 'Jun', value: 142, growth: 42 },
  { month: 'Jul', value: 158, growth: 58 },
  { month: 'Aug', value: 165, growth: 65 },
  { month: 'Sep', value: 178, growth: 78 },
  { month: 'Oct', value: 185, growth: 85 },
  { month: 'Nov', value: 195, growth: 95 },
  { month: 'Dec', value: 210, growth: 110 }
]

// Portfolio highlights with checkmarks
const portfolioHighlights = [
  "Strategic partnerships with industry leaders",
  "Proven track record in enterprise software",
  "Hands-on operational support and guidance",
  "Deep sector expertise and market knowledge",
  "Long-term value creation focus",
  "Comprehensive due diligence process"
]

// Chart configuration
const chartConfig = {
  value: {
    label: "Portfolio Value",
    color: "#16a34a", // green-600
  },
  growth: {
    label: "Growth %",
    color: "#22c55e", // green-500
  },
}

export function PortfolioSectionCopy() {
  const { setIsOpen } = useContactDialog();
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden flex items-center min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] py-8 md:py-16"
    >
      {/* Refined Background with Subtle Blue Accents */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/2 rounded-full blur-3xl" />

      <div className="container relative max-w-7xl mx-auto px-4">

        {/* Our Impact Badge */}
        <AnimatedSection className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Our Impact</span>
          </div>
        </AnimatedSection>

        {/* Hero-Style Layout - Graph Left, Headline Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Portfolio Performance Chart with Screen Overflow Effect */}
          <AnimatedSection className="relative">
            <div className="relative w-full max-w-2xl mx-auto h-[500px] overflow-visible">

              {/* Background Base - Screen Frame */}
              <div className="absolute inset-0 rounded-3xl border border-slate-200/50 bg-slate-100 dark:border-slate-700/30 dark:bg-slate-800" />

              {/* Gradient Background - Bottom portion */}
              <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-blue-200/30 via-blue-50/20 to-slate-100 dark:from-blue-900/20 dark:via-blue-950/10 dark:to-transparent rounded-b-3xl" />

              {/* Main Chart Interface Window - Overflowing from screen */}
              <div className="absolute top-8 left-4 w-[90%] max-w-[500px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200/30 dark:border-slate-700/40 overflow-hidden z-10">

                {/* Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/50 to-white/30 dark:from-slate-800/30 dark:to-slate-700/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">Portfolio Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Live Data</span>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">CG</span>
                    </div>
                  </div>
                </div>

                {/* Chart Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Portfolio Performance</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">12-month growth trajectory</p>
                  </div>

                  {/* Chart */}
                  <div className="h-64">
                    <ChartContainer config={chartConfig}>
                      <AreaChart data={portfolioData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#15803d" stopOpacity={0.4}/>
                            <stop offset="50%" stopColor="#16a34a" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 10 }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 10 }}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#15803d"
                          strokeWidth={3}
                          fill="url(#colorValue)"
                          dot={{ fill: '#15803d', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: '#15803d', strokeWidth: 3, fill: '#16a34a' }}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>

                  {/* Chart Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">140%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Total Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">99.9%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">15%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Avg Monthly</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overflowing Cards - Portfolio Metrics */}
              {/* Left Overflow Card - Growth */}
              <div className="absolute -top-6 -left-6 w-28 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-700/30 rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-600/60 p-3 transform rotate-2 z-20 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-100">Growth</span>
                <div className="text-sm font-bold text-blue-700">+140%</div>
              </div>

              {/* Right Overflow Card - Revenue */}
              <div className="absolute top-4 -right-8 w-32 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-700/30 rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-600/60 p-3 transform -rotate-3 z-20 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <Building2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-100">Countries</span>
                <div className="text-sm font-bold text-blue-600">3+</div>
              </div>



              {/* Floating elements for depth */}
              <div className="absolute top-12 right-16 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-60 animate-pulse" />
              <div className="absolute bottom-24 left-8 w-3 h-3 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-500 dark:to-slate-600 rounded-full opacity-50 animate-bounce" />
              <div className="absolute top-32 left-2 w-2 h-2 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-500 dark:to-slate-600 rounded-full opacity-70" />

            </div>
          </AnimatedSection>

          {/* Right Side - Hero Content with Headline */}
          <AnimatedSection delay={0.2} className="lg:pl-8">
            <div className="space-y-8">
              {/* Main Headline */}
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                  <span className="text-slate-900 dark:text-white">Our </span>
                  <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 dark:from-slate-300 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">Impact</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Creating lasting value through strategic investments in enterprise software platforms and comprehensive operational support.
              </p>

              {/* Portfolio Highlights with Checkmarks */}
              <div className="space-y-4">
                {portfolioHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>



      </div>
    </section>
  )
}
