"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation, useReducedMotion } from "@/hooks/use-animation-hook"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function AnimatedSection({ children, className, delay = 0, direction = "up" }: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation(0.15)
  const prefersReducedMotion = useReducedMotion()

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 50 }
      case "down":
        return { y: -50 }
      case "left":
        return { x: 50 }
      case "right":
        return { x: -50 }
      case "none":
        return {}
      default:
        return { y: 50 }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
