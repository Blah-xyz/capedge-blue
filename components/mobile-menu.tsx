"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-animation-hook"

interface MenuItem {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  menuItems: MenuItem[]
}

export function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted) return null

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm dark:bg-black/70"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-xl"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex h-16 items-center justify-between border-b px-6">
              <span className="text-lg font-display font-bold">Blue Water Equity</span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col p-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex h-12 items-center border-b border-muted px-2 text-base font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Get in Touch
              </Button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
