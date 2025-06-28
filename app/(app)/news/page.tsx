"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/shared/footer-section"
import { NewsHeroSection } from "@/components/sections/news/news-hero-section"
import { NewsMainSection } from "@/components/sections/news/news-main-section"
import { CTASection } from "@/components/sections/shared/cta-section"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <NewsHeroSection />
        <NewsMainSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
