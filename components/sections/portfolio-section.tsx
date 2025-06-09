"use client"

import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedButton } from "@/components/animated-button"
import { Counter } from "../Counter"
import { useContactDialog } from "@/contexts/contact-dialog-context";
export function MissionSection() {
  const { setIsOpen } = useContactDialog();
  return (
    <section id="mission" className="py-20">
      <div className="container">
        <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Mission
          </h2>

          <p className="mt-4 text-muted-foreground">
          We've helped Hundreds of all sizes and across all industries have made a big improvements with us.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1} className="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto mb-16">
          <div className="text-center">
            <Counter target={24} duration={2000} suffix="%" className="text-4xl md:text-5xl font-bold mb-2" />
            <div className="text-muted-foreground">Revenue increase</div>
          </div>
          <div className="text-center">
            <Counter target={180} duration={2000} prefix="$" suffix="K" className="text-4xl md:text-5xl font-bold mb-2" />
            <div className="text-muted-foreground">In annual revenue</div>
          </div>
          <div className="text-center">
            <Counter target={10} duration={2000} suffix="+" className="text-4xl md:text-5xl font-bold mb-2" />
            <div className="text-muted-foreground">Months of runway</div>
          </div>
        </AnimatedSection>

        {/* Investment Plans */}
        <div className="mt-20">
        <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">

<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
  Choose Plan
</h2>

<p className="mt-4 text-muted-foreground">
Select the investment plan that best matches your goals and investment needs. We offer flexible options to support your financial journey.
</p>
</AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Plus Plan */}
            <AnimatedSection delay={0.2} className="group">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-8 h-full transition-colors duration-300 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">Plus</h3>
                  <ArrowUp className="h-5 w-5 transform rotate-45 cursor-pointer" onClick={() => setIsOpen(true)} />
                </div>
                <div className="text-3xl font-bold mb-6">$2.99/month</div>
                <ul className="space-y-4 text-muted-foreground">
                  <li>Access to basic investment opportunities</li>
                  <li>Monthly market insights</li>
                  <li>Standard support</li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Premium Plan */}
            <AnimatedSection delay={0.3} className="group">
              <div className="bg-blue-600 text-white rounded-3xl p-8 h-full transition-colors duration-300 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">Premium</h3>

                    <ArrowUp className="h-5 w-5 transform rotate-45 cursor-pointer" onClick={() => setIsOpen(true)} />

                </div>
                <div className="text-3xl font-bold mb-6">$6.99/month</div>
                <ul className="space-y-4 text-blue-50">
                  <li>Priority access to all investment opportunities</li>
                  <li>Weekly market insights and analysis</li>
                  <li>24/7 premium support</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
