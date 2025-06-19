"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Counter } from "../Counter";

export function WhyUsSection() {
	return (
		<section id="why-us" className="py-16  bg-transparent">
			<div className="container">
				<AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
						Why CapEdge Group
					</h2>
				</AnimatedSection>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Investment Success Card */}
					<AnimatedSection
						delay={0.1}
						className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900/40 dark:to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 dark:border dark:border-gray-800"
					>
						<div className="space-y-4">
							<div className="relative">
								<Counter
									target={17}
									duration={2000}
									suffix="+"
									className="text-5xl font-bold text-blue-600 dark:text-blue-400"
								/>
								<svg
									className="absolute -right-4 -top-4 w-16 h-16 text-blue-200 dark:text-blue-900/30"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-label="Investment success icon"
								>
									<path
										d="M12 2L2 7L12 12L22 7L12 2Z"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M2 17L12 22L22 17"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M2 12L12 17L22 12"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="text-xl font-semibold dark:text-gray-100">
								Successful Investments
							</div>
							<p className="text-gray-600 dark:text-gray-400">
								Proven track record in enterprise software and business investments
							</p>
						</div>
					</AnimatedSection>

					{/* Strategic Support Card */}
					<AnimatedSection
						delay={0.2}
						className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900/40 dark:to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 dark:border dark:border-gray-800"
					>
						<div className="space-y-4">
							<div className="relative">
								<Counter
									target={137}
									duration={2000}
									prefix=""
									suffix="%"
									className="text-5xl font-bold text-blue-600 dark:text-blue-400"
								/>
								<svg
									className="absolute -right-4 -top-4 w-16 h-16 text-blue-200 dark:text-blue-900/30"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-label="Strategic support icon"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12 6V12L16 14"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="text-xl font-semibold dark:text-gray-100">
								Transactions Processed
							</div>
							<p className="text-gray-600 dark:text-gray-400">
								Total transaction volume processed through our portfolio platforms
							</p>
						</div>
					</AnimatedSection>

					{/* Growth Chart Card */}
					<AnimatedSection
						delay={0.3}
						className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900/40 dark:to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 dark:border dark:border-gray-800"
					>
						<div className="space-y-4">
							<div className="relative">
								<Counter
									target={99.9}
									duration={2000}
									suffix="%"
									className="text-5xl font-bold text-blue-600 dark:text-blue-400"
								/>
								<svg
									className="absolute -right-4 -top-4 w-16 h-16 text-blue-200 dark:text-blue-900/30"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									aria-label="Growth rate icon"
								>
									<path
										d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3 10H21"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8 14H10"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M14 14H16"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="text-xl font-semibold dark:text-gray-100">
								Success Rate
							</div>
							<p className="text-gray-600 dark:text-gray-400">
								Exceptional success rate across our enterprise software investment portfolio
							</p>
						</div>
					</AnimatedSection>
				</div>

				{/* Large Feature Card */}
				<AnimatedSection delay={0.4} className="mt-8">
					<div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-gray-900/40 dark:to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 shadow-sm dark:border dark:border-gray-800">
						<div className="grid md:grid-cols-2 gap-8 items-start">
							{/* Left side with Technology Excellence content */}
							<div className="space-y-4 pt-4 relative">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
									Technology Excellence
								</h2>
								<p className="text-gray-600 dark:text-gray-400">
									Drive digital transformation through strategic investments in enterprise
									software and financial technology. Our portfolio companies have and continues to trend at a growth rate
									and rate of return investment of 100%+ with a 99.9% success rate.
								</p>
								<div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-500 rounded-full" />


								{/* Decorative Shapes */}
								<div className="absolute -bottom-48 left-0 right-0 h-32 overflow-hidden">
									<div className="absolute inset-0 flex items-center justify-center">
										<svg
											className="w-full h-full"
											viewBox="0 0 1000 100"
											preserveAspectRatio="none"
										>
											<title>Decorative shapes</title>

											{/* Glowing effect filter */}
											<defs>
												<filter
													id="glow"
													x="-50%"
													y="-50%"
													width="200%"
													height="200%"
												>
													<feGaussianBlur stdDeviation="2" result="blur" />
													<feComposite
														in="SourceGraphic"
														in2="blur"
														operator="over"
													/>
												</filter>
											</defs>

											{/* Animated circles with glow */}
											<circle
												cx="200"
												cy="50"
												r="8"
												className="fill-blue-400/30 dark:fill-blue-500/30 animate-pulse"
												style={{ animationDelay: "0s" }}
												filter="url(#glow)"
											/>
											<circle
												cx="400"
												cy="30"
												r="6"
												className="fill-cyan-400/30 dark:fill-cyan-500/30 animate-pulse"
												style={{ animationDelay: "0.5s" }}
												filter="url(#glow)"
											/>
											<circle
												cx="600"
												cy="70"
												r="10"
												className="fill-blue-600/30 dark:fill-blue-400/30 animate-pulse"
												style={{ animationDelay: "1s" }}
												filter="url(#glow)"
											/>
											<circle
												cx="800"
												cy="40"
												r="7"
												className="fill-cyan-500/30 dark:fill-cyan-400/30 animate-pulse"
												style={{ animationDelay: "1.5s" }}
												filter="url(#glow)"
											/>

											{/* Additional floating circles */}
											<circle
												cx="300"
												cy="20"
												r="4"
												className="fill-blue-300/20 dark:fill-blue-600/20 animate-pulse"
												style={{ animationDelay: "0.3s" }}
											/>
											<circle
												cx="700"
												cy="15"
												r="5"
												className="fill-cyan-300/20 dark:fill-cyan-600/20 animate-pulse"
												style={{ animationDelay: "0.7s" }}
											/>

											{/* Main decorative waves */}
											<path
												d="M0 80 Q 250 40, 500 80 T 1000 80"
												className="stroke-blue-200/50 dark:stroke-blue-800/50"
												fill="none"
												strokeWidth="2"
											/>
											<path
												d="M0 60 Q 250 20, 500 60 T 1000 60"
												className="stroke-cyan-200/30 dark:stroke-cyan-800/30"
												fill="none"
												strokeWidth="1.5"
											/>

											{/* Additional creative waves */}
											<path
												d="M0 90 Q 125 70, 250 90 T 500 90 T 750 90 T 1000 90"
												className="stroke-blue-300/20 dark:stroke-blue-700/20"
												fill="none"
												strokeWidth="1"
											/>
											<path
												d="M0 40 Q 125 60, 250 40 T 500 40 T 750 40 T 1000 40"
												className="stroke-cyan-300/20 dark:stroke-cyan-700/20"
												fill="none"
												strokeWidth="1"
											/>

											{/* Dotted wave pattern */}
											<path
												d="M0 30 Q 250 10, 500 30 T 1000 30"
												className="stroke-blue-400/20 dark:stroke-blue-500/20"
												fill="none"
												strokeWidth="1"
												strokeDasharray="2 4"
											/>

											{/* Gradient wave */}
											<path
												d="M0 50 Q 250 30, 500 50 T 1000 50"
												className="stroke-blue-400/30 dark:stroke-blue-500/30"
												fill="none"
												strokeWidth="1.5"
											/>
										</svg>
									</div>
								</div>
							</div>
					
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
