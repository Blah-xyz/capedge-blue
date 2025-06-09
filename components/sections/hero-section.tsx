"use client"

import { ChevronRight, Banknote, Users, Map, Anchor } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Counter } from "../Counter"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

export function HeroSection() {

  const [email, setEmail] = useState("");

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
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 pt-20 pb-48 md:py-32"
    >
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-white/50 dark:via-white/5 dark:to-white/10 z-0" />

        {/* Primary Wave Layer */}
        <svg
          className="absolute h-[150%] w-[150%] -right-1/4 -top-1/4 text-blue-100/30 dark:text-blue-900/20 rotate-45"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 100 C 20 90, 40 97, 50 95 C 60 93, 80 97, 100 95 L 100 0 L 0 0 Z" />
        </svg>

        {/* Secondary Wave Layer */}
        <svg
          className="absolute h-[150%] w-[150%] -right-1/4 -top-1/4 text-teal-100/20 dark:text-teal-900/10 rotate-45 translate-y-4"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 100 C 30 98, 50 92, 70 97 C 90 102, 100 98, 100 98 L 100 0 L 0 0 Z" />
        </svg>

        {/* Tertiary Wave Layer */}
        <svg
          className="absolute h-[150%] w-[150%] -right-1/4 -top-1/4 text-indigo-100/15 dark:text-indigo-900/10 rotate-45 translate-y-8"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 100 C 40 95, 60 98, 80 93 C 90 91, 100 95, 100 95 L 100 0 L 0 0 Z" />
        </svg>

        {/* Quaternary Wave Layer */}
        <svg
          className="absolute h-[150%] w-[150%] -right-1/4 -top-1/4 text-blue-100/10 dark:text-blue-900/5 rotate-45 translate-y-12"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 100 C 50 97, 70 93, 90 98 C 95 99, 100 97, 100 97 L 100 0 L 0 0 Z" />
        </svg>

        {/* Gradient Overlays */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 dark:from-blue-400/5 dark:to-teal-400/5 rounded-full blur-3xl rotate-45" />
        <div className="absolute bottom-1/4 right-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-teal-400/10 to-blue-400/10 dark:from-teal-400/5 dark:to-blue-400/5 rounded-full blur-3xl rotate-45" />
      </div>

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-start lg:items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
              Portfolio Management Company
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">Investing</span> in the Future
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed max-w-2xl">
                                CapEdge Group, Inc. is a private portfolio management
                 company focused on making strategic investments in
                  businesses, alternative investments and enterpise
              software. We partner with management teams to build
                businesses and create transformational technology
         solutions that reshape key markets.
              </p>

              {/* Email subscription form */}
              <form onSubmit={handleSubmit} className="max-w-md flex flex-col sm:flex-row gap-4 sm:gap-2 relative z-20">
                <div className="relative flex-1 group">
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your business email"
                    className="w-full h-12 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-200 group-hover:shadow-md"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-gray-900 px-6 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 w-full sm:w-auto"
                >
                  Get Started
                </button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Main Investment Card */}
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 space-y-6 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Anchor className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Blue Water Equity</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Investment Portfolio</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Investments</p>
                    <Counter target={50} duration={2000} prefix="$" suffix="M+" className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 " />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Companies</p>
                      </div>
                      <Counter target={25} duration={2000} suffix="+" className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 " />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Map className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">Islands</p>
                      </div>
                      <Counter target={12} duration={2000} suffix="+" className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 " />
                    </div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 dark:text-gray-400">Investment Progress</span>
                      <span className="text-blue-600 dark:text-blue-400">75%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[75%] bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 dark:text-gray-400">Portfolio Growth</span>
                      <span className="text-teal-600 dark:text-teal-400">92%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-500 dark:to-teal-300 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 dark:text-gray-400">Regional Impact</span>
                      <span className="text-indigo-600 dark:text-indigo-400">83%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[83%] bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Credit Card */}
              <div className="absolute -top-6 right-4 w-48 h-32 bg-gradient-to-br from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 rounded-xl p-4 shadow-xl transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 group z-20 animate-float">
                <div className="flex justify-between items-start">
                  <Banknote className="w-8 h-8 text-white/90" />
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                    <div className="w-1 h-1 rounded-full bg-white/70" />
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-white/90 text-xs mb-1">Investment Account</div>
                  <div className="text-white font-medium tracking-wider">•••• 4891</div>
                </div>
              </div>

              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0) rotate(6deg); }
                  50% { transform: translateY(-10px) rotate(6deg); }
                }
                @keyframes float-fast {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                }
                .animate-float {
                  animation: float 4s ease-in-out infinite;
                }
                .animate-float-fast {
                  animation: float-fast 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
