"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Blue Water Equity's strategic guidance and capital investment helped us scale our renewable energy solutions across three Caribbean islands in just 18 months.",
    author: "Maria Rodriguez",
    title: "CEO, Caribbean Solar Solutions",
  },
  {
    quote:
      "Their deep understanding of the regional market and commitment to sustainable development made them the perfect partner for our expansion.",
    author: "James Thompson",
    title: "Founder, Island Fresh",
  },
  {
    quote:
      "Beyond just capital, Blue Water Equity provided invaluable connections and mentorship that transformed our business model and accelerated our growth.",
    author: "Aisha Johnson",
    title: "CTO, CaribbeanTech",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-blue-950/20">
      <div className="container">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
            What Our <span className="headline-gradient">Partners</span> Say
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            We measure our success through the achievements of the companies we invest in.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={index}
              delay={0.1 * index}
              className="relative overflow-hidden rounded-xl border bg-card p-8 shadow-sm"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100 dark:text-blue-900/30" />
              <div className="relative">
                <p className="text-lg italic text-card-foreground mb-6">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
