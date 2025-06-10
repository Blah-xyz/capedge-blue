"use client"

import { toast } from "@/hooks/use-toast"
import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "@/components/Counter"
import { Building2, TrendingUp, Users, ArrowRight } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleContactClick = () => {
    // This will trigger the contact dialog - can be connected to contact dialog component
    toast({
      title: "Contact Us",
      description: "Opening contact form...",
      duration: 3000,
    });
  };

  const handleLearnMoreClick = () => {
    // Scroll to about section
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your business email to continue.",
        duration: 5000,
      });
      return;
    }

		e.preventDefault();
		toast({
			title: "Thank you!",
			description: "We've received your contact information. Our team will be in touch soon.",
			duration: 5000,
		});

		setEmail("");
	};

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden -mt-4"
    >
      {/* Clean Linear Background - Seamless with header */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-800"></div>

      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Centered Content Layout */}
        <div className="max-w-4xl mx-auto text-center space-y-16">

          {/* Header Content */}
          <AnimatedSection>
            <div className="space-y-8">

              {/* Main Headline */}
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white max-w-3xl mx-auto">
                <span className="text-blue-600 dark:text-blue-400">Investing</span> in Enterprise Software
                <br />
                & Financial Services
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                CapEdge Group, Inc. is a private portfolio management company focused on making strategic investments in
                businesses, alternative investments and enterprise software. We partner with management teams to build
                businesses and create transformational technology solutions that reshape key markets.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium text-lg transition-colors duration-200 shadow-lg"
                >
                  Get started for free
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Main Illustration - Briefberry Style */}
          <AnimatedSection delay={0.3}>
            <div className="relative w-full max-w-6xl mx-auto h-[400px] sm:h-[500px] overflow-visible">

              {/* Background Base */}
              <div className="absolute inset-0 rounded-3xl border border-slate-200/50 bg-slate-100 dark:border-slate-700/30 dark:bg-slate-800" />

              {/* Creative Gradient Background - Bottom portion with natural theme */}
              <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-blue-200/30 via-blue-50/20 to-slate-100 dark:from-blue-900/20 dark:via-blue-950/10 dark:to-transparent rounded-b-3xl" />

              {/* Main Interface Window - Expanded to stretch wider */}
              <div className="absolute top-12 left-4 sm:left-8 w-[90%] sm:w-[650px] max-w-[650px] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-600/40 overflow-hidden z-10">

                {/* Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-gray-600/50 bg-gradient-to-r from-gray-50/50 to-slate-50/30 dark:from-gray-700/30 dark:to-gray-600/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">CapEdge Group</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Portfolio Dashboard</span>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">CG</span>
                    </div>
                  </div>
                </div>

                {/* Content Sections Inside */}
                <div className="px-6 py-8 space-y-8">

                  {/* Introduction Section */}
                  <div className="space-y-4 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-700/40 dark:to-gray-600/30 rounded-xl p-4 w-3/4 border border-gray-200/50 dark:border-gray-600/40">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-start">Enterprise Software Focus</h3>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200/60 dark:bg-gray-600/40 rounded-full w-4/5" />
                      <div className="h-3 bg-gray-200/60 dark:bg-gray-600/40 rounded-full w-5/5" />
                      <div className="h-3 bg-gray-200/60 dark:bg-gray-600/40 rounded-full w-1/3" />
                    </div>
                  </div>

                  {/* Goal Section with Progress Bar */}
                  <div className="space-y-4 bg-white dark:bg-gray-700/50 rounded-xl p-4 w-3/4 border border-gray-200/30 dark:border-gray-600/30 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-start">Portfolio Growth</h3>
                    <div className="space-y-3">
                      <div className="w-full bg-gray-200/50 dark:bg-gray-600/30 rounded-full h-3">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-3 rounded-full w-3/4 shadow-sm" />
                      </div>
                      <div className="h-3 bg-gray-100 dark:bg-gray-700/20 rounded-full w-full" />
                      <div className="h-3 bg-gray-100 dark:bg-gray-700/20 rounded-full w-4/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Selection Panel */}
              <div className="absolute top-32 right-4 sm:right-12 w-[280px] sm:w-[300px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/40 dark:border-gray-600/40 overflow-visible z-20">

                {/* Selection Panel Header */}
                <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-600/50 bg-gradient-to-r from-slate-50/30 to-gray-50/20 dark:from-gray-700/30 dark:to-gray-600/20">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-start">Investment Focus</h3>
                </div>

                {/* Interactive Selection Cards - 2x2 Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 relative bg-white/50 dark:bg-gray-800/50">

                    {/* Card 1 - Enterprise Software (HOVERED/ELEVATED) */}
                    <div className="relative transform -translate-y-4 shadow-2xl bg-white  rounded-xl p-5 cursor-pointer z-30 transition-all duration-200 ">
                      <div className="w-10 h-10 bg-white/20 dark:bg-white/30 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="text-sm font-semibold ">Enterprise Software</div>
                    </div>

                    {/* Card 2 - Financial Services */}
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-700/40 dark:to-gray-600/30 border border-gray-200/60 dark:border-gray-600/60 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-700/50 dark:hover:to-gray-600/40">
                      <div className="w-10 h-10 border border-gray-200/60 rounded-lg mb-4 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-100 font-medium">Financial Services</div>
                    </div>

                    {/* Card 3 - Portfolio Management */}
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-700/30 dark:to-gray-600/40 border border-gray-200/60 dark:border-gray-600/60 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-700/40 dark:hover:to-gray-600/50">
                      <div className="w-10 h-10 border border-gray-200/60 rounded-lg mb-4 flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-100 font-medium">Portfolio Management</div>
                    </div>

                    {/* Card 4 - Technology Solutions */}
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-700/40 dark:to-gray-600/30 border border-gray-200/60 dark:border-gray-600/60 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-700/50 dark:hover:to-gray-600/40">
                      <div className="w-10 h-10 border border-gray-200/60 rounded-lg mb-4 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-100 font-medium">Technology Solutions</div>
                    </div>

                    {/* Mouse Cursor - Positioned over the elevated card */}
                    <div className="absolute top-1 left-20 z-40 pointer-events-none animate-ping transition-all">
                      <svg className="w-5 h-5 text-gray-800 transform rotate-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overflowing Cards - Positioned to extend beyond boundaries */}
              {/* Left Overflow Card - Portfolio */}
              <div className="absolute -top-10 -left-8 w-32 bg-gradient-to-br from-white to-slate-50/50 dark:from-gray-800 dark:to-gray-700/30 rounded-xl shadow-xl border border-gray-200/60 dark:border-gray-600/60 p-3 transform rotate-0 z-10 backdrop-blur-sm animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-500 dark:to-indigo-600 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-100">Portfolio</span>
              </div>

              {/* Right Overflow Card - Extending beyond floating panel */}
              <div className="absolute top-2 -right-12 w-36 bg-gradient-to-br from-white to-slate-50/50 dark:from-gray-800 dark:to-gray-700/30 rounded-xl shadow-xl border border-gray-200/60 dark:border-gray-600/60 p-3 transform -rotate-3 z-25 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-500 dark:to-teal-600 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-100">Analytics</span>
              </div>

            </div>
          </AnimatedSection>

          {/* Statistics Showcase */}
          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">

              {/* Successful Investments */}
              <div className="text-center">
                <Counter
                  target={25}
                  duration={2000}
                  suffix="+"
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Successful<br />Investments
                </div>
              </div>

              {/* Success Rate */}
              <div className="text-center">
                <Counter
                  target={98}
                  duration={2000}
                  suffix="%"
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Success Rate
                </div>
              </div>

              {/* Average ROI */}
              <div className="text-center">
                <Counter
                  target={120}
                  duration={2000}
                  suffix="%+"
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average ROI
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
