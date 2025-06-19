"use client"

import { toast } from "@/hooks/use-toast"
import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "@/components/Counter"
import { Building2, TrendingUp, Users, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useContactDialog } from "@/contexts/contact-dialog-context"

export function HeroSection() {
  const [email, setEmail] = useState("");
  const { setIsOpen } = useContactDialog();

  const handleContactClick = () => {
    setIsOpen(true);
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
      className="relative flex items-center overflow-hidden -mt-4"
      style={{ height: 'calc(100vh - 4rem)', paddingTop: '8rem', paddingBottom: '5rem' }}
    >
      {/* Clean Linear Background - Seamless with header */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">

          {/* Left Column - Header Content */}
          <AnimatedSection>
            <div className="space-y-8 text-left">

              {/* Main Headline */}
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">Investing</span> in the Future
              </h1>

              {/* Subtitle */}
              <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-xl">
                CapEdge Group, Inc. is a private investment firm focused on strategic investments in enterprise software and Businesses. We partner with management teams to build transformational solutions.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium text-lg transition-colors duration-200 shadow-lg"
                >
                  Partner with us
                </button>
              </div>


            </div>
          </AnimatedSection>

          {/* Right Column - Main Illustration */}
          <AnimatedSection delay={0.3}>
            <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] lg:h-[500px] overflow-visible">

              {/* Photorealistic Background Base with depth */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-2xl border border-gray-200/30"
                   style={{
                     background: `
                       linear-gradient(135deg,
                         #f8fafc 0%,
                         #ffffff 25%,
                         #f1f5f9 50%,
                         #e2e8f0 75%,
                         #cbd5e1 100%
                       ),
                       radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                       radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)
                     `,
                     boxShadow: `
                       0 25px 50px -12px rgba(0, 0, 0, 0.15),
                       0 0 0 1px rgba(255, 255, 255, 0.8),
                       inset 0 1px 0 rgba(255, 255, 255, 0.9),
                       inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                     `
                   }} />

              {/* Ambient lighting effects */}
              <div className="absolute top-0 left-0 right-0 h-[200px] sm:h-[300px] bg-gradient-to-b from-blue-50/40 via-transparent to-transparent rounded-t-2xl sm:rounded-t-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-[150px] sm:h-[200px] bg-gradient-to-t from-slate-100/60 via-transparent to-transparent rounded-b-2xl sm:rounded-b-3xl" />

              {/* Main Interface Window - Photorealistic with glass effect */}
              <div className="absolute top-8 sm:top-12 left-2 sm:left-4 lg:left-8 w-[95%] sm:w-[90%] lg:w-[650px] max-w-[650px] rounded-xl sm:rounded-2xl overflow-hidden z-10"
                   style={{
                     background: `
                       linear-gradient(145deg,
                         rgba(255, 255, 255, 0.95) 0%,
                         rgba(255, 255, 255, 0.85) 50%,
                         rgba(248, 250, 252, 0.9) 100%
                       )
                     `,
                     backdropFilter: 'blur(20px) saturate(180%)',
                     border: '1px solid rgba(255, 255, 255, 0.3)',
                     boxShadow: `
                       0 32px 64px -12px rgba(0, 0, 0, 0.2),
                       0 0 0 1px rgba(255, 255, 255, 0.5),
                       inset 0 1px 0 rgba(255, 255, 255, 0.8),
                       inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                     `
                   }}>

                {/* Header Bar - Photorealistic glass effect */}
                <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-white/20"
                     style={{
                       background: `
                         linear-gradient(90deg,
                           rgba(248, 250, 252, 0.8) 0%,
                           rgba(241, 245, 249, 0.6) 50%,
                           rgba(248, 250, 252, 0.8) 100%
                         )
                       `,
                       backdropFilter: 'blur(10px)',
                       borderBottom: '1px solid rgba(226, 232, 240, 0.3)'
                     }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full"
                         style={{
                           background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                           boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                         }} />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm" style={{ color: '#374151' }}>CapEdge Group</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs hidden sm:block" style={{ color: '#6b7280' }}>Portfolio Dashboard</span>
                    <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center"
                         style={{
                           background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                           boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                         }}>
                      <span className="text-white text-xs font-bold">CG</span>
                    </div>
                  </div>
                </div>

                {/* Content Sections Inside */}
                <div className="px-3 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-8">

                  {/* Introduction Section - Photorealistic card */}
                  <div className="space-y-3 sm:space-y-4 rounded-lg sm:rounded-xl p-3 sm:p-4 w-full sm:w-3/4"
                       style={{
                         background: `
                           linear-gradient(135deg,
                             rgba(248, 250, 252, 0.9) 0%,
                             rgba(241, 245, 249, 0.8) 50%,
                             rgba(226, 232, 240, 0.7) 100%
                           )
                         `,
                         border: '1px solid rgba(226, 232, 240, 0.4)',
                         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                       }}>
                    <h3 className="text-sm sm:text-lg font-semibold text-start" style={{ color: '#111827' }}>Enterprise Software Focus</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="h-2 sm:h-3 rounded-full w-4/5" style={{ background: 'linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%)' }} />
                      <div className="h-2 sm:h-3 rounded-full w-5/5" style={{ background: 'linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%)' }} />
                      <div className="h-2 sm:h-3 rounded-full w-1/3" style={{ background: 'linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%)' }} />
                    </div>
                  </div>

                  {/* Goal Section with Progress Bar - Photorealistic */}
                  <div className="space-y-3 sm:space-y-4 rounded-lg sm:rounded-xl p-3 sm:p-4 w-full sm:w-3/4"
                       style={{
                         background: `
                           linear-gradient(135deg,
                             rgba(255, 255, 255, 0.95) 0%,
                             rgba(248, 250, 252, 0.9) 100%
                           )
                         `,
                         border: '1px solid rgba(226, 232, 240, 0.3)',
                         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                       }}>
                    <h3 className="text-sm sm:text-lg font-semibold text-start" style={{ color: '#111827' }}>Portfolio Growth</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="w-full rounded-full h-2 sm:h-3"
                           style={{
                             background: 'linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 100%)',
                             boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
                           }}>
                        <div className="h-2 sm:h-3 rounded-full w-3/4"
                             style={{
                               background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
                               boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                             }} />
                      </div>
                      <div className="h-2 sm:h-3 rounded-full w-full" style={{ background: 'linear-gradient(90deg, #f9fafb 0%, #f3f4f6 100%)' }} />
                      <div className="h-2 sm:h-3 rounded-full w-4/5" style={{ background: 'linear-gradient(90deg, #f9fafb 0%, #f3f4f6 100%)' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Selection Panel - Photorealistic glass effect */}
              <div className="hidden sm:block absolute top-24 lg:top-32 right-2 sm:right-4 lg:right-12 w-[240px] sm:w-[280px] lg:w-[300px] rounded-xl sm:rounded-2xl overflow-visible z-20"
                   style={{
                     background: `
                       linear-gradient(145deg,
                         rgba(255, 255, 255, 0.95) 0%,
                         rgba(255, 255, 255, 0.85) 50%,
                         rgba(248, 250, 252, 0.9) 100%
                       )
                     `,
                     backdropFilter: 'blur(20px) saturate(180%)',
                     border: '1px solid rgba(255, 255, 255, 0.3)',
                     boxShadow: `
                       0 25px 50px -12px rgba(0, 0, 0, 0.25),
                       0 0 0 1px rgba(255, 255, 255, 0.5),
                       inset 0 1px 0 rgba(255, 255, 255, 0.8)
                     `
                   }}>

                {/* Selection Panel Header - Photorealistic */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b"
                     style={{
                       background: `
                         linear-gradient(90deg,
                           rgba(248, 250, 252, 0.8) 0%,
                           rgba(241, 245, 249, 0.6) 50%,
                           rgba(248, 250, 252, 0.8) 100%
                         )
                       `,
                       borderBottom: '1px solid rgba(226, 232, 240, 0.3)'
                     }}>
                  <h3 className="text-sm sm:text-lg font-semibold text-start" style={{ color: '#111827' }}>Investment Focus</h3>
                </div>

                {/* Interactive Selection Cards - 2x2 Grid */}
                <div className="p-3 sm:p-6">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 relative"
                       style={{
                         background: 'rgba(255, 255, 255, 0.3)',
                         backdropFilter: 'blur(10px)'
                       }}>

                    {/* Card 1 - Enterprise Software (HOVERED/ELEVATED) - Photorealistic */}
                    <div className="relative transform -translate-y-2 sm:-translate-y-4 rounded-lg sm:rounded-xl p-3 sm:p-5 cursor-pointer z-30 transition-all duration-200"
                         style={{
                           background: `
                             linear-gradient(135deg,
                               rgba(255, 255, 255, 0.98) 0%,
                               rgba(248, 250, 252, 0.95) 100%
                             )
                           `,
                           boxShadow: `
                             0 20px 40px rgba(0, 0, 0, 0.15),
                             0 0 0 1px rgba(255, 255, 255, 0.6),
                             inset 0 1px 0 rgba(255, 255, 255, 0.9)
                           `
                         }}>
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-md sm:rounded-lg mb-2 sm:mb-4 flex items-center justify-center"
                           style={{
                             background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                             boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                           }}>
                        <Building2 className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#3b82f6' }} />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold" style={{ color: '#111827' }}>Enterprise Software</div>
                    </div>

                    {/* Card 2 - Financial Services - Photorealistic */}
                    <div className="rounded-lg sm:rounded-xl p-3 sm:p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                         style={{
                           background: `
                             linear-gradient(135deg,
                               rgba(248, 250, 252, 0.9) 0%,
                               rgba(241, 245, 249, 0.8) 100%
                             )
                           `,
                           border: '1px solid rgba(226, 232, 240, 0.4)',
                           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                         }}>
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-md sm:rounded-lg mb-2 sm:mb-4 flex items-center justify-center"
                           style={{
                             border: '1px solid rgba(226, 232, 240, 0.4)',
                             background: 'rgba(255, 255, 255, 0.8)'
                           }}>
                        <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#374151' }} />
                      </div>
                      <div className="text-xs sm:text-sm font-medium" style={{ color: '#374151' }}>Financial Services</div>
                    </div>

                    {/* Card 3 - Portfolio Management - Photorealistic */}
                    <div className="rounded-lg sm:rounded-xl p-3 sm:p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                         style={{
                           background: `
                             linear-gradient(135deg,
                               rgba(248, 250, 252, 0.85) 0%,
                               rgba(241, 245, 249, 0.9) 100%
                             )
                           `,
                           border: '1px solid rgba(226, 232, 240, 0.4)',
                           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                         }}>
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-md sm:rounded-lg mb-2 sm:mb-4 flex items-center justify-center"
                           style={{
                             border: '1px solid rgba(226, 232, 240, 0.4)',
                             background: 'rgba(255, 255, 255, 0.8)'
                           }}>
                        <Users className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#374151' }} />
                      </div>
                      <div className="text-xs sm:text-sm font-medium" style={{ color: '#374151' }}>Portfolio Management</div>
                    </div>

                    {/* Card 4 - Technology Solutions - Photorealistic */}
                    <div className="rounded-lg sm:rounded-xl p-3 sm:p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                         style={{
                           background: `
                             linear-gradient(135deg,
                               rgba(248, 250, 252, 0.9) 0%,
                               rgba(241, 245, 249, 0.8) 100%
                             )
                           `,
                           border: '1px solid rgba(226, 232, 240, 0.4)',
                           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                         }}>
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-md sm:rounded-lg mb-2 sm:mb-4 flex items-center justify-center"
                           style={{
                             border: '1px solid rgba(226, 232, 240, 0.4)',
                             background: 'rgba(255, 255, 255, 0.8)'
                           }}>
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#374151' }} />
                      </div>
                      <div className="text-xs sm:text-sm font-medium" style={{ color: '#374151' }}>Technology Solutions</div>
                    </div>

                    {/* Mouse Cursor - Positioned over the elevated card */}
                    <div className="absolute top-0.5 sm:top-1 left-16 sm:left-20 z-40 pointer-events-none transition-all">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 transform rotate-12" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1f2937' }}>
                        <path d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overflowing Cards - Photorealistic floating cards */}
              {/* Left Overflow Card - Portfolio */}
              <div className="hidden lg:block absolute -top-10 -left-8 w-32 rounded-xl p-3 transform rotate-0 z-10 "
                   style={{
                     background: `
                       linear-gradient(135deg,
                         rgba(255, 255, 255, 0.95) 0%,
                         rgba(248, 250, 252, 0.9) 100%
                       )
                     `,
                     backdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.3)',
                     boxShadow: `
                       0 20px 40px rgba(0, 0, 0, 0.15),
                       0 0 0 1px rgba(255, 255, 255, 0.5),
                       inset 0 1px 0 rgba(255, 255, 255, 0.8)
                     `
                   }}>
                <div className="w-6 h-6 rounded-lg mb-2 flex items-center justify-center"
                     style={{
                       background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                       boxShadow: '0 4px 8px rgba(99, 102, 241, 0.3)'
                     }}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs font-medium" style={{ color: '#374151' }}>Portfolio</span>
              </div>

              {/* Right Overflow Card - Extending beyond floating panel */}
              <div className="hidden lg:block absolute top-2 -right-12 w-36 rounded-xl p-3 transform -rotate-3 z-25"
                   style={{
                     background: `
                       linear-gradient(135deg,
                         rgba(255, 255, 255, 0.95) 0%,
                         rgba(248, 250, 252, 0.9) 100%
                       )
                     `,
                     backdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.3)',
                     boxShadow: `
                       0 20px 40px rgba(0, 0, 0, 0.15),
                       0 0 0 1px rgba(255, 255, 255, 0.5),
                       inset 0 1px 0 rgba(255, 255, 255, 0.8)
                     `
                   }}>
                <div className="w-6 h-6 rounded-lg mb-2 flex items-center justify-center"
                     style={{
                       background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                       boxShadow: '0 4px 8px rgba(20, 184, 166, 0.3)'
                     }}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium" style={{ color: '#374151' }}>Analytics</span>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
