"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Bot, Phone, Zap, BarChart } from "lucide-react"

const products = [
  {
    name: "Letvik's Smart Customer Support",
    description: "Your personal AI assistant that talks just like you would.",
    icon: <Bot className="w-12 h-12 text-yellow-400" />,
    launchDate: "Launching This March!",
    features: [
      "Speaks in your brand's voice",
      "Follows your sales playbook",
      "Works on Facebook, Instagram, and WhatsApp",
      "Available 24/7 to help customers",
      "Learns and improves over time",
    ],
    benefits: [
      "Faster response times for happier customers",
      "Consistent messaging across all platforms",
      "Frees up your team for more important tasks",
      "Increases sales by always being available",
    ],
  },
  {
    name: "AI-Powered Calling System",
    description: "Make smarter calls that get results.",
    icon: <Phone className="w-12 h-12 text-yellow-400" />,
    features: [
      "Automatically schedules the best time to call",
      "Understands and responds to customer tone",
      "Handles common questions and objections",
      "Seamlessly transfers to human agents when needed",
      "Works in multiple languages",
    ],
    benefits: [
      "Reach more customers in less time",
      "Improve call success rates",
      "Reduce training time for new sales reps",
      "Gather valuable insights from every call",
    ],
  },
  {
    name: "Workflow Automation",
    description: "Let AI handle your repetitive tasks.",
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    features: [
      "Automates data entry and processing",
      "Creates and sends personalized emails",
      "Manages appointment scheduling",
      "Generates reports automatically",
      "Integrates with your existing tools",
    ],
    benefits: [
      "Save hours on routine tasks",
      "Reduce errors in data handling",
      "Improve team productivity",
      "Focus on growth instead of busywork",
    ],
  },
  {
    name: "AI-Driven Analytics",
    description: "Turn your data into actionable insights.",
    icon: <BarChart className="w-12 h-12 text-yellow-400" />,
    features: [
      "Analyzes customer interactions across all channels",
      "Identifies trends and patterns in your data",
      "Predicts customer behavior and needs",
      "Provides easy-to-understand reports",
      "Offers real-time dashboards for quick decision-making",
    ],
    benefits: [
      "Make data-driven decisions with confidence",
      "Understand your customers better",
      "Spot opportunities for growth and improvement",
      "Measure and improve the effectiveness of your strategies",
    ],
  },
]

const AnimatedBox = () => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.div
      className="w-24 h-24 bg-[#4ff0b7] rounded-lg cursor-pointer"
      initial={{ scale: 0.4 }}
      animate={{ scale: isPressed ? 0.8 : 1 }}
      transition={{
        scale: { type: "spring", stiffness: isPressed ? 1000 : 500 },
        default: { ease: "circInOut", duration: 1 },
      }}
      whileHover={{ scale: 1.1 }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsPressed(true)
        }
      }}
      onKeyUp={() => setIsPressed(false)}
    />
  )
}

const ScrollSection = ({ children, color }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
    >
      <pre className={`text-5xl ${color}`}>{children}</pre>
    </motion.div>
  )
}

export default function Products() {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">Our Products</h1>
      <p className="text-xl text-center text-gray-300 mb-12">
        At Letvik, we create smart tools that help your business work better. Our products are like having extra team
        members who never sleep, always remember, and keep getting smarter.
      </p>

      <div className="flex justify-center space-x-4 mb-12">
        <AnimatedBox />
        <AnimatedBox />
        <AnimatedBox />
      </div>

      <div className="space-y-16">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            className="glass p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-6">
              {product.icon}
              <h2 className="text-3xl font-semibold ml-4">{product.name}</h2>
            </div>
            {product.launchDate && <p className="text-yellow-400 font-semibold mb-4">{product.launchDate}</p>}
            <p className="text-xl mb-6">{product.description}</p>
            <motion.button
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
              onClick={() => setExpandedProduct(expandedProduct === index ? null : index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {expandedProduct === index ? "Hide Details" : "Show Details"}
            </motion.button>
            <motion.div
              className="mt-6 grid gap-8 md:grid-cols-2"
              initial={false}
              animate={{ height: expandedProduct === index ? "auto" : 0, opacity: expandedProduct === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Benefits for Your Business</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <ScrollSection color="text-[#ff0088]">Scroll</ScrollSection>
      <ScrollSection color="text-[#dd00ee]">to</ScrollSection>
      <ScrollSection color="text-[#9911ff]">trigger</ScrollSection>
      <ScrollSection color="text-[#0d63f8]">animations!</ScrollSection>

      <div className="mt-16 text-center">
        <p className="text-2xl font-semibold text-gradient mb-4">At Letvik, We Automate, so You Can Innovate. 🚀</p>
        <p className="text-xl text-gray-300">
          Our AI-powered tools work together to make your business smarter, faster, and more efficient.
        </p>
      </div>
    </div>
  )
}

