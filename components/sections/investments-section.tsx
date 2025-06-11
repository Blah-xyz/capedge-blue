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
									target={25}
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
								Proven track record across the Caribbean region
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
									target={12}
									duration={2000}
									suffix="+"
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
								Strategic Support
							</div>
							<p className="text-gray-600 dark:text-gray-400">
								Active involvement in strategic decision-making and operational
								guidance
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
									target={98}
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
								Growth Rate
							</div>
							<p className="text-gray-600 dark:text-gray-400">
								Focus on long-term value creation and sustainable business
								practices
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
									software and financial technology. Our portfolio companies have processed
									$3B+ in transactions and serve 750K+ active users globally.
								</p>
								<div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-500 rounded-full" />
								<div className="flex gap-8 mt-6">
									<div>
										<Counter
											target={3}
											duration={2000}
											prefix="$"
											suffix="B+"
											className="text-3xl font-bold text-blue-600 dark:text-blue-400"
										/>
										<div className="text-sm text-gray-600 dark:text-gray-400">
											Transactions Processed
										</div>
									</div>
									<div>
										<Counter
											target={750}
											duration={2000}
											suffix="K+"
											className="text-3xl font-bold text-blue-600 dark:text-blue-400"
										/>
										<div className="text-sm text-gray-600 dark:text-gray-400">
											Active Users
										</div>
									</div>
								</div>

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
							{/* Right side with the graph */}
							<div className="relative">
								<div className="aspect-[4/3] rounded-2xl bg-white/80 dark:bg-gray-900/40 p-8 pb-12 shadow-lg dark:border dark:border-gray-800">
									<div className="h-full flex flex-col">
										<div className="flex items-center justify-between mb-4">
											<div className="space-y-1">
												<div className="text-sm font-medium dark:text-gray-400">
													Portfolio Performance
												</div>
												<div className="flex items-center gap-4">
													<Counter
														target={93}
														duration={2000}
														suffix="%"
														className="text-2xl font-bold text-blue-600 dark:text-blue-400"
													/>
													<div className="flex items-center gap-4 text-sm">
														<div className="flex items-center gap-2">
															<div className="w-3 h-3 rounded-full bg-cyan-400" />
															<span className="text-gray-600 dark:text-gray-400">
																Primary Markets
															</span>
														</div>
														<div className="flex items-center gap-2">
															<div className="w-3 h-3 rounded-full bg-blue-600" />
															<span className="text-gray-600 dark:text-gray-400">
																Secondary Markets
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="text-sm text-gray-500 dark:text-gray-500">
												Last 12 Months
											</div>
										</div>

										<div className="flex-1 relative h-[calc(100%-2rem)]">
											<svg
												className="w-full h-full"
												viewBox="0 0 300 180"
												preserveAspectRatio="none"
												role="img"
												aria-label="Portfolio performance chart showing market trends over 12 months"
											>
												<defs>
													<linearGradient
														id="barGradient1"
														x1="0"
														y1="0"
														x2="0"
														y2="1"
													>
														<stop
															offset="0%"
															stopColor="#22D3EE"
															stopOpacity="0.4"
														/>
														<stop
															offset="100%"
															stopColor="#22D3EE"
															stopOpacity="0.05"
														/>
													</linearGradient>
													<linearGradient
														id="barGradient2"
														x1="0"
														y1="0"
														x2="0"
														y2="1"
													>
														<stop
															offset="0%"
															stopColor="#2563EB"
															stopOpacity="0.4"
														/>
														<stop
															offset="100%"
															stopColor="#2563EB"
															stopOpacity="0.05"
														/>
													</linearGradient>
												</defs>

												<g className="text-xs fill-gray-400">
													<text
														x="15"
														y="35"
														className="text-[8px] font-medium"
													>
														100%
													</text>
													<text
														x="15"
														y="75"
														className="text-[8px] font-medium"
													>
														75%
													</text>
													<text
														x="15"
														y="115"
														className="text-[8px] font-medium"
													>
														50%
													</text>
													<text
														x="15"
														y="155"
														className="text-[8px] font-medium"
													>
														25%
													</text>
													<text
														x="15"
														y="175"
														className="text-[8px] font-medium"
													>
														0%
													</text>
												</g>

												<g className="text-gray-200 dark:text-gray-800">
													<path
														d="M40 30 L280 30"
														strokeWidth="0.5"
														stroke="currentColor"
														strokeDasharray="2 2"
													/>
													<path
														d="M40 70 L280 70"
														strokeWidth="0.5"
														stroke="currentColor"
														strokeDasharray="2 2"
													/>
													<path
														d="M40 110 L280 110"
														strokeWidth="0.5"
														stroke="currentColor"
														strokeDasharray="2 2"
													/>
													<path
														d="M40 150 L280 150"
														strokeWidth="0.5"
														stroke="currentColor"
														strokeDasharray="2 2"
													/>
												</g>

												<g>
													<rect
														x="45"
														y="95"
														width="10"
														height="85"
														fill="url(#barGradient1)"
														rx="2"
													/>
													<rect
														x="85"
														y="85"
														width="10"
														height="95"
														fill="url(#barGradient1)"
														rx="2"
													/>
													<rect
														x="125"
														y="75"
														width="10"
														height="105"
														fill="url(#barGradient1)"
														rx="2"
													/>
													<rect
														x="165"
														y="65"
														width="10"
														height="115"
														fill="url(#barGradient1)"
														rx="2"
													/>
													<rect
														x="205"
														y="55"
														width="10"
														height="125"
														fill="url(#barGradient1)"
														rx="2"
													/>
													<rect
														x="245"
														y="45"
														width="10"
														height="135"
														fill="url(#barGradient1)"
														rx="2"
													/>

													<rect
														x="57"
														y="105"
														width="10"
														height="75"
														fill="url(#barGradient2)"
														rx="2"
													/>
													<rect
														x="97"
														y="95"
														width="10"
														height="85"
														fill="url(#barGradient2)"
														rx="2"
													/>
													<rect
														x="137"
														y="85"
														width="10"
														height="95"
														fill="url(#barGradient2)"
														rx="2"
													/>
													<rect
														x="177"
														y="75"
														width="10"
														height="105"
														fill="url(#barGradient2)"
														rx="2"
													/>
													<rect
														x="217"
														y="65"
														width="10"
														height="115"
														fill="url(#barGradient2)"
														rx="2"
													/>
													<rect
														x="257"
														y="55"
														width="10"
														height="125"
														fill="url(#barGradient2)"
														rx="2"
													/>
												</g>

												<line
													x1="40"
													y1="180"
													x2="280"
													y2="180"
													stroke="currentColor"
													strokeWidth="1"
													className="text-gray-300 dark:text-gray-700"
												/>
											</svg>

											<div className="absolute bottom-[-20px] left-[40px] right-[20px] flex justify-between text-xs text-gray-400 dark:text-gray-500">
												<span className="font-medium">Mar</span>
												<span className="font-medium">May</span>
												<span className="font-medium">Jul</span>
												<span className="font-medium">Sep</span>
												<span className="font-medium">Nov</span>
												<span className="font-medium">Jan</span>
											</div>
										</div>
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
