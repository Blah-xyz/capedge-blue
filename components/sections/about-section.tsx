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
			className="relative -mt-32 lg:-mt-40 pt-0 lg:pt-20 pb-0 overflow-visible"
		>
			<div className="container relative">
				<AnimatedSection className="mx-auto">
					<div className="bg-white dark:bg-gray-800/90 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 lg:p-12">
						<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
							{/* Left Column */}
							<div className="space-y-6">
								<div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-sm text-blue-800 dark:text-blue-300">
									Investment Approach
								</div>
								<h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
									Strategic investments <br className="hidden sm:block" />
									across the Caribbean
								</h2>
								<p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">
									A family office focused on transformative investments in
									startups and private equity opportunities, fostering
									sustainable growth across the Caribbean region.
								</p>
								<div className="relative h-40 w-full overflow-hidden">
									<svg
										className="absolute inset-0 w-full h-full"
										viewBox="0 0 400 200"
										preserveAspectRatio="none"
										aria-label="Decorative investment growth visualization"
									>
										{/* Dynamic Market Lines */}
										<path
											className="animate-market-line"
											d="M0,150 Q50,120 100,140 T200,130 T300,145 T400,135"
											fill="none"
											stroke="url(#marketGradient)"
											strokeWidth="1.5"
											strokeDasharray="4 4"
										/>

										{/* Growth Islands */}
										<g className="animate-float-slow">
											<path
												d="M80,100 Q90,80 100,100 T120,100 T140,100"
												fill="url(#islandGradient1)"
												className="animate-pulse-slow"
											/>
											<path
												d="M220,80 Q230,60 240,80 T260,80 T280,80"
												fill="url(#islandGradient2)"
												className="animate-pulse-slow"
											/>
											<path
												d="M320,120 Q330,100 340,120 T360,120 T380,120"
												fill="url(#islandGradient3)"
												className="animate-pulse-slow"
											/>
										</g>

										{/* Investment Growth Curves */}
										<g className="animate-grow">
											<path
												d="M50,180 C70,160 90,170 110,150 C130,130 150,140 170,120"
												fill="none"
												stroke="url(#growthGradient1)"
												strokeWidth="2"
												className="animate-draw"
											/>
											<path
												d="M200,180 C220,160 240,170 260,150 C280,130 300,140 320,120"
												fill="none"
												stroke="url(#growthGradient2)"
												strokeWidth="2"
												className="animate-draw-delayed"
											/>
										</g>

										{/* Connection Points */}
										<g className="animate-pulse">
											<circle
												cx="110"
												cy="150"
												r="3"
												fill="url(#pointGradient1)"
											/>
											<circle
												cx="260"
												cy="150"
												r="3"
												fill="url(#pointGradient2)"
											/>
											<circle
												cx="320"
												cy="120"
												r="3"
												fill="url(#pointGradient3)"
											/>
										</g>

										{/* Gradients */}
										<defs>
											<linearGradient
												id="marketGradient"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="0%"
											>
												<stop
													offset="0%"
													stopColor="#3B82F6"
													stopOpacity="0.4"
												/>
												<stop
													offset="100%"
													stopColor="#60A5FA"
													stopOpacity="0.4"
												/>
											</linearGradient>

											<linearGradient
												id="islandGradient1"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="100%"
											>
												<stop offset="0%" stopColor="#3B82F6" />
												<stop offset="100%" stopColor="#60A5FA" />
											</linearGradient>

											<linearGradient
												id="islandGradient2"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="100%"
											>
												<stop offset="0%" stopColor="#60A5FA" />
												<stop offset="100%" stopColor="#93C5FD" />
											</linearGradient>

											<linearGradient
												id="islandGradient3"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="100%"
											>
												<stop offset="0%" stopColor="#93C5FD" />
												<stop offset="100%" stopColor="#BFDBFE" />
											</linearGradient>

											<linearGradient
												id="growthGradient1"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="0%"
											>
												<stop
													offset="0%"
													stopColor="#3B82F6"
													stopOpacity="0.6"
												/>
												<stop
													offset="100%"
													stopColor="#60A5FA"
													stopOpacity="0.6"
												/>
											</linearGradient>

											<linearGradient
												id="growthGradient2"
												x1="0%"
												y1="0%"
												x2="100%"
												y2="0%"
											>
												<stop
													offset="0%"
													stopColor="#60A5FA"
													stopOpacity="0.6"
												/>
												<stop
													offset="100%"
													stopColor="#93C5FD"
													stopOpacity="0.6"
												/>
											</linearGradient>

											<radialGradient
												id="pointGradient1"
												cx="50%"
												cy="50%"
												r="50%"
											>
												<stop offset="0%" stopColor="#3B82F6" />
												<stop offset="100%" stopColor="#60A5FA" />
											</radialGradient>

											<radialGradient
												id="pointGradient2"
												cx="50%"
												cy="50%"
												r="50%"
											>
												<stop offset="0%" stopColor="#60A5FA" />
												<stop offset="100%" stopColor="#93C5FD" />
											</radialGradient>

											<radialGradient
												id="pointGradient3"
												cx="50%"
												cy="50%"
												r="50%"
											>
												<stop offset="0%" stopColor="#93C5FD" />
												<stop offset="100%" stopColor="#BFDBFE" />
											</radialGradient>
										</defs>
									</svg>
								</div>
							</div>

							{/* Right Column - Feature Cards */}
							<div className="grid gap-4 sm:gap-6">
								{/* Strategic Investment Card */}
								<div className="group p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
									<div className="flex items-start gap-4">
										<div className="p-2 sm:p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex-shrink-0">
											<Target className="w-5 h-5 sm:w-6 sm:h-6" />
										</div>
										<div className="space-y-2">
											<h3 className="font-semibold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
												Strategic partnerships
											</h3>
											<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
												Long-term partnership approach beyond capital, with
												active involvement in strategic decision-making.
											</p>
										</div>
									</div>
								</div>

								{/* Regional Impact Card */}
								<div className="group p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
									<div className="flex items-start gap-4">
										<div className="p-2 sm:p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex-shrink-0">
											<Globe className="w-5 h-5 sm:w-6 sm:h-6" />
										</div>
										<div className="space-y-2">
											<h3 className="font-semibold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
												Regional impact
											</h3>
											<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
												Creating sustainable impact across 12 Caribbean islands
												through strategic investments and job creation.
											</p>
										</div>
									</div>
								</div>

								{/* Innovation Focus Card */}
								<div className="group p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
									<div className="flex items-start gap-4">
										<div className="p-2 sm:p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex-shrink-0">
											<Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
										</div>
										<div className="space-y-2">
											<h3 className="font-semibold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
												Innovation focus
											</h3>
											<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
												Supporting cutting-edge solutions that address unique
												Caribbean challenges and opportunities.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Partner Logos */}
						<div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-700/50 text-center">
							<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 lg:mb-6">
								Portfolio Companies
							</p>
							<div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center opacity-70">
								<div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200">
									<svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Solar solutions icon">
										<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
									Caribbean Solar Solutions
								</div>
								<div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200">
									<svg className="w-6 h-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Fresh produce icon">
										<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
										<path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="currentColor"/>
									</svg>
									Island Fresh
								</div>
								<div className="flex items-center gap-2 text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200">
									<svg className="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tech innovation icon">
										<path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M8 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M14 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
									CaribbeanTech
								</div>
							</div>
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
