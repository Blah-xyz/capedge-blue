import { notFound } from "next/navigation"
import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/footer-section"
import { ProductDetailSection } from "@/components/sections/product-detail-section"
import { CTASection } from "@/components/sections/cta-section"
import { findProductById } from "@/lib/data"

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const productId = parseInt(id, 10)

  if (isNaN(productId)) {
    notFound()
  }

  const product = findProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <ProductDetailSection product={product} />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for known products
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}
