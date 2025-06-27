"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/footer-section"
import { ProductsHeroSection } from "@/components/sections/products-hero-section"
import { ProductsCategoriesSection } from "@/components/sections/products-categories-section"
import { ProductsFeaturesSection } from "@/components/sections/products-features-section"
import { ProductsPortfolioSection } from "@/components/sections/products-portfolio-section"
import { CTASection } from "@/components/sections/cta-section"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <ProductsHeroSection />
        <ProductsCategoriesSection />
        <ProductsFeaturesSection />
        <ProductsPortfolioSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
