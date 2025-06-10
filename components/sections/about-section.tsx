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
			className="relative py-24 overflow-visible bg-white dark:bg-gray-900"
		>
			<div className="container relative mx-auto px-4 max-w-7xl">
				{/* Two Column Layout */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">

					{/* Left Column - Content */}
					<AnimatedSection>
						<div className="space-y-8">
							<div className="text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-wide">INVESTMENT APPROACH</div>
							<h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white">
								Investment Philosophy
								<br />
								that drives results.
							</h2>
							<p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
								Our systematic approach to investing is built on three guiding principles that ensure sustainable growth and transformational impact.
							</p>
						</div>
					</AnimatedSection>

					{/* Right Column - Three Points */}
					<AnimatedSection delay={0.3}>
						<div className="space-y-8">
							{/* Deepening Knowledge */}
							<div className="flex items-center space-x-4 group">
								<div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									Deepening our knowledge and understanding of the business
								</h3>
							</div>

							{/* Understanding Challenges */}
							<div className="flex items-center space-x-4 group">
								<div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									Understanding operational challenges
								</h3>
							</div>

							{/* Investing in Solutions */}
							<div className="flex items-center space-x-4 group">
								<div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									Investing in promising solutions
								</h3>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
