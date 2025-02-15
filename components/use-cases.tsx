"use client"

import { motion } from "framer-motion"
import { PhoneCall, Users, BarChart2, GraduationCap } from "lucide-react"

const useCases = [
  {
    icon: <PhoneCall className="h-6 w-6" />,
    title: "Sales & Lead Generation",
    description: "Automated outreach, lead qualification, and personalized follow-ups.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Customer Engagement",
    description: "Appointment setting, payment reminders, and customer reactivation campaigns.",
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Market Intelligence",
    description: "Automated surveys, customer feedback collection, and competitive analysis.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Training & Development",
    description: "Accelerated onboarding, continuous skill development, and performance benchmarking.",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Use Cases & Applications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="text-blue-500 mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

