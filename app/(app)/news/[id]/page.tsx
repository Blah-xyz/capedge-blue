import { notFound } from "next/navigation"
import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/footer-section"
import { NewsDetailSection } from "@/components/sections/news-detail-section"
import { CTASection } from "@/components/sections/cta-section"
import { findNewsById } from "@/lib/data"

interface NewsDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params
  const newsId = parseInt(id, 10)

  if (isNaN(newsId)) {
    notFound()
  }

  const article = findNewsById(newsId)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <NewsDetailSection article={article} />
        <div className="py-8">
          <CTASection />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for known news articles
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}
