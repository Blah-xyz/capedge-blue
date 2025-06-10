"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Search, Brain, Target, CheckCircle } from "lucide-react";

export function InvestmentApproachSection() {
	return (
		<section
			id="investment-approach"
			className="relative pt-0 lg:pt-20 pb-16 overflow-visible bg-white dark:bg-gray-900"
		>
			<div className="px-6 md:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<AnimatedSection className="mx-auto">
						<div className="bg-[#002236] dark:bg-[#001a2e] rounded-2xl shadow-2xl p-8 lg:p-12 max-w-6xl mx-auto">
							<div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
								{/* Left Content */}
								<div className="space-y-6">
									<div className="text-sm text-blue-400 font-semibold tracking-wide">INVESTMENT PHILOSOPHY</div>
									<h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
										Our Investment
										<br />
										Approach
									</h2>
								</div>

								{/* Right Content */}
								<div className="space-y-6">
									<p className="text-blue-100/70 leading-relaxed">
										Three focused steps to identify transformational opportunities in financial services and technology.
									</p>
								</div>
							</div>

							{/* Feature Cards */}
							<div className="grid md:grid-cols-3 gap-8">
								{/* DEEPEN */}
								<div className="space-y-6">
									<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Search className="w-6 h-6 text-blue-400" />
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-white">DEEPEN</h3>
										<p className="text-blue-100/60 text-sm leading-relaxed">
											Stay ahead through comprehensive market research and trend analysis.
										</p>
									</div>
								</div>

								{/* UNDERSTAND */}
								<div className="space-y-6">
									<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Brain className="w-6 h-6 text-blue-400" />
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-white">UNDERSTAND</h3>
										<p className="text-blue-100/60 text-sm leading-relaxed">
											Identify operational challenges and transformational opportunities.
										</p>
									</div>
								</div>

								{/* INVEST */}
								<div className="space-y-6">
									<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Target className="w-6 h-6 text-blue-400" />
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-white">INVEST</h3>
										<p className="text-blue-100/60 text-sm leading-relaxed">
											Target businesses with transformational technology and financial services focus.
										</p>
									</div>
								</div>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
