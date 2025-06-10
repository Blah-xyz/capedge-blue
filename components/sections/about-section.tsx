"use client";

import { AnimatedSection } from "@/components/animated-section";
import {
	Anchor,
	ArrowRight,
	BarChart3,
	Compass,
	Globe,
	Heart,
	Ship,
	Sparkles,
	Target,
	Waves,
} from "lucide-react";

export function AboutSection() {
	return (
		<section
			id="about"
			className="relative pt-0 lg:pt-20 pb-16 overflow-visible bg-white dark:bg-gray-900"
		>
			<div className="px-6 md:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<AnimatedSection className="mx-auto">
						<div className="bg-[#002236] dark:bg-[#001a2e] rounded-2xl shadow-2xl p-8 lg:p-12 max-w-6xl mx-auto">
							<div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
								{/* Left Content */}
								<div className="space-y-6">
									<div className="text-sm text-blue-400 font-semibold tracking-wide">INVESTMENT APPROACH</div>
									<h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
										Investment Philosophy
										<br />
										that drives results.
									</h2>
								</div>

								{/* Right Content */}
								<div className="space-y-6">
									<p className="text-blue-100/70 leading-relaxed">
										Our systematic approach to investing is built on three guiding principles that ensure sustainable growth and transformational impact.
									</p>
								</div>
							</div>
							{/* Feature Cards */}
							<div className="grid md:grid-cols-3 gap-8">
								{/* Deepening Knowledge */}
								<div className="space-y-6">
									<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Target className="w-6 h-6 text-blue-400" />
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-white">Deepening our knowledge and understanding of the business</h3>
										<p className="text-blue-100/60 text-sm leading-relaxed">
											Long-term partnership approach beyond capital, with active involvement in strategic decision-making.
										</p>
									</div>
								</div>

								{/* Understanding Challenges */}
								<div className="space-y-6">
									<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Globe className="w-6 h-6 text-blue-400" />
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-white">Understanding operational challenges</h3>
										<p className="text-blue-100/60 text-sm leading-relaxed">
											Creating sustainable impact across 12 Caribbean islands through strategic investments and job creation.
										</p>
									</div>
								</div>

								{/* Investing in Solutions */}
								<div className="space-y-6">
									<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
										<Sparkles className="w-6 h-6 text-blue-400" />
									</div>
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-white">Investing in promising solutions</h3>
										<p className="text-blue-100/60 text-sm leading-relaxed">
											Supporting cutting-edge solutions that address unique Caribbean challenges and opportunities.
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
