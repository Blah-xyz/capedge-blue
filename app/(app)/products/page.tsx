"use client"

import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/shared/footer-section"
import { ProductsHeroSection } from "@/components/sections/products/products-hero-section"
import { ProductsMainSection } from "@/components/sections/products/products-main-section"
import { CTASection } from "@/components/sections/shared/cta-section"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <ProductsHeroSection />
        <ProductsMainSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}
