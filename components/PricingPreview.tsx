"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PricingPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Flexible Pricing Options</h2>
          <p className="text-lg text-gray-300">Choose the plan that works best for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="glass p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Pay As You Go</h3>
            <p className="text-gray-300 mb-4">Perfect for small businesses just getting started</p>
            <Link
              href="/pricing"
              className="block text-center py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              View Pricing
            </Link>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-lg border-2 border-purple-500"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Monthly Packages</h3>
            <p className="text-gray-300 mb-4">Ideal for growing businesses with regular needs</p>
            <Link
              href="/pricing"
              className="block text-center py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              View Pricing
            </Link>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-2">Custom Plans</h3>
            <p className="text-gray-300 mb-4">Tailored solutions for enterprise needs</p>
            <Link
              href="/pricing"
              className="block text-center py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

