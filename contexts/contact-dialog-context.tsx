"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

interface ContactDialogContextType {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

const ContactDialogContext = createContext<
	ContactDialogContextType | undefined
>(undefined);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ContactDialogContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ContactDialogContext.Provider>
	);
}

export function useContactDialog() {
	const context = useContext(ContactDialogContext);
	if (context === undefined) {
		throw new Error(
			"useContactDialog must be used within a ContactDialogProvider",
		);
	}
	return context;
}
