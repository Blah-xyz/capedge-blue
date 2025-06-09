"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-animation-hook"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  href?: string
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  href,
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <Button className={className} variant={variant} size={size} onClick={onClick} asChild={!!href}>
        {href ? <a href={href}>{children}</a> : children}
      </Button>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
      <Button
        className={cn("transition-all", className)}
        variant={variant}
        size={size}
        onClick={onClick}
        asChild={!!href}
      >
        {href ? <a href={href}>{children}</a> : children}
      </Button>
    </motion.div>
  )
}
