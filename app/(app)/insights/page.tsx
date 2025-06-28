"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/shared/footer-section"
import { InsightsHeroSection } from "@/components/sections/insights/insights-hero-section"
import { InsightsMainSection } from "@/components/sections/insights/insights-main-section"
import { CTASection } from "@/components/sections/shared/cta-section"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <InsightsHeroSection />
        <InsightsMainSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
