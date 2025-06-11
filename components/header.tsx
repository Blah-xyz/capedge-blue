"use client";

import { AnimatedButton } from "@/components/animated-button";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/contexts/contact-dialog-context";
import { Anchor, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { setIsOpen } = useContactDialog();

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setMobileMenuOpen(false);
		}
	};

	const menuItems = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#investment-approach", label: "Investment Approach" },
		{ href: "#portfolio", label: "Portfolio" },
		{ href: "#why-us", label: "Why CapEdge" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b border-blue-200/30 dark:border-slate-700/30 bg-gradient-to-br from-blue-100/95 via-blue-50/95 to-blue-100/95 dark:from-slate-900/95 dark:via-slate-800/95 dark:to-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-br supports-[backdrop-filter]:from-blue-100/60 supports-[backdrop-filter]:via-blue-50/60 supports-[backdrop-filter]:to-blue-100/60 dark:supports-[backdrop-filter]:from-slate-900/60 dark:supports-[backdrop-filter]:via-slate-800/60 dark:supports-[backdrop-filter]:to-slate-900/60">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-sm">CG</span>
						</div>
						<span className="text-xl font-display font-bold text-gray-900 dark:text-white">
							CapEdge Group
						</span>
					</div>
					<nav className="hidden md:flex gap-6">
						{menuItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={(e) => handleClick(e, item.href)}
								className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-2">
						<AnimatedButton
							className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
							onClick={() => setIsOpen(true)}
						>
							Get in Touch
						</AnimatedButton>
						<Button
							variant="outline"
							size="icon"
							className="md:hidden"
							onClick={toggleMobileMenu}
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>
			</header>
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				menuItems={menuItems}
			/>
		</>
	);
}
