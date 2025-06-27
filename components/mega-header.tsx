"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const investments = [
  {
    title: "Enterprise Software",
    href: "#portfolio",
    description: "Strategic investments in transformational enterprise software platforms.",
    featured: true,
  },
  {
    title: "Financial Services",
    href: "#portfolio",
    description: "Technology-driven financial services and fintech solutions.",
    featured: true,
  },
  {
    title: "Platform Businesses",
    href: "#platform-businesses",
    description: "Scalable technology platforms with global market potential.",
    featured: false,
  },
  {
    title: "Growth Capital",
    href: "#investment-approach",
    description: "Capital for expanding technology companies and market leaders.",
    featured: false,
  },
  {
    title: "Strategic Partnerships",
    href: "#about",
    description: "Long-term partnerships beyond capital with operational guidance.",
    featured: false,
  },
  {
    title: "Market Transformation",
    href: "#why-us",
    description: "Investments that reshape key markets through innovation.",
    featured: false,
  },
]

const approach = [
  {
    title: "Investment Philosophy",
    href: "#investment-approach",
    description: "Our three-step approach: Deepen, Understand, Invest.",
  },
  {
    title: "Due Diligence",
    href: "#investment-approach",
    description: "Thorough analysis with enterprise software market expertise.",
  },
  {
    title: "Partnership Model",
    href: "#about",
    description: "Active involvement in strategic decision-making and guidance.",
  },
  {
    title: "Value Creation",
    href: "#why-us",
    description: "Building transformational technology platforms that scale globally.",
  },
]

const company = [
  {
    title: "About CapEdge",
    href: "#about",
    description: "Learn about our mission to build the future of enterprise software.",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
    description: "Explore our successful investments and platform businesses.",
  },
  {
    title: "Platform Businesses",
    href: "#platform-businesses",
    description: "Next-generation enterprise solutions and business platforms.",
  },
  {
    title: "Why CapEdge",
    href: "#why-us",
    description: "Technology excellence and our track record of success.",
  },
  {
    title: "Contact Us",
    href: "#contact",
    description: "Partner with us to scale your enterprise platform.",
  },
]

const resources = [
  {
    title: "News & Updates",
    href: "/news",
    description: "Latest company announcements, press releases, and industry news.",
    featured: true,
  },
  {
    title: "Investment Insights",
    href: "/insights",
    description: "Market analysis, research reports, and thought leadership content.",
    featured: true,
  },
  {
    title: "Investment Products",
    href: "/products",
    description: "Comprehensive overview of our investment funds and solutions.",
    featured: false,
  },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { featured?: boolean }>(
  ({ className, title, children, featured, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              featured && "bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20",
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium leading-none">{title}</div>
              {featured && (
                <Badge variant="secondary" className="text-xs">
                  Popular
                </Badge>
              )}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-9 px-0"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function MegaHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="hidden font-bold sm:inline-block">CapEdge Group</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Investments Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Investments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[700px] lg:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium leading-none mb-3">Focus Areas</h4>
                    <ul className="space-y-2">
                      {investments
                        .filter((investment) => investment.featured)
                        .map((investment) => (
                          <ListItem
                            key={investment.title}
                            title={investment.title}
                            href={investment.href}
                            featured={investment.featured}
                          >
                            {investment.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium leading-none mb-3">Investment Strategy</h4>
                    <ul className="space-y-2">
                      {investments
                        .filter((investment) => !investment.featured)
                        .map((investment) => (
                          <ListItem key={investment.title} title={investment.title} href={investment.href}>
                            {investment.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Approach Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Approach</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  {approach.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Company Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  {company.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium leading-none mb-3">Latest Updates</h4>
                    <ul className="space-y-2">
                      {resources
                        .filter((resource) => resource.featured)
                        .map((resource) => (
                          <ListItem
                            key={resource.title}
                            title={resource.title}
                            href={resource.href}
                            featured={resource.featured}
                          >
                            {resource.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium leading-none mb-3">Investment Information</h4>
                    <ul className="space-y-2">
                      {resources
                        .filter((resource) => !resource.featured)
                        .map((resource) => (
                          <ListItem key={resource.title} title={resource.title} href={resource.href}>
                            {resource.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Links */}
            <NavigationMenuItem>
              <Link href="#portfolio" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Logo */}
        <div className="flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold">CapEdge</span>
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex flex-1 items-center justify-end">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="ml-2 h-9 w-9 px-0 lg:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">C</span>
                    </div>
                    <span className="font-bold">CapEdge Group</span>
                  </div>
                  <ThemeToggle />
                </div>

                {/* Mobile Investments */}
                <div className="space-y-3">
                  <h4 className="font-medium">Investments</h4>
                  <div className="space-y-2 pl-4">
                    {investments.slice(0, 4).map((investment) => (
                      <Link
                        key={investment.title}
                        href={investment.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {investment.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Approach */}
                <div className="space-y-3">
                  <h4 className="font-medium">Approach</h4>
                  <div className="space-y-2 pl-4">
                    {approach.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Company */}
                <div className="space-y-3">
                  <h4 className="font-medium">Company</h4>
                  <div className="space-y-2 pl-4">
                    {company.slice(0, 4).map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Resources */}
                <div className="space-y-3">
                  <h4 className="font-medium">Resources</h4>
                  <div className="space-y-2 pl-4">
                    {resources.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="#portfolio" className="font-medium hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
