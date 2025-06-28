"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, ArrowRight, Zap, Shield, Globe, Settings } from "lucide-react"
import { useContactDialog } from "@/contexts/contact-dialog-context"
import { Product, getRelatedProducts, getIconComponent } from "@/lib/data"

interface ProductDetailSectionProps {
  product: Product
}

export function ProductDetailSection({ product }: ProductDetailSectionProps) {
  const { setIsOpen } = useContactDialog()
  const relatedProducts = getRelatedProducts(product.id, 3)
  const IconComponent = getIconComponent(product.icon)

  const handleContactClick = () => {
    setIsOpen(true)
  }

  const handleRequestDemo = () => {
    setIsOpen(true)
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <AnimatedSection className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30`}>
                  <IconComponent className={`w-8 h-8 ${product.iconColor}`} />
                </div>
                <Badge variant="outline" className="capitalize">
                  {product.pricing}
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 font-display leading-tight">
                {product.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${product.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={handleRequestDemo}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  onClick={handleContactClick}
                  className="px-8 py-3"
                >
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Detailed Information */}
      <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Product Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                {product.fullDescription}
              </p>

              {/* Technical Specifications */}
              {product.technicalSpecs && (
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 flex items-center gap-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                    Technical Specifications
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Use Cases */}
              {product.useCases && (
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                    Use Cases
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.useCases.map((useCase, index) => (
                      <Card key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{useCase}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Integrations */}
              {product.integrations && (
                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                      Integrations
                    </h3>
                    <div className="space-y-3">
                      {product.integrations.slice(0, 6).map((integration, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{integration}</span>
                        </div>
                      ))}
                      {product.integrations.length > 6 && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center pt-2">
                          + {product.integrations.length - 6} more integrations
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Security & Compliance */}
              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Security & Compliance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">SOC 2 Type II Certified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">ISO 27001 Certified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">99.9% Uptime SLA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Related Products</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our other software platforms and solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => {
                const RelatedIconComponent = getIconComponent(relatedProduct.icon)
                return (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <Card className="group border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full cursor-pointer">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30`}>
                              <RelatedIconComponent className={`w-4 h-4 ${relatedProduct.iconColor}`} />
                            </div>
                            <Badge variant="outline" className="text-xs capitalize">
                              {relatedProduct.pricing}
                            </Badge>
                          </div>

                        <h3 className="text-lg font-bold text-black dark:text-white mb-3 font-display leading-tight line-clamp-2">
                          {relatedProduct.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
                          {relatedProduct.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all text-sm">
                            <span>Learn more</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
              })}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}
