"use client"

import { motion } from "framer-motion"
import { Bot, Zap, TrendingUp, Users, Shield, Globe } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: <Bot className="w-12 h-12 text-purple-400" />,
    title: "24/7 Customer Engagement",
    description: "Never miss a customer inquiry with round-the-clock automated responses",
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-400" />,
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and free up your team for strategic work",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-400" />,
    title: "Data-Driven Insights",
    description: "Make informed decisions with AI-powered analytics and reporting",
  },
  {
    icon: <Users className="w-12 h-12 text-yellow-400" />,
    title: "Personalized Experience",
    description: "Deliver customized interactions based on customer behavior and preferences",
  },
  {
    icon: <Shield className="w-12 h-12 text-red-400" />,
    title: "Secure Integration",
    description: "Enterprise-grade security for all your automation needs",
  },
  {
    icon: <Globe className="w-12 h-12 text-indigo-400" />,
    title: "Multi-Platform Support",
    description: "Seamless integration across all major social platforms",
  },
]

export default function AIBenefits() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">Why Choose AI Automation?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with cutting-edge AI technology that scales with your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="glass p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className="mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/demo"
            className="inline-block glass px-8 py-4 rounded-full text-white hover:bg-purple-700/50 transition-colors text-lg font-semibold"
          >
            Experience the Future of Automation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

