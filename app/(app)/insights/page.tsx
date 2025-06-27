"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/footer-section"
import { InsightsHeroSection } from "@/components/sections/insights-hero-section"
import { InsightsGridSection } from "@/components/sections/insights-grid-section"
import { InsightsStatsSection } from "@/components/sections/insights-stats-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <InsightsHeroSection />
        <InsightsStatsSection />
        <InsightsGridSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  )
}
