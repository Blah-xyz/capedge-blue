import { notFound } from "next/navigation"
import { MegaHeader } from "@/components/mega-header"
import { FooterSection } from "@/components/sections/shared/footer-section"
import { InsightDetailSection } from "@/components/sections/insights/insight-detail-section"
import { CTASection } from "@/components/sections/shared/cta-section"
import { findInsightById } from "@/lib/data"

interface InsightDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { id } = await params
  const insightId = parseInt(id, 10)

  if (isNaN(insightId)) {
    notFound()
  }

  const insight = findInsightById(insightId)

  if (!insight) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <MegaHeader />
      <main className="flex-1">
        <InsightDetailSection insight={insight} />
        <div className="py-8">
          <CTASection />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for known insights
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}
