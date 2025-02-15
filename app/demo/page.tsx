"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function Demo() {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Try Our Demo
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto glass p-8 rounded-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gradient">Experience Our Chatbot</h2>
        <p className="text-gray-300 mb-8">
          Send a message like "Hello" to experience the chatbot in action. Our AI will respond instantly, demonstrating
          the capabilities of our automated customer interaction system.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="glass-card p-6 rounded-lg" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Facebook className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Facebook Demo</h3>
            <p className="text-gray-300 mb-4">Test our chatbot on Facebook Messenger</p>
            <Link
              href="https://www.facebook.com/profile.php?id=61571298513243"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Try Demo
            </Link>
          </motion.div>

          <motion.div className="glass-card p-6 rounded-lg" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Instagram className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram Demo</h3>
            <p className="text-gray-300 mb-4">Test our chatbot on Instagram DM</p>
            <Link
              href="https://www.instagram.com/_adv_k/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Try Demo
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gradient">How It Works</h2>
        <div className="glass p-8 rounded-lg">
          <p className="text-gray-300 leading-relaxed">
            Our chatbot automates customer interactions, lead generation, and support on WhatsApp, Instagram, and
            Facebook Messenger. It ensures 24/7 customer engagement, helps businesses streamline responses, and improves
            user experience. The AI-powered system learns from interactions to provide more accurate and helpful
            responses over time.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

