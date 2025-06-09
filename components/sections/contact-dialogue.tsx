"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useContactDialog } from "@/contexts/contact-dialog-context";
import { Mail, ArrowRight } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Counter } from "../Counter";

export default function ContactDialog() {
	const [email, setEmail] = useState("");
	const { isOpen, setIsOpen } = useContactDialog();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast({
			title: "Thank you!",
			description: "We've received your contact information. Our team will be in touch soon.",
			duration: 5000,
		});
		setIsOpen(false);
		setEmail("");
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="sm:max-w-md mx-auto my-4 sm:my-8 px-4 sm:px-6 border-0 shadow-xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
				<div className="text-center space-y-4">
					<DialogHeader>
						<DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
							Join Our Investment Network
						</DialogTitle>
						<DialogDescription className="text-gray-600 dark:text-gray-300 text-lg">
							Get exclusive access to Caribbean investment opportunities
						</DialogDescription>
					</DialogHeader>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="relative">
							<Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
							<Input
								type="email"
								placeholder="Enter your business email"
								className="pl-10 h-12 text-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white transition-all duration-200"
						>
							Get Started <ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</form>

					<div className="flex items-center justify-center gap-4 pt-4">
						<div className="flex -space-x-2">
							{[...Array(3)].map((_, i) => (
								<div
									key={i}
									className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800"
								/>
							))}
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Join <span className="font-bold"><Counter   suffix="+" target={200} /></span> investors already in our network
						</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
