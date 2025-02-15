"use client"

import { motion } from "framer-motion"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const marketData = [
  { year: 2022, value: 120, forecast: 120 },
  { year: 2023, value: 150, forecast: 150 },
  { year: 2024, value: null, forecast: 190 },
  { year: 2025, value: null, forecast: 240 },
  { year: 2026, value: null, forecast: 300 },
  { year: 2027, value: null, forecast: 370 },
]

const adoptionData = [
  { year: 2022, value: 35 },
  { year: 2023, value: 48 },
  { year: 2024, value: 65 },
  { year: 2025, value: 85 },
]

export default function MarketStats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">The Growing Impact of AI Automation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The AI automation market is experiencing unprecedented growth, transforming how businesses operate and
            interact with customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Global AI Market Size</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a103c",
                      border: "1px solid #ffffff20",
                      borderRadius: "8px",
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} />
                  <Area
                    type="monotone"
                    dataKey="forecast"
                    stroke="#4f46e5"
                    strokeDasharray="5 5"
                    fill="#4f46e5"
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center mt-4 text-gray-300">Market size in billion USD (2022-2027)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Business Adoption Rate</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a103c",
                      border: "1px solid #ffffff20",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={{ fill: "#4f46e5", r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center mt-4 text-gray-300">Percentage of businesses adopting AI automation</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="glass p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-4xl font-bold text-gradient mb-2">300%</h3>
            <p className="text-gray-300">Increase in AI adoption since 2020</p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-4xl font-bold text-gradient mb-2">40%</h3>
            <p className="text-gray-300">Average cost reduction with AI automation</p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-4xl font-bold text-gradient mb-2">24/7</h3>
            <p className="text-gray-300">Customer support availability</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

