"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { products } from "@/lib/data"



export function ProductsMainSection() {
  const [api, setApi] = useState<CarouselApi>()

  const scrollPrev = () => {
    api?.scrollPrev()
  }

  const scrollNext = () => {
    api?.scrollNext()
  }

  return (
    <section className="py-8 pb-32 sm:py-12 sm:pb-40 lg:py-16 lg:pb-40 lg:min-h-[calc(50vh-4rem)] xl:min-h-[calc(50vh-4rem)] bg-white dark:bg-gray-900 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 font-display leading-tight">
                Software
                <span className="block text-blue-600 dark:text-blue-400">Platforms</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                Enterprise-grade software solutions designed to accelerate business growth.
              </p>
            </div>

            {/* Navigation Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:flex gap-2 justify-center md:justify-end">
              <button
                onClick={scrollPrev}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={scrollNext}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Software Platforms Carousel */}
          <div className="relative w-full overflow-hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
                {products.map((platform) => (
                  <CarouselItem
                    key={platform.id}
                    className="pl-1 sm:pl-2 md:pl-4 basis-[85%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3 min-w-0"
                  >
                    <Link href={`/products/${platform.id}`}>
                      <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                        <CardContent className="p-0 flex flex-col h-full">
                          {/* Image Section */}
                          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                            <img
                              src={platform.image || "/placeholder.svg"}
                              alt={platform.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          </div>

                          {/* Content Section */}
                          <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 font-display leading-tight">
                              {platform.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1 line-clamp-3">
                              {platform.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                              {platform.features.slice(0, 3).map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start gap-2">
                                  <CheckCircle
                                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${platform.iconColor} flex-shrink-0 mt-0.5`}
                                  />
                                  <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-tight">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                              {platform.features.length > 3 && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 ml-5 sm:ml-6">
                                  + more features
                                </div>
                              )}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center justify-between mt-auto">
                              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                {platform.pricing}
                              </span>
                              <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all text-sm">
                                <span>Learn more</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex sm:hidden justify-center mt-6 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors"
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
