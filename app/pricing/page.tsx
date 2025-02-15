"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Pay As You Go",
    description: "Perfect for small businesses just getting started",
    price: "Starting at ₹5/conversation",
    features: [
      "No monthly commitment",
      "Pay only for what you use",
      "Basic chatbot features",
      "WhatsApp integration",
      "24/7 availability",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Monthly Packages",
    description: "Ideal for growing businesses with regular needs",
    price: "From ₹9,999/month",
    features: [
      "Unlimited conversations",
      "All platform integrations",
      "Advanced analytics",
      "Custom responses",
      "Priority support",
      "Training and onboarding",
    ],
    cta: "Choose Plan",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Custom Plans",
    description: "Tailored solutions for enterprise needs",
    price: "Contact for Pricing",
    features: [
      "Custom AI model training",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "SLA guarantees",
      "24/7 premium support",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
]

export default function Pricing() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Choose the perfect plan for your business needs
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`glass p-8 rounded-lg ${plan.highlighted ? "border-2 border-purple-500" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-300 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold text-gradient mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                plan.highlighted ? "bg-purple-600 hover:bg-purple-700" : "glass hover:bg-purple-700/50"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-xl text-gray-300 mb-4">All plans include our core features and 24/7 support</p>
        <p className="text-gradient font-semibold">Letvik is a Udhyam Registered Business</p>
      </motion.div>
    </div>
  )
}

