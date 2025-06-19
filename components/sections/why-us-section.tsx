"use client";

import { CheckCircle } from "lucide-react"

export function WhyUsSection() {
	return (
		<section
			id="why-us"
			className="relative bg-gradient-to-br from-slate-50 via-rose-50/20 to-white dark:from-slate-950 dark:via-rose-950/5 dark:to-slate-900 overflow-hidden flex items-center min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]"
			style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
		>
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-rose-100/15 dark:bg-rose-900/8 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-100/20 dark:bg-slate-800/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/10 dark:bg-blue-900/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container max-w-7xl mx-auto px-6 relative">
				{/* Hero-Style Layout */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Side - Hero Content */}
					<div className="space-y-8">
						{/* Hero Headline */}
						<div className="text-left">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
								Why Choose <span className="bg-gradient-to-r from-rose-600 via-red-600 to-slate-700 bg-clip-text text-transparent">CapEdge</span>?
							</h1>
							<p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
								We don't just invest in companies—we build lasting partnerships that drive exponential growth in financial services and enterprise software.
							</p>
						</div>

						{/* Key Value Props */}
						<div className="space-y-4">
							<div className="flex items-start gap-3 group/item">
								<CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
								<span className="text-lg text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">Hands-on strategic partnership approach</span>
							</div>
							<div className="flex items-start gap-3 group/item">
								<CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
								<span className="text-lg text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">Deep expertise in in financial services, tax compliance, business operations, and enterprise
								software</span>
							</div>
							<div className="flex items-start gap-3 group/item">
								<CheckCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
								<span className="text-lg text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors duration-200">Proven track record </span>
							</div>
						</div>

						{/* Action Button */}
						<div className="pt-4">
							<button className="group relative px-8 py-4 bg-transparent border-2 border-rose-600 text-rose-600 dark:text-rose-400 font-semibold text-lg rounded-full shadow-lg shadow-rose-200/20 dark:shadow-rose-900/10 hover:bg-rose-600 hover:text-white transform hover:scale-105 transition-all duration-300">
								<span className="relative z-10">Partner With Us</span>
							</button>
						</div>
					</div>

					{/* Right Side - Stats Dashboard with Overflowing Card */}
					<div className="relative">
						{/* Overflowing Bouncing Card - Top Position */}
						<div className="absolute -top-8 -right-8 bg-slate-100 dark:bg-slate-200 rounded-xl p-6 shadow-2xl shadow-slate-400/20 dark:shadow-slate-600/30 text-slate-900 transform rotate-6 hover:rotate-3 transition-transform duration-500 z-10" style={{animation: 'bounce 3s infinite'}}>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-slate-900/10 rounded-lg flex items-center justify-center">
									<svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<div className="text-2xl font-bold">98%</div>
									<p className="text-sm opacity-70">Success Rate</p>
								</div>
							</div>
						</div>

						{/* Main Stats Dashboard */}
						<div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/40 rounded-2xl p-8 shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20 relative overflow-visible">
							<div className="space-y-6">
								{/* Dashboard Header */}
								<div className="mb-8">
									<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
										Performance Dashboard
									</h3>
									<p className="text-slate-600 dark:text-slate-400">
										Real-time investment metrics
									</p>
								</div>

								{/* Progress Metrics */}
								<div className="space-y-6">
									{/* Portfolio Growth */}
									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<span className="text-slate-700 dark:text-slate-300 font-semibold">Portfolio Growth</span>
											<span className="text-2xl font-bold text-rose-600 dark:text-rose-400">+150%</span>
										</div>
												<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
											<div className="bg-rose-500 h-1 rounded-full shadow-sm animate-pulse" style={{width: '85%'}}></div>
										</div>
									</div>

									{/* Enterprise Focus */}
									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<span className="text-slate-700 dark:text-slate-300 font-semibold">Enterprise Focus</span>
											<span className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</span>
										</div>
										<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
											<div className="bg-blue-500 h-1 rounded-full shadow-sm" style={{width: '100%'}}></div>
										</div>
									</div>

									{/* Active Partnerships */}
									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<span className="text-slate-700 dark:text-slate-300 font-semibold">Active Partnerships</span>
											<span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">12</span>
										</div>
										<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
											<div className="bg-emerald-500 h-1 rounded-full shadow-sm" style={{width: '75%'}}></div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
