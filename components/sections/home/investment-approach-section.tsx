"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Search, Brain, Target, CheckCircle } from "lucide-react";

export function InvestmentApproachSection() {
	return (
		<section
			id="investment-approach"
			className="py-24 bg-[#002236] dark:bg-[#001a2e]"
		>
			<div className="px-6 md:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<AnimatedSection className="max-w-3xl mb-16">
						<div className="text-sm text-blue-400 mb-2">INVESTMENT PHILOSOPHY</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
							Our Investment Approach
						</h2>
						<p className="text-lg text-blue-100/70">
							Three focused steps to identify transformational opportunities in financial services and technology.
						</p>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Step 1 - DEEPEN */}
						<AnimatedSection delay={0.1} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-all duration-300 hover:bg-[#003355] border border-blue-900/30 hover:border-blue-700/50">
								<div className="absolute -top-10 left-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
									<Search className="w-6 h-6 text-white" />
								</div>
								<div className="relative">
									<div className="mb-6 pt-4">
										<h3 className="text-2xl font-bold text-white mb-1">
											DEEPEN
										</h3>
										<p className="text-blue-400 text-sm">Knowledge & Understanding</p>
									</div>
									<p className="text-blue-100/70 mb-6">
										Stay ahead through comprehensive market research and trend analysis.
									</p>
								
								</div>
							</div>
						</AnimatedSection>

						{/* Step 2 - UNDERSTAND */}
						<AnimatedSection delay={0.2} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-all duration-300 hover:bg-[#003355] border border-blue-900/30 hover:border-blue-700/50">
								<div className="absolute -top-10 left-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
									<Brain className="w-6 h-6 text-white" />
								</div>
								<div className="relative">
									<div className="mb-6 pt-4">
										<h3 className="text-2xl font-bold text-white mb-1">
											UNDERSTAND
										</h3>
										<p className="text-blue-400 text-sm">Operational Challenges</p>
									</div>
									<p className="text-blue-100/70 mb-6">
										Identify operational challenges and transformational opportunities.
									</p>

								</div>
							</div>
						</AnimatedSection>

						{/* Step 3 - INVEST */}
						<AnimatedSection delay={0.3} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-all duration-300 hover:bg-[#003355] border border-blue-900/30 hover:border-blue-700/50">
								<div className="absolute -top-10 left-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
									<Target className="w-6 h-6 text-white" />
								</div>
								<div className="relative">
									<div className="mb-6 pt-4">
										<h3 className="text-2xl font-bold text-white mb-1">
											INVEST
										</h3>
										<p className="text-blue-400 text-sm">Promising Solutions</p>
									</div>
									<p className="text-blue-100/70 mb-6">
										Target businesses with transformational technology and financial services focus.
									</p>

								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</div>
		</section>
	);
}
