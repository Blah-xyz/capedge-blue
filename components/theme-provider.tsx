"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 md:top-4 md:bottom-auto">
        <ThemeToggle />
      </div>
    </NextThemesProvider>
  )
}
