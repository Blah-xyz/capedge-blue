import Link from "next/link"
import { Twitter, Linkedin, Facebook } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="border-t bg-white dark:bg-background py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          <div>
            <Link href="/" className="text-xl font-bold">
              CapEdge Group
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Private investment firm focused on enterprise software and strategic partnerships.
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-gray-900 dark:text-white">
                Investment Focus
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Financial Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  B2B Platforms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-gray-900 dark:text-white">
                Company
              </li>
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Investment Approach
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="font-semibold text-gray-900 dark:text-white">
                Resources
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Industry Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CapEdge Group. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">Follow us on</div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
