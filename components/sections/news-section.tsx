"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "Blue Water Equity Announces $10M Investment in Sustainable Tourism",
    date: "April 15, 2023",
    excerpt: "New partnership aims to develop eco-friendly resorts across the Eastern Caribbean islands.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Portfolio Company CaribbeanTech Secures Major International Partnership",
    date: "February 28, 2023",
    excerpt: "The e-commerce platform will now connect Caribbean businesses to European markets.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Blue Water Equity Hosts Regional Investment Summit in Barbados",
    date: "January 10, 2023",
    excerpt: "The event brought together entrepreneurs and investors from across the Caribbean region.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-20">
      <div className="container">
        <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
              Latest <span className="headline-gradient">News</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed max-w-2xl">
              Stay updated with the latest developments from Blue Water Equity and our portfolio companies.
            </p>
          </div>
          <AnimatedButton variant="outline" className="mt-4 sm:mt-0 flex items-center gap-2">
            View All News
            <ArrowRight className="h-4 w-4" />
          </AnimatedButton>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <AnimatedCard
              key={index}
              delay={0.1 * index}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
