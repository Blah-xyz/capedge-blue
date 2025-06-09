"use client";

import { AnimatedSection } from "@/components/animated-section";

export function StepsSection() {
	return (
		<section id="steps" className="py-24 bg-[#002236]">
			<div className="px-6 md:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<AnimatedSection className="max-w-xl mb-16">
						<div className="text-sm text-blue-400 mb-2">HOW IT WORKS</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
							Start your investment journey with Blue Water Equity.
						</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Step 1 */}
						<AnimatedSection delay={0.1} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-colors duration-300">
								<div className="text-[120px] font-bold text-blue-400/20 leading-none absolute -top-10 left-6">
									1
								</div>
								<div className="relative">
									<h3 className="text-xl font-semibold text-white mb-3">
										Initial Consultation
									</h3>
									<p className="text-blue-100/70">
										Connect with our team to discuss your investment goals and
										explore opportunities.
									</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 2 */}
						<AnimatedSection delay={0.2} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-colors duration-300">
								<div className="text-[120px] font-bold text-blue-400/20 leading-none absolute -top-10 left-6">
									2
								</div>
								<div className="relative">
									<h3 className="text-xl font-semibold text-white mb-3">
										Strategic Planning
									</h3>
									<p className="text-blue-100/70">
										Develop a customized investment strategy aligned with
										Caribbean market opportunities.
									</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 3 */}
						<AnimatedSection delay={0.3} className="relative group">
							<div className="bg-[#002D47] rounded-3xl p-8 h-full transition-colors duration-300">
								<div className="text-[120px] font-bold text-blue-400/20 leading-none absolute -top-10 left-6">
									3
								</div>
								<div className="relative">
									<h3 className="text-xl font-semibold text-white mb-3">
										Active Growth
									</h3>
									<p className="text-blue-100/70">
										Watch your investment grow while we provide ongoing support
										and strategic guidance.
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
