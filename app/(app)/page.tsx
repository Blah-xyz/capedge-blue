"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/home/hero-section"
import { AboutSection } from "@/components/sections/home/about-section"
import { WhyUsSection } from "@/components/sections/home/investments-section"
import { SmartInvestingSection } from "@/components/sections/home/smart-investing"
import { PlatformBusinessesSection } from "@/components/sections/home/platform-businesses"


import { CTASection } from "@/components/sections/shared/cta-section"
import { FooterSection } from "@/components/sections/shared/footer-section"
import { MegaHeader } from "@/components/mega-header"

// Copilot chat commented out
// import { useCopilotReadable } from '@copilotkit/react-core'
// import { data } from "@/components/data"
import { InvestmentApproachSection } from "@/components/sections/home/investment-approach-section"
import { PortfolioSectionCopy } from "@/components/sections/home/portfolio-section-copy"

export default function LandingPage() {
  // Copilot chat commented out
  // useCopilotReadable({
  //   description: "CapEdge Group - Enterprise Software Investment Firm",
  //   value: data,
  // });
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      {/* <Header /> */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SmartInvestingSection />

        <InvestmentApproachSection />

        <PortfolioSectionCopy />
        <PlatformBusinessesSection />
        <WhyUsSection />



        <CTASection />

      </main>
      <FooterSection />
    </div>
  )
}
