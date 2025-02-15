"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.form
          className="glass p-8 rounded-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-yellow-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 focus:border-yellow-400 transition-colors"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-yellow-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 focus:border-yellow-400 transition-colors"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-yellow-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 focus:border-yellow-400 transition-colors"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full glass py-3 rounded-lg text-lg font-semibold bg-yellow-500 hover:bg-yellow-400 text-purple-900 transition-colors pulse-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-400" />
                <p>advik@letvik.online</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-400" />
                <p>+91 7621012402</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <p>Letvik AI Solutions, Tech Hub, India</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Business Hours</h2>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p>Saturday: 10:00 AM - 2:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Quick Response</h2>
            <p className="text-gray-300">
              We typically respond within 24 hours. For immediate assistance, please call our support line.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

