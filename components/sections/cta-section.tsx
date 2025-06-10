"use client";

import { AnimatedButton } from "@/components/animated-button";
import { AnimatedSection } from "@/components/animated-section";
import { useContactDialog } from "@/contexts/contact-dialog-context";
import { ArrowRight } from "lucide-react";

export function CTASection() {
	const { setIsOpen } = useContactDialog();

	return (
		<section id="contact" className="mb-10">
			<div className="container">
				<div className="relative rounded-3xl bg-[#002236] p-12 md:p-16">
					<div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
						<AnimatedSection className="max-w-xl">
							<div className="text-sm text-blue-400 mb-2">TRY IT NOW</div>
							<h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
							Build Great

						
							</h2>
							<p className="mt-4 text-gray-400 max-w-md">
							Partner with CapEdge Group to build and scale transformational
technology platforms that reshape key markets through strategic
collaboration and hands-on expertise.

							</p>
						</AnimatedSection>
						<div className="mt-8 md:mt-0 flex flex-wrap gap-4 md:flex-shrink-0">
							<AnimatedButton
								className="bg-blue-500 text-white hover:bg-blue-600"
								onClick={() => setIsOpen(true)}
							>
								Get Started Now
							</AnimatedButton>
							<AnimatedButton
								variant="outline"
								className="text-white border-gray-700 bg-gray-800 gap-2"
								onClick={() => setIsOpen(true)}
							>
								Learn More
								<ArrowRight className="h-4 w-4" />
							</AnimatedButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
