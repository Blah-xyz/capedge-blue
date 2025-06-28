"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/footer-section"
import { ResourcesHeroSection } from "@/components/sections/resources-hero-section"
import { ResourcesMainSection } from "@/components/sections/resources-main-section"
import { CTASection } from "@/components/sections/cta-section"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <ResourcesHeroSection />
        <ResourcesMainSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
