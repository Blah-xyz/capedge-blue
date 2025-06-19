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

const products = [
  {
    title: "Analytics Dashboard",
    href: "/products/analytics",
    description: "Advanced analytics and reporting tools for your business.",
    featured: true,
  },
  {
    title: "CRM Platform",
    href: "/products/crm",
    description: "Complete customer relationship management solution.",
    featured: false,
  },
  {
    title: "E-commerce Suite",
    href: "/products/ecommerce",
    description: "Full-featured online store and inventory management.",
    featured: true,
  },
  {
    title: "Marketing Automation",
    href: "/products/marketing",
    description: "Streamline your marketing campaigns and workflows.",
    featured: false,
  },
  {
    title: "Project Management",
    href: "/products/projects",
    description: "Collaborate and manage projects with your team.",
    featured: false,
  },
  {
    title: "API Platform",
    href: "/products/api",
    description: "Robust APIs for developers and integrations.",
    featured: false,
  },
]

const solutions = [
  {
    title: "For Startups",
    href: "/solutions/startups",
    description: "Scale your startup with our comprehensive toolkit.",
  },
  {
    title: "For Enterprise",
    href: "/solutions/enterprise",
    description: "Enterprise-grade solutions for large organizations.",
  },
  {
    title: "For Developers",
    href: "/solutions/developers",
    description: "Developer-first tools and APIs.",
  },
  {
    title: "For E-commerce",
    href: "/solutions/ecommerce",
    description: "Complete e-commerce solutions and integrations.",
  },
]

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Comprehensive guides and API references.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest news, updates, and industry insights.",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Success stories from our customers.",
  },
  {
    title: "Help Center",
    href: "/help",
    description: "Get support and find answers to common questions.",
  },
  {
    title: "Community",
    href: "/community",
    description: "Connect with other users and developers.",
  },
  {
    title: "Webinars",
    href: "/webinars",
    description: "Join our live sessions and workshops.",
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
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="hidden font-bold sm:inline-block">Acme Corp</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Products Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[700px] lg:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium leading-none mb-3">Featured Products</h4>
                    <ul className="space-y-2">
                      {products
                        .filter((product) => product.featured)
                        .map((product) => (
                          <ListItem
                            key={product.title}
                            title={product.title}
                            href={product.href}
                            featured={product.featured}
                          >
                            {product.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium leading-none mb-3">All Products</h4>
                    <ul className="space-y-2">
                      {products
                        .filter((product) => !product.featured)
                        .map((product) => (
                          <ListItem key={product.title} title={product.title} href={product.href}>
                            {product.description}
                          </ListItem>
                        ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Solutions Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  {solutions.map((solution) => (
                    <ListItem key={solution.title} title={solution.title} href={solution.href}>
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                  {resources.map((resource) => (
                    <ListItem key={resource.title} title={resource.title} href={resource.href}>
                      {resource.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Links */}
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Logo */}
        <div className="flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-bold">Acme</span>
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
                      <span className="text-primary-foreground font-bold text-sm">A</span>
                    </div>
                    <span className="font-bold">Acme Corp</span>
                  </div>
                  <ThemeToggle />
                </div>

                {/* Mobile Products */}
                <div className="space-y-3">
                  <h4 className="font-medium">Products</h4>
                  <div className="space-y-2 pl-4">
                    {products.map((product) => (
                      <Link
                        key={product.title}
                        href={product.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Solutions */}
                <div className="space-y-3">
                  <h4 className="font-medium">Solutions</h4>
                  <div className="space-y-2 pl-4">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.title}
                        href={solution.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Resources */}
                <div className="space-y-3">
                  <h4 className="font-medium">Resources</h4>
                  <div className="space-y-2 pl-4">
                    {resources.map((resource) => (
                      <Link
                        key={resource.title}
                        href={resource.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {resource.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/pricing" className="font-medium hover:text-primary transition-colors">
                  Pricing
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
