"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    description: "For small businesses starting with automation",
    price: "₹9,999",
    features: ["Automated Calling System", "Basic CRM features", "Standard reporting"],
  },
  {
    name: "Professional",
    description: "For growing businesses needing advanced features",
    price: "₹24,999",
    features: ["Complete CRM Automation", "Advanced analytics", "Multi-platform integration"],
  },
  {
    name: "Enterprise",
    description: "For large businesses requiring full AI capabilities",
    price: "Custom",
    features: [
      "All Professional features",
      "Objection Handler Pro",
      "Custom training modules",
      "Advanced analytics",
      "Priority support",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 mb-2">
                    <Check className="h-5 w-5 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

