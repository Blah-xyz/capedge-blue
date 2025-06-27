"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/footer-section"
import { NewsHeroSection } from "@/components/sections/news-hero-section"
import { NewsGridSection } from "@/components/sections/news-grid-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <NewsHeroSection />
        <NewsGridSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  )
}
