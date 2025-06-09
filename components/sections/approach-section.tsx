"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { Check } from "lucide-react"
import { StrategicInvestmentFlow } from "@/components/strategic-investment-flow"

export function ApproachSection() {
  return (
    <section id="approach" className="py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <AnimatedSection direction="left">
            <div className="relative aspect-square h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl">
              <StrategicInvestmentFlow />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
                Our <span className="headline-gradient">Investment</span> Approach
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We combine financial expertise with deep regional knowledge to identify and nurture high-potential
                opportunities across the Caribbean.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  "Thorough due diligence with local context in mind",
                  "Long-term partnership approach beyond just capital",
                  "Focus on sustainable business models with positive regional impact",
                  "Active involvement in strategic decision-making",
                  "Connection to our extensive network of regional experts",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                        <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <AnimatedButton className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Learn About Our Process
                </AnimatedButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
