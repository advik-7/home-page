import Link from "next/link"
import { Bot } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-gradient">Letvik</span>
            </Link>
            <p className="text-gray-400">
              Meta Verified Business Partner providing AI-driven solutions for customer engagement and workflow
              automation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: advik@letvik.online</li>
              <li className="text-gray-400">Phone: +91 7621012402</li>
              <li className="text-gray-400">Hours: Mon-Fri 9:00-18:00 IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="text-center text-gray-400">
            <p className="mb-2">&copy; {new Date().getFullYear()} Letvik. All rights reserved.</p>
            <p>Meta Verified Business Partner</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

