import type React from "react";
import "@/app/globals.css";
import "@copilotkit/react-ui/styles.css";



import ContactDialog from "@/components/sections/contact-dialogue";
import { ThemeProvider } from "@/components/theme-provider";
import { ContactDialogProvider } from "@/contexts/contact-dialog-context";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { Toaster } from "@/components/ui/toaster"


// Replace the current font imports with these more distinctive options
import { Cormorant, Lexend, Outfit } from "next/font/google";

// Font for headings - elegant, distinctive with nautical associations
const cormorant = Cormorant({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
});

// Font for body text - modern, clean, highly readable
const lexend = Lexend({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export const metadata = {
	title: "Blue Water Equity Ltd - Caribbean Investment Family Office",
	description:
		"A family office focused on investments in startups & private equity in the Caribbean.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${cormorant.variable} ${outfit.variable} font-sans`}>
				<CopilotKit publicApiKey={process.env.COPILOT_CLOUD_PUBLIC_API_KEY}>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem={false}
						disableTransitionOnChange
					>
						<ContactDialogProvider>
							{children}
							<ContactDialog />
						</ContactDialogProvider>
					</ThemeProvider>
					<CopilotPopup />
				</CopilotKit>
				<Toaster />
			</body>
		</html>
	);
}
