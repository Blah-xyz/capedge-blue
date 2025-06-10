"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Search, Brain, Target, Sparkles, CheckCircle } from "lucide-react";

export function InvestmentApproachSection() {
	return (
		<section id="investment-approach" className="relative overflow-hidden">
			{/* Main Header Section */}
			<div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
				{/* Subtle Floating Background Elements */}
				<div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"></div>

				<div className="container relative max-w-7xl mx-auto px-4">
					<div className="text-center max-w-4xl mx-auto">
						<AnimatedSection>
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
								<Sparkles className="w-4 h-4" />
								Investment Philosophy
							</div>

							<h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
								<span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-800 dark:from-white dark:via-blue-400 dark:to-slate-200 bg-clip-text text-transparent">
									Our Investment Approach
								</span>
							</h2>

							<p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">

							</p>
						</AnimatedSection>
					</div>
				</div>
			</div>

			{/* DEEPEN Section - Light background with blue accents */}
			<div className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 overflow-hidden">
				{/* Subtle Geometric Background Elements */}
				<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
				<div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 rotate-45 rounded-2xl"></div>
				<div className="absolute top-40 right-20 w-20 h-20 bg-blue-500/10 rotate-12 rounded-xl"></div>

				<div className="container relative max-w-7xl mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Content */}
						<AnimatedSection className="text-left">
							<div className="flex items-center gap-4 mb-8">
								<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
									<Search className="w-8 h-8 text-white" />
								</div>
								<div>
									<h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">DEEPEN</h3>
									<p className="text-blue-600 dark:text-blue-400 text-lg font-medium">Knowledge & Understanding</p>
								</div>
							</div>

							<p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
								We stay ahead of emerging trends
								and market dynamics by.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Comprehensive market research",
									"Technology trend analysis",
									"Industry expertise development",
									"Competitive landscape mapping"
								].map((feature, index) => (
									<div key={index} className="flex items-center gap-3">
										<CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
										<span className="text-slate-600 dark:text-slate-300">{feature}</span>
									</div>
								))}
							</div>
						</AnimatedSection>

						{/* Visual Element */}
						{/* <AnimatedSection delay={0.2} direction="right">
							<div className="relative">
								<div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-blue-600/5">
									<div className="space-y-6">
										<div className="flex items-center justify-between">
											<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
												<TrendingUp className="w-6 h-6 text-white" />
											</div>
											<div className="text-right">
												<div className="text-2xl font-bold text-slate-900 dark:text-white">Market Analysis</div>
												<div className="text-slate-600 dark:text-slate-400">Real-time insights</div>
											</div>
										</div>

										<div className="space-y-4">
											{["Enterprise Software", "Financial Services", "Technology Trends"].map((item, index) => (
												<div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/50">
													<span className="text-slate-800 dark:text-slate-200 font-medium">{item}</span>
													<div className="w-16 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
														<div
															className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
															style={{ width: `${85 + index * 5}%` }}
														></div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</AnimatedSection> */}
					</div>
				</div>
			</div>

			{/* UNDERSTAND Section - Slate background with blue accents */}
			<div className="relative bg-gradient-to-l from-slate-100 via-slate-200 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 py-24 overflow-hidden">
				{/* Subtle Wave Background Elements */}
				<div className="absolute bottom-0 left-0 w-full  opacity-5">
					<svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
						<path d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z" fill="currentColor" className="text-blue-600"/>
						<path d="M0,150 Q300,100 600,150 T1200,150 L1200,400 L0,400 Z" fill="currentColor" className="text-blue-500"/>
					</svg>
				</div>
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

				<div className="container relative max-w-7xl mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Visual Element */}
						{/* <AnimatedSection delay={0.1} direction="left">
							<div className="relative lg:order-1">
								<div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-blue-600/5">
									<div className="space-y-6">
										<div className="text-center mb-6">
											<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/25">
												<Brain className="w-8 h-8 text-white" />
											</div>
											<div className="text-2xl font-bold text-slate-900 dark:text-white">Challenge Assessment</div>
											<div className="text-slate-600 dark:text-slate-400">Operational insights</div>
										</div>

										<div className="grid grid-cols-2 gap-4">
											{[
												{ label: "Process Analysis", value: "92%" },
												{ label: "Gap Identification", value: "88%" },
												{ label: "Optimization", value: "95%" },
												{ label: "Strategic Mapping", value: "90%" }
											].map((metric, index) => (
												<div key={index} className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/50">
													<div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{metric.value}</div>
													<div className="text-slate-600 dark:text-slate-400 text-sm">{metric.label}</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</AnimatedSection> */}

						{/* Content */}
						<AnimatedSection className="text-left lg:order-2">
							<div className="flex items-center gap-4 mb-8">
								<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
									<Brain className="w-8 h-8 text-white" />
								</div>
								<div>
									<h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">UNDERSTAND</h3>
									<p className="text-blue-600 dark:text-blue-400 text-lg font-medium">Operational Challenges</p>
								</div>
							</div>

							<p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
								We understand the most prominent operational challenges facing organizations, identifying pain points
								and opportunities for transformational solutions.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Operational challenge assessment",
									"Process optimization analysis",
									"Technology gap identification",
									"Strategic opportunity mapping"
								].map((feature, index) => (
									<div key={index} className="flex items-center gap-3">
										<CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
										<span className="text-slate-600 dark:text-slate-300">{feature}</span>
									</div>
								))}
							</div>
						</AnimatedSection>
					</div>
				</div>
			</div>

			{/* INVEST Section - White background with blue accents */}
			<div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 overflow-hidden">
				{/* Subtle Floating Background Elements */}
				<div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500/5 rounded-2xl rotate-12 blur-sm"></div>
				<div className="absolute bottom-20 right-1/4 w-24 h-24 bg-blue-600/10 rounded-xl rotate-45"></div>
				<div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-500/5 rounded-full"></div>
				<div className="absolute top-1/3 right-10 w-20 h-20 bg-blue-600/5 rounded-2xl rotate-45"></div>

				<div className="container relative max-w-7xl mx-auto px-4">
					<div className="text-center max-w-4xl mx-auto">
						{/* Header */}
						<AnimatedSection>
							<div className="flex items-center justify-center gap-4 mb-8">
								<div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-600/25">
									<Target className="w-10 h-10 text-white" />
								</div>
								<div className="text-left">
									<h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">INVEST</h3>
									<p className="text-blue-600 dark:text-blue-400 text-xl font-medium">Promising Solutions</p>
								</div>
							</div>

							<p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
								We invest in businesses that offer solutions through promising technologies, services, talent, and values,
								 where financial services is core and technology can be transformational.
							</p>
						</AnimatedSection>

						{/* Investment Focus Cards */}
						{/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
							{[
								{
									icon: Target,
									title: "Strategic Decisions",
									description: "Data-driven investment choices"
								},
								{
									icon: Zap,
									title: "Technology Solutions",
									description: "Innovation-focused platforms"
								},
								{
									icon: Lightbulb,
									title: "Talent Alignment",
									description: "Value-driven partnerships"
								},
								{
									icon: TrendingUp,
									title: "Impact Focus",
									description: "Transformational outcomes"
								}
							].map((card, index) => {
								const Icon = card.icon;
								return (
									<AnimatedCard key={index} delay={0.1 + index * 0.1}>
										<div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:border-blue-300/50 dark:hover:border-blue-600/50 shadow-xl hover:shadow-blue-600/10">
											<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/25">
												<Icon className="w-6 h-6 text-white" />
											</div>
											<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
											<p className="text-slate-600 dark:text-slate-400 text-sm">{card.description}</p>
										</div>
									</AnimatedCard>
								);
							})}
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
