"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-animation-hook"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const prefersReducedMotion = useReducedMotion()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  }

  if (prefersReducedMotion) {
    return (
      <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 relative">
      <div className="relative h-[1.2rem] w-[1.2rem]">
        {theme === "dark" ? (
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={spring}
            className="absolute inset-0"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={spring}
            className="absolute inset-0"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
