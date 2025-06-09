"use client"

import { AnimatedSection } from "@/components/animated-section"
import { CircleCheck, Users, TrendingUp, HeartHandshake } from "lucide-react"

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-background to-blue-50/50 dark:from-background dark:to-blue-950/20"
    >
      <div className="container">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
            Creating <span className="headline-gradient">Lasting Impact</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Our investments are designed to create sustainable growth and positive change across the Caribbean region.
          </p>
        </AnimatedSection>

        <div className="mt-16">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-300 dark:from-blue-500 dark:to-blue-800 rounded-full"></div>
                <div className="space-y-8 pl-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Economic Growth</h3>
                    <p className="text-muted-foreground">
                      Our investments have contributed to a 15% increase in job creation across our portfolio companies
                      in the last year alone.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We've helped reduce carbon emissions by 10,000 tons annually through our renewable energy
                      investments.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Innovation</h3>
                    <p className="text-muted-foreground">
                      Our technology investments have connected over 50,000 Caribbean businesses to global markets.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                    <CircleCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">25+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Successful Investments</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">1,200+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Jobs Created</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">$50M+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Capital Deployed</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                    <HeartHandshake className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">12</div>
                  <div className="mt-2 text-sm text-muted-foreground">Islands Impacted</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
