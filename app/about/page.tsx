"use client"

import { motion } from "framer-motion"
import { Shield, Award, MessageSquare, Clock, Bot } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Letvik
      </motion.h1>

      {/* Registration Status */}
      <motion.div
        className="glass p-8 rounded-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-6">
          <Award className="w-12 h-12 text-yellow-400 mr-4" />
          <h2 className="text-3xl font-bold text-gradient">Official Business Registration</h2>
        </div>
        <p className="text-center text-lg text-gray-300">
          Letvik is proudly registered under Udhyam Registration, demonstrating our commitment to legitimate and
          transparent business practices.
        </p>
      </motion.div>

      {/* Meta Verification Status */}
      <motion.div
        className="glass p-8 rounded-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-12 h-12 text-yellow-400 mr-4" />
          <h2 className="text-3xl font-bold text-gradient">Meta Verified Business Partner</h2>
        </div>
        <p className="text-center text-lg text-gray-300">
          As a verified Meta Business Partner, we're authorized to provide AI-powered chatbot solutions for WhatsApp,
          Instagram, and Facebook Messenger platforms.
        </p>
      </motion.div>

      {/* Chatbot Use Case */}
      <motion.div
        className="glass p-8 rounded-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <MessageSquare className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multi-Platform Integration</h3>
            <p className="text-gray-300">Seamless automation across WhatsApp, Instagram, and Facebook Messenger</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-300">Continuous customer engagement and support around the clock</p>
          </div>
          <div className="text-center">
            <Bot className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
            <p className="text-gray-300">Intelligent responses and lead generation optimization</p>
          </div>
        </div>
      </motion.div>

      {/* Demo Videos */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Demo Videos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-4 rounded-lg">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/WDwHKuGU6f4"
                title="Letvik Chatbot Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/nXXc6Kl9rdA"
                title="Letvik Chatbot Demo Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="glass p-8 rounded-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Business Contact Details</h2>
        <div className="text-center space-y-2">
          <p className="text-gray-300">Email: advik@letvik.online</p>
          <p className="text-gray-300">Phone: +91 7621012402</p>
        </div>
      </motion.div>
    </div>
  )
}

