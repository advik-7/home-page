"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function LaunchPromo() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Build Your Own <span className="text-gradient">Sales Agent</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8">Launching This March - Your AI-Powered Sales Team</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Matches Your Brand Tone",
                "Complete Customisation",
                "Follows Your Sales Strategy",
                "Fast Responses",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="glass p-4 rounded-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-sm md:text-base text-white">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/demo"
                    className="glass px-8 py-3 rounded-full text-white hover:bg-purple-700/50 transition-colors inline-block"
                  >
                    Try Demo
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="glass px-8 py-3 rounded-full text-white hover:bg-purple-700/50 transition-colors inline-block"
                  >
                    Contact Sales
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/letvik%20add%201-WjgtmE6a6HOA0ov8z0CSWRbKP6oWFq.png"
              alt="Letvik AI Launch"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

