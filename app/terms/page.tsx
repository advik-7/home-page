"use client"

import { motion } from "framer-motion"

export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Terms of Service
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto glass p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-gradient">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By accessing and using Letvik's services, you accept and agree to be bound by the terms and provisions of
            this agreement.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gradient">2. Description of Service</h2>
          <p className="text-gray-300 mb-6">
            Letvik provides AI-powered automation services, including but not limited to chatbots, calling systems, and
            workflow automation solutions.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gradient">3. User Responsibilities</h2>
          <p className="text-gray-300 mb-6">Users are responsible for:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Maintaining the confidentiality of their account</li>
            <li>Using the service in compliance with all applicable laws</li>
            <li>Ensuring the accuracy of their business information</li>
            <li>Obtaining necessary consents for customer communication</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gradient">4. Service Modifications</h2>
          <p className="text-gray-300 mb-6">
            Letvik reserves the right to modify or discontinue the service with or without notice to the user.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gradient">5. Contact Information</h2>
          <p className="text-gray-300">
            For questions about these terms, please contact us at:{" "}
            <a href="mailto:advik@letvik.online" className="text-yellow-400 hover:text-yellow-300">
              advik@letvik.online
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

