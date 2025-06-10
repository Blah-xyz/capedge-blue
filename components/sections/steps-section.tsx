"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Search, Brain, Target, CheckCircle } from "lucide-react";

export function StepsSection() {
	return (
		<section id="steps" className="py-24 bg-[#002236]">
			<div className="px-6 md:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<AnimatedSection className="max-w-4xl mb-16">
						<div className="text-sm text-blue-400 mb-2">INVESTMENT PHILOSOPHY</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
							Our Investment Approach
						</h2>
						<p className="text-xl text-blue-100/80 leading-relaxed">
							We follow a disciplined three-step approach to identify and invest in transformational opportunities
							where financial services is core and technology can drive meaningful change.
						</p>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Step 1 - DEEPEN */}
						<AnimatedSection delay={0.1} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-all duration-300 hover:bg-[#003355] border border-blue-900/30 hover:border-blue-700/50">
								<div className="text-[120px] font-bold text-blue-400/20 leading-none absolute -top-10 left-6">
									1
								</div>
								<div className="relative">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
											<Search className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-white mb-1">
												DEEPEN
											</h3>
											<p className="text-blue-400 text-sm font-medium">Knowledge & Understanding</p>
										</div>
									</div>
									<p className="text-blue-100/80 mb-6 leading-relaxed">
										We stay ahead of emerging trends and market dynamics through comprehensive research
										and deep industry expertise development.
									</p>
									<div className="space-y-3">
										{[
											"Comprehensive market research",
											"Technology trend analysis",
											"Industry expertise development",
											"Competitive landscape mapping"
										].map((feature, index) => (
											<div key={index} className="flex items-center gap-3">
												<CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
												<span className="text-blue-100/70 text-sm">{feature}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 2 - UNDERSTAND */}
						<AnimatedSection delay={0.2} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-all duration-300 hover:bg-[#003355] border border-blue-900/30 hover:border-blue-700/50">
								<div className="text-[120px] font-bold text-blue-400/20 leading-none absolute -top-10 left-6">
									2
								</div>
								<div className="relative">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
											<Brain className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-white mb-1">
												UNDERSTAND
											</h3>
											<p className="text-blue-400 text-sm font-medium">Operational Challenges</p>
										</div>
									</div>
									<p className="text-blue-100/80 mb-6 leading-relaxed">
										We understand the most prominent operational challenges facing organizations,
										identifying pain points and opportunities for transformational solutions.
									</p>
									<div className="space-y-3">
										{[
											"Operational challenge assessment",
											"Process optimization analysis",
											"Technology gap identification",
											"Strategic opportunity mapping"
										].map((feature, index) => (
											<div key={index} className="flex items-center gap-3">
												<CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
												<span className="text-blue-100/70 text-sm">{feature}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 3 - INVEST */}
						<AnimatedSection delay={0.3} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-all duration-300 hover:bg-[#003355] border border-blue-900/30 hover:border-blue-700/50">
								<div className="text-[120px] font-bold text-blue-400/20 leading-none absolute -top-10 left-6">
									3
								</div>
								<div className="relative">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
											<Target className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-white mb-1">
												INVEST
											</h3>
											<p className="text-blue-400 text-sm font-medium">Promising Solutions</p>
										</div>
									</div>
									<p className="text-blue-100/80 mb-6 leading-relaxed">
										We invest in businesses that offer solutions through promising technologies, services,
										talent, and values, where financial services is core and technology can be transformational.
									</p>
									<div className="space-y-3">
										{[
											"Strategic technology solutions",
											"Value-driven partnerships",
											"Transformational outcomes",
											"Financial services innovation"
										].map((feature, index) => (
											<div key={index} className="flex items-center gap-3">
												<CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
												<span className="text-blue-100/70 text-sm">{feature}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</div>
		</section>
	);
}
