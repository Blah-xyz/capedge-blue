"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { WhyUsSection } from "@/components/sections/investments-section"
import { SmartInvestingSection } from "@/components/sections/smart-investing"
import { PlatformBusinessesSection } from "@/components/sections/platform-businesses"


import { CTASection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"
// Copilot chat commented out
// import { useCopilotReadable } from '@copilotkit/react-core'
// import { data } from "@/components/data"
import { InvestmentApproachSection } from "@/components/sections/investment-approach-section"
import { PortfolioSectionCopy } from "@/components/sections/portfolio-section-copy"

export default function LandingPage() {
  // Copilot chat commented out
  // useCopilotReadable({
  //   description: "CapEdge Group - Enterprise Software Investment Firm",
  //   value: data,
  // });
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />
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
