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
    <section id="portfolio" className="pb-32 pt-16 relative overflow-hidden">
      {/* Refined Background with Subtle Blue Accents */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/2 rounded-full blur-3xl" />

      <div className="container relative max-w-7xl mx-auto px-4">

        {/* Our Impact Badge */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Our Impact</span>
          </div>
        </AnimatedSection>

        {/* Hero-Style Layout - Graph Left, Headline Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
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
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">110%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Total Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">120%+</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Current ROI</div>
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
                <div className="text-sm font-bold text-blue-700">+110%</div>
              </div>

              {/* Right Overflow Card - Revenue */}
              <div className="absolute top-4 -right-8 w-32 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-700/30 rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-600/60 p-3 transform -rotate-3 z-20 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <Building2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-100">ROI</span>
                <div className="text-sm font-bold text-blue-600">120%+</div>
              </div>

              {/* Bottom Overflow Card - Success Rate */}
              <div className="absolute bottom-2 right-4 w-30 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-700/30 rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-600/60 p-3 transform rotate-1 z-20 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-100">Success</span>
                <div className="text-sm font-bold text-blue-600">99.9%</div>
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

        {/* Stats and CTA Section - Below Graph and Headline */}
        <AnimatedSection delay={0.4} className="text-center mb-32">
          {/* Portfolio Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
              <div className="text-lg text-slate-600 dark:text-slate-400">Platform Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
              <div className="text-lg text-slate-600 dark:text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">110%</div>
              <div className="text-lg text-slate-600 dark:text-slate-400">Total Growth</div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="group relative px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold text-lg rounded-full shadow-lg shadow-blue-200/20 dark:shadow-blue-900/10 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Portfolio
                <ArrowUpRight className="w-5 h-5 group-hover:transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </AnimatedSection>

        {/* Platform Businesses Section */}
        <div className="relative bg-slate-50 dark:bg-slate-900/50 py-16 -mx-4 px-4 mt-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500/5 rounded-full blur-xl" />
          </div>

          <div className="container relative max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Platform Showcase</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Platform Businesses
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                Our portfolio showcases two thriving platform businesses that demonstrate our expertise in building and scaling innovative technology platforms.
              </p>
            </AnimatedSection>

            {/* Overlapping Portfolio Cards */}
            <div className="relative max-w-7xl mx-auto">
              {/* Enterprise Platform Alpha - Left Side - Purple Theme */}
              <AnimatedSection delay={0.2} className="relative mb-12 md:mb-0">
                <div className="md:w-2/3 relative">
                  <div className="bg-purple-800 dark:bg-purple-950 rounded-2xl p-10 border border-purple-700 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[400px]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-10">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center">
                            <Building2 className="w-7 h-7 text-white" />
                          </div>
                          <div className="px-4 py-2 bg-emerald-200 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-700 rounded-full">
                            <span className="text-emerald-800 dark:text-emerald-300 text-sm font-medium">Active</span>
                          </div>
                        </div>
                        <h3 className="text-4xl font-bold text-purple-100 dark:text-purple-100 mb-3">Enterprise Platform Alpha</h3>
                        <p className="text-lg text-purple-200 dark:text-purple-300">Next-generation enterprise solution</p>
                      </div>
                      <button
                        onClick={() => setIsOpen(true)}
                        className="p-4 bg-purple-700 dark:bg-purple-900 hover:bg-purple-600 dark:hover:bg-purple-800 rounded-xl border border-purple-600 dark:border-purple-700 transition-all duration-300 group/btn"
                      >
                        <ArrowUpRight className="w-6 h-6 text-purple-200 dark:text-purple-400 group-hover/btn:transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Features with Checkmarks */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group/item">
                        <CheckCircle className="w-6 h-6 text-purple-300 dark:text-purple-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                        <span className="text-lg text-purple-200 dark:text-purple-200 group-hover/item:text-purple-100 dark:group-hover/item:text-purple-100 transition-colors duration-200">Developed and deployed innovative technology platform</span>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <CheckCircle className="w-6 h-6 text-purple-300 dark:text-purple-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                        <span className="text-lg text-purple-200 dark:text-purple-200 group-hover/item:text-purple-100 dark:group-hover/item:text-purple-100 transition-colors duration-200">Analytical growth strategies implementation</span>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <CheckCircle className="w-6 h-6 text-purple-300 dark:text-purple-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                        <span className="text-lg text-purple-200 dark:text-purple-200 group-hover/item:text-purple-100 dark:group-hover/item:text-purple-100 transition-colors duration-200">Active management team empowerment</span>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <CheckCircle className="w-6 h-6 text-purple-300 dark:text-purple-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                        <span className="text-lg text-purple-200 dark:text-purple-200 group-hover/item:text-purple-100 dark:group-hover/item:text-purple-100 transition-colors duration-200">Comprehensive market analysis and strategic positioning</span>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 rounded-b-2xl" />
                  </div>
                </div>
              </AnimatedSection>

              {/* Business Solutions Beta - Right Side - Teal Theme */}
              <AnimatedSection delay={0.4} className="md:absolute md:top-24 md:right-0 md:w-2/3">
                <div className="bg-teal-800 dark:bg-teal-950 rounded-2xl p-10 border border-teal-700 dark:border-teal-800 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[400px]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-10">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-4 py-2 bg-amber-200 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-full">
                          <span className="text-amber-800 dark:text-amber-300 text-sm font-medium">Thriving</span>
                        </div>
                      </div>
                      <h3 className="text-4xl font-bold text-teal-100 dark:text-teal-100 mb-3">Business Solutions Beta</h3>
                      <p className="text-lg text-teal-200 dark:text-teal-300">Comprehensive business platform</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="p-4 bg-teal-700 dark:bg-teal-900 hover:bg-teal-600 dark:hover:bg-teal-800 rounded-xl border border-teal-600 dark:border-teal-700 transition-all duration-300 group/btn"
                    >
                      <ArrowUpRight className="w-6 h-6 text-teal-200 dark:text-teal-400 group-hover/btn:transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Features with Checkmarks */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group/item">
                      <CheckCircle className="w-6 h-6 text-teal-300 dark:text-teal-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-teal-200 dark:text-teal-200 group-hover/item:text-teal-100 dark:group-hover/item:text-teal-100 transition-colors duration-200">Successful platform business deployment</span>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <CheckCircle className="w-6 h-6 text-teal-300 dark:text-teal-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-teal-200 dark:text-teal-200 group-hover/item:text-teal-100 dark:group-hover/item:text-teal-100 transition-colors duration-200">Expertise in financial operations and technology</span>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <CheckCircle className="w-6 h-6 text-teal-300 dark:text-teal-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-teal-200 dark:text-teal-200 group-hover/item:text-teal-100 dark:group-hover/item:text-teal-100 transition-colors duration-200">Long-term strategic engagement beyond capital</span>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                      <CheckCircle className="w-6 h-6 text-teal-300 dark:text-teal-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-teal-200 dark:text-teal-200 group-hover/item:text-teal-100 dark:group-hover/item:text-teal-100 transition-colors duration-200">Advanced analytics and business intelligence</span>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-b-2xl" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
