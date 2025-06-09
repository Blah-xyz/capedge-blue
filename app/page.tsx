"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { WhyUsSection } from "@/components/sections/investments-section"
import { StepsSection } from "@/components/sections/steps-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { MissionSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { NewsSection } from "@/components/sections/news-section"
import { CTASection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { useCopilotReadable } from '@copilotkit/react-core'
import { data } from "@/components/data"

export default function LandingPage() {
  useCopilotReadable({
    description: "Blue Water Equity Ltd - Caribbean Investment Family Office",
    value: data,
  });
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <StepsSection />
        <MissionSection />

        <CTASection />

      </main>
      <FooterSection />
    </div>
  )
}
