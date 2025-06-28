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
import { Counter } from "../../Counter";

export default function ContactDialog() {
	const [email, setEmail] = useState("");
	const { isOpen, setIsOpen } = useContactDialog();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast({
			title: "Thank you for your interest!",
			description: "Our CapEdge Group investment team will be in touch within 24 hours.",
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
							Partner with CapEdge Group
						</DialogTitle>
						<DialogDescription className="text-gray-600 dark:text-gray-300 text-lg">
							Connect with our enterprise software investment experts
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
							Connect with Us <ArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</form>

					<div className="flex items-center justify-center gap-4 pt-4">
						<div className="flex -space-x-2">
							{[...Array(3)].map((_, i) => (
								<div
									key={i}
									className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white dark:border-gray-800 flex items-center justify-center"
								>
									<span className="text-white text-xs font-semibold">
										{i === 0 ? 'CE' : i === 1 ? 'ES' : 'AI'}
									</span>
								</div>
							))}
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Trusted by <span className="font-bold"><Counter suffix="+" target={25} /></span> enterprise software companies
						</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
