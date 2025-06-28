"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/shared/footer-section"
import { ResourcesHeroSection } from "@/components/sections/resources/resources-hero-section"
import { ResourcesMainSection } from "@/components/sections/resources/resources-main-section"
import { CTASection } from "@/components/sections/shared/cta-section"

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
