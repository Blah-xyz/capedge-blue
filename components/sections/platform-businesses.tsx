
"use client"

import { ArrowLeft, ArrowRight, Building2, TrendingUp, Users, Zap } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  const nextBusiness = () => {
    setCurrentBusiness((prev) => (prev + 1) % platformBusinesses.length)
  }

  const previousBusiness = () => {
    setCurrentBusiness((prev) => (prev - 1 + platformBusinesses.length) % platformBusinesses.length)
  }

  const business = platformBusinesses[currentBusiness]

  return (
    <section
      className="bg-blue-50 dark:bg-slate-900 flex items-center overflow-hidden min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] py-8 md:py-16"
    >
      <div className="container mx-auto px-4 max-w-7xl">


        {/* Top Navigation - Moved from bottom */}
        <div className="mb-4 md:mb-8 flex items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={business.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-slate-400 dark:text-slate-500 text-md">{String(business.id).padStart(2, '0')}.</span>
              <h2 className="text-slate-900 dark:text-white text-lg font-medium">{business.title}</h2>
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="text-slate-900 dark:text-white">{business.heading}</span>
                    <br />
                    <span className="text-blue-600 dark:text-blue-400">{business.subheading}</span>
                  </h1>
                </div>

                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {business.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content - Gradient Card with Partial Image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full rounded-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={business.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative max-w-md mx-auto w-full"
              >
                {/* Card with linear gradient background and partial image */}
                <div className="relative rounded-2xl shadow-sm h-96 bg-gradient-to-b from-white via-gray-100  to-orange-100">
                  {/* Image cut and squeezed, extending past card borders */}
                  <div className="absolute bottom-0 right-0 w-4/5 h-4/5 rounded-tl-xl overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center`}
                      alt={business.title}
                      className="w-[120%] h-[120%] object-cover relative opacity-90 rounded-tl-xl"
                      style={{ objectPosition: 'center center' }}
                    />
                    {/* Subtle overlay for better integration */}
                    <div className="absolute inset-0 bg-gray-900/5 rounded-tl-xl"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


      </div>
    </section>
  )
}