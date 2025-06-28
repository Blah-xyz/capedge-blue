"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Building2, TrendingUp, Users, BookOpen, ArrowRight, Target, Handshake, BarChart3, Zap, Info, Lightbulb, Briefcase, Shield, Layers, Database, CreditCard, Globe, FileText, Newspaper, Library, Package } from "lucide-react"
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

// Investment Focus Areas
const investmentFocus = [
  {
    title: "Enterprise Software",
    href: "#portfolio",
    description: "Strategic investments in transformational enterprise software platforms.",
    icon: Building2,
  },
  {
    title: "Platform Businesses",
    href: "#platform-businesses",
    description: "Scalable technology platforms with global market potential.",
    icon: TrendingUp,
  },
  {
    title: "Financial Services",
    href: "#portfolio",
    description: "Technology-driven financial services and fintech solutions.",
    icon: Users,
  },
]

// Investment Strategy
const investmentStrategy = [
  {
    title: "Growth Capital",
    href: "#investment-approach",
    description: "Capital for expanding technology companies and market leaders.",
    icon: Target,
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Strategic Partnerships",
    href: "#about",
    description: "Long-term partnerships beyond capital with operational guidance.",
    icon: Handshake,
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Market Transformation",
    href: "#why-us",
    description: "Investments that reshape key markets through innovation.",
    icon: BarChart3,
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Value Creation",
    href: "#why-us",
    description: "Building transformational technology platforms that scale globally.",
    icon: Zap,
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
]

// Company Information
const companyInfo = [
  {
    title: "About CapEdge",
    href: "#about",
    description: "Learn about our mission to build the future of enterprise software.",
    icon: Info,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Investment Philosophy",
    href: "#investment-approach",
    description: "Our three-step approach: Deepen, Understand, Invest.",
    icon: Lightbulb,
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
    description: "Explore our successful investments and platform businesses.",
    icon: Briefcase,
    iconColor: "text-slate-600 dark:text-slate-400",
  },
  {
    title: "Why CapEdge",
    href: "#why-us",
    description: "Technology excellence and our track record of success.",
    icon: Shield,
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

// Solutions for Different Audiences
const solutions = [
  {
    title: "Entrepreneurs",
    href: "#about",
    description: "Partnership and capital for scaling your enterprise platform.",
    icon: Lightbulb,
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    title: "Investors",
    href: "/products",
    description: "Investment opportunities in enterprise software and platforms.",
    icon: TrendingUp,
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Platform Owners",
    href: "#platform-businesses",
    description: "Strategic guidance for technology platform businesses.",
    icon: Layers,
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Enterprise Leaders",
    href: "#portfolio",
    description: "Transformational software solutions for enterprise growth.",
    icon: Building2,
    iconColor: "text-gray-600 dark:text-gray-400",
  },
]

// Resources & Content
const resources = [
  {
    title: "Investment Insights",
    href: "/insights",
    description: "Market analysis, research reports, and thought leadership content.",
    featured: true,
    icon: BarChart3,
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "News & Updates",
    href: "/news",
    description: "Latest company announcements, press releases, and industry news.",
    featured: true,
    icon: Newspaper,
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    title: "Resource Center",
    href: "/resources",
    description: "Complete library of guides, research, tools, and case studies.",
    featured: false,
    icon: Library,
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    title: "Investment Products",
    href: "/products",
    description: "Comprehensive overview of our investment funds and solutions.",
    featured: false,
    icon: Package,
    iconColor: "text-orange-600 dark:text-orange-400",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    featured?: boolean
    icon?: React.ComponentType<{ className?: string }>
    iconColor?: string
  }
>(({ className, title, children, featured, icon: Icon, iconColor, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            featured && "bg-gradient-to-r from-blue-50 to-blue-25 dark:from-blue-950/50 dark:to-blue-900/25 border border-blue-200 dark:border-blue-800",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex-shrink-0">
                <Icon className={`h-4 w-4 ${iconColor || "text-blue-600 dark:text-blue-400"}`} />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium leading-none text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {title}
                </div>
                {featured && (
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
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
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex h-14 items-center justify-between bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-blue-100 dark:border-blue-900/50 rounded-full px-6 shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="hidden font-bold sm:inline-block text-foreground">CapEdge Group</span>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-1">
            {/* Investments Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium rounded-full px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200">
                Investments
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <div className="grid gap-6 p-6 w-[800px] lg:grid-cols-3">
                  {/* Focus Areas */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold leading-none text-foreground uppercase tracking-wide">
                      FOCUS AREAS
                    </h4>
                    <ul className="space-y-1">
                      {investmentFocus.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          icon={item.icon}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>

                  {/* Investment Strategy */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold leading-none text-foreground uppercase tracking-wide">
                      STRATEGY
                    </h4>
                    <ul className="space-y-1">
                      {investmentStrategy.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} iconColor={item.iconColor}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold leading-none text-foreground uppercase tracking-wide">
                      SOLUTIONS
                    </h4>
                    <ul className="space-y-1">
                      {solutions.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} iconColor={item.iconColor}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="border-t bg-muted/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Ready to Partner?</p>
                        <p className="text-xs text-muted-foreground">Connect with our investment team</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Get Started
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Company Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium rounded-full px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <ul className="grid gap-3 p-6 w-[400px] lg:grid-cols-1">
                  {companyInfo.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon} iconColor={item.iconColor}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Products Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium rounded-full px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <ul className="grid gap-3 p-6 w-[400px] lg:grid-cols-1">
                  <ListItem title="Investment Products" href="/products" icon={Package} iconColor="text-orange-600 dark:text-orange-400">
                    Comprehensive overview of our investment funds and solutions.
                  </ListItem>
                  <ListItem title="Enterprise Platforms" href="/products#platforms" icon={Layers} iconColor="text-indigo-600 dark:text-indigo-400">
                    Cutting-edge software platforms for business growth.
                  </ListItem>
                  <ListItem title="Financial Services" href="/products#financial" icon={CreditCard} iconColor="text-green-600 dark:text-green-400">
                    Technology-driven financial services and fintech solutions.
                  </ListItem>
                  <ListItem title="Platform Businesses" href="/products#businesses" icon={Globe} iconColor="text-blue-600 dark:text-blue-400">
                    Scalable technology platforms with global market potential.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium rounded-full px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2">
                <div className="grid gap-6 p-6 w-[500px] lg:grid-cols-1">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold leading-none text-foreground uppercase tracking-wide">
                      LATEST CONTENT
                    </h4>
                    <ul className="space-y-1">
                      {resources
                        .filter((resource) => resource.featured)
                        .map((resource) => (
                          <ListItem
                            key={resource.title}
                            title={resource.title}
                            href={resource.href}
                            featured={resource.featured}
                            icon={resource.icon}
                            iconColor={resource.iconColor}
                          >
                            {resource.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold leading-none text-foreground uppercase tracking-wide">
                      INVESTMENT INFO
                    </h4>
                    <ul className="space-y-1">
                      {resources
                        .filter((resource) => !resource.featured)
                        .map((resource) => (
                          <ListItem key={resource.title} title={resource.title} href={resource.href} icon={resource.icon} iconColor={resource.iconColor}>
                            {resource.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link href="#contact">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 shadow-md hover:shadow-lg transition-all duration-200">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="h-9 w-9 px-0 lg:hidden rounded-full">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-full max-w-full p-0 bg-white dark:bg-slate-900">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900 dark:text-blue-100">CapEdge Group</h2>
                      <p className="text-xs text-blue-600 dark:text-blue-400">Investment Excellence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                        <span className="text-lg">×</span>
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-8">
                    {/* Mobile CTA Button */}
                    <div className="mb-6">
                      <SheetTrigger asChild>
                        <Link href="#contact">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                            Get Started
                          </Button>
                        </Link>
                      </SheetTrigger>
                    </div>

                    {/* Navigation Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Mobile Investments */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b border-blue-100 dark:border-blue-900 pb-2">
                          Investments
                        </h4>
                        <div className="space-y-3">
                          {investmentFocus.map((item) => (
                            <SheetTrigger key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200 group"
                              >
                                {item.icon && <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                                <div>
                                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                  </div>
                                  <div className="text-xs text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            </SheetTrigger>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Products */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b border-blue-100 dark:border-blue-900 pb-2">
                          Products
                        </h4>
                        <div className="space-y-3">
                          <SheetTrigger asChild>
                            <Link
                              href="/products"
                              className="block p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200 group"
                            >
                              <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                Investment Products
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                Comprehensive overview of our investment funds and solutions
                              </div>
                            </Link>
                          </SheetTrigger>
                          <SheetTrigger asChild>
                            <Link
                              href="/products#platforms"
                              className="block p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200 group"
                            >
                              <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                Enterprise Platforms
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                Cutting-edge software platforms for business growth
                              </div>
                            </Link>
                          </SheetTrigger>
                        </div>
                      </div>

                      {/* Mobile Company */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b border-blue-100 dark:border-blue-900 pb-2">
                          Company
                        </h4>
                        <div className="space-y-3">
                          {companyInfo.slice(0, 4).map((item) => (
                            <SheetTrigger key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
                              >
                                <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                  {item.description}
                                </div>
                              </Link>
                            </SheetTrigger>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Resources */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b border-blue-100 dark:border-blue-900 pb-2">
                          Resources
                        </h4>
                        <div className="space-y-3">
                          {resources.map((item) => (
                            <SheetTrigger key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                  </div>
                                  {item.featured && (
                                    <Badge className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                  {item.description}
                                </div>
                              </Link>
                            </SheetTrigger>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Solutions */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b border-blue-100 dark:border-blue-900 pb-2">
                          Solutions
                        </h4>
                        <div className="space-y-3">
                          {solutions.map((item) => (
                            <SheetTrigger key={item.title} asChild>
                              <Link
                                href={item.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
                              >
                                <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                  {item.description}
                                </div>
                              </Link>
                            </SheetTrigger>
                          ))}
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="border-t bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50 p-6">
                  <div className="text-center">
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                      Ready to transform your business?
                    </p>
                    <SheetTrigger asChild>
                      <Link href="#contact">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                          Start Your Journey
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </SheetTrigger>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  )
}
