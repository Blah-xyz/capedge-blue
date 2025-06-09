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
		{ href: "#why-us", label: "Why Us" },
		{ href: "#steps", label: "Steps" },
		{ href: "#mission", label: "Mission" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						<Anchor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
						<span className="text-xl font-display font-bold">
							Blue Water Equity
						</span>
					</div>
					<nav className="hidden md:flex gap-6">
						{menuItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={(e) => handleClick(e, item.href)}
								className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
