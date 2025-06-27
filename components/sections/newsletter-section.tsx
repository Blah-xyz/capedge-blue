"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, TrendingUp, Users, CheckCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        duration: 5000,
      })
      return
    }

    // Simulate subscription
    setIsSubscribed(true)
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive our latest insights and updates.",
      duration: 5000,
    })
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Stay Informed
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-display">
                Subscribe to CapEdge
                <span className="block text-blue-600 dark:text-blue-400">Investment Insights</span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Get exclusive access to market analysis, investment trends, and portfolio updates delivered directly to your inbox.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Weekly market insights and analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Exclusive portfolio company updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Early access to investment opportunities</span>
                </div>
              </div>

              {/* Subscription Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 bg-white/90 backdrop-blur-sm border-blue-200"
                  />
                  <Button type="submit" size="lg" className="h-12 px-8">
                    Subscribe Now
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    Successfully subscribed! Check your email for confirmation.
                  </span>
                </div>
              )}

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                No spam. Unsubscribe at any time. Read our privacy policy.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">15,000+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Active Subscribers</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">99.9%</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Satisfaction Rate</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm col-span-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">Weekly</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Curated insights delivered every Tuesday</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
