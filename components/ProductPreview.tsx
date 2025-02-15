"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Bot, Phone, Zap, BarChart } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "Smart Customer Support",
    description: "AI assistant that talks like you",
    icon: <Bot className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    name: "AI-Powered Calling",
    description: "Smarter calls, better results",
    icon: <Phone className="w-8 h-8" />,
    color: "bg-green-500",
  },
  {
    name: "Workflow Automation",
    description: "Let AI handle repetitive tasks",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-yellow-500",
  },
  {
    name: "AI-Driven Analytics",
    description: "Turn data into insights",
    icon: <BarChart className="w-8 h-8" />,
    color: "bg-purple-500",
  },
]

export default function ProductPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gradient mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className={`${product.color} p-6 rounded-lg shadow-lg cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex items-center mb-4">
                {product.icon}
                <h3 className="text-xl font-semibold ml-2">{product.name}</h3>
              </div>
              <p className="text-sm mb-4">{product.description}</p>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/products" className="text-white font-semibold hover:underline">
                    Learn More
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

