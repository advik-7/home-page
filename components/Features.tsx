"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const features = [
  {
    title: "Smart Customer Support",
    description: "AI-powered customer service that never sleeps.",
    icon: "🤖",
  },
  {
    title: "Automated Calling System",
    description: "Intelligent outbound calls for efficient communication.",
    icon: "📞",
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights.",
    icon: "📊",
  },
  {
    title: "Process Automation",
    description: "Streamline your workflows with AI.",
    icon: "⚙️",
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Our Core Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`glass p-6 rounded-lg ${index === activeFeature ? "ring-2 ring-blue-400" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

