"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Privacy() {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto glass p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">
            For our complete privacy policy, please visit:{" "}
            <Link
              href="https://www.freeprivacypolicy.com/live/2b8a44b3-daeb-4220-b124-673229c6996e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              Letvik Privacy Policy
            </Link>
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gradient">Overview</h2>
          <p className="text-gray-300 mb-6">
            At Letvik, we take your privacy seriously. This privacy policy describes how we collect, use, and protect
            your personal information when you use our AI automation services.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gradient">Information We Collect</h2>
          <p className="text-gray-300 mb-6">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Contact information (name, email, phone number)</li>
            <li>Business information</li>
            <li>Communication preferences</li>
            <li>Chat history and interaction data</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gradient">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about our privacy policy, please contact us at:{" "}
            <a href="mailto:advik@letvik.online" className="text-yellow-400 hover:text-yellow-300">
              advik@letvik.online
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

