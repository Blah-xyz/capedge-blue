"use client";

import { AnimatedSection } from "@/components/animated-section";
import { useContactDialog } from "@/contexts/contact-dialog-context";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatWeDoSection() {
	const { setIsOpen } = useContactDialog();

	return (
		<section
			id="what-we-do"
			className="relative  overflow-hidden "
		>
			{/* Refined Background Elements - Subtle and Sophisticated */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>


			<div className="container relative max-w-7xl mx-auto px-4">

				{/* Enhanced CTA Section with Deep Background */}
				<AnimatedSection delay={0.4} className="text-center">
					<div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 rounded-3xl p-12 lg:p-16 border border-blue-500/30 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.2),0_10px_20px_-5px_rgba(59,130,246,0.3)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.4),0_10px_20px_-5px_rgba(59,130,246,0.2)] overflow-hidden">
						{/* Background Pattern */}
						<div className="absolute inset-0 opacity-10">
							<svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
								<path d="M0,50 Q100,25 200,50 T400,50" stroke="white" strokeWidth="2" fill="none"/>
								<path d="M0,100 Q150,75 300,100 T600,100" stroke="white" strokeWidth="1" fill="none"/>
								<path d="M0,150 Q200,125 400,150 T800,150" stroke="white" strokeWidth="1" fill="none"/>
							</svg>
						</div>

						{/* Floating Elements */}
						<div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-2xl rotate-12"></div>
						<div className="absolute bottom-6 left-6 w-12 h-12 bg-white/5 rounded-xl rotate-45"></div>

						<div className="relative z-10">
							<h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
								Ready to transform your
								<span className="block bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
									enterprise technology?
								</span>
							</h3>

							<p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
								Connect with our investment team to explore partnership opportunities and discuss how we can collaborate on your next transformational technology initiative.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Button
									onClick={() => setIsOpen(true)}
									className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-white/20 hover:shadow-2xl hover:shadow-white/30 border-2 border-white/20 hover:border-white/40"
								>
									Start a Conversation
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>

								<div className="flex items-center gap-2 text-blue-100">
									<div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
									<span className="text-sm font-medium">Available for immediate consultation</span>
								</div>
							</div>
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
