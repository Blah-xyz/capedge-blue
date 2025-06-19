
"use client"

import { ArrowLeft, ArrowRight, Building2, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactDialog } from "@/contexts/contact-dialog-context"

// Define the platform business type
type PlatformBusiness = {
  id: number
  title: string
  subtitle: string
  heading: string
  subheading: string
  description: string
  icon: React.ComponentType<any>
  status: string
  features: string[]
}

// Define the platform businesses data
const platformBusinesses: PlatformBusiness[] = [
  {
    id: 1,
    title: "Enterprise Platform Alpha",
    subtitle: "TECHNOLOGY PLATFORM",
    heading: "Next-Generation",
    subheading: "Enterprise Solutions.",
    description: "A comprehensive enterprise software platform that revolutionizes business operations through innovative technology. Our strategic investment and guidance helped scale this platform to serve Fortune 500 companies globally.",
    icon: Building2,
    status: "Active",
    features: [
      "Innovative technology deployment",
      "Enterprise-grade scalability",
      "Global market presence",
      "Strategic growth implementation"
    ]
  },
  {
    id: 2,
    title: "Business Solutions Beta",
    subtitle: "FINANCIAL PLATFORM",
    heading: "Comprehensive",
    subheading: "Business Intelligence.",
    description: "A cutting-edge financial technology platform that provides advanced analytics and business intelligence solutions. Through our partnership, this platform has achieved remarkable growth and market penetration.",
    icon: TrendingUp,
    status: "Thriving",
    features: [
      "Advanced analytics engine",
      "Real-time business intelligence",
      "Financial operations optimization",
      "Long-term strategic engagement"
    ]
  },
  {
    id: 3,
    title: "Digital Transformation Gamma",
    subtitle: "INNOVATION PLATFORM",
    heading: "Digital",
    subheading: "Transformation Hub.",
    description: "A revolutionary platform that enables digital transformation for traditional businesses. Our investment and strategic guidance have positioned this platform as a leader in the digital transformation space.",
    icon: Users,
    status: "Expanding",
    features: [
      "Digital transformation solutions",
      "Legacy system modernization",
      "Cloud-native architecture",
      "Comprehensive market analysis"
    ]
  }
]

export function PlatformBusinessesSection() {
  const [currentBusiness, setCurrentBusiness] = useState(0)
  const { setIsOpen } = useContactDialog()

  const nextBusiness = () => {
    setCurrentBusiness((prev) => (prev + 1) % platformBusinesses.length)
  }

  const previousBusiness = () => {
    setCurrentBusiness((prev) => (prev - 1 + platformBusinesses.length) % platformBusinesses.length)
  }

  const business = platformBusinesses[currentBusiness]
  const IconComponent = business.icon

  return (
    <section className="min-h-[90vh] bg-white dark:bg-slate-900 flex items-center overflow-hidden py-16">
      <div className="container mx-auto px-4 py-12">
        {/* Header Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Platform Showcase</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    <span className="text-slate-900 dark:text-white">{business.heading}</span>
                    <br />
                    <span className="text-blue-600 dark:text-blue-400">{business.subheading}</span>
                  </h1>
                </div>

                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {business.description}
                </p>

                {/* Features List with Checkmarks */}
                <div className="mt-8 space-y-4">
                  {business.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content - Illustrations */}
          <div className="w-full md:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={business.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] max-w-md mx-auto"
              >
                {/* Central Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg z-10"
                >
                  <IconComponent className="w-12 h-12 text-white" />
                </motion.div>

                {/* Top Platform Card */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl border border-blue-200 dark:border-blue-700 shadow-md p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <span className="text-xs font-medium text-blue-800 dark:text-blue-200">Platform Analytics</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-blue-300 dark:bg-blue-600 rounded w-3/4" />
                    <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-1/2" />
                  </div>
                </motion.div>

                {/* Right Platform Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-1/2 -translate-y-1/2 right-4 w-36 h-28 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{business.status}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-green-300 dark:bg-green-600 rounded w-full" />
                    <div className="h-1.5 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
                  </div>
                </motion.div>

                {/* Bottom Platform Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-44 h-26 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl border border-purple-200 dark:border-purple-700 shadow-md p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-600 rounded-full" />
                    <span className="text-xs font-medium text-purple-800 dark:text-purple-200">Growth Metrics</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-8 w-2 bg-purple-300 dark:bg-purple-600 rounded" />
                    <div className="h-6 w-2 bg-purple-400 dark:bg-purple-500 rounded" />
                    <div className="h-10 w-2 bg-purple-500 dark:bg-purple-400 rounded" />
                    <div className="h-7 w-2 bg-purple-300 dark:bg-purple-600 rounded" />
                  </div>
                </motion.div>

                {/* Left Platform Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-32 h-32 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-xl border border-teal-200 dark:border-teal-700 shadow-md p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    <span className="text-xs font-medium text-teal-800 dark:text-teal-200">Performance</span>
                  </div>
                  <div className="relative w-16 h-16 mx-auto">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="75, 100"
                        className="text-teal-400 dark:text-teal-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-teal-700 dark:text-teal-300">75%</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={business.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-slate-400 dark:text-slate-500 text-sm">{String(business.id).padStart(2, '0')}.</span>
              <h3 className="text-slate-900 dark:text-white text-lg font-medium">{business.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 uppercase text-sm tracking-wider mt-1">{business.subtitle}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2">
            <button
              onClick={previousBusiness}
              className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            </button>
            <button
              onClick={nextBusiness}
              className="h-10 w-10 rounded bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}